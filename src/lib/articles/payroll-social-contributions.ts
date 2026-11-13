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
          label: "Standard social tax on gross payroll, paid by the employer on top of salary",
        },
        {
          value: "0.1%",
          label: "Employee contribution to the individual accumulative pension account, taken out of the PIT withheld, not added on top",
        },
        {
          value: "15th",
          label: "Day of the following month by which monthly PIT and social tax returns and payments are due",
        },
      ],
      points: [
        "Uzbekistan applies a flat 12% personal income tax to all employment income, and the same rate applies to non-resident employees.",
        "Social tax is an employer cost, not a deduction from the employee's salary, and is paid monthly alongside the PIT, by the 15th of the following month.",
        "Late payment of tax attracts penalty interest of 1/300 of the Central Bank refinancing rate for each calendar day of delay, and failure to file monthly reports attracts administrative fines.",
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
        text: "Uzbekistan applies a flat personal income tax (PIT) rate of 12% on all employment income (Tax Code Art. 381). The tax is withheld at source by the employer and paid when the salary is paid, but no later than the 15th of the following month (Art. 390).",
      },
      {
        type: "ul",
        items: [
          "Flat rate: 12% on gross salary",
          "Withholding: employer obligation, paid with the salary and no later than the 15th of the following month",
          "Non-residents: 12% rate applies equally; no additional surcharge",
          "Dividend income: taxed separately at 5% for residents and 10% for non-residents",
        ],
      },
      { type: "h2", text: "Social tax" },
      {
        type: "blockquote",
        text: "Social tax is an employer-borne cost, not deducted from the employee's salary. It is calculated on top of gross compensation.",
      },
      {
        type: "ul",
        items: [
          "Standard rate: 12% of gross payroll (employer cost)",
          "Budget organisations: a higher rate of 25% (Tax Code Art. 405)",
          "Reduced rates: only for categories listed in the Tax Code, for example 1% for textile and garment enterprises until 1 September 2028 (Art. 483)",
          "Return and payment monthly, by the 15th of the following month, together with PIT (Art. 407)",
          "Late payment attracts penalty interest of 1/300 of the Central Bank refinancing rate for each calendar day of delay (Art. 110)",
        ],
      },
      { type: "h2", text: "Individual accumulative pension contribution" },
      {
        type: "p",
        text: "Employees contribute 0.1% of their salary to an individual accumulative pension account. The contribution is not added on top of the 12% PIT: it is taken out of the PIT withheld, which is reduced by the amount of the contribution (Tax Code Art. 385). The employee's net pay and the employer's cost stay the same.",
      },
      { type: "h2", text: "Reporting obligations" },
      {
        type: "deadlines",
        items: [
          {
            when: "15th",
            whenNote: "of the next month",
            what: "PIT and social tax returns, and payment of both taxes",
            freq: "Monthly",
          },
          { when: "15 Feb", whenNote: "each year", what: "Annual PIT and social tax returns", freq: "Annual" },
          {
            when: "On request",
            what: "Employee income certificates, also on termination",
            freq: "As needed",
          },
        ],
      },
      {
        type: "p",
        text: "Since 1 January 2026 the tax authority pre-fills the PIT and social tax returns (Tax Code Art. 81, as amended by Law ZRU-1108). Where a pre-filled return differs from the employer's records, the employer corrects it within five days, but no later than the filing deadline. If no corrections are made, the pre-filled return counts as filed.",
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
      { type: "h2", text: "Summary of key rates (2026)" },
      {
        type: "ul",
        items: [
          "Personal Income Tax: 12% (flat, withheld by employer)",
          "Social Tax: 12% (employer cost, on gross payroll), 25% for budget organisations",
          "Accumulative Pension: 0.1% (taken out of the PIT withheld, not added on top)",
          "Employer's own cost: 12% social tax on top of gross salary; the 12% PIT is withheld from the employee's salary",
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
          { label: "Social tax paid by the employer", value: 1.2, tone: "dark" },
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
            label: "Social tax, 12%",
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
        answer: "Uzbekistan applies a flat 12% PIT rate on all employment income. The tax is withheld at source by the employer and paid when the salary is paid, but no later than the 15th of the following month. The same rate applies equally to non-resident employees — there is no additional surcharge.",
      },
      {
        question: "What is the social tax rate in Uzbekistan?",
        answer: "Social tax is charged at 12% of gross payroll and is an employer cost — it is not deducted from the employee's salary. Budget organisations pay a higher rate of 25%. It is paid monthly, by the 15th of the following month, alongside the PIT. Late payment attracts penalty interest of 1/300 of the Central Bank refinancing rate for each calendar day of delay.",
      },
      {
        question: "What does payroll cost the employer in Uzbekistan?",
        answer: "The employer's own cost is the 12% social tax, calculated on top of gross payroll and not deducted from the employee's salary. Personal income tax at 12% is withheld from the employee's salary and remitted by the employer, so it is not an employer cost. The employee's 0.1% contribution to an individual accumulative pension account is taken out of that PIT, not added on top.",
      },
      {
        question: "What are the payroll reporting deadlines for employers in Uzbekistan?",
        answer: "Employers must file monthly PIT and social tax returns and pay both taxes by the 15th of the following month, and file the annual PIT and social tax returns by 15 February. Since 1 January 2026 the tax authority pre-fills these returns: the employer has five days, but no later than the filing deadline, to correct them, otherwise the pre-filled return counts as filed. Employee income certificates must be issued upon request or at termination.",
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
          label: "Стандартная ставка социального налога от фонда оплаты труда, расход работодателя сверх зарплаты",
        },
        {
          value: "0,1%",
          label: "Взнос работника на индивидуальный накопительный пенсионный счёт, берётся из удержанного НДФЛ, а не начисляется сверху",
        },
        {
          value: "15-е число",
          label: "Число следующего месяца — срок ежемесячных расчётов и уплаты НДФЛ и социального налога",
        },
      ],
      points: [
        "В Узбекистане действует единая ставка НДФЛ 12% на все трудовые доходы; та же ставка применяется к сотрудникам-нерезидентам.",
        "Социальный налог — расход работодателя, он не удерживается из зарплаты сотрудника и уплачивается ежемесячно вместе с НДФЛ, до 15-го числа следующего месяца.",
        "Просрочка уплаты налога влечёт пеню в размере 1/300 ставки рефинансирования Центрального банка за каждый календарный день, а непредставление ежемесячных отчётов — административные штрафы.",
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
        text: "В Узбекистане применяется единая ставка налога на доходы физических лиц (НДФЛ) в размере 12% на все доходы от трудовой деятельности (ст. 381 Налогового кодекса). Налог удерживается у источника выплаты работодателем и уплачивается одновременно с выплатой зарплаты, но не позднее 15-го числа следующего месяца (ст. 390).",
      },
      {
        type: "ul",
        items: [
          "Единая ставка: 12% от валовой заработной платы",
          "Удержание: обязанность работодателя, уплата при выплате зарплаты, не позднее 15-го числа следующего месяца",
          "Нерезиденты: ставка 12% применяется в равной мере; дополнительная надбавка не предусмотрена",
          "Дивидендный доход: облагается отдельно по ставке 5% у резидентов и 10% у нерезидентов",
        ],
      },
      { type: "h2", text: "Социальный налог" },
      {
        type: "blockquote",
        text: "Социальный налог является расходом работодателя и не вычитается из заработной платы сотрудника. Он рассчитывается сверх совокупного вознаграждения.",
      },
      {
        type: "ul",
        items: [
          "Стандартная ставка: 12% от фонда оплаты труда (расход работодателя)",
          "Бюджетные организации: повышенная ставка 25% (ст. 405 Налогового кодекса)",
          "Пониженные ставки: только для категорий, перечисленных в Налоговом кодексе, например 1% для текстильных и швейно-трикотажных предприятий до 1 сентября 2028 года (ст. 483)",
          "Расчёт и уплата ежемесячно, до 15-го числа следующего месяца, одновременно с НДФЛ (ст. 407)",
          "Просрочка уплаты влечёт пеню в размере 1/300 ставки рефинансирования Центрального банка за каждый календарный день (ст. 110)",
        ],
      },
      { type: "h2", text: "Индивидуальный накопительный пенсионный взнос" },
      {
        type: "p",
        text: "Работники вносят 0,1% от заработной платы на индивидуальный накопительный пенсионный счёт. Взнос не начисляется сверх НДФЛ 12%: он берётся из удержанного НДФЛ, который уменьшается на сумму взноса (ст. 385 Налогового кодекса). Чистая зарплата сотрудника и расходы работодателя от этого не меняются.",
      },
      { type: "h2", text: "Обязательства по отчётности" },
      {
        type: "deadlines",
        items: [
          {
            when: "15-е",
            whenNote: "число следующего месяца",
            what: "Расчёты по НДФЛ и социальному налогу, уплата обоих налогов",
            freq: "Ежемесячно",
          },
          {
            when: "15 февраля",
            whenNote: "каждого года",
            what: "Годовые расчёты по НДФЛ и социальному налогу",
            freq: "Ежегодно",
          },
          {
            when: "По запросу",
            what: "Справки о доходах сотрудников, а также при увольнении",
            freq: "По необходимости",
          },
        ],
      },
      {
        type: "p",
        text: "С 1 января 2026 года расчёты по НДФЛ и социальному налогу формирует налоговый орган (ст. 81 Налогового кодекса в редакции Закона ЗРУ-1108). Если сформированный расчёт расходится с данными работодателя, работодатель исправляет его в течение пяти дней, но не позднее срока представления. Если исправления не внесены, расчёт считается представленным.",
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
      { type: "h2", text: "Ключевые ставки (2026)" },
      {
        type: "ul",
        items: [
          "НДФЛ: 12% (единая ставка, удерживается работодателем)",
          "Социальный налог: 12% (расход работодателя, от фонда оплаты труда), для бюджетных организаций 25%",
          "Накопительный пенсионный взнос: 0,1% (берётся из удержанного НДФЛ, а не начисляется сверху)",
          "Собственный расход работодателя: 12% социального налога сверх валовой заработной платы; НДФЛ 12% удерживается из заработной платы сотрудника",
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
          { label: "Социальный налог за счёт работодателя", value: 1.2, tone: "dark" },
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
            label: "Социальный налог, 12%",
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
        answer: "В Узбекистане действует единая ставка НДФЛ 12% на все трудовые доходы. Налог удерживается у источника работодателем и уплачивается одновременно с выплатой зарплаты, но не позднее 15-го числа следующего месяца. Та же ставка применяется к сотрудникам-нерезидентам — дополнительная надбавка не предусмотрена.",
      },
      {
        question: "Какова ставка социального налога в Узбекистане?",
        answer: "Социальный налог взимается по ставке 12% от фонда оплаты труда и является расходом работодателя — он не вычитается из заработной платы сотрудника. Бюджетные организации платят по повышенной ставке 25%. Налог уплачивается ежемесячно, до 15-го числа следующего месяца, одновременно с НДФЛ. Просрочка влечёт пеню в размере 1/300 ставки рефинансирования Центрального банка за каждый календарный день.",
      },
      {
        question: "Во что обходится заработная плата работодателю в Узбекистане?",
        answer: "Собственный расход работодателя — социальный налог в размере 12%, который начисляется сверх фонда оплаты труда и не вычитается из заработной платы сотрудника. НДФЛ по ставке 12% удерживается из заработной платы сотрудника и перечисляется работодателем, поэтому не является расходом работодателя. Взнос сотрудника 0,1% на индивидуальный накопительный пенсионный счёт берётся из этого НДФЛ, а не начисляется сверху.",
      },
      {
        question: "Каковы сроки отчётности по заработной плате для работодателей в Узбекистане?",
        answer: "Работодатели обязаны ежемесячно представлять расчёты по НДФЛ и социальному налогу и уплачивать оба налога до 15-го числа следующего месяца, а годовые расчёты представлять до 15 февраля. С 1 января 2026 года эти расчёты формирует налоговый орган: у работодателя есть пять дней, но не позднее срока представления, чтобы их исправить, иначе сформированный расчёт считается представленным. Справки о доходах сотрудникам выдаются по запросу или при увольнении.",
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
          label: "Yalpi ish haqi fondidan ijtimoiy soliqning standart stavkasi, ish haqiga qoʻshimcha ish beruvchi xarajati",
        },
        {
          value: "0,1%",
          label: "Xodimning individual jamgʻarma pensiya hisobiga badali, ushlab qolingan JShDS hisobidan olinadi, ustiga qoʻshilmaydi",
        },
        {
          value: "15-sana",
          label: "Keyingi oyning shu sanasi — JShDS va ijtimoiy soliq boʻyicha oylik hisobotlar va toʻlov muddati",
        },
      ],
      points: [
        "Oʻzbekiston barcha mehnat daromadlariga 12% yagona JShDS stavkasini qoʻllaydi; norezident xodimlarga ham shu stavka qoʻllaniladi.",
        "Ijtimoiy soliq ish beruvchining xarajati boʻlib, xodimning ish haqidan ushlab qolinmaydi va har oy JShDS bilan birga keyingi oyning 15-sanasigacha toʻlanadi.",
        "Soliqni kech toʻlash har bir kechiktirilgan kalendar kun uchun Markaziy bank qayta moliyalash stavkasining 1/300 qismi miqdorida penya hisoblanishiga, oylik hisobotlarni topshirmaslik esa maʼmuriy jarimaga olib keladi.",
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
        text: "Oʻzbekiston barcha mehnat daromadlariga 12% miqdorida yagona jismoniy shaxslardan olinadigan daromad soligʻi (JShDS) stavkasini qoʻllaydi (Soliq kodeksining 381-moddasi). Soliq ish beruvchi tomonidan manba boʻyicha ushlab qolinadi va ish haqi toʻlanishi bilan bir vaqtda, lekin keyingi oyning 15-sanasidan kechiktirmay toʻlanadi (390-modda).",
      },
      {
        type: "ul",
        items: [
          "Yagona stavka: yalpi ish haqining 12%",
          "Ushlab qolish: ish beruvchining majburiyati, ish haqi bilan birga, keyingi oyning 15-sanasidan kechiktirmay toʻlanadi",
          "Norezidentlar: 12% stavka bir xil tarzda qoʻllaniladi; qoʻshimcha ustama yoʻq",
          "Dividend daromadi: rezidentlar uchun 5%, norezidentlar uchun 10% stavkada alohida soliqqa tortiladi",
        ],
      },
      { type: "h2", text: "Ijtimoiy soliq" },
      {
        type: "blockquote",
        text: "Ijtimoiy soliq ish beruvchining xarajati boʻlib, xodimning ish haqidan ushlab qolinmaydi. U yalpi ish haqiga qoʻshimcha ravishda hisoblanadi.",
      },
      {
        type: "ul",
        items: [
          "Standart stavka: yalpi ish haqi fondining 12% (ish beruvchi xarajati)",
          "Byudjet tashkilotlari: yuqoriroq 25% stavka (Soliq kodeksining 405-moddasi)",
          "Pasaytirilgan stavkalar: faqat Soliq kodeksida sanab oʻtilgan toifalar uchun, masalan toʻqimachilik va tikuv-trikotaj korxonalari uchun 2028-yil 1-sentabrgacha 1% (483-modda)",
          "Hisobot va toʻlov har oy, keyingi oyning 15-sanasigacha, JShDS bilan bir vaqtda (407-modda)",
          "Kech toʻlash har bir kechiktirilgan kalendar kun uchun Markaziy bank qayta moliyalash stavkasining 1/300 qismi miqdorida penya hisoblashga olib keladi (110-modda)",
        ],
      },
      { type: "h2", text: "Individual jamgʻarma pensiya badali" },
      {
        type: "p",
        text: "Xodimlar ish haqining 0,1% ini individual jamgʻarma pensiya hisobiga oʻtkazadilar. Bu badal 12% JShDS ustiga qoʻshilmaydi: u ushlab qolingan JShDS hisobidan olinadi va JShDS summasi badal miqdoriga kamaytiriladi (Soliq kodeksining 385-moddasi). Xodimning qoʻliga tegadigan ish haqi va ish beruvchining xarajati oʻzgarmaydi.",
      },
      { type: "h2", text: "Hisobot majburiyatlari" },
      {
        type: "deadlines",
        items: [
          {
            when: "15-sana",
            whenNote: "keyingi oyning",
            what: "JShDS va ijtimoiy soliq boʻyicha hisobotlar, ikkala soliqni toʻlash",
            freq: "Har oy",
          },
          {
            when: "15-fevral",
            whenNote: "har yili",
            what: "JShDS va ijtimoiy soliq boʻyicha yillik hisobotlar",
            freq: "Har yili",
          },
          {
            when: "Soʻrov boʻyicha",
            what: "Xodimlar daromadi haqidagi maʼlumotnomalar, ishdan boʻshatishda ham",
            freq: "Zarur boʻlganda",
          },
        ],
      },
      {
        type: "p",
        text: "2026-yil 1-yanvardan JShDS va ijtimoiy soliq boʻyicha hisobotlarni soliq organi shakllantiradi (Soliq kodeksining 81-moddasi, OʻRQ-1108-son Qonun tahririda). Shakllantirilgan hisobot ish beruvchining maʼlumotlaridan farq qilsa, ish beruvchi uni besh kun ichida, lekin hisobot topshirish muddatidan kechiktirmay tuzatadi. Tuzatish kiritilmasa, hisobot topshirilgan hisoblanadi.",
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
      { type: "h2", text: "Asosiy stavkalar xulosasi (2026)" },
      {
        type: "ul",
        items: [
          "Jismoniy shaxslardan olinadigan daromad soligʻi: 12% (yagona stavka, ish beruvchi ushlab qoladi)",
          "Ijtimoiy soliq: 12% (ish beruvchi xarajati, yalpi ish haqi fondidan), byudjet tashkilotlari uchun 25%",
          "Jamgʻarma pensiya badali: 0,1% (ushlab qolingan JShDS hisobidan olinadi, ustiga qoʻshilmaydi)",
          "Ish beruvchining oʻz xarajati: yalpi ish haqiga qoʻshimcha 12% ijtimoiy soliq; 12% JShDS xodimning ish haqidan ushlab qolinadi",
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
          { label: "Ish beruvchi toʻlaydigan ijtimoiy soliq", value: 1.2, tone: "dark" },
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
            label: "Ijtimoiy soliq, 12%",
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
        answer: "Oʻzbekiston barcha mehnat daromadlariga 12% miqdorida yagona JShDS stavkasini qoʻllaydi. Soliq ish beruvchi tomonidan manba boʻyicha ushlab qolinadi va ish haqi toʻlanishi bilan bir vaqtda, lekin keyingi oyning 15-sanasidan kechiktirmay toʻlanadi. Norezident xodimlarga ham xuddi shu stavka qoʻllaniladi — qoʻshimcha ustama yoʻq.",
      },
      {
        question: "Oʻzbekistonda ijtimoiy soliq stavkasi qancha?",
        answer: "Ijtimoiy soliq yalpi ish haqi fondining 12% miqdorida undiriladi va ish beruvchi xarajati hisoblanadi — u xodimning ish haqidan ushlab qolinmaydi. Byudjet tashkilotlari yuqoriroq 25% stavkada toʻlaydi. Soliq har oy, keyingi oyning 15-sanasigacha JShDS bilan bir vaqtda toʻlanadi. Kech toʻlash har bir kechiktirilgan kalendar kun uchun Markaziy bank qayta moliyalash stavkasining 1/300 qismi miqdorida penya hisoblashga olib keladi.",
      },
      {
        question: "Oʻzbekistonda ish haqi ish beruvchiga qanchaga tushadi?",
        answer: "Ish beruvchining oʻz xarajati — 12% miqdoridagi ijtimoiy soliq boʻlib, u yalpi ish haqi fondiga qoʻshimcha hisoblanadi va xodimning ish haqidan ushlab qolinmaydi. 12% stavkadagi JShDS xodimning ish haqidan ushlab qolinadi va ish beruvchi tomonidan oʻtkaziladi, shuning uchun u ish beruvchining xarajati hisoblanmaydi. Xodimning individual jamgʻarma pensiya hisobiga 0,1% badali shu JShDS hisobidan olinadi, ustiga qoʻshilmaydi.",
      },
      {
        question: "Oʻzbekistonda ish beruvchilar uchun ish haqi hisobot muddatlari qanday?",
        answer: "Ish beruvchilar JShDS va ijtimoiy soliq boʻyicha oylik hisobotlarni topshirishlari va ikkala soliqni keyingi oyning 15-sanasigacha toʻlashlari, yillik hisobotlarni esa 15-fevralgacha topshirishlari shart. 2026-yil 1-yanvardan bu hisobotlarni soliq organi shakllantiradi: ish beruvchi ularni besh kun ichida, lekin hisobot topshirish muddatidan kechiktirmay tuzatishi mumkin, aks holda shakllantirilgan hisobot topshirilgan hisoblanadi. Xodimlar daromad maʼlumotnomasi soʻrov yoki ishdan boʻshatish boʻyicha beriladi.",
      },
    ],
  },
};

export default article;
