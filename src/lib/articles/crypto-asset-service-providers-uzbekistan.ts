import type { LocalizedArticle } from "../publications";

const article: Record<string, LocalizedArticle> = {
  en: {
    subtitle: "A practical guide to obtaining and maintaining a licence as a crypto-asset service provider in Uzbekistan under the NAPP regulatory framework.",
    author: "Advizen Legal Practice",
    readTime: "7 min read",
    inShort: {
      figures: [
        { value: "4", label: "Licence types: crypto exchange, mining pool, crypto depository and crypto shop" },
        { value: "20 working days", label: "Maximum time from submission to NAPP's decision" },
        { value: "73,400 BRV", label: "One-time state duty for a crypto exchange licence, about USD 2,496,000" },
        { value: "5,000 BRV", label: "Minimum charter capital of a crypto exchange, about USD 170,000, of which 3,000 BRV is held in a reserve account" },
      ],
      points: [
        "Only Uzbek-resident legal entities can obtain a crypto-asset service provider licence from NAPP; individuals and foreign companies are excluded.",
        "Each activity type needs a separate licence, and licences are issued for an unlimited duration and cannot be transferred to another legal entity.",
        "The platform and all servers must be physically located in Uzbekistan, and transaction data, user identification records and business correspondence must be kept for five years.",
        "Hidden mining, operations with anonymous crypto-assets and offshore companies in the ownership structure are prohibited, and licensed providers pay a monthly activity levy by the 10th of each month.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Uzbekistan has established a dedicated licensing regime for businesses that deal in crypto-assets. The framework is administered by the National Agency for Perspective Projects (NAPP) and is set out in the Regulation on Licensing of Crypto-Asset Service Providers (reg. No. 3380, 15 August 2022). Only Uzbek-resident legal entities may obtain a licence — individuals and foreign companies are excluded.",
      },
      { type: "h2" as const, text: "Four types of licences" },
      {
        type: "p" as const,
        text: "A separate licence is required for each type of activity. The four licensed categories are:",
      },
      {
        type: "ul" as const,
        items: [
          "Crypto exchange — an electronic platform for buying, selling, and/or exchanging crypto-assets.",
          "Mining pool — a platform that consolidates computing power for the mining process.",
          "Crypto depository — a platform providing issuance, primary placement, and custody of crypto-assets.",
          "Crypto shop — a platform for the purchase and/or sale of crypto-assets.",
        ],
      },
      {
        type: "p" as const,
        text: "All licences are issued for an unlimited duration. A licence cannot be transferred to another legal entity.",
      },
      { type: "h2" as const, text: "How to apply" },
      {
        type: "p" as const,
        text: "Applications are submitted to NAPP's Licensing and Permitting Department by email (info@napp.uz), post, or in person at: 22 Nukus Street, Mirabad District, Tashkent. No fee is charged for reviewing the application.",
      },
      {
        type: "p" as const,
        text: "The application package must include:",
      },
      {
        type: "ul" as const,
        items: [
          "Application form stating the company's name, legal form, INN, registered address, place of business, bank details, and the type of licence sought.",
          "Details of management (CEO and deputies) and all founders, disclosed through to the ultimate beneficial owner.",
          "For foreign nationals in management or ownership: a criminal record certificate from the relevant foreign authority, apostilled or legalised, with a notarised translation into Uzbek.",
          "For crypto exchanges only: a bank confirmation of charter capital contribution and reservation of the required amount.",
        ],
      },
      {
        type: "p" as const,
        text: "NAPP checks the criminal record of Uzbek-national managers and founders itself. No documents beyond those listed above may be demanded from the applicant.",
      },
      { type: "h2" as const, text: "Timeline" },
      {
        type: "ul" as const,
        items: [
          "Expert panel review: up to 15 working days.",
          "NAPP decision (grant or refuse): within 4 working days of the panel's conclusion — total maximum 20 working days from submission.",
          "Applicant notified: within 1 working day of the decision.",
          "Licence issued: within 3 days of state-duty payment.",
          "If the state duty is not paid within 30 days of notification, NAPP may annul the licence decision.",
        ],
      },
      {
        type: "p" as const,
        text: "If deficiencies are identified, NAPP issues a notice giving the applicant up to 30 working days to remedy them. The review clock pauses during this period. Once remedied, a re-review takes no more than 5 working days at no additional charge.",
      },
      { type: "h2" as const, text: "Core licensing requirements" },
      {
        type: "p" as const,
        text: "All four types of providers must comply with the following ongoing conditions:",
      },
      {
        type: "ul" as const,
        items: [
          "Platform and all servers must be physically located on the territory of Uzbekistan.",
          "All transaction data, user identification records, and business correspondence must be retained for five years.",
          "Full compliance with Uzbekistan's AML/CFT laws and personal data protection legislation.",
          "Advertising must carry mandatory risk warnings (including the risk of total loss of funds) and must not promise returns, mention bonuses, or depict minors.",
          "No hidden mining and no operations involving anonymous crypto-assets.",
          "Provide information to NAPP on request, free of charge.",
          "Pay activity levies in full and on time.",
          "Management and founders must be free of relevant criminal convictions and must not be linked to terrorism, money laundering, organised crime, or drug trafficking.",
          "No offshore-registered companies in the ownership structure.",
        ],
      },
      { type: "h3" as const, text: "Additional requirements for crypto exchanges" },
      {
        type: "ul" as const,
        items: [
          "Prices must be formed on the basis of supply and demand.",
          "Minimum charter capital of 5,000 BRV (~USD 170,000) at the date of application, of which 3,000 BRV (~USD 102,000) must be held in a reserve account at a commercial bank in Uzbekistan.",
          "Charter capital must be funded exclusively from the founders' own cash and property — no loans, pledges, or borrowed funds.",
        ],
      },
      { type: "h2" as const, text: "Naming restrictions" },
      {
        type: "p" as const,
        text: "The company name and branding may not include the words \"state\", \"government\", \"national\", \"Uzbekistan\", or the full or abbreviated name of any Uzbek city, in any language or form.",
      },
      { type: "h2" as const, text: "Licence fees" },
      { type: "h3" as const, text: "One-time state duty (at licence issuance)" },
      {
        type: "p" as const,
        text: "Fees are set in multiples of the Base Calculation Value (BRV = 412,000 UZS ≈ USD 34 at current rates):",
      },
      {
        type: "ul" as const,
        items: [
          "Crypto exchange: 73,400 × BRV ≈ USD 2,496,000",
          "Mining pool: 3,000 × BRV ≈ USD 102,000",
          "Crypto depository: 7,000 × BRV ≈ USD 238,000",
          "Crypto shop: 3,700 × BRV ≈ USD 126,000",
        ],
      },
      { type: "h3" as const, text: "Monthly activity levy (ongoing)" },
      {
        type: "p" as const,
        text: "In addition to the one-time duty, licensed providers pay a monthly levy, due by the 10th of each month:",
      },
      {
        type: "ul" as const,
        items: [
          "Crypto exchange: 740 × BRV ≈ USD 25,200/month",
          "Mining pool: 100 × BRV ≈ USD 3,400/month",
          "Crypto depository: 5 × BRV ≈ USD 170/month",
          "Crypto shop: 185 × BRV ≈ USD 6,300/month",
        ],
      },
      {
        type: "p" as const,
        text: "If a licence is issued before the 20th of a month, the levy is due in full for that month; if issued after the 20th, it accrues from the first of the following month. The levy is suspended from the first of the month following any suspension or cessation of activity.",
      },
      { type: "h2" as const, text: "Suspension, annulment and hard limits" },
      {
        type: "p" as const,
        text: "NAPP may suspend a licence for up to 10 days where violations are found; longer suspensions require a court order (up to 6 months). Grounds for annulment by NAPP include: voluntary surrender, liquidation of the entity, or non-payment of the state duty. Annulment by court is required for more serious grounds including: systematic or single gross breach of licensing conditions, and use of forged documents.",
      },
      {
        type: "p" as const,
        text: "The following are treated as single gross violations triggering annulment proceedings: hidden mining or operations with anonymous crypto-assets; persons with relevant criminal convictions in management or ownership; offshore companies in the ownership structure; use of borrowed funds to form charter capital; reduction of an exchange's charter capital below the required minimum; and servers located outside Uzbekistan.",
      },
      {
        type: "p" as const,
        text: "Where a licence is annulled for gross violations or use of forged documents, no new licence may be issued for one year — and this restriction applies to any new entity created by the same founder or beneficial owner.",
      },
      { type: "h2" as const, text: "How Advizen can help" },
      {
        type: "p" as const,
        text: "The crypto licensing process in Uzbekistan involves substantial upfront fees, strict technical and compliance requirements, and ongoing regulatory obligations. Advizen's legal team assists clients in assessing which licence category applies to their business model, preparing the full application package, structuring the ownership to meet NAPP's requirements, and managing the relationship with the regulator after licensing.",
      },
    ],
    faq: [
      {
        question: "What types of crypto-asset service provider licences are available in Uzbekistan?",
        answer: "Uzbekistan's NAPP framework provides four distinct licence categories: (1) Crypto exchange — an electronic platform for buying, selling, and/or exchanging crypto-assets; (2) Mining pool — a platform consolidating computing power for mining; (3) Crypto depository — a platform providing issuance, primary placement, and custody of crypto-assets; (4) Crypto shop — a platform for purchase and/or sale of crypto-assets. Each type requires a separate licence. All licences are issued for an unlimited duration and may only be held by Uzbek-resident legal entities.",
      },
      {
        question: "How much does a crypto exchange licence cost in Uzbekistan?",
        answer: "A crypto exchange licence carries the highest fees under the NAPP framework. The one-time state duty at licence issuance is 73,400 × BRV (Base Calculation Value) — approximately USD 2,496,000. In addition, licence holders pay a monthly activity levy of 740 × BRV — approximately USD 25,200 per month, due by the 10th of each month. Other licence types are significantly cheaper: mining pool (3,000 × BRV one-time; 100 × BRV/month), crypto depository (7,000 × BRV one-time; 5 × BRV/month), and crypto shop (3,700 × BRV one-time; 185 × BRV/month).",
      },
      {
        question: "Can a foreign company obtain a crypto licence in Uzbekistan?",
        answer: "No. Only legal entities that are residents of Uzbekistan are eligible to apply for a NAPP crypto-asset service provider licence. Individuals and foreign companies are expressly excluded. Foreign investors wishing to enter the Uzbek crypto market must first establish a local legal entity registered in Uzbekistan. Additionally, no offshore-registered companies may appear in the ownership structure, and the charter capital of a crypto exchange must be funded exclusively from the founders' own funds — not loans or borrowed capital.",
      },
      {
        question: "What are the ongoing compliance requirements for crypto service providers in Uzbekistan?",
        answer: "All four licence categories share the following ongoing obligations: the platform and all servers must be physically located in Uzbekistan; all transaction data, user identification records, and business correspondence must be retained for five years; full compliance with Uzbekistan's AML/CFT and personal data protection laws is required; advertising must carry mandatory risk warnings and may not promise returns, mention bonuses, or depict minors; hidden mining and operations with anonymous crypto-assets are prohibited; no offshore companies may appear in the ownership structure; and all activity levies must be paid in full by the 10th of each month.",
      },
    ],
  },
  ru: {
    subtitle: "Практическое руководство по получению и поддержанию лицензии поставщика услуг криптоактивов в Узбекистане в рамках регуляторной системы НАПП.",
    author: "Юридическая практика Advizen",
    readTime: "7 мин чтения",
    inShort: {
      figures: [
        { value: "4", label: "Вида лицензий: криптобиржа, майнинг-пул, криптодепозитарий и криптомагазин" },
        { value: "20 рабочих дней", label: "Максимальный срок от подачи заявки до решения НАПП" },
        { value: "73 400 БРВ", label: "Единовременная госпошлина за лицензию криптобиржи, около 2 496 000 долл. США" },
        { value: "5 000 БРВ", label: "Минимальный уставный капитал криптобиржи, около 170 000 долл. США, из них 3 000 БРВ — на резервном счёте" },
      ],
      points: [
        "Лицензию поставщика услуг в сфере криптоактивов в НАПП могут получить только юридические лица — резиденты Узбекистана; физические лица и иностранные компании исключены.",
        "На каждый вид деятельности нужна отдельная лицензия; лицензии выдаются бессрочно и не могут передаваться другому юридическому лицу.",
        "Платформа и все серверы должны физически находиться в Узбекистане, а данные о сделках, идентификационные сведения пользователей и деловая переписка — храниться пять лет.",
        "Скрытый майнинг, операции с анонимными криптоактивами и офшорные компании в структуре собственности запрещены, а лицензиаты ежемесячно до 10-го числа уплачивают сбор за деятельность.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "В Узбекистане установлен специальный лицензионный режим для предприятий, работающих с криптоактивами. Регулирование осуществляется Национальным агентством перспективных проектов (НАПП) и закреплено в Положении о лицензировании поставщиков услуг криптоактивов (рег. № 3380 от 15 августа 2022 года). Лицензию могут получить только узбекские резидентные юридические лица — физические лица и иностранные компании к участию не допускаются.",
      },
      { type: "h2" as const, text: "Четыре типа лицензий" },
      {
        type: "p" as const,
        text: "Для каждого вида деятельности требуется отдельная лицензия. Четыре лицензируемые категории:",
      },
      {
        type: "ul" as const,
        items: [
          "Криптобиржа — электронная платформа для купли, продажи и/или обмена криптоактивов.",
          "Майнинг-пул — платформа, консолидирующая вычислительные мощности для процесса майнинга.",
          "Криптодепозитарий — платформа, обеспечивающая выпуск, первичное размещение и хранение криптоактивов.",
          "Криптомагазин — платформа для покупки и/или продажи криптоактивов.",
        ],
      },
      {
        type: "p" as const,
        text: "Все лицензии выдаются на бессрочный период. Лицензия не может быть передана другому юридическому лицу.",
      },
      { type: "h2" as const, text: "Порядок подачи заявки" },
      {
        type: "p" as const,
        text: "Заявки подаются в Управление по лицензированию и разрешительным документам НАПП по электронной почте (info@napp.uz), почтой или лично по адресу: г. Ташкент, Мирабадский район, ул. Нукус, 22. За рассмотрение заявки плата не взимается.",
      },
      {
        type: "p" as const,
        text: "Пакет документов должен включать:",
      },
      {
        type: "ul" as const,
        items: [
          "Заявление с указанием наименования, организационно-правовой формы, ИНН, юридического адреса, места ведения деятельности, банковских реквизитов и запрашиваемого вида лицензии.",
          "Сведения о руководстве (генеральный директор и заместители) и всех учредителях, раскрытые вплоть до конечного бенефициара.",
          "Для иностранных граждан в составе руководства или собственников: справка об отсутствии судимости от соответствующего иностранного органа, апостилированная или легализованная, с нотариально заверенным переводом на узбекский язык.",
          "Только для криптобирж: банковское подтверждение взноса в уставный капитал и резервирования необходимой суммы.",
        ],
      },
      {
        type: "p" as const,
        text: "НАПП самостоятельно проверяет наличие судимости у руководителей и учредителей — граждан Узбекистана. Запрашивать у заявителя документы сверх перечисленных не допускается.",
      },
      { type: "h2" as const, text: "Сроки" },
      {
        type: "ul" as const,
        items: [
          "Рассмотрение экспертной комиссией: до 15 рабочих дней.",
          "Решение НАПП (выдача или отказ): в течение 4 рабочих дней с момента заключения комиссии — итого максимум 20 рабочих дней с момента подачи.",
          "Уведомление заявителя: в течение 1 рабочего дня после принятия решения.",
          "Выдача лицензии: в течение 3 дней с момента оплаты государственной пошлины.",
          "Если государственная пошлина не оплачена в течение 30 дней с момента уведомления, НАПП вправе аннулировать решение о выдаче лицензии.",
        ],
      },
      {
        type: "p" as const,
        text: "При выявлении недостатков НАПП выдаёт уведомление, предоставляя заявителю до 30 рабочих дней для их устранения. На этот период срок рассмотрения приостанавливается. После устранения повторное рассмотрение занимает не более 5 рабочих дней без дополнительной оплаты.",
      },
      { type: "h2" as const, text: "Основные лицензионные требования" },
      {
        type: "p" as const,
        text: "Все четыре типа поставщиков обязаны соблюдать следующие текущие условия:",
      },
      {
        type: "ul" as const,
        items: [
          "Платформа и все серверы должны физически располагаться на территории Узбекистана.",
          "Все данные о сделках, идентификационные сведения пользователей и деловая переписка должны храниться в течение пяти лет.",
          "Полное соблюдение законодательства Узбекистана о ПОД/ФТ и о защите персональных данных.",
          "Реклама должна содержать обязательные предупреждения о рисках (в том числе о риске полной потери средств) и не должна обещать доходность, упоминать бонусы или изображать несовершеннолетних.",
          "Запрет на скрытый майнинг и операции с анонимными криптоактивами.",
          "Предоставление информации в НАПП по запросу — безвозмездно.",
          "Уплата сборов за деятельность в полном объёме и в установленные сроки.",
          "Руководство и учредители должны не иметь соответствующих судимостей и не быть связаны с терроризмом, отмыванием денег, организованной преступностью или наркоторговлей.",
          "В структуре собственности не должно быть компаний, зарегистрированных в офшорных юрисдикциях.",
        ],
      },
      { type: "h3" as const, text: "Дополнительные требования к криптобиржам" },
      {
        type: "ul" as const,
        items: [
          "Цены должны формироваться на основе спроса и предложения.",
          "Минимальный уставный капитал — 5 000 БРВ (≈ 170 000 долл. США) на дату подачи заявки, из которых 3 000 БРВ (≈ 102 000 долл. США) должны быть размещены на резервном счёте в коммерческом банке Узбекистана.",
          "Уставный капитал должен формироваться исключительно за счёт собственных денежных средств и имущества учредителей — без займов, залогов или заёмных средств.",
        ],
      },
      { type: "h2" as const, text: "Ограничения по наименованию" },
      {
        type: "p" as const,
        text: "Наименование и брендинг компании не могут содержать слова «государственный», «правительственный», «национальный», «Узбекистан», а также полное или сокращённое наименование любого узбекского города в любой языковой форме или написании.",
      },
      { type: "h2" as const, text: "Лицензионные сборы" },
      { type: "h3" as const, text: "Единовременная государственная пошлина (при выдаче лицензии)" },
      {
        type: "p" as const,
        text: "Сборы устанавливаются кратно базовой расчётной величине (БРВ = 412 000 сум ≈ 34 долл. США по текущему курсу):",
      },
      {
        type: "ul" as const,
        items: [
          "Криптобиржа: 73 400 × БРВ ≈ 2 496 000 долл. США",
          "Майнинг-пул: 3 000 × БРВ ≈ 102 000 долл. США",
          "Криптодепозитарий: 7 000 × БРВ ≈ 238 000 долл. США",
          "Криптомагазин: 3 700 × БРВ ≈ 126 000 долл. США",
        ],
      },
      { type: "h3" as const, text: "Ежемесячный сбор за деятельность (постоянный)" },
      {
        type: "p" as const,
        text: "Помимо единовременной пошлины, лицензированные поставщики уплачивают ежемесячный сбор, подлежащий внесению до 10-го числа каждого месяца:",
      },
      {
        type: "ul" as const,
        items: [
          "Криптобиржа: 740 × БРВ ≈ 25 200 долл. США/мес.",
          "Майнинг-пул: 100 × БРВ ≈ 3 400 долл. США/мес.",
          "Криптодепозитарий: 5 × БРВ ≈ 170 долл. США/мес.",
          "Криптомагазин: 185 × БРВ ≈ 6 300 долл. США/мес.",
        ],
      },
      {
        type: "p" as const,
        text: "Если лицензия выдана до 20-го числа месяца, сбор подлежит уплате за весь этот месяц; если после 20-го — начисление начинается с первого числа следующего месяца. Сбор приостанавливается с первого числа месяца, следующего за приостановлением или прекращением деятельности.",
      },
      { type: "h2" as const, text: "Приостановление, аннулирование и жёсткие ограничения" },
      {
        type: "p" as const,
        text: "НАПП вправе приостановить лицензию на срок до 10 дней при выявлении нарушений; более длительные приостановления требуют судебного решения (до 6 месяцев). Основания для аннулирования по решению НАПП: добровольный отказ, ликвидация юридического лица или неуплата государственной пошлины. Аннулирование по решению суда требуется в более серьёзных случаях, включая: систематическое или единичное грубое нарушение лицензионных условий и использование поддельных документов.",
      },
      {
        type: "p" as const,
        text: "К единичным грубым нарушениям, влекущим возбуждение процедуры аннулирования, относятся: скрытый майнинг или операции с анонимными криптоактивами; наличие в составе руководства или собственности лиц, имеющих соответствующие судимости; наличие офшорных компаний в структуре собственности; использование заёмных средств для формирования уставного капитала; снижение уставного капитала биржи ниже установленного минимума; расположение серверов за пределами Узбекистана.",
      },
      {
        type: "p" as const,
        text: "При аннулировании лицензии за грубые нарушения или использование поддельных документов выдача новой лицензии в течение одного года не допускается — данное ограничение распространяется и на любое новое юридическое лицо, созданное тем же учредителем или бенефициаром.",
      },
      { type: "h2" as const, text: "Чем может помочь Advizen" },
      {
        type: "p" as const,
        text: "Процесс лицензирования криптодеятельности в Узбекистане сопровождается значительными первоначальными сборами, строгими техническими и комплаенс-требованиями и постоянными регуляторными обязательствами. Юридическая команда Advizen помогает клиентам в определении подходящей категории лицензии для их бизнес-модели, подготовке полного пакета документов, структурировании собственности с учётом требований НАПП и сопровождении взаимодействия с регулятором после лицензирования.",
      },
    ],
    faq: [
      {
        question: "Какие виды лицензий поставщиков услуг криптоактивов доступны в Узбекистане?",
        answer: "Регуляторная система НАПП предусматривает четыре отдельные категории лицензий: (1) Криптобиржа — электронная платформа для купли, продажи и/или обмена криптоактивов; (2) Майнинг-пул — платформа, консолидирующая вычислительные мощности для майнинга; (3) Криптодепозитарий — платформа, обеспечивающая выпуск, первичное размещение и хранение криптоактивов; (4) Криптомагазин — платформа для покупки и/или продажи криптоактивов. Каждый вид требует отдельной лицензии. Все лицензии выдаются бессрочно и могут быть получены только узбекскими резидентными юридическими лицами.",
      },
      {
        question: "Сколько стоит лицензия криптобиржи в Узбекистане?",
        answer: "Лицензия криптобиржи предусматривает наиболее высокие сборы в рамках системы НАПП. Единовременная государственная пошлина при выдаче лицензии составляет 73 400 × БРВ (базовая расчётная величина) — приблизительно 2 496 000 долл. США. Кроме того, лицензиаты уплачивают ежемесячный сбор за деятельность в размере 740 × БРВ — около 25 200 долл. США в месяц, подлежащий уплате до 10-го числа каждого месяца. Другие виды лицензий значительно дешевле: майнинг-пул (3 000 × БРВ единовременно; 100 × БРВ/мес.), криптодепозитарий (7 000 × БРВ единовременно; 5 × БРВ/мес.) и криптомагазин (3 700 × БРВ единовременно; 185 × БРВ/мес.).",
      },
      {
        question: "Может ли иностранная компания получить криптолицензию в Узбекистане?",
        answer: "Нет. На получение лицензии поставщика услуг криптоактивов от НАПП вправе претендовать только юридические лица — резиденты Узбекистана. Физические лица и иностранные компании прямо исключены. Иностранные инвесторы, желающие выйти на узбекский крипторынок, обязаны предварительно создать местное юридическое лицо, зарегистрированное в Узбекистане. Помимо этого, в структуре собственности не может быть компаний, зарегистрированных в офшорных юрисдикциях, а уставный капитал криптобиржи должен формироваться исключительно за счёт собственных средств учредителей.",
      },
      {
        question: "Каковы текущие требования комплаенса для поставщиков криптоуслуг в Узбекистане?",
        answer: "Все четыре категории лицензий предполагают следующие постоянные обязательства: платформа и все серверы должны физически располагаться на территории Узбекистана; все данные о сделках, идентификационные сведения пользователей и деловая переписка должны храниться пять лет; требуется полное соблюдение законодательства Узбекистана о ПОД/ФТ и о защите персональных данных; реклама должна содержать обязательные предупреждения о рисках и не обещать доходность, упоминать бонусы или изображать несовершеннолетних; запрещены скрытый майнинг и операции с анонимными криптоактивами; в структуре собственности не должно быть офшорных компаний; все сборы за деятельность должны уплачиваться в полном объёме до 10-го числа каждого месяца.",
      },
    ],
  },
  uz: {
    subtitle: "ILMA tartibga soluvchi tizimi doirasida Oʻzbekistonda kriptoaktivlar xizmati provayderi sifatida litsenziya olish va saqlash boʻyicha amaliy qoʻllanma.",
    author: "Advizen yuridik amaliyoti",
    readTime: "7 daqiqa oʻqish",
    inShort: {
      figures: [
        { value: "4", label: "Litsenziya turi: kripto-birja, mayning-pul, kripto-depozitariy va kripto-doʻkon" },
        { value: "20 ish kuni", label: "Ariza topshirilgandan ILMA qaroriga qadar eng uzoq muddat" },
        { value: "73 400 BHM", label: "Kripto-birja litsenziyasi uchun bir martalik davlat boji, taxminan 2 496 000 AQSh dollari" },
        { value: "5 000 BHM", label: "Kripto-birjaning eng kam ustav kapitali, taxminan 170 000 AQSh dollari, shundan 3 000 BHM rezerv hisobvaragʻida saqlanadi" },
      ],
      points: [
        "ILMAdan kriptoaktivlar xizmati provayderi litsenziyasini faqat Oʻzbekiston rezidenti boʻlgan yuridik shaxslar olishi mumkin; jismoniy shaxslar va xorijiy kompaniyalar istisno qilingan.",
        "Har bir faoliyat turi uchun alohida litsenziya talab etiladi; litsenziyalar muddatsiz beriladi va boshqa yuridik shaxsga oʻtkazilmaydi.",
        "Platforma va barcha serverlar jismonan Oʻzbekistonda joylashgan boʻlishi, bitim maʼlumotlari, foydalanuvchi identifikatsiyasi yozuvlari va biznes yozishmalari esa besh yil saqlanishi kerak.",
        "Yashirin mayning, anonim kriptoaktivlar bilan operatsiyalar va mulkdorlar tarkibida ofshor kompaniyalar taqiqlangan, litsenziya egalari esa har oyning 10-sanasigacha faoliyat yigʻimini toʻlaydi.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Oʻzbekistonda kriptoaktivlar bilan ishlovchi tadbirkorlar uchun maxsus litsenziyalash rejimi joriy etilgan. Tartibga solish Istiqbolli loyihalar milliy agentligi (ILMA) tomonidan amalga oshiriladi va Kriptoaktivlar sohasidagi xizmat provayderlarini litsenziyalash toʻgʻrisidagi Nizomda (2022-yil 15-avgustda 3380-son bilan roʻyxatga olingan) belgilangan. Litsenziyani faqat Oʻzbekiston rezidenti yuridik shaxslar olishi mumkin — jismoniy shaxslar va xorijiy kompaniyalar istisno qilingan.",
      },
      { type: "h2" as const, text: "Litsenziyalarning toʻrt turi" },
      {
        type: "p" as const,
        text: "Har bir faoliyat turi uchun alohida litsenziya talab etiladi. Litsenziyalanadigan toʻrtta toifa:",
      },
      {
        type: "ul" as const,
        items: [
          "Kripto-birja — kriptoaktivlarni sotib olish, sotish va/yoki ayirboshlash uchun elektron platforma.",
          "Mayning-pul — mayning jarayoni uchun hisoblash quvvatlarini birlashtiruvchi platforma.",
          "Kripto-depozitariy — kriptoaktivlarni chiqarish, birlamchi joylashtirish va saqlashni taʼminlovchi platforma.",
          "Kripto-doʻkon — kriptoaktivlarni sotib olish va/yoki sotish uchun platforma.",
        ],
      },
      {
        type: "p" as const,
        text: "Barcha litsenziyalar muddatsiz beriladi. Litsenziyani boshqa yuridik shaxsga oʻtkazib boʻlmaydi.",
      },
      { type: "h2" as const, text: "Ariza berish tartibi" },
      {
        type: "p" as const,
        text: "Arizalar ILMAning Litsenziyalash va ruxsat berish boʻlimiga elektron pochta (info@napp.uz), pochta orqali yoki shaxsan: Toshkent shahri, Mirobod tumani, Nukus koʻchasi, 22-uy boʻyicha topshiriladi. Arizani koʻrib chiqish uchun haq olinmaydi.",
      },
      {
        type: "p" as const,
        text: "Hujjatlar toʻplami quyidagilarni oʻz ichiga olishi shart:",
      },
      {
        type: "ul" as const,
        items: [
          "Kompaniyaning nomi, tashkiliy-huquqiy shakli, STIR, yuridik manzili, faoliyat yuritish joyi, bank rekvizitlari va soʻralayotgan litsenziya turi koʻrsatilgan ariza shakli.",
          "Rahbariyat (bosh direktor va oʻrinbosarlar) va barcha taʼsischilar haqida maʼlumotlar, oxirgi benefitsiar mulkdorgacha oshkor etilgan.",
          "Rahbariyat yoki egalik tarkibidagi xorijiy fuqarolar uchun: tegishli xorijiy organdan sudlanmaganlik haqida maʼlumotnoma, apostillangan yoki qonuniylashtirilgan, oʻzbek tiliga notarial tasdiqlangan tarjima bilan.",
          "Faqat kripto-birjalar uchun: ustav kapitaliga badal qoʻshilganligi va talab qilingan summaning rezervlanganligi haqida bank tasdigʻi.",
        ],
      },
      {
        type: "p" as const,
        text: "ILMA Oʻzbekiston fuqarosi boʻlgan rahbarlar va taʼsischilarning sudlanganligini mustaqil ravishda tekshiradi. Yuqorida sanab oʻtilganlardan tashqari hujjatlar ariza beruvchidan talab qilinishi mumkin emas.",
      },
      { type: "h2" as const, text: "Muddatlar" },
      {
        type: "ul" as const,
        items: [
          "Ekspert komissiyasi tomonidan koʻrib chiqilishi: 15 ish kunigacha.",
          "ILMA qarori (berish yoki rad etish): komissiya xulosasidan boshlab 4 ish kuni ichida — jami arizadan boshlab maksimal 20 ish kuni.",
          "Ariza beruvchi xabardor qilinadi: qaror qabul qilinganidan boshlab 1 ish kuni ichida.",
          "Litsenziya beriladi: davlat boji toʻlanganidan boshlab 3 kun ichida.",
          "Davlat boji xabardor qilinganidan boshlab 30 kun ichida toʻlanmasa, ILMA litsenziya berish qarorini bekor qilishi mumkin.",
        ],
      },
      {
        type: "p" as const,
        text: "Kamchiliklar aniqlangan taqdirda ILMA ariza beruvchiga ularni bartaraf etish uchun 30 ish kunigacha muddat beruvchi xabarnoma chiqaradi. Bu davrda koʻrib chiqish muddati toʻxtatib turiladi. Bartaraf etilgandan soʻng qayta koʻrib chiqish 5 ish kunidan koʻp boʻlmagan vaqtda qoʻshimcha haq olinmasdan amalga oshiriladi.",
      },
      { type: "h2" as const, text: "Asosiy litsenziya talablari" },
      {
        type: "p" as const,
        text: "Provayderlarning toʻrtala turi quyidagi doimiy shartlarga rioya qilishi shart:",
      },
      {
        type: "ul" as const,
        items: [
          "Platforma va barcha serverlar Oʻzbekiston hududida fizik joylashgan boʻlishi shart.",
          "Barcha bitim maʼlumotlari, foydalanuvchi identifikatsiyasi yozuvlari va biznes yozishmalari besh yil davomida saqlanishi kerak.",
          "Oʻzbekistonning AML/CFT va shaxsiy maʼlumotlarni himoya qilish toʻgʻrisidagi qonunchiligiga toʻliq rioya etish.",
          "Reklamada majburiy xavf ogohlantirishlari (jumladan mablagʻlarni toʻliq yoʻqotish xavfi) boʻlishi shart va daromadlilik vaʼda qilmasligi, bonuslarni eslatmasligi yoki voyaga yetmaganlarni tasvirlamasligi kerak.",
          "Yashirin mayning va anonim kriptoaktivlar bilan operatsiyalarga yoʻl qoʻyilmaydi.",
          "Soʻrov boʻyicha ILMAga bepul maʼlumot taqdim etish.",
          "Faoliyat yigʻimlarini toʻliq va oʻz vaqtida toʻlash.",
          "Rahbariyat va taʼsischilar tegishli sudlanganlikka ega boʻlmasligi va terrorizm, pul yuvish, uyushgan jinoyatchilik yoki giyohvand moddalar savdosi bilan bogʻlanmasligi shart.",
          "Egalik tuzilmasida ofshor yurisdiksiyalarda roʻyxatdan oʻtgan kompaniyalar boʻlmasligi kerak.",
        ],
      },
      { type: "h3" as const, text: "Kripto-birjalar uchun qoʻshimcha talablar" },
      {
        type: "ul" as const,
        items: [
          "Narxlar talab va taklif asosida shakllantirilishi shart.",
          "Ariza topshirish sanasida minimal ustav kapitali — 5 000 BHM (~170 000 AQSh dollari), shundan 3 000 BHM (~102 000 AQSh dollari) Oʻzbekistondagi tijorat bankidagi rezerv hisobvaragʻida saqlanishi kerak.",
          "Ustav kapitali faqat taʼsischilarning shaxsiy pul mablagʻlari va mol-mulki hisobidan shakllantirilishi shart — kreditlar, garov yoki qarz mablagʻlari hisobidan emas.",
        ],
      },
      { type: "h2" as const, text: "Nom boʻyicha cheklovlar" },
      {
        type: "p" as const,
        text: "Kompaniya nomi va brendingi «davlat», «hukumat», «milliy», «Oʻzbekiston» soʻzlari yoki har qanday Oʻzbekiston shahrining toʻliq yoki qisqartirilgan nomini har qanday tildagi yoki yozuv shaklidagi koʻrinishida oʻz ichiga olishi mumkin emas.",
      },
      { type: "h2" as const, text: "Litsenziya yigʻimlari" },
      { type: "h3" as const, text: "Bir martalik davlat boji (litsenziya berilganda)" },
      {
        type: "p" as const,
        text: "Yigʻimlar Bazaviy hisoblash miqdoriga (BHM = 412 000 soʻm ≈ 34 AQSh dollari joriy kursda) karra ravishda belgilanadi:",
      },
      {
        type: "ul" as const,
        items: [
          "Kripto-birja: 73 400 × BHM ≈ 2 496 000 AQSh dollari",
          "Mayning-pul: 3 000 × BHM ≈ 102 000 AQSh dollari",
          "Kripto-depozitariy: 7 000 × BHM ≈ 238 000 AQSh dollari",
          "Kripto-doʻkon: 3 700 × BHM ≈ 126 000 AQSh dollari",
        ],
      },
      { type: "h3" as const, text: "Oylik faoliyat yigʻimi (doimiy)" },
      {
        type: "p" as const,
        text: "Bir martalik bojdan tashqari litsenziyaga ega provayderlar har oyning 10-sanasigacha toʻlanadigan oylik yigʻimni toʻlaydilar:",
      },
      {
        type: "ul" as const,
        items: [
          "Kripto-birja: 740 × BHM ≈ 25 200 AQSh dollari/oyiga",
          "Mayning-pul: 100 × BHM ≈ 3 400 AQSh dollari/oyiga",
          "Kripto-depozitariy: 5 × BHM ≈ 170 AQSh dollari/oyiga",
          "Kripto-doʻkon: 185 × BHM ≈ 6 300 AQSh dollari/oyiga",
        ],
      },
      {
        type: "p" as const,
        text: "Litsenziya oyning 20-sanasiga qadar berilsa, yigʻim oʻsha oy uchun toʻliq toʻlanadi; 20-sanadan keyin berilsa, hisoblash keyingi oyning birinchi sanasidan boshlanadi. Yigʻim har qanday toʻxtatib qoʻyish yoki faoliyatni toʻxtatishdan keyingi oyning birinchi sanasidan boshlab toʻxtatib qoʻyiladi.",
      },
      { type: "h2" as const, text: "Toʻxtatib qoʻyish, bekor qilish va qatʼiy cheklovlar" },
      {
        type: "p" as const,
        text: "ILMA buzilishlar aniqlangan taqdirda litsenziyani 10 kungacha toʻxtatib qoʻyishi mumkin; uzoqroq toʻxtatishlar sud qarorini talab qiladi (6 oygacha). ILMA tomonidan bekor qilish asoslari: ixtiyoriy voz kechish, yuridik shaxsning tugatilishi yoki davlat bojining toʻlanmasligi. Sud tomonidan bekor qilish jiddiyroq asoslar uchun talab etiladi, jumladan: litsenziya shartlarining tizimli yoki bir martalik qoʻpol buzilishi va soxta hujjatlardan foydalanish.",
      },
      {
        type: "p" as const,
        text: "Bekor qilish jarayonini ishga tushiruvchi bir martalik qoʻpol buzilishlar quyidagilarni oʻz ichiga oladi: yashirin mayning yoki anonim kriptoaktivlar bilan operatsiyalar; rahbariyat yoki egalik tarkibida tegishli sudlanganligi bor shaxslar; egalik tuzilmasida ofshor kompaniyalar; ustav kapitalini shakllantirish uchun qarzga olingan mablagʻlardan foydalanish; birja ustav kapitalini talab qilingan minimumdan past tushirish; serverlarning Oʻzbekistondan tashqarida joylashishi.",
      },
      {
        type: "p" as const,
        text: "Litsenziya qoʻpol buzilishlar yoki soxta hujjatlardan foydalanish uchun bekor qilingan taqdirda bir yil davomida yangi litsenziya berilmaydi — bu cheklov shu taʼsischi yoki benefitsiar tomonidan tashkil etilgan har qanday yangi yuridik shaxsga ham qoʻllaniladi.",
      },
      { type: "h2" as const, text: "Advizen qanday yordam bera oladi" },
      {
        type: "p" as const,
        text: "Oʻzbekistonda kriptoaktivlarni litsenziyalash jarayoni sezilarli boshlangʻich yigʻimlar, qatʼiy texnik va muvofiqlik talablari hamda doimiy tartibga soluvchi majburiyatlarni oʻz ichiga oladi. Advizen yuridik jamoasi mijozlarga ularning biznes-modeliga qaysi litsenziya toifasi mos kelishini baholashda, hujjatlarning toʻliq toʻplamini tayyorlashda, ILMA talablariga muvofiq egalikni tuzishda va litsenziyalashdan keyin tartibga soluvchi bilan munosabatlarni boshqarishda yordam beradi.",
      },
    ],
    faq: [
      {
        question: "Oʻzbekistonda kriptoaktivlar xizmati provayderlari uchun qanday litsenziya turlari mavjud?",
        answer: "ILMA tartibga solish tizimi toʻrtta alohida litsenziya toifasini nazarda tutadi: (1) Kripto-birja — kriptoaktivlarni sotib olish, sotish va/yoki ayirboshlash uchun elektron platforma; (2) Mayning-pul — mayning uchun hisoblash quvvatlarini birlashtiruvchi platforma; (3) Kripto-depozitariy — kriptoaktivlarni chiqarish, birlamchi joylashtirish va saqlashni taʼminlovchi platforma; (4) Kripto-doʻkon — kriptoaktivlarni sotib olish va/yoki sotish uchun platforma. Har bir tur uchun alohida litsenziya talab etiladi. Barcha litsenziyalar muddatsiz beriladi va faqat Oʻzbekiston rezidenti yuridik shaxslar tomonidan olinishi mumkin.",
      },
      {
        question: "Oʻzbekistonda kripto-birja litsenziyasi qancha turadi?",
        answer: "Kripto-birja litsenziyasi ILMA tizimida eng yuqori yigʻimlarni nazarda tutadi. Litsenziya berilganda bir martalik davlat boji 73 400 × BHM (bazaviy hisoblash miqdori)ni tashkil etadi — taxminan 2 496 000 AQSh dollari. Bundan tashqari, litsenziya egalari har oyning 10-sanasigacha toʻlanadigan 740 × BHM miqdorida oylik faoliyat yigʻimini — taxminan 25 200 AQSh dollari oyiga — toʻlaydilar. Boshqa litsenziya turlari ancha arzonroq: mayning-pul (3 000 × BHM bir martalik; 100 × BHM/oy), kripto-depozitariy (7 000 × BHM bir martalik; 5 × BHM/oy) va kripto-doʻkon (3 700 × BHM bir martalik; 185 × BHM/oy).",
      },
      {
        question: "Xorijiy kompaniya Oʻzbekistonda kripto-litsenziya ola oladimi?",
        answer: "Yoʻq. ILMAdan kriptoaktivlar xizmati provayderi litsenziyasi olish uchun faqat Oʻzbekiston rezidenti yuridik shaxslar ariza berish huquqiga ega. Jismoniy shaxslar va xorijiy kompaniyalar aniq istisno qilingan. Oʻzbek kriptoaktivlar bozoriga kirmoqchi boʻlgan xorijiy investorlar avval Oʻzbekistonda roʻyxatdan oʻtgan mahalliy yuridik shaxs tashkil etishi shart. Bundan tashqari, egalik tuzilmasida ofshor yurisdiksiyalarda roʻyxatdan oʻtgan kompaniyalar boʻlishi mumkin emas, kripto-birjaning ustav kapitali esa faqat taʼsischilarning oʻz mablagʻlari hisobidan shakllantirilishi shart.",
      },
      {
        question: "Oʻzbekistondagi kriptoaktivlar xizmati provayderlari uchun doimiy muvofiqlik talablari qanday?",
        answer: "Litsenziyaning toʻrtta toifasi uchun quyidagi doimiy majburiyatlar qoʻllaniladi: platforma va barcha serverlar Oʻzbekiston hududida fizik joylashgan boʻlishi shart; barcha bitim maʼlumotlari, foydalanuvchi identifikatsiyasi yozuvlari va biznes yozishmalari besh yil davomida saqlanishi kerak; Oʻzbekistonning AML/CFT va shaxsiy maʼlumotlarni himoya qilish toʻgʻrisidagi qonunchiligiga toʻliq rioya etilishi shart; reklamada majburiy xavf ogohlantirishlari boʻlishi shart, daromadlilik vaʼda qilmasligi, bonuslarni eslatmasligi yoki voyaga yetmaganlarni tasvirlamasligi kerak; yashirin mayning va anonim kriptoaktivlar bilan operatsiyalarga yoʻl qoʻyilmaydi; egalik tuzilmasida ofshor kompaniyalar boʻlishi mumkin emas; barcha faoliyat yigʻimlari har oyning 10-sanasigacha toʻliq toʻlanishi shart.",
      },
    ],
  },
};

export default article;
