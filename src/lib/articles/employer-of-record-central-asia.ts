import type { LocalizedArticle } from "../publications";

const article: Record<string, LocalizedArticle> = {
  en: {
    subtitle: "How foreign companies can hire and pay talent in Uzbekistan — without incorporating a local entity.",
    author: "Advizen HR Advisory",
    readTime: "8 min read",
    inShort: {
      figures: [
        { value: "3 weeks – 6 months", label: "Time to incorporate a local entity, depending on the jurisdiction" },
        { value: "1–15", label: "Team size for which the per-employee EoR fee is most cost-efficient" },
        { value: "20+", label: "Long-term headcount at which a subsidiary or representative office typically makes more commercial sense" },
        { value: "3", label: "Countries covered by Advizen's EoR service: Uzbekistan, Kazakhstan and Kyrgyzstan" },
      ],
      points: [
        "An Employer of Record is a local legal entity that employs workers on behalf of a foreign company: it signs the employment contract, runs payroll, withholds income tax and social contributions, and handles labour law compliance.",
        "The foreign company keeps full day-to-day control over the employee's work, tasks and reporting lines.",
        "Uzbekistan's labour code requires every employment relationship to be formalised by a written contract with an employer that holds a valid tax ID, so informal hiring or a service contract for what is in fact employment carries legal risk.",
        "An EoR can onboard an employee within days and turns entity setup and annual compliance costs into a per-employee service fee.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "You have found the right people. They are based in Tashkent — or Almaty, or Bishkek — and you need them working for your company as soon as possible. The problem is that you have no legal entity in the region, and setting one up will take months. This is precisely the situation that Employer of Record was built to solve.",
      },
      { type: "h2" as const, text: "The problem every global company faces" },
      {
        type: "p" as const,
        text: "Expanding into Central Asia is no longer a question of whether — it is a question of how fast. The region is home to a rapidly growing pool of skilled engineers, sales professionals, and operational talent, and companies across Europe, the Middle East, and Southeast Asia are actively competing for them. But the regulatory environment is layered: each country has its own labour code, tax registration requirements, mandatory social contributions, and HR compliance obligations. Without a registered legal entity, you cannot legally employ anyone — and incorporation, depending on the jurisdiction, takes anywhere from three weeks to six months.",
      },
      {
        type: "p" as const,
        text: "The result is a gap. You have found the talent. The talent is ready. But the legal infrastructure is not there yet. Businesses that cannot bridge this gap fast enough lose candidates to competitors who can.",
      },
      { type: "h2" as const, text: "What is an employer of record?" },
      {
        type: "p" as const,
        text: "An Employer of Record — often called an EoR — is a local legal entity that employs workers on behalf of a foreign company. The EoR becomes the legal employer on paper: it signs the employment contract, processes payroll, withholds income tax and social contributions, provides mandatory benefits, and handles all HR and labour law compliance. The foreign company retains full day-to-day control over the employee's work, direction, and responsibilities. The EoR simply handles the legal and administrative layer.",
      },
      {
        type: "blockquote" as const,
        text: "An EoR does not change who manages your team — it changes who signs the payslip. The talent works for you. The legal exposure stays with us.",
      },
      { type: "h2" as const, text: "Why this matters in Uzbekistan and Central Asia" },
      {
        type: "p" as const,
        text: "Uzbekistan's labour code requires that all employment relationships be formalised through a written contract registered with an employer holding a valid tax ID. Social insurance contributions, personal income tax withholding, and mandatory vacation accruals are non-negotiable. Employing someone informally — or paying them through a service contract when the relationship is clearly one of employment — carries substantial legal and reputational risk. The State Labour Inspectorate actively audits foreign-linked businesses, and misclassification penalties can be significant.",
      },
      {
        type: "p" as const,
        text: "Beyond Uzbekistan, each country in the region has its own framework. Kazakhstan operates under a different labour code with distinct termination requirements. Kyrgyzstan imposes its own social fund contribution rates. Navigating each jurisdiction separately — while running a business — is a distraction most organisations cannot afford.",
      },
      { type: "h2" as const, text: "How the EoR model works in practice" },
      {
        type: "ul" as const,
        items: [
          "You identify the candidate and agree on compensation, role, and start date.",
          "Advizen's EoR entity formalises the employment contract under local law and registers the employee with tax and social insurance authorities.",
          "Payroll is processed each month: salary is paid, income tax and social contributions are withheld and remitted, and all required reporting is filed.",
          "We administer mandatory leave, sick pay, and any statutory benefits required by law.",
          "You manage the employee's work directly — tasks, performance, reporting lines, tools — with no intermediary involved in day-to-day operations.",
          "If the engagement ends, the termination is handled in full compliance with local notice and severance requirements.",
        ],
      },
      { type: "h2" as const, text: "The strategic benefits" },
      {
        type: "p" as const,
        text: "Speed is the most immediate advantage. Where entity registration takes months, an EoR can onboard an employee within days. For businesses in hyper-growth mode, or those running time-sensitive projects in the region, this difference is decisive.",
      },
      {
        type: "p" as const,
        text: "Cost is the second. Incorporating a local entity carries setup fees, notarisation costs, minimum capital requirements in some jurisdictions, and ongoing annual compliance costs — accounting, audits, filings — even if the entity has minimal activity. An EoR converts all of those fixed costs into a per-employee service fee, making the model highly efficient for teams of one to fifteen.",
      },
      {
        type: "ul" as const,
        items: [
          "No entity setup cost or timeline: hire in days, not months.",
          "Fully compliant employment contracts drafted in the local language and under local law.",
          "Payroll processing, tax withholding, and social contribution remittance handled end-to-end.",
          "HR administration: onboarding documents, leave tracking, termination management.",
          "A single point of contact for all workforce matters across multiple Central Asian jurisdictions.",
          "Clean exit: wind down the employment relationship without dissolving a legal entity.",
        ],
      },
      { type: "h2" as const, text: "When to use EoR — and when to incorporate" },
      {
        type: "p" as const,
        text: "An EoR is not a permanent substitute for a legal entity in every case. If you are planning to open an office, enter into significant local contracts, hold assets, or build a team of more than twenty people long-term, establishing a wholly owned subsidiary or representative office will typically make more commercial sense. The EoR model is most powerful as an entry mechanism — letting you operate immediately while your entity registration proceeds — or as a permanent solution for small, distributed teams where the overhead of a local entity is not justified by the headcount.",
      },
      {
        type: "p" as const,
        text: "We help clients make this determination case by case. The right answer depends on headcount projections, the nature of the work, the client's risk tolerance, and the regulatory specifics of the target country.",
      },
      { type: "h2" as const, text: "What Advizen's EoR service covers" },
      {
        type: "p" as const,
        text: "Our Employer of Record service is fully integrated with the rest of our advisory practice. Payroll is handled by the same team that advises on tax structuring. HR compliance is managed by specialists who also advise on labour law disputes. When a question arises at the intersection of employment, tax, and corporate law — as it often does — you do not need to coordinate between three separate advisers. One team holds the full picture.",
      },
      {
        type: "ul" as const,
        items: [
          "Employment contract drafting and local labour authority registration.",
          "Monthly payroll processing with full payslip documentation.",
          "Personal income tax and social contribution withholding and remittance.",
          "Mandatory vacation, sick leave, and severance calculations.",
          "Work permit and immigration advisory for expatriate employees where applicable.",
          "Ongoing HR support: policy guidance, disciplinary procedures, termination compliance.",
          "Multi-country coordination across Uzbekistan, Kazakhstan, and Kyrgyzstan.",
        ],
      },
      { type: "h2" as const, text: "The talent window is open — act before it closes" },
      {
        type: "p" as const,
        text: "The Central Asian talent market is maturing fast. Salaries are rising, candidates have more options, and the companies that move quickly are building the teams that will define the next decade in the region. The legal and administrative complexity of hiring locally is real — but it is entirely solvable. The EoR model exists precisely to remove that barrier. The only question is whether you move first, or watch someone else do it.",
      },
      {
        type: "blockquote" as const,
        text: "The best time to hire the right person is when you find them — not six months after your entity is registered.",
      },
    ],
    faq: [
      {
        question: "What is an Employer of Record and how does it work?",
        answer: "An Employer of Record (EoR) is a local legal entity that employs workers on behalf of a foreign company. The EoR signs the employment contract, handles payroll, withholds income tax and social contributions, and manages HR compliance. The foreign company retains full day-to-day control over the employee's work while the EoR handles all legal and administrative obligations.",
      },
      {
        question: "How quickly can a foreign company hire employees in Uzbekistan without a local entity?",
        answer: "Through Advizen's Employer of Record service, a foreign company can onboard employees in Uzbekistan within days — compared to the several weeks or months required to incorporate a local legal entity.",
      },
      {
        question: "Which countries does Advizen's EoR service cover?",
        answer: "Advizen's Employer of Record service covers Uzbekistan, Kazakhstan, and Kyrgyzstan, providing a single point of contact for workforce compliance across all three Central Asian jurisdictions.",
      },
      {
        question: "When should a company use an EoR rather than setting up a local entity in Uzbekistan?",
        answer: "An EoR is ideal for companies hiring a small team (typically under 20 employees), entering the market quickly while entity registration is underway, or maintaining a lean distributed team where the overhead of a local entity is not justified. For larger teams, significant local contracts, or asset-holding operations, a wholly owned subsidiary is typically more appropriate.",
      },
    ],
  },
  ru: {
    subtitle: "Как иностранные компании могут нанимать и оплачивать труд специалистов в Узбекистане без регистрации местного юридического лица.",
    author: "HR-практика Advizen",
    readTime: "8 мин чтения",
    inShort: {
      figures: [
        { value: "3 недели – 6 месяцев", label: "Срок регистрации местного юридического лица в зависимости от юрисдикции" },
        { value: "1–15", label: "Размер команды, для которой модель EoR с оплатой за сотрудника наиболее эффективна" },
        { value: "20+", label: "Численность команды в долгосрочной перспективе, при которой дочерняя компания или представительство, как правило, выгоднее" },
        { value: "3", label: "Страны, которые охватывает услуга EoR компании Advizen: Узбекистан, Казахстан и Кыргызстан" },
      ],
      points: [
        "Employer of Record — местное юридическое лицо, которое трудоустраивает работников от имени иностранной компании: подписывает трудовой договор, рассчитывает зарплату, удерживает подоходный налог и социальные взносы и обеспечивает соблюдение трудового законодательства.",
        "Иностранная компания сохраняет полный повседневный контроль над работой сотрудника, его задачами и подчинённостью.",
        "Трудовой кодекс Узбекистана требует оформлять все трудовые отношения письменным договором с работодателем, имеющим действующий ИНН, поэтому неформальный найм или договор услуг вместо трудового несут правовой риск.",
        "EoR может трудоустроить сотрудника за считанные дни и превращает затраты на учреждение и ежегодный комплаенс юрлица в сервисный сбор за каждого сотрудника.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Вы нашли нужных людей. Они находятся в Ташкенте — или Алматы, или Бишкеке — и вам нужно, чтобы они как можно скорее приступили к работе в вашей компании. Проблема в том, что у вас нет юридического лица в регионе, а его регистрация займёт месяцы. Именно для решения такой ситуации был создан Employer of Record.",
      },
      { type: "h2" as const, text: "Проблема, с которой сталкивается каждая глобальная компания" },
      {
        type: "p" as const,
        text: "Выход на рынки Центральной Азии — это уже не вопрос «нужно ли», а вопрос «как быстро». В регионе растёт пул квалифицированных инженеров, специалистов по продажам и операционных кадров, за которых активно конкурируют компании из Европы, Ближнего Востока и Юго-Восточной Азии. Однако регуляторная среда многоуровневая: у каждой страны собственный трудовой кодекс, требования к постановке на налоговый учёт, обязательные социальные взносы и обязательства по соблюдению требований в сфере HR. Без зарегистрированного юридического лица вы не можете официально трудоустроить никого — а регистрация компании, в зависимости от юрисдикции, занимает от трёх недель до шести месяцев.",
      },
      {
        type: "p" as const,
        text: "В результате возникает разрыв. Специалисты найдены. Они готовы приступить к работе. Но правовой инфраструктуры ещё нет. Компании, которые не могут преодолеть этот разрыв достаточно быстро, теряют кандидатов в пользу конкурентов, которые могут.",
      },
      { type: "h2" as const, text: "Что такое Employer of Record?" },
      {
        type: "p" as const,
        text: "Employer of Record — часто называемый EoR — это местное юридическое лицо, которое трудоустраивает работников от имени иностранной компании. EoR становится юридическим работодателем на бумаге: подписывает трудовой договор, рассчитывает заработную плату, удерживает подоходный налог и социальные взносы, предоставляет обязательные льготы и обеспечивает соблюдение всех требований трудового законодательства. Иностранная компания полностью сохраняет оперативный контроль над работой сотрудника, его направлением и обязанностями. EoR лишь берёт на себя правовой и административный уровень.",
      },
      {
        type: "blockquote" as const,
        text: "EoR не меняет того, кто управляет вашей командой — он меняет того, кто подписывает расчётный листок. Специалист работает на вас. Правовые риски остаются у нас.",
      },
      { type: "h2" as const, text: "Почему это важно в Узбекистане и Центральной Азии" },
      {
        type: "p" as const,
        text: "Трудовой кодекс Узбекистана требует, чтобы все трудовые отношения были оформлены письменным договором, зарегистрированным у работодателя, имеющего действующий идентификационный номер налогоплательщика. Взносы на социальное страхование, удержание подоходного налога и обязательное начисление отпускных — не предмет для обсуждения. Неформальное трудоустройство или оплата труда по договору оказания услуг при явном наличии трудовых отношений несёт существенный юридический и репутационный риск. Государственная инспекция труда активно проводит проверки предприятий с иностранным участием, а штрафы за неправильную классификацию могут быть значительными.",
      },
      {
        type: "p" as const,
        text: "За пределами Узбекистана у каждой страны региона своя система. Казахстан работает по другому трудовому кодексу с особыми требованиями к прекращению трудовых отношений. Кыргызстан устанавливает собственные ставки взносов в социальный фонд. Работать с каждой юрисдикцией отдельно — в условиях ведения бизнеса — это отвлечение ресурсов, которое большинство организаций не может себе позволить.",
      },
      { type: "h2" as const, text: "Как работает модель EoR на практике" },
      {
        type: "ul" as const,
        items: [
          "Вы определяете кандидата и договариваетесь об условиях вознаграждения, должности и дате начала работы.",
          "Структура EoR компании Advizen оформляет трудовой договор в соответствии с местным законодательством и регистрирует сотрудника в налоговых органах и органах социального страхования.",
          "Ежемесячно производится расчёт заработной платы: выплачивается зарплата, удерживаются и перечисляются подоходный налог и социальные взносы, подаётся вся необходимая отчётность.",
          "Мы администрируем обязательный отпуск, оплату больничных и любые предусмотренные законом льготы.",
          "Вы непосредственно управляете работой сотрудника — задачами, результативностью, подчинённостью, инструментами — без участия посредника в ежедневных операциях.",
          "Если сотрудничество завершается, прекращение трудовых отношений осуществляется в полном соответствии с местными требованиями об уведомлении и выходном пособии.",
        ],
      },
      { type: "h2" as const, text: "Стратегические преимущества" },
      {
        type: "p" as const,
        text: "Скорость — наиболее очевидное преимущество. Там, где регистрация юридического лица занимает месяцы, EoR может трудоустроить сотрудника за считанные дни. Для компаний в режиме стремительного роста или реализующих срочные проекты в регионе это различие имеет решающее значение.",
      },
      {
        type: "p" as const,
        text: "Второе преимущество — стоимость. Регистрация местного юридического лица влечёт затраты на учреждение, нотариальные расходы, требования к минимальному капиталу в ряде юрисдикций и ежегодные расходы на соблюдение нормативных требований — бухгалтерский учёт, аудит, подача отчётности — даже если деятельность юридического лица минимальна. EoR конвертирует все эти постоянные затраты в сервисный сбор за каждого сотрудника, что делает модель высокоэффективной для команд от одного до пятнадцати человек.",
      },
      {
        type: "ul" as const,
        items: [
          "Никаких затрат на учреждение и сроков ожидания: найм за дни, а не месяцы.",
          "Полностью соответствующие законодательству трудовые договоры, составленные на местном языке и в соответствии с местным правом.",
          "Полное ведение расчёта заработной платы, удержание налогов и перечисление социальных взносов.",
          "Кадровое администрирование: документы по приёму на работу, учёт отпусков, управление увольнением.",
          "Единая точка контакта по всем кадровым вопросам в нескольких юрисдикциях Центральной Азии.",
          "Чистый выход: завершение трудовых отношений без ликвидации юридического лица.",
        ],
      },
      { type: "h2" as const, text: "Когда использовать EoR — и когда регистрировать юридическое лицо" },
      {
        type: "p" as const,
        text: "EoR — не постоянная замена юридическому лицу в каждом случае. Если вы планируете открыть офис, заключить крупные местные договоры, владеть активами или формировать команду из более чем двадцати человек на долгосрочной основе, создание дочерней компании или представительства, как правило, будет коммерчески более целесообразным. Модель EoR наиболее эффективна в качестве механизма входа — позволяя начать работу немедленно, пока идёт регистрация юридического лица, — или в качестве постоянного решения для небольших распределённых команд, где накладные расходы на местное юридическое лицо не оправдываются численностью персонала.",
      },
      {
        type: "p" as const,
        text: "Мы помогаем клиентам принять это решение в каждом конкретном случае. Правильный ответ зависит от прогнозируемой численности персонала, характера работы, склонности клиента к риску и регуляторной специфики целевой страны.",
      },
      { type: "h2" as const, text: "Что входит в услугу EoR компании Advizen" },
      {
        type: "p" as const,
        text: "Наша услуга Employer of Record полностью интегрирована с остальной консультационной практикой. Расчётом заработной платы занимается та же команда, которая консультирует по вопросам налогового структурирования. Соблюдением требований в сфере HR управляют специалисты, также консультирующие по трудовым спорам. Когда возникает вопрос на стыке трудового, налогового и корпоративного права — а это случается часто — вам не нужно координировать работу трёх отдельных консультантов. Одна команда владеет полной картиной.",
      },
      {
        type: "ul" as const,
        items: [
          "Составление трудовых договоров и регистрация в местных органах по труду.",
          "Ежемесячный расчёт заработной платы с полным комплектом документов.",
          "Удержание и перечисление подоходного налога и социальных взносов.",
          "Расчёт обязательного отпуска, больничных и выходного пособия.",
          "Консультации по разрешениям на работу и вопросам иммиграции для сотрудников-экспатриантов при необходимости.",
          "Постоянная HR-поддержка: консультации по кадровой политике, дисциплинарные процедуры, соблюдение требований при увольнении.",
          "Координация в нескольких странах: Узбекистан, Казахстан и Кыргызстан.",
        ],
      },
      { type: "h2" as const, text: "Окно возможностей открыто — действуйте до его закрытия" },
      {
        type: "p" as const,
        text: "Рынок талантов Центральной Азии стремительно развивается. Зарплаты растут, у кандидатов появляется всё больше возможностей, а компании, действующие быстро, формируют команды, которые определят следующее десятилетие в регионе. Правовая и административная сложность местного найма реальна — но она полностью решаема. Модель EoR существует именно для того, чтобы устранить этот барьер. Единственный вопрос — действуете ли вы первым или наблюдаете, как это делает кто-то другой.",
      },
      {
        type: "blockquote" as const,
        text: "Лучшее время нанять нужного человека — когда вы его нашли, а не через шесть месяцев после регистрации юридического лица.",
      },
    ],
    faq: [
      {
        question: "Что такое Employer of Record и как это работает?",
        answer: "Employer of Record (EoR) — это местное юридическое лицо, которое трудоустраивает работников от имени иностранной компании. EoR подписывает трудовой договор, рассчитывает заработную плату, удерживает подоходный налог и социальные взносы, обеспечивает соблюдение трудового законодательства. При этом иностранная компания полностью сохраняет оперативный контроль над работой сотрудника, а EoR берёт на себя все правовые и административные обязательства.",
      },
      {
        question: "Как быстро иностранная компания может нанять сотрудников в Узбекистане без местного юрлица?",
        answer: "Через услугу Employer of Record компании Advizen иностранная компания может трудоустроить сотрудников в Узбекистане за несколько дней — в отличие от нескольких недель или месяцев, необходимых для регистрации местного юридического лица.",
      },
      {
        question: "Какие страны охватывает услуга EoR компании Advizen?",
        answer: "Услуга Employer of Record компании Advizen охватывает Узбекистан, Казахстан и Кыргызстан, предоставляя единый контакт для соблюдения трудового законодательства во всех трёх юрисдикциях Центральной Азии.",
      },
      {
        question: "Когда компании лучше использовать EoR, а не регистрировать местное юрлицо в Узбекистане?",
        answer: "EoR оптимален для компаний, нанимающих небольшую команду (как правило, до 20 сотрудников), быстро выходящих на рынок в период регистрации юридического лица или поддерживающих небольшую распределённую команду, где накладные расходы на местное юрлицо не оправданы. Для крупных команд, значительных местных контрактов или операций с активами, как правило, целесообразнее дочерняя компания.",
      },
    ],
  },
  uz: {
    subtitle: "Xorijiy kompaniyalar Oʻzbekistonda mahalliy yuridik shaxs roʻyxatdan oʻtkazmasdan qanday qilib isteʼdod topib, ularga haq toʻlashi mumkin.",
    author: "Advizen HR amaliyoti",
    readTime: "8 daqiqa oʻqish",
    inShort: {
      figures: [
        { value: "3 hafta – 6 oy", label: "Yurisdiksiyaga qarab mahalliy yuridik shaxsni roʻyxatdan oʻtkazish muddati" },
        { value: "1–15", label: "Har bir xodim uchun toʻlovli EoR modeli eng samarali boʻlgan jamoa hajmi" },
        { value: "20+", label: "Uzoq muddatli xodimlar soni, bunda shoʻba korxona yoki vakolatxona odatda tijorat jihatdan toʻgʻriroq" },
        { value: "3", label: "Advizen EoR xizmati qamrab oladigan mamlakatlar: Oʻzbekiston, Qozogʻiston va Qirgʻiziston" },
      ],
      points: [
        "Employer of Record — xorijiy kompaniya nomidan xodimlarni yollaydigan mahalliy yuridik shaxs: u mehnat shartnomasini imzolaydi, ish haqini hisoblaydi, daromad soligʻi va ijtimoiy toʻlovlarni ushlab qoladi hamda mehnat qonunchiligiga rioya etilishini taʼminlaydi.",
        "Xorijiy kompaniya xodimning ishi, vazifalari va boʻysunuv tuzilmasi ustidan toʻliq kundalik nazoratni saqlab qoladi.",
        "Oʻzbekiston Mehnat kodeksi barcha mehnat munosabatlarini amaldagi soliq identifikatsiya raqamiga ega ish beruvchi bilan yozma shartnoma orqali rasmiylashtirishni talab qiladi, shuning uchun norasmiy yollash yoki mehnat munosabati oʻrniga xizmat shartnomasi huquqiy xavf tugʻdiradi.",
        "EoR xodimni bir necha kunda ishga qabul qila oladi va yuridik shaxsni tashkil etish hamda yillik muvofiqlik xarajatlarini har bir xodim uchun xizmat toʻloviga aylantiradi.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Siz kerakli odamlarni topdingiz. Ular Toshkentda — yoki Olmaotada, yoki Bishkekda joylashgan — va ularning imkon qadar tezroq kompaniyangizda ishlashini xohlaysiz. Muammo shundaki, siz mintaqada yuridik shaxsga ega emassiz va uni roʻyxatdan oʻtkazish oylar talab etadi. Aynan shu vaziyatni hal qilish uchun Employer of Record yaratilgan.",
      },
      { type: "h2" as const, text: "Har bir global kompaniya duch keladigan muammo" },
      {
        type: "p" as const,
        text: "Markaziy Osiyoga kirish endi «kerakmi» degan savol emas — bu «qanchalik tez» degan savol. Mintaqada malakali muhandislar, savdo mutaxassislari va operatsion kadrlarning tez oʻsib borayotgan havzasi mavjud boʻlib, Yevropa, Yaqin Sharq va Janubi-Sharqiy Osiyodagi kompaniyalar ular uchun faol raqobatlashmoqda. Ammo tartibga soluvchi muhit koʻp qatlamli: har bir mamlakatning oʻz Mehnat kodeksi, soliq roʻyxatiga qoʻyish talablari, majburiy ijtimoiy toʻlovlar va HR muvofiqlik majburiyatlari mavjud. Roʻyxatdan oʻtgan yuridik shaxssiz siz rasmiy ravishda hech kimni yollashingiz mumkin emas — kompaniyani roʻyxatdan oʻtkazish esa yurisdiksiyaga qarab uch haftadan olti oygacha davom etadi.",
      },
      {
        type: "p" as const,
        text: "Natijada tafovut vujudga keladi. Isteʼdod topilgan. U tayyor. Ammo huquqiy infratuzilma hali yoʻq. Bu tafovutni yetarlicha tez toʻldira olmaydigan biznes nomzodlarni buni uddalay oladigan raqobatchilarga yoʻqotadi.",
      },
      { type: "h2" as const, text: "Employer of Record nima?" },
      {
        type: "p" as const,
        text: "Employer of Record — koʻpincha EoR deb ataladigan — xorijiy kompaniya nomidan xodimlarni yollaydigan mahalliy yuridik shaxsdir. EoR qogʻozda qonuniy ish beruvchiga aylanadi: mehnat shartnomasini imzolaydi, ish haqini hisoblaydi, daromad soligʻi va ijtimoiy toʻlovlarni ushlab qoladi, majburiy imtiyozlar taqdim etadi va barcha HR hamda mehnat qonunchiligi muvofiqligini taʼminlaydi. Xorijiy kompaniya xodimning ishi, yoʻnalishi va masʼuliyatlari ustidan toʻliq kundalik nazoratni saqlab qoladi. EoR shunchaki huquqiy va maʼmuriy qatlamni oʻz zimmasiga oladi.",
      },
      {
        type: "blockquote" as const,
        text: "EoR jamoangizni kim boshqarishini oʻzgartirmaydi — u ish haqini kim imzolashini oʻzgartiradi. Isteʼdod siz uchun ishlaydi. Huquqiy masʼuliyat bizda qoladi.",
      },
      { type: "h2" as const, text: "Bu Oʻzbekiston va Markaziy Osiyoda nima uchun muhim" },
      {
        type: "p" as const,
        text: "Oʻzbekistonning Mehnat kodeksi barcha mehnat munosabatlarini amaldagi soliq identifikatsiya raqamiga ega ish beruvchi bilan yozma shartnoma orqali rasmiylashtirilishini talab etadi. Ijtimoiy sugʻurta badallari, daromad soligʻini ushlab qolish va majburiy taʼtil pullarini hisoblash — muhokama qilinmaydigan majburiyatlar. Odamni norasmiy yollash — yoki mehnat munosabati ish shartnomasi sifatida koʻrinib turgan holda xizmat shartnomasi orqali haq toʻlash — jiddiy huquqiy va obroʻga putur yetkazadigan xatarni oʻz ichiga oladi. Davlat mehnat inspeksiyasi xorijiy aloqali korxonalarni faol tekshiradi va notoʻgʻri tasniflash uchun jarimalar sezilarli boʻlishi mumkin.",
      },
      {
        type: "p" as const,
        text: "Oʻzbekistondan tashqarida mintaqadagi har bir mamlakatning oʻz tizimi mavjud. Qozogʻiston oʻziga xos mehnat shartnomasini bekor qilish talablariga ega boshqa Mehnat kodeksi asosida ishlaydi. Qirgʻiziston oʻzining ijtimoiy jamgʻarma badallarini qoʻllaydi. Har bir yurisdiksiyada alohida ishlash — biznesni boshqarish bilan bir vaqtda — koʻpchilik tashkilotlar uddalay olmaydigan chalgʻitishdir.",
      },
      { type: "h2" as const, text: "EoR modeli amalda qanday ishlaydi" },
      {
        type: "ul" as const,
        items: [
          "Siz nomzodni aniqlab, ish haqi, lavozim va boshlash sanasini kelishib olasiz.",
          "Advizen EoR tuzilmasi mahalliy qonunchilik asosida mehnat shartnomasini rasmiylashtiradi va xodimni soliq hamda ijtimoiy sugʻurta organlarida roʻyxatdan oʻtkazadi.",
          "Har oy ish haqi hisoblanadi: maosh toʻlanadi, daromad soligʻi va ijtimoiy toʻlovlar ushlab qolinib oʻtkaziladi, barcha talab qilinadigan hisobotlar topshiriladi.",
          "Biz majburiy taʼtil, kasallik nafaqasi va qonun talabiga koʻra kerakli imtiyozlarni boshqaramiz.",
          "Siz xodimning ishini toʻgʻridan-toʻgʻri boshqarasiz — vazifalar, samaradorlik, boʻysunuv tuzilmasi, vositalar — kundalik operatsiyalarda hech qanday vositachi ishtirok etmaydi.",
          "Ish tugasa, munosabatni tugatish mahalliy xabardor qilish va nafaqa toʻlash talablariga toʻliq muvofiq ravishda amalga oshiriladi.",
        ],
      },
      { type: "h2" as const, text: "Strategik afzalliklar" },
      {
        type: "p" as const,
        text: "Tezlik — eng birinchi afzallik. Yuridik shaxsni roʻyxatdan oʻtkazish oylar talab qiladigan joyda, EoR xodimni bir necha kunda ish boshlata oladi. Giperoʻsish rejimidagi biznes yoki mintaqada vaqtga bogʻliq loyihalarni amalga oshirayotganlar uchun bu farq hal qiluvchi ahamiyatga ega.",
      },
      {
        type: "p" as const,
        text: "Ikkinchi — narx. Mahalliy yuridik shaxsni roʻyxatdan oʻtkazish roʻyxatdan oʻtish xarajatlarini, notarial xarajatlarni, baʼzi yurisdiksiyalarda minimal kapital talablarini va yillik muvofiqlik xarajatlarini — buxgalteriya, audit, hisobotlar — hatto yuridik shaxsning faoliyati minimal boʻlsa ham oʻz ichiga oladi. EoR barcha ushbu doimiy xarajatlarni har bir xodim uchun xizmat toʻloviga aylantiradi va bu modelni birdan oʻn beshtagacha xodimi boʻlgan jamoalar uchun juda samarali qiladi.",
      },
      {
        type: "ul" as const,
        items: [
          "Roʻyxatdan oʻtish xarajatlari va muddati yoʻq: oylar emas, kunlarda yollash.",
          "Mahalliy tilda va mahalliy qonunchilik asosida tuzilgan toʻliq muvofiq mehnat shartnomalari.",
          "Ish haqi hisoblash, soliq ushlab qolish va ijtimoiy toʻlovlarni oʻtkazish boshidan oxirigacha amalga oshiriladi.",
          "HR maʼmuriyati: ishga qabul qilish hujjatlari, taʼtilni kuzatish, ishdan boʻshatishni boshqarish.",
          "Markaziy Osiyoning bir nechta yurisdiksiyalarida barcha kadrlar masalalari boʻyicha yagona aloqa nuqtasi.",
          "Toza chiqish: yuridik shaxsni tugatmasdan mehnat munosabatlarini yakunlash.",
        ],
      },
      { type: "h2" as const, text: "EoR qachon ishlatiladi — va qachon yuridik shaxs roʻyxatdan oʻtkaziladi" },
      {
        type: "p" as const,
        text: "EoR har bir holda yuridik shaxsning doimiy oʻrnini bosuvchi emas. Agar siz ofis ochishni, muhim mahalliy shartnomalar tuzishni, aktivlar saqlashni yoki uzoq muddatda yigirmadan ortiq kishilik jamoa qurishni rejalashtirayotgan boʻlsangiz, toʻliq mulkchilikdagi shoʻba korxona yoki vakolatxona tashkil etish odatda tijorat nuqtai nazaridan toʻgʻriroq boʻladi. EoR modeli kirish mexanizmi sifatida eng samarali — yuridik shaxs roʻyxatdan oʻtayotgan paytda darhol faoliyat yuritish imkonini beradi — yoki mahalliy yuridik shaxs xarajatlari xodimlar soni bilan oqlanmaydigan kichik tarqoq jamoalar uchun doimiy yechim sifatida.",
      },
      {
        type: "p" as const,
        text: "Biz har bir muayyan holda ushbu qarorni qabul qilishda mijozlarga yordam beramiz. Toʻgʻri javob xodimlar soni bashoratlariga, ishning xarakteriga, mijozning xatarga tayyorligiga va maqsadli mamlakatning tartibga solish oʻziga xosligiga bogʻliq.",
      },
      { type: "h2" as const, text: "Advizen EoR xizmati nimani oʻz ichiga oladi" },
      {
        type: "p" as const,
        text: "Bizning Employer of Record xizmatimiz qolgan maslahat amaliyotimiz bilan toʻliq integratsiyalangan. Ish haqini soliq tuzilmasi boʻyicha maslahat beradigan xuddi shu jamoa hisoblaydi. HR muvofiqligini mehnat nizolari boʻyicha ham maslahat beradigan mutaxassislar boshqaradi. Mehnat, soliq va korporativ huquq kesishmasida savol paydo boʻlganda — bu koʻpincha sodir boʻladi — uchta alohida maslahatchi oʻrtasida muvofiqlashtirish kerak emas. Bir jamoa toʻliq rasmni ushlab turadi.",
      },
      {
        type: "ul" as const,
        items: [
          "Mehnat shartnomalarini tuzish va mahalliy mehnat organlarida roʻyxatdan oʻtkazish.",
          "Toʻliq ish haqi hujjatlari bilan oylik ish haqi hisoblash.",
          "Jismoniy shaxslardan olinadigan daromad soligʻi va ijtimoiy toʻlovlarni ushlab qolish va oʻtkazish.",
          "Majburiy taʼtil, kasallik nafaqasi va ishdan boʻshatish nafaqasi hisob-kitoblari.",
          "Kerak boʻlganda chet el xodimlari uchun ish ruxsatnomalari va immigratsiya boʻyicha maslahat.",
          "Doimiy HR qoʻllab-quvvatlash: siyosat boʻyicha koʻrsatmalar, intizom tartiblari, ishdan boʻshatishda muvofiqlik.",
          "Oʻzbekiston, Qozogʻiston va Qirgʻiziston boʻylab koʻp mamlakatli muvofiqlashtirish.",
        ],
      },
      { type: "h2" as const, text: "Isteʼdod oynasi ochiq — yopilishidan oldin harakat qiling" },
      {
        type: "p" as const,
        text: "Markaziy Osiyo isteʼdod bozori tez yetilmoqda. Maoshlar oʻsmoqda, nomzodlarda koʻproq imkoniyat bor va tez harakat qilayotgan kompaniyalar mintaqadagi keyingi oʻn yillikni belgilaydigan jamoalarni shakllantirmoqda. Mahalliy yollashning huquqiy va maʼmuriy murakkabligi real — ammo u toʻliq yechilishi mumkin. EoR modeli aynan shu toʻsiqni olib tashlash uchun mavjud. Yagona savol — siz birinchi harakat qilasizmi yoki boshqa birov buni amalga oshirishini kuzatasizmi.",
      },
      {
        type: "blockquote" as const,
        text: "Toʻgʻri odamni yollashning eng yaxshi vaqti — uni topganingizda, yuridik shaxs roʻyxatdan oʻtkazilganidan olti oy oʻtgach emas.",
      },
    ],
    faq: [
      {
        question: "Employer of Record nima va u qanday ishlaydi?",
        answer: "Employer of Record (EoR) — bu xorijiy kompaniya nomidan xodimlarni yollaydigan mahalliy yuridik shaxs. EoR mehnat shartnomasini imzolaydi, ish haqini hisoblaydi, daromad soligʻi va ijtimoiy toʻlovlarni ushlab qoladi va HR muvofiqligini boshqaradi. Xorijiy kompaniya xodimning ishi ustidan toʻliq kundalik nazoratni saqlab qoladi, EoR esa barcha huquqiy va maʼmuriy majburiyatlarni oʻz zimmasiga oladi.",
      },
      {
        question: "Xorijiy kompaniya mahalliy yuridik shaxssiz Oʻzbekistonda xodimlarni qanchalik tez yollashi mumkin?",
        answer: "Advizen Employer of Record xizmati orqali xorijiy kompaniya Oʻzbekistonda xodimlarni bir necha kunda ishga qabul qilishi mumkin — bu mahalliy yuridik shaxsni roʻyxatdan oʻtkazish uchun zarur boʻlgan bir necha hafta yoki oylardan ancha tez.",
      },
      {
        question: "Advizen EoR xizmati qaysi mamlakatlarni qamrab oladi?",
        answer: "Advizen Employer of Record xizmati Oʻzbekiston, Qozogʻiston va Qirgʻizistonni qamrab oladi va Markaziy Osiyoning uchala yurisdiksiyasida mehnat muvofiqligini boshqarish uchun yagona aloqa nuqtasini taqdim etadi.",
      },
      {
        question: "Kompaniya Oʻzbekistonda mahalliy yuridik shaxs tashkil etish oʻrniga qachon EoRdan foydalanishi kerak?",
        answer: "EoR kichik jamoa (odatda 20 nafardan kam xodim) yollayotgan, yuridik shaxs roʻyxatdan oʻtayotgan paytda tezda bozorga kirayotgan yoki mahalliy yuridik shaxs xarajatlari oqlanmaydigan kichik tarqoq jamoani saqlab turmoqchi boʻlgan kompaniyalar uchun ideal. Katta jamoalar, muhim mahalliy shartnomalar yoki aktivlar bilan bogʻliq operatsiyalar uchun odatda toʻliq mulkchilikdagi shoʻba korxona maqsadga muvofiqroq.",
      },
    ],
  },
};

export default article;
