import Script from "next/script";

/* Consent Mode: Google tags start with storage denied unless the visitor accepted cookies earlier;
   CookieBanner sends the update when they choose. */

const GTM_ID = "GTM-KPGBKH9L";

export function GtmScript() {
  return (
    <>
      {/* Consent default goes first and costs nothing, so a banner choice can never arrive before it. */}
      <Script id="gtm-consent" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
var c=null;try{c=localStorage.getItem('cookie_consent');}catch(e){}
var g=(c==='granted'||c==='1')?'granted':'denied';
gtag('consent','default',{ad_storage:g,ad_user_data:g,ad_personalization:g,analytics_storage:g,wait_for_update:500});
dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});`}
      </Script>
      {/* The container itself (~300 KB) loads once the page is idle, so it never delays the first render. */}
      <Script id="gtm-script" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} />
    </>
  );
}

export function GtmNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
