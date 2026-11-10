import type { LocalizedArticle } from "../publications";

const article: Record<string, LocalizedArticle> = {
  en: {
    subtitle: "A structured guide to the tax, customs, legal, and currency benefits available to participants of Uzbekistan's Special Economic Zones.",
    author: "Advizen Legal Practice",
    readTime: "7 min read",
    inShort: {
      figures: [
        { value: "Law No. 604", label: "Law of 17 February 2020 \"On Special Economic Zones\"" },
        {
          value: "3–10 years",
          label: "Duration of tax and customs benefits, from USD 300,000 of investment for 3 years to USD 10m and above for 10 years",
        },
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
        type: "p",
        text: "Special Economic Zones (SEZs) are designated territories operating under a special legal regime designed to attract investment and stimulate economic growth. Participants benefit from a comprehensive package of tax exemptions, customs privileges, legal guarantees, and currency freedoms. Uzbekistan recognises several types of SEZ, each with its own regulatory framework and sector focus.",
      },
      { type: "h2", text: "Legislative framework" },
      {
        type: "sources",
        items: [
          { title: "Customs Code of the Republic of Uzbekistan" },
          { title: "Tax Code of the Republic of Uzbekistan", href: "https://lex.uz/en/docs/4674893" },
          {
            title: "Law No. 604 \"On Special Economic Zones\"",
            meta: "17 February 2020",
            href: "https://lex.uz/en/docs/4737514",
          },
          {
            title: "Presidential Resolution No. PP-5243",
            meta: "14 September 2021 · On measures for further support of SEZ participants",
            href: "https://lex.uz/en/docs/5633655",
          },
          {
            title: "Presidential Decree No. UP-5600",
            meta: "21 December 2018 · On further improvement of the coordination and management system of free economic zones",
            href: "https://lex.uz/en/docs/4117767",
          },
          {
            title: "Presidential Decree No. UP-153",
            meta: "13 June 2022 · On additional measures to enhance the effectiveness of special economic, small industrial, youth industrial and entrepreneurial zones",
            href: "https://lex.uz/en/docs/6061066",
          },
        ],
      },
      { type: "h2", text: "Types of special economic zones" },
      {
        type: "p",
        text: "A Special Economic Zone is a territory with defined boundaries and a special legal regime, created to attract foreign and domestic investment, advanced technology, and management expertise for the accelerated socio-economic development of a region. SEZs may be established in the following forms:",
      },
      {
        type: "ul",
        items: [
          "Free economic zones",
          "Special scientific and technological zones",
          "Tourist and recreational zones",
          "Free trade zones",
          "Special industrial zones",
        ],
      },
      { type: "h2", text: "Special legal regime" },
      {
        type: "p",
        text: "SEZ participants are entitled to legal protection guarantees, benefits, and preferences provided by law. When tax legislation changes, participants may continue to apply — for the duration of their benefits but no longer than ten years — the tax rates and payment conditions that were in effect at the date of their registration in the SEZ register. This stability guarantee does not extend to excise goods.",
      },
      {
        type: "p",
        text: "Participants may use the payment conditions and settlement forms most convenient to them for exported and imported goods. Additional guarantees may be established by Presidential decision. Losses, lost profits, and moral damages caused by unjustified interference by state authorities are subject to court-ordered compensation.",
      },
      { type: "h2", text: "Special customs regime" },
      {
        type: "p",
        text: "The special customs regime may include temporary exemption from or reduction of customs duties, and the abolition or relaxation of non-tariff restrictions on export or import. In practice, SEZ participants are exempt from customs payments (excluding VAT and customs clearance fees) in the following cases:",
      },
      {
        type: "ul",
        items: [
          "Import of construction materials not produced in Uzbekistan, brought in under an investment agreement during the construction period.",
          "Import of technological equipment without a domestic equivalent, per the approved government list (customs clearance fees remain payable).",
          "Import of raw materials, components, and supplies used to manufacture products destined for export (customs clearance fees remain payable).",
        ],
      },
      { type: "h2", text: "Special tax regime" },
      {
        type: "p",
        text: "SEZ participants are exempt from the following taxes and mandatory contributions:",
      },
      {
        type: "checks",
        items: [
          "Land tax",
          "Corporate profit tax",
          "Property tax on legal entities",
          "Unified tax payment (applicable to micro and small enterprises)",
          "Mandatory contributions to the Republican Road Fund under the Cabinet of Ministers",
          "Mandatory contributions to the Extra-budgetary Fund for Development of Educational and Medical Institutions under the Ministry of Finance",
        ],
        except: "VAT still applies: it is deferred and refunded quickly instead",
      },
      { type: "p", text: "VAT is not exempt, but participants get two cash-flow advantages:" },
      {
        type: "figures",
        items: [
          { value: "120", unit: "days", label: "Maximum deferral of VAT on imported goods" },
          {
            value: "7",
            unit: "days",
            label: "To refund excess creditable VAT under the simplified procedure",
          },
        ],
      },
      {
        type: "p",
        text: "VAT refunds from the republican budget are processed in accordance with Cabinet of Ministers regulations.",
      },
      { type: "h2", text: "Investment-based duration of benefits" },
      {
        type: "p",
        text: "Tax and customs benefits are granted for 3 to 10 years depending on the volume of investment committed:",
      },
      {
        type: "table",
        head: [
          "Investment committed",
          "Benefits last",
        ],
        rows: [
          {
            cells: [
              "USD 300,000 – 3m",
              "3 years",
            ],
            bar: 0.3,
          },
          {
            cells: [
              "USD 3m – 5m",
              "5 years",
            ],
            bar: 0.5,
          },
          {
            cells: [
              "USD 5m – 10m",
              "7 years",
            ],
            bar: 0.7,
          },
          {
            cells: [
              "USD 10m and above",
              "10 years",
            ],
            bar: 1,
            highlight: true,
          },
        ],
      },
      {
        type: "takeaway",
        title: "What this means for you",
        items: [
          "How long the benefits last depends on the size of the investment, so fix the investment amount before applying.",
          "Committing USD 10m or more secures benefits for the full 10 years.",
          "Plan for VAT: it is deferred and refunded quickly, not exempt.",
        ],
      },
      { type: "h2", text: "Currency regime" },
      {
        type: "p",
        text: "SEZ participants may freely choose their servicing bank and open foreign currency accounts at one or more commercial banks in Uzbekistan, as well as maintain accounts abroad. Foreign currency revenue — including export proceeds from goods, works, and services — must be credited to the participant's account. Within the SEZ, even non-participant Uzbek resident entities are permitted to sell goods and services to SEZ participants for foreign currency.",
      },
      { type: "h2", text: "Additional rights of SEZ participants" },
      {
        type: "ul",
        items: [
          "Lease land plots through electronic online auction; use buildings and structures on lease terms; and construct infrastructure for production activities as provided by law.",
          "Require the SEZ directorate to provide engineering, utility, and transport infrastructure on schedule in accordance with the investment agreement and project timeline.",
          "Use all services provided by the SEZ directorate on equal terms, including on a contractual basis.",
          "Construct infrastructure at own expense in accordance with the SEZ master plan.",
        ],
      },
      { type: "h2", text: "Zone-specific benefits" },
      { type: "h3", text: "IT Park (it-park.uz)" },
      {
        type: "ul",
        items: [
          "Residents are exempt from all taxes and mandatory contributions to state-earmarked funds, including social tax, until 1 January 2028.",
          "Employees of IT Park residents pay personal income tax at a reduced rate of 7.5% (instead of the standard 12%) on income earned until 1 January 2028.",
          "Residents may only carry out permitted IT-related activities and must transfer contributions to the directorate's demand deposit account by the 20th of the month following each reporting period.",
        ],
      },
      { type: "h2", text: "How Advizen can help" },
      {
        type: "p",
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
    author: "Юридическая практика Advizen",
    readTime: "7 мин чтения",
    inShort: {
      figures: [
        { value: "Закон № 604", label: "Закон от 17 февраля 2020 года «Об особых экономических зонах»" },
        {
          value: "3–10 лет",
          label: "Срок налоговых и таможенных льгот: от 300 000 долл. США инвестиций — 3 года, от 10 млн долл. США — 10 лет",
        },
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
        type: "p",
        text: "Особые экономические зоны (ОЭЗ) — это выделенные территории, функционирующие в условиях особого правового режима, созданного для привлечения инвестиций и стимулирования экономического роста. Участники пользуются комплексным пакетом налоговых освобождений, таможенных привилегий, правовых гарантий и валютных свобод. В Узбекистане признаётся несколько видов ОЭЗ, каждый из которых имеет собственную нормативно-правовую базу и отраслевой фокус.",
      },
      { type: "h2", text: "Законодательная база" },
      {
        type: "sources",
        items: [
          { title: "Таможенный кодекс Республики Узбекистан" },
          { title: "Налоговый кодекс Республики Узбекистан", href: "https://lex.uz/ru/docs/4674893" },
          {
            title: "Закон № 604 «Об особых экономических зонах»",
            meta: "17 февраля 2020 года",
            href: "https://lex.uz/ru/docs/4737514",
          },
          {
            title: "Постановление Президента № ПП-5243",
            meta: "14 сентября 2021 года · О мерах по дополнительной поддержке участников ОЭЗ",
            href: "https://lex.uz/ru/docs/5633655",
          },
          {
            title: "Указ Президента № УП-5600",
            meta: "21 декабря 2018 года · О дальнейшем совершенствовании системы координации и управления свободными экономическими зонами",
            href: "https://lex.uz/ru/docs/4117767",
          },
          {
            title: "Указ Президента № УП-153",
            meta: "13 июня 2022 года · О дополнительных мерах по повышению эффективности специальных экономических, малых промышленных, молодёжных промышленных и предпринимательских зон",
            href: "https://lex.uz/ru/docs/6061066",
          },
        ],
      },
      { type: "h2", text: "Виды особых экономических зон" },
      {
        type: "p",
        text: "Особая экономическая зона — это территория с определёнными границами и особым правовым режимом, создаваемая для привлечения иностранных и отечественных инвестиций, передовых технологий и управленческого опыта в целях ускоренного социально-экономического развития региона. ОЭЗ могут создаваться в следующих формах:",
      },
      {
        type: "ul",
        items: [
          "Свободные экономические зоны",
          "Специальные научно-технологические зоны",
          "Туристско-рекреационные зоны",
          "Свободные торговые зоны",
          "Специальные промышленные зоны",
        ],
      },
      { type: "h2", text: "Особый правовой режим" },
      {
        type: "p",
        text: "Участники ОЭЗ имеют право на гарантии правовой защиты, льготы и преференции, предусмотренные законодательством. При изменении налогового законодательства участники вправе продолжать применять — в течение срока действия льгот, но не более десяти лет — налоговые ставки и условия уплаты, действовавшие на дату их регистрации в реестре ОЭЗ. Данная гарантия стабильности не распространяется на подакцизные товары.",
      },
      {
        type: "p",
        text: "Участники вправе использовать наиболее удобные для них условия оплаты и формы расчётов при экспорте и импорте товаров. Дополнительные гарантии могут быть установлены Президентским решением. Убытки, упущенная выгода и моральный вред, причинённые необоснованным вмешательством государственных органов, подлежат возмещению по решению суда.",
      },
      { type: "h2", text: "Особый таможенный режим" },
      {
        type: "p",
        text: "Особый таможенный режим может предусматривать временное освобождение от таможенных пошлин или их снижение, а также отмену или смягчение нетарифных ограничений на экспорт или импорт. На практике участники ОЭЗ освобождены от таможенных платежей (за исключением НДС и сборов за таможенное оформление) в следующих случаях:",
      },
      {
        type: "ul",
        items: [
          "Ввоз строительных материалов, не производимых в Узбекистане, в рамках инвестиционного соглашения в период строительства.",
          "Ввоз технологического оборудования, не имеющего отечественных аналогов, согласно утверждённому правительством перечню (сборы за таможенное оформление остаются).",
          "Ввоз сырья, комплектующих и расходных материалов, используемых для производства продукции, предназначенной на экспорт (сборы за таможенное оформление остаются).",
        ],
      },
      { type: "h2", text: "Особый налоговый режим" },
      { type: "p", text: "Участники ОЭЗ освобождаются от следующих налогов и обязательных взносов:" },
      {
        type: "checks",
        items: [
          "Земельный налог",
          "Налог на прибыль юридических лиц",
          "Налог на имущество юридических лиц",
          "Единый налоговый платёж (применяемый для микро- и малых предприятий)",
          "Обязательные отчисления в Республиканский дорожный фонд при Кабинете Министров",
          "Обязательные отчисления во Внебюджетный фонд развития образовательных и медицинских учреждений при Министерстве финансов",
        ],
        except: "НДС не освобождается: вместо этого отсрочка и быстрый возврат",
      },
      {
        type: "p",
        text: "От НДС участники не освобождены, но получают два преимущества для оборотных средств:",
      },
      {
        type: "figures",
        items: [
          { value: "120", unit: "дней", label: "Максимальная отсрочка НДС по импортируемым товарам" },
          {
            value: "7",
            unit: "дней",
            label: "На возврат превышения зачитываемого НДС по упрощённой процедуре",
          },
        ],
      },
      {
        type: "p",
        text: "Возврат НДС из республиканского бюджета осуществляется в соответствии с постановлениями Кабинета Министров.",
      },
      { type: "h2", text: "Продолжительность льгот в зависимости от объёма инвестиций" },
      {
        type: "p",
        text: "Налоговые и таможенные льготы предоставляются на срок от 3 до 10 лет в зависимости от объёма принятых инвестиционных обязательств:",
      },
      {
        type: "table",
        head: [
          "Объём инвестиций",
          "Срок льгот",
        ],
        rows: [
          {
            cells: [
              "300 тыс. – 3 млн долл. США",
              "3 года",
            ],
            bar: 0.3,
          },
          {
            cells: [
              "3–5 млн долл. США",
              "5 лет",
            ],
            bar: 0.5,
          },
          {
            cells: [
              "5–10 млн долл. США",
              "7 лет",
            ],
            bar: 0.7,
          },
          {
            cells: [
              "от 10 млн долл. США",
              "10 лет",
            ],
            bar: 1,
            highlight: true,
          },
        ],
      },
      {
        type: "takeaway",
        title: "Что это значит для вас",
        items: [
          "Срок льгот зависит от объёма инвестиций, поэтому определите сумму инвестиций до подачи заявки.",
          "Инвестиции от 10 млн долл. США дают льготы на полные 10 лет.",
          "Учитывайте НДС в планах: он не отменяется, а откладывается и быстро возвращается.",
        ],
      },
      { type: "h2", text: "Валютный режим" },
      {
        type: "p",
        text: "Участники ОЭЗ вправе свободно выбирать обслуживающий банк и открывать счета в иностранной валюте в одном или нескольких коммерческих банках Узбекистана, а также вести счета за рубежом. Валютная выручка — в том числе экспортные поступления от товаров, работ и услуг — должна зачисляться на счёт участника. В пределах ОЭЗ даже узбекские организации-резиденты, не являющиеся участниками ОЭЗ, вправе реализовывать товары и оказывать услуги участникам ОЭЗ за иностранную валюту.",
      },
      { type: "h2", text: "Дополнительные права участников ОЭЗ" },
      {
        type: "ul",
        items: [
          "Арендовать земельные участки посредством электронных онлайн-торгов; использовать здания и сооружения на правах аренды; возводить инфраструктуру для производственной деятельности в порядке, установленном законодательством.",
          "Требовать от дирекции ОЭЗ обеспечения инженерной, коммунальной и транспортной инфраструктуры в сроки, предусмотренные инвестиционным соглашением и графиком реализации проекта.",
          "Пользоваться всеми услугами дирекции ОЭЗ на равных условиях, в том числе на договорной основе.",
          "Возводить инфраструктуру за собственный счёт в соответствии с генеральным планом ОЭЗ.",
        ],
      },
      { type: "h2", text: "Зональные преимущества" },
      { type: "h3", text: "IT-парк (it-park.uz)" },
      {
        type: "ul",
        items: [
          "Резиденты освобождены от всех налогов и обязательных отчислений в государственные целевые фонды, включая социальный налог, до 1 января 2028 года.",
          "Сотрудники резидентов IT-парка уплачивают налог на доходы физических лиц по сниженной ставке 7,5% (вместо стандартной 12%) на доходы, получаемые до 1 января 2028 года.",
          "Резиденты вправе осуществлять только разрешённые виды IT-деятельности и обязаны перечислять взносы на расчётный счёт дирекции до 20-го числа месяца, следующего за каждым отчётным периодом.",
        ],
      },
      { type: "h2", text: "Чем может помочь Advizen" },
      {
        type: "p",
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
    author: "Advizen yuridik amaliyoti",
    readTime: "7 daqiqa oʻqish",
    inShort: {
      figures: [
        {
          value: "604-sonli Qonun",
          label: "2020-yil 17-fevraldagi «Maxsus iqtisodiy zonalar toʻgʻrisida»gi Qonun",
        },
        {
          value: "3–10 yil",
          label: "Soliq va bojxona imtiyozlari muddati: 300 000 AQSh dollari investitsiyadan 3 yil, 10 mln AQSh dollari va undan koʻpdan 10 yil",
        },
        {
          value: "120 kun",
          label: "Import qilinadigan tovarlar boʻyicha QQSni kechiktirishning eng uzoq muddati",
        },
        {
          value: "7 kun",
          label: "Hisobga olinadigan QQSning ortiqcha qismini soddalashtirilgan tartibda qaytarish muddati",
        },
      ],
      points: [
        "Oʻzbekistondagi MIZ ishtirokchilari yer soligʻi, foyda soligʻi, yuridik shaxslarning mulk soligʻi va yagona soliq toʻlovidan, shuningdek Respublika yoʻl fondi hamda Taʼlim va tibbiyot muassasalarini rivojlantirish byudjetdan tashqari fondiga ajratmalardan ozod.",
        "Soliq qonunchiligi oʻzgarganda ishtirokchilar roʻyxatdan oʻtgan sanada amal qilgan soliq stavkalari va toʻlov shartlarini imtiyozlar muddati davomida, lekin oʻn yildan koʻp boʻlmagan muddatda qoʻllashi mumkin; bu aksizli tovarlarga tatbiq etilmaydi.",
        "Ishtirokchilar Oʻzbekistonda ishlab chiqarilmaydigan qurilish materiallari va mahalliy muqobili boʻlmagan texnologik uskunalar kabi tovarlar importida QQS va bojxona rasmiylashtiruvi yigʻimlaridan tashqari bojxona toʻlovlaridan ozod.",
        "Ishtirokchilar Oʻzbekistondagi bir yoki bir nechta bankda valyuta hisobvaraqlarini ochishi va xorijda hisobvaraqlarga ega boʻlishi mumkin.",
      ],
    },
    content: [
      {
        type: "p",
        text: "Maxsus iqtisodiy zonalar (MIZ) — investitsiyalarni jalb qilish va iqtisodiy oʻsishni ragʻbatlantirish uchun yaratilgan maxsus huquqiy rejim asosida faoliyat yuritadigan belgilangan hududlardir. Ishtirokchilar soliq imtiyozlari, bojxona imtiyozlari, huquqiy kafolatlar va valyuta erkinliklarining keng toʻplamidan foydalanadilar. Oʻzbekiston bir nechta MIZ turlarini tan oladi, ularning har birining oʻz tartibga soluvchi tizimi va tarmoq yoʻnalishi mavjud.",
      },
      { type: "h2", text: "Qonunchilik bazasi" },
      {
        type: "sources",
        items: [
          { title: "Oʻzbekiston Respublikasi Bojxona kodeksi" },
          { title: "Oʻzbekiston Respublikasi Soliq kodeksi", href: "https://lex.uz/uz/docs/4674893" },
          {
            title: "«Maxsus iqtisodiy zonalar toʻgʻrisida»gi 604-sonli Qonun",
            meta: "2020-yil 17-fevral",
            href: "https://lex.uz/uz/docs/4737514",
          },
          {
            title: "PQ-5243-sonli Prezident Qarori",
            meta: "2021-yil 14-sentabr · MIZ ishtirokchilarini yanada qoʻllab-quvvatlash chora-tadbirlari toʻgʻrisida",
            href: "https://lex.uz/uz/docs/5633655",
          },
          {
            title: "PF-5600-sonli Prezident Farmoni",
            meta: "2018-yil 21-dekabr · Erkin iqtisodiy zonalarni muvofiqlashtirish va boshqarish tizimini yanada takomillashtirish toʻgʻrisida",
            href: "https://lex.uz/uz/docs/4117767",
          },
          {
            title: "PF-153-sonli Prezident Farmoni",
            meta: "2022-yil 13-iyun · Maxsus iqtisodiy, kichik sanoat, yoshlar sanoat va tadbirkorlik zonalarining samaradorligini oshirish boʻyicha qoʻshimcha chora-tadbirlar toʻgʻrisida",
            href: "https://lex.uz/uz/docs/6061066",
          },
        ],
      },
      { type: "h2", text: "Maxsus iqtisodiy zonalar turlari" },
      {
        type: "p",
        text: "Maxsus iqtisodiy zona — mintaqaning jadal ijtimoiy-iqtisodiy rivojlanishi uchun xorijiy va ichki investitsiyalarni, ilgʻor texnologiyalarni va boshqaruv tajribasini jalb qilish maqsadida yaratilgan, belgilangan chegaralari va maxsus huquqiy rejimi mavjud hududdir. MIZlar quyidagi shakllarda tashkil etilishi mumkin:",
      },
      {
        type: "ul",
        items: [
          "Erkin iqtisodiy zonalar",
          "Maxsus ilmiy-texnologik zonalar",
          "Turistik-rekreatsion zonalar",
          "Erkin savdo zonalari",
          "Maxsus sanoat zonalari",
        ],
      },
      { type: "h2", text: "Maxsus huquqiy rejim" },
      {
        type: "p",
        text: "MIZ ishtirokchilari qonun hujjatlarida nazarda tutilgan huquqiy himoya kafolatlari, imtiyozlar va afzalliklarga haqlidirlar. Soliq qonunchiligi oʻzgarganda ishtirokchilar — imtiyozlar muddati davomida, lekin oʻn yildan koʻp boʻlmagan holda — MIZ reestriga roʻyxatdan oʻtgan sanada amal qilgan soliq stavkalari va toʻlov shartlarini qoʻllashda davom etishlari mumkin. Ushbu barqarorlik kafolati aksizli tovarlarga nisbatan qoʻllanilmaydi.",
      },
      {
        type: "p",
        text: "Ishtirokchilar eksport va import qilinadigan tovarlar uchun oʻzlari uchun qulay toʻlov shartlari va hisob-kitob shakllaridan foydalanishi mumkin. Qoʻshimcha kafolatlar Prezident qarori bilan belgilanishi mumkin. Davlat organlari tomonidan asossiz aralashuv natijasida yetkazilgan zararlar, boy berilgan foyda va maʼnaviy zarar sud qarori bilan qoplanadi.",
      },
      { type: "h2", text: "Maxsus bojxona rejimi" },
      {
        type: "p",
        text: "Maxsus bojxona rejimi bojxona toʻlovlaridan vaqtincha ozod etish yoki ularni kamaytirishni, hamda eksport yoki importga nisbatan noitarif cheklovlarni bekor qilish yoki yumshatishni oʻz ichiga olishi mumkin. Amalda MIZ ishtirokchilari quyidagi hollarda bojxona toʻlovlaridan (QQS va bojxona rasmiylashtiruv yigʻimlaridan tashqari) ozod qilingan:",
      },
      {
        type: "ul",
        items: [
          "Oʻzbekistonda ishlab chiqarilmaydigan qurilish materiallarini investitsiya shartnomasi doirasida qurilish davrida olib kirishda.",
          "Ichki muqobili boʻlmagan texnologik uskunalarni tasdiqlangan hukumat roʻyxati boʻyicha olib kirishda (bojxona rasmiylashtiruv yigʻimlari saqlanib qoladi).",
          "Eksportga moʻljallangan mahsulotlar ishlab chiqarishda ishlatiladigan xomashyo, butlovchi qismlar va sarflanadigan materiallarni olib kirishda (bojxona rasmiylashtiruv yigʻimlari saqlanib qoladi).",
        ],
      },
      { type: "h2", text: "Maxsus soliq rejimi" },
      { type: "p", text: "MIZ ishtirokchilari quyidagi soliq va majburiy toʻlovlardan ozod etiladi:" },
      {
        type: "checks",
        items: [
          "Yer soligʻi",
          "Yuridik shaxslarning foyda soligʻi",
          "Yuridik shaxslarning mulk soligʻi",
          "Yagona soliq toʻlovi (mikro va kichik korxonalarga qoʻllaniladigan)",
          "Vazirlar Mahkamasi huzuridagi Respublika yoʻl fondiga majburiy ajratmalar",
          "Moliya vazirligi huzuridagi Taʼlim va tibbiyot muassasalarini rivojlantirish byudjetdan tashqari fondiga majburiy ajratmalar",
        ],
        except: "QQS saqlanadi: uning oʻrniga kechiktirish va tez qaytarish",
      },
      {
        type: "p",
        text: "Ishtirokchilar QQSdan ozod qilinmaydi, lekin aylanma mablagʻlar uchun ikki afzallikka ega:",
      },
      {
        type: "figures",
        items: [
          {
            value: "120",
            unit: "kun",
            label: "Import qilinadigan tovarlar boʻyicha QQSni kechiktirishning eng uzoq muddati",
          },
          {
            value: "7",
            unit: "kun",
            label: "Ortiqcha hisobga olinadigan QQSni soddalashtirilgan tartibda qaytarish muddati",
          },
        ],
      },
      {
        type: "p",
        text: "Respublika byudjetidan QQS qaytarish Vazirlar Mahkamasi qarorlari bilan tartibga solinadi.",
      },
      { type: "h2", text: "Investitsiya hajmiga qarab imtiyozlar muddati" },
      {
        type: "p",
        text: "Soliq va bojxona imtiyozlari qilingan investitsiya majburiyatlari hajmiga qarab 3 dan 10 yilgacha beriladi:",
      },
      {
        type: "table",
        head: [
          "Investitsiya hajmi",
          "Imtiyozlar muddati",
        ],
        rows: [
          {
            cells: [
              "300 ming – 3 mln AQSh dollari",
              "3 yil",
            ],
            bar: 0.3,
          },
          {
            cells: [
              "3–5 mln AQSh dollari",
              "5 yil",
            ],
            bar: 0.5,
          },
          {
            cells: [
              "5–10 mln AQSh dollari",
              "7 yil",
            ],
            bar: 0.7,
          },
          {
            cells: [
              "10 mln AQSh dollari va undan koʻp",
              "10 yil",
            ],
            bar: 1,
            highlight: true,
          },
        ],
      },
      {
        type: "takeaway",
        title: "Bu siz uchun nimani anglatadi",
        items: [
          "Imtiyozlar muddati investitsiya hajmiga bogʻliq, shuning uchun ariza berishdan oldin investitsiya miqdorini aniqlang.",
          "10 mln AQSh dollari va undan koʻp investitsiya imtiyozlarni toʻliq 10 yilga taʼminlaydi.",
          "QQSni rejalashtiring: u bekor qilinmaydi, balki kechiktiriladi va tez qaytariladi.",
        ],
      },
      { type: "h2", text: "Valyuta rejimi" },
      {
        type: "p",
        text: "MIZ ishtirokchilari xizmat koʻrsatuvchi bankni erkin tanlashi va Oʻzbekistondagi bir yoki bir nechta tijorat bankida xorijiy valyutadagi hisobvaraqlar ochishi, shuningdek chet elda hisobvaraqlar yuritishi mumkin. Xorijiy valyuta tushumlari — jumladan, tovarlar, ishlar va xizmatlar eksportidan olingan tushumlar — ishtirokchining hisobvaragʻiga oʻtkazilishi kerak. MIZ hududida MIZ ishtirokchisi boʻlmagan rezident yuridik shaxslar ham MIZ ishtirokchilariga xorijiy valyutada tovar sotish va xizmat koʻrsatish huquqiga ega.",
      },
      { type: "h2", text: "MIZ ishtirokchilarining qoʻshimcha huquqlari" },
      {
        type: "ul",
        items: [
          "Elektron onlayn auksion orqali yer uchastkalarini ijaraga olish; binolar va inshootlardan ijara shartlarida foydalanish; qonun hujjatlarida belgilangan tartibda ishlab chiqarish faoliyati uchun infratuzilma barpo etish.",
          "MIZ direksiyasidan investitsiya shartnomasi va loyiha jadvaliga muvofiq muhandislik, kommunal va transport infratuzilmasini oʻz vaqtida taʼminlashni talab qilish.",
          "MIZ direksiyasi tomonidan taqdim etiladigan barcha xizmatlardan teng shartlarda, jumladan shartnoma asosida foydalanish.",
          "MIZ bosh rejasiga muvofiq oʻz hisobidan infratuzilma barpo etish.",
        ],
      },
      { type: "h2", text: "Zonaga xos imtiyozlar" },
      { type: "h3", text: "IT Park (it-park.uz)" },
      {
        type: "ul",
        items: [
          "Rezidentlar 2028-yil 1-yanvargacha barcha soliqlar, jumladan ijtimoiy soliq, hamda davlat maqsadli jamgʻarmalariga majburiy ajratmalardan ozod etilgan.",
          "IT Park rezidentlarining xodimlari 2028-yil 1-yanvargacha olingan daromadlaridan standart 12% oʻrniga 7,5% kamaytirilgan stavkada jismoniy shaxslardan olinadigan daromad soligʻi toʻlaydilar.",
          "Rezidentlar faqat ruxsat etilgan IT faoliyati turlarini amalga oshirishi va har bir hisobot davridan keyingi oyning 20-sanasigacha direksiyaning talab qilib olinguncha depozit hisobvaragʻiga ajratmalar oʻtkazishi shart.",
        ],
      },
      { type: "h2", text: "Advizen qanday yordam bera oladi" },
      {
        type: "p",
        text: "Toʻgʻri MIZni tanlash, mavjud imtiyozlardan maksimal darajada foydalanish uchun investitsiya loyihasini tuzish va doimiy muvofiqlik majburiyatlarini boshqarish puxta huquqiy va soliqqa oid rejalashtirish talab etadi. Advizen jamoasi mijozlarga muvofiqlikni baholashda, MIZ ishtirokchisi maqomini olish uchun arizalar tayyorlashda, investitsiya shartnomalari tuzishda va zona direksiyasi talablarini tushunib olishda yordam beradi.",
      },
    ],
    faq: [
      {
        question: "Oʻzbekistonda MIZ ishtirokchilari qanday soliq imtiyozlariga ega?",
        answer: "Oʻzbekistonda MIZ ishtirokchilari toʻliq imtiyozlar paketini oladilar: foyda soligʻi, mulk soligʻi va yer soligʻidan oʻn yilgacha ozodlik. Import qilinadigan uskunalar va xomashyo uchun bojxona toʻlovlaridan ozodlik qoʻllaniladi. IT Park rezidentlari 2028-yil 1-yanvargacha barcha soliqlar, jumladan ijtimoiy soliq, hamda davlat maqsadli jamgʻarmalariga majburiy ajratmalardan ozod etilgan, ularning xodimlari esa shu sanagacha olingan daromadlaridan 7,5% kamaytirilgan stavkada jismoniy shaxslardan olinadigan daromad soligʻi toʻlaydilar.",
      },
      {
        question: "Oʻzbekistonda qanday turdagi maxsus iqtisodiy zonalar mavjud?",
        answer: "Oʻzbekiston MIZning beshta turini tan oladi: erkin iqtisodiy zonalar, maxsus ilmiy-texnologik zonalar, turistik-rekreatsion zonalar, erkin savdo zonalari va maxsus sanoat zonalari. Har bir tur oʻzining tartibga solish tizimi va tarmoq yoʻnalishiga ega.",
      },
      {
        question: "Qonunchilik oʻzgarganda MIZ soliq imtiyozlari saqlanadimi?",
        answer: "Ha. Soliq qonunchiligi oʻzgarganda MIZ ishtirokchilari zona ishtirokchilari reestriga roʻyxatdan oʻtgan sanada amal qilgan soliq stavkalari va toʻlov shartlarini imtiyozlari amal qilgan davr mobaynida, lekin oʻn yildan koʻp boʻlmagan muddatda qoʻllashni davom ettirishga haqli. Qonunchilik barqarorligi kafolati aksizli tovarlarga tatbiq etilmaydi.",
      },
      {
        question: "Oʻzbekistonda kompaniyalar MIZ ishtirokchisi maqomini qanday oladi?",
        answer: "Kompaniyalar tegishli MIZ maʼmuriyatiga murojaat qiladi va zona operatori belgilagan minimal investitsiya chegarasiga rioya qiladi. Jarayon investitsiya shartnomasini imzolash, ishtirokchilar reestriga roʻyxatdan oʻtish va ishtirokchi sertifikati olishni oʻz ichiga oladi. Advizen muvofiqlikni baholash, ariza tayyorlash va tartibga solish talablariga javob berishda yordam beradi.",
      },
    ],
  },
};

export default article;
