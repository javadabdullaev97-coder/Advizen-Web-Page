type FaqItem = { q: string; a: string };
type LocaleData = { en: FaqItem[]; ru: FaqItem[]; uz: FaqItem[] };
export type FaqPage = "home" | "expertise";

export const FAQ_DATA: Record<FaqPage, LocaleData> = {
  home: {
    en: [
      {
        q: "What is Advizen Consulting?",
        a: "Advizen Consulting is a premier business advisory firm based in Tashkent, Uzbekistan, offering integrated consulting across tax, legal, finance, accounting, and HR — a single point of contact for your entire operation in Central Asia.",
      },
      {
        q: "Which markets do you serve?",
        a: "Our primary focus is Uzbekistan, with deep expertise across Central Asian markets. We advise foreign investors, multinationals, and local companies entering or operating in the region.",
      },
      {
        q: "What makes Advizen Consulting different from other consultancies?",
        a: "We combine seven advisory disciplines and seven managed operations services under one roof — giving clients a fully integrated practice rather than fragmented point solutions across multiple firms.",
      },
      {
        q: "How do I start working with Advizen Consulting?",
        a: "Schedule a consultation through our contact page. We will discuss your needs, identify where we can add the most value, and propose a tailored scope of engagement.",
      },
      {
        q: "What business structures are available in Uzbekistan?",
        a: "The most common forms are the Limited Liability Company (LLC / MChJ), Joint-Stock Company (JSC / AJ), Branch Office, and Representative Office. LLCs are the preferred vehicle for most foreign investors due to their flexible governance and straightforward registration. Branches and representative offices suit companies that want a local presence without establishing a separate legal entity.",
      },
      {
        q: "Can foreign investors own 100% of a company in Uzbekistan?",
        a: "Yes. Uzbekistan permits 100% foreign ownership in the vast majority of sectors. The Law on Foreign Investment guarantees equal rights with domestic investors, protection against nationalisation, and the right to repatriate profits. Certain regulated sectors — such as banking, media, and telecommunications — may require additional licensing or impose ownership thresholds, but these are the exception rather than the rule.",
      },
      {
        q: "What are the main tax rates in Uzbekistan?",
        a: "The key rates for businesses operating in Uzbekistan: corporate profit tax — 15%; VAT — 12%; personal income tax — 12% (flat rate); social tax — 12% (employer contribution). Companies operating in Special Economic Zones or qualifying as small businesses may benefit from reduced rates or full tax holidays. Advizen Consulting provides tax structuring advice to identify the most efficient regime for your specific structure.",
      },
      {
        q: "How long does company registration take in Uzbekistan?",
        a: "An LLC can be registered within 1–3 business days through Uzbekistan's unified e-government portal. Full operational readiness — including tax registration, corporate bank account opening, and statutory document preparation — typically takes 1–3 weeks depending on the bank and the complexity of the corporate structure. Advizen Consulting manages the entire process end-to-end.",
      },
      {
        q: "Does Advizen Consulting work with foreign companies and international investors?",
        a: "Yes — foreign investors and multinationals account for a significant share of our client base. We regularly advise on market entry structuring, cross-border transactions, transfer pricing, and regulatory compliance for companies from Europe, the Gulf, Asia, and the CIS entering the Uzbekistan and Central Asia markets.",
      },
    ],
    ru: [
      {
        q: "Что такое Advizen Consulting?",
        a: "Advizen Consulting — ведущая консалтинговая компания, базирующаяся в Ташкенте, Узбекистан. Мы предоставляем интегрированные услуги в области налогов, юридического сопровождения, финансов, бухгалтерии и HR — единая точка контакта для всей вашей деятельности в Центральной Азии.",
      },
      {
        q: "На каких рынках вы работаете?",
        a: "Наш основной фокус — Узбекистан и рынки Центральной Азии. Мы консультируем иностранных инвесторов, международные компании и местные предприятия, работающие в регионе или планирующие выход на него.",
      },
      {
        q: "Чем Advizen Consulting отличается от других консалтинговых компаний?",
        a: "Мы объединяем семь консалтинговых направлений и семь операционных сервисов под одной крышей — предоставляя клиентам полностью интегрированную практику вместо разрозненных решений от разных фирм.",
      },
      {
        q: "Как начать сотрудничество с Advizen Consulting?",
        a: "Запишитесь на консультацию через страницу контактов. Мы обсудим ваши потребности, определим области, где можем принести наибольшую ценность, и предложим индивидуальный объём услуг.",
      },
      {
        q: "Какие организационно-правовые формы доступны в Узбекистане?",
        a: "Наиболее распространённые формы — Общество с ограниченной ответственностью (ООО / MChJ), Акционерное общество (АО / AJ), Филиал и Представительство. Для большинства иностранных инвесторов ООО является предпочтительной формой благодаря гибкому управлению и простой регистрации. Филиалы и представительства подходят компаниям, желающим присутствовать на рынке без создания отдельного юридического лица.",
      },
      {
        q: "Может ли иностранный инвестор владеть 100% компании в Узбекистане?",
        a: "Да. Узбекистан допускает 100% иностранное владение в большинстве секторов. Закон об иностранных инвестициях гарантирует равные права с отечественными инвесторами, защиту от национализации и право на репатриацию прибыли. Ряд регулируемых отраслей — банковская сфера, СМИ, телекоммуникации — может предусматривать лицензионные требования или пороги владения, однако это скорее исключения.",
      },
      {
        q: "Каковы основные налоговые ставки в Узбекистане?",
        a: "Ключевые ставки для бизнеса в Узбекистане: налог на прибыль — 15%; НДС — 12%; подоходный налог с физических лиц — 12% (плоская ставка); социальный налог — 12% (взнос работодателя). Компании в Специальных экономических зонах или со статусом малого бизнеса могут пользоваться льготными ставками или налоговыми каникулами. Advizen Consulting консультирует по налоговому структурированию для выбора наиболее эффективного режима.",
      },
      {
        q: "Сколько времени занимает регистрация компании в Узбекистане?",
        a: "ООО можно зарегистрировать за 1–3 рабочих дня через единый портал электронного правительства. Полная операционная готовность — включая постановку на налоговый учёт, открытие корпоративного банковского счёта и подготовку уставных документов — как правило, занимает 1–3 недели в зависимости от банка и сложности структуры. Advizen Consulting сопровождает весь процесс под ключ.",
      },
      {
        q: "Работает ли Advizen Consulting с иностранными компаниями и международными инвесторами?",
        a: "Да — иностранные инвесторы и транснациональные компании составляют значительную часть нашей клиентской базы. Мы регулярно консультируем по структурированию выхода на рынок, трансграничным сделкам, трансфертному ценообразованию и регуляторному комплаенсу для компаний из Европы, Персидского залива, Азии и СНГ, входящих на рынки Узбекистана и Центральной Азии.",
      },
    ],
    uz: [
      {
        q: "Advizen Consulting nima?",
        a: "Advizen Consulting — Toshkent, O'zbekistonda joylashgan yetakchi biznes maslahat kompaniyasi bo'lib, soliq, yuridik, moliya, buxgalteriya va HR sohalari bo'yicha integratsiyalashgan xizmatlar ko'rsatadi. Markaziy Osiyodagi biznesingiz uchun yagona muloqot nuqtasi.",
      },
      {
        q: "Qaysi bozorlarda xizmat ko'rsatasiz?",
        a: "Biz asosan O'zbekiston va Markaziy Osiyo bozorlariga e'tibor qaratamiz. Chet el investorlari, xalqaro kompaniyalar va mintaqada faoliyat yuritayotgan yoki kirib kelayotgan mahalliy firmalar bilan ishlashda keng tajribamiz bor.",
      },
      {
        q: "Advizen Consulting boshqa konsalting kompaniyalaridan qanday farq qiladi?",
        a: "Biz yetti maslahat yo'nalishi va yetti operatsion xizmatni bir tomdan birlashtirgan holda mijozlarga turli firmalardan tarqoq yechimlar o'rniga to'liq integratsiyalashgan amaliyot taqdim etamiz.",
      },
      {
        q: "Advizen Consulting bilan hamkorlikni qanday boshlash mumkin?",
        a: "Kontakt sahifamiz orqali maslahat uchrashuvini belgilang. Biz sizning ehtiyojlaringizni muhokama qilamiz, eng ko'p qiymat qo'sha oladigan sohalarni aniqlaymiz va moslashtirilgan hamkorlik rejasini taklif etamiz.",
      },
      {
        q: "O'zbekistonda qanday tashkiliy-huquqiy shakllar mavjud?",
        a: "Eng keng tarqalgan shakllar: Mas'uliyati cheklangan jamiyat (MChJ), Aktsiyadorlik jamiyati (AJ), Filial va Vakilxona. Ko'pgina chet el investorlari uchun MChJ moslashuvchan boshqaruvi va oddiy ro'yxatdan o'tish tartibi tufayli afzal shakl hisoblanadi. Filial va vakilxonalar alohida yuridik shaxs tashkil etmasdan mahalliy mavjudlikni ta'minlashni istagan kompaniyalarga mos keladi.",
      },
      {
        q: "Chet el investori O'zbekistondagi kompaniyaning 100% ulushiga ega bo'la oladimi?",
        a: "Ha. O'zbekiston ko'pchilik sektorlarda 100% chet el mulkchiligiga ruxsat beradi. Chet el investitsiyalari to'g'risidagi qonun mahalliy investorlar bilan teng huquqlarni, milliylashtiruvdan himoyani va foyda eksportini kafolatlaydi. Bank sektori, OAV va telekommunikatsiya kabi tartibga solinadigan sohalarda litsenziya talablari yoki mulkchilik chegaralari bo'lishi mumkin, ammo bu istisnolar qatoriga kiradi.",
      },
      {
        q: "O'zbekistondagi asosiy soliq stavkalari qanday?",
        a: "O'zbekistonda faoliyat yurituvchi korxonalar uchun asosiy stavkalar: korporativ foyda solig'i — 15%; QQS — 12%; jismoniy shaxslardan daromad solig'i — 12% (yassi stavka); ijtimoiy soliq — 12% (ish beruvchi ulushi). Maxsus iqtisodiy zonalarda yoki kichik biznes maqomidagi kompaniyalar imtiyozli stavkalar yoki soliq ta'tillaridan foydalanishi mumkin. Advizen Consulting sizning tuzilmangiz uchun eng samarali soliq rejimini aniqlash bo'yicha maslahat beradi.",
      },
      {
        q: "O'zbekistonda kompaniyani ro'yxatdan o'tkazish qancha vaqt oladi?",
        a: "MChJ yagona elektron hukumat portali orqali 1–3 ish kuni ichida ro'yxatdan o'tkazilishi mumkin. Soliq hisobiga qo'yish, korporativ bank hisobini ochish va nizom hujjatlarini tayyorlashni o'z ichiga olgan to'liq operatsion tayyorlik bank va tuzilma murakkabligiga qarab odatda 1–3 hafta davom etadi. Advizen Consulting butun jarayonni boshidan oxirigacha boshqaradi.",
      },
      {
        q: "Advizen Consulting chet el kompaniyalari va xalqaro investorlar bilan ishlaydimi?",
        a: "Ha — chet el investorlari va transmilliy kompaniyalar mijozlarimizning katta qismini tashkil etadi. Biz Yevropa, Fors ko'rfazi, Osiyo va MDH davlatlaridan O'zbekiston va Markaziy Osiyo bozorlariga kirayotgan kompaniyalar uchun bozorga kirish tuzilmasini yaratish, chegaralararo bitimlar, transfer narxlash va tartibga solish muvofiqligini muntazam ravishda maslahatlashtiramiz.",
      },
    ],
  },
  expertise: {
    en: [
      {
        q: "What advisory disciplines does Advizen Consulting offer?",
        a: "We offer seven integrated disciplines: tax consulting, legal advisory, accounting, HR services, funding, M&A advisory, and due diligence — all delivered by one coordinated team.",
      },
      {
        q: "Can you handle tax and legal matters together?",
        a: "Yes. Our integrated model means your tax and legal advisors work in close coordination, avoiding conflicting advice and ensuring every structure is sound from both perspectives simultaneously.",
      },
      {
        q: "Which sectors do you specialise in?",
        a: "We have deep sector experience in energy & infrastructure, real estate & construction, manufacturing, retail & FMCG, financial services, and technology. Our team's engagement track record spans over 200 advised deals.",
      },
      {
        q: "How long does a typical engagement take?",
        a: "Scope varies by service: a due diligence typically takes 3–6 weeks, entity registration 1–4 weeks, and ongoing advisory retainers run month-to-month. We structure timelines to match your business milestones.",
      },
      {
        q: "What are the benefits of Uzbekistan's special economic zones?",
        a: "Uzbekistan operates 20+ special and free economic zones (SEZs/FEZs) offering significant incentives: full exemption from corporate profit tax and property tax for up to 10 years, VAT exemption on imported equipment, simplified customs procedures, and streamlined permitting. Notable zones include the Navoi FEZ, Urgut SEZ, and the Tashkent IT Park for technology companies. Advizen Consulting advises on zone eligibility, registration, and structuring to maximise the available benefits.",
      },
      {
        q: "How does an Employer of Record (EOR) work in Central Asia?",
        a: "An Employer of Record is a local legal entity that employs staff on behalf of a foreign company — handling payroll, social contributions, employment contracts, and full compliance with Uzbek labour law. This allows international companies to hire in Uzbekistan immediately, without first incorporating a local entity. Advizen Consulting provides EOR services that enable compliant hiring within days rather than months.",
      },
      {
        q: "What compliance obligations do foreign companies face in Uzbekistan?",
        a: "Foreign companies operating in Uzbekistan must manage: corporate profit tax filings (quarterly advance payments plus annual return), VAT registration and monthly reporting once turnover exceeds the threshold, transfer pricing documentation for related-party transactions, currency control regulations, annual financial statements under national accounting standards (NSBU), and statistical reporting. Non-compliance carries administrative penalties and, in serious cases, criminal liability. Advizen Consulting provides ongoing compliance management so nothing falls through the cracks.",
      },
      {
        q: "What does due diligence cover for transactions in Uzbekistan?",
        a: "Our due diligence engagements cover four workstreams: legal (corporate structure, title, key contracts, litigation), tax (historical liabilities, transfer pricing exposure, structuring risks), financial (statements, working capital, debt), and regulatory (licences, permits, sector-specific compliance). For real estate and infrastructure deals we also assess land rights and construction permitting. Reports are delivered in English and Russian.",
      },
      {
        q: "Can you help with crypto and fintech licensing in Uzbekistan?",
        a: "Yes. Uzbekistan has established one of the region's most progressive digital asset frameworks, regulated by the National Agency for Perspective Projects (NAPP). Crypto exchanges, custody providers, and digital asset brokers must obtain a NAPP licence. Advizen Consulting advises on licence applications, corporate structuring for Crypto-Asset Service Provider (CASP) status, AML/KYC programme development, and ongoing regulatory compliance for fintech and crypto businesses operating in Uzbekistan.",
      },
    ],
    ru: [
      {
        q: "Какие консалтинговые направления предлагает Advizen Consulting?",
        a: "Мы предлагаем семь интегрированных направлений: налоговый консалтинг, юридическое сопровождение, бухгалтерия, HR-услуги, финансирование, консультирование по M&A и due diligence — всё от одной слаженной команды.",
      },
      {
        q: "Можете ли вы одновременно заниматься налоговыми и юридическими вопросами?",
        a: "Да. Наша интегрированная модель означает, что ваши налоговые и юридические консультанты работают в тесной координации, исключая противоречивые советы и обеспечивая надёжность структуры с обеих точек зрения одновременно.",
      },
      {
        q: "В каких отраслях вы специализируетесь?",
        a: "У нас глубокий опыт в энергетике и инфраструктуре, недвижимости и строительстве, производстве, розничной торговле и FMCG, финансовых услугах и технологиях. Портфель нашей команды насчитывает более 200 сделок.",
      },
      {
        q: "Сколько времени занимает типичное взаимодействие?",
        a: "Сроки зависят от услуги: due diligence обычно занимает 3–6 недель, регистрация юридического лица — 1–4 недели, текущее консультирование предусматривает ежемесячный ретейнер. Сроки планируются с учётом ваших бизнес-задач.",
      },
      {
        q: "Каковы преимущества специальных экономических зон Узбекистана?",
        a: "В Узбекистане функционирует более 20 специальных и свободных экономических зон (СЭЗ/СИЗ), предоставляющих существенные льготы: полное освобождение от налога на прибыль и налога на имущество на срок до 10 лет, освобождение от НДС при импорте оборудования, упрощённые таможенные процедуры и ускоренное согласование разрешений. Среди ключевых зон — Навоийская СИЗ, Ургутская СЭЗ и Ташкентский IT-парк (для технологических компаний). Advizen Consulting консультирует по критериям допуска, регистрации и структурированию для максимизации доступных льгот.",
      },
      {
        q: "Как работает Employer of Record (EOR) в Центральной Азии?",
        a: "Employer of Record (EOR) — это местное юридическое лицо, которое нанимает сотрудников от имени иностранной компании, обеспечивая начисление заработной платы, уплату социальных взносов, оформление трудовых договоров и полное соответствие трудовому законодательству Узбекистана. Это позволяет международным компаниям оперативно нанимать специалистов без необходимости регистрировать местное юридическое лицо. Advizen Consulting предоставляет услуги EOR: официальное трудоустройство возможно уже в течение нескольких дней.",
      },
      {
        q: "Какие обязательства по соблюдению законодательства есть у иностранных компаний в Узбекистане?",
        a: "Иностранные компании, работающие в Узбекистане, обязаны соблюдать: налог на прибыль (квартальные авансы и годовая декларация), регистрацию и ежемесячную отчётность по НДС при превышении порога оборота, документирование трансфертных цен по сделкам со связанными сторонами, требования валютного контроля, подготовку годовой финансовой отчётности по НСБУ и статистическую отчётность. Нарушения влекут административные санкции, а в серьёзных случаях — уголовную ответственность. Advizen Consulting обеспечивает текущее управление комплаенсом, чтобы ни одно обязательство не было упущено.",
      },
      {
        q: "Что охватывает due diligence при сделках в Узбекистане?",
        a: "Наши проекты due diligence включают четыре направления: юридическое (корпоративная структура, права собственности, ключевые договоры, судебные споры), налоговое (исторические обязательства, риски трансфертного ценообразования, риски структурирования), финансовое (отчётность, оборотный капитал, задолженность) и регуляторное (лицензирование, разрешения, соответствие отраслевым нормам). По сделкам с недвижимостью и инфраструктурой мы также анализируем права на земельные участки и разрешения на строительство. Отчёты предоставляются на английском и русском языках.",
      },
      {
        q: "Помогаете ли вы с лицензированием крипто- и финтех-бизнеса в Узбекистане?",
        a: "Да. Узбекистан создал один из наиболее прогрессивных регуляторных режимов для цифровых активов в регионе под руководством Национального агентства перспективных проектов (НАПП). Криптобиржи, провайдеры хранения и брокеры цифровых активов обязаны получить лицензию НАПП. Advizen Consulting консультирует по подаче лицензионных заявок, корпоративному структурированию для получения статуса CASP, разработке программ AML/KYC и текущему регуляторному комплаенсу для финтех- и крипто-компаний в Узбекистане.",
      },
    ],
    uz: [
      {
        q: "Advizen Consulting qanday maslahat yo'nalishlarini taklif etadi?",
        a: "Biz yetti integratsiyalashgan yo'nalish taklif etamiz: soliq konsaltingi, yuridik maslahat, buxgalteriya, HR xizmatlari, moliyalashtirish, M&A maslahat va due diligence — barchasi bir muvofiqlashtirilgan jamoa tomonidan amalga oshiriladi.",
      },
      {
        q: "Soliq va yuridik masalalarni bir vaqtda hal qila olasizmi?",
        a: "Ha. Integratsiyalashgan modelimiz soliq va yuridik maslahatchilaringiz yaqin muvofiqlashuvda ishlashini ta'minlaydi, ziddiyatli maslahatlarni istisno qiladi va har qanday tuzilmaning ikkala nuqtai nazardan bir vaqtda mustahkamligini kafolatlaydi.",
      },
      {
        q: "Qaysi sohalarda ixtisoslashasiz?",
        a: "Energetika va infratuzilma, ko'chmas mulk va qurilish, ishlab chiqarish, chakana savdo va FMCG, moliyaviy xizmatlar va texnologiya sohalarida chuqur tajribamiz bor. Jamoa portfelimizdagi bitimlar soni 200 dan oshadi.",
      },
      {
        q: "Odatiy hamkorlik qancha vaqt davom etadi?",
        a: "Muddatlar xizmat turiga qarab farqlanadi: due diligence odatda 3–6 hafta, yuridik shaxsni ro'yxatga olish 1–4 hafta davom etadi, joriy maslahat oylik reteyner asosida amalga oshiriladi. Jadvallar biznes maqsadlaringizga mos tarzda tuziladi.",
      },
      {
        q: "O'zbekistondagi maxsus iqtisodiy zonalarning afzalliklari qanday?",
        a: "O'zbekistonda 20 dan ortiq maxsus va erkin iqtisodiy zona (MIZ/EIZ) faoliyat yuritadi va ular muhim imtiyozlar taqdim etadi: 10 yilgacha foyda solig'i va mulk solig'idan to'liq ozod etish, uskunalar importida QQSdan ozod etish, soddalashtirilgan bojxona tartiblari va tezlashtirilgan ruxsatnomalar berish. Asosiy zonalarga Navoiy EIZ, Urgut MIZ va texnologiya kompaniyalari uchun Toshkent IT-parki kiradi. Advizen Consulting imtiyozlardan maksimal foydalanish uchun zonaga kirish mezonlari, ro'yxatdan o'tish va tuzilma yaratish bo'yicha maslahat beradi.",
      },
      {
        q: "Markaziy Osiyoda Employer of Record (EOR) qanday ishlaydi?",
        a: "Employer of Record (EOR) — chet el kompaniyasi nomidan xodimlarni ishga oladigan mahalliy yuridik shaxs bo'lib, ish haqi, ijtimoiy to'lovlar, mehnat shartnomalari va O'zbekiston mehnat qonunchiligiga to'liq muvofiqlikni ta'minlaydi. Bu xalqaro kompaniyalarga avval mahalliy yuridik shaxs ochmasdan O'zbekistonda zudlik bilan xodim yollash imkonini beradi. Advizen Consulting EOR xizmatlarini taqdim etadi — qonuniy ishga qabul oylar emas, kunlar ichida amalga oshiriladi.",
      },
      {
        q: "O'zbekistonda chet el kompaniyalari qanday muvofiqlik majburiyatlariga duch keladi?",
        a: "O'zbekistonda faoliyat yurituvchi chet el kompaniyalari quyidagilarni boshqarishlari shart: korporativ foyda solig'i bo'yicha hisobotlar (choraklik avans to'lovlari va yillik deklaratsiya), aylanma chegarasidan oshganda QQS ro'yxatidan o'tish va oylik hisobot, bog'liq tomonlar bilan bitimlar uchun transfer narxlash hujjatlashtirish, valyuta nazorati talablari, milliy buxgalteriya standartlari (MHBS) bo'yicha yillik moliyaviy hisobot va statistik hisobot. Talablarga rioya etmaslik ma'muriy jazolarga, jiddiy hollarda esa jinoiy javobgarlikka olib keladi. Advizen Consulting hech narsa e'tibordan chetda qolmasligi uchun doimiy muvofiqlik boshqaruvini taqdim etadi.",
      },
      {
        q: "O'zbekistondagi bitimlar bo'yicha due diligence nimalarni qamrab oladi?",
        a: "Bizning due diligence loyihalarimiz to'rt yo'nalishni qamrab oladi: yuridik (korporativ tuzilma, mulk huquqlari, asosiy shartnomalar, sud nizolari), soliq (tarixiy majburiyatlar, transfer narxlash risklari, tuzilma risklari), moliyaviy (hisobotlar, aylanma kapital, qarz) va tartibga soluvchi (litsenziyalar, ruxsatnomalar, tarmoq qoidalariga muvofiqlik). Ko'chmas mulk va infratuzilma bitimlari uchun yer huquqlari va qurilish ruxsatnomalarini ham baholaymiz. Hisobotlar ingliz va rus tillarida taqdim etiladi.",
      },
      {
        q: "O'zbekistonda kripto va fintech litsenziyasini olishda yordam bera olasizmi?",
        a: "Ha. O'zbekiston Istiqbolli loyihalar bo'yicha milliy agentlik (NAPP) tomonidan tartibga solinadigan, mintaqadagi eng ilg'or raqamli aktivlar tizimini yaratdi. Kripto birjalari, saqlash provayderlari va raqamli aktiv brokerlari NAPP litsenziyasini olishlari shart. Advizen Consulting litsenziya arizalari, CASP (kripto-aktiv xizmat provayderi) maqomi uchun korporativ tuzilma yaratish, AML/KYC dasturlarini ishlab chiqish va O'zbekistonda faoliyat yuritayotgan fintech va kripto kompaniyalar uchun doimiy tartibga solish muvofiqligi bo'yicha maslahat beradi.",
      },
    ],
  },
};
