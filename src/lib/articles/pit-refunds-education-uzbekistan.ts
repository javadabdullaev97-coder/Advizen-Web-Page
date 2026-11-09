import type { LocalizedArticle } from "../publications";

const article: Record<string, LocalizedArticle> = {
  en: {
    subtitle: "Your guide to personal income tax benefits and refunds for education, mortgages, and more in Uzbekistan.",
    author: "Advizen Tax Practice",
    readTime: "7 min read",
    inShort: {
      figures: [
        { value: "12%", label: "Personal income tax usually withheld from official salaries each month" },
        { value: "UZS 3m", label: "Monthly exemption per child for services at non-state preschools and schools" },
        { value: "1 April", label: "Deadline for the annual income declaration for the previous year" },
        { value: "15 days", label: "Typical time for the refund to reach the bank card after the refund application" },
      ],
      points: [
        "Tuition at higher education institutions in Uzbekistan for yourself, your spouse or your children up to 26 years old is exempt from PIT, including educational loans and their interest.",
        "Mortgage payments and accrued interest are exempt up to 80 times the minimum old-age pension a year, where the property was bought with a budget subsidy.",
        "The benefits can be used either through a direct exemption under a tripartite agreement with the employer or through an annual refund of overpaid PIT.",
        "The refund is claimed online: file the annual declaration at my3.soliq.uz with an electronic digital signature, then submit a refund application with bank card details.",
      ],
    },
    content: [
      {
        type: "p",
        text: "In Uzbekistan, individuals with official salaries typically have Personal Income Tax (PIT) withheld at a rate of 12% each month. However, certain income categories are fully or partially exempt from this tax. Even better, if the tax has already been paid on these amounts, you can legally claim a portion of it back.",
      },
      { type: "h2", text: "Key PIT exemptions and benefits" },
      {
        type: "ul",
        items: [
          "Education expenses: tuition fees for yourself, spouse, or children (up to 26 years old) at higher education institutions in Uzbekistan, including educational loans and their interest",
          "Private schools and kindergartens: parents or adoptive parents can exempt up to 3 million UZS per month per child for educational services at non-state preschools and schools",
          "Mortgage interest: amounts paid towards mortgage loans and their accrued interest, up to 80 times the Minimum Rate of Old-Age Pension (MROT) annually, where the property was acquired with a budget subsidy",
          "Pension savings: salary amounts voluntarily directed to Individual Accumulative Pension Accounts (INPS) at the People's Bank",
          "Investment accounts: salary directed to individual investment accounts for purchasing shares, up to 100 times the MROT annually (funds locked for 12 months)",
          "Employer-provided benefits: certain material assistance, medical compensation, children's camp vouchers, and non-cash gifts within prescribed limits",
        ],
      },
      { type: "h2", text: "How to claim your PIT refund" },
      {
        type: "p",
        text: "There are two primary ways to utilise these benefits: either through a direct exemption via a tripartite agreement with your employer, or by claiming an annual refund for overpaid PIT. The annual refund process can be completed entirely online.",
      },
      { type: "h3", text: "Step 1: submit your annual income declaration" },
      {
        type: "ul",
        items: [
          "When: by April 1st of the year following the reporting year (e.g., for 2024 income, declare by April 1, 2025)",
          "Where: electronically via my3.soliq.uz using your Electronic Digital Signature (EDS)",
          "Required: income statements from all workplaces, scanned copies of relevant contracts (university, private school, or mortgage agreement), and payment receipts",
          "In the \"Tax benefits\" section, select the appropriate benefit category and attach supporting documents — the system will automatically calculate your refundable amount",
        ],
      },
      { type: "h3", text: "Step 2: submit your refund application" },
      {
        type: "ul",
        items: [
          "When: after your declaration has been successfully submitted and processed",
          "Where: via my3.soliq.uz or my.soliq.uz",
          "Enter your bank card number, transit account, and bank MFO for the refund transfer",
          "Your refund will typically be transferred to your specified bank card within 15 days",
        ],
      },
      {
        type: "blockquote",
        text: "Navigating tax benefits can be complex, but understanding these exemptions can lead to significant savings. If you need assistance with preparing your declaration, understanding your eligibility, or ensuring compliance, Advizen's experts are here to help.",
      },
    ],
      faq: [
      {
        question: "What education expenses qualify for a PIT exemption in Uzbekistan?",
        answer: "Tuition fees paid for yourself, your spouse, or your children (up to 26 years old) at higher education institutions in Uzbekistan are exempt from PIT — including educational loans and their interest. Parents or adoptive parents may also exempt up to 3,000,000 UZS per month per child for educational services at non-state preschools and private schools. These benefits apply under Uzbekistan's Personal Income Tax system at the standard 12% rate.",
      },
      {
        question: "What is the deadline to claim a PIT refund in Uzbekistan?",
        answer: "The annual income declaration must be submitted by April 1 of the year following the reporting year (e.g., for 2024 income, by April 1, 2025). It is submitted electronically via my3.soliq.uz using an Electronic Digital Signature (EDS). In the \"Tax benefits\" section, attach supporting documents (contracts and payment receipts) — the system auto-calculates the refundable amount. Refunds are typically transferred to the specified bank card within 15 days of submitting the refund application.",
      },
      {
        question: "Can mortgage interest payments qualify for a PIT benefit in Uzbekistan?",
        answer: "Yes. Amounts paid towards mortgage loans and their accrued interest are exempt from PIT, up to 80 times the Minimum Rate of Old-Age Pension (MROT) annually, provided the property was acquired with a budget subsidy. The benefit is claimed through the annual income declaration at my3.soliq.uz using an Electronic Digital Signature.",
      },
      {
        question: "What other income categories are exempt from PIT in Uzbekistan?",
        answer: "Additional PIT exemptions include: salary voluntarily directed to Individual Accumulative Pension Accounts (INPS) at the People's Bank; salary directed to individual investment accounts for purchasing shares (up to 100× MROT annually, with funds locked for 12 months); and certain employer-provided benefits within prescribed limits — including material assistance, medical compensation, children's camp vouchers, and non-cash gifts.",
      },
    ],
    howTo: {
      name: "How to claim a PIT refund for education expenses in Uzbekistan",
      description: "The 2-step online process to reclaim overpaid personal income tax on education, mortgage, and pension expenses in Uzbekistan through my3.soliq.uz.",
      steps: [
        {
          name: "Submit your annual income declaration",
          text: "By April 1 of the year following the reporting year, file your annual income declaration at my3.soliq.uz using your Electronic Digital Signature (EDS). Attach income statements from all workplaces and scanned copies of your university enrolment, private school, or mortgage agreement plus payment receipts. In the 'Tax benefits' section, select the applicable benefit category — the system automatically calculates your refundable amount.",
        },
        {
          name: "Submit your refund application",
          text: "After your declaration is processed, submit a refund application via my3.soliq.uz or my.soliq.uz. Enter your bank card number, transit account, and bank MFO code. The refund is typically transferred to your specified bank card within 15 days.",
        },
      ],
    },
  },
  ru: {
    subtitle: "Ваш гид по льготам и возвратам НДФЛ за образование, ипотеку и другие категории в Узбекистане.",
    author: "Налоговая практика Advizen",
    readTime: "7 мин чтения",
    inShort: {
      figures: [
        { value: "12%", label: "НДФЛ, обычно ежемесячно удерживаемый с официальной зарплаты" },
        { value: "3 млн сум", label: "Ежемесячное освобождение на ребёнка за услуги негосударственных детских садов и школ" },
        { value: "1 апреля", label: "Срок подачи годовой декларации о доходах за предыдущий год" },
        { value: "15 дней", label: "Обычный срок поступления возврата на карту после подачи заявления" },
      ],
      points: [
        "Оплата обучения в высших учебных заведениях Узбекистана за себя, супруга или детей до 26 лет освобождается от НДФЛ, включая образовательные кредиты и проценты по ним.",
        "Платежи по ипотеке и начисленные проценты освобождаются в пределах 80 МРОТ в год, если жильё приобретено с бюджетной субсидией.",
        "Льготой можно воспользоваться либо через прямое освобождение по трёхстороннему соглашению с работодателем, либо через ежегодный возврат переплаты НДФЛ.",
        "Возврат оформляется онлайн: подаётся годовая декларация на my3.soliq.uz с ЭЦП, затем заявление на возврат с реквизитами банковской карты.",
      ],
    },
    content: [
      {
        type: "p",
        text: "В Узбекистане у физических лиц с официальной заработной платой обычно ежемесячно удерживается НДФЛ по ставке 12%. Однако отдельные категории доходов полностью или частично освобождаются от этого налога. Более того, если налог уже был уплачен с этих сумм, его часть можно законно вернуть.",
      },
      { type: "h2", text: "Ключевые освобождения и льготы по НДФЛ" },
      {
        type: "ul",
        items: [
          "Расходы на образование: оплата обучения за себя, супруга или детей (до 26 лет) в высших учебных заведениях Узбекистана, включая образовательные кредиты и проценты по ним",
          "Частные школы и детские сады: родители или усыновители могут получить освобождение до 3 млн сум в месяц на ребёнка за услуги в негосударственных дошкольных учреждениях и школах",
          "Ипотечные проценты: суммы, уплаченные по ипотечным кредитам и начисленные проценты — до 80 минимальных размеров пенсии по возрасту (МРОТ) в год, если жильё приобретено с бюджетной субсидией",
          "Пенсионные накопления: суммы зарплаты, добровольно направленные на индивидуальные накопительные пенсионные счета (ИНПС) в Народном банке",
          "Инвестиционные счета: зарплата, направленная на индивидуальные инвестиционные счета для покупки акций, до 100 МРОТ в год (средства заблокированы на 12 месяцев)",
          "Льготы от работодателя: определённая материальная помощь, медицинские компенсации, путёвки в детские лагеря и неденежные подарки в установленных лимитах",
        ],
      },
      { type: "h2", text: "Как получить возврат НДФЛ" },
      {
        type: "p",
        text: "Существуют два основных способа использовать эти льготы: либо прямое освобождение через трёхстороннее соглашение с работодателем, либо ежегодный возврат переплаты по НДФЛ. Процесс годового возврата можно полностью пройти онлайн.",
      },
      { type: "h3", text: "Шаг 1. Подайте годовую декларацию о доходах" },
      {
        type: "ul",
        items: [
          "Когда: до 1 апреля года, следующего за отчётным (например, по доходам 2024 года — до 1 апреля 2025 года)",
          "Где: электронно через my3.soliq.uz с использованием электронной цифровой подписи (ЭЦП)",
          "Требуется: справки о доходах со всех мест работы, сканы соответствующих договоров (университет, частная школа или ипотечный договор) и платёжные документы",
          "В разделе «Налоговые льготы» выберите соответствующую категорию льготы и приложите подтверждающие документы — система автоматически рассчитает возвращаемую сумму",
        ],
      },
      { type: "h3", text: "Шаг 2. Подайте заявление на возврат" },
      {
        type: "ul",
        items: [
          "Когда: после успешной подачи и обработки декларации",
          "Где: через my3.soliq.uz или my.soliq.uz",
          "Укажите номер банковской карты, транзитный счёт и МФО банка для перевода",
          "Возврат, как правило, поступает на указанную карту в течение 15 дней",
        ],
      },
      {
        type: "blockquote",
        text: "Налоговые льготы могут быть сложными в применении, но понимание этих освобождений приводит к существенной экономии. Если вам нужна помощь с подготовкой декларации, оценкой права на льготу или обеспечением соответствия, эксперты Advizen всегда готовы помочь.",
      },
    ],
      faq: [
      {
        question: "Какие расходы на образование дают право на льготу по НДФЛ в Узбекистане?",
        answer: "Оплата обучения за себя, супруга или детей (до 26 лет) в высших учебных заведениях Узбекистана освобождается от НДФЛ — в том числе образовательные кредиты и проценты по ним. Родители или усыновители также могут получить освобождение до 3 000 000 сум в месяц на ребёнка за услуги в негосударственных дошкольных учреждениях и частных школах. Льготы применяются в рамках стандартной ставки НДФЛ 12%.",
      },
      {
        question: "Каков срок подачи заявления на возврат НДФЛ в Узбекистане?",
        answer: "Годовая декларация о доходах должна быть подана до 1 апреля года, следующего за отчётным (например, по доходам 2024 года — до 1 апреля 2025 года). Декларация подаётся в электронном виде через my3.soliq.uz с использованием ЭЦП. В разделе «Налоговые льготы» прикладываются подтверждающие документы (договоры и платёжные документы) — система автоматически рассчитывает возвращаемую сумму. Возврат, как правило, поступает на карту в течение 15 дней с момента подачи заявления.",
      },
      {
        question: "Дают ли ипотечные платежи право на льготу по НДФЛ в Узбекистане?",
        answer: "Да. Суммы, уплаченные по ипотечным кредитам и начисленные проценты, освобождаются от НДФЛ — до 80 минимальных размеров пенсии по возрасту (МРОТ) в год, при условии что жильё приобретено с бюджетной субсидией. Льгота заявляется через годовую декларацию о доходах на my3.soliq.uz с использованием электронной цифровой подписи.",
      },
      {
        question: "Какие ещё категории доходов освобождены от НДФЛ в Узбекистане?",
        answer: "Дополнительные освобождения от НДФЛ: суммы зарплаты, добровольно направленные на индивидуальные накопительные пенсионные счета (ИНПС) в Народном банке; зарплата, направленная на индивидуальные инвестиционные счета для покупки акций (до 100 МРОТ в год, средства заблокированы на 12 месяцев); определённые льготы от работодателя в установленных лимитах — в том числе материальная помощь, медицинские компенсации, путёвки в детские лагеря и неденежные подарки.",
      },
    ],
    howTo: {
      name: "Как получить возврат НДФЛ за образование в Узбекистане",
      description: "Двухшаговый онлайн-процесс возврата переплаты НДФЛ за образование, ипотеку и пенсионные взносы в Узбекистане через my3.soliq.uz.",
      steps: [
        {
          name: "Подайте годовую декларацию о доходах",
          text: "До 1 апреля года, следующего за отчётным, подайте декларацию на my3.soliq.uz с использованием ЭЦП. Приложите справки о доходах со всех мест работы, сканы договоров (университет, частная школа или ипотека) и платёжных документов. В разделе «Налоговые льготы» выберите нужную категорию льготы — система автоматически рассчитает возвращаемую сумму.",
        },
        {
          name: "Подайте заявление на возврат",
          text: "После обработки декларации подайте заявление на возврат через my3.soliq.uz или my.soliq.uz. Укажите номер банковской карты, транзитный счёт и МФО банка. Возврат, как правило, поступает на карту в течение 15 дней.",
        },
      ],
    },
  },
  uz: {
    subtitle: "Oʻzbekistonda taʼlim, ipoteka va boshqa toifalar boʻyicha JShDS imtiyozlari va qaytarimlari boʻyicha qoʻllanmangiz.",
    author: "Advizen soliq amaliyoti",
    readTime: "7 daqiqalik oʻqish",
    inShort: {
      figures: [
        { value: "12%", label: "Rasmiy maoshdan odatda har oy ushlab qolinadigan JShDS" },
        { value: "3 mln soʻm", label: "Nodavlat bogʻcha va maktablar xizmatlari uchun bola boshiga oylik imtiyoz" },
        { value: "1-aprel", label: "Oʻtgan yil uchun yillik daromad deklaratsiyasini topshirish muddati" },
        { value: "15 kun", label: "Ariza topshirilgandan keyin qaytarim bank kartasiga odatda oʻtkaziladigan muddat" },
      ],
      points: [
        "Oʻzingiz, turmush oʻrtogʻingiz yoki 26 yoshgacha boʻlgan bolalaringiz uchun Oʻzbekiston oliy taʼlim muassasalaridagi oʻqish haqi, jumladan taʼlim kreditlari va ularning foizlari JShDSdan ozod.",
        "Uy-joy byudjet subsidiyasi bilan olingan boʻlsa, ipoteka toʻlovlari va hisoblangan foizlar yiliga MROTning 80 baravarigacha ozod etiladi.",
        "Imtiyozdan ish beruvchi bilan uch tomonlama shartnoma orqali bevosita ozod qilish yoki ortiqcha toʻlangan JShDSni yillik qaytarish orqali foydalanish mumkin.",
        "Qaytarim onlayn rasmiylashtiriladi: my3.soliq.uz saytida ERI bilan yillik deklaratsiya topshiriladi, soʻng bank karta rekvizitlari bilan qaytarish arizasi beriladi.",
      ],
    },
    content: [
      {
        type: "p",
        text: "Oʻzbekistonda rasmiy maoshga ega jismoniy shaxslarning Jismoniy shaxslar daromad soligʻi (JShDS) odatda har oy 12% stavkada ushlab qolinadi. Biroq muayyan daromad toifalari bu soliqdan toʻliq yoki qisman ozod qilinadi. Yana ham yaxshisi, agar bu summalardan soliq allaqachon toʻlangan boʻlsa, uning bir qismini qonuniy ravishda qaytarib olishingiz mumkin.",
      },
      { type: "h2", text: "Asosiy JShDS imtiyozlari va ozod qilishlar" },
      {
        type: "ul",
        items: [
          "Taʼlim xarajatlari: oʻzingiz, turmush oʻrtogʻingiz yoki bolalaringiz (26 yoshgacha) uchun Oʻzbekiston oliy taʼlim muassasalaridagi oʻquv haqi, jumladan taʼlim kreditlari va ularning foizlari",
          "Xususiy maktablar va bogʻchalar: ota-onalar yoki farzandlikka olganlar nodavlat maktabgacha taʼlim muassasalari va maktablar xizmatlari uchun bola boshiga oyiga 3 mln soʻmgacha imtiyoz olishlari mumkin",
          "Ipoteka foizlari: ipoteka kreditlari va hisoblangan foizlarga toʻlangan summalar — yiliga Pensiyaning eng kam miqdori (MROT)ning 80 baravarigacha, agar uy-joy byudjet subsidiyasi bilan olingan boʻlsa",
          "Pensiya jamgʻarmalar: Xalq bankidagi Individual jamgʻarib boriladigan pensiya hisobvaraqlariga (INPS) ixtiyoriy ravishda yoʻnaltirilgan maosh summalari",
          "Investitsiya hisobvaraqlari: aksiyalar sotib olish uchun individual investitsiya hisobvaraqlariga yoʻnaltirilgan maosh, yiliga MROTning 100 baravarigacha (mablagʻlar 12 oyga blokirovka qilinadi)",
          "Ish beruvchi tomonidan beriladigan imtiyozlar: belgilangan limitlar doirasidagi muayyan moddiy yordam, tibbiy kompensatsiya, bolalar lagerlari yoʻllanmalari va naqd boʻlmagan sovgʻalar",
        ],
      },
      { type: "h2", text: "JShDS qaytarimini qanday olish mumkin" },
      {
        type: "p",
        text: "Bu imtiyozlardan foydalanishning ikki asosiy usuli mavjud: ish beruvchi bilan uch tomonlama shartnoma orqali bevosita ozod qilish yoki ortiqcha toʻlangan JShDS uchun yillik qaytarimni soʻrash. Yillik qaytarish jarayonini toʻliq onlayn tarzda yakunlash mumkin.",
      },
      { type: "h3", text: "1-qadam. Yillik daromad deklaratsiyangizni topshiring" },
      {
        type: "ul",
        items: [
          "Qachon: hisobot yilidan keyingi yilning 1 aprelgacha (masalan, 2024 yil daromadi uchun 2025 yil 1 aprelgacha)",
          "Qayerda: my3.soliq.uz orqali elektron tarzda Elektron raqamli imzo (ERI) yordamida",
          "Talab qilinadi: barcha ish joylaridan daromad maʼlumotnomalari, tegishli shartnomalarning skan nusxalari (universitet, xususiy maktab yoki ipoteka shartnomasi) va toʻlov hujjatlari",
          "«Soliq imtiyozlari» boʻlimida tegishli imtiyoz toifasini tanlang va tasdiqlovchi hujjatlarni biriktiring — tizim qaytariladigan summani avtomatik hisoblaydi",
        ],
      },
      { type: "h3", text: "2-qadam. Qaytarish arizasini topshiring" },
      {
        type: "ul",
        items: [
          "Qachon: deklaratsiyangiz muvaffaqiyatli topshirilgandan va qayta ishlangandan soʻng",
          "Qayerda: my3.soliq.uz yoki my.soliq.uz orqali",
          "Qaytarish oʻtkazmasi uchun bank karta raqami, tranzit hisobvaraq va bank MFOsini kiriting",
          "Qaytarish odatda koʻrsatilgan bank kartangizga 15 kun ichida oʻtkaziladi",
        ],
      },
      {
        type: "blockquote",
        text: "Soliq imtiyozlarini ishlatish murakkab boʻlishi mumkin, ammo bu ozod qilishlarni tushunish sezilarli tejashga olib keladi. Deklaratsiyani tayyorlashda, imtiyozga huquq baholashda yoki muvofiqlikni taʼminlashda yordam kerak boʻlsa, Advizen ekspertlari yordam berishga tayyor.",
      },
    ],
      faq: [
      {
        question: "O'zbekistonda JShDSdan ozodlik uchun qanday ta'lim xarajatlari hisobga olinadi?",
        answer: "O'zbekiston oliy ta'lim muassasalarida o'zingiz, turmush o'rtog'ingiz yoki bolalaringiz (26 yoshgacha) uchun to'langan o'quv haqi JShDSdan ozod etiladi — jumladan ta'lim kreditlari va ularning foizlari. Ota-onalar yoki farzandlikka olganlar nodavlat maktabgacha ta'lim muassasalari va xususiy maktablar xizmatlari uchun bola boshiga oyiga 3 000 000 so'mgacha ozodlik olishlari ham mumkin. Imtiyozlar standart 12% JShDS stavkasi doirasida qo'llaniladi.",
      },
      {
        question: "O'zbekistonda JShDS qaytarimini talab qilish muddati qanday?",
        answer: "Yillik daromad deklaratsiyasi hisobot yilidan keyingi yilning 1 aprelgacha topshirilishi shart (masalan, 2024 yil daromadi uchun 2025 yil 1 aprelgacha). Deklaratsiya my3.soliq.uz orqali Elektron raqamli imzo (ERI) yordamida elektron tarzda topshiriladi. «Soliq imtiyozlari» bo'limida tasdiqlovchi hujjatlar (shartnomalar va to'lov hujjatlari) biriktiriladi — tizim qaytariladigan summani avtomatik hisoblaydi. Qaytarish odatda ariza topshirilganidan 15 kun ichida bank kartasiga o'tkaziladi.",
      },
      {
        question: "O'zbekistonda ipoteka to'lovlari JShDS imtiyoziga ega bo'la oladimi?",
        answer: "Ha. Uy-joy byudjet subsidiyasi bilan olingan taqdirda, ipoteka kreditlari va hisoblangan foizlarga to'langan summalar yiliga Pensiyaning eng kam miqdori (MROT)ning 80 baravarigacha JShDSdan ozod etiladi. Imtiyoz ERI yordamida my3.soliq.uz saytida yillik daromad deklaratsiyasi orqali talab qilinadi.",
      },
      {
        question: "O'zbekistonda boshqa qanday daromad toifalari JShDSdan ozod etilgan?",
        answer: "Qo'shimcha JShDS imtiyozlari: Xalq bankidagi Individual jamg'arib boriladigan pensiya hisobvaraqlariga (INPS) ixtiyoriy ravishda yo'naltirilgan maosh summalari; aksiyalar sotib olish uchun individual investitsiya hisobvaraqlariga yo'naltirilgan maosh (yiliga MROTning 100 baravarigacha, mablag'lar 12 oyga blokirovka qilinadi); belgilangan limitlar doirasidagi ish beruvchi tomonidan beriladigan imtiyozlar — jumladan moddiy yordam, tibbiy kompensatsiya, bolalar lagerlari yo'llanmalari va naqd bo'lmagan sovg'alar.",
      },
    ],
    howTo: {
      name: "O'zbekistonda ta'lim xarajatlari uchun JShDS qaytarimini olish tartibi",
      description: "O'zbekistonda ta'lim, ipoteka va pensiya xarajatlari bo'yicha ortiqcha to'langan JShDSni my3.soliq.uz orqali qaytarishning 2 bosqichli onlayn jarayoni.",
      steps: [
        {
          name: "Yillik daromad deklaratsiyangizni topshiring",
          text: "Hisobot yilidan keyingi yilning 1 aprelgacha my3.soliq.uz saytida Elektron raqamli imzo (ERI) yordamida deklaratsiya topshiring. Barcha ish joylaridan daromad ma'lumotnomalarini, universitet, xususiy maktab yoki ipoteka shartnomalarining skan nusxalarini va to'lov hujjatlarini biriktiring. «Soliq imtiyozlari» bo'limida tegishli imtiyoz toifasini tanlang — tizim qaytariladigan summani avtomatik hisoblaydi.",
        },
        {
          name: "Qaytarish arizasini topshiring",
          text: "Deklaratsiya qayta ishlangandan so'ng my3.soliq.uz yoki my.soliq.uz orqali qaytarish arizasini topshiring. Bank karta raqami, tranzit hisobvaraq va bank MFO kodini kiriting. Qaytarish odatda 15 kun ichida ko'rsatilgan bank kartasiga o'tkaziladi.",
        },
      ],
    },
  },
};

export default article;
