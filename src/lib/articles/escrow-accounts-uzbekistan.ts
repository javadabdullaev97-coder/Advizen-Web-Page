import type { LocalizedArticle } from "../publications";

const article: Record<string, LocalizedArticle> = {
  en: {
    subtitle: "What the 2025–2026 legislative reforms mean for buyers, sellers, and developers",
    author: "Advizen Legal Practice",
    readTime: "9 min read",
    inShort: {
      figures: [
        { value: "1 April 2026", label: "Start of notarial escrow for sales of real estate and of vehicles of categories M, N, O and G no older than 10 years" },
        { value: "10 November 2026", label: "The Legislative Chamber passed the shared construction law with mandatory escrow; it now goes to the Senate" },
        { value: "≤ 30%", label: "Developer's own funds in a project under the new law; at least 70% must come from bank project financing" },
        { value: "9 banks", label: "Banks with state participation whose notarial escrow fees are capped; private banks set their own tariffs" },
      ],
      points: [
        "Since 1 April 2026, sales of real estate, of vehicles of categories M, N, O and G no older than 10 years, and of special vehicles are paid through a notarial escrow account under a Presidential decree of 10 December 2025.",
        "The buyer pays the price in soum into an escrow account at a bank whose employee works at the notary's office. The seller receives the funds once the notary confirms the transaction.",
        "Mandatory escrow in shared construction (off-plan housing) is not in force. The Ministry of Justice confirmed this in January 2026, and the new law passed the Legislative Chamber on 10 November 2026 and awaits the Senate.",
        "Once in force, the shared construction law will apply only to projects whose construction permits are issued after that date.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Uzbekistan uses escrow in two settings, and their legal status differs. Notarial escrow for sales of real estate and qualifying vehicles has applied since April 1, 2026. Mandatory escrow in shared construction (off-plan housing) has been announced since 2025 but is not yet in force: as of November 2026, the law is before the Senate.",
      },
      { type: "h2" as const, text: "Background: why escrow?" },
      {
        type: "p" as const,
        text: "Buyers of off-plan apartments and other real estate used to pay developers and sellers directly, with little protection if the deal fell through. Escrow keeps the money at a bank until the transaction is completed. The Central Bank added the escrow account to the list of bank account types from November 12, 2025 (Instruction reg. No. 3420, as amended by reg. No. 3420-2).",
      },
      { type: "h2" as const, text: "Part 1: notarial escrow for real estate and vehicles (since April 1, 2026)" },
      {
        type: "p" as const,
        text: "From April 1, 2026, payment for real estate, for vehicles of categories M, N, O and G no older than 10 years, and for special vehicles goes through an escrow account. The basis is a Presidential decree of December 10, 2025. The buyer deposits the price in soum into an escrow account at a bank whose employee works at the notary's office. The notary confirms the transaction, and the seller then receives the funds. If the deal is cancelled, the money returns to the buyer. Escrow is not required for earlier housing investment contracts on which payments have already been made.",
      },
      { type: "h3" as const, text: "Fees" },
      {
        type: "p" as const,
        text: "There is no single fixed escrow fee. At the nine banks with state participation the fee is capped, and private banks set their own tariffs. Ask the bank for its current tariff before the transaction.",
      },
      { type: "h2" as const, text: "Part 2: escrow in shared construction (adopted by the Legislative Chamber, not in force)" },
      {
        type: "p" as const,
        text: "Presidential decree UP-11 of January 27, 2025 allowed developers to use escrow voluntarily from July 1, 2025 and planned an escrow-only model from January 1, 2026. That start did not take place. In January 2026, the Ministry of Justice said that reports of a January 1 start had no legal basis and that legislation had to be amended first.",
      },
      {
        type: "p" as const,
        text: "The Law on shared construction passed the Legislative Chamber on November 10, 2026 and has been sent to the Senate. It will apply only to projects whose construction permits are obtained after it enters into force; projects with earlier permits are not covered.",
      },
      { type: "h3" as const, text: "What the law provides, as reported" },
      {
        type: "ul" as const,
        items: [
          "The developer receives buyers' money only after the building is completed and handed over",
          "The developer may finance no more than 30% of the project from its own funds; at least 70% must come from bank project financing",
          "A delayed project can be declared problematic without waiting an additional six months",
          "Escrow funds cannot be recovered by the developer's creditors, and only authorised banks may hold them",
        ],
      },
      {
        type: "p" as const,
        text: "These terms come from press reports on the text passed by the Legislative Chamber. The Senate may still change it, so check the signed law before relying on them.",
      },
      { type: "h2" as const, text: "Compliance considerations and key risks" },
      { type: "h3" as const, text: "Understating contract price" },
      {
        type: "p" as const,
        text: "Escrow funds must match the stated contract price and flow through a regulated bank, creating an evidentiary paper trail visible to tax authorities and financial intelligence units. Buyers who agree to declare a lower price expose themselves to potential liability under tax and anti-money laundering legislation.",
      },
      { type: "h3" as const, text: "Foreign currency transactions" },
      {
        type: "p" as const,
        text: "Real estate transactions in Uzbekistan are denominated in Uzbek som. Parties negotiating in USD must account for exchange rate movements between agreement signing and registration completion, as the escrow amount is fixed in som at the time of deposit.",
      },
      { type: "divider" as const },
      { type: "h2" as const, text: "Summary of key dates and rules" },
      {
        type: "ul" as const,
        items: [
          "November 12, 2025: the escrow account becomes a bank account type (Instruction reg. No. 3420-2)",
          "April 1, 2026: notarial escrow for sales of real estate and qualifying vehicles",
          "Escrow fees: capped at the nine banks with state participation; private banks set their own tariffs",
          "November 10, 2026: the Legislative Chamber passes the shared construction law; Senate approval pending",
          "Under the new law: developer's own funds no more than 30%, bank project financing at least 70%",
          "The new law will cover only construction permits issued after it enters into force",
        ],
      },
      {
        type: "sources",
        items: [
          { title: "Central Bank Instruction on opening bank accounts, reg. No. 3420", meta: "as amended by reg. No. 3420-2, in force from 12.11.2025", href: "https://lex.uz/docs/6379336" },
          { title: "Presidential decree of 10 December 2025", meta: "notarial escrow from 01.04.2026" },
          { title: "Presidential decree UP-11", meta: "27.01.2025" },
          {
            title: "Ministry of Justice: mandatory escrow in shared construction has not entered into force",
            meta: "spot.uz, 05.01.2026, in Russian",
            href: "https://www.spot.uz/ru/2026/01/05/escrow-delay/",
          },
          {
            title: "Legislative Chamber passes the law on shared construction",
            meta: "gazeta.uz, 10.11.2026, in Russian",
            href: "https://www.gazeta.uz/ru/2026/11/10/shared-equity-construction/",
          },
          {
            title: "How notarial escrow works and what banks charge",
            meta: "gazeta.uz, 28.03.2026, in Russian",
            href: "https://www.gazeta.uz/ru/2026/03/28/escrow/",
          },
        ],
      },
    ],
    faq: [
      {
        question: "When did escrow accounts become mandatory for real estate transactions in Uzbekistan?",
        answer: "From April 1, 2026, for sales of real estate, of vehicles of categories M, N, O and G no older than 10 years, and of special vehicles, under a Presidential decree of December 10, 2025. The price is paid into an escrow account and released to the seller after the notary confirms the transaction. Mandatory escrow in shared construction (off-plan housing) is not yet in force.",
      },
      {
        question: "How much does an escrow account cost for a property transaction in Uzbekistan?",
        answer: "There is no single fixed fee. At the nine banks with state participation the fee is capped, and private banks set their own tariffs. Check the bank's current tariff before the transaction.",
      },
      {
        question: "Is escrow mandatory for off-plan (shared construction) purchases in Uzbekistan?",
        answer: "Not yet. Decree UP-11 of January 27, 2025 planned an escrow-only model from January 1, 2026, but in January 2026 the Ministry of Justice said that this requirement had not entered into force. The Law on shared construction passed the Legislative Chamber on November 10, 2026 and awaits the Senate. It will apply only to projects whose construction permits are issued after it enters into force.",
      },
      {
        question: "Are escrow funds protected if a developer faces insolvency in Uzbekistan?",
        answer: "Under the shared construction law passed by the Legislative Chamber, as reported, escrow funds cannot be recovered by the developer's creditors, and the developer receives buyers' money only after the building is handed over. These rules are not in force yet: the law still needs Senate approval and will cover only projects with construction permits issued after it enters into force.",
      },
    ],
  },
  ru: {
    subtitle: "Что реформы законодательства 2025–2026 годов означают для покупателей, продавцов и застройщиков",
    author: "Юридическая практика Advizen",
    readTime: "9 мин чтения",
    inShort: {
      figures: [
        { value: "1 апреля 2026", label: "Начало нотариального эскроу при продаже недвижимости и транспортных средств категорий M, N, O и G не старше 10 лет" },
        { value: "10 ноября 2026", label: "Законодательная палата приняла Закон о долевом строительстве с обязательным эскроу; он передан в Сенат" },
        { value: "≤ 30%", label: "Доля собственных средств застройщика в проекте по новому закону; не менее 70% — банковское проектное финансирование" },
        { value: "9 банков", label: "Банки с государственным участием, где комиссия за нотариальный эскроу ограничена; частные банки устанавливают тарифы сами" },
      ],
      points: [
        "С 1 апреля 2026 года продажа недвижимости, транспортных средств категорий M, N, O и G не старше 10 лет и спецтехники оплачивается через нотариальный эскроу-счёт по Указу Президента от 10 декабря 2025 года.",
        "Покупатель вносит цену в сумах на счёт эскроу в банке, сотрудник которого работает у нотариуса. Продавец получает средства после того, как нотариус подтвердит сделку.",
        "Обязательный эскроу в долевом строительстве не вступил в силу. Это подтвердил Минюст в январе 2026 года, а новый закон Законодательная палата приняла 10 ноября 2026 года, и он ожидает одобрения Сената.",
        "После вступления в силу Закон о долевом строительстве применится только к проектам, разрешения на строительство которых получены после этой даты.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "В Узбекистане эскроу применяется в двух случаях, и их правовой статус различается. Нотариальный эскроу при продаже недвижимости и отдельных транспортных средств действует с 1 апреля 2026 года. Обязательный эскроу в долевом строительстве объявлен ещё в 2025 году, но в силу не вступил: на ноябрь 2026 года закон находится в Сенате.",
      },
      { type: "h2" as const, text: "Предпосылки: зачем нужен эскроу?" },
      {
        type: "p" as const,
        text: "Раньше покупатели строящихся квартир и иной недвижимости платили застройщикам и продавцам напрямую и почти не были защищены, если сделка срывалась. Эскроу удерживает деньги в банке до завершения сделки. Центральный банк включил эскроу-счёт в перечень видов банковских счетов с 12 ноября 2025 года (Инструкция рег. № 3420 в ред. рег. № 3420-2).",
      },
      { type: "h2" as const, text: "Часть 1: нотариальный эскроу для недвижимости и транспортных средств (с 1 апреля 2026 года)" },
      {
        type: "p" as const,
        text: "С 1 апреля 2026 года оплата недвижимости, транспортных средств категорий M, N, O и G не старше 10 лет и спецтехники проходит через счёт эскроу. Основание — Указ Президента от 10 декабря 2025 года. Покупатель вносит цену в сумах на счёт эскроу в банке, сотрудник которого работает у нотариуса. Нотариус подтверждает сделку, после чего продавец получает средства. Если сделка отменяется, деньги возвращаются покупателю. Эскроу не требуется по ранее заключённым договорам инвестирования в жильё, по которым платежи уже внесены.",
      },
      { type: "h3" as const, text: "Комиссии" },
      {
        type: "p" as const,
        text: "Единой фиксированной комиссии за эскроу нет. В девяти банках с государственным участием комиссия ограничена предельным размером, частные банки устанавливают тарифы сами. Действующий тариф стоит уточнить в банке до сделки.",
      },
      { type: "h2" as const, text: "Часть 2: эскроу в долевом строительстве (принят Законодательной палатой, не вступил в силу)" },
      {
        type: "p" as const,
        text: "Указ Президента УП-11 от 27 января 2025 года разрешил застройщикам с 1 июля 2025 года использовать эскроу добровольно и предусмотрел переход только на эскроу с 1 января 2026 года. Этот переход не состоялся. В январе 2026 года Минюст заявил, что сообщения о старте 1 января не имеют под собой правовой основы и сначала нужно изменить законодательство.",
      },
      {
        type: "p" as const,
        text: "Закон о долевом строительстве Законодательная палата приняла 10 ноября 2026 года и направила в Сенат. Он применится только к проектам, разрешения на строительство которых получены после его вступления в силу; проекты с более ранними разрешениями под него не подпадают.",
      },
      { type: "h3" as const, text: "Что предусматривает закон, по сообщениям прессы" },
      {
        type: "ul" as const,
        items: [
          "Застройщик получает деньги покупателей только после завершения строительства и сдачи объекта",
          "Застройщик вправе финансировать проект собственными средствами не более чем на 30%; не менее 70% должно приходиться на банковское проектное финансирование",
          "Объект с задержкой можно признать проблемным, не дожидаясь дополнительных шести месяцев",
          "Средства эскроу не могут быть взысканы кредиторами застройщика, а работать с ними вправе только уполномоченные банки",
        ],
      },
      {
        type: "p" as const,
        text: "Эти условия известны из сообщений прессы о тексте, принятом Законодательной палатой. Сенат ещё может его изменить, поэтому перед тем как на них опираться, нужно сверить подписанный закон.",
      },
      { type: "h2" as const, text: "Вопросы соответствия и ключевые риски" },
      { type: "h3" as const, text: "Занижение цены договора" },
      {
        type: "p" as const,
        text: "Средства на счёте эскроу должны соответствовать заявленной цене договора и проходить через регулируемый банк, что создаёт документальный след, доступный налоговым органам и подразделениям финансовой разведки. Покупатели, соглашающиеся на указание заниженной цены, рискуют понести ответственность в соответствии с налоговым законодательством и законодательством о противодействии отмыванию денег.",
      },
      { type: "h3" as const, text: "Сделки в иностранной валюте" },
      {
        type: "p" as const,
        text: "Сделки с недвижимостью в Узбекистане номинируются в узбекских сумах. Стороны, ведущие переговоры в долларах США, должны учитывать колебания обменного курса между подписанием договора и завершением регистрации, поскольку сумма эскроу фиксируется в сумах на момент внесения.",
      },
      { type: "divider" as const },
      { type: "h2" as const, text: "Краткое изложение ключевых дат и правил" },
      {
        type: "ul" as const,
        items: [
          "12 ноября 2025 года: эскроу-счёт становится видом банковского счёта (Инструкция рег. № 3420-2)",
          "1 апреля 2026 года: нотариальный эскроу при продаже недвижимости и отдельных транспортных средств",
          "Комиссия за эскроу: ограничена в девяти банках с государственным участием, частные банки устанавливают тарифы сами",
          "10 ноября 2026 года: Законодательная палата приняла Закон о долевом строительстве, он ожидает одобрения Сената",
          "По новому закону: собственные средства застройщика не более 30%, банковское проектное финансирование не менее 70%",
          "Новый закон применится только к разрешениям на строительство, полученным после его вступления в силу",
        ],
      },
      {
        type: "sources",
        items: [
          { title: "Инструкция ЦБ о порядке открытия банковских счетов, рег. № 3420", meta: "в ред. рег. № 3420-2, в силе с 12.11.2025", href: "https://lex.uz/docs/6379336" },
          { title: "Указ Президента от 10 декабря 2025 года", meta: "нотариальный эскроу с 01.04.2026" },
          { title: "Указ Президента УП-11", meta: "27.01.2025" },
          {
            title: "Минюст: обязательный эскроу в долевом строительстве не вступил в силу",
            meta: "spot.uz, 05.01.2026",
            href: "https://www.spot.uz/ru/2026/01/05/escrow-delay/",
          },
          {
            title: "Законодательная палата приняла закон о долевом строительстве",
            meta: "gazeta.uz, 10.11.2026",
            href: "https://www.gazeta.uz/ru/2026/11/10/shared-equity-construction/",
          },
          {
            title: "Как работает нотариальный эскроу и сколько берут банки",
            meta: "gazeta.uz, 28.03.2026",
            href: "https://www.gazeta.uz/ru/2026/03/28/escrow/",
          },
        ],
      },
    ],
    faq: [
      {
        question: "С какого момента счета эскроу стали обязательными для сделок с недвижимостью в Узбекистане?",
        answer: "С 1 апреля 2026 года — для продажи недвижимости, транспортных средств категорий M, N, O и G не старше 10 лет и спецтехники, по Указу Президента от 10 декабря 2025 года. Цена вносится на счёт эскроу и перечисляется продавцу после того, как нотариус подтвердит сделку. Обязательный эскроу в долевом строительстве пока не вступил в силу.",
      },
      {
        question: "Сколько стоит открытие счёта эскроу для сделки с недвижимостью в Узбекистане?",
        answer: "Единой фиксированной комиссии нет. В девяти банках с государственным участием комиссия ограничена предельным размером, частные банки устанавливают тарифы сами. Действующий тариф стоит уточнить в банке до сделки.",
      },
      {
        question: "Обязателен ли эскроу при покупке строящегося жилья (долевое строительство) в Узбекистане?",
        answer: "Пока нет. Указ УП-11 от 27 января 2025 года предусматривал переход только на эскроу с 1 января 2026 года, но в январе 2026 года Минюст заявил, что это требование не вступило в силу. Закон о долевом строительстве Законодательная палата приняла 10 ноября 2026 года, он ожидает одобрения Сената. Закон применится только к проектам, разрешения на строительство которых получены после его вступления в силу.",
      },
      {
        question: "Защищены ли средства на эскроу-счёте в случае несостоятельности застройщика в Узбекистане?",
        answer: "По Закону о долевом строительстве, принятому Законодательной палатой, средства эскроу, по сообщениям прессы, не могут быть взысканы кредиторами застройщика, а застройщик получает деньги покупателей только после сдачи объекта. Эти нормы ещё не действуют: закон должен одобрить Сенат, и он охватит только проекты с разрешениями на строительство, полученными после его вступления в силу.",
      },
    ],
  },
  uz: {
    subtitle: "2025–2026-yilgi qonunchilik islohotlari xaridor, sotuvchi va qurilish kompaniyalari uchun nima anglatadi",
    author: "Advizen yuridik amaliyoti",
    readTime: "9 daqiqa oʻqish",
    inShort: {
      figures: [
        { value: "2026-yil 1-aprel", label: "Koʻchmas mulk hamda M, N, O va G toifalaridagi 10 yildan eski boʻlmagan transport vositalarini sotishda notarial escrow boshlangan sana" },
        { value: "2026-yil 10-noyabr", label: "Qonunchilik palatasi majburiy escrow nazarda tutilgan ulushli qurilish toʻgʻrisidagi qonunni qabul qildi; u Senatga yuborildi" },
        { value: "≤ 30%", label: "Yangi qonunga koʻra loyihada qurilish kompaniyasi oʻz mablagʻlarining ulushi; kamida 70% bank loyiha moliyalashtirishidan boʻlishi kerak" },
        { value: "9 bank", label: "Notarial escrow komissiyasi cheklangan davlat ishtirokidagi banklar; xususiy banklar tariflarni oʻzlari belgilaydi" },
      ],
      points: [
        "2026-yil 1-apreldan koʻchmas mulk, M, N, O va G toifalaridagi 10 yildan eski boʻlmagan transport vositalari va maxsus texnikani sotish Prezidentning 2025-yil 10-dekabrdagi Farmoniga koʻra notarial escrow hisobvaragʻi orqali toʻlanadi.",
        "Xaridor narxni soʻmda xodimi notarius huzurida ishlaydigan bankdagi escrow hisobvaragʻiga kiritadi. Notarius bitimni tasdiqlagach, sotuvchi mablagʻlarni oladi.",
        "Ulushli qurilishda majburiy escrow kuchga kirmagan. Buni 2026-yil yanvarida Adliya vazirligi tasdiqlagan, yangi qonun esa 2026-yil 10-noyabrda Qonunchilik palatasi tomonidan qabul qilinib, Senat maʼqullashini kutmoqda.",
        "Kuchga kirgach, ulushli qurilish toʻgʻrisidagi qonun faqat qurilish uchun ruxsatnomasi shu sanadan keyin olingan loyihalarga nisbatan qoʻllaniladi.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Oʻzbekistonda escrow ikki holatda qoʻllaniladi va ularning huquqiy maqomi turlicha. Koʻchmas mulk va ayrim transport vositalarini sotishda notarial escrow 2026-yil 1-apreldan amal qilmoqda. Ulushli qurilishda majburiy escrow 2025-yildayoq eʼlon qilingan, ammo hali kuchga kirmagan: 2026-yil noyabr holatiga qonun Senatda koʻrib chiqilmoqda.",
      },
      { type: "h2" as const, text: "Sabab: nima uchun escrow kerak?" },
      {
        type: "p" as const,
        text: "Ilgari qurilayotgan kvartiralar va boshqa koʻchmas mulk xaridorlari mablagʻlarni qurilish kompaniyalari va sotuvchilarga bevosita toʻlagan va bitim buzilsa, deyarli himoyasiz qolgan. Escrow pulni bitim yakunlanguncha bankda saqlaydi. Markaziy bank escrow hisobvaragʻini 2025-yil 12-noyabrdan bank hisobvaraqlari turlari roʻyxatiga kiritdi (3420-son Yoʻriqnoma, 3420-2-son tahririda).",
      },
      { type: "h2" as const, text: "1-qism: koʻchmas mulk va transport vositalari uchun notarial escrow (2026-yil 1-apreldan)" },
      {
        type: "p" as const,
        text: "2026-yil 1-apreldan koʻchmas mulk, M, N, O va G toifalaridagi 10 yildan eski boʻlmagan transport vositalari va maxsus texnika uchun toʻlov escrow hisobvaragʻi orqali amalga oshiriladi. Asos — Prezidentning 2025-yil 10-dekabrdagi Farmoni. Xaridor narxni soʻmda xodimi notarius huzurida ishlaydigan bankdagi escrow hisobvaragʻiga kiritadi. Notarius bitimni tasdiqlaydi, shundan soʻng sotuvchi mablagʻlarni oladi. Bitim bekor qilinsa, pul xaridorga qaytariladi. Toʻlovlar allaqachon kiritilgan avvalgi uy-joyga investitsiya shartnomalari boʻyicha escrow talab etilmaydi.",
      },
      { type: "h3" as const, text: "Komissiyalar" },
      {
        type: "p" as const,
        text: "Yagona qatʼiy escrow komissiyasi yoʻq. Davlat ishtirokidagi toʻqqizta bankda komissiya eng yuqori miqdor bilan cheklangan, xususiy banklar tariflarni oʻzlari belgilaydi. Amaldagi tarifni bitimdan oldin bankdan aniqlashtirish lozim.",
      },
      { type: "h2" as const, text: "2-qism: ulushli qurilishda escrow (Qonunchilik palatasi qabul qilgan, kuchga kirmagan)" },
      {
        type: "p" as const,
        text: "Prezidentning 2025-yil 27-yanvardagi PF-11-son Farmoni qurilish kompaniyalariga 2025-yil 1-iyuldan escrowdan ixtiyoriy foydalanishga ruxsat berdi va 2026-yil 1-yanvardan faqat escrow modeliga oʻtishni nazarda tutdi. Bu oʻtish amalga oshmadi. 2026-yil yanvarida Adliya vazirligi 1-yanvardan boshlanishi haqidagi xabarlar huquqiy asosga ega emasligini va avval qonunchilikka oʻzgartirish kiritish kerakligini maʼlum qildi.",
      },
      {
        type: "p" as const,
        text: "Ulushli qurilish toʻgʻrisidagi qonun 2026-yil 10-noyabrda Qonunchilik palatasi tomonidan qabul qilinib, Senatga yuborildi. U faqat qurilish uchun ruxsatnomasi qonun kuchga kirganidan keyin olingan loyihalarga nisbatan qoʻllaniladi; avvalroq ruxsatnoma olingan loyihalarga u tatbiq etilmaydi.",
      },
      { type: "h3" as const, text: "Matbuot xabarlariga koʻra qonun nimani nazarda tutadi" },
      {
        type: "ul" as const,
        items: [
          "Qurilish kompaniyasi xaridorlar pulini faqat qurilish yakunlanib, obyekt topshirilgandan keyin oladi",
          "Qurilish kompaniyasi loyihani oʻz mablagʻlari hisobidan koʻpi bilan 30% moliyalashtirishi mumkin; kamida 70% bank loyiha moliyalashtirishidan boʻlishi kerak",
          "Kechikayotgan obyektni qoʻshimcha olti oy kutmasdan muammoli deb topish mumkin",
          "Escrow mablagʻlari qurilish kompaniyasining kreditorlari tomonidan undirilishi mumkin emas, ular bilan faqat vakolatli banklar ishlaydi",
        ],
      },
      {
        type: "p" as const,
        text: "Bu shartlar Qonunchilik palatasi qabul qilgan matn haqidagi matbuot xabarlaridan maʼlum. Senat uni hali oʻzgartirishi mumkin, shuning uchun ularga tayanishdan oldin imzolangan qonun matnini tekshirish kerak.",
      },
      { type: "h2" as const, text: "Muvofiqlik masalalari va asosiy xatarlar" },
      { type: "h3" as const, text: "Shartnoma narxini past koʻrsatish" },
      {
        type: "p" as const,
        text: "Escrow mablagʻlari belgilangan shartnoma narxiga mos kelishi va tartibga solinadigan bank orqali oʻtishi kerak, bu esa soliq organlari va moliyaviy razvedka boʻlinmalariga koʻrinadigan hujjatli iz yaratadi. Past narx koʻrsatishga rozi boʻlgan xaridorlar soliq va pul yuvishga qarshi qonunchilik boʻyicha javobgarlik xavfiga duchor boʻladilar.",
      },
      { type: "h3" as const, text: "Xorijiy valyutadagi bitimlar" },
      {
        type: "p" as const,
        text: "Oʻzbekistonda koʻchmas mulk bilan bitimlar oʻzbek soʻmida ifodalanadi. AQSh dollarida muzokaralar olib borayotgan tomonlar shartnoma imzolash va roʻyxatga olishni yakunlash oʻrtasidagi valyuta kursining oʻzgarishini hisobga olishlari kerak, chunki escrow summasi depozit paytida soʻmda qatʼiylashtiriladi.",
      },
      { type: "divider" as const },
      { type: "h2" as const, text: "Asosiy sanalar va qoidalar xulosasi" },
      {
        type: "ul" as const,
        items: [
          "2025-yil 12-noyabr: escrow hisobvaragʻi bank hisobvaragʻi turiga aylandi (3420-2-son Yoʻriqnoma)",
          "2026-yil 1-aprel: koʻchmas mulk va ayrim transport vositalarini sotishda notarial escrow",
          "Escrow komissiyasi: davlat ishtirokidagi toʻqqizta bankda cheklangan, xususiy banklar tariflarni oʻzlari belgilaydi",
          "2026-yil 10-noyabr: Qonunchilik palatasi ulushli qurilish toʻgʻrisidagi qonunni qabul qildi, u Senat maʼqullashini kutmoqda",
          "Yangi qonunga koʻra: qurilish kompaniyasining oʻz mablagʻlari koʻpi bilan 30%, bank loyiha moliyalashtirishi kamida 70%",
          "Yangi qonun faqat u kuchga kirganidan keyin berilgan qurilish ruxsatnomalariga nisbatan qoʻllaniladi",
        ],
      },
      {
        type: "sources",
        items: [
          { title: "Markaziy bankning bank hisobvaraqlarini ochish tartibi toʻgʻrisidagi yoʻriqnomasi, 3420-son", meta: "3420-2-son tahririda, 12.11.2025 dan kuchda", href: "https://lex.uz/docs/6379336" },
          { title: "Prezidentning 2025-yil 10-dekabrdagi Farmoni", meta: "01.04.2026 dan notarial escrow" },
          { title: "Prezidentning PF-11-son Farmoni", meta: "27.01.2025" },
          {
            title: "Adliya vazirligi: ulushli qurilishda majburiy escrow kuchga kirmagan",
            meta: "spot.uz, 05.01.2026, rus tilida",
            href: "https://www.spot.uz/ru/2026/01/05/escrow-delay/",
          },
          {
            title: "Qonunchilik palatasi ulushli qurilish toʻgʻrisidagi qonunni qabul qildi",
            meta: "gazeta.uz, 10.11.2026, rus tilida",
            href: "https://www.gazeta.uz/ru/2026/11/10/shared-equity-construction/",
          },
          {
            title: "Notarial escrow qanday ishlaydi va banklar qancha oladi",
            meta: "gazeta.uz, 28.03.2026, rus tilida",
            href: "https://www.gazeta.uz/ru/2026/03/28/escrow/",
          },
        ],
      },
    ],
    faq: [
      {
        question: "Oʻzbekistonda koʻchmas mulk bilan bogʻliq bitimlarda escrow hisobvaraqlari qachondan majburiy boʻldi?",
        answer: "2026-yil 1-apreldan — koʻchmas mulk, M, N, O va G toifalaridagi 10 yildan eski boʻlmagan transport vositalari va maxsus texnikani sotishda, Prezidentning 2025-yil 10-dekabrdagi Farmoniga koʻra. Narx escrow hisobvaragʻiga kiritiladi va notarius bitimni tasdiqlagach, sotuvchiga oʻtkaziladi. Ulushli qurilishda majburiy escrow hali kuchga kirmagan.",
      },
      {
        question: "Oʻzbekistonda koʻchmas mulk bitimi uchun escrow hisobvaragʻi qancha turadi?",
        answer: "Yagona qatʼiy komissiya yoʻq. Davlat ishtirokidagi toʻqqizta bankda komissiya eng yuqori miqdor bilan cheklangan, xususiy banklar tariflarni oʻzlari belgilaydi. Amaldagi tarifni bitimdan oldin bankdan aniqlashtirish lozim.",
      },
      {
        question: "Oʻzbekistonda qurilayotgan uy-joyni (ulushli qurilish) sotib olishda escrow majburiymi?",
        answer: "Hozircha yoʻq. 2025-yil 27-yanvardagi PF-11-son Farmon 2026-yil 1-yanvardan faqat escrow modeliga oʻtishni nazarda tutgan, ammo 2026-yil yanvarida Adliya vazirligi bu talab kuchga kirmaganini maʼlum qildi. Ulushli qurilish toʻgʻrisidagi qonun 2026-yil 10-noyabrda Qonunchilik palatasi tomonidan qabul qilinib, Senat maʼqullashini kutmoqda. U faqat qurilish uchun ruxsatnomasi qonun kuchga kirganidan keyin olingan loyihalarga nisbatan qoʻllaniladi.",
      },
      {
        question: "Oʻzbekistonda qurilish kompaniyasi toʻlovga qodir boʻlmay qolsa escrow mablagʻlari himoyalanadimi?",
        answer: "Qonunchilik palatasi qabul qilgan ulushli qurilish toʻgʻrisidagi qonunga koʻra, matbuot xabarlariga qaraganda, escrow mablagʻlari qurilish kompaniyasining kreditorlari tomonidan undirilishi mumkin emas, qurilish kompaniyasi esa xaridorlar pulini faqat obyekt topshirilgandan keyin oladi. Bu normalar hali amal qilmaydi: qonunni Senat maʼqullashi kerak va u faqat qurilish ruxsatnomasi qonun kuchga kirganidan keyin olingan loyihalarni qamrab oladi.",
      },
    ],
  },
};

export default article;
