import type { LocalizedArticle } from "../publications";

const article: Record<string, LocalizedArticle> = {
  en: {
    subtitle: "Find out how to register, understand tax benefits, and navigate legal aspects of self-employment in Uzbekistan.",
    author: "Advizen Tax Practice",
    readTime: "6 min read",
    inShort: {
      figures: [
        { value: "1%", label: "Turnover tax on a self-employed person's income since 1 January 2026, from the first soum up to UZS 1 billion a year" },
        { value: "UZS 1bn", label: "Annual income above which a self-employed person moves to VAT and profit tax" },
        { value: "1 BCV", label: "Minimum voluntary annual social tax, paid to the Pension Fund by 31 December" },
        { value: "72", label: "Permitted activities on the list in force since 1 January 2026, down from 104" },
      ],
      points: [
        "Since 1 July 2020, registering as self-employed in Uzbekistan is a notification through the Soliq mobile app or the taxpayer's personal cabinet, with no state fee and a QR code as proof of status.",
        "Since 1 January 2026 the former exemption for income up to UZS 100 million no longer applies: self-employed income is subject to 1% turnover tax up to UZS 1 billion a year.",
        "A company that pays a self-employed person withholds the 1% tax at source once the tax authority notifies it.",
        "Self-employed individuals do not need to keep full accounting records.",
        "Since 1 January 2026 the list of permitted activities has 72 items, down from 104, under Presidential Decree UP-50 of 19 March 2025.",
        "The annual social tax paid by a self-employed person is voluntary, goes in full to the off-budget Pension Fund and counts towards future pension benefits.",
      ],
    },
    content: [
      {
        type: "p",
        text: "Self-employment is increasingly popular in Uzbekistan, offering individuals a flexible way to utilise their skills and talents without the complexities of traditional business setup. For those looking to embark on this path, understanding the regulatory landscape is crucial.",
      },
      { type: "h2", text: "Key advantages and simplified registration" },
      {
        type: "p",
        text: "Uzbekistan has significantly streamlined the process for self-employed individuals. Since July 1, 2020, registration is a straightforward notification-based procedure through a dedicated mobile application or taxpayer's personal cabinet. This eliminates the need for temporary labour certificates and provides a QR code as proof of registration.",
      },
      {
        type: "ul",
        items: [
          "Since 1 January 2026, income from sales of goods and services up to UZS 1 billion a year is subject to 1% turnover tax; the former exemption for income up to UZS 100 million has been abolished",
          "Above UZS 1 billion a year, VAT and profit tax apply from the day the threshold is reached, and taxes other than social tax are paid as by an individual entrepreneur",
          "A company paying a self-employed person withholds the 1% tax at source once the tax authority notifies it",
          "No need to maintain full accounting records",
          "Registration takes minutes via the Soliq mobile app with no state fee",
        ],
      },
      { type: "h2", text: "Social security and pension contributions" },
      {
        type: "p",
        text: "A significant benefit for self-employed individuals is the ability to contribute to their pension fund. They pay a social tax for the year, which is fully directed to the off-budget Pension Fund. This ensures that their work as self-employed individuals contributes to their future retirement benefits, similar to how it is calculated for individual entrepreneurs. The annual contribution is at least 1 Basic Calculated Value (BCV) and is voluntary, payable up to December 31st at the BCV in force on the day of payment.",
      },
      { type: "h2", text: "Permitted activities: a shorter list since 1 January 2026" },
      {
        type: "p",
        text: "Since 1 January 2026 the activities open to the self-employed are set out in Annex 2 to Presidential Decree UP-50 of 19 March 2025. The list has 72 items, down from 104, so some activities that were open to the self-employed before 2026 are no longer on it. Check that your activity is on the current list before registering — and, for a business, before engaging a self-employed contractor. While you can perform many activities, you may concurrently choose no more than three at any given time.",
      },
      { type: "h2", text: "The Soliq app: your central hub" },
      {
        type: "ul",
        items: [
          "Register and obtain your QR code as proof of self-employed status",
          "Accept orders and process payments",
          "Issue electronic invoices to legal entities",
          "Voluntarily terminate self-employed status at any time",
          "Track income and tax obligations in real time",
        ],
      },
      {
        type: "blockquote",
        text: "Self-employment in Uzbekistan remains one of the most accessible tax regimes in the region — since 1 January 2026, a 1% turnover tax on income up to UZS 1 billion a year combined with minimal administrative burden makes it an attractive starting point for freelancers and small service providers whose activity is on the permitted list.",
      },
    ],
    faq: [
      {
        question: "How do I register as self-employed in Uzbekistan?",
        answer: "Registration as a self-employed individual in Uzbekistan is done through the Soliq mobile app or taxpayer personal cabinet — it takes minutes, requires no state fee, and results in a QR code as proof of status. No temporary labour certificate is required.",
      },
      {
        question: "What taxes do self-employed individuals pay in Uzbekistan?",
        answer: "Since 1 January 2026, self-employed individuals in Uzbekistan pay 1% turnover tax on income from sales of goods and services up to UZS 1 billion a year; the former exemption for income up to UZS 100 million has been abolished. Once income exceeds UZS 1 billion, VAT and profit tax apply from the day the threshold is reached. Social tax is voluntary. No full accounting records are required.",
      },
      {
        question: "Does a company have to withhold tax when it pays a self-employed person?",
        answer: "Yes. Since 1 January 2026, a legal entity that pays a self-employed person for goods or services is a tax agent: it withholds the 1% turnover tax at source once the tax authority notifies it.",
      },
      {
        question: "What activities are allowed under self-employed status in Uzbekistan?",
        answer: "Since 1 January 2026, permitted activities are those on the list in Annex 2 to Presidential Decree UP-50 of 19 March 2025. It has 72 items, down from 104, so check that your activity is still on it before registering. You may register for up to three activities simultaneously.",
      },
      {
        question: "Can self-employed individuals in Uzbekistan contribute to a pension?",
        answer: "Yes. Self-employed individuals can voluntarily contribute to the state Pension Fund by paying an annual social tax of at least 1 Basic Calculated Value (BCV), payable by December 31st each year.",
      },
    ],
  },
  ru: {
    subtitle: "Узнайте, как зарегистрироваться, разобраться в налоговых льготах и юридических аспектах самозанятости в Узбекистане.",
    author: "Налоговая практика Advizen",
    readTime: "6 мин чтения",
    inShort: {
      figures: [
        { value: "1%", label: "Налог с оборота на доход самозанятого с 1 января 2026 года — с первого сума и до 1 млрд сумов в год" },
        { value: "1 млрд сум", label: "Годовой доход, при превышении которого самозанятый переходит на НДС и налог на прибыль" },
        { value: "1 БРВ", label: "Минимальный добровольный годовой социальный налог в Пенсионный фонд, уплачивается до 31 декабря" },
        { value: "72", label: "Число разрешённых видов деятельности в перечне, действующем с 1 января 2026 года (было 104)" },
      ],
      points: [
        "С 1 июля 2020 года регистрация самозанятого в Узбекистане — уведомление через приложение Soliq или личный кабинет налогоплательщика, без госпошлины, с QR-кодом в подтверждение статуса.",
        "С 1 января 2026 года прежнее освобождение для доходов до 100 млн сумов не действует: доход самозанятого облагается налогом с оборота по ставке 1% до 1 млрд сумов в год.",
        "Компания, которая платит самозанятому, удерживает налог 1% у источника выплаты на основании уведомления налоговых органов.",
        "Самозанятым не нужно вести полный бухгалтерский учёт.",
        "С 1 января 2026 года перечень разрешённых видов деятельности сокращён со 104 до 72 пунктов Указом Президента № УП-50 от 19 марта 2025 года.",
        "Годовой социальный налог самозанятого уплачивается добровольно, полностью направляется во внебюджетный Пенсионный фонд и учитывается при расчёте будущей пенсии.",
      ],
    },
    content: [
      {
        type: "p",
        text: "Самозанятость становится всё популярнее в Узбекистане, предлагая физлицам гибкий способ применять свои навыки и таланты без сложностей классического оформления бизнеса. Тем, кто планирует пойти этим путём, важно понимать регуляторную среду.",
      },
      { type: "h2", text: "Ключевые преимущества и упрощённая регистрация" },
      {
        type: "p",
        text: "Узбекистан значительно упростил процесс для самозанятых. С 1 июля 2020 года регистрация — простая уведомительная процедура через специальное мобильное приложение или личный кабинет налогоплательщика. Это устранило необходимость во временных трудовых справках и обеспечивает QR-код как подтверждение регистрации.",
      },
      {
        type: "ul",
        items: [
          "С 1 января 2026 года доход от реализации товаров и услуг до 1 млрд сумов в год облагается налогом с оборота по ставке 1%; прежнее освобождение для доходов до 100 млн сумов отменено",
          "При доходе свыше 1 млрд сумов в год со дня достижения порога применяются НДС и налог на прибыль, а налоги (кроме социального) уплачиваются в порядке, установленном для индивидуальных предпринимателей",
          "Компания, которая платит самозанятому, удерживает налог 1% у источника выплаты на основании уведомления налоговых органов",
          "Полный бухгалтерский учёт не требуется",
          "Регистрация занимает несколько минут через приложение Soliq без госпошлины",
        ],
      },
      { type: "h2", text: "Социальные взносы и пенсия" },
      {
        type: "p",
        text: "Существенное преимущество для самозанятых — возможность отчислять взносы в Пенсионный фонд. Они уплачивают социальный налог за год, полностью направляемый во внебюджетный Пенсионный фонд. Это позволяет учитывать работу самозанятого при расчёте будущих пенсионных выплат, аналогично индивидуальным предпринимателям. Годовой взнос — не менее 1 БРВ, добровольный, оплачивается до 31 декабря по БРВ, действующей на дату уплаты.",
      },
      { type: "h2", text: "Разрешённые виды деятельности: сокращённый перечень с 1 января 2026 года" },
      {
        type: "p",
        text: "С 1 января 2026 года виды деятельности, доступные самозанятым, определены приложением № 2 к Указу Президента № УП-50 от 19 марта 2025 года. В перечне 72 пункта вместо 104, поэтому часть видов деятельности, доступных самозанятым до 2026 года, в него не вошла. До регистрации проверьте, что ваш вид деятельности есть в действующем перечне; компаниям стоит проверить это до привлечения самозанятого исполнителя. Можно заниматься многим, но одновременно выбирать не более трёх видов деятельности.",
      },
      { type: "h2", text: "Приложение Soliq: ваш центральный инструмент" },
      {
        type: "ul",
        items: [
          "Регистрация и получение QR-кода как подтверждения статуса самозанятого",
          "Приём заказов и обработка платежей",
          "Выставление электронных счетов юридическим лицам",
          "Добровольное прекращение статуса самозанятого в любой момент",
          "Отслеживание доходов и налоговых обязательств в реальном времени",
        ],
      },
      {
        type: "blockquote",
        text: "Самозанятость в Узбекистане остаётся одним из самых доступных налоговых режимов в регионе — с 1 января 2026 года налог с оборота 1% на доход до 1 млрд сумов в год в сочетании с минимальной административной нагрузкой делает её привлекательной отправной точкой для фрилансеров и небольших поставщиков услуг, чей вид деятельности есть в разрешённом перечне.",
      },
    ],
    faq: [
      {
        question: "Как зарегистрироваться в качестве самозанятого в Узбекистане?",
        answer: "Регистрация самозанятого в Узбекистане осуществляется через мобильное приложение Soliq или личный кабинет налогоплательщика — процедура занимает несколько минут, государственная пошлина не взимается, а в подтверждение статуса выдаётся QR-код. Временное трудовое свидетельство не требуется.",
      },
      {
        question: "Какие налоги платят самозанятые в Узбекистане?",
        answer: "С 1 января 2026 года самозанятые в Узбекистане уплачивают налог с оборота по ставке 1% с дохода от реализации товаров и услуг до 1 млрд сумов в год; прежнее освобождение для доходов до 100 млн сумов отменено. При превышении 1 млрд сумов со дня достижения порога применяются НДС и налог на прибыль. Социальный налог уплачивается добровольно. Вести полный бухгалтерский учёт не требуется.",
      },
      {
        question: "Должна ли компания удерживать налог при оплате услуг самозанятого?",
        answer: "Да. С 1 января 2026 года юридическое лицо, которое платит самозанятому за товары или услуги, является налоговым агентом: оно удерживает налог с оборота 1% у источника выплаты на основании уведомления налоговых органов.",
      },
      {
        question: "Какие виды деятельности разрешены самозанятым в Узбекистане?",
        answer: "С 1 января 2026 года разрешены виды деятельности из перечня в приложении № 2 к Указу Президента № УП-50 от 19 марта 2025 года. В нём 72 пункта вместо 104, поэтому перед регистрацией проверьте, что ваш вид деятельности в нём остался. Одновременно можно вести не более трёх видов деятельности.",
      },
      {
        question: "Могут ли самозанятые в Узбекистане формировать пенсию?",
        answer: "Да. Самозанятые могут добровольно уплачивать взносы в государственный Пенсионный фонд: ежегодный социальный налог в размере не менее 1 базовой расчётной величины (БРВ), уплачиваемый до 31 декабря.",
      },
    ],
  },
  uz: {
    subtitle: "Oʻzbekistonda oʻzini-oʻzi band qilishning roʻyxatdan oʻtish, soliq imtiyozlari va huquqiy jihatlarini bilib oling.",
    author: "Advizen soliq amaliyoti",
    readTime: "6 daqiqa oʻqish",
    inShort: {
      figures: [
        { value: "1%", label: "2026-yil 1-yanvardan oʻzini-oʻzi band qiluvchining birinchi soʻmdan yiliga 1 mlrd soʻmgacha boʻlgan daromadiga aylanma soliq" },
        { value: "1 mlrd soʻm", label: "Yillik daromad chegarasi: undan oshganda oʻzini-oʻzi band qiluvchi QQS va foyda soligʻiga oʻtadi" },
        { value: "1 BHM", label: "Pensiya jamgʻarmasiga 31-dekabrgacha toʻlanadigan ixtiyoriy yillik ijtimoiy soliqning eng kam miqdori" },
        { value: "72", label: "2026-yil 1-yanvardan amal qilayotgan roʻyxatdagi ruxsat etilgan faoliyat turlari soni (avval 104 ta edi)" },
      ],
      points: [
        "2020-yil 1-iyuldan boshlab Oʻzbekistonda oʻzini-oʻzi band qiluvchi sifatida roʻyxatga olish Soliq mobil ilovasi yoki soliq toʻlovchining shaxsiy kabineti orqali xabardor qilish tartibida, davlat bojisiz amalga oshiriladi va maqom dalili sifatida QR-kod beriladi.",
        "2026-yil 1-yanvardan 100 mln soʻmgacha boʻlgan daromad uchun avvalgi ozod qilish amal qilmaydi: oʻzini-oʻzi band qiluvchining yiliga 1 mlrd soʻmgacha boʻlgan daromadi 1% aylanma soliqqa tortiladi.",
        "Oʻzini-oʻzi band qiluvchiga haq toʻlaydigan kompaniya soliq organlarining xabarnomasi asosida 1% soliqni toʻlov manbaida ushlab qoladi.",
        "Oʻzini-oʻzi band qiluvchilar toʻliq buxgalteriya hisobini yuritishi shart emas.",
        "2026-yil 1-yanvardan Prezidentning 2025-yil 19-martdagi PF-50-son Farmoni bilan ruxsat etilgan faoliyatlar roʻyxati 104 tadan 72 taga qisqartirildi.",
        "Oʻzini-oʻzi band qiluvchining yillik ijtimoiy soligʻi ixtiyoriy toʻlanadi, toʻliq byudjetdan tashqari Pensiya jamgʻarmasiga yoʻnaltiriladi va kelajakdagi pensiyaga hisoblanadi.",
      ],
    },
    content: [
      {
        type: "p",
        text: "Oʻzini-oʻzi band qilish Oʻzbekistonda tobora ommabop boʻlmoqda va shaxslarga anʼanaviy biznes tashkil etishning murakkabliklarisiz oʻz koʻnikma va isteʼdodlaridan foydalanishning moslashuvchan usulini taklif qiladi. Bu yoʻlga kirmoqchi boʻlganlar uchun tartibga solish muhitini tushunish muhim.",
      },
      { type: "h2", text: "Asosiy afzalliklar va soddalashtirilgan roʻyxatga olish" },
      {
        type: "p",
        text: "Oʻzbekiston oʻzini-oʻzi band qiluvchilar uchun jarayonni sezilarli soddalashtirdi. 2020-yil 1-iyuldan boshlab roʻyxatga olish — maxsus mobil ilova yoki soliq toʻlovchining shaxsiy kabineti orqali oddiy xabardor qilish tartibidir. Bu vaqtinchalik mehnat sertifikatlariga ehtiyojni bartaraf qiladi va roʻyxatga olish dalili sifatida QR-kodni taqdim etadi.",
      },
      {
        type: "ul",
        items: [
          "2026-yil 1-yanvardan tovarlar va xizmatlarni sotishdan olingan yiliga 1 mlrd soʻmgacha boʻlgan daromad 1% aylanma soliqqa tortiladi; 100 mln soʻmgacha boʻlgan daromad uchun avvalgi ozod qilish bekor qilingan",
          "Yillik daromad 1 mlrd soʻmdan oshsa, chegaraga yetgan kundan boshlab QQS va foyda soligʻi qoʻllaniladi, soliqlar (ijtimoiy soliqdan tashqari) yakka tartibdagi tadbirkorlar uchun belgilangan tartibda toʻlanadi",
          "Oʻzini-oʻzi band qiluvchiga haq toʻlaydigan kompaniya soliq organlarining xabarnomasi asosida 1% soliqni toʻlov manbaida ushlab qoladi",
          "Toʻliq buxgalteriya yuritish talab qilinmaydi",
          "Roʻyxatga olish Soliq mobil ilovasi orqali bir necha daqiqada va davlat bojisiz amalga oshiriladi",
        ],
      },
      { type: "h2", text: "Ijtimoiy taʼminot va pensiya badallari" },
      {
        type: "p",
        text: "Oʻzini-oʻzi band qiluvchilar uchun muhim afzallik — pensiya jamgʻarmasiga badal toʻlash imkoniyati. Ular yiliga ijtimoiy soliq toʻlaydilar va u toʻliq byudjetdan tashqari Pensiya jamgʻarmasiga yoʻnaltiriladi. Shu tariqa, yakka tartibdagi tadbirkorlar singari, ularning oʻzini-oʻzi band qiluvchi sifatidagi mehnati kelajakdagi pensiyani hisoblashda inobatga olinadi. Yillik badal kamida 1 bazaviy hisoblash miqdori (BHM)ni tashkil qiladi va ixtiyoriy boʻlib, 31-dekabrgacha toʻlov kunida amal qilayotgan BHM boʻyicha toʻlanadi.",
      },
      { type: "h2", text: "Ruxsat etilgan faoliyat turlari: 2026-yil 1-yanvardan qisqartirilgan roʻyxat" },
      {
        type: "p",
        text: "2026-yil 1-yanvardan oʻzini-oʻzi band qiluvchilar shugʻullanishi mumkin boʻlgan faoliyat turlari Prezidentning 2025-yil 19-martdagi PF-50-son Farmonining 2-ilovasida belgilangan. Roʻyxatda 104 ta oʻrniga 72 ta band bor, shuning uchun 2026-yilgacha oʻzini-oʻzi band qiluvchilarga ochiq boʻlgan ayrim faoliyat turlari unga kirmagan. Roʻyxatdan oʻtishdan oldin faoliyatingiz amaldagi roʻyxatda borligini tekshiring; kompaniyalar buni oʻzini-oʻzi band qiluvchi ijrochini jalb qilishdan oldin tekshirishi kerak. Bir nechta faoliyat bilan shugʻullansangiz ham, bir vaqtning oʻzida uchtadan ortiq faoliyat turini tanlay olmaysiz.",
      },
      { type: "h2", text: "Soliq ilovasi: barcha amallar bir joyda" },
      {
        type: "ul",
        items: [
          "Roʻyxatdan oʻtish va oʻzini-oʻzi band qilish maqomi dalili sifatida QR-kod olish",
          "Buyurtma va toʻlovlarni qabul qilish",
          "Yuridik shaxslarga elektron hisob-fakturalar berish",
          "Istalgan vaqtda oʻzini-oʻzi band qilish maqomini ixtiyoriy ravishda tugatish",
          "Daromad va soliq majburiyatlarini real vaqtda kuzatish",
        ],
      },
      {
        type: "blockquote",
        text: "Oʻzbekistonda oʻzini-oʻzi band qilish mintaqadagi eng qulay soliq rejimlaridan biri boʻlib qolmoqda — 2026-yil 1-yanvardan yiliga 1 mlrd soʻmgacha boʻlgan daromadga 1% aylanma soliq va minimal maʼmuriy yuk bilan birgalikda u faoliyati ruxsat etilgan roʻyxatda boʻlgan frilanserlar va kichik xizmat koʻrsatuvchilar uchun jozibali boshlanish nuqtasiga aylanadi.",
      },
    ],
    faq: [
      {
        question: "Oʻzbekistonda oʻzini-oʻzi band qiluvchi sifatida qanday roʻyxatdan oʻtish mumkin?",
        answer: "Oʻzbekistonda oʻzini-oʻzi band qiluvchi sifatida roʻyxatdan oʻtish Soliq mobil ilovasi yoki soliq toʻlovchining shaxsiy kabineti orqali amalga oshiriladi — bu bir necha daqiqa vaqt oladi, davlat boji toʻlanmaydi va maqom dalili sifatida QR-kod beriladi. Vaqtinchalik mehnat sertifikati talab qilinmaydi.",
      },
      {
        question: "Oʻzbekistonda oʻzini-oʻzi band qiluvchilar qanday soliqlar toʻlaydi?",
        answer: "2026-yil 1-yanvardan Oʻzbekistonda oʻzini-oʻzi band qiluvchilar tovarlar va xizmatlarni sotishdan olingan yiliga 1 mlrd soʻmgacha boʻlgan daromaddan 1% aylanma soliq toʻlaydi; 100 mln soʻmgacha boʻlgan daromad uchun avvalgi ozod qilish bekor qilingan. Daromad 1 mlrd soʻmdan oshsa, chegaraga yetgan kundan boshlab QQS va foyda soligʻi qoʻllaniladi. Ijtimoiy soliq ixtiyoriy toʻlanadi. Toʻliq buxgalteriya hisobi yuritish shart emas.",
      },
      {
        question: "Kompaniya oʻzini-oʻzi band qiluvchiga haq toʻlaganda soliqni ushlab qolishi shartmi?",
        answer: "Ha. 2026-yil 1-yanvardan oʻzini-oʻzi band qiluvchiga tovarlar yoki xizmatlar uchun haq toʻlaydigan yuridik shaxs soliq agenti hisoblanadi: u soliq organlarining xabarnomasi asosida 1% aylanma soliqni toʻlov manbaida ushlab qoladi.",
      },
      {
        question: "Oʻzbekistonda oʻzini-oʻzi band qilish maqomi uchun qanday faoliyat turlari ruxsat etilgan?",
        answer: "2026-yil 1-yanvardan Prezidentning 2025-yil 19-martdagi PF-50-son Farmonining 2-ilovasidagi roʻyxatga kiritilgan faoliyat turlari ruxsat etilgan. Unda 104 ta oʻrniga 72 ta band bor, shuning uchun roʻyxatdan oʻtishdan oldin faoliyatingiz unda qolganini tekshiring. Bir vaqtning oʻzida uchta faoliyatgacha roʻyxatdan oʻtish mumkin.",
      },
      {
        question: "Oʻzbekistondagi oʻzini-oʻzi band qiluvchilar pensiyaga badallar toʻlashi mumkinmi?",
        answer: "Ha. Oʻzini-oʻzi band qiluvchilar kamida 1 bazaviy hisoblash miqdori (BHM) miqdorida yillik ijtimoiy soliqni har yil 31-dekabrgacha toʻlab, davlat Pensiya jamgʻarmasiga ixtiyoriy ravishda badal qoʻshishlari mumkin.",
      },
    ],
  },
};

export default article;
