import type { LocalizedArticle } from "../publications";

const article: Record<string, LocalizedArticle> = {
  en: {
    subtitle: "A practical guide for employers operating in Uzbekistan",
    author: "Advizen HR Practice",
    readTime: "8 min read",
    inShort: {
      figures: [
        {
          value: "12%",
          label: "Flat personal income tax on all employment income, withheld by the employer",
        },
        {
          value: "12%",
          label: "Standard unified social payment on gross payroll, paid by the employer on top of salary",
        },
        {
          value: "0.1%",
          label: "Employee contribution to the individual accumulative pension account, included in the PIT calculation",
        },
        {
          value: "10th",
          label: "Day of the following month by which the monthly PIT withholding report is due",
        },
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
        type: "p",
        text: "Uzbekistan's payroll framework has undergone significant reform in recent years, with the government simplifying rates, consolidating social contributions, and introducing digital reporting obligations. For foreign companies employing staff locally — whether through a subsidiary, representative office, or Employer of Record arrangement — understanding these obligations is essential to compliant operations.",
      },
      { type: "h2", text: "Personal income tax" },
      {
        type: "p",
        text: "Since January 2023, Uzbekistan applies a flat personal income tax (PIT) rate of 12% on all employment income. The tax is withheld at source by the employer and remitted monthly to the State Tax Committee.",
      },
      {
        type: "ul",
        items: [
          "Flat rate: 12% on gross salary",
          "Withholding: employer obligation, remitted monthly",
          "Non-residents: 12% rate applies equally; no additional surcharge",
          "Dividend income: taxed separately at 5%",
        ],
      },
      { type: "h2", text: "Unified social payment (USP)" },
      {
        type: "blockquote",
        text: "The USP is an employer-borne cost, not deducted from the employee's salary. It is calculated on top of gross compensation.",
      },
      {
        type: "ul",
        items: [
          "Standard rate: 12% of gross payroll (employer cost)",
          "Budget organisations and certain SMEs: reduced rates may apply",
          "Paid monthly alongside PIT remittance",
          "Late payment attracts penalties at the Central Bank refinancing rate",
        ],
      },
      { type: "h2", text: "Individual accumulative pension contribution" },
      {
        type: "p",
        text: "Employees contribute 0.1% of their gross salary to an individual accumulative pension account. This deduction is included within the PIT calculation and withheld by the employer as part of the overall income tax remittance.",
      },
      { type: "h2", text: "Reporting obligations" },
      {
        type: "deadlines",
        items: [
          {
            when: "10th",
            whenNote: "of the next month",
            what: "PIT withholding report and USP declaration",
            freq: "Monthly",
          },
          { when: "1 Feb", whenNote: "each year", what: "Annual payroll reconciliation", freq: "Annual" },
          {
            when: "On request",
            what: "Employee income certificates, also on termination",
            freq: "As needed",
          },
        ],
      },
      { type: "h2", text: "Common compliance risks" },
      {
        type: "risks",
        items: [
          "Contractor misclassification. Individuals performing employee functions must be on payroll.",
          "In-kind benefits. Housing, transport and meals are taxable at market value.",
          "Bonuses and one-time payments. Subject to PIT at the standard 12% rate.",
          "Missed monthly reports. Failure to file attracts administrative fines.",
        ],
      },
      { type: "divider" },
      { type: "h2", text: "Summary of key rates (2024)" },
      {
        type: "ul",
        items: [
          "Personal Income Tax: 12% (flat, withheld by employer)",
          "Unified Social Payment: 12% (employer cost, on gross payroll)",
          "Accumulative Pension: 0.1% (included in PIT)",
          "Employer's own cost: 12% USP on top of gross salary; the 12% PIT is withheld from the employee's salary",
        ],
      },
      { type: "p", text: "For a gross monthly salary of 10,000,000 UZS:" },
      {
        type: "example",
        title: "Worked example",
        meta: "Gross salary 10,000,000 UZS",
        split: [
          { label: "Employee receives", value: 8.8, tone: "light" },
          { label: "PIT withheld", value: 1.2, tone: "red" },
          { label: "USP paid by the employer", value: 1.2, tone: "dark" },
        ],
        rows: [
          { label: "Gross salary", value: "10,000,000" },
          {
            label: "Personal income tax, 12%",
            note: "Withheld from the salary. Includes the 0.1% pension contribution, 10,000",
            value: "− 1,200,000",
            kind: "minus",
          },
          { label: "Employee receives", value: "8,800,000" },
          {
            label: "Unified social payment, 12%",
            note: "Employer cost on top of gross salary",
            value: "+ 1,200,000",
          },
          { label: "Total cost to the employer", value: "11,200,000", kind: "sum" },
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
    author: "HR-практика Advizen",
    readTime: "8 мин чтения",
    inShort: {
      figures: [
        { value: "12%", label: "Единая ставка НДФЛ на все трудовые доходы, удерживается работодателем" },
        {
          value: "12%",
          label: "Стандартная ставка единого социального платежа от фонда оплаты труда, расход работодателя сверх зарплаты",
        },
        {
          value: "0,1%",
          label: "Взнос работника на индивидуальный накопительный пенсионный счёт, включается в расчёт НДФЛ",
        },
        {
          value: "10-е число",
          label: "Число следующего месяца — срок ежемесячного отчёта об удержании НДФЛ",
        },
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
        type: "p",
        text: "Система расчёта заработной платы в Узбекистане претерпела существенные реформы в последние годы: правительство упростило ставки, консолидировало социальные взносы и ввело цифровые обязательства по отчётности. Для иностранных компаний, нанимающих местных сотрудников — будь то через дочернюю структуру, представительство или модель Employer of Record — понимание этих обязательств является обязательным условием ведения законной деятельности.",
      },
      { type: "h2", text: "Налог на доходы физических лиц" },
      {
        type: "p",
        text: "С января 2023 года в Узбекистане применяется единая ставка налога на доходы физических лиц (НДФЛ) в размере 12% на все доходы от трудовой деятельности. Налог удерживается у источника выплаты работодателем и ежемесячно перечисляется в Государственный налоговый комитет.",
      },
      {
        type: "ul",
        items: [
          "Единая ставка: 12% от валовой заработной платы",
          "Удержание: обязанность работодателя, перечисляется ежемесячно",
          "Нерезиденты: ставка 12% применяется в равной мере; дополнительная надбавка не предусмотрена",
          "Дивидендный доход: облагается отдельно по ставке 5%",
        ],
      },
      { type: "h2", text: "Единый социальный платёж (ЕСП)" },
      {
        type: "blockquote",
        text: "ЕСП является расходом работодателя и не вычитается из заработной платы сотрудника. Он рассчитывается сверх совокупного вознаграждения.",
      },
      {
        type: "ul",
        items: [
          "Стандартная ставка: 12% от фонда оплаты труда (расход работодателя)",
          "Бюджетные организации и отдельные МСП: возможно применение пониженных ставок",
          "Уплачивается ежемесячно одновременно с перечислением НДФЛ",
          "Просрочка оплаты влечёт начисление пеней по ставке рефинансирования Центрального банка",
        ],
      },
      { type: "h2", text: "Индивидуальный накопительный пенсионный взнос" },
      {
        type: "p",
        text: "Работники вносят 0,1% от валовой заработной платы на индивидуальный накопительный пенсионный счёт. Этот взнос включается в расчёт НДФЛ и удерживается работодателем в составе общего перечисления подоходного налога.",
      },
      { type: "h2", text: "Обязательства по отчётности" },
      {
        type: "deadlines",
        items: [
          {
            when: "10-е",
            whenNote: "число следующего месяца",
            what: "Отчёт об удержании НДФЛ и декларация по ЕСП",
            freq: "Ежемесячно",
          },
          {
            when: "1 февраля",
            whenNote: "каждого года",
            what: "Годовая сверка по заработной плате",
            freq: "Ежегодно",
          },
          {
            when: "По запросу",
            what: "Справки о доходах сотрудников, а также при увольнении",
            freq: "По необходимости",
          },
        ],
      },
      { type: "h2", text: "Распространённые риски несоблюдения требований" },
      {
        type: "risks",
        items: [
          "Неправильная классификация подрядчиков. Физические лица, выполняющие функции сотрудников, должны быть включены в штат.",
          "Неденежные льготы. Жильё, транспорт и питание облагаются налогом по рыночной стоимости.",
          "Премии и единовременные выплаты. Облагаются НДФЛ по стандартной ставке 12%.",
          "Пропущенные ежемесячные отчёты. Непредставление отчётов влечёт административные штрафы.",
        ],
      },
      { type: "divider" },
      { type: "h2", text: "Ключевые ставки (2024)" },
      {
        type: "ul",
        items: [
          "НДФЛ: 12% (единая ставка, удерживается работодателем)",
          "Единый социальный платёж: 12% (расход работодателя, от фонда оплаты труда)",
          "Накопительный пенсионный взнос: 0,1% (включён в НДФЛ)",
          "Собственный расход работодателя: 12% ЕСП сверх валовой заработной платы; НДФЛ 12% удерживается из заработной платы сотрудника",
        ],
      },
      { type: "p", text: "Для начисленной месячной зарплаты 10 000 000 сумов:" },
      {
        type: "example",
        title: "Расчёт на примере",
        meta: "Начисленная зарплата 10 000 000 сумов",
        split: [
          { label: "Сотрудник получает", value: 8.8, tone: "light" },
          { label: "Удержанный НДФЛ", value: 1.2, tone: "red" },
          { label: "ЕСП за счёт работодателя", value: 1.2, tone: "dark" },
        ],
        rows: [
          { label: "Начисленная зарплата", value: "10 000 000" },
          {
            label: "НДФЛ, 12%",
            note: "Удерживается из зарплаты. Включает пенсионный взнос 0,1%, то есть 10 000",
            value: "− 1 200 000",
            kind: "minus",
          },
          { label: "Сотрудник получает", value: "8 800 000" },
          {
            label: "Единый социальный платёж, 12%",
            note: "Расход работодателя сверх начисленной зарплаты",
            value: "+ 1 200 000",
          },
          { label: "Всего расходы работодателя", value: "11 200 000", kind: "sum" },
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
    author: "Advizen HR amaliyoti",
    readTime: "8 daqiqa oʻqish",
    inShort: {
      figures: [
        {
          value: "12%",
          label: "Barcha mehnat daromadlariga yagona JShDS stavkasi, ish beruvchi ushlab qoladi",
        },
        {
          value: "12%",
          label: "Yalpi ish haqi fondidan yagona ijtimoiy toʻlovning standart stavkasi, ish haqiga qoʻshimcha ish beruvchi xarajati",
        },
        {
          value: "0,1%",
          label: "Xodimning individual jamgʻarma pensiya hisobiga badali, JShDS hisobiga kiritiladi",
        },
        {
          value: "10-sana",
          label: "Keyingi oyning shu sanasi — JShDS ushlab qolish boʻyicha oylik hisobot muddati",
        },
      ],
      points: [
        "2023-yil yanvardan Oʻzbekiston barcha mehnat daromadlariga 12% yagona JShDS stavkasini qoʻllaydi; norezident xodimlarga ham shu stavka qoʻllaniladi.",
        "Yagona ijtimoiy toʻlov ish beruvchining xarajati boʻlib, xodimning ish haqidan ushlab qolinmaydi va har oy JShDS bilan birga toʻlanadi.",
        "YITni kech toʻlash Markaziy bank qayta moliyalash stavkasida penya hisoblanishiga, oylik hisobotlarni topshirmaslik esa maʼmuriy jarimaga olib keladi.",
        "Natura shaklidagi imtiyozlar (uy-joy, transport, ovqat) bozor qiymati boʻyicha, mukofotlar va bir martalik toʻlovlar esa standart 12% stavkada JShDSga tortiladi.",
      ],
    },
    content: [
      {
        type: "p",
        text: "Oʻzbekistonda ish haqi hisoblash tizimi soʻnggi yillarda muhim islohotlarga uchradi: hukumat stavkalarni soddalashtirib, ijtimoiy toʻlovlarni birlashtirdi va raqamli hisobot majburiyatlarini joriy etdi. Mahalliy xodimlarni yollovchi xorijiy kompaniyalar uchun — shoʻba korxona, vakolatxona yoki Employer of Record modeli orqali boʻlishidan qatʼi nazar — bu majburiyatlarni tushunish qonuniy faoliyat yuritishning zaruriy shartidir.",
      },
      { type: "h2", text: "Jismoniy shaxslardan olinadigan daromad soligʻi" },
      {
        type: "p",
        text: "2023-yil yanvardan Oʻzbekiston barcha mehnat daromadlariga 12% miqdorida yagona jismoniy shaxslardan olinadigan daromad soligʻi (JShDS) stavkasini qoʻllaydi. Soliq ish beruvchi tomonidan manba boʻyicha ushlab qolinadi va har oy Davlat soliq qoʻmitasiga oʻtkaziladi.",
      },
      {
        type: "ul",
        items: [
          "Yagona stavka: yalpi ish haqining 12%",
          "Ushlab qolish: ish beruvchining majburiyati, har oy oʻtkaziladi",
          "Norezidentlar: 12% stavka bir xil tarzda qoʻllaniladi; qoʻshimcha ustama yoʻq",
          "Dividend daromadi: 5% stavkada alohida soliqqa tortiladi",
        ],
      },
      { type: "h2", text: "Yagona ijtimoiy toʻlov (YIT)" },
      {
        type: "blockquote",
        text: "YIT ish beruvchining xarajati boʻlib, xodimning ish haqidan ushlab qolinmaydi. U yalpi ish haqiga qoʻshimcha ravishda hisoblanadi.",
      },
      {
        type: "ul",
        items: [
          "Standart stavka: yalpi ish haqi fondining 12% (ish beruvchi xarajati)",
          "Byudjet tashkilotlari va baʼzi kichik biznes subyektlari: pasaytirilgan stavkalar qoʻllanilishi mumkin",
          "JShDS oʻtkazilishi bilan bir vaqtda har oy toʻlanadi",
          "Kech toʻlash Markaziy bank qayta moliyalash stavkasida penya hisoblashga olib keladi",
        ],
      },
      { type: "h2", text: "Individual jamgʻarma pensiya badali" },
      {
        type: "p",
        text: "Xodimlar oʻzlarining yalpi ish haqining 0,1% ini individual jamgʻarma pensiya hisobiga oʻtkazadilar. Bu badal JShDS tarkibiga kiritiladi va ish beruvchi tomonidan umumiy daromad soligʻi oʻtkazmasi doirasida ushlab qolinadi.",
      },
      { type: "h2", text: "Hisobot majburiyatlari" },
      {
        type: "deadlines",
        items: [
          {
            when: "10-sana",
            whenNote: "keyingi oyning",
            what: "JShDS ushlab qolish boʻyicha hisobot va YIT boʻyicha deklaratsiya",
            freq: "Har oy",
          },
          {
            when: "1-fevral",
            whenNote: "har yili",
            what: "Ish haqi boʻyicha yillik solishtirma",
            freq: "Har yili",
          },
          {
            when: "Soʻrov boʻyicha",
            what: "Xodimlar daromadi haqidagi maʼlumotnomalar, ishdan boʻshatishda ham",
            freq: "Zarur boʻlganda",
          },
        ],
      },
      { type: "h2", text: "Keng tarqalgan muvofiqlik xatarlari" },
      {
        type: "risks",
        items: [
          "Pudratchilarni notoʻgʻri tasniflash. Xodim vazifalarini bajaradigan jismoniy shaxslar shtatga kiritilishi shart.",
          "Natura shaklidagi imtiyozlar. Uy-joy, transport va ovqat bozor qiymati boʻyicha soliqqa tortiladi.",
          "Mukofotlar va bir martalik toʻlovlar. Standart 12% stavkada JShDSga tortiladi.",
          "Topshirilmagan oylik hisobotlar. Hisobotlarni topshirmaslik maʼmuriy jarimaga olib keladi.",
        ],
      },
      { type: "divider" },
      { type: "h2", text: "Asosiy stavkalar xulosasi (2024)" },
      {
        type: "ul",
        items: [
          "Jismoniy shaxslardan olinadigan daromad soligʻi: 12% (yagona stavka, ish beruvchi ushlab qoladi)",
          "Yagona ijtimoiy toʻlov: 12% (ish beruvchi xarajati, yalpi ish haqi fondidan)",
          "Jamgʻarma pensiya badali: 0,1% (JShDSga kiritilgan)",
          "Ish beruvchining oʻz xarajati: yalpi ish haqiga qoʻshimcha 12% YIT; 12% JShDS xodimning ish haqidan ushlab qolinadi",
        ],
      },
      { type: "p", text: "Oylik yalpi ish haqi 10 000 000 soʻm boʻlganda:" },
      {
        type: "example",
        title: "Hisob-kitob misoli",
        meta: "Yalpi ish haqi 10 000 000 soʻm",
        split: [
          { label: "Xodim oladi", value: 8.8, tone: "light" },
          { label: "Ushlab qolingan JShDS", value: 1.2, tone: "red" },
          { label: "Ish beruvchi toʻlaydigan YIT", value: 1.2, tone: "dark" },
        ],
        rows: [
          { label: "Hisoblangan ish haqi", value: "10 000 000" },
          {
            label: "JShDS, 12%",
            note: "Ish haqidan ushlab qolinadi. 0,1% pensiya badalini, yaʼni 10 000 soʻmni oʻz ichiga oladi",
            value: "− 1 200 000",
            kind: "minus",
          },
          { label: "Xodim oladi", value: "8 800 000" },
          {
            label: "Yagona ijtimoiy toʻlov, 12%",
            note: "Yalpi ish haqidan tashqari ish beruvchi xarajati",
            value: "+ 1 200 000",
          },
          { label: "Ish beruvchining jami xarajati", value: "11 200 000", kind: "sum" },
        ],
      },
    ],
    faq: [
      {
        question: "Oʻzbekistonda mehnat daromadlariga jismoniy shaxslardan olinadigan daromad soligʻi (JShDS) stavkasi qancha?",
        answer: "2023-yil yanvardan Oʻzbekiston barcha mehnat daromadlariga 12% miqdorida yagona JShDS stavkasini qoʻllaydi. Soliq ish beruvchi tomonidan manba boʻyicha ushlab qolinadi va har oy Davlat soliq qoʻmitasiga oʻtkaziladi. Norezident xodimlarga ham xuddi shu stavka qoʻllaniladi — qoʻshimcha ustama yoʻq.",
      },
      {
        question: "Oʻzbekistonda yagona ijtimoiy toʻlov (YIT) stavkasi qancha?",
        answer: "YIT yalpi ish haqi fondining 12% miqdorida undiriladi va ish beruvchi xarajati hisoblanadi — u xodimning ish haqidan ushlab qolinmaydi. Toʻlov har oy JShDS oʻtkazmasi bilan bir vaqtda amalga oshiriladi. Kech toʻlash Markaziy bank qayta moliyalash stavkasida penya hisoblashga olib keladi.",
      },
      {
        question: "Oʻzbekistonda ish haqi ish beruvchiga qanchaga tushadi?",
        answer: "Ish beruvchining oʻz xarajati — 12% miqdoridagi yagona ijtimoiy toʻlov (YIT) boʻlib, u yalpi ish haqi fondiga qoʻshimcha hisoblanadi va xodimning ish haqidan ushlab qolinmaydi. 12% stavkadagi JShDS xodimning ish haqidan ushlab qolinadi va ish beruvchi tomonidan oʻtkaziladi, shuning uchun u ish beruvchining xarajati hisoblanmaydi. Xodimning individual jamgʻarma pensiya hisobiga 0,1% badali shu JShDS tarkibidan olinadi.",
      },
      {
        question: "Oʻzbekistonda ish beruvchilar uchun ish haqi hisobot muddatlari qanday?",
        answer: "Ish beruvchilar keyingi oyning 10-sanasiga qadar oylik JShDS ushlab qolish hisobotini topshirishlari, bir vaqtda YIT deklaratsiyasini berishlari va 1-fevralga qadar ish haqi boʻyicha yillik solishtirmani topshirishlari shart. Xodimlar daromad maʼlumotnomasi soʻrov yoki ishdan boʻshatish boʻyicha beriladi.",
      },
    ],
  },
};

export default article;
