import type { LocalizedArticle } from "../publications";

const article: Record<string, LocalizedArticle> = {
  en: {
    subtitle: "A structured guide to the tax, customs, legal, and currency benefits available to participants of Uzbekistan's Special Economic Zones.",
    author: "Advizen Legal Practice",
    readTime: "7 min read",
    inShort: {
      figures: [
        { value: "Law No. 604", label: "Law of 17 February 2020 \"On Special Economic Zones\"" },
        { value: "3–10 years", label: "Duration of tax and customs benefits, from USD 300,000 of investment for 3 years to USD 10m and above for 10 years" },
        { value: "120 days", label: "Maximum deferral of VAT on imported goods" },
        { value: "7 days", label: "For refund of excess creditable VAT under the simplified procedure" },
      ],
      points: [
        "SEZ participants in Uzbekistan are exempt from land tax, corporate profit tax, property tax on legal entities and the unified tax payment, and from contributions to the Republican Road Fund and the extra-budgetary fund for educational and medical institutions.",
        "If tax legislation changes, participants may keep applying the tax rates and payment conditions in force at their registration for the duration of their benefits, up to ten years; this does not cover excise goods.",
        "Participants are exempt from customs payments, other than VAT and customs clearance fees, on imports such as construction materials not produced in Uzbekistan and technological equipment without a domestic equivalent.",
        "Participants may open foreign currency accounts at one or more Uzbek banks and hold accounts abroad.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Special Economic Zones (SEZs) are designated territories operating under a special legal regime designed to attract investment and stimulate economic growth. Participants benefit from a comprehensive package of tax exemptions, customs privileges, legal guarantees, and currency freedoms. Uzbekistan recognises several types of SEZ, each with its own regulatory framework and sector focus.",
      },
      { type: "h2" as const, text: "Legislative framework" },
      {
        type: "ul" as const,
        items: [
          "Customs Code of the Republic of Uzbekistan",
          "Tax Code of the Republic of Uzbekistan",
          "Law No. 604 of 17 February 2020 \"On Special Economic Zones\"",
          "Presidential Resolution No. PP-5243 of 14 September 2021 \"On measures for further support of SEZ participants\"",
          "Presidential Decree No. UP-5600 of 21 December 2018 \"On further improvement of the coordination and management system of free economic zones\"",
          "Presidential Decree No. UP-153 of 13 June 2022 \"On additional measures to enhance the effectiveness of special economic, small industrial, youth industrial and entrepreneurial zones\"",
        ],
      },
      { type: "h2" as const, text: "Types of special economic zones" },
      {
        type: "p" as const,
        text: "A Special Economic Zone is a territory with defined boundaries and a special legal regime, created to attract foreign and domestic investment, advanced technology, and management expertise for the accelerated socio-economic development of a region. SEZs may be established in the following forms:",
      },
      {
        type: "ul" as const,
        items: [
          "Free economic zones",
          "Special scientific and technological zones",
          "Tourist and recreational zones",
          "Free trade zones",
          "Special industrial zones",
        ],
      },
      { type: "h2" as const, text: "Special legal regime" },
      {
        type: "p" as const,
        text: "SEZ participants are entitled to legal protection guarantees, benefits, and preferences provided by law. When tax legislation changes, participants may continue to apply — for the duration of their benefits but no longer than ten years — the tax rates and payment conditions that were in effect at the date of their registration in the SEZ register. This stability guarantee does not extend to excise goods.",
      },
      {
        type: "p" as const,
        text: "Participants may use the payment conditions and settlement forms most convenient to them for exported and imported goods. Additional guarantees may be established by Presidential decision. Losses, lost profits, and moral damages caused by unjustified interference by state authorities are subject to court-ordered compensation.",
      },
      { type: "h2" as const, text: "Special customs regime" },
      {
        type: "p" as const,
        text: "The special customs regime may include temporary exemption from or reduction of customs duties, and the abolition or relaxation of non-tariff restrictions on export or import. In practice, SEZ participants are exempt from customs payments (excluding VAT and customs clearance fees) in the following cases:",
      },
      {
        type: "ul" as const,
        items: [
          "Import of construction materials not produced in Uzbekistan, brought in under an investment agreement during the construction period.",
          "Import of technological equipment without a domestic equivalent, per the approved government list (customs clearance fees remain payable).",
          "Import of raw materials, components, and supplies used to manufacture products destined for export (customs clearance fees remain payable).",
        ],
      },
      { type: "h2" as const, text: "Special tax regime" },
      {
        type: "p" as const,
        text: "SEZ participants are exempt from the following taxes and mandatory contributions:",
      },
      {
        type: "ul" as const,
        items: [
          "Land tax",
          "Corporate profit tax",
          "Property tax on legal entities",
          "Unified tax payment (applicable to micro and small enterprises)",
          "Mandatory contributions to the Republican Road Fund under the Cabinet of Ministers",
          "Mandatory contributions to the Extra-budgetary Fund for Development of Educational and Medical Institutions under the Ministry of Finance",
        ],
      },
      {
        type: "p" as const,
        text: "VAT on imported goods may be deferred for up to 120 days. Where the amount of creditable VAT exceeds assessed VAT, the excess is refunded to the participant within seven days under a simplified procedure. VAT refunds from the republican budget are processed in accordance with Cabinet of Ministers regulations.",
      },
      { type: "h2" as const, text: "Investment-based duration of benefits" },
      {
        type: "p" as const,
        text: "Tax and customs benefits are granted for 3 to 10 years depending on the volume of investment committed:",
      },
      {
        type: "ul" as const,
        items: [
          "USD 300,000 – USD 3,000,000 — benefits for 3 years",
          "USD 3,000,000 – USD 5,000,000 — benefits for 5 years",
          "USD 5,000,000 – USD 10,000,000 — benefits for 7 years",
          "USD 10,000,000 and above — benefits for 10 years",
        ],
      },
      { type: "h2" as const, text: "Currency regime" },
      {
        type: "p" as const,
        text: "SEZ participants may freely choose their servicing bank and open foreign currency accounts at one or more commercial banks in Uzbekistan, as well as maintain accounts abroad. Foreign currency revenue — including export proceeds from goods, works, and services — must be credited to the participant's account. Within the SEZ, even non-participant Uzbek resident entities are permitted to sell goods and services to SEZ participants for foreign currency.",
      },
      { type: "h2" as const, text: "Additional rights of SEZ participants" },
      {
        type: "ul" as const,
        items: [
          "Lease land plots through electronic online auction; use buildings and structures on lease terms; and construct infrastructure for production activities as provided by law.",
          "Require the SEZ directorate to provide engineering, utility, and transport infrastructure on schedule in accordance with the investment agreement and project timeline.",
          "Use all services provided by the SEZ directorate on equal terms, including on a contractual basis.",
          "Construct infrastructure at own expense in accordance with the SEZ master plan.",
        ],
      },
      { type: "h2" as const, text: "Zone-specific benefits" },
      { type: "h3" as const, text: "IT Park (it-park.uz)" },
      {
        type: "ul" as const,
        items: [
          "Residents are exempt from all taxes and mandatory contributions to state-earmarked funds, including social tax, until 1 January 2028.",
          "Employees of IT Park residents pay personal income tax at a reduced rate of 7.5% (instead of the standard 12%) on income earned until 1 January 2028.",
          "Residents may only carry out permitted IT-related activities and must transfer contributions to the directorate's demand deposit account by the 20th of the month following each reporting period.",
        ],
      },
      { type: "h2" as const, text: "How Advizen can help" },
      {
        type: "p" as const,
        text: "Selecting the right SEZ, structuring an investment project to maximise the available benefits, and managing ongoing compliance obligations requires careful legal and tax planning. Advizen's team assists clients in assessing eligibility, preparing applications for SEZ participant status, drafting investment agreements, and navigating the regulatory requirements of the zone directorate.",
      },
    ],
    faq: [
      {
        question: "What tax benefits do Special Economic Zone participants receive in Uzbekistan?",
        answer: "SEZ participants in Uzbekistan receive a comprehensive package including exemptions from corporate income tax, property tax, and land tax for periods of up to ten years. Customs duty exemptions apply to imported equipment and raw materials. IT Park residents are exempt from all taxes and mandatory contributions to state-earmarked funds, including social tax, until 1 January 2028, and their employees pay personal income tax at a reduced rate of 7.5% on income earned until that date.",
      },
      {
        question: "What types of Special Economic Zones exist in Uzbekistan?",
        answer: "Uzbekistan recognises five types of SEZs: free economic zones, special scientific and technological zones, tourist and recreational zones, free trade zones, and special industrial zones. Each type has its own regulatory framework and sector focus.",
      },
      {
        question: "Are SEZ tax benefits guaranteed if legislation changes?",
        answer: "Yes. When tax legislation changes, SEZ participants may continue to apply the tax rates and conditions in effect at the date of their registration for the duration of their benefits — but no longer than ten years. This legislative stability guarantee does not extend to excise goods.",
      },
      {
        question: "How do companies apply for SEZ participant status in Uzbekistan?",
        answer: "Companies apply to the relevant SEZ administration, meeting minimum investment thresholds set by the zone operator. The process involves signing an investment agreement, registration in the SEZ register, and issuance of a participant certificate. Advizen assists with eligibility assessment, application preparation, and regulatory compliance.",
      },
    ],
  },
  ru: {
    subtitle: "Структурированное руководство по налоговым, таможенным, правовым и валютным льготам, доступным участникам особых экономических зон Узбекистана.",
    author: "Advizen Legal Practice",
    readTime: "7 мин чтения",
    inShort: {
      figures: [
        { value: "Закон № 604", label: "Закон от 17 февраля 2020 года «Об особых экономических зонах»" },
        { value: "3–10 лет", label: "Срок налоговых и таможенных льгот: от 300 000 долл. США инвестиций — 3 года, от 10 млн долл. США — 10 лет" },
        { value: "120 дней", label: "Максимальная отсрочка НДС по импортируемым товарам" },
        { value: "7 дней", label: "На возврат превышения зачитываемого НДС в упрощённом порядке" },
      ],
      points: [
        "Участники ОЭЗ в Узбекистане освобождены от земельного налога, налога на прибыль, налога на имущество юридических лиц и единого налогового платежа, а также от отчислений в Республиканский дорожный фонд и внебюджетный фонд развития образовательных и медицинских учреждений.",
        "При изменении налогового законодательства участники вправе применять ставки и условия уплаты налогов, действовавшие на дату регистрации, в течение срока льгот, но не более десяти лет; это не распространяется на подакцизные товары.",
        "Участники освобождены от таможенных платежей, кроме НДС и сборов за таможенное оформление, при ввозе, например, не производимых в Узбекистане строительных материалов и технологического оборудования, не имеющего отечественных аналогов.",
        "Участники могут открывать валютные счета в одном или нескольких банках Узбекистана и иметь счета за рубежом.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Особые экономические зоны (ОЭЗ) — это выделенные территории, функционирующие в условиях особого правового режима, созданного для привлечения инвестиций и стимулирования экономического роста. Участники пользуются комплексным пакетом налоговых освобождений, таможенных привилегий, правовых гарантий и валютных свобод. В Узбекистане признаётся несколько видов ОЭЗ, каждый из которых имеет собственную нормативно-правовую базу и отраслевой фокус.",
      },
      { type: "h2" as const, text: "Законодательная база" },
      {
        type: "ul" as const,
        items: [
          "Таможенный кодекс Республики Узбекистан",
          "Налоговый кодекс Республики Узбекистан",
          "Закон № 604 от 17 февраля 2020 года «Об особых экономических зонах»",
          "Постановление Президента № ПП-5243 от 14 сентября 2021 года «О мерах по дополнительной поддержке участников ОЭЗ»",
          "Указ Президента № УП-5600 от 21 декабря 2018 года «О дальнейшем совершенствовании системы координации и управления свободными экономическими зонами»",
          "Указ Президента № УП-153 от 13 июня 2022 года «О дополнительных мерах по повышению эффективности специальных экономических, малых промышленных, молодёжных промышленных и предпринимательских зон»",
        ],
      },
      { type: "h2" as const, text: "Виды особых экономических зон" },
      {
        type: "p" as const,
        text: "Особая экономическая зона — это территория с определёнными границами и особым правовым режимом, создаваемая для привлечения иностранных и отечественных инвестиций, передовых технологий и управленческого опыта в целях ускоренного социально-экономического развития региона. ОЭЗ могут создаваться в следующих формах:",
      },
      {
        type: "ul" as const,
        items: [
          "Свободные экономические зоны",
          "Специальные научно-технологические зоны",
          "Туристско-рекреационные зоны",
          "Свободные торговые зоны",
          "Специальные промышленные зоны",
        ],
      },
      { type: "h2" as const, text: "Особый правовой режим" },
      {
        type: "p" as const,
        text: "Участники ОЭЗ имеют право на гарантии правовой защиты, льготы и преференции, предусмотренные законодательством. При изменении налогового законодательства участники вправе продолжать применять — в течение срока действия льгот, но не более десяти лет — налоговые ставки и условия уплаты, действовавшие на дату их регистрации в реестре ОЭЗ. Данная гарантия стабильности не распространяется на подакцизные товары.",
      },
      {
        type: "p" as const,
        text: "Участники вправе использовать наиболее удобные для них условия оплаты и формы расчётов при экспорте и импорте товаров. Дополнительные гарантии могут быть установлены Президентским решением. Убытки, упущенная выгода и моральный вред, причинённые необоснованным вмешательством государственных органов, подлежат возмещению по решению суда.",
      },
      { type: "h2" as const, text: "Особый таможенный режим" },
      {
        type: "p" as const,
        text: "Особый таможенный режим может предусматривать временное освобождение от таможенных пошлин или их снижение, а также отмену или смягчение нетарифных ограничений на экспорт или импорт. На практике участники ОЭЗ освобождены от таможенных платежей (за исключением НДС и сборов за таможенное оформление) в следующих случаях:",
      },
      {
        type: "ul" as const,
        items: [
          "Ввоз строительных материалов, не производимых в Узбекистане, в рамках инвестиционного соглашения в период строительства.",
          "Ввоз технологического оборудования, не имеющего отечественных аналогов, согласно утверждённому правительством перечню (сборы за таможенное оформление остаются).",
          "Ввоз сырья, комплектующих и расходных материалов, используемых для производства продукции, предназначенной на экспорт (сборы за таможенное оформление остаются).",
        ],
      },
      { type: "h2" as const, text: "Особый налоговый режим" },
      {
        type: "p" as const,
        text: "Участники ОЭЗ освобождаются от следующих налогов и обязательных взносов:",
      },
      {
        type: "ul" as const,
        items: [
          "Земельный налог",
          "Налог на прибыль юридических лиц",
          "Налог на имущество юридических лиц",
          "Единый налоговый платёж (применяемый для микро- и малых предприятий)",
          "Обязательные отчисления в Республиканский дорожный фонд при Кабинете Министров",
          "Обязательные отчисления во Внебюджетный фонд развития образовательных и медицинских учреждений при Министерстве финансов",
        ],
      },
      {
        type: "p" as const,
        text: "НДС на импортируемые товары может быть отсрочен на срок до 120 дней. В случае если сумма зачитываемого НДС превышает начисленный НДС, разница возвращается участнику в течение семи дней по упрощённой процедуре. Возврат НДС из республиканского бюджета осуществляется в соответствии с постановлениями Кабинета Министров.",
      },
      { type: "h2" as const, text: "Продолжительность льгот в зависимости от объёма инвестиций" },
      {
        type: "p" as const,
        text: "Налоговые и таможенные льготы предоставляются на срок от 3 до 10 лет в зависимости от объёма принятых инвестиционных обязательств:",
      },
      {
        type: "ul" as const,
        items: [
          "от 300 000 до 3 000 000 долл. США — льготы на 3 года",
          "от 3 000 000 до 5 000 000 долл. США — льготы на 5 лет",
          "от 5 000 000 до 10 000 000 долл. США — льготы на 7 лет",
          "10 000 000 долл. США и выше — льготы на 10 лет",
        ],
      },
      { type: "h2" as const, text: "Валютный режим" },
      {
        type: "p" as const,
        text: "Участники ОЭЗ вправе свободно выбирать обслуживающий банк и открывать счета в иностранной валюте в одном или нескольких коммерческих банках Узбекистана, а также вести счета за рубежом. Валютная выручка — в том числе экспортные поступления от товаров, работ и услуг — должна зачисляться на счёт участника. В пределах ОЭЗ даже узбекские организации-резиденты, не являющиеся участниками ОЭЗ, вправе реализовывать товары и оказывать услуги участникам ОЭЗ за иностранную валюту.",
      },
      { type: "h2" as const, text: "Дополнительные права участников ОЭЗ" },
      {
        type: "ul" as const,
        items: [
          "Арендовать земельные участки посредством электронных онлайн-торгов; использовать здания и сооружения на правах аренды; возводить инфраструктуру для производственной деятельности в порядке, установленном законодательством.",
          "Требовать от дирекции ОЭЗ обеспечения инженерной, коммунальной и транспортной инфраструктуры в сроки, предусмотренные инвестиционным соглашением и графиком реализации проекта.",
          "Пользоваться всеми услугами дирекции ОЭЗ на равных условиях, в том числе на договорной основе.",
          "Возводить инфраструктуру за собственный счёт в соответствии с генеральным планом ОЭЗ.",
        ],
      },
      { type: "h2" as const, text: "Зональные преимущества" },
      { type: "h3" as const, text: "IT-парк (it-park.uz)" },
      {
        type: "ul" as const,
        items: [
          "Резиденты освобождены от всех налогов и обязательных отчислений в государственные целевые фонды, включая социальный налог, до 1 января 2028 года.",
          "Сотрудники резидентов IT-парка уплачивают налог на доходы физических лиц по сниженной ставке 7,5% (вместо стандартной 12%) на доходы, получаемые до 1 января 2028 года.",
          "Резиденты вправе осуществлять только разрешённые виды IT-деятельности и обязаны перечислять взносы на расчётный счёт дирекции до 20-го числа месяца, следующего за каждым отчётным периодом.",
        ],
      },
      { type: "h2" as const, text: "Чем может помочь Advizen" },
      {
        type: "p" as const,
        text: "Выбор подходящей ОЭЗ, структурирование инвестиционного проекта с целью максимизации доступных льгот и управление текущими обязательствами по соблюдению требований требуют тщательного правового и налогового планирования. Команда Advizen помогает клиентам в оценке права на участие, подготовке заявлений для получения статуса участника ОЭЗ, составлении инвестиционных соглашений и прохождении нормативных требований дирекции зоны.",
      },
    ],
    faq: [
      {
        question: "Какие налоговые льготы получают участники ОЭЗ в Узбекистане?",
        answer: "Участники ОЭЗ в Узбекистане получают комплексный пакет льгот, включающий освобождение от налога на прибыль, налога на имущество и земельного налога на срок до десяти лет. Предусмотрено освобождение от таможенных пошлин на ввозимое оборудование и сырьё. Резиденты IT-парка освобождены от всех налогов и обязательных отчислений в государственные целевые фонды, включая социальный налог, до 1 января 2028 года, а их сотрудники уплачивают НДФЛ по сниженной ставке 7,5% на доходы, получаемые до этой даты.",
      },
      {
        question: "Какие виды ОЭЗ существуют в Узбекистане?",
        answer: "В Узбекистане признаётся пять типов ОЭЗ: свободные экономические зоны, специальные научно-технологические зоны, туристско-рекреационные зоны, свободные торговые зоны и специальные промышленные зоны. Каждый тип имеет собственную нормативно-правовую базу и отраслевую направленность.",
      },
      {
        question: "Сохраняются ли налоговые льготы ОЭЗ при изменении законодательства?",
        answer: "Да. При изменении налогового законодательства участники ОЭЗ вправе продолжать применять ставки и условия уплаты налогов, действовавшие на дату их регистрации в реестре участников зоны, в течение срока действия льгот — но не более десяти лет. Гарантия законодательной стабильности не распространяется на подакцизные товары.",
      },
      {
        question: "Как компании получают статус участника ОЭЗ в Узбекистане?",
        answer: "Компании подают заявку в администрацию соответствующей ОЭЗ, выполнив минимальные инвестиционные пороговые условия. Процедура включает подписание инвестиционного соглашения, регистрацию в реестре участников и получение сертификата участника. Advizen оказывает помощь в оценке соответствия требованиям, подготовке заявки и выполнении регуляторных требований.",
      },
    ],
  },
  uz: {
    subtitle: "Oʻzbekiston maxsus iqtisodiy zonalari ishtirokchilari uchun mavjud soliq, bojxona, huquqiy va valyuta imtiyozlari boʻyicha tizimli qoʻllanma.",
    author: "Advizen Legal Practice",
    readTime: "7 daqiqa oʻqish",
    inShort: {
      figures: [
        { value: "604-sonli Qonun", label: "2020-yil 17-fevraldagi «Maxsus iqtisodiy zonalar toʻgʻrisida»gi Qonun" },
        { value: "3–10 yil", label: "Soliq va bojxona imtiyozlari muddati: 300 000 AQSh dollari investitsiyadan 3 yil, 10 mln AQSh dollari va undan koʻpdan 10 yil" },
        { value: "120 kun", label: "Import qilinadigan tovarlar boʻyicha QQSni kechiktirishning eng uzoq muddati" },
        { value: "7 kun", label: "Hisobga olinadigan QQSning ortiqcha qismini soddalashtirilgan tartibda qaytarish uchun" },
      ],
      points: [
        "Oʻzbekistondagi MIZ ishtirokchilari yer soligʻi, foyda soligʻi, yuridik shaxslarning mulk soligʻi va yagona soliq toʻlovidan, shuningdek Respublika yoʻl fondi hamda Taʼlim va tibbiyot muassasalarini rivojlantirish byudjetdan tashqari fondiga ajratmalardan ozod.",
        "Soliq qonunchiligi oʻzgarganda ishtirokchilar roʻyxatdan oʻtgan sanada amal qilgan soliq stavkalari va toʻlov shartlarini imtiyozlar muddati davomida, lekin oʻn yildan koʻp boʻlmagan muddatda qoʻllashi mumkin; bu aksiz tovarlariga tatbiq etilmaydi.",
        "Ishtirokchilar Oʻzbekistonda ishlab chiqarilmaydigan qurilish materiallari va mahalliy muqobili boʻlmagan texnologik uskunalar kabi importda QQS va bojxona rasmiylashtiruvi yigʻimlaridan tashqari bojxona toʻlovlaridan ozod.",
        "Ishtirokchilar Oʻzbekistondagi bir yoki bir nechta bankda valyuta hisobvaraqlarini ochishi va xorijda hisobvaraqlarga ega boʻlishi mumkin.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Maxsus iqtisodiy zonalar (MIZ) — investitsiyalarni jalb qilish va iqtisodiy oʻsishni ragʻbatlantirish uchun yaratilgan maxsus huquqiy rejim asosida faoliyat yuritadigan belgilangan hududlardir. Ishtirokchilar soliq imtiyozlari, bojxona imtiyozlari, huquqiy kafolatlar va valyuta erkinliklarining keng toʻplamidan foydalanadilar. Oʻzbekiston bir nechta MIZ turlarini tan oladi, ularning har birining oʻz tartibga soluvchi tizimi va tarmoq yoʻnalishi mavjud.",
      },
      { type: "h2" as const, text: "Qonunchilik bazasi" },
      {
        type: "ul" as const,
        items: [
          "Oʻzbekiston Respublikasi Bojxona kodeksi",
          "Oʻzbekiston Respublikasi Soliq kodeksi",
          "2020 yil 17 fevraldagi «Maxsus iqtisodiy zonalar toʻgʻrisida»gi 604-sonli Qonun",
          "2021 yil 14 sentabrdagi «MIZ ishtirokchilarini yanada qoʻllab-quvvatlash chora-tadbirlari toʻgʻrisida»gi PQ-5243-sonli Prezident Qarori",
          "2018 yil 21 dekabrdagi «Erkin iqtisodiy zonalarni muvofiqlashtirish va boshqarish tizimini yanada takomillashtirish toʻgʻrisida»gi PF-5600-sonli Prezident Farmoni",
          "2022 yil 13 iyundagi «Maxsus iqtisodiy, kichik sanoat, yoshlar sanoat va tadbirkorlik zonalarining samaradorligini oshirish boʻyicha qoʻshimcha chora-tadbirlar toʻgʻrisida»gi PF-153-sonli Prezident Farmoni",
        ],
      },
      { type: "h2" as const, text: "Maxsus iqtisodiy zonalar turlari" },
      {
        type: "p" as const,
        text: "Maxsus iqtisodiy zona — mintaqaning jadal ijtimoiy-iqtisodiy rivojlanishi uchun xorijiy va ichki investitsiyalarni, ilgʻor texnologiyalarni va boshqaruv tajribasini jalb qilish maqsadida yaratilgan, belgilangan chegaralari va maxsus huquqiy rejimi mavjud hududdir. MIZlar quyidagi shakllarda tashkil etilishi mumkin:",
      },
      {
        type: "ul" as const,
        items: [
          "Erkin iqtisodiy zonalar",
          "Maxsus ilmiy-texnologik zonalar",
          "Turistik-rekreatsion zonalar",
          "Erkin savdo zonalari",
          "Maxsus sanoat zonalari",
        ],
      },
      { type: "h2" as const, text: "Maxsus huquqiy rejim" },
      {
        type: "p" as const,
        text: "MIZ ishtirokchilari qonun hujjatlarida nazarda tutilgan huquqiy himoya kafolatlari, imtiyozlar va afzalliklarga haqlidirlar. Soliq qonunchiligi oʻzgarganda ishtirokchilar — imtiyozlar muddati davomida, lekin oʻn yildan koʻp boʻlmagan holda — MIZ reestriga roʻyxatdan oʻtgan sanada amal qilgan soliq stavkalari va toʻlov shartlarini qoʻllashda davom etishlari mumkin. Ushbu barqarorlik kafolati aksiz tovarlarga nisbatan qoʻllanilmaydi.",
      },
      {
        type: "p" as const,
        text: "Ishtirokchilar eksport va import qilinadigan tovarlar uchun oʻzlari uchun qulay toʻlov shartlari va hisob-kitob shakllaridan foydalanishi mumkin. Qoʻshimcha kafolatlar Prezident qarori bilan belgilanishi mumkin. Davlat organlari tomonidan asossiz aralashuv natijasida etkazilgan zararlar, boy berilgan foyda va maʼnaviy zarar sud qarori bilan qoplanishga tortiladi.",
      },
      { type: "h2" as const, text: "Maxsus bojxona rejimi" },
      {
        type: "p" as const,
        text: "Maxsus bojxona rejimi bojxona toʻlovlaridan vaqtincha ozod etish yoki ularni kamaytirishni, hamda eksport yoki importga nisbatan noitarif cheklovlarni bekor qilish yoki yumshatishni oʻz ichiga olishi mumkin. Amalda MIZ ishtirokchilari quyidagi hollarda bojxona toʻlovlaridan (QQS va bojxona rasmiylashtiruv yigʻimlaridan tashqari) ozod qilingan:",
      },
      {
        type: "ul" as const,
        items: [
          "Oʻzbekistonda ishlab chiqarilmaydigan qurilish materiallarini investitsiya shartnomasi doirasida qurilish davrida olib kirishda.",
          "Ichki muqobili boʻlmagan texnologik uskunalarni tasdiqlangan hukumat roʻyxati boʻyicha olib kirishda (bojxona rasmiylashtiruv yigʻimlari saqlanib qoladi).",
          "Eksportga moʻljallangan mahsulotlar ishlab chiqarishda ishlatiladigan xom ashyo, komplektlovchilar va sarflanadigan materiallarni olib kirishda (bojxona rasmiylashtiruv yigʻimlari saqlanib qoladi).",
        ],
      },
      { type: "h2" as const, text: "Maxsus soliq rejimi" },
      {
        type: "p" as const,
        text: "MIZ ishtirokchilari quyidagi soliq va majburiy toʻlovlardan ozod etiladi:",
      },
      {
        type: "ul" as const,
        items: [
          "Yer soligʻi",
          "Yuridik shaxslarning foyda soligʻi",
          "Yuridik shaxslarning mulk soligʻi",
          "Yagona soliq toʻlovi (mikro va kichik korxonalarga qoʻllaniladigan)",
          "Vazirlar Mahkamasi huzuridagi Respublika yoʻl fondiga majburiy ajratmalar",
          "Moliya vazirligi huzuridagi Taʼlim va tibbiyot muassasalarini rivojlantirish byudjetdan tashqari fondiga majburiy ajratmalar",
        ],
      },
      {
        type: "p" as const,
        text: "Import qilinadigan tovarlardan olinadigan QQS 120 kungacha kechiktirilishi mumkin. Hisobga olinadigan QQS miqdori hisoblangan QQSdan oshgan hollarda ortiqcha qism ishtirokchiga yetti kun ichida soddalashtirilgan tartibda qaytariladi. Respublika byudjetidan QQS qaytarish Vazirlar Mahkamasi qarorlari bilan tartibga solinadi.",
      },
      { type: "h2" as const, text: "Investitsiya hajmiga qarab imtiyozlar muddati" },
      {
        type: "p" as const,
        text: "Soliq va bojxona imtiyozlari qilingan investitsiya majburiyatlari hajmiga qarab 3 dan 10 yilgacha beriladi:",
      },
      {
        type: "ul" as const,
        items: [
          "300 000 – 3 000 000 AQSh dollari — 3 yilga imtiyozlar",
          "3 000 000 – 5 000 000 AQSh dollari — 5 yilga imtiyozlar",
          "5 000 000 – 10 000 000 AQSh dollari — 7 yilga imtiyozlar",
          "10 000 000 AQSh dollari va undan koʻp — 10 yilga imtiyozlar",
        ],
      },
      { type: "h2" as const, text: "Valyuta rejimi" },
      {
        type: "p" as const,
        text: "MIZ ishtirokchilari xizmat koʻrsatuvchi bankni erkin tanlashi va Oʻzbekistondagi bir yoki bir nechta tijorat bankida xorijiy valyutadagi hisobvaraqlar ochishi, shuningdek chet elda hisobvaraqlar yuritishi mumkin. Xorijiy valyuta tushumlari — tovarlar, ishlar va xizmatlardan olingan eksport tushumlari jumladan — ishtirokchining hisobvaragʻiga oʻtkazilishi kerak. MIZ chegarasida hatto MIZ ishtirokchisi boʻlmagan oʻzbek rezidenti yuridik shaxslar ham MIZ ishtirokchilariga tovarlar sotish va xizmatlar koʻrsatish huquqiga xorijiy valyutada ega.",
      },
      { type: "h2" as const, text: "MIZ ishtirokchilarining qoʻshimcha huquqlari" },
      {
        type: "ul" as const,
        items: [
          "Elektron onlayn auktsion orqali yer uchastkalarini ijaraga olish; binolar va inshootlardan ijara shartlarida foydalanish; qonun hujjatlarida belgilangan tartibda ishlab chiqarish faoliyati uchun infratuzilma barpo etish.",
          "MIZ direksiyasidan investitsiya shartnomasi va loyiha jadvali bilan muvofiq ravishda muhandislik, kommunal va transport infratuzilmasini oʻz vaqtida taʼminlashni talab qilish.",
          "MIZ direksiyasi tomonidan taqdim etiladigan barcha xizmatlardan teng shartlarda, jumladan shartnoma asosida foydalanish.",
          "MIZ bosh rejasiga muvofiq oʻz hisobidan infratuzilma barpo etish.",
        ],
      },
      { type: "h2" as const, text: "Zonaga xos imtiyozlar" },
      { type: "h3" as const, text: "IT-Park (it-park.uz)" },
      {
        type: "ul" as const,
        items: [
          "Rezidentlar 2028 yil 1 yanvargacha ijtimoiy soliq jumladan barcha soliqlar va davlat maqsadli jamgʻarmalariga majburiy ajratmalardan ozod etilgan.",
          "IT-Park rezidentlarining xodimlari 2028 yil 1 yanvargacha olingan daromadlaridan standart 12% oʻrniga 7,5% kamaytirilgan stavkada jismoniy shaxslardan daromad soligʻi toʻlaydilar.",
          "Rezidentlar faqat ruxsat etilgan IT-ga oid faoliyat turlarini amalga oshirishi va har bir hisobot davridan keyingi oyning 20-sanasigacha direksiyaning talab qilib qaytarib olish hisobvaragʻiga ajratmalar oʻtkazishi shart.",
        ],
      },
      { type: "h2" as const, text: "Advizen qanday yordam bera oladi" },
      {
        type: "p" as const,
        text: "Toʻgʻri MIZni tanlash, mavjud imtiyozlardan maksimal darajada foydalanish uchun investitsiya loyihasini tuzish va doimiy muvofiqlik majburiyatlarini boshqarish puxta huquqiy va soliqqa oid rejalashtirish talab etadi. Advizen jamoasi mijozlarga muvofiqligi baholashda, MIZ ishtirokchisi maqomini olish uchun arizalar tayyorlashda, investitsiya shartnomalari tuzishda va zona direksiyasining tartibga soluvchi talablarida moʻljal olishda yordam beradi.",
      },
    ],
    faq: [
      {
        question: "Oʻzbekistonda SEZ ishtirokchilari qanday soliq imtiyozlariga ega?",
        answer: "Oʻzbekistonda SEZ ishtirokchilari toʻliq imtiyozlar paketini oladilar: korporativ daromad soligʻi, mulk soligʻi va yer soligʻidan oʻn yilgacha ozodlik. Importqilinadigan uskunalar va xom ashyo uchun bojxona toʻlovlaridan ozodlik qoʻllaniladi. IT-Park rezidentlari 2028 yil 1 yanvargacha ijtimoiy soliq jumladan barcha soliqlar va davlat maqsadli jamgʻarmalariga majburiy ajratmalardan ozod etilgan, ularning xodimlari esa shu sanagacha olingan daromadlaridan 7,5% kamaytirilgan stavkada jismoniy shaxslardan daromad soligʻi toʻlaydilar.",
      },
      {
        question: "Oʻzbekistonda qanday turdagi maxsus iqtisodiy zonalar mavjud?",
        answer: "Oʻzbekiston beshta turdagi SEZni tan oladi: erkin iqtisodiy zonalar, maxsus ilmiy-texnologik zonalar, turistik-rekreatsion zonalar, erkin savdo zonalari va maxsus sanoat zonalari. Har bir tur oʻzining tartibga solish tizimi va tarmoq yoʻnalishiga ega.",
      },
      {
        question: "Qonunchilik oʻzgarganda SEZ soliq imtiyozlari saqlanadimi?",
        answer: "Ha. Soliq qonunchiligi oʻzgarganda SEZ ishtirokchilari zona ishtirokchilari reestriga roʻyxatdan oʻtgan sanada amal qilgan soliq stavkalari va toʻlov shartlarini imtiyozlari amal qilgan davr mobaynida, lekin oʻn yildan koʻp boʻlmagan muddatda qoʻllashni davom ettirishga haqli. Qonunchilik barqarorligi kafolati aksiz tovarlarga tatbiq etilmaydi.",
      },
      {
        question: "Oʻzbekistonda kompaniyalar SEZ ishtirokchisi maqomini qanday oladi?",
        answer: "Kompaniyalar tegishli SEZ maʼmuriyatiga murojaat qilib, zona operatori tomonidan belgilangan minimal investitsiya chegarasini bajaradilar. Jarayon investitsiya shartnomasini imzolash, ishtirokchilar reestriga roʻyxatdan oʻtish va ishtirokchi sertifikati olishni oʻz ichiga oladi. Advizen muvofiqligi baholash, ariza tayyorlash va tartibga solish talablariga javob berishda yordam beradi.",
      },
    ],
  },
};

export default article;
