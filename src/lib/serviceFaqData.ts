type FaqItem = { q: string; a: string };
type LocaleData = { en: FaqItem[]; ru: FaqItem[]; uz: FaqItem[] };

export const SERVICE_FAQ_DATA: Record<string, LocaleData> = {
  tax: {
    en: [
      { q: "Does Uzbekistan tax foreign-source income?", a: "Resident companies pay 15% corporate profit tax on worldwide income. Non-residents without a permanent establishment are taxed at source on Uzbek income: 10% on dividends and interest, and 20% on royalties and most other income (Tax Code, Art. 353). A double tax treaty can lower these rates if its conditions are met." },
      { q: "Which transactions fall under transfer pricing rules?", a: "Deals between related Uzbek residents become controlled when they exceed UZS 5 billion a year, or UZS 500 million where one side uses a special tax regime, an exemption or a reduced rate (Tax Code, Art. 180). Foreign-trade deals in exchange-traded goods and deals with counterparties in offshore jurisdictions are controlled too (Art. 181). Prices outside the market range can be adjusted." },
      { q: "How long can tax losses be carried forward?", a: "There is no time limit and no annual cap. A company may reduce the current year's profit by all or part of earlier losses, used in the order they arose (Tax Code, Art. 333, as amended by Law ZRU-741 of 29 December 2021)." },
    ],
    ru: [
      { q: "Облагается ли иностранный доход налогом в Узбекистане?", a: "Компании-резиденты платят налог на прибыль 15% с мирового дохода. Нерезиденты без постоянного учреждения облагаются у источника выплаты: 10% с дивидендов и процентов, 20% с роялти и большинства иных доходов (Налоговый кодекс, ст. 353). Соглашение об избежании двойного налогообложения может снизить эти ставки при выполнении его условий." },
      { q: "Какие сделки подпадают под правила трансфертного ценообразования?", a: "Сделки между взаимосвязанными резидентами Узбекистана становятся контролируемыми, если доход по ним превышает 5 млрд сумов в год, или 500 млн сумов, когда одна из сторон применяет специальный налоговый режим, льготу или пониженную ставку (НК, ст. 180). Контролируемыми также считаются внешнеторговые сделки с биржевыми товарами и сделки с контрагентами из офшорных юрисдикций (ст. 181). Цены вне рыночного диапазона могут быть скорректированы." },
      { q: "На какой срок можно перенести налоговые убытки?", a: "Ограничений по сроку и годовому лимиту нет. Компания вправе уменьшить прибыль текущего года на всю сумму прошлых убытков или их часть, в той очерёдности, в которой они получены (НК, ст. 333, в редакции Закона ЗРУ-741 от 29 декабря 2021 года)." },
    ],
    uz: [
      { q: "Chet eldagi daromad Oʻzbekistonda soliqqa tortiladi?", a: "Rezident kompaniyalar butun dunyodagi daromaddan 15% foyda soligʻini toʻlaydi. Doimiy muassasasi boʻlmagan norezidentlar Oʻzbekiston manbali daromaddan toʻlov manbaida soliqqa tortiladi: dividendlar va foizlar 10%, royalti va boshqa daromadlarning aksariyati 20% (Soliq kodeksi, 353-modda). Ikki tomonlama soliqqa tortishning oldini olish toʻgʻrisidagi bitim shartlari bajarilsa, bu stavkalarni kamaytirishi mumkin." },
      { q: "Qaysi bitimlar transfer narxlari qoidalariga tushadi?", a: "Oʻzbekistonning oʻzaro bogʻliq rezidentlari oʻrtasidagi bitimlar yiliga 5 mlrd soʻmdan, tomonlardan biri maxsus soliq rejimi, imtiyoz yoki pasaytirilgan stavkani qoʻllasa 500 mln soʻmdan oshganda nazorat qilinadigan boʻladi (SK, 180-modda). Birja tovarlari bilan tashqi savdo bitimlari va offshor yurisdiksiyalardagi kontragentlar bilan bitimlar ham nazorat qilinadi (181-modda). Bozor diapazonidan tashqaridagi narxlar tuzatilishi mumkin." },
      { q: "Soliq zararlarini qancha muddatga koʻchirish mumkin?", a: "Muddat va yillik cheklov yoʻq. Kompaniya joriy yil foydasini oldingi zararlarning butun summasiga yoki bir qismiga, ular olingan navbat tartibida kamaytirishi mumkin (SK, 333-modda, 2021-yil 29-dekabrdagi OʻRQ-741-son Qonun tahririda)." },
    ],
  },

  legal: {
    en: [
      { q: "Is there a minimum share capital for an LLC in Uzbekistan?", a: "No minimum charter capital has been required since 2019. In practice, the stated capital reflects investor expectations and bank requirements rather than a legal floor — a nominal amount is legally valid." },
      { q: "Can a foreign company own 100% of a local entity?", a: "Yes. Full foreign ownership is permitted in most sectors. Banking, insurance, and certain strategic industries impose local participation requirements or licensing conditions that limit 100% foreign control." },
      { q: "Must commercial contracts be notarised in Uzbekistan?", a: "Notarisation is mandatory only for specific agreement types — real estate transfers, pledge agreements, and certain corporate resolutions. Standard commercial contracts take effect without notarisation but may require apostille for cross-border enforcement." },
    ],
    ru: [
      { q: "Существует ли минимальный уставный капитал для ООО?", a: "С 2019 года минимальный уставный капитал не установлен. На практике его размер определяется ожиданиями инвесторов и требованиями банков, а не законом — номинальный размер юридически допустим." },
      { q: "Может ли иностранная компания владеть 100% узбекского юрлица?", a: "Да, в большинстве отраслей. В банковском секторе, страховании и ряде стратегических отраслей установлены требования к участию местных лиц или лицензионные ограничения." },
      { q: "Нужно ли нотариально заверять коммерческие договоры?", a: "Нотариальное удостоверение обязательно только для отдельных видов сделок: передача недвижимости, залог, ряд корпоративных решений. Стандартные коммерческие договоры действительны без нотариуса, но может потребоваться апостиль для международного применения." },
    ],
    uz: [
      { q: "MChJ uchun minimal ustav kapitali bormi?", a: "2019 yildan beri minimal ustav kapitali talabi yo'q. Amalda kapital miqdori investorlar va banklar talablarini aks ettiradi — nominal miqdor huquqiy jihatdan qonuniydir." },
      { q: "Xorijiy kompaniya mahalliy yuridik shaxsning 100% ga egalik qila oladimi?", a: "Ha, ko'pchilik tarmoqlarda. Bank, sug'urta va strategik tarmoqlarda mahalliy ishtirok yoki litsenziya talablari mavjud bo'lib, to'liq xorijiy nazoratni cheklashi mumkin." },
      { q: "Tijorat shartnomalar notarial tasdiqlanishi shart?", a: "Faqat muayyan turdagi bitimlar uchun: ko'chmas mulkni o'tkazish, garov, ayrim korporativ qarorlar. Standart tijorat shartnomalar notariussiz kuchga kiradi, lekin xalqaro ijro uchun appostil talab qilinishi mumkin." },
    ],
  },

  finance: {
    en: [
      { q: "Are foreign subsidiaries required to prepare IFRS financial statements?", a: "IFRS is mandatory for public-interest entities (banks, insurers, listed companies). Most other companies use National Accounting Standards. Foreign-owned subsidiaries commonly prepare parallel IFRS statements for their parent company." },
      { q: "What is the VAT rate and how is input tax recovered?", a: "Standard VAT is 12%. Input VAT on eligible business expenditure offsets output VAT; exporters may reclaim excess VAT in cash through a Tax Committee application. Refunds typically take 30–60 days." },
      { q: "When is a statutory audit mandatory in Uzbekistan?", a: "Mandatory for joint-stock companies, financial institutions, and entities exceeding defined revenue or asset thresholds. Foreign subsidiaries should verify annually whether they meet the statutory trigger criteria." },
    ],
    ru: [
      { q: "Обязаны ли иностранные дочерние компании готовить отчётность по МСФО?", a: "МСФО обязательны для общественно значимых организаций (банков, страховщиков, эмитентов). Прочие компании применяют НСБУ. Иностранные дочерние структуры, как правило, параллельно готовят отчётность по МСФО для материнской компании." },
      { q: "Какова ставка НДС и как возмещается входной налог?", a: "Стандартная ставка НДС — 12%. Входной НДС по деловым расходам зачитывается против исходящего. Экспортёры вправе получить возврат денежными средствами через Налоговый комитет; процедура занимает 30–60 дней." },
      { q: "Когда обязателен аудит в Узбекистане?", a: "Обязателен для акционерных обществ, финансовых учреждений и субъектов, превышающих установленные пороги по выручке или активам. Иностранным дочерним компаниям рекомендуется ежегодно проверять, подпадают ли они под эти критерии." },
    ],
    uz: [
      { q: "Xorijiy sho'ba korxonalar XHMS bo'yicha hisobot tayyorlashi shart?", a: "XHMS bank, sug'urta tashkilotlari va fond birjasida ro'yxatga olingan kompaniyalar uchun majburiy. Boshqa kompaniyalar UMBSdan foydalanadi. Xorijiy sho'ba korxonalar ko'pincha ona kompaniya uchun parallel XHMS hisoboti tayyorlaydi." },
      { q: "QQS stavkasi qancha va kirish soligʻi qanday qaytariladi?", a: "Standart QQS — 12%. Biznes xarajatlari boʻyicha kirish QQSi chiqish QQSiga hisoblanadi; eksportchilar Soliq qoʻmitasi orqali ortiqcha QQSni 30–60 kun ichida naqd qaytarib olishi mumkin." },
      { q: "Oʻzbekistonda audit qachon majburiy?", a: "Aksiyadorlik jamiyatlari, moliya muassasalari va belgilangan daromad yoki aktiv chegarasidan oshgan sub'ektlar uchun majburiy. Xorijiy sho'ba korxonalar har yili mezonlarga muvofiqligini tekshirib ko'rishlari kerak." },
    ],
  },

  hr: {
    en: [
      { q: "What is the maximum probation period under the Labour Code?", a: "Three months for most employees; up to six months for senior managers and specialists. Probation must be written into the employment contract at the outset — it cannot be imposed after employment begins." },
      { q: "What notice period is required for employer-initiated dismissal?", a: "Two months' written notice for redundancy or role elimination. Immediate dismissal is permitted for gross misconduct. The employee must give at least two weeks' notice to resign voluntarily." },
      { q: "Are non-compete clauses enforceable in Uzbekistan?", a: "The Labour Code does not expressly recognise post-employment non-competes. Courts tend to void broadly drafted restrictions. Targeted confidentiality clauses and non-solicitation covenants carry more reliable enforcement." },
    ],
    ru: [
      { q: "Каков максимальный срок испытания по Трудовому кодексу?", a: "Три месяца для большинства сотрудников; до шести месяцев для руководителей и специалистов. Испытательный срок должен быть предусмотрен в трудовом договоре с первого дня — задним числом он не устанавливается." },
      { q: "Какой срок уведомления требуется при увольнении по инициативе работодателя?", a: "Два месяца письменного уведомления при сокращении или ликвидации должности. Немедленное увольнение допустимо при грубом нарушении. Работник обязан предупредить за две недели при добровольном уходе." },
      { q: "Действует ли запрет на конкуренцию после увольнения в Узбекистане?", a: "Трудовой кодекс не регулирует постдоговорные ограничения конкуренции; суды склонны признавать широкие запреты недействительными. Более надёжны целевые соглашения о конфиденциальности и невовлечении." },
    ],
    uz: [
      { q: "Mehnat kodeksi bo'yicha sinov muddatining maksimal davomiyligi qancha?", a: "Ko'pchilik xodimlar uchun 3 oy; rahbarlar va mutaxassislar uchun 6 oygacha. Sinov muddati mehnat shartnomasiga birinchi kundan kiritilishi shart — ortga qayta qo'llanilmaydi." },
      { q: "Ish beruvchi tashabbusu bilan ishdan bo'shatishda qancha muddatda ogohlantirish kerak?", a: "Qisqartirish yoki lavozimni tugatishda 2 oy oldindan yozma ogohlantirish talab qilinadi. Qo'pol qoidabuzarlik uchun darhol ishdan bo'shatish mumkin. Xodim o'z xohishi bilan ketishda 2 hafta oldin xabar berishi kerak." },
      { q: "Oʻzbekistonda raqobatni taqiqlash bandlari kuchga kiradi?", a: "Mehnat kodeksi post-shartnoma raqobat cheklovlarini aniq tartibga solmaydi; sudlar keng qamrovli taqiqlarni bekor qilishga moyil. Maqsadli maxfiylik va jalb qilmaslik kelishuvlari yanada ishonchli ijro etiladi." },
    ],
  },

  funding: {
    en: [
      { q: "What state-backed funding is available to businesses in Uzbekistan?", a: "The Entrepreneurship Support Fund, Business Development Fund, and special economic zone (SEZ) tax incentive schemes are the primary vehicles. Eligibility depends on sector, investment size, and employment creation targets." },
      { q: "Can foreign-owned companies access government grant programmes?", a: "Most programmes are open to entities registered in Uzbekistan regardless of foreign ownership. Certain incentive regimes (SEZs, priority investment projects) require minimum local investment or partnership commitments." },
      { q: "What financial documents do investors typically expect before committing?", a: "Audited financial statements for the prior 2–3 years, an IFRS management accounts package, a three-to-five-year financial model, and a fully diluted cap table are the standard baseline for institutional investors." },
    ],
    ru: [
      { q: "Какие государственные источники финансирования доступны бизнесу?", a: "Основные инструменты — Фонд поддержки предпринимательства, Фонд развития бизнеса и налоговые льготы ОЭЗ. Критерии отбора зависят от отрасли, объёма инвестиций и создаваемых рабочих мест." },
      { q: "Могут ли иностранные компании участвовать в государственных грантовых программах?", a: "Большинство программ открыты для зарегистрированных в Узбекистане компаний независимо от иностранного участия. Ряд льготных режимов (ОЭЗ, приоритетные инвестиционные проекты) предусматривает минимальный порог местных инвестиций." },
      { q: "Какие финансовые документы обычно требуют инвесторы до вложений?", a: "Аудированная отчётность за 2–3 года, управленческая отчётность по МСФО, финансовая модель на 3–5 лет и полностью разводнённая таблица акционеров — стандартный минимум для институциональных инвесторов." },
    ],
    uz: [
      { q: "Oʻzbekistonda biznes uchun qanday davlat moliyalash manbalari mavjud?", a: "Tadbirkorlikni qo'llab-quvvatlash jamg'armasi, Biznesni rivojlantirish jamg'armasi va MIZ soliq imtiyozlari asosiy mexanizmlardir. Talablar tarmoq, investitsiya hajmi va yaratilgan ish o'rinlarga bog'liq." },
      { q: "Xorijiy kompaniyalar davlat grant dasturlarida ishtirok eta oladimi?", a: "Ko'pchilik dasturlar chet el ishtiroki bo'lishidan qat'i nazar, O'zbekistonda ro'yxatga olingan kompaniyalarga ochiq. Ba'zi imtiyozli rejimlar minimal mahalliy investitsiya yoki sheriklik majburiyatini talab qiladi." },
      { q: "Investorlar mablag' kiritishdan oldin odatda qanday moliyaviy hujjatlar talab qiladi?", a: "Oxirgi 2–3 yil auditorlangan hisobotlari, XHMS boshqaruv hisoboti, 3–5 yillik moliyaviy model va to'liq kapital tarkibi jadvali institutsional investorlar uchun standart minimum hisoblanadi." },
    ],
  },

  "ma-advisory": {
    en: [
      { q: "How are participatory interests in an LLC typically transferred?", a: "Via a notarised assignment agreement. All co-founders hold a right of first refusal unless waived in the charter. Registration with updated charter documents is required to bind third parties." },
      { q: "Is currency repatriation straightforward after an Uzbek acquisition?", a: "Sale proceeds can be repatriated, but the currency conversion and transfer require an authorised bank to verify the transaction basis. The process takes 3–7 business days; documentation requirements are substantial for large transactions." },
      { q: "Does the Antimonopoly Committee need to clear M&A transactions?", a: "Pre-merger notification is required when the combined market share exceeds 35%, or when turnover or asset thresholds defined by the Antimonopoly Committee's regulations are breached. Approval typically takes 30 days." },
    ],
    ru: [
      { q: "Как оформляется передача доли в ООО?", a: "Через нотариально удостоверенный договор об отчуждении доли. Все учредители обладают преимущественным правом покупки, если только оно не отказано в уставе. Для третьих лиц изменения действительны с момента регистрации в уставных документах." },
      { q: "Легко ли репатриировать выручку от продажи активов из Узбекистана?", a: "Средства можно репатриировать, однако конвертация и перевод требуют подтверждения уполномоченным банком. Процесс занимает 3–7 рабочих дней; по крупным сделкам требования к документации весьма существенны." },
      { q: "Нужно ли одобрение Антимонопольного комитета для M&A?", a: "Предварительное уведомление обязательно при превышении совокупной доли рынка 35% либо пороговых значений по выручке или активам. Срок рассмотрения, как правило, составляет 30 дней." },
    ],
    uz: [
      { q: "MChJdagi ulush qanday topshiriladi?", a: "Notarial tasdiqlanagan ulushni begonalashtirish shartnomasi orqali. Barcha ta'sischilar birinchi navbatda sotib olish huquqiga ega, agar u nizomda bekor qilinmagan bo'lsa. Uchinchi shaxslar uchun o'zgarishlar ta'sis hujjatlarida ro'yxatga olinganidan boshlab kuchga kiradi." },
      { q: "Oʻzbekistondan savdo tushumi repatriatsiyasi qanday amalga oshiriladi?", a: "Mablag'larni repatriatsiya qilish mumkin, lekin valyuta konvertatsiyasi va o'tkazma vakolatli bank tomonidan tasdiqlashni talab qiladi. Jarayon 3–7 ish kunini oladi; yirik bitimlar uchun hujjatlar talablari katta." },
      { q: "M&A bitishuvlari uchun Monopoliyaga qarshi qoʻmita ruxsati kerakmi?", a: "Bozordagi umumiy ulush 35%dan oshganda yoki belgilangan aylanma yoki aktiv chegaralariga yetilganda oldindan bildirishnoma majburiy. Ko'rib chiqish muddati odatda 30 kun." },
    ],
  },

  "due-diligence": {
    en: [
      { q: "What are the most common tax findings in Uzbek due diligence?", a: "Unregistered transfer pricing exposure, misclassified VAT (especially on imports), incorrectly applied tax incentives, and unresolved prior-period inspection acts are the four most frequent issues we encounter." },
      { q: "How long does a full-scope tax and legal DD take?", a: "Three to six weeks for a comprehensive engagement. Red flag reviews, focused on material risks only, can be completed in one to two weeks. Timeline is directly tied to the quality and completeness of the data room." },
      { q: "What documents should a seller prepare before DD begins?", a: "Three years of tax returns and financial statements, all material contracts, charter documents and corporate history, employee headcount and payroll schedules, and any prior audit or inspection acts." },
    ],
    ru: [
      { q: "Какие налоговые нарушения чаще всего выявляются при Due Diligence в Узбекистане?", a: "Незарегистрированные риски ТЦО, неправильная классификация НДС (особенно при импорте), неверное применение налоговых льгот и неурегулированные акты прошлых налоговых проверок." },
      { q: "Сколько времени занимает полный налоговый и юридический DD?", a: "Комплексный анализ — 3–6 недель; экспресс-проверка ключевых рисков — 1–2 недели. Сроки напрямую зависят от полноты и качества предоставленного датарума." },
      { q: "Какие документы продавец должен подготовить до начала DD?", a: "Налоговые декларации и финансовая отчётность за 3 года, все существенные договоры, учредительные документы, корпоративная история, кадровые сведения, а также акты предыдущих проверок." },
    ],
    uz: [
      { q: "Oʻzbekistonda soliq due diligenceda eng koʻp uchraydigan topilmalar qaysilar?", a: "Royobga chiqarilmagan transfer narx tavakkalchiliklari, QQS noto'g'ri tasnifi (ayniqsa importda), soliq imtiyozlarini noto'g'ri qo'llash va oldingi davr tekshiruv aktlari eng tez-tez uchraydigan muammolar." },
      { q: "To'liq soliq va yuridik due diligence qancha vaqt oladi?", a: "Keng qamrovli tahlil — 3–6 hafta; asosiy risklarga qaratilgan tezkor tekshiruv — 1–2 hafta. Muddatlar data room to'liqligi va sifatiga bevosita bog'liq." },
      { q: "Due diligence boshlanishidan oldin sotuvchi qanday hujjatlarni tayyorlashi kerak?", a: "3 yillik soliq deklaratsiyalari va moliyaviy hisobotlar, barcha muhim shartnomalar, ta'sis hujjatlari, korporativ tarix, xodimlar soni va ish haqi ma'lumotlari, shuningdek avvalgi tekshiruv aktlari." },
    ],
  },

  "entity-management": {
    en: [
      { q: "What annual filings must an Uzbek LLC complete?", a: "Corporate income tax return (quarterly advances + annual), VAT returns (monthly for standard taxpayers), social contribution declarations, statistical reporting packages, and annual financial statements submitted to the Statistics Agency." },
      { q: "Are foreign nationals permitted to serve as directors?", a: "Yes. No residency requirement exists for directors of an Uzbek LLC. A foreign director typically requires a work permit. Nominating a local director reduces administrative friction and facilitates banking interactions." },
      { q: "What are the penalties for a missed filing deadline?", a: "Late-filing penalties range from 10% to 50% of the understated tax, with minimum fixed penalties for nil-due returns. Persistent non-compliance triggers on-site inspections and, in extreme cases, entity suspension." },
    ],
    ru: [
      { q: "Какие ежегодные отчёты обязано подавать узбекское ООО?", a: "Декларация по налогу на прибыль (ежеквартальные авансы + годовая), декларации по НДС (ежемесячно), сведения по социальным взносам, статистическая отчётность и годовая финансовая отчётность в Агентство статистики." },
      { q: "Может ли иностранный гражданин быть директором узбекского ООО?", a: "Да. Требований к резидентству директора нет. Иностранному директору, как правило, нужно разрешение на работу. Назначение местного директора упрощает взаимодействие с банками и госорганами." },
      { q: "Каковы санкции за нарушение сроков подачи отчётности?", a: "Штраф за просрочку — от 10% до 50% недоимки; для деклараций с нулевым налогом установлены фиксированные санкции. Систематические нарушения влекут выездную проверку и, в крайних случаях, приостановление деятельности." },
    ],
    uz: [
      { q: "Oʻzbek MChJ qanday yillik hisobotlarni topshirishi shart?", a: "PDT deklaratsiyasi (choraklik avanslar + yillik), QQS deklaratsiyalari (oylik), ijtimoiy badallar bo'yicha hisobot, statistik hisobot to'plamlari va Statistika agentligiga yillik moliyaviy hisobot." },
      { q: "Xorijiy fuqaro Oʻzbekiston MChJida direktor bo'la oladimi?", a: "Ha. Direktorga nisbatan yashash joyi talabi yo'q. Xorijiy direktorda ko'pincha ish ruxsatnomasi kerak bo'ladi. Mahalliy direktorni tayinlash bank va davlat organlari bilan ishlashni osonlashtiradi." },
      { q: "Hisobot muddatini o'tkazib yuborishda qanday sanksiyalar qo'llanadi?", a: "Jarima kamomad summasining 10%dan 50%gacha; nol daromadli deklaratsiyalar uchun belgilangan miqdorda jarima qo'llaniladi. Tizimli qoidabuzarlik saytga tashrif va og'ir hollarda faoliyatni to'xtatib qo'yishga olib keladi." },
    ],
  },

  corporate: {
    en: [
      { q: "How long does LLC registration take in Uzbekistan?", a: "Registration with the Ministry of Justice and concurrent tax authority enrolment completes in 5–7 business days from submission of a complete document package. SEZ entities may have separate, faster processes." },
      { q: "What is required to open a corporate bank account?", a: "Charter documents, founder's decision, director's appointment order, TIN certificate, company seal, and director's passport. Banks conducting enhanced KYC for foreign-owned entities may request additional AML documentation and a site visit." },
      { q: "Is a local bank account required to operate in Uzbekistan?", a: "A local UZS settlement account is required for tax payments and employee salary transfers. Foreign currency accounts are available for international transactions but require a separate account-opening procedure." },
    ],
    ru: [
      { q: "Сколько времени занимает регистрация ООО в Узбекистане?", a: "Регистрация в Министерстве юстиции и постановка на налоговый учёт, как правило, завершаются за 5–7 рабочих дней при полном комплекте документов. Для резидентов ОЭЗ действует отдельный, нередко ускоренный порядок." },
      { q: "Что нужно для открытия корпоративного банковского счёта?", a: "Учредительные документы, решение учредителей, приказ о назначении директора, свидетельство ИНН, печать организации и паспорт директора. При усиленной проверке AML банки могут запросить дополнительные документы и провести выездной осмотр." },
      { q: "Нужен ли местный банковский счёт для работы в Узбекистане?", a: "Расчётный счёт в UZS необходим для уплаты налогов и выплаты зарплаты сотрудникам. Валютный счёт для международных операций открывается по отдельной процедуре." },
    ],
    uz: [
      { q: "Oʻzbekistonda MChJ ro'yxatdan o'tkazish qancha vaqt oladi?", a: "To'liq hujjat to'plami topshirilgandan keyin Adliya vazirligi va soliq organlarida ro'yxatga olish 5–7 ish kunini oladi. MIZ rezidentlari uchun alohida, ko'pincha tezroq tartib amal qiladi." },
      { q: "Korporativ bank hisobini ochish uchun nima kerak?", a: "Ta'sis hujjatlari, ta'sischilar qarori, direktorni tayinlash buyrug'i, STIR guvohnomasi, kompaniya muhri va direktor pasporti. Chet el ishtiroki bo'lgan kompaniyalar uchun bank kuchaytilgan AML tekshiruvi o'tkazishi mumkin." },
      { q: "Oʻzbekistonda ishlash uchun mahalliy bank hisobi majburiyatmi?", a: "UZS hisob-kitobi soliqlari to'lash va ish haqi o'tkazishi uchun zarur. Valyuta hisobi xalqaro operatsiyalar uchun alohida tartibda ochiladi." },
    ],
  },

  eor: {
    en: [
      { q: "How quickly can an EOR arrangement be activated?", a: "Employee onboarding under our EOR structure typically takes 5–10 business days from contract execution and document receipt. This is substantially faster than incorporating a new entity, which typically takes three to four weeks at minimum." },
      { q: "Do EOR employees have the same statutory rights as direct hires?", a: "Yes. Uzbekistan's Labour Code applies in full regardless of whether the legal employer is an EOR provider or the beneficial employer. All leave entitlements, probation rules, dismissal protections, and benefit obligations apply." },
      { q: "When is it better to transition from EOR to a local entity?", a: "When your headcount exceeds 6–8 employees, when local contracting authority is needed, or when total EOR service costs exceed the fixed overhead of running local payroll — whichever is reached first." },
    ],
    ru: [
      { q: "Как быстро можно запустить EOR-схему в Узбекистане?", a: "Найм сотрудника через EOR обычно занимает 5–10 рабочих дней с момента подписания договора и получения документов. Это существенно быстрее, чем регистрация собственного юрлица (минимум 3–4 недели)." },
      { q: "Имеют ли сотрудники, нанятые через EOR, те же права, что и прямые работники?", a: "Да. Трудовой кодекс Узбекистана применяется в полном объёме вне зависимости от того, кто является юридическим работодателем. Все льготы, условия труда и гарантии защиты распространяются в равной мере." },
      { q: "Когда стоит перейти от EOR к собственному юрлицу?", a: "Когда штат превышает 6–8 человек, когда потребовалось право заключать договоры от своего имени, либо когда совокупные затраты на EOR превышают расходы на содержание собственного расчётного центра." },
    ],
    uz: [
      { q: "Oʻzbekistonda EOR kelishuvi qanchalik tez faollashtirilishi mumkin?", a: "EOR orqali xodimni yollash shartnoma imzolanishi va hujjatlar olinishidan keyin odatda 5–10 ish kunini oladi. Bu yangi yuridik shaxs ro'yxatdan o'tkazishdan (kamida 3–4 hafta) ancha tez." },
      { q: "EOR orqali yollangan xodimlar to'g'ridan-to'g'ri yollangan xodimlar bilan bir xil huquqlarga egami?", a: "Ha. Mehnat kodeksi yuridik ish beruvchi EOR provayderi yoki yakuniy foydalanuvchi bo'lishidan qat'i nazar to'liq qo'llaniladi. Barcha imtiyozlar, ta'til va himoya qoidalari amal qiladi." },
      { q: "EORdan o'z yuridik shaxsiga o'tish qachon maqul?", a: "Xodimlar soni 6–8 dan oshganda, mahalliy shartnoma tuzish huquqi kerak bo'lganda yoki EOR xarajatlari mahalliy ish haqi markazining doimiy xarajatlaridan oshganda." },
    ],
  },

  payroll: {
    en: [
      { q: "What statutory deductions apply to Uzbek payroll?", a: "Employee deductions: income tax at 12% flat rate, individual pension fund contribution at 1%. Employer obligations: social insurance at 12% of gross salary. Non-resident employees pay 12% on Uzbek-source income with no personal deductions available." },
      { q: "When must payroll taxes be remitted to the budget?", a: "Income tax and social contributions must be transferred to the state budget no later than the 25th of the month following the salary payment date. Wages must be paid at least twice per calendar month." },
      { q: "What is the minimum wage and how does it affect payroll?", a: "The minimum wage is set by government resolution and revised periodically. Any employment contract below the minimum wage is void; the employer is liable for the shortfall. It also affects the calculation of certain benefit thresholds." },
    ],
    ru: [
      { q: "Какие обязательные удержания предусмотрены при расчёте зарплаты?", a: "Удержания с работника: НДФЛ 12% (единая ставка), взнос в пенсионный фонд 1%. Нагрузка работодателя: социальное страхование 12% от фонда оплаты труда. Нерезиденты уплачивают 12% только с доходов из узбекских источников." },
      { q: "В какой срок нужно перечислять налоги с зарплаты в бюджет?", a: "НДФЛ и социальные взносы перечисляются не позднее 25-го числа месяца, следующего за месяцем выплаты. Заработная плата должна выплачиваться не реже двух раз в месяц." },
      { q: "Как минимальная заработная плата влияет на расчёт зарплаты?", a: "Минимальная зарплата устанавливается правительственным постановлением и периодически пересматривается. Трудовой договор ниже минимума недействителен; разницу оплачивает работодатель. Также используется при расчёте некоторых порогов льгот." },
    ],
    uz: [
      { q: "Oʻzbekiston ish haqidan qanday majburiy chegirmalar amalga oshiriladi?", a: "Xodimdan chegirmalar: daromad solig'i 12% (yagona stavka), pensiya jamg'armasiga badal 1%. Ish beruvchi majburiyatlari: ijtimoiy sug'urta ish haqi fondining 12%. Norezidentlar faqat O'zbekiston manbali daromaddan 12% to'laydi." },
      { q: "Ish haqi soliqlarini byudjetga o'tkazish muddati qachon?", a: "Daromad solig'i va ijtimoiy badallar ish haqi to'langan oydan keyingi oyning 25-kunigacha o'tkazilishi kerak. Ish haqi oyiga kamida ikki marta to'lanishi shart." },
      { q: "Minimal ish haqi ish haqi hisoblashga qanday ta'sir qiladi?", a: "Minimal ish haqi hukumat qarori bilan belgilanadi va davriy ravishda qayta ko'rib chiqiladi. Minimumdan past mehnat shartnomasi haqiqiy emas; farqni ish beruvchi to'laydi. U shuningdek ayrim imtiyozlar chegaralarini hisoblashda ham ishlatiladi." },
    ],
  },

  immigration: {
    en: [
      { q: "How long does a work permit take to obtain?", a: "Standard processing is 15 business days. Expedited processing in 5 business days is available at additional cost. Most permits are granted for 12 months and are renewable annually without limit." },
      { q: "Can a foreign employee work while the permit is being processed?", a: "No. Employment cannot legally commence until the work permit is issued. Violations expose both the employee and the employer to administrative penalties. Short-term consulting under a foreign contract may be permissible in limited circumstances." },
      { q: "Which nationalities can enter Uzbekistan without a visa?", a: "Citizens of 90+ countries are eligible for visa-free entry for 30–90 days. Employees from restricted countries require a business or work visa prior to entry. The work permit itself does not substitute for an entry visa." },
    ],
    ru: [
      { q: "Как долго оформляется разрешение на работу?", a: "Стандартный срок — 15 рабочих дней; ускоренное оформление за 5 рабочих дней возможно за дополнительную плату. Разрешение, как правило, выдаётся на 12 месяцев с возможностью ежегодной пролонгации." },
      { q: "Может ли иностранный работник приступить к работе до получения разрешения?", a: "Нет. Трудовая деятельность без действующего разрешения влечёт административную ответственность как для работника, так и для работодателя. Краткосрочное консультирование по иностранному договору допустимо лишь в ограниченных случаях." },
      { q: "Гражданам каких стран нужна виза для въезда в Узбекистан?", a: "Граждане 90+ государств могут въезжать без визы на 30–90 дней. Гражданам стран со строгим визовым режимом необходима деловая или рабочая виза до въезда. Само разрешение на работу не заменяет въездную визу." },
    ],
    uz: [
      { q: "Ish ruxsatnomasini olish qancha vaqt oladi?", a: "Standart ko'rib chiqish muddati — 15 ish kuni; qo'shimcha haq evaziga 5 ish kunida tezlashtirilgan ko'rib chiqish mavjud. Ruxsatnomalar odatda 12 oyga beriladi va yil sayin yangilanishi mumkin." },
      { q: "Xorijiy xodim ruxsatnoma ko'rib chiqilayotganda ishlay oladimi?", a: "Yo'q. Amal qiluvchi ish ruxsatnomasiz mehnat faoliyati ham xodim, ham ish beruvchi uchun ma'muriy javobgarlikka olib keladi. Cheklangan hollarda xorijiy shartnoma bo'yicha qisqa muddatli konsalting faoliyati mumkin." },
      { q: "Qaysi mamlakatlar fuqarolari Oʻzbekistonga vizasiz kirishi mumkin?", a: "90 dan ortiq davlat fuqarolari 30–90 kun vizasiz kirish huquqiga ega. Qattiq viza rejimidagi mamlakatlar fuqarolari kirish uchun biznes yoki ish vizasini olishi kerak. Ish ruxsatnomasi kirish vizasini almashtirmaydi." },
    ],
  },

  "virtual-office": {
    en: [
      { q: "Can a virtual office address be used as the company's registered legal address?", a: "Yes. Providing a legally recognised business address is the primary function of a virtual office in Uzbekistan. The address appears in the company registry, on official documents, and is accepted by the tax authorities." },
      { q: "Will banks accept a virtual office address during account opening?", a: "Most banks accept a virtual office address supported by a service agreement or notarised lease. Banks conducting enhanced AML due diligence may request evidence of physical activity; we can assist with the necessary documentation." },
      { q: "Is a company with a virtual office required to have separate physical premises?", a: "No general statutory requirement exists for physical premises for most business types. Regulated activities (banking, pharma manufacturing, food production) require a separate licensed facility; a virtual office is not sufficient for these." },
    ],
    ru: [
      { q: "Можно ли использовать адрес виртуального офиса в качестве юридического адреса?", a: "Да. Именно это является основной функцией виртуального офиса в Узбекистане. Адрес вносится в реестр юридических лиц, указывается в официальных документах и принимается налоговыми органами." },
      { q: "Принимают ли банки адрес виртуального офиса при открытии счёта?", a: "Большинство банков принимают такой адрес при наличии договора об оказании услуг или нотариально заверенного соглашения. При усиленной AML-проверке банк может запросить подтверждение фактической деятельности." },
      { q: "Обязана ли компания с виртуальным офисом арендовать физические помещения?", a: "Для большинства видов деятельности такой обязанности нет. Регулируемые виды деятельности (банки, фармпроизводство, пищевая промышленность) требуют отдельного лицензированного помещения; виртуальный офис для них недостаточен." },
    ],
    uz: [
      { q: "Virtual ofis manzilini kompaniyaning yuridik manzili sifatida ishlatish mumkinmi?", a: "Ha. Bu Oʻzbekistonda virtual ofisning asosiy vazifasidir. Manzil yuridik shaxslar reestriga kiritiladi, rasmiy hujjatlarda ko'rsatiladi va soliq organlari tomonidan qabul qilinadi." },
      { q: "Banklar hisob ochishda virtual ofis manzilini qabul qiladimi?", a: "Ko'pchilik banklar xizmat ko'rsatish shartnomasi yoki tasdiqlangan ijara shartnomasiga asoslangan virtual ofis manzilini qabul qiladi. Kuchaytilgan AML tekshiruvida bank amaliy faoliyatni tasdiqlashni so'rashi mumkin." },
      { q: "Virtual ofisi bo'lgan kompaniya alohida fizik binoga ega bo'lishi shart?", a: "Ko'pchilik faoliyat turlari uchun bunday majburiyat yo'q. Tartibga solinadigan faoliyat turlari (banklar, dori-darmon ishlab chiqarish, oziq-ovqat sanoati) alohida litsenziyalangan bino talab qiladi." },
    ],
  },

  compliance: {
    en: [
      { q: "How often does Uzbekistan's regulatory framework change?", a: "The Tax Code is revised annually via the state budget law, typically effective 1 January. VAT rates, CIT rates, and simplified-regime thresholds have each changed several times in the last five years. New requirements can also take effect mid-year." },
      { q: "Which deadlines do companies miss most frequently?", a: "Quarterly CIT advance payments, monthly VAT returns, annual financial statement submission to the Statistics Agency, and statistical reporting forms are the four most common sources of penalties we see." },
      { q: "What triggers a tax field inspection?", a: "The Tax Committee's risk-scoring algorithm — turnover-to-tax ratios, VAT refund claims, consecutive loss years — is the primary trigger, supplemented by whistleblower reports, related-party inspections, and the annual selective inspection plan." },
    ],
    ru: [
      { q: "Как часто меняется регуляторная база в Узбекистане?", a: "Налоговый кодекс пересматривается ежегодно через закон о госбюджете, как правило с 1 января. Ставки НДС, налога на прибыль и пороги упрощённых режимов неоднократно менялись за последние пять лет. Изменения могут вступать в силу и в течение года." },
      { q: "Какие дедлайны чаще всего нарушают компании?", a: "Авансовые платежи по налогу на прибыль, ежемесячные декларации по НДС, годовая финансовая отчётность в Агентство статистики и статистические формы — четыре наиболее частых основания для штрафов." },
      { q: "Что является поводом для выездной налоговой проверки?", a: "Алгоритм рискового анализа Налогового комитета (соотношение выручки и налогов, заявления на возврат НДС, несколько убыточных лет подряд) — основной триггер. Дополнительные поводы: жалобы, связанные проверки и план выборочных проверок." },
    ],
    uz: [
      { q: "Oʻzbekistonda tartibga solish bazasi qanchalik tez-tez o'zgaradi?", a: "Soliq kodeksi davlat byudjeti to'g'risidagi qonun orqali yiliga bir marta qayta ko'rib chiqiladi, odatda 1 yanvardan kuchga kiradi. QQS, PDT stavkalari va soddalashtirilgan rejim chegaralari so'nggi besh yil ichida bir necha marta o'zgardi." },
      { q: "Kompaniyalar qaysi muddatlarni ko'p o'tkazib yuboradi?", a: "PDT bo'yicha choraklik avans to'lovlar, oylik QQS deklaratsiyalari, Statistika agentligiga yillik moliyaviy hisobot va statistik shakllar — jarimalarning eng ko'p uchraydigan to'rt sababi." },
      { q: "Soliq sayta tashrifi uchun nima sabab bo'ladi?", a: "Soliq qoʻmitasining risk ballov algoritmi (aylanma va soliq nisbati, QQS qaytarish talablari, ketma-ket zararli yillar) — asosiy sabab. Qo'shimcha sabablar: shikoyatlar, bog'liq tekshiruvlar va tanlov rejasidagi yillik tekshiruvlar." },
    ],
  },
};
