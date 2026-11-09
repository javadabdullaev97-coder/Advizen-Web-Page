import type { LocalizedArticle } from "../publications";

const article: Record<string, LocalizedArticle> = {
  en: {
    subtitle: "A practical guide for employers operating in Uzbekistan",
    author: "Advizen HR Practice",
    readTime: "8 min read",
    inShort: {
      figures: [
        { value: "12%", label: "Flat personal income tax on all employment income, withheld by the employer" },
        { value: "12%", label: "Standard unified social payment on gross payroll, paid by the employer on top of salary" },
        { value: "0.1%", label: "Employee contribution to the individual accumulative pension account, included in the PIT calculation" },
        { value: "10th", label: "Day of the following month by which the monthly PIT withholding report is due" },
      ],
      points: [
        "Since January 2023, Uzbekistan applies a flat 12% personal income tax to all employment income, and the same rate applies to non-resident employees.",
        "The unified social payment is an employer cost, not a deduction from the employee's salary, and is paid monthly alongside the PIT remittance.",
        "Late payment of the unified social payment attracts penalties at the Central Bank refinancing rate, and failure to file monthly reports attracts administrative fines.",
        "In-kind benefits such as housing, transport and meals are taxable at market value, and bonuses and one-time payments are taxed at the standard 12% rate.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Uzbekistan's payroll framework has undergone significant reform in recent years, with the government simplifying rates, consolidating social contributions, and introducing digital reporting obligations. For foreign companies employing staff locally — whether through a subsidiary, representative office, or Employer of Record arrangement — understanding these obligations is essential to compliant operations.",
      },
      { type: "h2" as const, text: "Personal income tax" },
      {
        type: "p" as const,
        text: "Since January 2023, Uzbekistan applies a flat personal income tax (PIT) rate of 12% on all employment income. The tax is withheld at source by the employer and remitted monthly to the State Tax Committee.",
      },
      {
        type: "ul" as const,
        items: [
          "Flat rate: 12% on gross salary",
          "Withholding: employer obligation, remitted monthly",
          "Non-residents: 12% rate applies equally; no additional surcharge",
          "Dividend income: taxed separately at 5%",
        ],
      },
      { type: "h2" as const, text: "Unified social payment (USP)" },
      {
        type: "blockquote" as const,
        text: "The USP is an employer-borne cost, not deducted from the employee's salary. It is calculated on top of gross compensation.",
      },
      {
        type: "ul" as const,
        items: [
          "Standard rate: 12% of gross payroll (employer cost)",
          "Budget organisations and certain SMEs: reduced rates may apply",
          "Paid monthly alongside PIT remittance",
          "Late payment attracts penalties at the Central Bank refinancing rate",
        ],
      },
      { type: "h2" as const, text: "Individual accumulative pension contribution" },
      {
        type: "p" as const,
        text: "Employees contribute 0.1% of their gross salary to an individual accumulative pension account. This deduction is included within the PIT calculation and withheld by the employer as part of the overall income tax remittance.",
      },
      { type: "h2" as const, text: "Reporting obligations" },
      {
        type: "ul" as const,
        items: [
          "Monthly PIT withholding report — due by the 10th of the following month",
          "Monthly USP declaration — submitted alongside PIT report",
          "Annual payroll reconciliation — due by 1 February",
          "Employee income certificates — issued upon request or termination",
        ],
      },
      { type: "h2" as const, text: "Common compliance risks" },
      {
        type: "ul" as const,
        items: [
          "Contractor misclassification — individuals performing employee functions must be on payroll",
          "In-kind benefits (housing, transport, meals) are taxable at market value",
          "Bonuses and one-time payments are subject to PIT at the standard 12% rate",
          "Failure to file monthly reports attracts administrative fines",
        ],
      },
      { type: "divider" as const },
      { type: "h2" as const, text: "Summary of key rates (2024)" },
      {
        type: "ul" as const,
        items: [
          "Personal Income Tax: 12% (flat, withheld by employer)",
          "Unified Social Payment: 12% (employer cost, on gross payroll)",
          "Accumulative Pension: 0.1% (included in PIT)",
          "Employer's own cost: 12% USP on top of gross salary; the 12% PIT is withheld from the employee's salary",
        ],
      },
    ],
    faq: [
      {
        question: "What is the personal income tax (PIT) rate on employment income in Uzbekistan?",
        answer: "Since January 2023, Uzbekistan applies a flat 12% PIT rate on all employment income. The tax is withheld at source by the employer and remitted monthly to the State Tax Committee. The same rate applies equally to non-resident employees — there is no additional surcharge.",
      },
      {
        question: "What is the Unified Social Payment (USP) rate in Uzbekistan?",
        answer: "The USP is charged at 12% of gross payroll and is an employer cost — it is not deducted from the employee's salary. It is paid monthly alongside the PIT remittance. Late payment attracts penalties at the Central Bank refinancing rate.",
      },
      {
        question: "What does payroll cost the employer in Uzbekistan?",
        answer: "The employer's own cost is the 12% Unified Social Payment (USP), calculated on top of gross payroll and not deducted from the employee's salary. Personal income tax at 12% is withheld from the employee's salary and remitted by the employer, so it is not an employer cost. The employee's 0.1% contribution to an individual accumulative pension account is taken from within that PIT.",
      },
      {
        question: "What are the payroll reporting deadlines for employers in Uzbekistan?",
        answer: "Employers must file a monthly PIT withholding report by the 10th of the following month, submit the USP declaration at the same time, and complete an annual payroll reconciliation by 1 February. Employee income certificates must be issued upon request or at termination.",
      },
    ],
  },
  ru: {
    subtitle: "Практическое руководство для работодателей, осуществляющих деятельность в Узбекистане",
    author: "Advizen HR Practice",
    readTime: "8 мин чтения",
    inShort: {
      figures: [
        { value: "12%", label: "Единая ставка НДФЛ на все трудовые доходы, удерживается работодателем" },
        { value: "12%", label: "Стандартная ставка единого социального платежа от фонда оплаты труда, расход работодателя сверх зарплаты" },
        { value: "0,1%", label: "Взнос работника на индивидуальный накопительный пенсионный счёт, включается в расчёт НДФЛ" },
        { value: "10-е число", label: "Следующего месяца — срок ежемесячного отчёта об удержании НДФЛ" },
      ],
      points: [
        "С января 2023 года в Узбекистане действует единая ставка НДФЛ 12% на все трудовые доходы; та же ставка применяется к сотрудникам-нерезидентам.",
        "Единый социальный платёж — расход работодателя, он не удерживается из зарплаты сотрудника и уплачивается ежемесячно вместе с НДФЛ.",
        "Просрочка ЕСП влечёт пени по ставке рефинансирования Центрального банка, а непредставление ежемесячных отчётов — административные штрафы.",
        "Неденежные льготы (жильё, транспорт, питание) облагаются по рыночной стоимости, а премии и единовременные выплаты — НДФЛ по стандартной ставке 12%.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Система расчёта заработной платы в Узбекистане претерпела существенные реформы в последние годы: правительство упростило ставки, консолидировало социальные взносы и ввело цифровые обязательства по отчётности. Для иностранных компаний, нанимающих местных сотрудников — будь то через дочернюю структуру, представительство или схему Employer of Record — понимание этих обязательств является обязательным условием ведения законной деятельности.",
      },
      { type: "h2" as const, text: "Налог на доходы физических лиц" },
      {
        type: "p" as const,
        text: "С января 2023 года в Узбекистане применяется единая ставка налога на доходы физических лиц (НДФЛ) в размере 12% на все доходы от трудовой деятельности. Налог удерживается у источника выплаты работодателем и ежемесячно перечисляется в Государственный налоговый комитет.",
      },
      {
        type: "ul" as const,
        items: [
          "Единая ставка: 12% от валовой заработной платы",
          "Удержание: обязанность работодателя, перечисляется ежемесячно",
          "Нерезиденты: ставка 12% применяется в равной мере; дополнительная надбавка не предусмотрена",
          "Дивидендный доход: облагается отдельно по ставке 5%",
        ],
      },
      { type: "h2" as const, text: "Единый социальный платёж (ЕСП)" },
      {
        type: "blockquote" as const,
        text: "ЕСП является расходом работодателя и не вычитается из заработной платы сотрудника. Он рассчитывается сверх совокупного вознаграждения.",
      },
      {
        type: "ul" as const,
        items: [
          "Стандартная ставка: 12% от фонда оплаты труда (расход работодателя)",
          "Бюджетные организации и отдельные МСП: возможно применение пониженных ставок",
          "Уплачивается ежемесячно одновременно с перечислением НДФЛ",
          "Просрочка оплаты влечёт начисление пеней по ставке рефинансирования Центрального банка",
        ],
      },
      { type: "h2" as const, text: "Индивидуальный накопительный пенсионный взнос" },
      {
        type: "p" as const,
        text: "Работники вносят 0,1% от валовой заработной платы на индивидуальный накопительный пенсионный счёт. Этот вычет включается в расчёт НДФЛ и удерживается работодателем в составе общего перечисления подоходного налога.",
      },
      { type: "h2" as const, text: "Обязательства по отчётности" },
      {
        type: "ul" as const,
        items: [
          "Ежемесячный отчёт об удержании НДФЛ — представляется до 10-го числа следующего месяца",
          "Ежемесячная декларация по ЕСП — представляется одновременно с отчётом по НДФЛ",
          "Годовая сверка по заработной плате — представляется до 1 февраля",
          "Справки о доходах сотрудников — выдаются по запросу или при увольнении",
        ],
      },
      { type: "h2" as const, text: "Распространённые риски несоблюдения требований" },
      {
        type: "ul" as const,
        items: [
          "Неправильная классификация подрядчиков — физические лица, выполняющие функции сотрудников, должны быть включены в штат",
          "Неденежные льготы (жильё, транспорт, питание) облагаются налогом по рыночной стоимости",
          "Премии и единовременные выплаты облагаются НДФЛ по стандартной ставке 12%",
          "Непредставление ежемесячных отчётов влечёт административные штрафы",
        ],
      },
      { type: "divider" as const },
      { type: "h2" as const, text: "Ключевые ставки (2024)" },
      {
        type: "ul" as const,
        items: [
          "НДФЛ: 12% (единая ставка, удерживается работодателем)",
          "Единый социальный платёж: 12% (расход работодателя, от фонда оплаты труда)",
          "Накопительный пенсионный взнос: 0,1% (включён в НДФЛ)",
          "Собственный расход работодателя: 12% ЕСП сверх валовой заработной платы; НДФЛ 12% удерживается из заработной платы сотрудника",
        ],
      },
    ],
    faq: [
      {
        question: "Какова ставка НДФЛ на трудовые доходы в Узбекистане?",
        answer: "С января 2023 года в Узбекистане действует единая ставка НДФЛ 12% на все трудовые доходы. Налог удерживается у источника работодателем и ежемесячно перечисляется в Государственный налоговый комитет. Та же ставка применяется к сотрудникам-нерезидентам — дополнительная надбавка не предусмотрена.",
      },
      {
        question: "Какова ставка единого социального платежа (ЕСП) в Узбекистане?",
        answer: "ЕСП взимается по ставке 12% от фонда оплаты труда и является расходом работодателя — он не вычитается из заработной платы сотрудника. Платёж осуществляется ежемесячно одновременно с перечислением НДФЛ. Просрочка влечёт начисление пеней по ставке рефинансирования Центрального банка.",
      },
      {
        question: "Во что обходится заработная плата работодателю в Узбекистане?",
        answer: "Собственный расход работодателя — единый социальный платёж (ЕСП) в размере 12%, который начисляется сверх фонда оплаты труда и не вычитается из заработной платы сотрудника. НДФЛ по ставке 12% удерживается из заработной платы сотрудника и перечисляется работодателем, поэтому не является расходом работодателя. Взнос сотрудника 0,1% на индивидуальный накопительный пенсионный счёт берётся в составе этого НДФЛ.",
      },
      {
        question: "Каковы сроки отчётности по заработной плате для работодателей в Узбекистане?",
        answer: "Работодатели обязаны ежемесячно представлять отчёт об удержании НДФЛ до 10-го числа следующего месяца, одновременно подавать декларацию по ЕСП и проводить годовую сверку по заработной плате до 1 февраля. Справки о доходах сотрудникам выдаются по запросу или при увольнении.",
      },
    ],
  },
  uz: {
    subtitle: "Oʻzbekistonda faoliyat yurituvchi ish beruvchilar uchun amaliy qoʻllanma",
    author: "Advizen HR Practice",
    readTime: "8 daqiqa oʻqish",
    inShort: {
      figures: [
        { value: "12%", label: "Barcha mehnat daromadlariga yagona jismoniy shaxslardan daromad soligʻi stavkasi, ish beruvchi ushlab qoladi" },
        { value: "12%", label: "Yalpi ish haqi fondidan yagona ijtimoiy toʻlovning standart stavkasi, ish haqiga qoʻshimcha ish beruvchi xarajati" },
        { value: "0,1%", label: "Xodimning individual jamgʻarma pensiya hisobiga badali, JSDS hisobiga kiritiladi" },
        { value: "10-sana", label: "Keyingi oyning — JSDS ushlab qolish boʻyicha oylik hisobot muddati" },
      ],
      points: [
        "2023-yil yanvardan Oʻzbekiston barcha mehnat daromadlariga 12% yagona JSDS stavkasini qoʻllaydi; norezident xodimlarga ham shu stavka qoʻllaniladi.",
        "Yagona ijtimoiy toʻlov ish beruvchining xarajati boʻlib, xodimning ish haqidan ushlab qolinmaydi va har oy JSDS bilan birga toʻlanadi.",
        "YITni kech toʻlash Markaziy bank qayta moliyalash stavkasida penya hisoblanishiga, oylik hisobotlarni topshirmaslik esa maʼmuriy jarimaga olib keladi.",
        "Natura shaklidagi imtiyozlar (uy-joy, transport, ovqat) bozor qiymati boʻyicha, mukofotlar va bir martalik toʻlovlar esa standart 12% stavkada JSDSga tortiladi.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Oʻzbekistonda ish haqi hisoblash tizimi soʻnggi yillarda muhim islohotlarga uchradi: hukumat stavkalarni soddalashtirib, ijtimoiy toʻlovlarni birlashtirdi va raqamli hisobot majburiyatlarini joriy etdi. Mahalliy xodimlarni yollovchi xorijiy kompaniyalar uchun — shoʻba korxona, vakolatxona yoki Employer of Record sxemasi orqali boʻlishidan qatʼi nazar — bu majburiyatlarni tushunish qonuniy faoliyat yuritishning zaruriy shartidir.",
      },
      { type: "h2" as const, text: "Jismoniy shaxslardan daromad soligʻi" },
      {
        type: "p" as const,
        text: "2023 yil yanvardan Oʻzbekiston barcha mehnat daromadlariga 12% miqdorida yagona jismoniy shaxslardan daromad soligʻi (JSDS) stavkasini qoʻllaydi. Soliq ish beruvchi tomonidan manba boʻyicha ushlab qolinadi va har oy Davlat soliq qoʻmitasiga oʻtkaziladi.",
      },
      {
        type: "ul" as const,
        items: [
          "Yagona stavka: yalpi ish haqining 12%",
          "Ushlab qolish: ish beruvchining majburiyati, har oy oʻtkaziladi",
          "Norezidentlar: 12% stavka bir xil tarzda qoʻllaniladi; qoʻshimcha ustama yoʻq",
          "Dividend daromadi: 5% stavkada alohida soliqqa tortiladi",
        ],
      },
      { type: "h2" as const, text: "Yagona ijtimoiy toʻlov (YIT)" },
      {
        type: "blockquote" as const,
        text: "YIT ish beruvchining xarajati boʻlib, xodimning ish haqidan ushlab qolinmaydi. U yalpi ish haqiga qoʻshimcha ravishda hisoblanadi.",
      },
      {
        type: "ul" as const,
        items: [
          "Standart stavka: yalpi ish haqi fondining 12% (ish beruvchi xarajati)",
          "Byudjet tashkilotlari va baʼzi kichik biznes subʼektlari: pasaytirilgan stavkalar qoʻllanilishi mumkin",
          "JSDS oʻtkazilishi bilan bir vaqtda har oy toʻlanadi",
          "Kech toʻlash Markaziy bank qayta moliyalash stavkasida penya hisoblashga olib keladi",
        ],
      },
      { type: "h2" as const, text: "Individual jamgʻarma pensiya badali" },
      {
        type: "p" as const,
        text: "Xodimlar oʻzlarining yalpi ish haqining 0,1% ini individual jamgʻarma pensiya hisobiga oʻtkazadilar. Bu chegirma JSDS hisobiga kiritiladi va ish beruvchi tomonidan umumiy daromad soligʻi oʻtkazmasi doirasida ushlab qolinadi.",
      },
      { type: "h2" as const, text: "Hisobot majburiyatlari" },
      {
        type: "ul" as const,
        items: [
          "JSDS ushlab qolish boʻyicha oylik hisobot — keyingi oyning 10-sanasigacha topshiriladi",
          "YIT boʻyicha oylik deklaratsiya — JSDS hisoboti bilan birga topshiriladi",
          "Yillik ish haqi boʻyicha saldo — 1 fevralga qadar topshiriladi",
          "Xodimlar daromadi haqidagi maʼlumotnomalar — soʻrov yoki ishdan boʻshatish boʻyicha beriladi",
        ],
      },
      { type: "h2" as const, text: "Keng tarqalgan muvofiqlik risklari" },
      {
        type: "ul" as const,
        items: [
          "Pudratchilarni notoʻgʻri tasniflash — xodim vazifalarini bajaradigan jismoniy shaxslar shtatga kiritilishi shart",
          "Natura shaklida berilgan imtiyozlar (uy-joy, transport, ovqat) bozor qiymati boʻyicha soliqqa tortiladi",
          "Mukofotlar va bir martalik toʻlovlar standart 12% stavkada JSDS ga tortiladi",
          "Oylik hisobotlarni topshirmaslik maʼmuriy jarimaga olib keladi",
        ],
      },
      { type: "divider" as const },
      { type: "h2" as const, text: "Asosiy stavkalar xulosasi (2024)" },
      {
        type: "ul" as const,
        items: [
          "Jismoniy shaxslardan daromad soligʻi: 12% (yagona stavka, ish beruvchi ushlab qoladi)",
          "Yagona ijtimoiy toʻlov: 12% (ish beruvchi xarajati, yalpi ish haqi fondidan)",
          "Jamgʻarma pensiya badali: 0,1% (JSDS ga kiritilgan)",
          "Ish beruvchining oʻz xarajati: yalpi ish haqiga qoʻshimcha 12% YIT; 12% JSDS xodimning ish haqidan ushlab qolinadi",
        ],
      },
    ],
    faq: [
      {
        question: "Oʻzbekistonda mehnat daromadlariga jismoniy shaxslardan daromad soligʻi (JSDS) stavkasi qancha?",
        answer: "2023 yil yanvardan Oʻzbekiston barcha mehnat daromadlariga 12% miqdorida yagona JSDS stavkasini qoʻllaydi. Soliq ish beruvchi tomonidan manba boʻyicha ushlab qolinadi va har oy Davlat soliq qoʻmitasiga oʻtkaziladi. Norezident xodimlarga ham xuddi shu stavka qoʻllaniladi — qoʻshimcha ustama yoʻq.",
      },
      {
        question: "Oʻzbekistonda yagona ijtimoiy toʻlov (YIT) stavkasi qancha?",
        answer: "YIT yalpi ish haqi fondining 12% miqdorida undiriladi va ish beruvchi xarajati hisoblanadi — u xodimning ish haqidan ushlab qolinmaydi. Toʻlov har oy JSDS oʻtkazmasi bilan bir vaqtda amalga oshiriladi. Kech toʻlash Markaziy bank qayta moliyalash stavkasida penya hisoblashga olib keladi.",
      },
      {
        question: "Oʻzbekistonda ish haqi ish beruvchiga qanchaga tushadi?",
        answer: "Ish beruvchining oʻz xarajati — 12% miqdoridagi yagona ijtimoiy toʻlov (YIT) boʻlib, u yalpi ish haqi fondiga qoʻshimcha hisoblanadi va xodimning ish haqidan ushlab qolinmaydi. 12% stavkadagi JSDS xodimning ish haqidan ushlab qolinadi va ish beruvchi tomonidan oʻtkaziladi, shuning uchun u ish beruvchining xarajati hisoblanmaydi. Xodimning individual jamgʻarma pensiya hisobiga 0,1% badali shu JSDS tarkibidan olinadi.",
      },
      {
        question: "Oʻzbekistonda ish beruvchilar uchun ish haqi hisobot muddatlari qanday?",
        answer: "Ish beruvchilar keyingi oyning 10-sanasiga qadar oylik JSDS ushlab qolish hisobotini topshirishlari, bir vaqtda YIT deklaratsiyasini berishlari va 1 fevralga qadar yillik ish haqi saldosini oʻtkazishlari shart. Xodimlar daromad maʼlumotnomasi soʻrov yoki ishdan boʻshatish boʻyicha beriladi.",
      },
    ],
  },
};

export default article;
