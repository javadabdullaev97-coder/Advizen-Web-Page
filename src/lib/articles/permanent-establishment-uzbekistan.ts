import type { LocalizedArticle } from "../publications";

const article: Record<string, LocalizedArticle> = {
  en: {
    subtitle: "Essential insights for foreign investors to understand and fulfil Permanent Establishment requirements in Uzbekistan.",
    author: "Advizen Tax Practice",
    readTime: "7 min read",
    inShort: {
      figures: [
        { value: "12 months", label: "Window within which at least 183 days of services through employees or other personnel create a PE" },
        { value: "183 days", label: "Duration of a construction, assembly or installation project, or of services through employees or other personnel, that creates a PE" },
        { value: "10%", label: "Tax that may apply to a PE's after-tax net profit, which is treated as dividends; treaties may lower it" },
        { value: "10% of costs", label: "Margin cap for providing foreign personnel without creating a PE — one of three conditions that must all be met" },
      ],
      points: [
        "A foreign company creates a permanent establishment in Uzbekistan when it has a fixed place through which it conducts business there, such as an office, branch, factory, workshop or laboratory.",
        "A dependent agent who consistently concludes contracts for the foreign company, or a foreign insurer collecting premiums through a dependent agent, also creates a PE.",
        "Using facilities only to store or display goods, or keeping a place only to purchase goods or collect information for preparatory purposes, does not by itself create a PE.",
        "Once a PE exists, the foreign company must register with the local tax authorities, and the PE's income is subject to Uzbek corporate income tax.",
      ],
    },
    content: [
      {
        type: "p",
        text: "For foreign companies looking to operate in Uzbekistan, understanding the concept of a Permanent Establishment (PE) is fundamental. Essentially, a PE is established when a foreign company has a fixed place through which it conducts business activities within Uzbekistan. This can be a physical location or certain types of ongoing activities within the country. The \"more than one month\" test sometimes quoted in this context does not come from the PE rules: it is in Article 32 of the Tax Code, which treats a workplace created for more than one month as stationary for the purposes of separate subdivisions (local branches) of Uzbek legal entities. Article 36, which defines a PE, sets no such one-month threshold.",
      },
      { type: "h2", text: "What might be considered a PE?" },
      {
        type: "p",
        text: "Various activities and presences can lead to PE status:",
      },
      {
        type: "ul",
        items: [
          "Physical Locations: any type of office (management, branch, bureau), a factory, workshop, or laboratory",
          "Production & Sales: manufacturing, processing, or packaging goods, or using a warehouse as a sales point",
          "Resource Extraction: activities related to mining, oil or gas wells, quarries, or any other natural resource extraction",
          "Long-Term Projects & Services: construction, assembly, or installation projects lasting over 183 days; or providing services, including consulting, through employees or other personnel engaged for that purpose for at least 183 days within any consecutive 12-month period, on the same or a connected project",
          "Insurance & Agency: foreign insurance companies collecting premiums through a dependent agent, or anyone consistently concluding contracts on behalf of the foreign company",
        ],
      },
      { type: "h2", text: "When is a PE not created?" },
      {
        type: "p",
        text: "Certain activities are generally considered preparatory or auxiliary and do not automatically lead to a PE:",
      },
      {
        type: "ul",
        items: [
          "Storage and Display: using facilities solely for storing or displaying goods",
          "Limited Activities: maintaining a fixed place of business purely for purchasing goods or collecting information for preparatory purposes",
          "Personnel Provision (with conditions): providing foreign personnel to another legal entity for work in Uzbekistan does not create a PE if all three conditions are met at once — the personnel act on behalf and in the interests of the entity they are provided to; your company is not responsible for the results of their work; and your income from providing the personnel does not exceed 10% of your total costs of providing it for the tax period (Tax Code, Article 36, part 11)",
        ],
      },
      { type: "h2", text: "Starting operations and registration" },
      {
        type: "p",
        text: "If your activities indicate a PE, you are generally considered to have started operating in Uzbekistan on the earliest of several key dates — such as the signing of relevant contracts or the arrival of personnel for contract fulfilment. Once a PE is established, your foreign company is required to register with the local tax authorities.",
      },
      { type: "h2", text: "Taxation and deductible expenses" },
      {
        type: "ul",
        items: [
          "Income generated by your PE in Uzbekistan is subject to local corporate income tax",
          "The tax base is generally your PE's total income, considering specific deductions for business-related expenses",
          "Certain payments from the PE to your foreign head office or other related entities may not be deductible",
          "Net profit of the PE, after tax, is treated as dividends and may be subject to a 10% tax — though international tax treaties may offer lower rates",
        ],
      },
      {
        type: "blockquote",
        text: "The PE rules in Uzbekistan closely follow OECD principles but with local specificities. Foreign companies should obtain a professional assessment before commencing operations to avoid unexpected tax exposure.",
      },
      { type: "h2", text: "Practical implications" },
      {
        type: "p",
        text: "Understanding whether your activities create a PE in Uzbekistan is a critical step in any market entry analysis. The consequences of unregistered PE activity include back-taxes, penalties, and reputational risk. A proactive assessment of your operational footprint against the PE thresholds set out in Uzbekistan's Tax Code and relevant double tax treaties is strongly recommended before committing to a business structure.",
      },
    ],
    faq: [
      {
        question: "What activities create a Permanent Establishment in Uzbekistan?",
        answer: "A Permanent Establishment (PE) arises in Uzbekistan when a foreign company has a permanent place of activity through which it carries on business in Uzbekistan, in whole or in part, including any type of office, factory, workshop, or laboratory. PE status is also triggered by: construction, assembly, or installation projects lasting more than 183 days; providing services through employees or other personnel engaged for that purpose for at least 183 days within any consecutive 12-month period; dependent agents who consistently conclude contracts on behalf of the foreign company; and foreign insurance companies collecting premiums through a dependent agent.",
      },
      {
        question: "What activities do NOT create a Permanent Establishment in Uzbekistan?",
        answer: "Certain preparatory and auxiliary activities do not automatically trigger a PE in Uzbekistan: using facilities solely for storing or displaying goods; maintaining a fixed place purely for purchasing goods or collecting information for preparatory purposes; and providing foreign personnel to another legal entity for work in Uzbekistan, provided all three conditions of Article 36, part 11 of the Tax Code are met: the personnel act on behalf and in the interests of the entity they are provided to, the foreign company is not responsible for the results of their work, and its income from providing them does not exceed 10% of its total costs of providing that personnel for the tax period.",
      },
      {
        question: "What taxes apply to a Permanent Establishment in Uzbekistan?",
        answer: "Income generated by a PE in Uzbekistan is subject to local corporate income tax. The tax base is generally the PE's total income after deductions for business-related expenses. Note that certain payments from the PE to the foreign head office or related parties may not be deductible. The PE's net profit after tax is treated as dividends and may be subject to an additional 10% tax — although applicable double tax treaties may reduce this rate.",
      },
      {
        question: "What are the consequences of an unregistered Permanent Establishment in Uzbekistan?",
        answer: "Operating with an unregistered PE in Uzbekistan can result in back-tax assessments covering all periods of unregistered activity, financial penalties, and reputational risk. Once PE status is established, the foreign company is legally required to register with local tax authorities. The start date of PE activity is typically the earliest of: signing the relevant contract, commencement of work, or arrival of personnel — so registration obligations can arise even before substantial operations begin.",
      },
    ],
  },
  ru: {
    subtitle: "Ключевые ориентиры для иностранных инвесторов в понимании и выполнении требований к Постоянному учреждению в Узбекистане.",
    author: "Налоговая практика Advizen",
    readTime: "7 мин чтения",
    inShort: {
      figures: [
        { value: "12 месяцев", label: "Период, в пределах которого оказание услуг через работников или иной персонал не менее 183 дней создаёт ПУ" },
        { value: "183 дня", label: "Длительность строительного, монтажного или установочного проекта либо услуг через работников или иной персонал, создающая ПУ" },
        { value: "10%", label: "Ставка, которая может применяться к чистой прибыли ПУ после налогообложения как к дивидендам; соглашения могут её снижать" },
        { value: "10% расходов", label: "Предел дохода от предоставления иностранного персонала без образования ПУ — одно из трёх условий, которые должны выполняться одновременно" },
      ],
      points: [
        "Иностранная компания образует постоянное учреждение в Узбекистане, когда у неё есть постоянное место, через которое она ведёт деятельность, — например, офис, филиал, завод, мастерская или лаборатория.",
        "ПУ также создаёт зависимый агент, систематически заключающий договоры от имени иностранной компании, или иностранная страховая компания, собирающая премии через зависимого агента.",
        "Использование помещений только для хранения или демонстрации товаров, а также место деятельности только для закупки товаров или сбора информации в подготовительных целях само по себе не создаёт ПУ.",
        "После возникновения ПУ иностранная компания обязана встать на учёт в местных налоговых органах, а доход ПУ облагается узбекским налогом на прибыль.",
      ],
    },
    content: [
      {
        type: "p",
        text: "Для иностранных компаний, планирующих деятельность в Узбекистане, понимание концепции постоянного учреждения (ПУ) принципиально. По сути, ПУ возникает, когда у иностранной компании есть постоянное место, через которое она ведёт предпринимательскую деятельность в Узбекистане. Это может быть физическая локация или определённые виды длящейся деятельности в стране. Критерий «более одного месяца», который иногда приводят в этом контексте, взят не из правил о ПУ: он содержится в статье 32 Налогового кодекса, по которой рабочее место, создаваемое на срок более одного месяца, считается стационарным для целей обособленных подразделений (местных филиалов) узбекских юридических лиц. Статья 36, определяющая ПУ, такого месячного порога не устанавливает.",
      },
      { type: "h2", text: "Что может считаться ПУ?" },
      {
        type: "p",
        text: "К статусу ПУ могут привести различные виды деятельности и присутствия:",
      },
      {
        type: "ul",
        items: [
          "Физические локации: любой тип офиса (управление, филиал, бюро), завод, мастерская или лаборатория",
          "Производство и продажи: производство, переработка или упаковка товаров, либо использование склада как точки продаж",
          "Добыча ресурсов: деятельность, связанная с добычей полезных ископаемых, нефтяных или газовых скважин, карьеров или иных природных ресурсов",
          "Длительные проекты и услуги: строительные, монтажные или установочные проекты длительностью более 183 дней; либо оказание услуг, включая консультационные, через своих служащих или иной нанимаемый для этих целей персонал на протяжении не менее 183 дней в течение любого последовательного 12-месячного периода по одному или связанным проектам",
          "Страхование и агентирование: иностранные страховые компании, собирающие премии через зависимого агента, или лица, систематически заключающие договоры от имени иностранной компании",
        ],
      },
      { type: "h2", text: "Когда ПУ не возникает?" },
      {
        type: "p",
        text: "Определённые виды деятельности обычно рассматриваются как подготовительные или вспомогательные и сами по себе не создают ПУ:",
      },
      {
        type: "ul",
        items: [
          "Хранение и демонстрация: использование помещений исключительно для хранения или демонстрации товаров",
          "Ограниченная деятельность: содержание постоянного места деятельности исключительно для закупки товаров или сбора информации в подготовительных целях",
          "Предоставление персонала (с условиями): предоставление иностранного персонала другому юридическому лицу для работы в Узбекистане не создаёт ПУ при одновременном выполнении трёх условий — персонал действует от имени и в интересах юридического лица, которому он предоставлен; ваша компания не несёт ответственности за результаты работы этого персонала; ваш доход от предоставления персонала не превышает 10% общей суммы затрат на его предоставление за налоговый период (часть 11 статьи 36 Налогового кодекса)",
        ],
      },
      { type: "h2", text: "Начало деятельности и регистрация" },
      {
        type: "p",
        text: "Если ваша деятельность указывает на ПУ, обычно считается, что вы начали деятельность в Узбекистане с наиболее ранней из ряда ключевых дат — например, подписания соответствующих договоров или прибытия персонала для выполнения контракта. После возникновения ПУ ваша иностранная компания обязана встать на учёт в местных налоговых органах.",
      },
      { type: "h2", text: "Налогообложение и вычитаемые расходы" },
      {
        type: "ul",
        items: [
          "Доход вашего ПУ в Узбекистане облагается местным налогом на прибыль",
          "Налоговая база — обычно совокупный доход ПУ с учётом определённых вычетов на расходы, связанные с деятельностью",
          "Отдельные платежи от ПУ в адрес иностранной головной компании или связанных лиц могут быть невычитаемыми",
          "Чистая прибыль ПУ после налогообложения рассматривается как дивиденды и может облагаться по ставке 10% — международные налоговые соглашения могут предусматривать пониженные ставки",
        ],
      },
      {
        type: "blockquote",
        text: "Правила ПУ в Узбекистане в целом следуют принципам ОЭСР, но имеют локальную специфику. Иностранным компаниям следует получить профессиональную оценку до начала деятельности, чтобы избежать неожиданных налоговых последствий.",
      },
      { type: "h2", text: "Практические последствия" },
      {
        type: "p",
        text: "Понимание, создаёт ли ваша деятельность ПУ в Узбекистане, — критичный этап анализа выхода на рынок. Последствия незарегистрированной деятельности ПУ включают доначисления налогов, пени и репутационные риски. До принятия решения о бизнес-структуре настоятельно рекомендуется проактивно оценить операционные следы по порогам ПУ, установленным Налоговым кодексом Узбекистана и соответствующими соглашениями об избежании двойного налогообложения.",
      },
    ],
    faq: [
      {
        question: "Какие виды деятельности создают Постоянное учреждение в Узбекистане?",
        answer: "Постоянное учреждение (ПУ) возникает в Узбекистане, когда у иностранной компании есть постоянное место деятельности, через которое она полностью или частично ведёт предпринимательскую деятельность в Узбекистане, включая любой тип офиса, завода, мастерской или лаборатории. Статус ПУ также возникает при: строительных, монтажных или установочных проектах длительностью более 183 дней; оказании услуг через работников или иной нанимаемый для этих целей персонал не менее 183 дней в течение любого последовательного 12-месячного периода; наличии зависимых агентов, систематически заключающих договоры от имени иностранной компании; иностранных страховых компаниях, собирающих премии через зависимого агента.",
      },
      {
        question: "Какие виды деятельности НЕ создают Постоянное учреждение в Узбекистане?",
        answer: "Ряд подготовительных и вспомогательных видов деятельности автоматически не влечёт возникновения ПУ в Узбекистане: использование помещений исключительно для хранения или демонстрации товаров; содержание постоянного места деятельности исключительно для закупки товаров или сбора информации в подготовительных целях; предоставление иностранного персонала другому юридическому лицу для работы в Узбекистане при одновременном выполнении трёх условий части 11 статьи 36 Налогового кодекса: персонал действует от имени и в интересах юридического лица, которому он предоставлен, иностранная компания не несёт ответственности за результаты его работы, а её доход от предоставления персонала не превышает 10% общей суммы затрат на его предоставление за налоговый период.",
      },
      {
        question: "Какие налоги применяются к Постоянному учреждению в Узбекистане?",
        answer: "Доходы ПУ в Узбекистане облагаются местным налогом на прибыль. Налоговая база — как правило, совокупный доход ПУ за вычетом расходов, связанных с деятельностью. Следует учитывать, что отдельные платежи от ПУ в адрес иностранной головной компании или связанных лиц могут быть невычитаемыми. Чистая прибыль ПУ после налогообложения рассматривается как дивиденды и может дополнительно облагаться по ставке 10%, хотя применимые соглашения об избежании двойного налогообложения могут снижать эту ставку.",
      },
      {
        question: "Каковы последствия незарегистрированного Постоянного учреждения в Узбекистане?",
        answer: "Деятельность через незарегистрированное ПУ в Узбекистане грозит доначислением налогов за весь период незарегистрированной деятельности, финансовыми санкциями и репутационными рисками. После возникновения статуса ПУ иностранная компания обязана встать на учёт в местных налоговых органах. Датой начала деятельности ПУ обычно считается наиболее ранняя из дат: подписание соответствующего договора, начало работ или прибытие персонала — поэтому обязанность по регистрации может возникнуть ещё до начала полноценных операций.",
      },
    ],
  },
  uz: {
    subtitle: "Chet ellik investorlar uchun Oʻzbekistondagi doimiy muassasa talablarini tushunish va bajarish uchun muhim maslahatlar.",
    author: "Advizen soliq amaliyoti",
    readTime: "7 daqiqa oʻqish",
    inShort: {
      figures: [
        { value: "12 oy", label: "Xodimlar yoki boshqa personal orqali kamida 183 kun xizmat koʻrsatish DM yaratadigan davr" },
        { value: "183 kun", label: "DM yaratadigan qurilish, montaj yoki oʻrnatish loyihasi yoxud xodimlar yoki boshqa personal orqali xizmat koʻrsatish muddati" },
        { value: "10%", label: "Dividend sifatida koʻriladigan DMning soliqdan keyingi sof foydasiga qoʻllanishi mumkin boʻlgan soliq; shartnomalar uni pasaytirishi mumkin" },
        { value: "Xarajatlarning 10%", label: "Chet el xodimlarini DM yaratmasdan taqdim etish uchun daromad chegarasi — bir vaqtda bajarilishi shart boʻlgan uchta shartdan biri" },
      ],
      points: [
        "Chet el kompaniyasi Oʻzbekistonda biznes faoliyatini yuritadigan doimiy joyga — masalan, ofis, filial, zavod, ustaxona yoki laboratoriyaga — ega boʻlganda doimiy muassasa yuzaga keladi.",
        "Chet el kompaniyasi nomidan muntazam ravishda shartnomalar tuzadigan bogʻliq agent yoki bogʻliq agent orqali sugʻurta mukofotlarini yigʻadigan chet el sugʻurta kompaniyasi ham DM yaratadi.",
        "Obyektlardan faqat tovarlarni saqlash yoki namoyish qilish uchun foydalanish, shuningdek faqat tovar sotib olish yoki tayyorgarlik maqsadida maʼlumot toʻplash uchun joy saqlash oʻz-oʻzidan DM yaratmaydi.",
        "DM yuzaga kelgach, chet el kompaniyasi mahalliy soliq organlarida roʻyxatdan oʻtishi shart, DM daromadi esa Oʻzbekiston foyda soligʻiga tortiladi.",
      ],
    },
    content: [
      {
        type: "p",
        text: "Oʻzbekistonda faoliyat yuritmoqchi boʻlgan chet el kompaniyalari uchun doimiy muassasa (DM) tushunchasini bilish asosiydir. Mohiyatan, DM chet el kompaniyasi Oʻzbekistonda biznes faoliyatini yuritish uchun doimiy joyga ega boʻlganda paydo boʻladi. Bu jismoniy joy yoki mamlakatda davom etayotgan muayyan turdagi faoliyat boʻlishi mumkin. Bu borada baʼzan keltiriladigan «bir oydan ortiq» mezoni DM qoidalaridan olinmagan: u Soliq kodeksining 32-moddasida boʻlib, unga koʻra bir oydan ortiq muddatga yaratiladigan ish joyi Oʻzbekiston yuridik shaxslarining alohida boʻlinmalari (mahalliy filiallari) maqsadlarida statsionar hisoblanadi. DMni belgilaydigan 36-modda bunday bir oylik chegarani belgilamaydi.",
      },
      { type: "h2", text: "DM deb hisoblanishi mumkin boʻlgan narsalar" },
      {
        type: "p",
        text: "Turli faoliyat turlari va mavjudlik shakllari DM maqomiga olib kelishi mumkin:",
      },
      {
        type: "ul",
        items: [
          "Jismoniy joylashuv: har qanday turdagi ofis (boshqaruv, filial, byuro), zavod, ustaxona yoki laboratoriya",
          "Ishlab chiqarish va sotish: tovarlarni ishlab chiqarish, qayta ishlash yoki qadoqlash, yoki omborni sotuv nuqtasi sifatida ishlatish",
          "Resurs qazib olish: togʻ-kon, neft yoki gaz quduqlari, karyerlar yoki har qanday tabiiy resurslarni qazib olish bilan bogʻliq faoliyat",
          "Uzoq muddatli loyihalar va xizmatlar: 183 kundan ortiq davom etadigan qurilish, montaj yoki oʻrnatish loyihalari; yoki bitta yoxud bogʻliq loyihalar boʻyicha istalgan ketma-ket 12 oylik davr ichida kamida 183 kun davomida oʻz xodimlari yoki shu maqsadda yollangan boshqa personal orqali xizmatlar, shu jumladan konsalting xizmatlarini koʻrsatish",
          "Sugʻurta va agentlik: bogʻliq agent orqali sugʻurta mukofotlarini yigʻuvchi chet el sugʻurta kompaniyalari yoki chet el kompaniyasi nomidan muntazam ravishda shartnomalar tuzuvchi shaxslar",
        ],
      },
      { type: "h2", text: "DM qachon paydo boʻlmaydi?" },
      {
        type: "p",
        text: "Ayrim faoliyat turlari odatda tayyorgarlik yoki yordamchi xarakterga ega va avtomatik ravishda DMga olib kelmaydi:",
      },
      {
        type: "ul",
        items: [
          "Saqlash va namoyish: obyektlarni faqat tovarlarni saqlash yoki namoyish qilish uchun ishlatish",
          "Cheklangan faoliyat: faqat tovar sotib olish yoki tayyorgarlik maqsadida maʼlumot toʻplash uchun doimiy biznes joyini saqlash",
          "Xodimlar taqdim etish (shartlar bilan): chet el xodimlarini Oʻzbekistonda ishlash uchun boshqa yuridik shaxsga taqdim etish uchta shart bir vaqtda bajarilganda DM yaratmaydi — xodimlar oʻzlari taqdim etilgan yuridik shaxs nomidan va uning manfaatlarida harakat qiladi; kompaniyangiz ularning ish natijalari uchun javobgar emas; xodimlarni taqdim etishdan oladigan daromadingiz soliq davri uchun ularni taqdim etish jami xarajatlarining 10% dan oshmaydi (Soliq kodeksi 36-moddasining 11-qismi)",
        ],
      },
      { type: "h2", text: "Faoliyatni boshlash va roʻyxatga olish" },
      {
        type: "p",
        text: "Agar faoliyatingiz DMga ishora qilsa, odatda Oʻzbekistonda bir nechta asosiy sanalardan eng erta sanasida — masalan, tegishli shartnomalarni imzolash yoki shartnomani bajarish uchun xodimlar kelishi sanasida — faoliyat boshlangan deb hisoblanadi. DM paydo boʻlganda, chet el kompaniyangiz mahalliy soliq organlarida roʻyxatdan oʻtishi shart.",
      },
      { type: "h2", text: "Soliq solish va chegirib tashlanadigan xarajatlar" },
      {
        type: "ul",
        items: [
          "Sizning DMingiz tomonidan Oʻzbekistonda yaratilgan daromad mahalliy foyda soligʻiga tortiladi",
          "Soliq bazasi odatda DMning umumiy daromadi boʻlib, biznes bilan bogʻliq xarajatlar uchun muayyan chegirmalar hisobga olinadi",
          "DMdan chet el bosh ofisi yoki boshqa bogʻliq shaxslarga ayrim toʻlovlar chegirib tashlanmasligi mumkin",
          "Soliqdan keyingi DMning sof foydasi dividend sifatida koʻrib chiqiladi va 10% soliqqa tortilishi mumkin — xalqaro soliq shartnomalari pastroq stavkalarni taklif qilishi mumkin",
        ],
      },
      {
        type: "blockquote",
        text: "Oʻzbekistonda DM qoidalari OECD tamoyillariga juda yaqin, biroq mahalliy oʻziga xosliklarga ega. Chet el kompaniyalari kutilmagan soliq oqibatlaridan qochish uchun faoliyatni boshlashdan oldin professional baholash olishi kerak.",
      },
      { type: "h2", text: "Amaliy oqibatlar" },
      {
        type: "p",
        text: "Faoliyatingiz Oʻzbekistonda DM yaratadimi degan savolni tushunish har qanday bozorga kirish tahlilida muhim qadamdir. Roʻyxatga olinmagan DM faoliyatining oqibatlari orasida soliq qoʻshib hisoblash, jarimalar va obroʻga zarar bor. Biznes tuzilmasini tanlashdan oldin faoliyatingizni Oʻzbekiston Soliq kodeksi va tegishli qoʻsh soliqqa tortishni bartaraf etish toʻgʻrisidagi shartnomalar belgilagan DM mezonlari asosida oldindan baholash tavsiya etiladi.",
      },
    ],
    faq: [
      {
        question: "Qaysi faoliyat Oʻzbekistonda doimiy muassasa yaratadi?",
        answer: "Chet el kompaniyasi Oʻzbekistonda tadbirkorlik faoliyatini toʻliq yoki qisman amalga oshiradigan doimiy faoliyat joyiga ega boʻlganda doimiy muassasa (DM) paydo boʻladi, shu jumladan har qanday turdagi ofis, zavod, ustaxona yoki laboratoriya. DM maqomi quyidagi hollarda ham yuzaga keladi: 183 kundan ortiq davom etadigan qurilish, montaj yoki oʻrnatish loyihalari; istalgan ketma-ket 12 oylik davr ichida kamida 183 kun davomida xodimlar yoki shu maqsadda yollangan boshqa personal orqali xizmatlar koʻrsatish; chet el kompaniyasi nomidan muntazam ravishda shartnomalar tuzadigan bogʻliq agentlar; bogʻliq agent orqali sugʻurta mukofotlarini yigʻuvchi chet el sugʻurta kompaniyalari.",
      },
      {
        question: "Qaysi faoliyat Oʻzbekistonda doimiy muassasa yaratmaydi?",
        answer: "Bir qator tayyorgarlik va yordamchi faoliyat turlari Oʻzbekistonda avtomatik ravishda DM yaratmaydi: obyektlarni faqat tovarlarni saqlash yoki namoyish qilish uchun ishlatish; faqat tovar sotib olish yoki tayyorgarlik maqsadida maʼlumot toʻplash uchun doimiy biznes joyini saqlash; chet el xodimlarini Oʻzbekistonda ishlash uchun boshqa yuridik shaxsga taqdim etish — agar Soliq kodeksi 36-moddasi 11-qismining uchala sharti bir vaqtda bajarilsa: xodimlar oʻzlari taqdim etilgan yuridik shaxs nomidan va uning manfaatlarida harakat qiladi, chet el kompaniyasi ularning ish natijalari uchun javobgar emas, uning xodimlarni taqdim etishdan oladigan daromadi esa soliq davri uchun ularni taqdim etish jami xarajatlarining 10% dan oshmaydi.",
      },
      {
        question: "Oʻzbekistondagi doimiy muassasaga qanday soliqlar qoʻllaniladi?",
        answer: "Oʻzbekistondagi DM tomonidan yaratilgan daromad mahalliy foyda soligʻiga tortiladi. Soliq bazasi odatda DMning faoliyat bilan bogʻliq xarajatlar chegirib tashlanganidan keyingi umumiy daromadi hisoblanadi. Eʼtibor bering: DMdan chet el bosh ofisi yoki bogʻliq shaxslarga ayrim toʻlovlar chegirib tashlanmasligi mumkin. DMning soliqdan keyingi sof foydasi dividend sifatida koʻriladi va qoʻshimcha 10% soliqqa tortilishi mumkin, garchi qoʻllanadigan qoʻsh soliqqa tortishni bartaraf etish toʻgʻrisidagi shartnomalar ushbu stavkani kamaytirishi mumkin.",
      },
      {
        question: "Roʻyxatga olinmagan doimiy muassasaning oqibatlari qanday?",
        answer: "Oʻzbekistonda roʻyxatga olinmagan DM orqali faoliyat olib borish roʻyxatga olinmagan barcha davr uchun soliq qoʻshib hisoblash, moliyaviy jarimalar va obroʻga zarar koʻrishga olib kelishi mumkin. DM maqomi yuzaga kelgandan soʻng chet el kompaniyasi mahalliy soliq organlarida roʻyxatdan oʻtishi shart. DM faoliyatining boshlanish sanasi odatda eng erta sanadan hisoblanadi: tegishli shartnomani imzolash, ishlarning boshlanishi yoki xodimlarning kelishi — shuning uchun roʻyxatdan oʻtish majburiyati toʻliq faoliyat boshlanishidan oldin ham yuzaga kelishi mumkin.",
      },
    ],
  },
};

export default article;
