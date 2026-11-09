import type { LocalizedArticle } from "../publications";

const article: Record<string, LocalizedArticle> = {
  en: {
    subtitle: "A practical guide to Uzbekistan's emerging Islamic finance framework — legislation, permitted instruments, and the regulatory obligations for MFOs.",
    author: "Advizen Legal Practice",
    readTime: "9 min read",
    inShort: {
      figures: [
        { value: "ZRU-765", label: "Law of 20 April 2022 on non-banking credit organisations and microfinance activities" },
        { value: "No. 23/4", label: "Central Bank Resolution of 19 July 2024 that sets the procedure for Islamic finance services by MFOs" },
        { value: "UZS 300m / 100m", label: "Maximum Islamic financing for businesses and for individuals, the micro-loan threshold" },
        { value: "5", label: "Minimum number of members of the Special Council for the Coordination of Islamic Finance Issues" },
      ],
      points: [
        "In Uzbekistan, Islamic finance services are currently provided only by microfinance organisations (MFOs).",
        "MFOs may offer six instruments: Murabaha, Islomiy Ijara, Ijara Muntahiya Bittamlik, Salam, Mudaraba and Musharaka.",
        "An MFO must establish a Special Council, or engage one on a contractual basis, to ensure its Islamic finance activities comply with legislation and the Central Bank Regulation.",
        "An MFO may recover a contractual penalty from a client in default, but those amounts must be kept separate from its profit and used only for charitable purposes.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Islamic finance is a system of financial transactions conducted in accordance with Sharia principles. It prohibits the receipt of interest (riba) and is built instead on the equitable sharing of risk and profit between the provider and the client. Active discussion of introducing Islamic finance services in Uzbekistan began in 2018, and since then a series of legislative acts have been adopted that lay the groundwork for an expanding Sharia-compliant credit market.",
      },
      { type: "h2" as const, text: "Legislative framework" },
      {
        type: "p" as const,
        text: "The primary instruments governing Islamic finance in Uzbekistan are:",
      },
      {
        type: "ul" as const,
        items: [
          "Law of the Republic of Uzbekistan 'On Non-Banking Credit Organisations and Microfinance Activities' dated 20 April 2022, No. ZRU-765.",
          "Presidential Decree 'On Additional Measures to Increase the Role and Share of Microfinance Services in Entrepreneurship Development' (Decree of the President).",
          "Presidential Decree 'On Measures for the Further Development of the Capital Market' dated 13 April 2021, No. UP-6207.",
          "Central Bank Resolution 'On Approval of the Regulation on the Procedure for the Provision of Islamic Finance Services by Microfinance Organisations' dated 19 July 2024, No. 23/4.",
        ],
      },
      { type: "h2" as const, text: "Who may provide Islamic finance services" },
      {
        type: "p" as const,
        text: "Islamic finance services in Uzbekistan are currently provided exclusively by microfinance organisations (MFOs). The maximum amounts are capped at the micro-loan threshold — 300,000,000 UZS for businesses and 100,000,000 UZS for individuals.",
      },
      {
        type: "p" as const,
        text: "The detailed procedure for providing Islamic finance services is developed by the Central Bank of the Republic of Uzbekistan. The Resolution of 19 July 2024 establishes which instruments MFOs may offer and the operational conditions they must observe.",
      },
      {
        type: "p" as const,
        text: "Under the Resolution, MFOs are authorised to provide the following Islamic finance instruments:",
      },
      {
        type: "ul" as const,
        items: [
          "Ijara Muntahiya Bittamlik — a lease arrangement with an option for the client to purchase the leased asset at the end of the term.",
          "Islomiy Ijara — the transfer of property (acquired by the MFO at the client's request, or already on the MFO's balance sheet and not in use) to the client for temporary possession and/or use for an agreed period and at a fixed fee.",
          "Murabaha — financing by selling goods to the client on a deferred-payment basis at a pre-agreed price and mark-up.",
          "Mudaraba — financing in which the MFO provides capital for the client's commercial activity; profit is distributed between the parties in pre-agreed proportions.",
          "Musharaka — a partnership based on profit-and-loss sharing, in which the MFO engages in business activity jointly with one or more clients or participates in the charter capital of legal entities.",
          "Salam — financing by way of the MFO pre-paying in full the price of goods to be delivered by the client (supplier) at a future date.",
        ],
      },
      {
        type: "p" as const,
        text: "A mandatory condition for providing Islamic finance services is the establishment of a Special Council for the Coordination of Islamic Finance Issues. The Special Council is responsible for ensuring that the MFO's Islamic finance activities comply with applicable legislation and the requirements of the Regulation.",
      },
      {
        type: "p" as const,
        text: "The Special Council is established by the participants (shareholders) at a general meeting and must consist of at least five members. Alternatively, an MFO may, by resolution of the general meeting, engage on a contractual (outsourcing) basis a Special Council formed under a specialised association or union, provided it meets the composition requirements set out in the Regulation. At least one member must hold a higher education degree in Islamic law, one must hold a higher legal education degree, and the remaining members must each hold an international certificate in Islamic finance.",
      },
      { type: "h2" as const, text: "Principles of Islamic finance" },
      {
        type: "p" as const,
        text: "In Islamic finance, money is treated not as a commodity for sale but as a medium of exchange and a measure of value. The subject matter of a transaction between a provider and its client must be real goods, property, or a partnership in which each party bears corresponding risks.",
      },
      { type: "h3" as const, text: "Prohibition on riba (interest)" },
      {
        type: "p" as const,
        text: "Islamic finance prohibits income in the form of guaranteed interest on the placement or attraction of funds. Instead, an MFO operating under Islamic finance principles earns income through the resale of goods and other assets, the leasing of assets with a subsequent buyout option, and investment in business.",
      },
      { type: "h3" as const, text: "Linkage to the real economy" },
      {
        type: "p" as const,
        text: "All Islamic finance transactions must be linked to specific assets, goods, or services. Funds are provided for real economic activity, not for monetary speculation.",
      },
      { type: "h3" as const, text: "Shared risk and responsibility" },
      {
        type: "p" as const,
        text: "Unlike conventional lending — where the client bears the entire burden regardless of business outcomes — Islamic finance is built on the principle of partnership and joint responsibility. Neither party to a transaction is insulated from the economic result of the underlying activity.",
      },
      { type: "h2" as const, text: "Islamic finance instruments in detail" },
      { type: "h3" as const, text: "Murabaha (deferred-sale financing)" },
      {
        type: "p" as const,
        text: "Murabaha is a form of Islamic financing in which the MFO purchases goods required by the client from a seller and then sells those goods to the client at a pre-agreed mark-up, with deferred payment. The price of the goods and the amount of the mark-up are fixed in the contract in advance and may not be linked to future or uncertain indicators. The client makes payment within the agreed schedule, including on an instalment basis. Money, foreign currency, crypto-assets, gold, and silver may not be the subject of a murabaha transaction.",
      },
      { type: "h3" as const, text: "Islomiy Ijara (Islamic lease)" },
      {
        type: "p" as const,
        text: "Islomiy Ijara is a form of financing in which the MFO acquires property and transfers it to the client for temporary use under a lease agreement. The arrangement is provided on the basis of the client's application, and the contract must specify the lease term, the payment schedule, and the amount of payments. For an asset to be provided under Islamic lease, the MFO must hold title to it.",
      },
      {
        type: "p" as const,
        text: "The MFO bears liability for any defects in the leased property. Major repairs to the leased asset are at the MFO's expense, while routine maintenance and minor repairs are at the client's expense. To mitigate the risk of bad faith on the client's part, the MFO may require security (pledge, guarantee, or deposit). For example, if the client refuses to accept the Islamic lease, the deposit may be applied to cover the MFO's actual losses.",
      },
      { type: "h3" as const, text: "Ijara Muntahiya Bittamlik (lease with purchase option)" },
      {
        type: "p" as const,
        text: "An MFO and a client may enter into an Islomiy Ijara agreement under which the client acquires the right to subsequently purchase the leased asset. Title to the asset passes to the client only under a separate purchase agreement.",
      },
      { type: "h3" as const, text: "Salam (advance-payment financing)" },
      {
        type: "p" as const,
        text: "Salam is a form of Islamic financing in which the MFO pays the client the full amount in advance for goods that will be delivered in the future. This instrument is designed to support manufacturers and entrepreneurs who require working capital before production or delivery of goods. The subject of a salam transaction must be fungible goods that can be precisely defined by quantity and quality and are capable of being weighed, measured, or counted. Money, crypto-assets, gold, and silver may not be the subject of a salam transaction.",
      },
      { type: "h3" as const, text: "Mudaraba (profit-sharing financing)" },
      {
        type: "p" as const,
        text: "Mudaraba is a form of partnership in which the MFO (Rabbul Mal) provides capital for the client (Mudarib) to conduct business. Profit is distributed between the parties in pre-agreed proportions. If losses arise, they are borne by the MFO (up to the amount of capital contributed), except where those losses result from bad faith or a breach of obligations by the client. Capital may be provided in cash or in the form of tangible assets with a clearly determined value.",
      },
      { type: "h3" as const, text: "Musharaka (profit-and-loss sharing partnership)" },
      {
        type: "p" as const,
        text: "Musharaka is a form of Islamic financing based on partnership. The MFO and the client jointly invest funds or assets in a project and share in both profits and risks. Profits are distributed in pre-agreed proportions; losses are distributed in proportion to each party's share of the capital.",
      },
      {
        type: "p" as const,
        text: "Management of the project may be carried out jointly by all partners or delegated to one of them by agreement. After losses have actually arisen, a participant may voluntarily accept a greater share — or even all — of those losses. Each party has the right to withdraw from the partnership with advance notice to the other participants and to receive its share of the capital in the manner provided for in the contract. The withdrawal of one or more parties does not terminate the partnership relationship between the remaining participants.",
      },
      { type: "h2" as const, text: "Penalties in Islamic finance contracts" },
      {
        type: "p" as const,
        text: "The Central Bank Regulation permits MFOs to recover a contractual penalty (neustojka) where a client fails to perform its obligations. However, all amounts received as interest-equivalent must be held separately from the MFO's profit and directed exclusively to charitable purposes. This mechanism preserves the Sharia-compliant character of the arrangement while still providing the MFO with a measure of protection against client default.",
      },
      { type: "h2" as const, text: "How Advizen can help" },
      {
        type: "p" as const,
        text: "Members of the Advizen team bring hands-on experience with Islamic finance structuring in Uzbekistan from their prior careers — including work on the seed investment phase of an Uzbek-based Islamic fintech startup and participation in government-level advisory projects on integrating Islamic finance instruments into domestic legislation. We assist microfinance organisations and investors in assessing which instruments are appropriate for their business model, drafting Sharia-compliant contract documentation, establishing and advising Special Councils, and ensuring ongoing compliance with Central Bank requirements.",
      },
    ],
      faq: [
      {
        question: "What Islamic finance instruments are available in Uzbekistan?",
        answer: "Central Bank Resolution No. 23/4 (19 July 2024) authorises 6 instruments: Murabaha (deferred-sale financing — the MFO buys goods and resells to the client at a fixed mark-up); Islomiy Ijara (Islamic lease); Ijara Muntahiya Bittamlik (lease with purchase option); Salam (advance-payment financing for manufacturers needing working capital); Mudaraba (profit-sharing partnership where the MFO provides capital); and Musharaka (profit-and-loss sharing partnership). Only MFOs may provide these services, up to 300,000,000 UZS for businesses and 100,000,000 UZS for individuals.",
      },
      {
        question: "Who can provide Islamic finance services in Uzbekistan?",
        answer: "Exclusively microfinance organisations (MFOs) licensed under Law No. ZRU-765 and regulated by the Central Bank of Uzbekistan. Any MFO offering Islamic finance must establish a Special Council for the Coordination of Islamic Finance Issues — minimum 5 members: at least 1 with a higher education degree in Islamic law, 1 with a higher legal education degree, and the remaining members each with an international Islamic finance certificate. Alternatively, the Special Council may be outsourced on a contractual basis to a specialised association or union.",
      },
      {
        question: "How does Murabaha work in Uzbekistan?",
        answer: "The MFO purchases goods required by the client from a seller, then sells those goods to the client at a pre-agreed price plus a fixed mark-up, with deferred payment on an agreed schedule. The price and mark-up are fixed in the contract in advance and cannot be linked to future or uncertain indicators. Money, foreign currency, crypto-assets, gold, and silver may not be the subject of a murabaha transaction. Any penalties for late payment must be directed to charity, not treated as MFO profit.",
      },
      {
        question: "What is the Special Council requirement for Islamic finance in Uzbekistan?",
        answer: "Any MFO providing Islamic finance services must establish a Special Council responsible for ensuring Sharia compliance. It must have a minimum of 5 members — at least 1 must hold a higher education degree in Islamic law, 1 must hold a higher legal education degree, and the remaining members must each hold an international certificate in Islamic finance. The council may be established internally by the general meeting of shareholders, or outsourced on a contractual basis to a specialised association or union provided it meets the composition requirements.",
      },
    ],
  },
  ru: {
    subtitle: "Практическое руководство по развивающейся системе исламских финансов в Узбекистане — законодательство, разрешённые инструменты и регуляторные обязательства МФО.",
    author: "Юридическая практика Advizen",
    readTime: "9 мин чтения",
    inShort: {
      figures: [
        { value: "ЗРУ-765", label: "Закон от 20 апреля 2022 года о небанковских кредитных организациях и микрофинансовой деятельности" },
        { value: "№ 23/4", label: "Постановление Центрального банка от 19 июля 2024 года о порядке предоставления услуг исламских финансов МФО" },
        { value: "300 / 100 млн сум", label: "Предельная сумма исламского финансирования для бизнеса и для физических лиц — порог микрозайма" },
        { value: "5", label: "Минимальное число членов Специального совета по координации вопросов исламских финансов" },
      ],
      points: [
        "В Узбекистане услуги исламских финансов сейчас оказывают только микрофинансовые организации (МФО).",
        "МФО могут предлагать шесть инструментов: Мурабаха, Исламий Иджара, Иджара Мунтахия Биттамлик, Салам, Мудараба и Мушарака.",
        "МФО обязана создать Специальный совет или привлечь его на договорной основе, чтобы обеспечить соответствие деятельности по исламским финансам законодательству и Положению Центрального банка.",
        "МФО вправе взыскать с клиента неустойку за неисполнение обязательств, но эти суммы учитываются отдельно от прибыли и направляются только на благотворительные цели.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Исламские финансы — это система финансовых сделок, осуществляемых в соответствии с принципами шариата. Она запрещает получение процента (рибы) и вместо этого построена на справедливом распределении риска и прибыли между провайдером и клиентом. Активное обсуждение внедрения услуг исламских финансов в Узбекистане началось в 2018 году, и с тех пор был принят ряд законодательных актов, заложивших основу для расширяющегося шариат-совместимого кредитного рынка.",
      },
      { type: "h2" as const, text: "Законодательная база" },
      {
        type: "p" as const,
        text: "Основные акты, регулирующие исламские финансы в Узбекистане:",
      },
      {
        type: "ul" as const,
        items: [
          "Закон Республики Узбекистан «О небанковских кредитных организациях и микрофинансовой деятельности» от 20 апреля 2022 года № ЗРУ-765.",
          "Указ Президента «О дополнительных мерах по повышению роли и доли микрофинансовых услуг в развитии предпринимательства».",
          "Указ Президента «О мерах по дальнейшему развитию рынка капитала» от 13 апреля 2021 года № УП-6207.",
          "Постановление Центрального банка «Об утверждении Положения о порядке предоставления услуг исламских финансов микрофинансовыми организациями» от 19 июля 2024 года № 23/4.",
        ],
      },
      { type: "h2" as const, text: "Кто может предоставлять услуги исламских финансов" },
      {
        type: "p" as const,
        text: "Услуги исламских финансов в Узбекистане в настоящее время предоставляются исключительно микрофинансовыми организациями (МФО). Максимальные суммы ограничены пороговыми значениями для микрозаймов — 300 000 000 сум для бизнеса и 100 000 000 сум для физических лиц.",
      },
      {
        type: "p" as const,
        text: "Подробный порядок предоставления услуг исламских финансов разрабатывается Центральным банком Республики Узбекистан. Постановление от 19 июля 2024 года устанавливает, какие инструменты МФО вправе предлагать, и операционные условия, которые они обязаны соблюдать.",
      },
      {
        type: "p" as const,
        text: "Согласно Положению, МФО уполномочены предоставлять следующие инструменты исламских финансов:",
      },
      {
        type: "ul" as const,
        items: [
          "Иджара Мунтахия Биттамлик — арендное соглашение с правом клиента приобрести арендуемый актив по окончании срока.",
          "Исламий Иджара — передача имущества (приобретённого МФО по заявке клиента или уже находящегося на балансе МФО и не используемого) клиенту во временное владение и/или пользование на согласованный срок и за фиксированную плату.",
          "Мурабаха — финансирование путём продажи товаров клиенту на условиях отсрочки платежа по заранее согласованной цене и наценке.",
          "Мудараба — финансирование, при котором МФО предоставляет капитал для коммерческой деятельности клиента; прибыль распределяется между сторонами в заранее согласованных пропорциях.",
          "Мушарака — партнёрство, основанное на распределении прибылей и убытков, при котором МФО ведёт коммерческую деятельность совместно с одним или несколькими клиентами либо участвует в уставном капитале юридических лиц.",
          "Салам — финансирование, при котором МФО полностью предоплачивает стоимость товаров, подлежащих поставке клиентом (поставщиком) в будущем.",
        ],
      },
      {
        type: "p" as const,
        text: "Обязательным условием предоставления услуг исламских финансов является создание Специального совета по координации вопросов исламских финансов. Специальный совет отвечает за обеспечение соответствия деятельности МФО в области исламских финансов применимому законодательству и требованиям Положения.",
      },
      {
        type: "p" as const,
        text: "Специальный совет создаётся участниками (акционерами) на общем собрании и должен состоять не менее чем из пяти членов. В качестве альтернативы, МФО по решению общего собрания вправе привлечь на договорной (аутсорсинговой) основе Специальный совет, сформированный при специализированной ассоциации или союзе, при условии его соответствия требованиям к составу, установленным Положением. Не менее одного члена должен иметь высшее образование в области исламского права, один — высшее юридическое образование, остальные члены — международный сертификат в области исламских финансов.",
      },
      { type: "h2" as const, text: "Принципы исламских финансов" },
      {
        type: "p" as const,
        text: "В исламских финансах деньги рассматриваются не как товар для продажи, а как средство обмена и мера стоимости. Предмет сделки между провайдером и клиентом должен представлять собой реальные товары, имущество или партнёрство, в котором каждая сторона несёт соответствующие риски.",
      },
      { type: "h3" as const, text: "Запрет рибы (процента)" },
      {
        type: "p" as const,
        text: "Исламские финансы запрещают доход в форме гарантированного процента за размещение или привлечение средств. Вместо этого МФО, работающая по принципам исламских финансов, получает доход за счёт перепродажи товаров и иных активов, аренды активов с последующим выкупом и инвестирования в бизнес.",
      },
      { type: "h3" as const, text: "Связь с реальной экономикой" },
      {
        type: "p" as const,
        text: "Все сделки исламских финансов должны быть привязаны к конкретным активам, товарам или услугам. Средства предоставляются для реальной экономической деятельности, а не для денежной спекуляции.",
      },
      { type: "h3" as const, text: "Разделённый риск и ответственность" },
      {
        type: "p" as const,
        text: "В отличие от обычного кредитования — когда клиент несёт всё бремя независимо от бизнес-результатов — исламские финансы построены на принципе партнёрства и совместной ответственности. Ни одна из сторон сделки не изолирована от экономического результата соответствующей деятельности.",
      },
      { type: "h2" as const, text: "Инструменты исламских финансов в деталях" },
      { type: "h3" as const, text: "Мурабаха (финансирование с отсрочкой платежа)" },
      {
        type: "p" as const,
        text: "Мурабаха — это форма исламского финансирования, при которой МФО приобретает у продавца товары, необходимые клиенту, а затем продаёт их клиенту с заранее согласованной наценкой и отсрочкой платежа. Цена товара и размер наценки фиксируются в договоре заранее и не могут быть привязаны к будущим или неопределённым показателям. Клиент производит платёж в согласованные сроки, в том числе в рассрочку. Деньги, иностранная валюта, криптоактивы, золото и серебро не могут быть предметом сделки мурабаха.",
      },
      { type: "h3" as const, text: "Исламий Иджара (исламская аренда)" },
      {
        type: "p" as const,
        text: "Исламий Иджара — это форма финансирования, при которой МФО приобретает имущество и передаёт его клиенту во временное пользование по договору аренды. Соглашение оформляется на основании заявки клиента, и в договоре должны быть указаны срок аренды, график платежей и размер платежей. Для предоставления актива по исламской аренде МФО должна обладать правом собственности на него.",
      },
      {
        type: "p" as const,
        text: "МФО несёт ответственность за любые недостатки арендуемого имущества. Капитальный ремонт арендуемого актива производится за счёт МФО, текущее обслуживание и мелкий ремонт — за счёт клиента. Для снижения риска недобросовестного поведения клиента МФО вправе потребовать обеспечение (залог, гарантию или задаток). Например, при отказе клиента принять исламскую аренду задаток может быть направлен на покрытие фактических убытков МФО.",
      },
      { type: "h3" as const, text: "Иджара Мунтахия Биттамлик (аренда с правом выкупа)" },
      {
        type: "p" as const,
        text: "МФО и клиент могут заключить договор Исламий Иджара, по которому клиент получает право в дальнейшем приобрести арендуемый актив. Право собственности на актив переходит к клиенту только по отдельному договору купли-продажи.",
      },
      { type: "h3" as const, text: "Салам (финансирование с предоплатой)" },
      {
        type: "p" as const,
        text: "Салам — это форма исламского финансирования, при которой МФО выплачивает клиенту полную сумму авансом за товары, которые будут поставлены в будущем. Этот инструмент предназначен для поддержки производителей и предпринимателей, нуждающихся в оборотном капитале до производства или поставки товаров. Предметом сделки салам должны быть взаимозаменяемые товары, которые могут быть точно определены по количеству и качеству и могут быть взвешены, измерены или подсчитаны. Деньги, криптоактивы, золото и серебро не могут быть предметом сделки салам.",
      },
      { type: "h3" as const, text: "Мудараба (финансирование с разделом прибыли)" },
      {
        type: "p" as const,
        text: "Мудараба — это форма партнёрства, при которой МФО (Раббуль маль) предоставляет капитал клиенту (Мударибу) для ведения бизнеса. Прибыль распределяется между сторонами в заранее согласованных пропорциях. При возникновении убытков они несутся МФО (в пределах внесённого капитала), за исключением случаев, когда такие убытки возникли вследствие недобросовестных действий или нарушения обязательств со стороны клиента. Капитал может быть предоставлен в денежной форме или в виде материальных активов с чётко определённой стоимостью.",
      },
      { type: "h3" as const, text: "Мушарака (партнёрство с распределением прибыли и убытков)" },
      {
        type: "p" as const,
        text: "Мушарака — это форма исламского финансирования, основанная на партнёрстве. МФО и клиент совместно инвестируют средства или активы в проект и разделяют как прибыль, так и риски. Прибыль распределяется в заранее согласованных пропорциях; убытки распределяются пропорционально доле каждой стороны в капитале.",
      },
      {
        type: "p" as const,
        text: "Управление проектом может осуществляться совместно всеми партнёрами или быть передано одному из них по соглашению. После фактического возникновения убытков участник вправе добровольно принять на себя большую долю — или даже всю долю — таких убытков. Каждая сторона имеет право выйти из партнёрства, заблаговременно уведомив остальных участников, и получить свою долю капитала в порядке, предусмотренном договором. Выход одной или нескольких сторон не прекращает партнёрские отношения между остальными участниками.",
      },
      { type: "h2" as const, text: "Неустойки в договорах исламских финансов" },
      {
        type: "p" as const,
        text: "Положение Центрального банка позволяет МФО взыскивать договорную неустойку при неисполнении клиентом обязательств. Однако все суммы, полученные в качестве эквивалента процента, должны храниться отдельно от прибыли МФО и направляться исключительно на благотворительные цели. Этот механизм сохраняет соответствие соглашения шариату и одновременно обеспечивает МФО определённую защиту от неисполнения обязательств клиентом.",
      },
      { type: "h2" as const, text: "Чем может помочь Advizen" },
      {
        type: "p" as const,
        text: "Члены команды Advizen обладают практическим опытом структурирования исламских финансов в Узбекистане, накопленным в предыдущей карьере — включая работу на этапе посевных инвестиций узбекского исламского финтех-стартапа и участие в правительственных консультативных проектах по интеграции инструментов исламских финансов в национальное законодательство. Мы помогаем микрофинансовым организациям и инвесторам в оценке инструментов, подходящих для их бизнес-модели, разработке шариат-совместимой договорной документации, создании и сопровождении Специальных советов, а также обеспечении постоянного соблюдения требований Центрального банка.",
      },
    ],
      faq: [
      {
        question: "Какие инструменты исламских финансов доступны в Узбекистане?",
        answer: "Постановление Центрального банка № 23/4 (19 июля 2024 года) разрешает 6 инструментов: Мурабаха (финансирование с отсрочкой платежа — МФО покупает товары и перепродаёт клиенту с фиксированной наценкой); Исламий Иджара (исламская аренда); Иджара Мунтахия Биттамлик (аренда с правом выкупа); Салам (финансирование с предоплатой для производителей, нуждающихся в оборотном капитале); Мудараба (партнёрство с разделом прибыли, при котором МФО предоставляет капитал); Мушарака (партнёрство с распределением прибылей и убытков). Услуги вправе оказывать только МФО — до 300 000 000 сум для бизнеса и 100 000 000 сум для физических лиц.",
      },
      {
        question: "Кто может предоставлять услуги исламских финансов в Узбекистане?",
        answer: "Исключительно микрофинансовые организации (МФО), лицензированные согласно Закону № ЗРУ-765 и регулируемые Центральным банком Узбекистана. Любая МФО, предоставляющая услуги исламских финансов, обязана создать Специальный совет по координации вопросов исламских финансов — не менее 5 членов: минимум 1 с высшим образованием в области исламского права, 1 с высшим юридическим образованием, остальные — с международным сертификатом в области исламских финансов. В качестве альтернативы Специальный совет может быть привлечён на аутсорсинговой основе из специализированной ассоциации или союза.",
      },
      {
        question: "Как работает Мурабаха в Узбекистане?",
        answer: "МФО приобретает у продавца товары, необходимые клиенту, а затем продаёт их клиенту по заранее согласованной цене с фиксированной наценкой с отсрочкой платежа по согласованному графику. Цена и наценка фиксируются в договоре заранее и не могут быть привязаны к будущим или неопределённым показателям. Деньги, иностранная валюта, криптоактивы, золото и серебро не могут быть предметом сделки мурабаха. Неустойки за просрочку направляются на благотворительность, а не в прибыль МФО.",
      },
      {
        question: "Каково требование о Специальном совете для исламских финансов в Узбекистане?",
        answer: "Любая МФО, предоставляющая услуги исламских финансов, обязана создать Специальный совет, отвечающий за соответствие шариату. Минимум 5 членов — не менее 1 с высшим образованием в области исламского права, 1 с высшим юридическим образованием, остальные члены — с международным сертификатом в области исламских финансов. Совет может быть создан внутри организации по решению общего собрания акционеров или привлечён на аутсорсинге из специализированной ассоциации или союза при соответствии требованиям к составу.",
      },
    ],
  },
  uz: {
    subtitle: "Oʻzbekistonning rivojlanayotgan islom moliyasi tizimi boʻyicha amaliy qoʻllanma — qonunchilik, ruxsat etilgan vositalar va MMTlar uchun tartibga soluvchi majburiyatlar.",
    author: "Advizen yuridik amaliyoti",
    readTime: "9 daqiqa oʻqish",
    inShort: {
      figures: [
        { value: "OʻRQ-765", label: "Nobank kredit tashkilotlari va mikromoliya faoliyati toʻgʻrisidagi 2022-yil 20-apreldagi Qonun" },
        { value: "23/4-son", label: "MMTlar tomonidan islom moliyasi xizmatlarini koʻrsatish tartibini belgilovchi Markaziy bankning 2024-yil 19-iyuldagi qarori" },
        { value: "300 / 100 mln soʻm", label: "Biznes va jismoniy shaxslar uchun islomiy moliyalashtirishning eng yuqori miqdori — mikrokredit chegarasi" },
        { value: "5", label: "Islom moliyasi masalalarini muvofiqlashtirish boʻyicha Maxsus kengash aʼzolarining eng kam soni" },
      ],
      points: [
        "Oʻzbekistonda islom moliyasi xizmatlarini hozircha faqat mikromoliya tashkilotlari (MMTlar) koʻrsatadi.",
        "MMTlar oltita vositani taklif qilishi mumkin: Murabaha, Islomiy Ijara, Ijara Muntahiya Bittamlik, Salam, Mudaraba va Musharaka.",
        "MMT islom moliyasi faoliyatining qonunchilik va Markaziy bank Nizomiga muvofiqligini taʼminlash uchun Maxsus kengash tashkil etishi yoki uni shartnoma asosida jalb qilishi shart.",
        "MMT majburiyatini bajarmagan mijozdan neustoyka undirishi mumkin, biroq bu summalar foydadan alohida hisobga olinadi va faqat xayriya maqsadlariga yoʻnaltiriladi.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Islom moliyasi — shariat tamoyillariga muvofiq amalga oshiriladigan moliyaviy bitimlar tizimi. U foiz (riba) olishni taqiqlaydi va oʻrniga provayder va mijoz oʻrtasida xavf va foydani adolatli taqsimlashga asoslangan. Oʻzbekistonda islom moliyasi xizmatlarini joriy etish boʻyicha faol muhokama 2018-yilda boshlangan va oʻshandan beri kengayib borayotgan shariatga muvofiq kredit bozori uchun zamin yaratuvchi bir qator qonunchilik hujjatlari qabul qilindi.",
      },
      { type: "h2" as const, text: "Qonunchilik bazasi" },
      {
        type: "p" as const,
        text: "Oʻzbekistonda islom moliyasini tartibga soluvchi asosiy hujjatlar:",
      },
      {
        type: "ul" as const,
        items: [
          "Oʻzbekiston Respublikasining 2022-yil 20-apreldagi «Nobank kredit tashkilotlari va mikromoliya faoliyati toʻgʻrisida»gi OʻRQ-765-sonli Qonuni.",
          "«Tadbirkorlikni rivojlantirishda mikromoliya xizmatlarining roli va ulushini oshirishga doir qoʻshimcha chora-tadbirlar toʻgʻrisida»gi Prezident Farmoni.",
          "2021-yil 13-apreldagi «Kapital bozorini yanada rivojlantirish chora-tadbirlari toʻgʻrisida»gi PF-6207-sonli Prezident Farmoni.",
          "Markaziy bankning 2024-yil 19-iyuldagi «Mikromoliya tashkilotlari tomonidan islom moliyasi xizmatlarini koʻrsatish tartibi toʻgʻrisidagi Nizomni tasdiqlash haqida»gi 23/4-son qarori.",
        ],
      },
      { type: "h2" as const, text: "Islom moliyasi xizmatlarini kim koʻrsatishi mumkin" },
      {
        type: "p" as const,
        text: "Oʻzbekistonda islom moliyasi xizmatlari hozirgi paytda faqat mikromoliya tashkilotlari (MMT) tomonidan koʻrsatiladi. Maksimal summalar mikrokredit chegarasi bilan cheklangan — biznes uchun 300 000 000 soʻm va jismoniy shaxslar uchun 100 000 000 soʻm.",
      },
      {
        type: "p" as const,
        text: "Islom moliyasi xizmatlarini koʻrsatishning batafsil tartibi Oʻzbekiston Respublikasi Markaziy banki tomonidan ishlab chiqiladi. 2024-yil 19-iyuldagi qaror MMTlar qaysi vositalarni taklif qilishi mumkinligini va ular rioya qilishi shart boʻlgan operatsion shartlarni belgilaydi.",
      },
      {
        type: "p" as const,
        text: "Nizomga muvofiq, MMTlar quyidagi islom moliyasi vositalarini taqdim etishga vakolatlidir:",
      },
      {
        type: "ul" as const,
        items: [
          "Ijara Muntahiya Bittamlik — mijozning muddat oxirida ijaraga olingan aktivni sotib olish huquqi bilan ijara shartnomasi.",
          "Islomiy Ijara — mulkni (mijoz iltimosiga koʻra MMT tomonidan sotib olingan yoki MMT balansida boʻlgan va foydalanilmayotgan) kelishilgan muddat va belgilangan toʻlov uchun mijozga vaqtinchalik egalik va/yoki foydalanish uchun oʻtkazish.",
          "Murabaha — oldindan kelishilgan narx va ustama bilan kechiktirilgan toʻlov asosida mijozga tovarlarni sotish orqali moliyalashtirish.",
          "Mudaraba — MMT mijozning tijorat faoliyati uchun kapital taqdim etadigan moliyalashtirish; foyda taraflar oʻrtasida oldindan kelishilgan nisbatlarda taqsimlanadi.",
          "Musharaka — foyda va zararni taqsimlashga asoslangan sherikchilik, bunda MMT bir yoki bir nechta mijozlar bilan birgalikda biznes faoliyatini olib boradi yoki yuridik shaxslarning ustav kapitalida ishtirok etadi.",
          "Salam — MMT kelajakda mijoz (yetkazib beruvchi) tomonidan yetkazib beriladigan tovarlarning narxini toʻliq oldindan toʻlash yoʻli bilan moliyalashtirish.",
        ],
      },
      {
        type: "p" as const,
        text: "Islom moliyasi xizmatlarini koʻrsatishning majburiy sharti islom moliyasi masalalarini muvofiqlashtirish boʻyicha Maxsus kengashning tashkil etilishidir. Maxsus kengash MMTning islom moliyasi faoliyatining amaldagi qonunchilikka va Nizom talablariga muvofiqligini taʼminlash uchun masʼuldir.",
      },
      {
        type: "p" as const,
        text: "Maxsus kengash ishtirokchilar (aksiyadorlar) tomonidan umumiy yigʻilishda tashkil etiladi va kamida besh kishidan iborat boʻlishi shart. Muqobil ravishda, MMT umumiy yigʻilish qarori bilan ixtisoslashgan uyushma yoki ittifoq huzurida tashkil etilgan, Nizomda belgilangan tarkib talablariga javob beradigan Maxsus kengashni shartnoma (autsorsing) asosida jalb qilishi mumkin. Kamida bir aʼzo islom huquqi boʻyicha oliy maʼlumotga, bir aʼzo oliy yuridik maʼlumotga, qolgan aʼzolar esa islom moliyasi boʻyicha xalqaro sertifikatga ega boʻlishi shart.",
      },
      { type: "h2" as const, text: "Islom moliyasi tamoyillari" },
      {
        type: "p" as const,
        text: "Islom moliyasida pul sotuv mahsuloti sifatida emas, balki ayirboshlash vositasi va qiymat oʻlchovi sifatida qaraladi. Provayder va mijoz oʻrtasidagi bitimning predmeti haqiqiy tovarlar, mulk yoki har bir tomon tegishli xavflarni boʻyniga oladigan sherikchilik boʻlishi shart.",
      },
      { type: "h3" as const, text: "Riba (foiz) taqiqi" },
      {
        type: "p" as const,
        text: "Islom moliyasi mablagʻlarni joylashtirish yoki jalb qilish uchun kafolatlangan foiz shaklidagi daromadni taqiqlaydi. Buning oʻrniga islom moliyasi tamoyillari boʻyicha ishlaydigan MMT tovarlar va boshqa aktivlarni qayta sotish, aktivlarni keyinchalik sotib olish huquqi bilan ijaraga berish va biznesga investitsiya kiritish orqali daromad oladi.",
      },
      { type: "h3" as const, text: "Real iqtisodiyot bilan bogʻliqlik" },
      {
        type: "p" as const,
        text: "Barcha islom moliyasi bitimlari aniq aktivlar, tovarlar yoki xizmatlar bilan bogʻliq boʻlishi shart. Mablagʻlar pul spekulyatsiyasi uchun emas, real iqtisodiy faoliyat uchun beriladi.",
      },
      { type: "h3" as const, text: "Birgalikdagi xavf va masʼuliyat" },
      {
        type: "p" as const,
        text: "Anʼanaviy kredit berishdan farqli oʻlaroq — bu yerda mijoz biznes natijalaridan qatʼi nazar butun yukni oʻz boʻyniga oladi — islom moliyasi sherikchilik va birgalikdagi masʼuliyat tamoyiliga asoslangan. Bitimning hech qaysi tarafi tegishli faoliyatning iqtisodiy natijasidan ajratilmagan.",
      },
      { type: "h2" as const, text: "Islom moliyasi vositalari batafsil" },
      { type: "h3" as const, text: "Murabaha (kechiktirilgan toʻlovli moliyalashtirish)" },
      {
        type: "p" as const,
        text: "Murabaha — bu islom moliyasining shakli boʻlib, MMT mijozga kerakli tovarlarni sotuvchidan sotib oladi va keyin shu tovarlarni mijozga oldindan kelishilgan ustama bilan kechiktirilgan toʻlov asosida sotadi. Tovar narxi va ustama miqdori shartnomada oldindan belgilanadi va kelajakdagi yoki noaniq koʻrsatkichlar bilan bogʻlanmasligi mumkin. Mijoz toʻlovni kelishilgan jadval boʻyicha, jumladan boʻlib-boʻlib amalga oshiradi. Pul, xorijiy valyuta, kriptoaktivlar, oltin va kumush murabaha bitimining predmeti boʻlishi mumkin emas.",
      },
      { type: "h3" as const, text: "Islomiy Ijara (islom ijarasi)" },
      {
        type: "p" as const,
        text: "Islomiy Ijara — bu MMT mulkni sotib olib, uni ijara shartnomasi boʻyicha mijozga vaqtinchalik foydalanishga beradigan moliyalashtirish shaklidir. Kelishuv mijoz arizasi asosida rasmiylashtiriladi va shartnomada ijara muddati, toʻlov jadvali va toʻlovlar miqdori koʻrsatilishi shart. Aktivni islom ijarasi boʻyicha berish uchun MMT unga egalik huquqiga ega boʻlishi kerak.",
      },
      {
        type: "p" as const,
        text: "MMT ijaraga olingan mulkdagi har qanday nuqsonlar uchun javobgardir. Ijaraga olingan aktivni kapital taʼmirlash MMT hisobidan, joriy texnik xizmat koʻrsatish va kichik taʼmirlash mijoz hisobidan amalga oshiriladi. Mijoz tomonida halol boʻlmagan xatti-harakatlar xavfini kamaytirish uchun MMT taʼminot (garov, kafolat yoki bayʼana) talab qilishi mumkin. Masalan, mijoz islom ijarasini qabul qilishdan bosh tortgan taqdirda, bayʼana MMTning haqiqiy zararlarini qoplashga sarflanishi mumkin.",
      },
      { type: "h3" as const, text: "Ijara Muntahiya Bittamlik (sotib olish huquqi bilan ijara)" },
      {
        type: "p" as const,
        text: "MMT va mijoz Islomiy Ijara shartnomasini tuzishlari mumkin, unga koʻra mijoz keyinchalik ijaraga olingan aktivni sotib olish huquqiga ega boʻladi. Aktivga egalik huquqi mijozga faqat alohida sotib olish shartnomasi boʻyicha oʻtadi.",
      },
      { type: "h3" as const, text: "Salam (oldindan toʻlov asosidagi moliyalashtirish)" },
      {
        type: "p" as const,
        text: "Salam — bu islom moliyasining shakli boʻlib, MMT kelajakda yetkazib beriladigan tovarlar uchun mijozga toʻliq summani oldindan toʻlaydi. Bu vosita ishlab chiqaruvchilar va tadbirkorlarni qoʻllab-quvvatlash uchun moʻljallangan boʻlib, ular tovarlarni ishlab chiqarish yoki yetkazib berishdan oldin aylanma kapitalga muhtoj boʻladilar. Salam bitimining predmeti miqdor va sifati boʻyicha aniq belgilanishi mumkin va tortilishi, oʻlchanishi yoki sanalishi mumkin boʻlgan oʻrniga qoʻyiladigan tovarlar boʻlishi shart. Pul, kriptoaktivlar, oltin va kumush salam bitimining predmeti boʻlishi mumkin emas.",
      },
      { type: "h3" as const, text: "Mudaraba (foydani taqsimlovchi moliyalashtirish)" },
      {
        type: "p" as const,
        text: "Mudaraba — bu sherikchilik shakli boʻlib, MMT (Rabbul Mol) mijozga (Mudaribga) biznes yuritish uchun kapital taqdim etadi. Foyda taraflar oʻrtasida oldindan kelishilgan nisbatlarda taqsimlanadi. Zararlar yuzaga kelganda, ular MMT tomonidan (qoʻshilgan kapital miqdorida) koʻtariladi, bunday zararlar mijozning halol boʻlmagan xatti-harakatlari yoki majburiyatlarni buzishi natijasida yuzaga kelgan hollar bundan mustasno. Kapital naqd shaklda yoki aniq belgilangan qiymatga ega moddiy aktivlar shaklida taqdim etilishi mumkin.",
      },
      { type: "h3" as const, text: "Musharaka (foyda va zararni taqsimlovchi sherikchilik)" },
      {
        type: "p" as const,
        text: "Musharaka — bu sherikchilikka asoslangan islom moliyasi shaklidir. MMT va mijoz birgalikda loyihaga mablagʻ yoki aktivlar kiritadi va ham foydani, ham xavflarni baham koʻradi. Foyda oldindan kelishilgan nisbatlarda taqsimlanadi; zararlar har bir tomonning kapitaldagi ulushiga mutanosib ravishda taqsimlanadi.",
      },
      {
        type: "p" as const,
        text: "Loyihani boshqarish barcha sheriklar tomonidan birgalikda amalga oshirilishi yoki kelishuv asosida ulardan biriga topshirilishi mumkin. Zararlar haqiqatda yuzaga kelganidan soʻng, ishtirokchi koʻngilli ravishda bunday zararlarning katta ulushini — yoki hatto barchasini — oʻz boʻyniga olishi mumkin. Har bir tomon boshqa ishtirokchilarni oldindan xabardor qilib sherikchilikdan chiqish va shartnomada nazarda tutilgan tartibda kapitaldagi ulushini olish huquqiga ega. Bir yoki bir nechta tomonning chiqishi qolgan ishtirokchilar oʻrtasidagi sherikchilik munosabatlarini tugatmaydi.",
      },
      { type: "h2" as const, text: "Islom moliyasi shartnomalaridagi neustoyka" },
      {
        type: "p" as const,
        text: "Markaziy bank Nizomi MMTlarga mijoz oʻz majburiyatlarini bajarmagan taqdirda shartnomaviy neustoyka undirishga ruxsat beradi. Biroq, foiz ekvivalenti sifatida olingan barcha summalar MMT foydasidan alohida saqlanishi va faqat xayriya maqsadlariga yoʻnaltirilishi shart. Bu mexanizm kelishuvning shariatga muvofiqligini saqlab qoladi va shu bilan birga MMTga mijozning majburiyatni bajarmasligidan maʼlum darajada himoya beradi.",
      },
      { type: "h2" as const, text: "Advizen qanday yordam bera oladi" },
      {
        type: "p" as const,
        text: "Advizen jamoasi aʼzolari oʻzlarining oldingi karyeralarida — jumladan Oʻzbekistondagi islom fintex startapining seed investitsiya bosqichidagi ish va islom moliyasi vositalarini milliy qonunchilikka integratsiyalash boʻyicha hukumat darajasidagi maslahat loyihalarida ishtirok etish — Oʻzbekistonda islom moliyasini tuzilmalashtirish boʻyicha amaliy tajribaga ega. Biz mikromoliya tashkilotlari va investorlarga ularning biznes-modeli uchun mos vositalarni baholashda, shariatga mos shartnoma hujjatlarini ishlab chiqishda, Maxsus kengashlarni tashkil etish va ularga maslahat berishda hamda Markaziy bank talablariga doimiy rioya etilishini taʼminlashda yordam beramiz.",
      },
    ],
      faq: [
      {
        question: "Oʻzbekistonda qanday islom moliyasi vositalari mavjud?",
        answer: "Markaziy bankning 23/4-son qarori (2024-yil 19-iyul) 6 ta vositaga ruxsat beradi: Murabaha (kechiktirilgan toʻlovli moliyalashtirish — MMT tovarlarni sotib olib, mijozga belgilangan ustama bilan qayta sotadi); Islomiy Ijara (islom ijarasi); Ijara Muntahiya Bittamlik (sotib olish huquqi bilan ijara); Salam (aylanma kapitalga muhtoj ishlab chiqaruvchilar uchun oldindan toʻlov asosidagi moliyalashtirish); Mudaraba (MMT kapital taqdim etadigan foydani taqsimlovchi sherikchilik); Musharaka (foyda va zararni taqsimlovchi sherikchilik). Faqat MMTlar bu xizmatlarni koʻrsatishi mumkin — biznes uchun 300 000 000 soʻmgacha va jismoniy shaxslar uchun 100 000 000 soʻmgacha.",
      },
      {
        question: "Oʻzbekistonda islom moliyasi xizmatlarini kim koʻrsatishi mumkin?",
        answer: "Faqat OʻRQ-765-sonli Qonun asosida litsenziyalangan va Oʻzbekiston Markaziy banki tomonidan tartibga solinadigan mikromoliya tashkilotlari (MMTlar). Islom moliyasi xizmatlarini koʻrsatuvchi har qanday MMT islom moliyasi masalalarini muvofiqlashtirish boʻyicha Maxsus kengash tashkil etishi shart — kamida 5 aʼzo: kamida 1 islom huquqi boʻyicha oliy maʼlumotli, 1 oliy yuridik maʼlumotli, qolganlar islom moliyasi boʻyicha xalqaro sertifikatga ega. Muqobil ravishda, Maxsus kengash ixtisoslashgan uyushma yoki ittifoq huzurida shartnoma asosida autsorsing yoʻli bilan jalb qilinishi mumkin.",
      },
      {
        question: "Oʻzbekistonda Murabaha qanday ishlaydi?",
        answer: "MMT mijozga kerakli tovarlarni sotuvchidan sotib oladi, soʻng shu tovarlarni mijozga kelishilgan jadval boʻyicha kechiktirilgan toʻlov asosida oldindan kelishilgan narx va belgilangan ustama bilan sotadi. Narx va ustama shartnomada oldindan belgilanadi va kelajakdagi yoki noaniq koʻrsatkichlar bilan bogʻlanishi mumkin emas. Pul, xorijiy valyuta, kriptoaktivlar, oltin va kumush murabaha bitimining predmeti boʻlishi mumkin emas. Kechiktirilgan toʻlovlar uchun neustoykalar MMT foydasiga emas, xayriya maqsadlariga yoʻnaltirilishi shart.",
      },
      {
        question: "Oʻzbekistonda islom moliyasi uchun Maxsus kengash talabi qanday?",
        answer: "Islom moliyasi xizmatlarini koʻrsatuvchi har qanday MMT shariat muvofiqligini taʼminlash uchun masʼul Maxsus kengash tashkil etishi shart. Kamida 5 aʼzo — kamida 1 kishi islom huquqi boʻyicha oliy maʼlumotga, 1 kishi oliy yuridik maʼlumotga ega boʻlishi va qolgan aʼzolarning har biri islom moliyasi boʻyicha xalqaro sertifikatga ega boʻlishi shart. Kengash aksiyadorlarning umumiy yigʻilishi qaroriga koʻra ichki ravishda tashkil etilishi yoki tarkib talablariga javob bergan taqdirda ixtisoslashgan uyushma yoki ittifoq huzuridagi kengash shartnoma asosida autsorsing yoʻli bilan jalb qilinishi mumkin.",
      },
    ],
  },
};

export default article;
