# Рендер на Remotion Lambda

Ролик режется на куски по 20 кадров, и каждый кусок рендерится отдельной
функцией AWS Lambda — параллельно. Вместо получаса на одном процессоре —
пара минут. Видеокарта не нужна.

Регион — `ap-southeast-2` (Сидней). Политика организации, в которую входит
аккаунт, разрешает Lambda только там; в остальных регионах — «explicit deny
in a service control policy». Скрипт — `scripts/lambda.mjs`.

## Один раз: настройка AWS

### Быстрый путь: один скрипт в CloudShell

1. Зарегистрироваться на https://aws.amazon.com.
2. В консоли AWS нажать значок `>_` (CloudShell) в верхней панели.
3. Вставить туда всё содержимое `cloudshell-setup.sh` и нажать Enter.
   Скрипт создаст политику, роль, пользователя, запросит лимит
   параллельности и напечатает две строки с ключом.
4. Эти две строки добавить в настройки окружения Claude Code (пункт 7
   ниже), не в чат.

Если что-то пошло не так, ниже те же шаги вручную.

### Вручную

Делается в консоли AWS один раз, минут 15–20. Политики уже лежат в этой
папке — их нужно только вставить.

1. **Аккаунт.** Зарегистрироваться на https://aws.amazon.com (нужна карта;
   у Lambda есть бесплатный месячный лимит, условия видны при регистрации).
2. **Политика для функции.** IAM → Policies → Create policy → вкладка JSON →
   вставить содержимое `role-policy.json` → Next → имя **ровно**
   `remotion-lambda-policy` → Create.
3. **Роль.** IAM → Roles → Create role → Use case: **Lambda** → Next →
   отметить `remotion-lambda-policy` → Next → имя **ровно**
   `remotion-lambda-role` → Create role.
4. **Пользователь.** IAM → Users → Create user → имя `remotion-user` →
   доступ к консоли **не** включать → Next → Next → Create user.
5. **Права пользователя.** Открыть `remotion-user` → Add permissions →
   Create inline policy → JSON → вставить `user-policy.json` → имя
   `remotion-user-policy` → Create policy.
6. **Ключ доступа.** `remotion-user` → Security credentials → Create access
   key → «Application running on an AWS compute service» → согласиться с
   предупреждением → Create access key.
7. **Передать ключ — только в настройки окружения, не в чат и не в файл в
   репозитории.** В Claude Code: меню облачного окружения в заголовке
   сессии → Edit → секреты сети (или переменные окружения) → добавить две
   переменные:

   ```
   REMOTION_AWS_ACCESS_KEY_ID      = Access key ID
   REMOTION_AWS_SECRET_ACCESS_KEY  = Secret access key
   ```

   Новая сессия их подхватит.
8. **Лимит параллельности.** У новых аккаунтов AWS лимит бывает всего 10
   одновременных функций (обычно 1000). Проверить: `npx remotion lambda
   quotas --region=ap-southeast-2`. Если лимит маленький — запросить
   увеличение: Service Quotas →
   AWS Lambda → Concurrent executions → Request increase (например, до
   1000). Готовый текст для ответа на вопросы AWS — в документации Remotion:
   https://www.remotion.dev/docs/lambda/limits

## Разворачивание

```
npm run lambda:deploy
```

Разворачивает функцию, сайт и закрытые модели. Повторять после изменения
`src/` или `public/` и после обновления Remotion (функция привязана к его
версии — сейчас 4.0.538, все пакеты Remotion закреплены на ней).

## Рендер

```
npm run lambda:render -- itpark
npm run lambda:render -- itpark --frames=0-353          # только кусок
npm run lambda:render -- itpark --concurrency=8         # вручную: 8 функций
```

Скрипт сам читает лимит параллельности аккаунта. Если он меньше 130
(у новых аккаунтов бывает 10), ролик делится на «лимит − 2» функции:
одна нужна для запуска, одна — для запросов прогресса. Каждая функция
тогда рендерит длинный кусок, поэтому таймаут функции — максимальные
900 с, а память — 3008 МБ, больше новому аккаунту не дают.

Готовое видео (без звука) скачивается в `out/<композиция>.mp4`, в конце
печатается время и оценка стоимости Lambda.

## Звук

Звук по-прежнему собирается локально — там нет 3D, это секунды. Картинка
с Lambda уже в финальном качестве (crf 19), поэтому видео не
перекодируется: поток копируется, ему только проставляются теги цвета
bt709.

```
npx remotion render src/index.ts itpark-sound out/itpark-soundtrack.wav --codec=wav
ffmpeg -i out/itpark-soundtrack.wav -af "loudnorm=I=-14:TP=-2:LRA=11,aresample=48000,alimiter=limit=0.79:attack=1:release=60:level=false" out/itpark-mix.wav
ffmpeg -i out/itpark.mp4 -i out/itpark-mix.wav -map 0:v -map 1:a -c:v copy -bsf:v h264_metadata=colour_primaries=1:transfer_characteristics=1:matrix_coefficients=1 -c:a aac -b:a 192k -shortest -movflags +faststart out/itpark-reel.mp4
```

## Что лежит в открытом доступе

Сайт, с которого Lambda рендерит, читается по ссылке без авторизации — так
устроен Remotion Lambda. Поэтому:

- на сайт уходит `public/` **без** `models/`: там только код ролика, звук и
  картинки;
- 3D-модели лежат в том же бакете в `private-assets/` как закрытые
  объекты. При рендере скрипт даёт странице подписанные ссылки на них,
  которые истекают через 2 часа (`modelUrl()` в `src/world/Model.tsx`).

Это важно: у части моделей лицензия Sketchfab Standard запрещает
распространять сам файл.

## Лицензия Remotion

Бесплатно Remotion могут использовать физлица, некоммерческие организации
и компании до 3 сотрудников. Компании больше — нужна Company License
(https://www.remotion.pro). Это не зависит от того, где идёт рендер.
