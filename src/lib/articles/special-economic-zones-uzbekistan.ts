import type { LocalizedArticle } from "../publications";

const article: Record<string, LocalizedArticle> = {
  en: {
    subtitle: "A structured guide to the tax, customs and legal benefits available to participants of special economic zones (SEZs) in Uzbekistan under the current Tax Code.",
    author: "Advizen Legal Practice",
    readTime: "7 min read",
    inShort: {
      figures: [
        { value: "Art. 473", label: "Tax Code article that sets the tax benefits of SEZ participants" },
        {
          value: "3–10 years",
          label: "Profit tax exemption: USD 3–5m of investment gives 3 years, USD 5–15m gives 5 years, USD 15m and above gives 10 years",
        },
        {
          value: "1 April 2026",
          label: "From this date new participants get accelerated depreciation instead of the profit tax exemption",
        },
        {
          value: "120 days",
          label: "Interest-free deferral of VAT and customs duty on imported components, raw materials and materials (PP-5243)",
        },
      ],
      points: [
        "SEZ participants in Uzbekistan are exempt from profit tax for 3, 5 or 10 years, depending on the investment made: USD 3–5m, USD 5–15m, or USD 15m and above (Tax Code, Art. 473).",
        "Taxpayers that became SEZ participants on or after 1 April 2026 get the right to accelerated depreciation of fixed assets instead of the profit tax exemption, for a term based on the same investment thresholds.",
        "Participants are also exempt from property tax and land tax for a term set by a decision of the President. All these benefits apply only to the activities listed in the investment agreement with the SEZ directorate.",
        "VAT and customs duty on imported components, raw materials and materials may be deferred for up to 120 days without interest or security (PP-5243). Customs benefits on raw materials apply only under the customs regime \"processing in the customs territory\" (UP-153).",
      ],
    },
    content: [
      {
        type: "p",
        text: "Special economic zones (SEZs) are territories with defined boundaries and a special legal regime, created to attract investment and develop regional industry. In Uzbekistan the framework is set by Law No. ZRU-604 \"On Special Economic Zones\", while the tax benefits themselves are governed by the Tax Code. This guide sets out the rules that apply today, including the change for new participants from 1 April 2026.",
      },
      { type: "h2", text: "Legislative framework" },
      {
        type: "sources",
        items: [
          {
            title: "Tax Code of the Republic of Uzbekistan",
            meta: "Art. 473–474 · as amended by Law No. ZRU-783 of 12 July 2022",
            href: "https://lex.uz/en/docs/4674893",
          },
          {
            title: "Law No. ZRU-604 \"On Special Economic Zones\"",
            meta: "17 February 2020",
            href: "https://lex.uz/en/docs/4737514",
          },
          {
            title: "Presidential Resolution No. PP-5243",
            meta: "14 September 2021 · On measures for further support of SEZ participants",
            href: "https://lex.uz/en/docs/5633655",
          },
          {
            title: "Presidential Decree No. UP-153",
            meta: "13 June 2022 · On additional measures to enhance the effectiveness of special economic, small industrial, youth industrial and entrepreneurial zones",
            href: "https://lex.uz/en/docs/6061066",
          },
          {
            title: "Presidential Decree No. UP-5600",
            meta: "21 December 2018 · On further improvement of the coordination and management system of free economic zones",
            href: "https://lex.uz/en/docs/4117767",
          },
          { title: "Customs Code of the Republic of Uzbekistan" },
        ],
      },
      { type: "h2", text: "Types of special economic zones" },
      {
        type: "p",
        text: "Under Law No. ZRU-604, SEZs are created by decision of the President and may take the following forms:",
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
      { type: "h2", text: "Tax benefits under Art. 473 of the Tax Code" },
      {
        type: "p",
        text: "SEZ participants are exempt from the following taxes:",
      },
      {
        type: "checks",
        items: [
          "Profit tax: for 3, 5 or 10 years, depending on the investment made",
          "Property tax: for a term set by a decision of the President",
          "Land tax: for a term set by a decision of the President",
        ],
        except: "VAT still applies: import VAT can be deferred for up to 120 days",
      },
      {
        type: "p",
        text: "The profit tax exemption depends on the volume of investment made (Tax Code, Art. 473, part 2, added by Law No. ZRU-783 of 12 July 2022):",
      },
      {
        type: "table",
        head: ["Investment made", "Profit tax exemption"],
        rows: [
          { cells: ["USD 3m – 5m", "3 years"], bar: 0.3 },
          { cells: ["USD 5m – 15m", "5 years"], bar: 0.5 },
          { cells: ["USD 15m and above", "10 years"], bar: 1, highlight: true },
        ],
        caption: "For participants with status granted from 1 April 2026, the same thresholds set the term of accelerated depreciation.",
      },
      { type: "h3", text: "From 1 April 2026: accelerated depreciation instead of the exemption" },
      {
        type: "p",
        text: "For taxpayers that obtained SEZ participant status on or after 1 April 2026, the profit tax benefit takes the form of a right to accelerated depreciation of depreciable fixed assets. Its term depends on the same investment thresholds (Tax Code, Art. 473, part 3). Accelerated depreciation does not remove profit tax; it brings the deduction for equipment and buildings forward, so less tax is paid in the first years of the project.",
      },
      { type: "h3", text: "Only for activities in the investment agreement" },
      {
        type: "p",
        text: "All the benefits above apply only to the participant's activities listed in the investment agreement concluded between the investor and the SEZ directorate (Tax Code, Art. 473, part 4). Any other business of the same company is taxed under the general rules.",
      },
      { type: "h3", text: "When the benefits start" },
      {
        type: "ul",
        items: [
          "Property tax and land tax benefits run from the date the SEZ participant certificate is issued (Tax Code, Art. 474).",
          "The profit tax benefit runs from the date the production facility (or service facility) in the SEZ is accepted into operation.",
          "If a participant raises its investment to a level that gives a longer term, it may extend the benefit in line with the actual investment.",
          "A company stripped of participant status loses the benefits from the 1st day of the month in which the status was withdrawn.",
        ],
      },
      { type: "h2", text: "VAT and customs duty deferral" },
      {
        type: "p",
        text: "SEZ participants are not exempt from VAT, but they have a cash-flow advantage on imports:",
      },
      {
        type: "figures",
        items: [
          {
            value: "120",
            unit: "days",
            label: "Deferral or instalment of VAT and customs duty on imported components, raw materials and materials, without interest or security",
          },
        ],
      },
      {
        type: "p",
        text: "The deferral covers imports for production and the participant's own needs (Presidential Resolution No. PP-5243 of 14 September 2021).",
      },
      { type: "h2", text: "Customs benefits" },
      {
        type: "p",
        text: "Under Law No. ZRU-604 (Art. 39), SEZ participants pay no customs payments in the following cases:",
      },
      {
        type: "ul",
        items: [
          "Construction materials not produced in Uzbekistan, imported for the investment project under the investment agreement during construction (VAT and customs clearance fees remain payable).",
          "Technological equipment without an equivalent produced in Uzbekistan, according to the approved list (customs clearance fees remain payable).",
          "Raw materials, materials and components used to produce goods for export (customs clearance fees remain payable). Under Presidential Decree No. UP-153 of 13 June 2022, this benefit applies only when the goods are placed under the customs regime \"processing in the customs territory\".",
        ],
      },
      {
        type: "takeaway",
        title: "What this means for you",
        items: [
          "Fix the investment amount before applying: it sets whether the profit tax benefit lasts 3, 5 or 10 years.",
          "If status is granted on or after 1 April 2026, build accelerated depreciation into the financial model, not a profit tax exemption.",
          "List every activity that needs the benefits in the investment agreement: the benefits do not cover anything else.",
          "Plan for VAT: it is not exempt, but import VAT can be deferred for up to 120 days.",
          "For raw materials, import under the \"processing in the customs territory\" regime, or the customs benefit is lost.",
        ],
      },
      { type: "h2", text: "Legal guarantees" },
      {
        type: "p",
        text: "If tax legislation changes, SEZ participants may continue to apply, for the term of their benefits but no longer than ten years, the tax rules in force at the date they were entered in the SEZ register. This stability guarantee does not cover the taxation of excise goods (Law No. ZRU-604, Art. 42).",
      },
      {
        type: "p",
        text: "Participants may use the payment conditions and settlement forms most convenient to them for exported and imported goods. Additional guarantees may be established by decision of the President. Losses, lost profits and moral damage caused by unjustified interference by state bodies are compensated through the courts.",
      },
      { type: "h2", text: "Additional rights of SEZ participants" },
      {
        type: "ul",
        items: [
          "Lease land plots through electronic online auction; use buildings and structures, including on lease terms; and construct infrastructure for production activities as provided by Law No. ZRU-604.",
          "Require the SEZ directorate to provide engineering, utility and transport infrastructure on time, in line with the investment agreement and the project schedule.",
          "Use all services provided by the SEZ directorate on equal terms, including on a contractual basis.",
          "Construct infrastructure needed for the project at own expense in accordance with the SEZ master plan.",
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
        text: "Selecting the right SEZ, structuring an investment project to make full use of the available benefits, and managing ongoing compliance requires careful legal and tax planning. Advizen's team assists clients in assessing eligibility, preparing applications for SEZ participant status, drafting investment agreements, and meeting the requirements of the zone directorate.",
      },
    ],
    faq: [
      {
        question: "What tax benefits do special economic zone participants receive in Uzbekistan?",
        answer: "Under Art. 473 of the Tax Code, SEZ participants are exempt from profit tax for 3 years (investment of USD 3–5m), 5 years (USD 5–15m) or 10 years (USD 15m and above), and from property tax and land tax for a term set by a decision of the President. Participants that obtained status on or after 1 April 2026 get accelerated depreciation of fixed assets instead of the profit tax exemption. VAT and customs duty on imported components, raw materials and materials may be deferred for up to 120 days without interest (PP-5243). The benefits cover only the activities listed in the investment agreement with the SEZ directorate.",
      },
      {
        question: "What changed for SEZ participants on 1 April 2026?",
        answer: "Taxpayers that became SEZ participants on or after 1 April 2026 no longer get a profit tax exemption. Instead they get the right to accelerated depreciation of depreciable fixed assets, for a term based on the same investment thresholds of USD 3m, 5m and 15m (Tax Code, Art. 473, part 3). The property tax and land tax exemptions are unchanged.",
      },
      {
        question: "What types of special economic zones exist in Uzbekistan?",
        answer: "Law No. ZRU-604 provides for five types of SEZs: free economic zones, special scientific and technological zones, tourist and recreational zones, free trade zones, and special industrial zones.",
      },
      {
        question: "Are SEZ tax benefits guaranteed if legislation changes?",
        answer: "Yes. When tax legislation changes, SEZ participants may continue to apply the tax rules in force at the date of their entry in the SEZ register for the term of their benefits, but no longer than ten years (Law No. ZRU-604, Art. 42). The guarantee does not cover the taxation of excise goods.",
      },
      {
        question: "How do companies obtain SEZ participant status in Uzbekistan?",
        answer: "The investor submits an investment application to the directorate of the relevant SEZ. If it is approved, the investor signs an investment agreement with the directorate, is entered in the register of SEZ participants and receives a participant certificate. Advizen assists with eligibility assessment, application preparation and the investment agreement.",
      },
    ],
  },
  ru: {
    subtitle: "Структурированное руководство по налоговым, таможенным и правовым льготам участников специальных экономических зон (СЭЗ) в Узбекистане по действующему Налоговому кодексу.",
    author: "Юридическая практика Advizen",
    readTime: "7 мин чтения",
    inShort: {
      figures: [
        { value: "Ст. 473", label: "Статья Налогового кодекса, которая устанавливает налоговые льготы участников СЭЗ" },
        {
          value: "3–10 лет",
          label: "Освобождение от налога на прибыль: инвестиции от 3 до 5 млн долл. США — 3 года, от 5 до 15 млн — 5 лет, от 15 млн — 10 лет",
        },
        {
          value: "1 апреля 2026",
          label: "С этой даты новые участники получают ускоренную амортизацию вместо освобождения от налога на прибыль",
        },
        {
          value: "120 дней",
          label: "Отсрочка НДС и таможенной пошлины при импорте комплектующих, сырья и материалов без процентов (ПП-5243)",
        },
      ],
      points: [
        "Участники СЭЗ в Узбекистане освобождаются от налога на прибыль на 3, 5 или 10 лет в зависимости от объёма внесённых инвестиций: от 3 до 5 млн, от 5 до 15 млн или от 15 млн долл. США (ст. 473 НК).",
        "Налогоплательщики, получившие статус участника СЭЗ с 1 апреля 2026 года, вместо освобождения от налога на прибыль получают право на ускоренную амортизацию основных средств на срок, который зависит от тех же порогов инвестиций.",
        "Участники также освобождаются от налога на имущество и земельного налога на срок, определяемый решением Президента. Все эти льготы действуют только для видов деятельности из соглашения об инвестировании с дирекцией СЭЗ.",
        "НДС и таможенную пошлину при импорте комплектующих, сырья и материалов можно отсрочить до 120 дней без процентов и обеспечения (ПП-5243). Таможенные льготы на сырьё применяются только в таможенном режиме «переработка на таможенной территории» (УП-153).",
      ],
    },
    content: [
      {
        type: "p",
        text: "Специальные экономические зоны (СЭЗ) — это территории с определёнными границами и особым правовым режимом, созданные для привлечения инвестиций и развития промышленности в регионах. В Узбекистане рамки задаёт Закон № ЗРУ-604 «О специальных экономических зонах», а сами налоговые льготы устанавливает Налоговый кодекс. В этом обзоре — правила, которые действуют сейчас, включая изменение для новых участников с 1 апреля 2026 года.",
      },
      { type: "h2", text: "Законодательная база" },
      {
        type: "sources",
        items: [
          {
            title: "Налоговый кодекс Республики Узбекистан",
            meta: "Ст. 473–474 · в редакции Закона № ЗРУ-783 от 12 июля 2022 года",
            href: "https://lex.uz/ru/docs/4674893",
          },
          {
            title: "Закон № ЗРУ-604 «О специальных экономических зонах»",
            meta: "17 февраля 2020 года",
            href: "https://lex.uz/ru/docs/4737514",
          },
          {
            title: "Постановление Президента № ПП-5243",
            meta: "14 сентября 2021 года · О мерах по дальнейшей поддержке участников специальных экономических зон",
            href: "https://lex.uz/ru/docs/5633655",
          },
          {
            title: "Указ Президента № УП-153",
            meta: "13 июня 2022 года · О дополнительных мерах по повышению эффективности специальных экономических, малых промышленных, молодёжных промышленных и предпринимательских зон",
            href: "https://lex.uz/ru/docs/6061066",
          },
          {
            title: "Указ Президента № УП-5600",
            meta: "21 декабря 2018 года · О дальнейшем совершенствовании системы координации и управления свободными экономическими зонами",
            href: "https://lex.uz/ru/docs/4117767",
          },
          { title: "Таможенный кодекс Республики Узбекистан" },
        ],
      },
      { type: "h2", text: "Виды специальных экономических зон" },
      {
        type: "p",
        text: "По Закону № ЗРУ-604 СЭЗ создаются решением Президента и могут быть следующих видов:",
      },
      {
        type: "ul",
        items: [
          "Свободные экономические зоны",
          "Специальные научно-технологические зоны",
          "Туристско-рекреационные зоны",
          "Зоны свободной торговли",
          "Особые промышленные зоны",
        ],
      },
      { type: "h2", text: "Налоговые льготы по ст. 473 Налогового кодекса" },
      { type: "p", text: "Участники СЭЗ освобождаются от следующих налогов:" },
      {
        type: "checks",
        items: [
          "Налог на прибыль — на 3, 5 или 10 лет в зависимости от объёма инвестиций",
          "Налог на имущество — на срок, определяемый решением Президента",
          "Земельный налог — на срок, определяемый решением Президента",
        ],
        except: "НДС не освобождается: импортный НДС можно отсрочить до 120 дней",
      },
      {
        type: "p",
        text: "Срок освобождения от налога на прибыль зависит от объёма внесённых инвестиций (ст. 473, часть вторая, НК; дополнена Законом № ЗРУ-783 от 12 июля 2022 года):",
      },
      {
        type: "table",
        head: ["Объём инвестиций", "Освобождение от налога на прибыль"],
        rows: [
          { cells: ["3–5 млн долл. США", "3 года"], bar: 0.3 },
          { cells: ["5–15 млн долл. США", "5 лет"], bar: 0.5 },
          { cells: ["от 15 млн долл. США", "10 лет"], bar: 1, highlight: true },
        ],
        caption: "Для участников, получивших статус с 1 апреля 2026 года, те же пороги определяют срок ускоренной амортизации.",
      },
      { type: "h3", text: "С 1 апреля 2026 года — ускоренная амортизация вместо освобождения" },
      {
        type: "p",
        text: "Налогоплательщикам, получившим статус участника СЭЗ начиная с 1 апреля 2026 года, льгота по налогу на прибыль предоставляется в форме права на ускоренную амортизацию амортизируемых основных средств. Срок зависит от тех же порогов инвестиций (ст. 473, часть третья, НК). Ускоренная амортизация не отменяет налог на прибыль: она переносит вычет расходов на оборудование и здания на первые годы проекта, и в эти годы налога платится меньше.",
      },
      { type: "h3", text: "Только для деятельности из соглашения об инвестировании" },
      {
        type: "p",
        text: "Все перечисленные льготы распространяются исключительно на виды деятельности участника, предусмотренные в соглашении об инвестировании, заключённом между инвестором и дирекцией СЭЗ (ст. 473, часть четвёртая, НК). Другой бизнес той же компании облагается налогами на общих основаниях.",
      },
      { type: "h3", text: "С какого момента действуют льготы" },
      {
        type: "ul",
        items: [
          "Льготы по налогу на имущество и земельному налогу отсчитываются с даты получения свидетельства участника СЭЗ (ст. 474 НК).",
          "Льгота по налогу на прибыль отсчитывается с даты приёмки в эксплуатацию производственного объекта (объекта оказания услуг) на территории СЭЗ.",
          "Если участник увеличил инвестиции до объёма, который даёт более длительный срок, он вправе продлить льготы в соответствии с фактическим объёмом инвестиций.",
          "При лишении статуса участника льготы прекращаются с 1-го числа месяца, в котором статус был отозван.",
        ],
      },
      { type: "h2", text: "Отсрочка НДС и таможенной пошлины" },
      {
        type: "p",
        text: "От НДС участники СЭЗ не освобождены, но получают преимущество для оборотных средств при импорте:",
      },
      {
        type: "figures",
        items: [
          {
            value: "120",
            unit: "дней",
            label: "Отсрочка (рассрочка) НДС и таможенной пошлины при импорте комплектующих, сырья и материалов без процентов и обеспечения",
          },
        ],
      },
      {
        type: "p",
        text: "Отсрочка распространяется на импорт для производства продукции и собственных нужд (Постановление Президента № ПП-5243 от 14 сентября 2021 года).",
      },
      { type: "h2", text: "Таможенные льготы" },
      {
        type: "p",
        text: "По Закону № ЗРУ-604 (ст. 39) участники СЭЗ не уплачивают таможенные платежи в следующих случаях:",
      },
      {
        type: "ul",
        items: [
          "Ввоз строительных материалов, не производимых в Узбекистане, для реализации инвестиционного проекта по соглашению об инвестировании в период строительства (НДС и сборы за таможенное оформление уплачиваются).",
          "Ввоз технологического оборудования, аналоги которого не производятся в Узбекистане, по утверждённому перечню (сборы за таможенное оформление уплачиваются).",
          "Ввоз сырья, материалов и комплектующих для производства продукции на экспорт (сборы за таможенное оформление уплачиваются). По Указу Президента № УП-153 от 13 июня 2022 года эта льгота применяется только при помещении товаров в таможенный режим «переработка на таможенной территории».",
        ],
      },
      {
        type: "takeaway",
        title: "Что это значит для вас",
        items: [
          "Определите объём инвестиций до подачи заявки: от него зависит, будет льгота по налогу на прибыль на 3, 5 или 10 лет.",
          "Если статус получен с 1 апреля 2026 года, закладывайте в финансовую модель ускоренную амортизацию, а не освобождение от налога на прибыль.",
          "Укажите в соглашении об инвестировании все виды деятельности, для которых нужны льготы: на остальные они не распространяются.",
          "Учитывайте НДС в планах: он не отменяется, но импортный НДС можно отсрочить до 120 дней.",
          "Сырьё ввозите в режиме «переработка на таможенной территории», иначе таможенная льгота не применяется.",
        ],
      },
      { type: "h2", text: "Правовые гарантии" },
      {
        type: "p",
        text: "При изменении налогового законодательства участники СЭЗ вправе применять в течение срока действия льгот, но не более десяти лет, нормы по уплате налогов, действовавшие на дату их включения в реестр участников СЭЗ. Гарантия не распространяется на налогообложение подакцизных товаров (ст. 42 Закона № ЗРУ-604).",
      },
      {
        type: "p",
        text: "Участники вправе использовать удобные для них условия, формы оплаты и расчётов за экспортируемые и импортируемые товары. Дополнительные гарантии и льготы могут быть предусмотрены решением Президента. Убытки, упущенная выгода и моральный вред, причинённые необоснованным вмешательством государственных органов, возмещаются в судебном порядке.",
      },
      { type: "h2", text: "Дополнительные права участников СЭЗ" },
      {
        type: "ul",
        items: [
          "Получать в аренду земельные участки через электронный онлайн-аукцион, пользоваться зданиями и сооружениями, в том числе на правах аренды, и строить объекты инфраструктуры для производственной деятельности в порядке, предусмотренном Законом № ЗРУ-604.",
          "Требовать от дирекции СЭЗ своевременного обеспечения инженерно-коммуникационной и дорожно-транспортной инфраструктурой в соответствии с соглашением об инвестировании и графиком реализации проекта.",
          "Пользоваться на равных условиях всеми услугами дирекции СЭЗ, в том числе на договорной основе.",
          "Строить за собственный счёт объекты инфраструктуры, необходимые для проекта, в соответствии с генеральным планом СЭЗ.",
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
        text: "Выбор подходящей СЭЗ, структурирование инвестиционного проекта так, чтобы полностью использовать доступные льготы, и выполнение текущих требований требуют тщательного правового и налогового планирования. Команда Advizen помогает оценить право на льготы, подготовить заявку на статус участника СЭЗ и соглашение об инвестировании и выполнить требования дирекции зоны.",
      },
    ],
    faq: [
      {
        question: "Какие налоговые льготы получают участники СЭЗ в Узбекистане?",
        answer: "По ст. 473 Налогового кодекса участники СЭЗ освобождаются от налога на прибыль на 3 года (инвестиции от 3 до 5 млн долл. США), 5 лет (от 5 до 15 млн) или 10 лет (от 15 млн), а также от налога на имущество и земельного налога на срок, определяемый решением Президента. Участники, получившие статус с 1 апреля 2026 года, вместо освобождения от налога на прибыль получают ускоренную амортизацию основных средств. НДС и таможенную пошлину при импорте комплектующих, сырья и материалов можно отсрочить до 120 дней без процентов (ПП-5243). Льготы действуют только для видов деятельности из соглашения об инвестировании с дирекцией СЭЗ.",
      },
      {
        question: "Что изменилось для участников СЭЗ с 1 апреля 2026 года?",
        answer: "Налогоплательщики, получившие статус участника СЭЗ с 1 апреля 2026 года, больше не освобождаются от налога на прибыль. Вместо этого они получают право на ускоренную амортизацию амортизируемых основных средств на срок, который зависит от тех же порогов инвестиций — 3, 5 и 15 млн долл. США (ст. 473, часть третья, НК). Освобождение от налога на имущество и земельного налога сохраняется.",
      },
      {
        question: "Какие виды СЭЗ существуют в Узбекистане?",
        answer: "Закон № ЗРУ-604 предусматривает пять видов СЭЗ: свободные экономические зоны, специальные научно-технологические зоны, туристско-рекреационные зоны, зоны свободной торговли и особые промышленные зоны.",
      },
      {
        question: "Сохраняются ли налоговые льготы СЭЗ при изменении законодательства?",
        answer: "Да. При изменении налогового законодательства участники СЭЗ вправе применять нормы, действовавшие на дату их включения в реестр участников, в течение срока действия льгот, но не более десяти лет (ст. 42 Закона № ЗРУ-604). Гарантия не распространяется на налогообложение подакцизных товаров.",
      },
      {
        question: "Как компании получают статус участника СЭЗ в Узбекистане?",
        answer: "Инвестор подаёт инвестиционную заявку в дирекцию соответствующей СЭЗ. После её одобрения инвестор подписывает с дирекцией соглашение об инвестировании, включается в реестр участников СЭЗ и получает свидетельство участника. Advizen помогает оценить право на льготы, подготовить заявку и соглашение об инвестировании.",
      },
    ],
  },
  uz: {
    subtitle: "Oʻzbekistonda maxsus iqtisodiy zonalar (MIZ) ishtirokchilari uchun amaldagi Soliq kodeksiga koʻra mavjud soliq, bojxona va huquqiy imtiyozlar boʻyicha tizimli qoʻllanma.",
    author: "Advizen yuridik amaliyoti",
    readTime: "7 daqiqa oʻqish",
    inShort: {
      figures: [
        {
          value: "473-modda",
          label: "MIZ ishtirokchilarining soliq imtiyozlarini belgilovchi Soliq kodeksi moddasi",
        },
        {
          value: "3–10 yil",
          label: "Foyda soligʻidan ozod qilish: 3–5 mln AQSh dollari investitsiya — 3 yil, 5–15 mln — 5 yil, 15 mln va undan koʻp — 10 yil",
        },
        {
          value: "2026-yil 1-aprel",
          label: "Shu sanadan yangi ishtirokchilar foyda soligʻidan ozod qilish oʻrniga tezlashtirilgan amortizatsiya huquqini oladi",
        },
        {
          value: "120 kun",
          label: "Butlovchi buyumlar, xomashyo va materiallar importida QQS va bojxona boji toʻlovini foizsiz kechiktirish (PQ-5243)",
        },
      ],
      points: [
        "Oʻzbekistonda MIZ ishtirokchilari kiritilgan investitsiya hajmiga qarab foyda soligʻidan 3, 5 yoki 10 yilga ozod qilinadi: 3–5 mln, 5–15 mln yoki 15 mln AQSh dollari va undan koʻp (Soliq kodeksining 473-moddasi).",
        "2026-yil 1-apreldan boshlab MIZ ishtirokchisi maqomini olgan soliq toʻlovchilarga foyda soligʻidan ozod qilish oʻrniga asosiy vositalarni tezlashtirilgan amortizatsiya qilish huquqi xuddi shu investitsiya chegaralariga bogʻliq muddatga beriladi.",
        "Ishtirokchilar, shuningdek, Prezident qarori bilan belgilanadigan muddatga mol-mulk soligʻi va yer soligʻidan ozod qilinadi. Bu imtiyozlarning barchasi faqat MIZ direksiyasi bilan tuzilgan investitsiya shartnomasida nazarda tutilgan faoliyat turlariga tatbiq etiladi.",
        "Butlovchi buyumlar, xomashyo va materiallar importida QQS va bojxona bojini 120 kungacha foizsiz va taʼminotsiz kechiktirish mumkin (PQ-5243). Xomashyo boʻyicha bojxona imtiyozlari faqat «bojxona hududida qayta ishlash» bojxona rejimida qoʻllaniladi (PF-153).",
      ],
    },
    content: [
      {
        type: "p",
        text: "Maxsus iqtisodiy zonalar (MIZ) — investitsiyalarni jalb qilish va hududlarda sanoatni rivojlantirish uchun yaratilgan, belgilangan chegaralari va maxsus huquqiy rejimiga ega hududlardir. Oʻzbekistonda umumiy asoslarni «Maxsus iqtisodiy zonalar toʻgʻrisida»gi OʻRQ-604-sonli Qonun belgilaydi, soliq imtiyozlarining oʻzi esa Soliq kodeksi bilan tartibga solinadi. Ushbu qoʻllanmada hozir amal qilayotgan qoidalar, jumladan 2026-yil 1-apreldan yangi ishtirokchilar uchun kiritilgan oʻzgarish bayon etilgan.",
      },
      { type: "h2", text: "Qonunchilik bazasi" },
      {
        type: "sources",
        items: [
          {
            title: "Oʻzbekiston Respublikasi Soliq kodeksi",
            meta: "473–474-moddalar · 2022-yil 12-iyuldagi OʻRQ-783-sonli Qonun tahririda",
            href: "https://lex.uz/uz/docs/4674893",
          },
          {
            title: "«Maxsus iqtisodiy zonalar toʻgʻrisida»gi OʻRQ-604-sonli Qonun",
            meta: "2020-yil 17-fevral",
            href: "https://lex.uz/uz/docs/4737514",
          },
          {
            title: "PQ-5243-sonli Prezident Qarori",
            meta: "2021-yil 14-sentabr · Maxsus iqtisodiy zonalar ishtirokchilarini yanada qoʻllab-quvvatlash chora-tadbirlari toʻgʻrisida",
            href: "https://lex.uz/uz/docs/5633655",
          },
          {
            title: "PF-153-sonli Prezident Farmoni",
            meta: "2022-yil 13-iyun · Maxsus iqtisodiy, kichik sanoat, yoshlar sanoat va tadbirkorlik zonalarining samaradorligini oshirish boʻyicha qoʻshimcha chora-tadbirlar toʻgʻrisida",
            href: "https://lex.uz/uz/docs/6061066",
          },
          {
            title: "PF-5600-sonli Prezident Farmoni",
            meta: "2018-yil 21-dekabr · Erkin iqtisodiy zonalarni muvofiqlashtirish va boshqarish tizimini yanada takomillashtirish toʻgʻrisida",
            href: "https://lex.uz/uz/docs/4117767",
          },
          { title: "Oʻzbekiston Respublikasi Bojxona kodeksi" },
        ],
      },
      { type: "h2", text: "Maxsus iqtisodiy zonalar turlari" },
      {
        type: "p",
        text: "OʻRQ-604-sonli Qonunga koʻra MIZlar Prezident qarori bilan tashkil etiladi va quyidagi turlarda boʻlishi mumkin:",
      },
      {
        type: "ul",
        items: [
          "Erkin iqtisodiy zonalar",
          "Maxsus ilmiy-texnologik zonalar",
          "Turistik-rekreatsion zonalar",
          "Erkin savdo zonalari",
          "Alohida sanoat zonalari",
        ],
      },
      { type: "h2", text: "Soliq kodeksining 473-moddasi boʻyicha soliq imtiyozlari" },
      { type: "p", text: "MIZ ishtirokchilari quyidagi soliqlardan ozod qilinadi:" },
      {
        type: "checks",
        items: [
          "Foyda soligʻi — investitsiya hajmiga qarab 3, 5 yoki 10 yilga",
          "Mol-mulk soligʻi — Prezident qarori bilan belgilanadigan muddatga",
          "Yer soligʻi — Prezident qarori bilan belgilanadigan muddatga",
        ],
        except: "QQS saqlanadi: import QQSni 120 kungacha kechiktirish mumkin",
      },
      {
        type: "p",
        text: "Foyda soligʻidan ozod qilish muddati kiritilgan investitsiya hajmiga bogʻliq (Soliq kodeksi 473-moddasining ikkinchi qismi; 2022-yil 12-iyuldagi OʻRQ-783-sonli Qonun bilan qoʻshilgan):",
      },
      {
        type: "table",
        head: ["Investitsiya hajmi", "Foyda soligʻidan ozod qilish"],
        rows: [
          { cells: ["3–5 mln AQSh dollari", "3 yil"], bar: 0.3 },
          { cells: ["5–15 mln AQSh dollari", "5 yil"], bar: 0.5 },
          { cells: ["15 mln AQSh dollari va undan koʻp", "10 yil"], bar: 1, highlight: true },
        ],
        caption: "2026-yil 1-apreldan maqom olgan ishtirokchilar uchun xuddi shu chegaralar tezlashtirilgan amortizatsiya muddatini belgilaydi.",
      },
      { type: "h3", text: "2026-yil 1-apreldan — ozod qilish oʻrniga tezlashtirilgan amortizatsiya" },
      {
        type: "p",
        text: "2026-yil 1-apreldan boshlab MIZ ishtirokchisi maqomini olgan soliq toʻlovchilarga foyda soligʻi boʻyicha imtiyoz amortizatsiya qilinadigan asosiy vositalarni tezlashtirilgan amortizatsiya qilish huquqi shaklida beriladi. Muddat xuddi shu investitsiya chegaralariga bogʻliq (Soliq kodeksi 473-moddasining uchinchi qismi). Tezlashtirilgan amortizatsiya foyda soligʻini bekor qilmaydi: u uskunalar va binolarga xarajatlarni loyihaning dastlabki yillariga oʻtkazadi, shu yillarda soliq kamroq toʻlanadi.",
      },
      { type: "h3", text: "Faqat investitsiya shartnomasidagi faoliyat uchun" },
      {
        type: "p",
        text: "Yuqoridagi barcha imtiyozlar faqat investor va MIZ direksiyasi oʻrtasida tuzilgan investitsiya shartnomasida nazarda tutilgan faoliyat turlariga tatbiq etiladi (Soliq kodeksi 473-moddasining toʻrtinchi qismi). Shu kompaniyaning boshqa faoliyati umumiy asosda soliqqa tortiladi.",
      },
      { type: "h3", text: "Imtiyozlar qachondan amal qiladi" },
      {
        type: "ul",
        items: [
          "Mol-mulk soligʻi va yer soligʻi boʻyicha imtiyozlar muddati MIZ ishtirokchisi guvohnomasi olingan sanadan hisoblanadi (Soliq kodeksining 474-moddasi).",
          "Foyda soligʻi boʻyicha imtiyoz muddati MIZ hududidagi ishlab chiqarish obyekti (xizmat koʻrsatish obyekti) foydalanishga qabul qilingan sanadan hisoblanadi.",
          "Agar ishtirokchi investitsiyani uzoqroq muddat beradigan hajmgacha oshirsa, imtiyozlarni haqiqiy investitsiya hajmiga muvofiq uzaytirishga haqli.",
          "Ishtirokchi maqomidan mahrum qilinganda imtiyozlar maqom bekor qilingan oyning 1-sanasidan toʻxtatiladi.",
        ],
      },
      { type: "h2", text: "QQS va bojxona bojini kechiktirish" },
      {
        type: "p",
        text: "MIZ ishtirokchilari QQSdan ozod qilinmaydi, lekin import qilishda aylanma mablagʻlar uchun afzallikka ega:",
      },
      {
        type: "figures",
        items: [
          {
            value: "120",
            unit: "kun",
            label: "Butlovchi buyumlar, xomashyo va materiallar importida QQS va bojxona bojini foizsiz va taʼminotsiz kechiktirish (boʻlib toʻlash)",
          },
        ],
      },
      {
        type: "p",
        text: "Kechiktirish mahsulot ishlab chiqarish va oʻz ehtiyojlari uchun import qilinadigan tovarlarga tatbiq etiladi (2021-yil 14-sentabrdagi PQ-5243-sonli Prezident Qarori).",
      },
      { type: "h2", text: "Bojxona imtiyozlari" },
      {
        type: "p",
        text: "OʻRQ-604-sonli Qonunga (39-modda) koʻra MIZ ishtirokchilari quyidagi hollarda bojxona toʻlovlarini toʻlamaydi:",
      },
      {
        type: "ul",
        items: [
          "Oʻzbekistonda ishlab chiqarilmaydigan qurilish materiallarini investitsiya shartnomasiga muvofiq investitsiya loyihasini amalga oshirish uchun qurilish davrida olib kirishda (QQS va bojxona rasmiylashtiruvi yigʻimlari toʻlanadi).",
          "Oʻzbekistonda muqobili ishlab chiqarilmaydigan texnologik uskunalarni tasdiqlangan roʻyxat boʻyicha olib kirishda (bojxona rasmiylashtiruvi yigʻimlari toʻlanadi).",
          "Eksportga mahsulot ishlab chiqarish uchun xomashyo, materiallar va butlovchi buyumlarni olib kirishda (bojxona rasmiylashtiruvi yigʻimlari toʻlanadi). 2022-yil 13-iyundagi PF-153-sonli Prezident Farmoniga koʻra bu imtiyoz faqat tovarlar «bojxona hududida qayta ishlash» bojxona rejimiga joylashtirilganda qoʻllaniladi.",
        ],
      },
      {
        type: "takeaway",
        title: "Bu siz uchun nimani anglatadi",
        items: [
          "Ariza berishdan oldin investitsiya hajmini aniqlang: foyda soligʻi boʻyicha imtiyoz 3, 5 yoki 10 yilga berilishi shunga bogʻliq.",
          "Agar maqom 2026-yil 1-apreldan keyin olingan boʻlsa, moliyaviy modelga foyda soligʻidan ozod qilishni emas, tezlashtirilgan amortizatsiyani kiriting.",
          "Imtiyoz kerak boʻlgan barcha faoliyat turlarini investitsiya shartnomasida koʻrsating: boshqa faoliyatga imtiyozlar tatbiq etilmaydi.",
          "QQSni rejalashtiring: u bekor qilinmaydi, lekin import QQSni 120 kungacha kechiktirish mumkin.",
          "Xomashyoni «bojxona hududida qayta ishlash» rejimida olib kiring, aks holda bojxona imtiyozi qoʻllanilmaydi.",
        ],
      },
      { type: "h2", text: "Huquqiy kafolatlar" },
      {
        type: "p",
        text: "Soliq qonunchiligi oʻzgarganda MIZ ishtirokchilari imtiyozlar muddati davomida, lekin oʻn yildan koʻp boʻlmagan muddatda, MIZ ishtirokchilari reestriga kiritilgan sanada amal qilgan soliq toʻlash qoidalarini qoʻllashga haqli. Bu kafolat aksizli tovarlarni soliqqa tortishga tatbiq etilmaydi (OʻRQ-604-sonli Qonunning 42-moddasi).",
      },
      {
        type: "p",
        text: "Ishtirokchilar eksport va import qilinadigan tovarlar uchun oʻzlariga qulay toʻlov shartlari va hisob-kitob shakllaridan foydalanishi mumkin. Qoʻshimcha kafolatlar va imtiyozlar Prezident qarori bilan belgilanishi mumkin. Davlat organlarining asossiz aralashuvi natijasida yetkazilgan zararlar, boy berilgan foyda va maʼnaviy zarar sud tartibida qoplanadi.",
      },
      { type: "h2", text: "MIZ ishtirokchilarining qoʻshimcha huquqlari" },
      {
        type: "ul",
        items: [
          "Elektron onlayn auksion orqali yer uchastkalarini ijaraga olish, binolar va inshootlardan, jumladan ijara asosida foydalanish, OʻRQ-604-sonli Qonunda nazarda tutilgan tartibda ishlab chiqarish faoliyati uchun infratuzilma obyektlarini qurish.",
          "MIZ direksiyasidan investitsiya shartnomasi va loyiha jadvaliga muvofiq muhandislik-kommunikatsiya va yoʻl-transport infratuzilmasini oʻz vaqtida taʼminlashni talab qilish.",
          "MIZ direksiyasi koʻrsatadigan barcha xizmatlardan teng shartlarda, jumladan shartnoma asosida foydalanish.",
          "Loyiha uchun zarur infratuzilma obyektlarini MIZ bosh rejasiga muvofiq oʻz hisobidan qurish.",
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
        text: "Toʻgʻri MIZni tanlash, mavjud imtiyozlardan toʻliq foydalanish uchun investitsiya loyihasini tuzish va joriy talablarni bajarish puxta huquqiy va soliq rejalashtirishni talab qiladi. Advizen jamoasi imtiyozlarga boʻlgan huquqni baholash, MIZ ishtirokchisi maqomi uchun ariza va investitsiya shartnomasini tayyorlash hamda zona direksiyasi talablarini bajarishda yordam beradi.",
      },
    ],
    faq: [
      {
        question: "Oʻzbekistonda MIZ ishtirokchilari qanday soliq imtiyozlariga ega?",
        answer: "Soliq kodeksining 473-moddasiga koʻra MIZ ishtirokchilari foyda soligʻidan 3 yilga (3–5 mln AQSh dollari investitsiya), 5 yilga (5–15 mln) yoki 10 yilga (15 mln va undan koʻp), shuningdek Prezident qarori bilan belgilanadigan muddatga mol-mulk soligʻi va yer soligʻidan ozod qilinadi. 2026-yil 1-apreldan maqom olgan ishtirokchilar foyda soligʻidan ozod qilish oʻrniga asosiy vositalarni tezlashtirilgan amortizatsiya qilish huquqini oladi. Butlovchi buyumlar, xomashyo va materiallar importida QQS va bojxona bojini 120 kungacha foizsiz kechiktirish mumkin (PQ-5243). Imtiyozlar faqat MIZ direksiyasi bilan tuzilgan investitsiya shartnomasidagi faoliyat turlariga tatbiq etiladi.",
      },
      {
        question: "2026-yil 1-apreldan MIZ ishtirokchilari uchun nima oʻzgardi?",
        answer: "2026-yil 1-apreldan boshlab MIZ ishtirokchisi maqomini olgan soliq toʻlovchilar endi foyda soligʻidan ozod qilinmaydi. Buning oʻrniga ular amortizatsiya qilinadigan asosiy vositalarni tezlashtirilgan amortizatsiya qilish huquqini xuddi shu investitsiya chegaralariga — 3, 5 va 15 mln AQSh dollariga bogʻliq muddatga oladi (Soliq kodeksi 473-moddasining uchinchi qismi). Mol-mulk soligʻi va yer soligʻidan ozod qilish saqlanadi.",
      },
      {
        question: "Oʻzbekistonda qanday turdagi maxsus iqtisodiy zonalar mavjud?",
        answer: "OʻRQ-604-sonli Qonun MIZning beshta turini nazarda tutadi: erkin iqtisodiy zonalar, maxsus ilmiy-texnologik zonalar, turistik-rekreatsion zonalar, erkin savdo zonalari va alohida sanoat zonalari.",
      },
      {
        question: "Qonunchilik oʻzgarganda MIZ soliq imtiyozlari saqlanadimi?",
        answer: "Ha. Soliq qonunchiligi oʻzgarganda MIZ ishtirokchilari ishtirokchilar reestriga kiritilgan sanada amal qilgan qoidalarni imtiyozlar muddati davomida, lekin oʻn yildan koʻp boʻlmagan muddatda qoʻllashga haqli (OʻRQ-604-sonli Qonunning 42-moddasi). Kafolat aksizli tovarlarni soliqqa tortishga tatbiq etilmaydi.",
      },
      {
        question: "Oʻzbekistonda kompaniyalar MIZ ishtirokchisi maqomini qanday oladi?",
        answer: "Investor tegishli MIZ direksiyasiga investitsiya arizasini topshiradi. Ariza maʼqullangach, investor direksiya bilan investitsiya shartnomasini imzolaydi, MIZ ishtirokchilari reestriga kiritiladi va ishtirokchi guvohnomasini oladi. Advizen imtiyozlarga boʻlgan huquqni baholash, ariza va investitsiya shartnomasini tayyorlashda yordam beradi.",
      },
    ],
  },
};

export default article;
