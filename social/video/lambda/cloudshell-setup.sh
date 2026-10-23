# Remotion Lambda — one-time AWS setup for Advizen.
# Paste the whole block into AWS CloudShell (the >_ icon at the top of the AWS console).
# It creates the policy, role, user and access key that lambda/README.md describes,
# and asks AWS to raise the Lambda concurrency limit in ap-southeast-2 (Sydney).
# Safe to paste again: whatever already exists is left as it is.
(
set -e
cat > /tmp/remotion-role-policy.json <<'JSON'
{"Version":"2012-10-17","Statement":[{"Sid":"0","Effect":"Allow","Action":["s3:ListAllMyBuckets"],"Resource":["*"]},{"Sid":"1","Effect":"Allow","Action":["s3:CreateBucket","s3:ListBucket","s3:PutBucketAcl","s3:GetObject","s3:DeleteObject","s3:PutObjectAcl","s3:PutObject","s3:GetBucketLocation"],"Resource":["arn:aws:s3:::remotionlambda-*"]},{"Sid":"2","Effect":"Allow","Action":["lambda:InvokeFunction"],"Resource":["arn:aws:lambda:*:*:function:remotion-render-*"]},{"Sid":"3","Effect":"Allow","Action":["logs:CreateLogGroup"],"Resource":["arn:aws:logs:*:*:log-group:/aws/lambda-insights"]},{"Sid":"4","Effect":"Allow","Action":["logs:CreateLogStream","logs:PutLogEvents"],"Resource":["arn:aws:logs:*:*:log-group:/aws/lambda/remotion-render-*","arn:aws:logs:*:*:log-group:/aws/lambda-insights:*"]}]}
JSON
cat > /tmp/remotion-user-policy.json <<'JSON'
{"Version":"2012-10-17","Statement":[{"Sid":"HandleQuotas","Effect":"Allow","Action":["servicequotas:GetServiceQuota","servicequotas:GetAWSDefaultServiceQuota","servicequotas:RequestServiceQuotaIncrease","servicequotas:ListRequestedServiceQuotaChangeHistoryByQuota"],"Resource":["*"]},{"Sid":"PermissionValidation","Effect":"Allow","Action":["iam:SimulatePrincipalPolicy"],"Resource":["*"]},{"Sid":"LambdaInvokation","Effect":"Allow","Action":["iam:PassRole"],"Resource":["arn:aws:iam::*:role/remotion-lambda-role"]},{"Sid":"Storage","Effect":"Allow","Action":["s3:GetObject","s3:DeleteObject","s3:PutObjectAcl","s3:PutObject","s3:CreateBucket","s3:ListBucket","s3:GetBucketLocation","s3:PutBucketAcl","s3:DeleteBucket","s3:PutBucketOwnershipControls","s3:PutBucketPublicAccessBlock","s3:PutBucketPolicy","s3:PutLifecycleConfiguration"],"Resource":["arn:aws:s3:::remotionlambda-*"]},{"Sid":"BucketListing","Effect":"Allow","Action":["s3:ListAllMyBuckets"],"Resource":["*"]},{"Sid":"FunctionListing","Effect":"Allow","Action":["lambda:ListFunctions","lambda:GetFunction"],"Resource":["*"]},{"Sid":"FunctionManagement","Effect":"Allow","Action":["lambda:InvokeAsync","lambda:InvokeFunction","lambda:CreateFunction","lambda:DeleteFunction","lambda:PutFunctionEventInvokeConfig","lambda:PutRuntimeManagementConfig","lambda:TagResource"],"Resource":["arn:aws:lambda:*:*:function:remotion-render-*"]},{"Sid":"LogsRetention","Effect":"Allow","Action":["logs:CreateLogGroup","logs:PutRetentionPolicy"],"Resource":["arn:aws:logs:*:*:log-group:/aws/lambda/remotion-render-*"]},{"Sid":"FetchBinaries","Effect":"Allow","Action":["lambda:GetLayerVersion"],"Resource":["arn:aws:lambda:*:678892195805:layer:remotion-binaries-*","arn:aws:lambda:*:580247275435:layer:LambdaInsightsExtension*"]}]}
JSON
cat > /tmp/remotion-trust.json <<'JSON'
{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Principal":{"Service":"lambda.amazonaws.com"},"Action":"sts:AssumeRole"}]}
JSON
# Runs an aws command; "already exists" counts as done, any other error stops the script.
once() { out=$("$@" 2>&1) || { echo "$out" | grep -q EntityAlreadyExists || { echo "$out"; echo "Stopped: the step above failed."; exit 1; }; }; }
ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
once aws iam create-policy --policy-name remotion-lambda-policy --policy-document file:///tmp/remotion-role-policy.json
once aws iam create-role --role-name remotion-lambda-role --assume-role-policy-document file:///tmp/remotion-trust.json
aws iam attach-role-policy --role-name remotion-lambda-role --policy-arn arn:aws:iam::$ACCOUNT:policy/remotion-lambda-policy
once aws iam create-user --user-name remotion-user
aws iam put-user-policy --user-name remotion-user --policy-name remotion-user-policy --policy-document file:///tmp/remotion-user-policy.json
echo "Policy, role and user are ready."
aws service-quotas request-service-quota-increase --service-code lambda --quota-code L-B99A9384 --desired-value 1000 --region ap-southeast-2 >/dev/null 2>&1 && echo "Concurrency increase requested (ap-southeast-2, 1000)." || echo "Concurrency: no increase requested (already high, or ask in Service Quotas)."
echo
echo "Add these two to the Claude Code environment settings (not to the chat):"
aws iam create-access-key --user-name remotion-user --query 'AccessKey.[AccessKeyId,SecretAccessKey]' --output text | awk '{print "REMOTION_AWS_ACCESS_KEY_ID=" $1 "\nREMOTION_AWS_SECRET_ACCESS_KEY=" $2}'
)
