type FaqItem = { q: string; a: string };
type LocaleData = { en: FaqItem[]; ru: FaqItem[]; uz: FaqItem[] };
export type FaqPage = "home" | "expertise" | "contact";

export const FAQ_DATA: Record<FaqPage, LocaleData> = {
  home: {
    en: [
      {
        q: "What is Advizen Consulting?",
        a: "Advizen Consulting LLC is an advisory firm in Tashkent, Uzbekistan. It advises foreign and local companies on tax, law, accounting, HR and payroll, funding, M&A and due diligence, and runs managed services such as entity management, Employer of Record, payroll, work permits and a virtual office. Work is coordinated by one partner, in English, Russian or Uzbek.",
      },
      {
        q: "Which markets do you serve?",
        a: "Our work is focused on Uzbekistan. We advise foreign investors, international groups and local companies that are entering the Uzbek market or already operate there.",
      },
      {
        q: "What makes Advizen Consulting different from other consultancies?",
        a: "We combine seven advisory disciplines and seven managed services in one firm, so tax, legal, accounting and HR work on the same matter is done by one team and coordinated by one partner. Our advisers' record includes fifteen engagements, more than 80 companies registered and more than 30 tax and legal due diligences.",
      },
      {
        q: "How do I start working with Advizen Consulting?",
        a: "Book a consultation through the contact page. We discuss your situation, agree which services you need and send you a proposed scope of work.",
      },
      {
        q: "What business structures are available in Uzbekistan?",
        a: "The main options are a limited liability company (LLC / MChJ), a joint-stock company (JSC / AJ), and a branch or representative office of a foreign company. An LLC may have up to 50 participants and has no general minimum charter capital (Law on LLCs No. ZRU-1137 of 21.04.2026, Arts. 8, 15). A branch can carry on the foreign company's business and is taxed as its permanent establishment (Tax Code, Art. 36). A representative office is not a legal entity, may not carry out commercial activity and is accredited by the Ministry of Investment, Industry and Trade (Regulation approved by Cabinet of Ministers Resolution No. 76 of 07.02.2024, paras. 3, 7).",
      },
      {
        q: "Can foreign investors own 100% of a company in Uzbekistan?",
        a: "Yes, as a general rule. The Law on Investments and Investment Activity (No. ZRU-598 of 25.12.2019), which replaced the former Law on Foreign Investments, prohibits discrimination against investors based on citizenship or country of origin (Art. 15), guarantees free transfer of investment income abroad once taxes are paid (Art. 17), and rules out nationalisation, allowing requisition only in emergencies and with compensation (Art. 21). Some regulated sectors, such as banking, limit foreign shareholdings or require regulator approval, and licensed activities may have their own conditions.",
      },
      {
        q: "What are the main tax rates in Uzbekistan?",
        a: "The standard rates are 15% profit tax (Tax Code, Art. 337), 12% VAT (Art. 258), 12% personal income tax for residents (Art. 381) and 12% social tax for most employers (Art. 405). Banks, mobile operators and some other taxpayers pay 20% profit tax, and dividends received by resident companies and individuals are taxed at 5% (Arts. 337, 381). Small companies with income below the statutory threshold may pay turnover tax instead of profit tax and VAT (Arts. 461–462), and SEZ participants and other special regimes have their own incentives.",
      },
      {
        q: "How long does company registration take in Uzbekistan?",
        a: "State registration is done online or at public services centres; once a complete application is filed, it takes place in real time and within 30 minutes at most (Cabinet of Ministers Resolution No. 66 of 09.02.2017, Annex 3). The company is registered with the tax and statistics authorities at the same time, and the registration certificate also confirms tax registration (Tax Code, Art. 126). The longer steps are usually preparing and legalising foreign founders' documents and opening a bank account, which depend on the founders and the bank. Advizen Consulting can handle each of these steps.",
      },
      {
        q: "Does Advizen Consulting work with foreign companies and international investors?",
        a: "Yes. Our advisers' engagements on record include work for Russian and Chinese groups and other international companies in Uzbekistan: tax and customs structuring, due diligence, holding structures, transfer pricing documentation and market-entry advice. We also run ongoing accounting, payroll and compliance for foreign-owned companies.",
      },
    ],
    ru: [
      {
        q: "Что такое Advizen Consulting?",
        a: "Advizen Consulting LLC — консалтинговая компания из Ташкента. Консультирует иностранные и местные компании по налогам, праву, бухгалтерии, HR и зарплате, финансированию, M&A и due diligence, а также ведёт операционные сервисы: управление компанией, Employer of Record, расчёт зарплаты, разрешения на работу и виртуальный офис. Работу координирует один партнёр, на русском, английском или узбекском.",
      },
      {
        q: "На каких рынках вы работаете?",
        a: "Мы работаем в Узбекистане. Консультируем иностранных инвесторов, международные группы и местные компании, которые выходят на узбекский рынок или уже работают на нём.",
      },
      {
        q: "Чем Advizen Consulting отличается от других консалтинговых компаний?",
        a: "Мы объединяем семь консалтинговых направлений и семь операционных сервисов в одной компании, поэтому налоговые, юридические, бухгалтерские и кадровые вопросы по одному проекту ведёт одна команда под координацией одного партнёра. В активе наших консультантов — пятнадцать проектов, более 80 зарегистрированных компаний и более 30 налоговых и юридических due diligence.",
      },
      {
        q: "Как начать сотрудничество с Advizen Consulting?",
        a: "Запишитесь на консультацию через страницу контактов. Мы обсудим вашу ситуацию, определим, какие услуги нужны, и направим предложение по объёму работ.",
      },
      {
        q: "Какие организационно-правовые формы доступны в Узбекистане?",
        a: "Основные варианты — общество с ограниченной ответственностью (ООО / MChJ), акционерное общество (АО / AJ), филиал или представительство иностранной компании. В ООО может быть до 50 участников, общего минимального уставного фонда нет (Закон об ООО № ЗРУ-1137 от 21.04.2026, ст. 8, 15). Филиал может вести предпринимательскую деятельность иностранной компании и облагается налогом как её постоянное учреждение (НК, ст. 36). Представительство не является юридическим лицом, не ведёт коммерческую деятельность и аккредитуется Министерством инвестиций, промышленности и торговли (Положение, утверждённое постановлением Кабинета Министров № 76 от 07.02.2024, пп. 3, 7).",
      },
      {
        q: "Может ли иностранный инвестор владеть 100% компании в Узбекистане?",
        a: "Да, по общему правилу. Закон «Об инвестициях и инвестиционной деятельности» (№ ЗРУ-598 от 25.12.2019), заменивший прежний Закон «Об иностранных инвестициях», запрещает дискриминацию инвесторов по гражданству или стране происхождения (ст. 15), гарантирует свободный перевод доходов от инвестиций за рубеж после уплаты налогов (ст. 17) и исключает национализацию, допуская реквизицию только в чрезвычайных ситуациях и с компенсацией (ст. 21). В отдельных регулируемых отраслях, например в банковской, долю иностранного участия ограничивают или требуют одобрения регулятора, а для лицензируемых видов деятельности могут действовать свои условия.",
      },
      {
        q: "Каковы основные налоговые ставки в Узбекистане?",
        a: "Стандартные ставки: налог на прибыль — 15% (НК, ст. 337), НДС — 12% (ст. 258), НДФЛ для резидентов — 12% (ст. 381), социальный налог для большинства работодателей — 12% (ст. 405). Банки, операторы мобильной связи и ряд других налогоплательщиков платят налог на прибыль по ставке 20%, а дивиденды, получаемые резидентами — юридическими и физическими лицами, облагаются по ставке 5% (ст. 337, 381). Небольшие компании с доходом ниже установленного порога могут платить налог с оборота вместо налога на прибыль и НДС (ст. 461–462), а для участников СЭЗ и других специальных режимов действуют свои льготы.",
      },
      {
        q: "Сколько времени занимает регистрация компании в Узбекистане?",
        a: "Государственная регистрация проводится онлайн или через центры государственных услуг; при полном комплекте документов она осуществляется в режиме реального времени, но не более 30 минут (постановление Кабинета Министров № 66 от 09.02.2017, приложение № 3). Одновременно компания ставится на учёт в налоговых органах и органах статистики, а свидетельство о государственной регистрации подтверждает и налоговый учёт (НК, ст. 126). Больше времени обычно занимают подготовка и легализация документов иностранных учредителей и открытие банковского счёта — здесь сроки зависят от учредителей и банка. Advizen Consulting может взять на себя каждый из этих этапов.",
      },
      {
        q: "Работает ли Advizen Consulting с иностранными компаниями и международными инвесторами?",
        a: "Да. В числе проектов наших консультантов — работа для российских и китайских групп и других международных компаний в Узбекистане: налоговое и таможенное структурирование, due diligence, холдинговые структуры, документация по трансфертному ценообразованию и сопровождение выхода на рынок. Мы также ведём текущий бухгалтерский учёт, расчёт зарплаты и комплаенс для компаний с иностранным капиталом.",
      },
    ],
    uz: [
      {
        q: "Advizen Consulting nima?",
        a: "Advizen Consulting LLC — Toshkentdagi maslahat kompaniyasi. Xorijiy va mahalliy kompaniyalarga soliq, huquq, buxgalteriya, HR va ish haqi, moliyalashtirish, M&A va due diligence boʻyicha maslahat beradi, shuningdek kompaniyani boshqarish, Employer of Record, ish haqi hisob-kitobi, ish ruxsatnomalari va virtual ofis xizmatlarini koʻrsatadi. Ishni bitta hamkor muvofiqlashtiradi, oʻzbek, rus yoki ingliz tilida.",
      },
      {
        q: "Qaysi bozorlarda xizmat koʻrsatasiz?",
        a: "Biz Oʻzbekistonda ishlaymiz. Oʻzbekiston bozoriga kirayotgan yoki unda faoliyat yuritayotgan xorijiy investorlar, xalqaro guruhlar va mahalliy kompaniyalarga maslahat beramiz.",
      },
      {
        q: "Advizen Consulting boshqa konsalting kompaniyalaridan qanday farq qiladi?",
        a: "Biz yetti maslahat yoʻnalishi va yetti operatsion xizmatni bitta kompaniyada birlashtiramiz, shuning uchun bitta loyiha boʻyicha soliq, yuridik, buxgalteriya va kadrlar masalalarini bitta jamoa olib boradi va ularni bitta hamkor muvofiqlashtiradi. Maslahatchilarimiz hisobida oʻn beshta loyiha, 80 dan ortiq roʻyxatdan oʻtkazilgan kompaniya va 30 dan ortiq soliq va yuridik due diligence bor.",
      },
      {
        q: "Advizen Consulting bilan hamkorlikni qanday boshlash mumkin?",
        a: "Kontakt sahifasi orqali maslahatga yoziling. Vaziyatingizni muhokama qilamiz, qaysi xizmatlar kerakligini aniqlaymiz va ishlar hajmi boʻyicha taklif yuboramiz.",
      },
      {
        q: "Oʻzbekistonda qanday tashkiliy-huquqiy shakllar mavjud?",
        a: "Asosiy shakllar — masʼuliyati cheklangan jamiyat (MChJ), aksiyadorlik jamiyati (AJ), xorijiy kompaniyaning filiali yoki vakolatxonasi. MChJda 50 tagacha ishtirokchi boʻlishi mumkin, umumiy minimal ustav fondi belgilanmagan (MChJ toʻgʻrisidagi 2026-yil 21-apreldagi OʻRQ-1137-son Qonun, 8, 15-moddalar). Filial xorijiy kompaniyaning tadbirkorlik faoliyatini amalga oshirishi mumkin va uning doimiy muassasasi sifatida soliqqa tortiladi (SK, 36-modda). Vakolatxona yuridik shaxs hisoblanmaydi, tijorat faoliyatini amalga oshirmaydi va Investitsiyalar, sanoat va savdo vazirligi tomonidan akkreditatsiya qilinadi (Vazirlar Mahkamasining 2024-yil 7-fevraldagi 76-son qarori bilan tasdiqlangan Nizom, 3, 7-bandlar).",
      },
      {
        q: "Chet el investori Oʻzbekistondagi kompaniyaning 100% ulushiga ega boʻla oladimi?",
        a: "Ha, umumiy qoidaga koʻra. «Investitsiyalar va investitsiya faoliyati toʻgʻrisida»gi Qonun (2019-yil 25-dekabrdagi OʻRQ-598-son) avvalgi «Chet el investitsiyalari toʻgʻrisida»gi Qonun oʻrniga qabul qilingan va investorlarni fuqaroligi yoki kelib chiqqan mamlakati boʻyicha kamsitishni taqiqlaydi (15-modda), soliqlar toʻlangandan keyin investitsiya daromadlarini xorijga erkin oʻtkazishni kafolatlaydi (17-modda) hamda milliylashtirishni istisno etib, rekvizitsiyaga faqat favqulodda holatlarda va kompensatsiya bilan yoʻl qoʻyadi (21-modda). Bank sohasi kabi ayrim tartibga solinadigan sohalarda xorijiy ulush cheklanadi yoki regulyator roziligi talab qilinadi, litsenziyalanadigan faoliyat turlarida esa oʻz shartlari boʻlishi mumkin.",
      },
      {
        q: "Oʻzbekistondagi asosiy soliq stavkalari qanday?",
        a: "Asosiy stavkalar: foyda soligʻi — 15% (SK, 337-modda), QQS — 12% (258-modda), rezidentlar uchun jismoniy shaxslardan olinadigan daromad soligʻi — 12% (381-modda), aksariyat ish beruvchilar uchun ijtimoiy soliq — 12% (405-modda). Banklar, mobil aloqa operatorlari va ayrim boshqa soliq toʻlovchilar foyda soligʻini 20% stavkada toʻlaydi, rezident yuridik va jismoniy shaxslar oladigan dividendlar esa 5% stavkada soliqqa tortiladi (337, 381-moddalar). Daromadi belgilangan chegaradan past boʻlgan kichik kompaniyalar foyda soligʻi va QQS oʻrniga aylanmadan olinadigan soliq toʻlashi mumkin (461–462-moddalar), MIZ ishtirokchilari va boshqa maxsus rejimlar uchun esa alohida imtiyozlar mavjud.",
      },
      {
        q: "Oʻzbekistonda kompaniyani roʻyxatdan oʻtkazish qancha vaqt oladi?",
        a: "Davlat roʻyxatidan oʻtkazish onlayn yoki davlat xizmatlari markazlari orqali amalga oshiriladi; hujjatlar toʻliq boʻlsa, u real vaqt rejimida, lekin 30 daqiqadan koʻp boʻlmagan muddatda bajariladi (Vazirlar Mahkamasining 2017-yil 9-fevraldagi 66-son qarori, 3-ilova). Bir vaqtning oʻzida kompaniya soliq va statistika organlarida hisobga qoʻyiladi, davlat roʻyxatidan oʻtganlik toʻgʻrisidagi guvohnoma soliq hisobini ham tasdiqlaydi (SK, 126-modda). Odatda xorijiy taʼsischilar hujjatlarini tayyorlash va legallashtirish hamda bank hisobini ochish koʻproq vaqt oladi va bu taʼsischilar hamda bankka bogʻliq. Advizen Consulting ushbu bosqichlarning har birini oʻz zimmasiga olishi mumkin.",
      },
      {
        q: "Advizen Consulting chet el kompaniyalari va xalqaro investorlar bilan ishlaydimi?",
        a: "Ha. Maslahatchilarimiz loyihalari orasida Oʻzbekistondagi Rossiya va Xitoy guruhlari hamda boshqa xalqaro kompaniyalar uchun ishlar bor: soliq va bojxona tuzilmasi, due diligence, xolding tuzilmalari, transfer narxlari hujjatlari va bozorga kirish boʻyicha maslahat. Shuningdek, xorijiy kapitalli kompaniyalar uchun joriy buxgalteriya hisobi, ish haqi hisob-kitobi va muvofiqlik nazoratini olib boramiz.",
      },
    ],
  },
  expertise: {
    en: [
      {
        q: "What advisory disciplines does Advizen Consulting offer?",
        a: "Seven: tax, legal, accounting, HR and payroll, funding, M&A and due diligence. Alongside them we run managed services: entity management, corporate services, Employer of Record, payroll, work permits, virtual office and compliance monitoring.",
      },
      {
        q: "Can you handle tax and legal matters together?",
        a: "Yes. Tax and legal advisers work on the same matter under one coordinating partner, so a structure is reviewed from both angles before it is put in place.",
      },
      {
        q: "Which sectors do you specialise in?",
        a: "Six sectors: financial services, energy and industrials, technology and digital, real estate and infrastructure, consumer and lifestyle, and healthcare and social. Our advisers' work on record ranges from tax, accounting and customs structuring for a nuclear power plant construction project with a budget of over $10B to acting as local consultants on banking and Islamic finance legislation.",
      },
      {
        q: "How long does a typical engagement take?",
        a: "It depends on the service. A due diligence depends on its scope, the size of the target and how complete the data room is, so we confirm the timetable after seeing the data room. State registration of a company takes no more than 30 minutes once the application is complete (Cabinet of Ministers Resolution No. 66 of 09.02.2017, Annex 3), but preparing founders' documents and opening a bank account take longer. Managed services such as accounting, payroll and compliance monitoring run on an ongoing basis.",
      },
      {
        q: "What are the benefits of Uzbekistan's special economic zones?",
        a: "SEZ participants are exempt from property tax and land tax for a period set by the President depending on the investment, and from profit tax for 3, 5 or 10 years for investments of USD 3–5 million, USD 5–15 million and USD 15 million or more (Tax Code, Art. 473). For companies that became participants on or after 1 April 2026, the profit tax benefit takes the form of accelerated depreciation instead, and all these benefits cover only the activities in the investment agreement with the zone's directorate (Art. 473). Zones have special customs and tax regimes, and participants may defer import VAT and customs duty on components, raw materials and materials for up to 120 days (Law on SEZs No. ZRU-604 of 17.02.2020; Presidential Resolution PP-5243 of 14.09.2021). The IT Park is a separate regime with its own residency rules, and we advise on eligibility for either.",
      },
      {
        q: "How does an Employer of Record (EOR) work in Central Asia?",
        a: "An Employer of Record is a local company that becomes the formal employer of people who work for a foreign client. In Uzbekistan it signs the employment contract under the Labour Code, runs payroll, withholds 12% personal income tax and pays 12% social tax (Tax Code, Arts. 381, 382, 405), while the client directs the work and pays the EOR a service fee. This lets a foreign company hire in Uzbekistan without first setting up its own entity; timing depends mainly on the employee's documents and, for foreign nationals, on work authorisation. Advizen Consulting provides EOR services in Uzbekistan.",
      },
      {
        q: "What compliance obligations do foreign companies face in Uzbekistan?",
        a: "A local company or permanent establishment files profit tax returns quarterly by the 20th of the following month and annually by 1 March, paying tax by the same dates; monthly advance payments, due by the 23rd, apply only if prior-year income exceeded UZS 20 billion (Tax Code, Arts. 338–340). VAT payers, which include all legal entities not on turnover tax, file monthly VAT returns by the 20th (Arts. 237, 259, 273), and controlled transactions with related parties must be notified to the tax authority, with transfer pricing documentation provided on request (Arts. 182, 193). Companies also follow currency regulation rules, submit statistical reports and file financial statements under national accounting standards or IFRS where applicable, quarterly or, for small enterprises and micro-firms, annually (Law on Accounting, Arts. 10, 25). Breaches lead to financial sanctions under the Tax Code and, in serious cases, criminal liability; our compliance monitoring service tracks these deadlines.",
      },
      {
        q: "What does due diligence cover for transactions in Uzbekistan?",
        a: "Our due diligence covers tax (historical liabilities, transfer pricing, structuring risks), legal (corporate structure, title to assets, key contracts, disputes, licences and permits) and financial matters (statements, working capital, debt), as a red-flag or a full-scope review. For real estate and infrastructure deals we also review land rights and construction permits. Reports are prepared in English, Russian or Uzbek.",
      },
      {
        q: "Can you help with crypto and fintech licensing in Uzbekistan?",
        a: "Yes. Crypto-asset service providers are licensed by the National Agency of Prospective Projects (NAPP), whose public licence register has separate categories for crypto exchanges, crypto depositories and crypto shops (napp.uz). Payment organisations and payment system operators are licensed separately by the Central Bank (Law on Payments and Payment Systems No. ZRU-578 of 01.11.2019, Arts. 15, 21). We advise on licence applications, corporate structure, AML/KYC procedures and ongoing compliance for crypto and fintech companies.",
      },
    ],
    ru: [
      {
        q: "Какие консалтинговые направления предлагает Advizen Consulting?",
        a: "Семь: налоги, право, бухгалтерский учёт, HR и расчёт зарплаты, финансирование, M&A и due diligence. Помимо этого мы ведём операционные сервисы: управление компанией, корпоративное обслуживание, Employer of Record, расчёт зарплаты, разрешения на работу, виртуальный офис и мониторинг комплаенса.",
      },
      {
        q: "Можете ли вы одновременно заниматься налоговыми и юридическими вопросами?",
        a: "Да. Налоговые и юридические консультанты работают над одним проектом под координацией одного партнёра, поэтому структура проверяется с обеих сторон до её внедрения.",
      },
      {
        q: "В каких отраслях вы специализируетесь?",
        a: "Шесть отраслей: финансовые услуги, энергетика и промышленность, технологии и цифровая сфера, недвижимость и инфраструктура, потребительский сектор, здравоохранение и социальная сфера. В работе наших консультантов — от налогового, бухгалтерского и таможенного структурирования строительства атомной электростанции с бюджетом более $10 млрд до работы местными консультантами по законодательству о банках и исламских финансах.",
      },
      {
        q: "Сколько времени занимает типичное взаимодействие?",
        a: "Это зависит от услуги. Срок due diligence зависит от объёма проверки, размера компании и полноты data room, поэтому график мы согласуем после знакомства с data room. Государственная регистрация компании при полном комплекте документов занимает не более 30 минут (постановление Кабинета Министров № 66 от 09.02.2017, приложение № 3), но подготовка документов учредителей и открытие банковского счёта требуют больше времени. Операционные сервисы — бухгалтерский учёт, расчёт зарплаты, мониторинг комплаенса — оказываются на постоянной основе.",
      },
      {
        q: "Каковы преимущества специальных экономических зон Узбекистана?",
        a: "Участники СЭЗ освобождаются от налога на имущество и земельного налога на срок, определяемый решением Президента в зависимости от объёма инвестиций, и от налога на прибыль на 3, 5 или 10 лет при инвестициях от 3 до 5 млн, от 5 до 15 млн и от 15 млн долларов США (НК, ст. 473). Для получивших статус участника с 1 апреля 2026 года льгота по налогу на прибыль предоставляется в форме права на ускоренную амортизацию, а все эти льготы распространяются только на виды деятельности, предусмотренные соглашением об инвестировании с дирекцией СЭЗ (ст. 473). В зонах действуют специальные таможенный и налоговый режимы, а участники вправе получить отсрочку уплаты НДС и таможенной пошлины при импорте комплектующих, сырья и материалов на срок до 120 дней (Закон «О специальных экономических зонах» № ЗРУ-604 от 17.02.2020; постановление Президента ПП-5243 от 14.09.2021). IT Park — отдельный режим со своими условиями резидентства; мы консультируем по соответствию критериям обоих режимов.",
      },
      {
        q: "Как работает Employer of Record (EOR) в Центральной Азии?",
        a: "Employer of Record (EOR) — местная компания, которая становится официальным работодателем сотрудников, работающих на иностранного клиента. В Узбекистане она заключает трудовой договор по Трудовому кодексу, начисляет зарплату, удерживает НДФЛ по ставке 12% и уплачивает социальный налог 12% (НК, ст. 381, 382, 405), а клиент ставит задачи и оплачивает услуги EOR. Это позволяет иностранной компании нанимать сотрудников в Узбекистане без создания собственного юрлица; сроки зависят в основном от документов сотрудника, а для иностранных граждан — от оформления права на работу. Advizen Consulting оказывает услуги EOR в Узбекистане.",
      },
      {
        q: "Какие обязательства по соблюдению законодательства есть у иностранных компаний в Узбекистане?",
        a: "Местная компания или постоянное учреждение подаёт отчётность по налогу на прибыль ежеквартально — не позднее 20-го числа следующего месяца — и по итогам года не позднее 1 марта, уплачивая налог в те же сроки; ежемесячные авансовые платежи до 23-го числа вносят только налогоплательщики с совокупным доходом за прошлый год свыше 20 млрд сумов (НК, ст. 338–340). Плательщики НДС — все юридические лица, кроме плательщиков налога с оборота, — сдают отчётность по НДС ежемесячно до 20-го числа (ст. 237, 259, 273), а о контролируемых сделках со взаимосвязанными лицами нужно уведомлять налоговый орган и по запросу представлять документацию по трансфертному ценообразованию (ст. 182, 193). Кроме того, компании соблюдают требования валютного регулирования, сдают статистическую отчётность и финансовую отчётность по национальным стандартам или МСФО, где это применимо, — ежеквартально, а малые предприятия и микрофирмы только годовую (Закон «О бухгалтерском учёте», ст. 10, 25). Нарушения влекут финансовые санкции по НК, а в серьёзных случаях — уголовную ответственность; наш сервис мониторинга комплаенса отслеживает эти сроки.",
      },
      {
        q: "Что охватывает due diligence при сделках в Узбекистане?",
        a: "Наш due diligence охватывает налоговые (исторические обязательства, трансфертное ценообразование, риски структурирования), юридические (корпоративная структура, права на активы, ключевые договоры, споры, лицензии и разрешения) и финансовые вопросы (отчётность, оборотный капитал, задолженность) — в формате red flag или полной проверки. По сделкам с недвижимостью и инфраструктурой мы также проверяем права на землю и разрешения на строительство. Отчёты готовятся на английском, русском или узбекском языке.",
      },
      {
        q: "Помогаете ли вы с лицензированием крипто- и финтех-бизнеса в Узбекистане?",
        a: "Да. Поставщики услуг в сфере оборота крипто-активов лицензируются Национальным агентством перспективных проектов (НАПП); в его открытом реестре лицензий отдельно выделены криптобиржи, криптодепозитарии и криптомагазины (napp.uz). Платёжные организации и операторы платёжных систем лицензируются отдельно Центральным банком (Закон «О платежах и платёжных системах» № ЗРУ-578 от 01.11.2019, ст. 15, 21). Мы консультируем по лицензионным заявкам, корпоративной структуре, процедурам ПОД/ФТ и KYC и текущему комплаенсу крипто- и финтех-компаний.",
      },
    ],
    uz: [
      {
        q: "Advizen Consulting qanday maslahat yoʻnalishlarini taklif etadi?",
        a: "Yettita: soliq, huquq, buxgalteriya, HR va ish haqi, moliyalashtirish, M&A va due diligence. Ular bilan birga operatsion xizmatlarni ham koʻrsatamiz: kompaniyani boshqarish, korporativ xizmatlar, Employer of Record, ish haqi hisob-kitobi, ish ruxsatnomalari, virtual ofis va muvofiqlik monitoringi.",
      },
      {
        q: "Soliq va yuridik masalalarni bir vaqtda hal qila olasizmi?",
        a: "Ha. Soliq va yuridik maslahatchilar bitta loyiha ustida bitta hamkor muvofiqlashtiruvida ishlaydi, shuning uchun tuzilma joriy etilishidan oldin ikkala tomondan tekshiriladi.",
      },
      {
        q: "Qaysi sohalarda ixtisoslashasiz?",
        a: "Oltita soha: moliyaviy xizmatlar, energetika va sanoat, texnologiyalar va raqamli soha, koʻchmas mulk va infratuzilma, isteʼmol sektori, sogʻliqni saqlash va ijtimoiy soha. Maslahatchilarimiz ishlari byudjeti 10 mlrd dollardan ortiq atom elektr stansiyasi qurilishini soliq, buxgalteriya va bojxona boʻyicha tuzishdan tortib bank va islom moliyasi qonunchiligi boʻyicha mahalliy maslahatchi sifatida ishtirok etishgacha.",
      },
      {
        q: "Odatiy hamkorlik qancha vaqt davom etadi?",
        a: "Bu xizmat turiga bogʻliq. Due diligence muddati tekshiruv hajmi, kompaniya hajmi va data room toʻliqligiga bogʻliq, shuning uchun jadvalni data room bilan tanishgandan keyin kelishamiz. Hujjatlar toʻliq boʻlsa, kompaniyani davlat roʻyxatidan oʻtkazish 30 daqiqadan oshmaydi (Vazirlar Mahkamasining 2017-yil 9-fevraldagi 66-son qarori, 3-ilova), ammo taʼsischilar hujjatlarini tayyorlash va bank hisobini ochish koʻproq vaqt oladi. Buxgalteriya hisobi, ish haqi hisob-kitobi va muvofiqlik monitoringi kabi operatsion xizmatlar doimiy asosda koʻrsatiladi.",
      },
      {
        q: "Oʻzbekistondagi maxsus iqtisodiy zonalarning afzalliklari qanday?",
        a: "MIZ ishtirokchilari investitsiya hajmiga qarab Prezident qarori bilan belgilanadigan muddatga mol-mulk soligʻi va yer soligʻidan, shuningdek 3–5 mln, 5–15 mln va 15 mln AQSh dollari va undan ortiq investitsiyada mos ravishda 3, 5 yoki 10 yilga foyda soligʻidan ozod qilinadi (SK, 473-modda). 2026-yil 1-apreldan boshlab ishtirokchi maqomini olganlar uchun foyda soligʻi boʻyicha imtiyoz tezlashtirilgan amortizatsiya huquqi shaklida beriladi, barcha imtiyozlar esa faqat MIZ direksiyasi bilan tuzilgan investitsiya kelishuvida nazarda tutilgan faoliyat turlariga tatbiq etiladi (473-modda). Zonalarda maxsus bojxona va soliq rejimlari amal qiladi, ishtirokchilar butlovchi qismlar, xomashyo va materiallar importida QQS va bojxona boʻjini 120 kungacha kechiktirib toʻlash huquqiga ega («Maxsus iqtisodiy zonalar toʻgʻrisida»gi 2020-yil 17-fevraldagi OʻRQ-604-son Qonun; Prezidentning 2021-yil 14-sentabrdagi PQ-5243-son qarori). IT Park — oʻz rezidentlik shartlariga ega alohida rejim; har ikkala rejim mezonlariga muvofiqlik boʻyicha maslahat beramiz.",
      },
      {
        q: "Markaziy Osiyoda Employer of Record (EOR) qanday ishlaydi?",
        a: "Employer of Record (EOR) — xorijiy mijoz uchun ishlaydigan xodimlarning rasmiy ish beruvchisiga aylanadigan mahalliy kompaniya. Oʻzbekistonda u Mehnat kodeksi boʻyicha mehnat shartnomasini tuzadi, ish haqini hisoblaydi, 12% daromad soligʻini ushlab qoladi va 12% ijtimoiy soliqni toʻlaydi (SK, 381, 382, 405-moddalar), mijoz esa vazifalarni belgilaydi va EOR xizmatlari uchun haq toʻlaydi. Bu xorijiy kompaniyaga oʻz yuridik shaxsini ochmasdan Oʻzbekistonda xodim yollash imkonini beradi; muddat asosan xodim hujjatlariga, xorijiy fuqarolar uchun esa mehnat faoliyati huquqini rasmiylashtirishga bogʻliq. Advizen Consulting Oʻzbekistonda EOR xizmatlarini koʻrsatadi.",
      },
      {
        q: "Oʻzbekistonda chet el kompaniyalari qanday muvofiqlik majburiyatlariga duch keladi?",
        a: "Mahalliy kompaniya yoki doimiy muassasa foyda soligʻi boʻyicha hisobotni har chorakda — keyingi oyning 20-sanasidan kechiktirmay — va yil yakuni boʻyicha 1-martdan kechiktirmay topshiradi hamda soliqni shu muddatlarda toʻlaydi; har oylik avans toʻlovlarini 23-sanagacha faqat oʻtgan yildagi jami daromadi 20 mlrd soʻmdan oshgan soliq toʻlovchilar toʻlaydi (SK, 338–340-moddalar). QQS toʻlovchilari — aylanmadan olinadigan soliq toʻlovchilardan tashqari barcha yuridik shaxslar — QQS hisobotini har oy 20-sanagacha topshiradi (237, 259, 273-moddalar), oʻzaro bogʻliq shaxslar bilan nazorat qilinadigan bitimlar haqida esa soliq organini xabardor qilish va soʻrov boʻyicha transfer narxlari hujjatlarini taqdim etish kerak (182, 193-moddalar). Bundan tashqari, kompaniyalar valyutani tartibga solish talablariga rioya qiladi, statistik hisobot hamda milliy standartlar yoki tegishli hollarda MHXS boʻyicha moliyaviy hisobotni har chorakda topshiradi, kichik korxonalar va mikrofirmalar esa faqat yillik hisobot topshiradi («Buxgalteriya hisobi toʻgʻrisida»gi Qonun, 10, 25-moddalar). Qoidabuzarliklar SK boʻyicha moliyaviy sanksiyalarga, jiddiy hollarda esa jinoiy javobgarlikka olib keladi; muvofiqlik monitoringi xizmatimiz ushbu muddatlarni kuzatib boradi.",
      },
      {
        q: "Oʻzbekistondagi bitimlar boʻyicha due diligence nimalarni qamrab oladi?",
        a: "Due diligence soliq (oʻtgan davrlar majburiyatlari, transfer narxlari, tuzilma xatarlari), yuridik (korporativ tuzilma, aktivlarga boʻlgan huquqlar, asosiy shartnomalar, nizolar, litsenziya va ruxsatnomalar) va moliyaviy masalalarni (hisobotlar, aylanma kapital, qarzlar) red flag yoki toʻliq tekshiruv shaklida qamrab oladi. Koʻchmas mulk va infratuzilma bitimlarida yer huquqlari va qurilish ruxsatnomalarini ham tekshiramiz. Hisobotlar ingliz, rus yoki oʻzbek tilida tayyorlanadi.",
      },
      {
        q: "Oʻzbekistonda kripto va fintech litsenziyasini olishda yordam bera olasizmi?",
        a: "Ha. Kripto-aktivlar aylanmasi sohasidagi xizmat provayderlari Istiqbolli loyihalar milliy agentligi (NAPP) tomonidan litsenziyalanadi; uning ochiq litsenziyalar reyestrida kripto-birjalar, kripto-depozitariylar va kripto-doʻkonlar alohida koʻrsatilgan (napp.uz). Toʻlov tashkilotlari va toʻlov tizimlari operatorlari esa Markaziy bank tomonidan alohida litsenziyalanadi («Toʻlovlar va toʻlov tizimlari toʻgʻrisida»gi 2019-yil 1-noyabrdagi OʻRQ-578-son Qonun, 15, 21-moddalar). Kripto va fintech kompaniyalariga litsenziya arizalari, korporativ tuzilma, AML/KYC tartiblari va joriy muvofiqlik boʻyicha maslahat beramiz.",
      },
    ],
  },
  contact: {
    en: [
      {
        q: "What should I put in my first message?",
        a: "Your company, what you plan to do in Uzbekistan, where you are now and any deadline. That is enough to arrange the introductory call. Documents can follow later, under an NDA if you need one.",
      },
      {
        q: "How is the fee agreed?",
        a: "After the introductory call you receive a written scope with the work, the timeline and the fee. Work starts only once you approve it.",
      },
      {
        q: "Can you help before we have a company in Uzbekistan?",
        a: "Yes. We advise foreign companies before they register, by video call, Telegram or email, and handle the registration itself. Through Employer of Record you can also hire staff before you have a local entity.",
      },
    ],
    ru: [
      {
        q: "Что написать в первом сообщении?",
        a: "Вашу компанию, что вы планируете в Узбекистане, на каком вы этапе и есть ли сроки. Этого достаточно, чтобы договориться о вводном звонке. Документы можно прислать позже, при необходимости — после подписания NDA.",
      },
      {
        q: "Как согласуется стоимость?",
        a: "После вводного звонка вы получаете письменное описание объёма работ со сроками и стоимостью. Работа начинается только после вашего согласия.",
      },
      {
        q: "Можете ли вы помочь, пока у нас нет компании в Узбекистане?",
        a: "Да. Мы консультируем иностранные компании до регистрации — по видеосвязи, в Telegram или по эл. почте — и берём на себя саму регистрацию. Через Employer of Record можно нанять сотрудников ещё до создания местного юрлица.",
      },
    ],
    uz: [
      {
        q: "Birinchi xabarda nimalarni yozish kerak?",
        a: "Kompaniyangiz, Oʻzbekistonda nima qilishni rejalashtirayotganingiz, hozir qaysi bosqichdaligingiz va muddatlar boʻlsa, ular. Tanishuv qoʻngʻirogʻini belgilash uchun shu yetarli. Hujjatlarni keyinroq, kerak boʻlsa NDA imzolangandan soʻng yuborishingiz mumkin.",
      },
      {
        q: "Narx qanday kelishiladi?",
        a: "Tanishuv qoʻngʻirogʻidan keyin ish hajmi, muddat va narx yozilgan taklifni olasiz. Ish faqat siz uni tasdiqlaganingizdan keyin boshlanadi.",
      },
      {
        q: "Oʻzbekistonda kompaniyamiz boʻlmasa ham yordam bera olasizmi?",
        a: "Ha. Xorijiy kompaniyalarga roʻyxatdan oʻtishdan oldin video qoʻngʻiroq, Telegram yoki elektron pochta orqali maslahat beramiz va roʻyxatdan oʻtkazishning oʻzini ham bajaramiz. Employer of Record orqali mahalliy yuridik shaxs ochilmasdan oldin xodimlarni ham yollash mumkin.",
      },
    ],
  },
};
