import type { LocalizedArticle } from "../publications";

const article: Record<string, LocalizedArticle> = {
  en: {
    subtitle: "A practical overview of Uzbekistan's accounting law — who must comply, how books are kept, what reports are required, and what penalties apply.",
    author: "Advizen Legal Practice",
    readTime: "11 min read",
    inShort: {
      figures: [
        { value: "ZRU-404", label: "Law of 13 April 2016 \"On Accounting\"" },
        { value: "31 December", label: "Reporting date; the reporting period is the calendar year" },
        { value: "1 March", label: "Deadline for annual statements under national standards; IFRS statements are due by 1 May" },
        { value: "3–7 BCV", label: "Fine on officials for a first accounting offence, rising to 7–10 BCV for a repeat within one year" },
      ],
      points: [
        "Every legal entity registered in Uzbekistan must keep accounting records, including its subsidiaries, representative offices, branches and other structural subdivisions inside or outside Uzbekistan.",
        "All accounting uses the double-entry method, and every business operation must be supported by a primary accounting document, which may be electronic.",
        "The director is responsible for organising accounting and may set up an in-house function, hire an external accountant, outsource to a specialised firm or keep the accounts personally.",
        "Annual financial statements consist of a balance sheet, income statement, cash flow statement, statement of changes in equity, and notes.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Every legal entity operating in Uzbekistan is required to maintain accounting records. The rules are set out in Law No. ZRU-404 of 13 April 2016 \"On Accounting\" and a body of supporting legislation. This guide covers the core concepts, organisational requirements, reporting obligations, and the penalties for getting it wrong.",
      },
      { type: "h2" as const, text: "Legislative framework" },
      {
        type: "ul" as const,
        items: [
          "Budget Code of the Republic of Uzbekistan",
          "Civil Code of the Republic of Uzbekistan",
          "Criminal Code of the Republic of Uzbekistan",
          "Tax Code of the Republic of Uzbekistan",
          "Law No. ZRU-404 of 13 April 2016 \"On Accounting\"",
          "Law No. ZRU-580 of 5 November 2019 \"On Banks and Banking Activity\"",
          "Law No. ZRU-582 of 11 November 2019 \"On the Central Bank of the Republic of Uzbekistan\"",
          "Law No. ZRU-677 of 25 February 2021 \"On Auditing Activity\"",
          "Law No. ZRU-370 \"On Joint-Stock Companies and Protection of Shareholders' Rights\"",
          "Presidential Resolution No. PP-4611 of 24 February 2020 on the transition to IFRS (paragraph 1 repealed from 17 December 2025)",
          "Presidential Resolution No. PP-419 of 10 November 2022 \"On measures to optimise reporting and archival document storage procedures\"",
          "Presidential Resolution No. PP-282 of 15 September 2025 on improving the financial accounting system in line with international requirements and standards",
          "Regulation on the deadlines for submission, structure and content of financial statements (Order No. 181 of the Minister of Economy and Finance of 8 October 2024, reg. No. 3567)",
          "National accounting standards (NSBU) No. 1, No. 19, No. 21 (chart of accounts, Order No. 191 of 14 November 2024) and No. 22",
          "National financial reporting standards (NSFO) No. 1 and No. 2, in force from 1 January 2027",
        ],
      },
      { type: "h2" as const, text: "What is accounting?" },
      {
        type: "p" as const,
        text: "Under Uzbek law, accounting is defined as an ordered system for collecting, registering, and summarising accounting information through continuous, documented recording of all business operations, and the preparation of financial and other reports on that basis.",
      },
      {
        type: "p" as const,
        text: "All accounting is conducted using the double-entry method: every business operation is recorded simultaneously in equal amounts on at least two accounts — a debit and a credit. The accountant records where money came from, where it went, how it arose, and what result it produced. The three core principles of accounting are continuity, reliability, and comparability of indicators.",
      },
      { type: "h2" as const, text: "Primary accounting documents" },
      {
        type: "p" as const,
        text: "Every business operation must be supported by a primary accounting document. These documents are the foundation of the accounting system and record the fact that an operation took place or authorise it to proceed.",
      },
      {
        type: "p" as const,
        text: "Typical business operations include: procurement (receipt of raw materials, payment to suppliers, introduction of materials into production); sales (distribution costs, receipt of revenue, sale of goods); and production (payroll, depreciation of fixed assets, acceptance of contractor work, payment to contractors).",
      },
      {
        type: "p" as const,
        text: "Every primary document must contain the following mandatory details:",
      },
      {
        type: "ul" as const,
        items: [
          "Name of the accounting entity",
          "Document name, number, date, and place of preparation",
          "Description and quantitative measurement of the business operation (in both physical units and monetary terms)",
          "Job titles and signatures of the persons who carried out the operation, with name and initials",
        ],
      },
      {
        type: "p" as const,
        text: "Primary documents may be prepared and submitted in electronic form. Payment terminal receipts for purchases made with corporate bank cards are also recognised as primary documents. The persons who prepare and sign primary documents bear personal responsibility for their timeliness, accuracy, and completeness. Accounting documents must be kept for at least five years after the reporting year (Art. 29 of ZRU-404).",
      },
      { type: "h2" as const, text: "Who must keep accounts" },
      {
        type: "p" as const,
        text: "Accounting subjects include: state authorities and management bodies; and all legal entities registered in Uzbekistan, including their subsidiaries, representative offices, branches, and other structural subdivisions — whether located inside or outside Uzbekistan. Representative offices and branches of foreign legal entities, and individual entrepreneurs, keep accounts and submit reports in the manner established by legislation (Art. 6 of ZRU-404). Since 25 July 2026, different accounting rules may apply in a territory with a special legal regime established by constitutional law, such as the Tashkent International Financial Centre (Art. 2).",
      },
      { type: "h2" as const, text: "Objects of accounting" },
      {
        type: "p" as const,
        text: "The objects of accounting are: assets; liabilities; equity; reserves; income; expenses; profit; losses; and business operations. All objects are subject to both synthetic accounting (aggregated by economic category, as required by law) and analytical accounting (detailed records maintained by the entity itself according to its own needs).",
      },
      { type: "h2" as const, text: "Organising accounting in a company" },
      {
        type: "p" as const,
        text: "The head of the entity (the director) is responsible for organising accounting and reporting. The director may:",
      },
      {
        type: "ul" as const,
        items: [
          "Establish an in-house accounting function headed by a chief accountant",
          "Engage an external accountant under a services agreement",
          "Delegate accounting to a specialised firm (audit organisation, tax consultancy, or accounting firm) under contract",
          "Personally maintain the accounts",
        ],
      },
      {
        type: "p" as const,
        text: "The director must ensure: development of the accounting policy and internal control system; complete and reliable accounting records; safekeeping of accounting documents; preparation and publication of financial statements; timely tax and other financial reporting; prompt settlement of obligations; and compliance with the requirements for the chief accountant set out in Art. 12.",
      },
      {
        type: "p" as const,
        text: "The chief accountant reports directly to the director. Instructions from the chief accountant on documentary formalities are binding on all employees. Where disputes arise between the director and the chief accountant over a particular operation, the director may issue a written instruction to proceed — but the director alone bears responsibility for the consequences.",
      },
      { type: "h3" as const, text: "Chief accountant qualification requirements" },
      {
        type: "p" as const,
        text: "For entities subject to mandatory audit (other than banks, for which the Central Bank sets the rules), the chief accountant must: hold a higher education degree; and have at least 3 years of relevant work experience in the last 5 years (if the degree is in economics) or at least 7 years in the last 10 years (if the degree is in another field). The director of such entities must also ensure the chief accountant completes annual professional development training. The same requirements apply to an employee of an outsourcing firm who keeps the accounts of such an entity. A person who lacks legal capacity or has an unexpunged conviction for an intentional crime may not be a chief accountant. The law does not require a professional certificate.",
      },
      { type: "h2" as const, text: "Simplified accounting for small enterprises" },
      {
        type: "p" as const,
        text: "Small enterprises may voluntarily adopt simplified accounting rules under NSBU No. 20, last amended on 4 March 2026; the simplified method is not available to individual entrepreneurs or farms. The director retains the same options for organising accounting as described above.",
      },
      {
        type: "p" as const,
        text: "Small enterprises develop their own accounting policy based on their business needs and may adapt standard accounting registers to their specific activities. The following requirements remain mandatory regardless of simplified status:",
      },
      {
        type: "ul" as const,
        items: [
          "Double-entry methodology",
          "Consistency between analytical and synthetic records",
          "Continuous recording of all operations in registers on the basis of primary documents",
          "Accumulation and systematisation of data for management, control, analysis, and financial reporting",
        ],
      },
      { type: "h2" as const, text: "Financial statements" },
      {
        type: "p" as const,
        text: "Financial statements are a systematised presentation of an entity's financial position at the reporting date, and its financial results and cash flows for the reporting period. The reporting period is the calendar year from 1 January to 31 December; the reporting date is 31 December.",
      },
      {
        type: "p" as const,
        text: "Annual financial statements consist of:",
      },
      {
        type: "ul" as const,
        items: [
          "Balance sheet — reflects the entity's asset position",
          "Income statement — reports profit and loss",
          "Cash flow statement — records all cash receipts and payments for the period, and opening and closing balances",
          "Statement of changes in equity",
          "Notes, calculations, and explanatory disclosures",
        ],
      },
      {
        type: "p" as const,
        text: "Financial statements are prepared on a cumulative basis from the start of the reporting year. Entities must consolidate the balance sheets of any representative offices, branches, and other structural subdivisions that maintain separate accounts. Accounting is kept in the national currency, the soum (Art. 17 of ZRU-404).",
      },
      {
        type: "p" as const,
        text: "Micro firms and small enterprises file only the balance sheet and the income statement (Art. 25 of ZRU-404; Regulation reg. No. 3567, para 10). Statements under national standards are due no later than 1 March of the following year, and IFRS statements no later than 1 May (Regulation reg. No. 3567, para 7). They go to the tax authority, the owners and the statistics authorities, and may be submitted as an electronic document. A company that reports under IFRS does not also file national statements.",
      },
      {
        type: "p" as const,
        text: "Since 17 December 2025, full IFRS is mandatory for public-interest entities: listed companies, banks and other financial organisations, investment funds, exchanges, large enterprises with a state share and large private companies, all entered in a register kept by the Ministry of Economy and Finance (PP-282). Joint-stock companies outside the register must still publish IFRS statements audited under International Standards on Auditing under Art. 102 of the JSC Law, until that law is amended. Any company may move to IFRS voluntarily. From 1 January 2027, other companies apply national financial reporting standards (NSFO) No. 1 and No. 2, based on IFRS for SMEs, together with the remaining NSBU. Companies subject to mandatory audit file a copy of the audit report with the tax authority no later than 15 June (Art. 35 of Law No. ZRU-677).",
      },
      { type: "h2" as const, text: "Regulation" },
      {
        type: "p" as const,
        text: "The Ministry of Economy and Finance of the Republic of Uzbekistan regulates accounting and financial reporting, including developing and approving accounting standards, approving financial statement forms, conducting external quality control of audit organisations, and maintaining the Register of Audit Organisations and the Register of Auditors. The Law on Auditing Activity still names the Ministry of Finance as the responsible body. Bank audits require auditors who hold a separate Central Bank certificate (Art. 14 of Law No. ZRU-677).",
      },
      {
        type: "p" as const,
        text: "Accounting for budget organisations and state-targeted funds is regulated by budget legislation and supervised by the Ministry of Economy and Finance. Accounting for banks and other credit organisations is regulated by the Central Bank of the Republic of Uzbekistan, which sets the applicable rules. Commercial banks are public-interest entities and must apply IFRS (PP-282).",
      },
      { type: "h2" as const, text: "Recent reform: reduced reporting obligations" },
      {
        type: "p" as const,
        text: "Presidential Resolution No. PP-419 (November 2022) introduced significant simplifications:",
      },
      {
        type: "ul" as const,
        items: [
          "The requirement to store and transfer to state or private archives payroll records and related tax documents (for income accrued after 1 January 2022) has been abolished.",
          "Financial, tax, and statistical reports submitted electronically from 1 January 2022 onwards, and documents processed electronically through tax authority systems, no longer need to be archived.",
          "From 1 January 2023, entities no longer submit quarterly financial statements to the tax and statistics authorities. Art. 25 of ZRU-404 was not amended, but Regulation reg. No. 3567 sets only annual deadlines.",
          "Turnover tax payers at a fixed rate were exempt from submitting annual financial statements to the tax authorities from 2023 until 1 January 2026 (PP-419 as amended by PP-455 of 25 December 2024). The exemption has ended, and they file again for the 2026 reporting year.",
          "From 1 May 2023, businesses whose founders are Uzbek residents may open bank accounts remotely; and utility and telecoms contracts may be executed electronically.",
          "From 1 January 2023, nine forms of statistical reporting have been abolished, including forms on exchange activity, labour conditions, wage distribution, commercial bank activity, and insurance organisations.",
          "Private archives providing electronic archiving services no longer require a licence — notification to the competent authority is sufficient.",
        ],
      },
      { type: "h2" as const, text: "Penalties for non-compliance" },
      {
        type: "p" as const,
        text: "Failure by the head of an accounting entity or the accounting function to fulfil their statutory obligations — including failure to ensure the accuracy and reliability of accounting data and financial statements, or failure to conduct inventory of assets and liabilities — constitutes an administrative offence under Art. 175-1 of the Code of Administrative Responsibility:",
      },
      {
        type: "ul" as const,
        items: [
          "First offence: fine of 3 to 7 times the base calculation value imposed on officials.",
          "Repeat offence within one year: fine of 7 to 10 times the base calculation value imposed on officials.",
        ],
      },
      { type: "h2" as const, text: "How Advizen can help" },
      {
        type: "p" as const,
        text: "Setting up an accounting function, choosing between in-house and outsourced models, drafting accounting policies, and ensuring compliance with reporting obligations requires careful attention to Uzbekistan's regulatory framework. Advizen advises clients on the organisation of accounting, the selection of the appropriate accounting model, compliance with reporting deadlines, and responses to regulatory inquiries.",
      },
    ],
      faq: [
      {
        question: "Which entities must maintain accounting records in Uzbekistan?",
        answer: "Under Law No. ZRU-404, all legal entities registered in Uzbekistan are required to maintain accounting records — including their subsidiaries, representative offices, branches, and other structural subdivisions, whether located inside or outside Uzbekistan. State authorities and management bodies are also accounting subjects. Representative offices and branches of foreign legal entities keep accounts and report in the manner established by legislation (Art. 6). The director (head of the entity) is personally responsible for organising the accounting function.",
      },
      {
        question: "Who is responsible for organising accounting in a company in Uzbekistan?",
        answer: "The director (head of the entity) bears personal responsibility for organising accounting and reporting. The director may: establish an in-house accounting function headed by a chief accountant; engage an external accountant under a services agreement; delegate accounting to a specialised firm (audit organisation, tax consultancy, or accounting firm) under contract; or personally maintain the accounts. Where disputes arise between the director and the chief accountant, the director may issue a written instruction to proceed — but bears sole responsibility for the consequences.",
      },
      {
        question: "What are the annual financial reporting obligations for companies in Uzbekistan?",
        answer: "The reporting period is the calendar year from 1 January to 31 December. Annual financial statements comprise: a balance sheet; an income statement; a cash flow statement; a statement of changes in equity; and notes and explanatory disclosures. Statements under national standards are due by 1 March of the following year, and IFRS statements by 1 May. From 1 January 2023, entities are no longer required to submit quarterly financial reports to tax and statistical authorities. The exemption from annual statements for turnover tax payers at a fixed rate covered 2023 to 2025 and ended on 1 January 2026; they file again for the 2026 reporting year.",
      },
      {
        question: "What are the penalties for accounting violations in Uzbekistan?",
        answer: "Failure by the director or accounting officials to fulfil their statutory obligations — including failure to ensure accuracy of accounting data and financial statements, or failure to conduct required inventories — constitutes an administrative offence under Art. 175-1 of the Code of Administrative Responsibility: first offence, a fine of 3 to 7 times the base calculation value on officials; repeat offence within one year, a fine of 7 to 10 times the base calculation value on officials.",
      },
    ],
  },
  ru: {
    subtitle: "Практический обзор законодательства Узбекистана о бухгалтерском учёте — кто обязан соблюдать, как ведётся учёт, какая отчётность требуется и какие штрафы предусмотрены.",
    author: "Юридическая практика Advizen",
    readTime: "11 мин чтения",
    inShort: {
      figures: [
        { value: "ЗРУ-404", label: "Закон от 13 апреля 2016 года «О бухгалтерском учёте»" },
        { value: "31 декабря", label: "Отчётная дата; отчётный период — календарный год" },
        { value: "1 марта", label: "Срок сдачи годовой отчётности по национальным стандартам; отчётность по МСФО сдаётся до 1 мая" },
        { value: "3–7 БРВ", label: "Штраф на должностных лиц за первое нарушение, при повторном в течение года — 7–10 БРВ" },
      ],
      points: [
        "Каждое юридическое лицо, зарегистрированное в Узбекистане, обязано вести бухгалтерский учёт, включая дочерние организации, представительства, филиалы и иные структурные подразделения в Узбекистане и за его пределами.",
        "Учёт ведётся методом двойной записи, и каждая хозяйственная операция должна подтверждаться первичным учётным документом, который может быть электронным.",
        "За организацию учёта отвечает руководитель: он может создать бухгалтерскую службу, привлечь внешнего бухгалтера, передать учёт специализированной организации или вести его лично.",
        "Годовая финансовая отчётность включает бухгалтерский баланс, отчёт о финансовых результатах, отчёт о движении денежных средств, отчёт об изменениях в собственном капитале и пояснения.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Каждое юридическое лицо, осуществляющее деятельность в Узбекистане, обязано вести бухгалтерский учёт. Соответствующие правила установлены Законом № ЗРУ-404 от 13 апреля 2016 года «О бухгалтерском учёте» и комплексом сопутствующих нормативно-правовых актов. В настоящем руководстве рассматриваются основные понятия, организационные требования, обязательства по отчётности и ответственность за несоблюдение.",
      },
      { type: "h2" as const, text: "Законодательная база" },
      {
        type: "ul" as const,
        items: [
          "Бюджетный кодекс Республики Узбекистан",
          "Гражданский кодекс Республики Узбекистан",
          "Уголовный кодекс Республики Узбекистан",
          "Налоговый кодекс Республики Узбекистан",
          "Закон № ЗРУ-404 от 13 апреля 2016 года «О бухгалтерском учёте»",
          "Закон № ЗРУ-580 от 5 ноября 2019 года «О банках и банковской деятельности»",
          "Закон № ЗРУ-582 от 11 ноября 2019 года «О Центральном банке Республики Узбекистан»",
          "Закон № ЗРУ-677 от 25 февраля 2021 года «Об аудиторской деятельности»",
          "Закон № ЗРУ-370 «Об акционерных обществах и защите прав акционеров»",
          "Постановление Президента № ПП-4611 от 24 февраля 2020 года о переходе на МСФО (пункт 1 утратил силу с 17 декабря 2025 года)",
          "Постановление Президента № ПП-419 от 10 ноября 2022 года «О мерах по оптимизации порядка отчётности и хранения архивных документов»",
          "Постановление Президента № ПП-282 от 15 сентября 2025 года о совершенствовании системы финансового учёта в соответствии с международными требованиями и стандартами",
          "Положение о сроках представления финансовой отчётности, её структуре и содержании (приказ Министра экономики и финансов № 181 от 8 октября 2024 года, рег. № 3567)",
          "НСБУ № 1, № 19, № 21 (план счетов, приказ № 191 от 14 ноября 2024 года) и № 22",
          "Национальные стандарты финансовой отчётности (НСФО) № 1 и № 2, действующие с 1 января 2027 года",
        ],
      },
      { type: "h2" as const, text: "Что такое бухгалтерский учёт?" },
      {
        type: "p" as const,
        text: "По законодательству Узбекистана бухгалтерский учёт определяется как упорядоченная система сбора, регистрации и обобщения учётной информации путём непрерывного, документально подтверждённого отражения всех хозяйственных операций и подготовки на этой основе финансовой и иной отчётности.",
      },
      {
        type: "p" as const,
        text: "Бухгалтерский учёт ведётся методом двойной записи: каждая хозяйственная операция одновременно отражается в равных суммах не менее чем на двух счетах — по дебету и кредиту. Бухгалтер фиксирует, откуда поступили средства, куда они направлены, в результате чего возникли и какой результат принесли. Тремя основными принципами учёта являются непрерывность, достоверность и сопоставимость показателей.",
      },
      { type: "h2" as const, text: "Первичные учётные документы" },
      {
        type: "p" as const,
        text: "Каждая хозяйственная операция должна подтверждаться первичным учётным документом. Эти документы являются основой системы учёта и фиксируют факт совершения операции либо санкционируют её проведение.",
      },
      {
        type: "p" as const,
        text: "К типичным хозяйственным операциям относятся: закупки (получение сырья, оплата поставщикам, передача материалов в производство); продажи (расходы на реализацию, поступление выручки, реализация товаров); производство (начисление заработной платы, амортизация основных средств, приёмка работ подрядчиков, оплата подрядчикам).",
      },
      {
        type: "p" as const,
        text: "Каждый первичный документ должен содержать следующие обязательные реквизиты:",
      },
      {
        type: "ul" as const,
        items: [
          "Наименование субъекта учёта",
          "Наименование, номер, дата и место составления документа",
          "Описание и количественное измерение хозяйственной операции (в натуральных единицах и денежном выражении)",
          "Должности и подписи лиц, осуществивших операцию, с указанием фамилии и инициалов",
        ],
      },
      {
        type: "p" as const,
        text: "Первичные документы могут составляться и представляться в электронной форме. Чеки платёжных терминалов по покупкам, совершённым корпоративными банковскими картами, также признаются первичными документами. Лица, составляющие и подписывающие первичные документы, несут персональную ответственность за их своевременность, точность и полноту. Учётные документы хранятся не менее пяти лет после отчётного года (ст. 29 ЗРУ-404).",
      },
      { type: "h2" as const, text: "Кто обязан вести бухгалтерский учёт" },
      {
        type: "p" as const,
        text: "Субъектами учёта являются: государственные органы и органы управления; все юридические лица, зарегистрированные в Узбекистане, включая их дочерние организации, представительства, филиалы и иные структурные подразделения — независимо от их расположения внутри или за пределами Узбекистана. Представительства и филиалы иностранных юридических лиц, а также индивидуальные предприниматели ведут учёт и представляют отчётность в порядке, установленном законодательством (ст. 6 ЗРУ-404). С 25 июля 2026 года на территории с особым правовым режимом, установленным конституционным законом, например в Ташкентском международном финансовом центре, могут действовать иные правила учёта (ст. 2).",
      },
      { type: "h2" as const, text: "Объекты учёта" },
      {
        type: "p" as const,
        text: "Объектами учёта являются: активы; обязательства; собственный капитал; резервы; доходы; расходы; прибыль; убытки; хозяйственные операции. Все объекты подлежат как синтетическому учёту (агрегированному по экономическим категориям, как того требует законодательство), так и аналитическому учёту (детализированному учёту, ведущемуся самой организацией исходя из её собственных потребностей).",
      },
      { type: "h2" as const, text: "Организация бухгалтерского учёта в компании" },
      {
        type: "p" as const,
        text: "Руководитель организации (директор) несёт ответственность за организацию бухгалтерского учёта и отчётности. Директор может:",
      },
      {
        type: "ul" as const,
        items: [
          "Создать собственную бухгалтерскую службу во главе с главным бухгалтером",
          "Привлечь внешнего бухгалтера по договору об оказании услуг",
          "Передать ведение учёта специализированной компании (аудиторской организации, налоговой консалтинговой или бухгалтерской фирме) по договору",
          "Лично вести бухгалтерский учёт",
        ],
      },
      {
        type: "p" as const,
        text: "Директор обязан обеспечить: разработку учётной политики и системы внутреннего контроля; полноту и достоверность учётных записей; сохранность учётных документов; составление и публикацию финансовой отчётности; своевременную налоговую и иную финансовую отчётность; своевременные расчёты по обязательствам; соблюдение требований к главному бухгалтеру, установленных ст. 12.",
      },
      {
        type: "p" as const,
        text: "Главный бухгалтер подчиняется непосредственно директору. Указания главного бухгалтера по вопросам документального оформления обязательны для всех работников. При возникновении разногласий между директором и главным бухгалтером по конкретной операции директор вправе дать письменное указание её совершить — однако ответственность за последствия несёт исключительно директор.",
      },
      { type: "h3" as const, text: "Квалификационные требования к главному бухгалтеру" },
      {
        type: "p" as const,
        text: "Для организаций, подлежащих обязательному аудиту (кроме банков, для которых правила устанавливает Центральный банк), главный бухгалтер должен: иметь высшее образование; и стаж соответствующей работы не менее 3 лет за последние 5 лет (при экономическом образовании) либо не менее 7 лет за последние 10 лет (при ином образовании). Директор таких организаций обязан также обеспечить ежегодное повышение квалификации главного бухгалтера. Те же требования распространяются на работника аутсорсинговой организации, который ведёт учёт такой организации. Главным бухгалтером не может быть недееспособное лицо или лицо с непогашенной судимостью за умышленное преступление. Профессионального сертификата закон не требует.",
      },
      { type: "h2" as const, text: "Упрощённый учёт для малых предприятий" },
      {
        type: "p" as const,
        text: "Малые предприятия вправе добровольно применять упрощённые правила учёта согласно НСБУ № 20 (последние изменения внесены 4 марта 2026 года); индивидуальным предпринимателям и фермерским хозяйствам упрощённый метод недоступен. За директором сохраняются те же варианты организации учёта, что описаны выше.",
      },
      {
        type: "p" as const,
        text: "Малые предприятия разрабатывают собственную учётную политику исходя из потребностей бизнеса и могут адаптировать стандартные учётные регистры к особенностям своей деятельности. Следующие требования остаются обязательными независимо от применения упрощённого учёта:",
      },
      {
        type: "ul" as const,
        items: [
          "Метод двойной записи",
          "Соответствие аналитического и синтетического учёта",
          "Непрерывная запись всех операций в регистрах на основании первичных документов",
          "Накопление и систематизация данных для целей управления, контроля, анализа и финансовой отчётности",
        ],
      },
      { type: "h2" as const, text: "Финансовая отчётность" },
      {
        type: "p" as const,
        text: "Финансовая отчётность представляет собой систематизированное отражение финансового положения организации на отчётную дату, а также её финансовых результатов и движения денежных средств за отчётный период. Отчётный период — календарный год с 1 января по 31 декабря; отчётная дата — 31 декабря.",
      },
      {
        type: "p" as const,
        text: "Годовая финансовая отчётность включает:",
      },
      {
        type: "ul" as const,
        items: [
          "Бухгалтерский баланс — отражает имущественное положение организации",
          "Отчёт о финансовых результатах — содержит сведения о прибылях и убытках",
          "Отчёт о движении денежных средств — фиксирует все денежные поступления и платежи за период, начальные и конечные остатки",
          "Отчёт об изменениях в собственном капитале",
          "Примечания, расчёты и пояснительные раскрытия",
        ],
      },
      {
        type: "p" as const,
        text: "Финансовая отчётность составляется нарастающим итогом с начала отчётного года. Организации обязаны консолидировать балансы всех представительств, филиалов и иных структурных подразделений, ведущих обособленный учёт. Учёт ведётся в национальной валюте — сумах (ст. 17 ЗРУ-404).",
      },
      {
        type: "p" as const,
        text: "Микрофирмы и малые предприятия сдают только бухгалтерский баланс и отчёт о финансовых результатах (ст. 25 ЗРУ-404; п. 10 Положения рег. № 3567). Отчётность по национальным стандартам сдаётся не позднее 1 марта следующего года, по МСФО — не позднее 1 мая (п. 7 Положения). Её получают налоговый орган, собственники и органы статистики; её можно представить электронным документом. Компания, которая отчитывается по МСФО, национальную отчётность не сдаёт.",
      },
      {
        type: "p" as const,
        text: "С 17 декабря 2025 года полные МСФО обязательны для организаций общественного интереса (ОЗО): котируемых компаний, банков и других финансовых организаций, инвестиционных фондов, бирж, крупных предприятий с долей государства и крупных частных компаний, внесённых в реестр Министерства экономики и финансов (ПП-282). Акционерные общества вне реестра по-прежнему обязаны публиковать МСФО-отчётность с аудитом по международным стандартам аудита по ст. 102 Закона об акционерных обществах, пока этот закон не изменён. Любая компания может перейти на МСФО добровольно. С 1 января 2027 года остальные компании применяют национальные стандарты финансовой отчётности (НСФО) № 1 и № 2 на основе МСФО для МСП вместе с оставшимися НСБУ. Организации, подлежащие обязательному аудиту, представляют копию аудиторского заключения в налоговый орган не позднее 15 июня (ст. 35 ЗРУ-677).",
      },
      { type: "h2" as const, text: "Регулирование" },
      {
        type: "p" as const,
        text: "Министерство экономики и финансов Республики Узбекистан осуществляет регулирование бухгалтерского учёта и финансовой отчётности, в том числе разрабатывает и утверждает стандарты бухгалтерского учёта, утверждает формы финансовой отчётности, осуществляет внешний контроль качества аудиторских организаций и ведёт Реестр аудиторских организаций и Реестр аудиторов. В тексте Закона «Об аудиторской деятельности» этот орган по-прежнему называется Министерством финансов. Для аудита банков нужны аудиторы с отдельным сертификатом Центрального банка (ст. 14 ЗРУ-677).",
      },
      {
        type: "p" as const,
        text: "Учёт в бюджетных организациях и государственных целевых фондах регулируется бюджетным законодательством под надзором Министерства экономики и финансов. Учёт в банках и иных кредитных организациях регулируется Центральным банком Республики Узбекистан, который устанавливает применимые правила. Коммерческие банки относятся к организациям общественного интереса и обязаны применять МСФО (ПП-282).",
      },
      { type: "h2" as const, text: "Последняя реформа: сокращение обязательств по отчётности" },
      {
        type: "p" as const,
        text: "Постановление Президента № ПП-419 (ноябрь 2022 года) ввело существенные упрощения:",
      },
      {
        type: "ul" as const,
        items: [
          "Отменена обязанность хранить и передавать в государственные или частные архивы документы по заработной плате и связанные с ней налоговые документы (по доходам, начисленным после 1 января 2022 года).",
          "Финансовая, налоговая и статистическая отчётность, представленная в электронной форме с 1 января 2022 года, и документы, обработанные электронно через системы налоговых органов, более не подлежат архивному хранению.",
          "С 1 января 2023 года организации не представляют квартальную финансовую отчётность в налоговые и статистические органы. Статья 25 ЗРУ-404 не изменена, но Положение рег. № 3567 устанавливает только годовые сроки.",
          "Плательщики налога с оборота по фиксированной ставке были освобождены от представления годовой финансовой отчётности в налоговые органы с 2023 года до 1 января 2026 года (ПП-419 в редакции ПП-455 от 25 декабря 2024 года). Освобождение закончилось, и за 2026 отчётный год они снова сдают отчётность.",
          "С 1 мая 2023 года предприятия, учредители которых являются резидентами Узбекистана, могут открывать банковские счета удалённо; договоры на коммунальные услуги и услуги связи могут заключаться в электронной форме.",
          "С 1 января 2023 года отменены девять форм статистической отчётности, в том числе по биржевой деятельности, условиям труда, распределению заработной платы, деятельности коммерческих банков и страховых организаций.",
          "Частные архивы, оказывающие услуги по электронному архивированию, более не нуждаются в лицензии — достаточно уведомления в компетентный орган.",
        ],
      },
      { type: "h2" as const, text: "Ответственность за нарушения" },
      {
        type: "p" as const,
        text: "Неисполнение руководителем субъекта учёта или должностными лицами бухгалтерской службы возложенных на них обязанностей — включая необеспечение точности и достоверности учётных данных и финансовой отчётности либо непроведение инвентаризации активов и обязательств — является административным правонарушением по ст. 175-1 Кодекса об административной ответственности:",
      },
      {
        type: "ul" as const,
        items: [
          "Первое нарушение: штраф в размере от 3 до 7 базовых расчётных величин, налагаемый на должностных лиц.",
          "Повторное нарушение в течение одного года: штраф в размере от 7 до 10 базовых расчётных величин, налагаемый на должностных лиц.",
        ],
      },
      { type: "h2" as const, text: "Чем может помочь Advizen" },
      {
        type: "p" as const,
        text: "Организация бухгалтерской службы, выбор между внутренней и аутсорсинговой моделью, разработка учётной политики и обеспечение соблюдения обязательств по отчётности требуют внимательного учёта особенностей регуляторной среды Узбекистана. Advizen консультирует клиентов по вопросам организации бухгалтерского учёта, выбора оптимальной учётной модели, соблюдения сроков отчётности и подготовки ответов на запросы регуляторов.",
      },
    ],
      faq: [
      {
        question: "Какие юридические лица обязаны вести бухгалтерский учёт в Узбекистане?",
        answer: "Согласно Закону № ЗРУ-404, все юридические лица, зарегистрированные в Узбекистане, обязаны вести бухгалтерский учёт — включая их дочерние организации, представительства, филиалы и иные структурные подразделения, независимо от их расположения внутри или за пределами Узбекистана. Государственные органы и органы управления также являются субъектами учёта. Представительства и филиалы иностранных юридических лиц ведут учёт и представляют отчётность в порядке, установленном законодательством (ст. 6). Директор (руководитель организации) несёт личную ответственность за организацию учётной функции.",
      },
      {
        question: "Кто несёт ответственность за организацию бухгалтерского учёта в компании в Узбекистане?",
        answer: "Директор (руководитель организации) несёт личную ответственность за организацию бухгалтерского учёта и отчётности. Директор вправе: создать собственную бухгалтерскую службу во главе с главным бухгалтером; привлечь внешнего бухгалтера по договору об оказании услуг; передать учёт специализированной компании (аудиторской, налоговой консалтинговой или бухгалтерской фирме) по договору; либо лично вести учёт. При возникновении разногласий с главным бухгалтером директор вправе дать письменное указание — однако ответственность за последствия несёт исключительно директор.",
      },
      {
        question: "Каковы обязательства по годовой финансовой отчётности для компаний в Узбекистане?",
        answer: "Отчётный период — календарный год с 1 января по 31 декабря. Годовая финансовая отчётность включает: бухгалтерский баланс; отчёт о финансовых результатах; отчёт о движении денежных средств; отчёт об изменениях в собственном капитале; примечания и пояснительные раскрытия. Отчётность по национальным стандартам сдаётся до 1 марта следующего года, по МСФО — до 1 мая. С 1 января 2023 года организации более не обязаны представлять квартальную финансовую отчётность в налоговые и статистические органы. Освобождение плательщиков налога с оборота по фиксированной ставке от годовой отчётности действовало в 2023–2025 годах и закончилось 1 января 2026 года; за 2026 отчётный год они снова сдают отчётность.",
      },
      {
        question: "Какова ответственность за нарушения в области бухгалтерского учёта в Узбекистане?",
        answer: "Неисполнение руководителем или должностными лицами бухгалтерской службы возложенных обязанностей — включая необеспечение достоверности учётных данных и финансовой отчётности или непроведение инвентаризации — является административным правонарушением по ст. 175-1 Кодекса об административной ответственности: первое нарушение — штраф от 3 до 7 БРВ на должностных лиц; повторное нарушение в течение одного года — штраф от 7 до 10 БРВ на должностных лиц.",
      },
    ],},
  uz: {
    subtitle: "Oʻzbekistonning buxgalteriya hisobi toʻgʻrisidagi qonunchiligiga amaliy umumiy nazar — kim rioya qilishi shart, hisob qanday yuritiladi, qanday hisobotlar talab etiladi va qanday jarimalar qoʻllaniladi.",
    author: "Advizen yuridik amaliyoti",
    readTime: "11 daqiqa oʻqish",
    inShort: {
      figures: [
        { value: "OʻRQ-404", label: "2016-yil 13-apreldagi «Buxgalteriya hisobi toʻgʻrisida»gi Qonun" },
        { value: "31-dekabr", label: "Hisobot sanasi; hisobot davri — kalendar yil" },
        { value: "1-mart", label: "Milliy standartlar boʻyicha yillik hisobot topshirish muddati; MHXS boʻyicha hisobot 1-maygacha topshiriladi" },
        { value: "3–7 BHM", label: "Birinchi huquqbuzarlik uchun mansabdor shaxslarga jarima, bir yil ichida takrorlansa — 7–10 BHM" },
      ],
      points: [
        "Oʻzbekistonda roʻyxatdan oʻtgan har bir yuridik shaxs, jumladan uning shoʻba korxonalari, vakolatxonalari, filiallari va Oʻzbekiston ichida yoki tashqarisidagi boshqa tarkibiy boʻlinmalari buxgalteriya hisobini yuritishi shart.",
        "Hisob ikki yozuv usulida yuritiladi va har bir xoʻjalik operatsiyasi elektron shaklda ham boʻlishi mumkin boʻlgan birlamchi hisob hujjati bilan tasdiqlanishi kerak.",
        "Hisobni tashkil etish uchun rahbar javobgar: u ichki buxgalteriya xizmatini tuzishi, tashqi buxgalterni jalb qilishi, hisobni ixtisoslashgan tashkilotga topshirishi yoki uni shaxsan yuritishi mumkin.",
        "Yillik moliyaviy hisobot buxgalteriya balansi, moliyaviy natijalar toʻgʻrisidagi hisobot, pul mablagʻlari harakati toʻgʻrisidagi hisobot, xususiy kapitaldagi oʻzgarishlar toʻgʻrisidagi hisobot va izohlardan iborat.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Oʻzbekistonda faoliyat yurituvchi har bir yuridik shaxs buxgalteriya hisobini yuritishi shart. Qoidalar 2016-yil 13-apreldagi «Buxgalteriya hisobi toʻgʻrisida»gi OʻRQ-404-sonli Qonun va qoʻshimcha qonun hujjatlari toʻplamida belgilangan. Ushbu qoʻllanma asosiy tushunchalarni, tashkiliy talablarni, hisobot majburiyatlarini va talablarni buzganlik uchun jarimalarni qamrab oladi.",
      },
      { type: "h2" as const, text: "Qonunchilik bazasi" },
      {
        type: "ul" as const,
        items: [
          "Oʻzbekiston Respublikasi Byudjet kodeksi",
          "Oʻzbekiston Respublikasi Fuqarolik kodeksi",
          "Oʻzbekiston Respublikasi Jinoyat kodeksi",
          "Oʻzbekiston Respublikasi Soliq kodeksi",
          "2016-yil 13-apreldagi «Buxgalteriya hisobi toʻgʻrisida»gi OʻRQ-404-sonli Qonun",
          "2019-yil 5-noyabrdagi «Banklar va bank faoliyati toʻgʻrisida»gi OʻRQ-580-sonli Qonun",
          "2019-yil 11-noyabrdagi «Oʻzbekiston Respublikasi Markaziy banki toʻgʻrisida»gi OʻRQ-582-sonli Qonun",
          "2021-yil 25-fevraldagi «Auditorlik faoliyati toʻgʻrisida»gi OʻRQ-677-sonli Qonun",
          "«Aksiyadorlik jamiyatlari va aksiyadorlarning huquqlarini himoya qilish toʻgʻrisida»gi OʻRQ-370-sonli Qonun",
          "Prezidentning 2020-yil 24-fevraldagi MHXSga oʻtish toʻgʻrisidagi PQ-4611-son qarori (1-bandi 2025-yil 17-dekabrdan kuchini yoʻqotgan)",
          "2022-yil 10-noyabrdagi «Hisobot va arxiv hujjatlarini saqlash tartibini optimallashtirish chora-tadbirlari toʻgʻrisida»gi Prezidentning PQ-419-son qarori",
          "2025-yil 15-sentabrdagi «Moliyaviy hisob tizimini xalqaro talab va standartlarga muvofiq takomillashtirish chora-tadbirlari toʻgʻrisida»gi Prezidentning PQ-282-son qarori",
          "Moliyaviy hisobotni taqdim etish muddatlari, uning tuzilishi va mazmuni toʻgʻrisidagi nizom (Iqtisodiyot va moliya vazirining 2024-yil 8-oktabrdagi 181-son buyrugʻi, roʻyxat raqami 3567)",
          "BHMS № 1, № 19, № 21 (hisobvaraqlar rejasi, 2024-yil 14-noyabrdagi 191-son buyruq) va № 22",
          "Moliyaviy hisobotning milliy standartlari № 1 va № 2 (2027-yil 1-yanvardan kuchga kiradi)",
        ],
      },
      { type: "h2" as const, text: "Buxgalteriya hisobi nima?" },
      {
        type: "p" as const,
        text: "Oʻzbekiston qonunchiligiga koʻra, buxgalteriya hisobi — barcha xoʻjalik operatsiyalarini uzluksiz, hujjatlashtirilgan tarzda qayd etish hamda shu asosda moliyaviy va boshqa hisobotlarni tayyorlash orqali hisob maʼlumotlarini yigʻish, roʻyxatga olish va umumlashtirishning tartibga solingan tizimidir.",
      },
      {
        type: "p" as const,
        text: "Buxgalteriya hisobi ikki yozuv usulida yuritiladi: har bir xoʻjalik operatsiyasi bir vaqtning oʻzida teng summalarda kamida ikki hisobvaraqda — debet va kreditda — qayd etiladi. Buxgalter mablagʻlar qayerdan kelganini, qayerga yoʻnaltirilganini, qanday yuzaga kelganini va qanday natija berganini qayd etadi. Hisobning uchta asosiy tamoyili: uzluksizlik, ishonchlilik va koʻrsatkichlarning qiyoslanishi.",
      },
      { type: "h2" as const, text: "Birlamchi hisob hujjatlari" },
      {
        type: "p" as const,
        text: "Har bir xoʻjalik operatsiyasi birlamchi hisob hujjati bilan tasdiqlanishi shart. Bu hujjatlar hisob tizimining asosi boʻlib, operatsiyaning sodir boʻlganligi faktini qayd etadi yoki uni amalga oshirishga ruxsat beradi.",
      },
      {
        type: "p" as const,
        text: "Tipik xoʻjalik operatsiyalariga quyidagilar kiradi: xaridlar (xomashyo qabul qilish, yetkazib beruvchilarga toʻlov, materiallarni ishlab chiqarishga joʻnatish); sotuvlar (sotuv xarajatlari, tushum olish, tovarlarni sotish); ishlab chiqarish (ish haqi hisoblash, asosiy vositalar amortizatsiyasi, pudratchi ishlarini qabul qilish, pudratchilarga toʻlov).",
      },
      {
        type: "p" as const,
        text: "Har bir birlamchi hujjat quyidagi majburiy rekvizitlarga ega boʻlishi shart:",
      },
      {
        type: "ul" as const,
        items: [
          "Hisob subyektining nomi",
          "Hujjat nomi, raqami, sanasi va tuzilgan joyi",
          "Xoʻjalik operatsiyasining tavsifi va miqdor oʻlchovi (natural birliklarda va pul ifodasida)",
          "Operatsiyani amalga oshirgan shaxslarning lavozimlari va imzolari, familiyasi va ismi koʻrsatilgan holda",
        ],
      },
      {
        type: "p" as const,
        text: "Birlamchi hujjatlar elektron shaklda tuzilishi va taqdim etilishi mumkin. Korporativ bank kartalari bilan amalga oshirilgan xaridlar boʻyicha toʻlov terminallari cheklari ham birlamchi hujjat sifatida tan olinadi. Birlamchi hujjatlarni tuzgan va imzolagan shaxslar ularning oʻz vaqtida, aniq va toʻliq ekanligi uchun shaxsiy javobgardir. Hisob hujjatlari hisobot yilidan keyin kamida besh yil saqlanadi (OʻRQ-404, 29-modda).",
      },
      { type: "h2" as const, text: "Buxgalteriya hisobini kim yuritishi shart" },
      {
        type: "p" as const,
        text: "Hisob subyektlari quyidagilarni oʻz ichiga oladi: davlat hokimiyati va boshqaruv organlari; Oʻzbekistonda roʻyxatdan oʻtgan barcha yuridik shaxslar, jumladan ularning shoʻba korxonalari, vakolatxonalari, filiallari va boshqa tarkibiy boʻlinmalari — Oʻzbekiston ichida yoki tashqarisida joylashganligidan qatʼi nazar. Chet el yuridik shaxslarining vakolatxonalari va filiallari, shuningdek yakka tartibdagi tadbirkorlar hisobni qonunchilikda belgilangan tartibda yuritadi va hisobot taqdim etadi (OʻRQ-404, 6-modda). 2026-yil 25-iyuldan konstitutsiyaviy qonun bilan belgilangan alohida huquqiy rejimli hududda, masalan Toshkent xalqaro moliya markazida, boshqa hisob qoidalari qoʻllanilishi mumkin (2-modda).",
      },
      { type: "h2" as const, text: "Hisob obyektlari" },
      {
        type: "p" as const,
        text: "Hisob obyektlari quyidagilardir: aktivlar; majburiyatlar; xususiy kapital; rezervlar; daromadlar; xarajatlar; foyda; zararlar; xoʻjalik operatsiyalari. Barcha obyektlar ham sintetik hisobga (qonunchilik talab qilganidek, iqtisodiy toifalar boʻyicha umumlashtirilgan), ham analitik hisobga (tashkilotning oʻz ehtiyojlariga koʻra yuritiladigan batafsil hisob) tortiladi.",
      },
      { type: "h2" as const, text: "Kompaniyada buxgalteriya hisobini tashkil etish" },
      {
        type: "p" as const,
        text: "Tashkilot rahbari (direktor) buxgalteriya hisobi va hisobotini tashkil etishga masʼuldir. Direktor quyidagilarni amalga oshirishi mumkin:",
      },
      {
        type: "ul" as const,
        items: [
          "Bosh buxgalter boshchiligida ichki buxgalteriya xizmatini tashkil etish",
          "Tashqi buxgalterni xizmat koʻrsatish shartnomasi asosida jalb qilish",
          "Hisobni shartnoma asosida ixtisoslashgan firmaga (audit tashkiloti, soliq konsalting yoki buxgalteriya firmasiga) topshirish",
          "Hisobni shaxsan yuritish",
        ],
      },
      {
        type: "p" as const,
        text: "Direktor quyidagilarni taʼminlashi shart: hisob siyosati va ichki nazorat tizimini ishlab chiqish; hisob yozuvlarining toʻliqligi va ishonchliligi; hisob hujjatlarining saqlanishi; moliyaviy hisobotni tayyorlash va eʼlon qilish; oʻz vaqtida soliq va boshqa moliyaviy hisobot taqdim etish; majburiyatlar boʻyicha oʻz vaqtida hisob-kitob qilish; 12-moddada bosh buxgalterga qoʻyilgan talablarga rioya etish.",
      },
      {
        type: "p" as const,
        text: "Bosh buxgalter toʻgʻridan-toʻgʻri direktorga boʻysunadi. Bosh buxgalterning hujjat rasmiylashtirish boʻyicha koʻrsatmalari barcha xodimlar uchun majburiydir. Direktor va bosh buxgalter oʻrtasida muayyan operatsiya yuzasidan kelishmovchilik yuzaga kelsa, direktor uni amalga oshirish toʻgʻrisida yozma koʻrsatma berishi mumkin — biroq oqibatlari uchun javobgarlikni faqat direktor oʻz boʻyniga oladi.",
      },
      { type: "h3" as const, text: "Bosh buxgalterga qoʻyiladigan malaka talablari" },
      {
        type: "p" as const,
        text: "Majburiy auditga tortiladigan tashkilotlar uchun (qoidalari Markaziy bank tomonidan belgilanadigan banklardan tashqari) bosh buxgalter quyidagilarga ega boʻlishi shart: oliy maʼlumot; oxirgi 5 yilda kamida 3 yillik tegishli ish stajiga (iqtisodiy maʼlumotda) yoki oxirgi 10 yilda kamida 7 yillik (boshqa sohadagi maʼlumotda) ish stajiga ega boʻlish. Bunday tashkilotlar direktori shuningdek bosh buxgalterning yillik kasbiy malaka oshirishini taʼminlashi shart. Xuddi shu talablar bunday tashkilotning hisobini yurituvchi autsorsing tashkiloti xodimiga ham tatbiq etiladi. Muomalaga layoqatsiz shaxs yoki qasddan sodir etilgan jinoyat uchun sudlanganligi tugallanmagan yoki olib tashlanmagan shaxs bosh buxgalter boʻla olmaydi. Qonun kasbiy sertifikat talab qilmaydi.",
      },
      { type: "h2" as const, text: "Kichik korxonalar uchun soddalashtirilgan hisob" },
      {
        type: "p" as const,
        text: "Kichik korxonalar BHMS № 20 boʻyicha soddalashtirilgan hisob qoidalarini ixtiyoriy ravishda qoʻllashlari mumkin (oxirgi oʻzgartirishlar 2026-yil 4-martda kiritilgan); yakka tartibdagi tadbirkorlar va fermer xoʻjaliklari bu usuldan foydalana olmaydi. Direktor uchun yuqorida tavsiflangan hisobni tashkil etish variantlari saqlanib qoladi.",
      },
      {
        type: "p" as const,
        text: "Kichik korxonalar biznes ehtiyojlaridan kelib chiqib oʻz hisob siyosatini ishlab chiqadilar va standart hisob registrlarini oʻz faoliyatining xususiyatlariga moslashtirishlari mumkin. Soddalashtirilgan hisob qoʻllanilishidan qatʼi nazar quyidagi talablar majburiyligicha qoladi:",
      },
      {
        type: "ul" as const,
        items: [
          "Ikki yozuv metodologiyasi",
          "Analitik va sintetik hisob oʻrtasidagi muvofiqlik",
          "Birlamchi hujjatlar asosida barcha operatsiyalarni registrlarda uzluksiz qayd etish",
          "Boshqaruv, nazorat, tahlil va moliyaviy hisobot maqsadlari uchun maʼlumotlarni toʻplash va tizimlashtirish",
        ],
      },
      { type: "h2" as const, text: "Moliyaviy hisobot" },
      {
        type: "p" as const,
        text: "Moliyaviy hisobot — hisobot sanasidagi tashkilotning moliyaviy holatini, shuningdek hisobot davridagi moliyaviy natijalari va pul oqimlarini tizimlashtirilgan tarzda taqdim etishdir. Hisobot davri — 1-yanvardan 31-dekabrgacha boʻlgan kalendar yil; hisobot sanasi — 31-dekabr.",
      },
      {
        type: "p" as const,
        text: "Yillik moliyaviy hisobot quyidagilardan iborat:",
      },
      {
        type: "ul" as const,
        items: [
          "Buxgalteriya balansi — tashkilotning mol-mulkiy holatini aks ettiradi",
          "Moliyaviy natijalar toʻgʻrisida hisobot — foyda va zararlar haqida maʼlumot beradi",
          "Pul mablagʻlari harakati toʻgʻrisida hisobot — davr uchun barcha pul tushumlari va toʻlovlarni hamda boshlangʻich va yakuniy qoldiqlarni qayd etadi",
          "Xususiy kapitaldagi oʻzgarishlar toʻgʻrisida hisobot",
          "Izohlar, hisob-kitoblar va tushuntiruvchi oshkor etishlar",
        ],
      },
      {
        type: "p" as const,
        text: "Moliyaviy hisobot hisobot yili boshidan oʻsib boruvchi koʻrsatkichlar bilan tuziladi. Tashkilotlar alohida hisob yuritadigan vakolatxonalar, filiallar va boshqa tarkibiy boʻlinmalarning balanslarini birlashtirib taqdim etishi shart. Hisob milliy valyutada — soʻmda yuritiladi (OʻRQ-404, 17-modda).",
      },
      {
        type: "p" as const,
        text: "Mikrofirmalar va kichik korxonalar faqat buxgalteriya balansi va moliyaviy natijalar toʻgʻrisidagi hisobotni taqdim etadi (OʻRQ-404, 25-modda; 3567-son bilan roʻyxatga olingan Nizomning 10-bandi). Milliy standartlar boʻyicha hisobot keyingi yilning 1-martidan, MHXS boʻyicha hisobot esa 1-mayidan kechiktirmay taqdim etiladi (Nizomning 7-bandi). Hisobot soliq organiga, mulkdorlarga va statistika organlariga taqdim etiladi, uni elektron hujjat shaklida topshirish mumkin. MHXS boʻyicha hisobot beradigan kompaniya milliy hisobotni taqdim etmaydi.",
      },
      {
        type: "p" as const,
        text: "2025-yil 17-dekabrdan toʻliq MHXS jamoat ahamiyatiga molik tashkilotlar uchun majburiy: bular birjada kotirovka qilinadigan kompaniyalar, banklar va boshqa moliya tashkilotlari, investitsiya fondlari, birjalar, davlat ulushi boʻlgan yirik korxonalar va yirik xususiy kompaniyalar boʻlib, ular Iqtisodiyot va moliya vazirligi yuritadigan reyestrga kiritiladi (PQ-282). Reyestrga kirmagan aksiyadorlik jamiyatlari Aksiyadorlik jamiyatlari toʻgʻrisidagi qonunning 102-moddasiga koʻra, ushbu qonun oʻzgartirilmaguncha, xalqaro audit standartlari boʻyicha auditdan oʻtkazilgan MHXS hisobotini eʼlon qilishi shart. Har qanday kompaniya MHXSga ixtiyoriy ravishda oʻtishi mumkin. 2027-yil 1-yanvardan boshqa kompaniyalar kichik va oʻrta biznes uchun MHXS asosidagi moliyaviy hisobotning milliy standartlari № 1 va № 2 ni qolgan BHMSlar bilan birga qoʻllaydi. Majburiy auditga tortiladigan tashkilotlar auditorlik xulosasining nusxasini soliq organiga 15-iyundan kechiktirmay taqdim etadi (OʻRQ-677, 35-modda).",
      },
      { type: "h2" as const, text: "Tartibga solish" },
      {
        type: "p" as const,
        text: "Oʻzbekiston Respublikasi Iqtisodiyot va moliya vazirligi buxgalteriya hisobi va moliyaviy hisobotni tartibga soladi, jumladan buxgalteriya hisobi standartlarini ishlab chiqadi va tasdiqlaydi, moliyaviy hisobot shakllarini tasdiqlaydi, audit tashkilotlarining tashqi sifat nazoratini olib boradi va audit tashkilotlari reyestri va auditorlar reyestrini yuritadi. «Auditorlik faoliyati toʻgʻrisida»gi Qonun matnida bu organ hamon Moliya vazirligi deb ataladi. Banklarni audit qilish uchun Markaziy bankning alohida sertifikatiga ega auditorlar talab etiladi (OʻRQ-677, 14-modda).",
      },
      {
        type: "p" as const,
        text: "Byudjet tashkilotlari va davlat maqsadli jamgʻarmalaridagi hisob byudjet qonunchiligi bilan tartibga solinadi va Iqtisodiyot va moliya vazirligi nazorati ostida amalga oshiriladi. Banklar va boshqa kredit tashkilotlaridagi hisob Oʻzbekiston Respublikasi Markaziy banki tomonidan tartibga solinadi, u amaldagi qoidalarni belgilaydi. Tijorat banklari jamoat ahamiyatiga molik tashkilotlar hisoblanadi va MHXSni qoʻllashi shart (PQ-282).",
      },
      { type: "h2" as const, text: "Soʻnggi islohot: hisobot majburiyatlarining qisqarishi" },
      {
        type: "p" as const,
        text: "Prezidentning PQ-419-son qarori (2022-yil noyabr) sezilarli soddalashtirishlarni joriy etdi:",
      },
      {
        type: "ul" as const,
        items: [
          "Ish haqi hujjatlari va u bilan bogʻliq soliq hujjatlarini (2022-yil 1-yanvardan keyin hisoblangan daromadlar boʻyicha) davlat yoki xususiy arxivlarga saqlash va topshirish majburiyati bekor qilindi.",
          "2022-yil 1-yanvardan boshlab elektron shaklda taqdim etilgan moliyaviy, soliq va statistik hisobotlar va soliq organlari tizimlari orqali elektron qayta ishlangan hujjatlar endi arxivlanishi shart emas.",
          "2023-yil 1-yanvardan tashkilotlar soliq va statistika organlariga choraklik moliyaviy hisobot taqdim etmaydi. OʻRQ-404 ning 25-moddasi oʻzgartirilmagan, biroq 3567-son bilan roʻyxatga olingan Nizom faqat yillik muddatlarni belgilaydi.",
          "Qatʼiy belgilangan stavkada aylanma soliq toʻlovchilar 2023-yildan 2026-yil 1-yanvargacha soliq organlariga yillik moliyaviy hisobot taqdim etishdan ozod qilingan edi (2024-yil 25-dekabrdagi PQ-455 tahriridagi PQ-419). Bu imtiyoz tugadi va ular 2026 hisobot yili uchun hisobotni yana taqdim etadi.",
          "2023-yil 1-maydan taʼsischilari Oʻzbekiston rezidentlari boʻlgan korxonalar bank hisobvaraqlarini masofadan turib ochishlari mumkin; kommunal va aloqa shartnomalari elektron shaklda imzolanishi mumkin.",
          "2023-yil 1-yanvardan toʻqqizta statistik hisobot shakli, jumladan birja faoliyati, mehnat sharoitlari, ish haqini taqsimlash, tijorat banklari va sugʻurta tashkilotlari faoliyati boʻyicha shakllar bekor qilindi.",
          "Elektron arxivlash xizmatlarini koʻrsatuvchi xususiy arxivlar endi litsenziyaga muhtoj emas — vakolatli organga xabarnoma yuborish yetarli.",
        ],
      },
      { type: "h2" as const, text: "Talablarni buzganlik uchun jarimalar" },
      {
        type: "p" as const,
        text: "Hisob subyekti rahbari yoki buxgalteriya xizmati mansabdor shaxslari tomonidan ularga yuklatilgan majburiyatlarning bajarilmasligi — jumladan hisob maʼlumotlari va moliyaviy hisobotning aniqligi va ishonchliligini taʼminlamaslik yoki aktivlar va majburiyatlar inventarizatsiyasini oʻtkazmaslik — Maʼmuriy javobgarlik toʻgʻrisidagi kodeksning 175-1-moddasiga muvofiq maʼmuriy huquqbuzarlik hisoblanadi:",
      },
      {
        type: "ul" as const,
        items: [
          "Birinchi huquqbuzarlik: mansabdor shaxslarga bazaviy hisoblash miqdorining 3 dan 7 baravarigacha jarima.",
          "Bir yil ichida takroriy huquqbuzarlik: mansabdor shaxslarga bazaviy hisoblash miqdorining 7 dan 10 baravarigacha jarima.",
        ],
      },
      { type: "h2" as const, text: "Advizen qanday yordam bera oladi" },
      {
        type: "p" as const,
        text: "Buxgalteriya xizmatini tashkil etish, ichki va autsorsing modellari oʻrtasida tanlash, hisob siyosatini ishlab chiqish va hisobot majburiyatlarini bajarish Oʻzbekistonning tartibga soluvchi tizimi xususiyatlariga jiddiy eʼtibor talab etadi. Advizen mijozlarga buxgalteriya hisobini tashkil etish, mos hisob modelini tanlash, hisobot muddatlariga rioya etish va tartibga soluvchilar soʻrovlariga javob tayyorlash boʻyicha maslahat beradi.",
      },
    ],
      faq: [
      {
        question: "Oʻzbekistonda qaysi tashkilotlar buxgalteriya hisobini yuritishi shart?",
        answer: "OʻRQ-404-sonli Qonunga muvofiq, Oʻzbekistonda roʻyxatdan oʻtgan barcha yuridik shaxslar buxgalteriya hisobini yuritishi shart — jumladan ularning shoʻba korxonalari, vakolatxonalari, filiallari va boshqa tarkibiy boʻlinmalari, Oʻzbekiston ichida yoki tashqarisida joylashganligidan qatʼi nazar. Davlat hokimiyati va boshqaruv organlari ham hisob subyektlari hisoblanadi. Chet el yuridik shaxslarining vakolatxonalari va filiallari hisobni qonunchilikda belgilangan tartibda yuritadi va hisobot taqdim etadi (6-modda). Direktor (tashkilot rahbari) buxgalteriya funksiyasini tashkil etish uchun shaxsan javobgardir.",
      },
      {
        question: "Oʻzbekistonda kompaniyada buxgalteriya hisobini tashkil etish uchun kim javobgardir?",
        answer: "Direktor (tashkilot rahbari) buxgalteriya hisobi va hisobotini tashkil etish uchun shaxsan javobgardir. Direktor: bosh buxgalter boshchiligidagi ichki buxgalteriya xizmatini tashkil etishi; tashqi buxgalterni xizmat koʻrsatish shartnomasi asosida jalb qilishi; hisobni ixtisoslashgan firmaga (audit tashkiloti, soliq konsalting yoki buxgalteriya firmasiga) topshirishi; yoki hisobni shaxsan yuritishi mumkin. Bosh buxgalter bilan kelishmovchilik yuzaga kelganda direktor yozma koʻrsatma berishi mumkin — biroq oqibatlari uchun javobgarlikni faqat direktor oʻz boʻyniga oladi.",
      },
      {
        question: "Oʻzbekistondagi kompaniyalar uchun yillik moliyaviy hisobot majburiyatlari qanday?",
        answer: "Hisobot davri — 1-yanvardan 31-dekabrgacha boʻlgan kalendar yil. Yillik moliyaviy hisobot quyidagilarni oʻz ichiga oladi: buxgalteriya balansi; moliyaviy natijalar toʻgʻrisida hisobot; pul mablagʻlari harakati toʻgʻrisida hisobot; xususiy kapitaldagi oʻzgarishlar toʻgʻrisida hisobot; izohlar va tushuntiruvchi oshkor etishlar. Milliy standartlar boʻyicha hisobot keyingi yilning 1-martigacha, MHXS boʻyicha hisobot esa 1-maygacha topshiriladi. 2023-yil 1-yanvardan tashkilotlar soliq va statistika organlariga choraklik moliyaviy hisobot taqdim etishi shart emas. Qatʼiy belgilangan stavkada aylanma soliq toʻlovchilarning yillik hisobotdan ozod qilinishi 2023–2025-yillarda amal qilgan va 2026-yil 1-yanvarda tugagan; ular 2026 hisobot yili uchun hisobotni yana taqdim etadi.",
      },
      {
        question: "Oʻzbekistonda buxgalteriya hisobi buzilishlari uchun qanday jarimalar qoʻllaniladi?",
        answer: "Rahbar yoki buxgalteriya xizmati mansabdor shaxslari tomonidan majburiyatlarning bajarilmasligi — jumladan hisob maʼlumotlari va moliyaviy hisobotning ishonchliligini taʼminlamaslik yoki inventarizatsiyani oʻtkazmaslik — Maʼmuriy javobgarlik toʻgʻrisidagi kodeksning 175-1-moddasiga muvofiq maʼmuriy huquqbuzarlik hisoblanadi: birinchi huquqbuzarlik — mansabdor shaxslarga bazaviy hisoblash miqdorining 3 dan 7 baravarigacha jarima; bir yil ichida takroriy huquqbuzarlik — 7 dan 10 baravarigacha jarima.",
      },
    ],
  },
};

export default article;
