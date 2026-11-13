import type { LocalizedArticle } from "../publications";

const article: Record<string, LocalizedArticle> = {
  en: {
    subtitle: "A step-by-step guide to accrediting a foreign commercial organisation's representative office in Uzbekistan — documents, timelines, the state duty, and ongoing obligations.",
    author: "Advizen Legal Practice",
    readTime: "8 min read",
    inShort: {
      figures: [
        { value: "No. 76", label: "Cabinet of Ministers Resolution of 7 February 2024 that governs accreditation since 9 May 2024" },
        { value: "5 working days", label: "For the Ministry of Investment, Industry and Trade to decide on an application" },
        { value: "1 working day", label: "To issue the certificate once the state duty is received; the duty is due within one month of approval" },
        { value: "1–3 years", label: "Accreditation period, at the foreign company's choice" },
      ],
      points: [
        "A representative office in Uzbekistan is not a legal entity and cannot conduct commercial activity; the only exception is representative offices of foreign airlines.",
        "The office is deemed opened on the date the Ministry of Investment, Industry and Trade issues its accreditation certificate; the application is filed electronically through a Public Services Centre or my.gov.uz.",
        "Registration with the tax authority is automatic. The office pays social tax on staff salaries and withholds personal income tax from employees' pay.",
        "Foreign nationals may make up no more than 40% of the staff and no more than five people; once accredited, they need no confirmation from the External Labour Migration Agency, while Uzbek staff are hired under Uzbek labour law.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Foreign companies wishing to establish a presence in Uzbekistan without incorporating a local legal entity may open a representative office. Since 9 May 2024 the process has been governed by Cabinet of Ministers Resolution No. 76 of 7 February 2024, which approved the Regulation on the accreditation of representative offices of foreign commercial organisations and replaced Cabinet of Ministers Resolution No. 410 of 23 October 2000. Accreditation is handled by the Ministry of Investment, Industry and Trade (the Ministry). Accreditation — not registration — is the operative concept: the representative office is deemed opened on the date the Ministry issues its accreditation certificate.",
      },
      { type: "h2" as const, text: "Who can open a representative office" },
      {
        type: "p" as const,
        text: "Any foreign commercial organisation — a firm, company, corporation, partnership, or other business form — that is registered under the law of its home country and entitled under that law to carry on commercial activity and to open offices abroad may apply. The Regulation does not apply to representative offices of foreign banks.",
      },
      { type: "h2" as const, text: "Legal status" },
      {
        type: "p" as const,
        text: "A representative office is not a legal entity and does not carry on economic or commercial activity (the sole exception is representative offices of foreign airlines, which may engage in commercial operations under Uzbek legislation and international treaties). Activities not provided for in the Regulation on the Representative Office are prohibited and may lead to termination of accreditation. The office exists to represent and protect the interests of its founding organisation on the territory of Uzbekistan.",
      },
      {
        type: "p" as const,
        text: "The office operates under a Regulation (Charter) signed by the founding organisation's management and sealed, if the organisation uses a seal. It is managed by a Head of Representative Office who acts under a power of attorney issued by the founding organisation, which must state the Head's passport or ID details and define the Head's authority.",
      },
      { type: "h2" as const, text: "Accreditation period" },
      {
        type: "p" as const,
        text: "Accreditation is granted for one to three years, at the founding organisation's choice. To keep the office open after that, the organisation applies for renewal at least one month before the certificate expires (see below). If the founding organisation is reorganised or liquidated, it must notify the Ministry within two weeks.",
      },
      { type: "h2" as const, text: "Documents required for initial accreditation" },
      {
        type: "ul" as const,
        items: [
          "Application — filed electronically through a Public Services Centre or the Single Portal of Interactive Public Services (my.gov.uz); no digital signature is required when filing through the portal. The application covers the founding organisation's owners and founders, charter capital, history, headcount, business activities, product range, last year's turnover, management, subsidiaries, branches and offices, plans for cooperation, and the requested accreditation period.",
          "Constitutional documents (charter and founders' agreement).",
          "Proof of registration in the country of origin — certificate of registration, extract from the trade register or trade licence.",
          "Power of attorney in favour of the Head of Representative Office — with passport or ID details and a statement of authority.",
          "Regulation on the Representative Office — signed by the founding organisation's management and sealed, if it uses a seal.",
        ],
      },
      {
        type: "p" as const,
        text: "All foreign documents must be notarised, legalised or apostilled (see below) and submitted in Uzbek or Russian, with a notarised translation where needed. They must be submitted no later than six months after they were issued. No lease or other premises document is required for initial accreditation; a copy of the lease (or other contract giving the right to the premises) is filed when accreditation is renewed.",
      },
      { type: "h2" as const, text: "Timeline and decision" },
      {
        type: "ul" as const,
        items: [
          "The Ministry reviews the application and issues a decision (grant or refusal) within 5 working days.",
          "The applicant is notified electronically on the day of the decision.",
          "After a positive decision, the state duty must be paid within one month; if it is not, a new application is needed.",
          "The accreditation certificate, an electronic document with a QR code, is issued within 1 working day of the duty being received and is delivered through the Public Services Centre or my.gov.uz.",
        ],
      },
      { type: "h2" as const, text: "Grounds for refusal" },
      {
        type: "p" as const,
        text: "The Ministry may refuse accreditation on four grounds: the documents are incomplete or not properly executed; the documents contain inaccurate information; the Regulation on the Representative Office contradicts Uzbek law; or the Ministry has information that the founding organisation or its office has violated Uzbek law. If the applicant cures the deficiencies and reapplies, the Ministry may not rely on grounds that were not stated in the earlier refusal, except for issues connected with the documents filed to cure them. Refusals may be challenged in court.",
      },
      { type: "h2" as const, text: "Accreditation fee" },
      {
        type: "p" as const,
        text: "No fee is charged for reviewing the application. Once accreditation is approved, a state duty is payable in the amount set by the Law on State Duty; when the application is filed through my.gov.uz, the duty is 90% of the amount payable when applying through a Public Services Centre. The duty is not refunded if accreditation ends early.",
      },
      { type: "h2" as const, text: "Post-accreditation obligations" },
      {
        type: "p" as const,
        text: "There is no separate step to register with the tax authority. Within one day of accreditation, the Ministry enters the office into the tax authority's central database, and the office is registered with the tax authority at its location at the same time.",
      },
      {
        type: "p" as const,
        text: "The Head of the Representative Office must provide information on the founding organisation and the office at the Ministry's request. The office must keep within the activities set out in its Regulation, and its foreign employees must be accredited (see Employment below).",
      },
      { type: "h2" as const, text: "Renewing accreditation" },
      {
        type: "p" as const,
        text: "To renew accreditation, the founding organisation applies electronically through a Public Services Centre or my.gov.uz at least one month before the certificate expires, enclosing: a renewal application; a new power of attorney for the Head (only if the previous one has expired); information on the office's activity, including its postal address, staff passport details, investment flows, signed contracts, local partners and charitable activity; and a copy of the lease or other contract confirming the right to the office premises.",
      },
      { type: "h2" as const, text: "Finance and operations" },
      {
        type: "p" as const,
        text: "The representative office is funded by the founding organisation. Expenses the office may incur include: representation expenses; purchase of goods for office needs; staff salaries; business travel; and rent, utilities and taxes. Payments for digital marking codes are also allowed and are not treated as commercial activity. Uzbek-sum funds may come only from foreign currency converted under the established rules or from UZS funds placed at the office's disposal by the parent company.",
      },
      { type: "h2" as const, text: "Tax position" },
      {
        type: "p" as const,
        text: "A representative office is not exempt from tax. Taxation of the founding organisation, its office and staff follows the Tax Code and Uzbekistan's international treaties. Under the Tax Code, representative offices of foreign legal entities pay social tax on staff salaries (Article 402) and, as tax agents, withhold personal income tax from employees' pay (Article 386).",
      },
      {
        type: "p" as const,
        text: "The office may carry on only non-commercial activity, such as liaison and marketing support for its founding organisation. Activity that goes beyond preparatory or auxiliary work can create a permanent establishment of the foreign company (Tax Code Article 36), with its own tax registration and profit tax obligations. Revenue-generating work in Uzbekistan should therefore go through a local company or a registered permanent establishment. Representative offices of foreign airlines are the only exception allowed to carry on commercial activity.",
      },
      { type: "h2" as const, text: "Employment" },
      { type: "h3" as const, text: "Foreign nationals" },
      {
        type: "p" as const,
        text: "Foreign nationals may make up no more than 40% of the office's staff and no more than five people. Each foreign employee must be accredited with the Ministry. The office files a personal data sheet in Uzbek and English (two copies), a copy of the passport or ID with migration-registration details, and a copy of the power of attorney or hiring document. The Ministry decides within 5 working days. The accreditation card is valid for up to 12 months, may be renewed, and cannot run beyond the office's accreditation or the employee's power of attorney. Accredited foreign staff may work in Uzbekistan without a confirmation from the External Labour Migration Agency — but only at the accredited representative office. Visas are issued under the general rules of Uzbek legislation.",
      },
      { type: "h3" as const, text: "Uzbek nationals" },
      {
        type: "p" as const,
        text: "Uzbek employees are hired under Uzbek labour law. Because the representative office is not a legal entity, the Head hires staff on behalf of the founding organisation under the power of attorney, so the power to hire should be stated expressly in the power of attorney and in the Regulation on the Representative Office.",
      },
      { type: "h2" as const, text: "Legalisation of documents" },
      {
        type: "p" as const,
        text: "Documents from countries that are party to the Hague Convention of 5 October 1961 require an apostille rather than consular legalisation. Documents from other countries must be legalised at an Uzbek consular mission. No legalisation is needed for documents drawn up under Uzbekistan's international treaties; check whether such a treaty covers your country before relying on it. If the law of the home country does not provide for one of the required documents, a confirmation from that country's foreign ministry or embassy is filed instead.",
      },
      { type: "h2" as const, text: "How Advizen can help" },
      {
        type: "p" as const,
        text: "Opening a representative office in Uzbekistan involves navigating document legalisation requirements, drafting a compliant Regulation on the Representative Office, managing the accreditation timeline, and meeting post-accreditation obligations. Advizen's team assists foreign companies at every stage — from document preparation and translation coordination to staff accreditation, renewals and ongoing compliance with the Ministry of Investment, Industry and Trade.",
      },
    ],
      faq: [
      {
        question: "What is the legal status of a representative office in Uzbekistan?",
        answer: "A representative office is not a legal entity and cannot conduct commercial activity — the sole exception is representative offices of foreign airlines. The office exists to represent and protect the interests of its founding organisation on the territory of Uzbekistan, and is deemed opened on the date the Ministry of Investment, Industry and Trade issues its accreditation certificate under Cabinet of Ministers Resolution No. 76 of 7 February 2024. It is not exempt from tax: it pays social tax on staff salaries and withholds personal income tax, and commercial activity can create a permanent establishment of the founding organisation.",
      },
      {
        question: "How long does accreditation take, and how is the state duty paid?",
        answer: "The application is filed electronically through a Public Services Centre or my.gov.uz, and no fee is charged for reviewing it. The Ministry of Investment, Industry and Trade decides within 5 working days. After a positive decision, the state duty set by the Law on State Duty must be paid within one month (filing through my.gov.uz reduces it to 90%), and the certificate is issued within 1 working day of payment. Accreditation is granted for 1 to 3 years, at the founding organisation's choice.",
      },
      {
        question: "What documents are required to accredit a representative office in Uzbekistan?",
        answer: "For initial accreditation: an application filed electronically through a Public Services Centre or my.gov.uz; constitutional documents (charter and founders' agreement); proof of registration in the country of origin; a power of attorney for the Head of Representative Office; and the Regulation on the Representative Office. Foreign documents must be notarised, apostilled or legalised (unless drawn up under one of Uzbekistan's international treaties), submitted in Uzbek or Russian, and issued within 6 months prior to submission. A copy of the office lease is required only on renewal.",
      },
      {
        question: "What are the ongoing obligations of a representative office in Uzbekistan?",
        answer: "Registration with the tax authority is automatic: the Ministry of Investment, Industry and Trade enters the office into the tax authority's database within one day of accreditation. The office pays social tax on staff salaries and withholds personal income tax, provides information to the Ministry on request, and accredits its foreign staff (no more than 40% of the staff and no more than five people). The founding organisation must notify the Ministry within two weeks of its reorganisation or liquidation. To keep operating, the office applies for renewal at least one month before the certificate expires, with information on its activity and a copy of the lease.",
      },
    ],
  },
  ru: {
    subtitle: "Пошаговое руководство по аккредитации представительства иностранной коммерческой организации в Узбекистане — документы, сроки, государственная пошлина и текущие обязательства.",
    author: "Юридическая практика Advizen",
    readTime: "8 мин чтения",
    inShort: {
      figures: [
        { value: "№ 76", label: "Постановление Кабинета Министров от 7 февраля 2024 года, регулирующее аккредитацию с 9 мая 2024 года" },
        { value: "5 рабочих дней", label: "На решение Министерства инвестиций, промышленности и торговли по заявлению" },
        { value: "1 рабочий день", label: "На выдачу свидетельства после поступления госпошлины; пошлина уплачивается в течение месяца после одобрения" },
        { value: "1–3 года", label: "Срок аккредитации по выбору иностранной организации" },
      ],
      points: [
        "Представительство в Узбекистане не является юридическим лицом и не вправе вести коммерческую деятельность; единственное исключение — представительства иностранных авиакомпаний.",
        "Представительство считается открытым в день выдачи свидетельства об аккредитации Министерством инвестиций, промышленности и торговли; заявление подаётся в электронной форме через Центр государственных услуг или my.gov.uz.",
        "Постановка на налоговый учёт происходит автоматически. Представительство уплачивает социальный налог с заработной платы сотрудников и удерживает налог на доходы физических лиц.",
        "Иностранные граждане могут составлять не более 40% персонала и не более пяти человек; аккредитованным иностранным сотрудникам не требуется подтверждение Агентства внешней трудовой миграции, а граждане Узбекистана нанимаются по трудовому законодательству Узбекистана.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Иностранные компании, желающие открыть присутствие в Узбекистане без создания местного юридического лица, могут открыть представительство. С 9 мая 2024 года процесс регулируется Постановлением Кабинета Министров № 76 от 7 февраля 2024 года, которым утверждено Положение об аккредитации представительств иностранных коммерческих организаций и которое заменило Постановление Кабинета Министров № 410 от 23 октября 2000 года. Аккредитацию осуществляет Министерство инвестиций, промышленности и торговли (далее — Министерство). Действует именно аккредитация, а не регистрация: представительство считается открытым в день выдачи Министерством свидетельства об аккредитации.",
      },
      { type: "h2" as const, text: "Кто может открыть представительство" },
      {
        type: "p" as const,
        text: "Любая иностранная коммерческая организация — фирма, компания, корпорация, товарищество или иная организационно-правовая форма, — которая зарегистрирована по законодательству страны учреждения и вправе по этому законодательству вести коммерческую деятельность и открывать представительства за рубежом, может подать заявление. Положение не распространяется на представительства иностранных банков.",
      },
      { type: "h2" as const, text: "Правовой статус" },
      {
        type: "p" as const,
        text: "Представительство не является юридическим лицом и не осуществляет хозяйственную или коммерческую деятельность (единственное исключение — представительства иностранных авиакомпаний, которые могут вести коммерческую деятельность в соответствии с законодательством и международными договорами Узбекистана). Деятельность, не предусмотренная Положением о представительстве, запрещена и может повлечь прекращение аккредитации. Представительство существует для представления и защиты интересов учреждающей организации на территории Узбекистана.",
      },
      {
        type: "p" as const,
        text: "Представительство действует на основании Положения (Устава), подписанного руководством учреждающей организации и заверенного её печатью (при наличии). Им руководит Глава представительства, действующий на основании доверенности, выданной учреждающей организацией, в которой должны быть указаны паспортные данные (или данные ID-карты) Главы и определены его полномочия.",
      },
      { type: "h2" as const, text: "Срок аккредитации" },
      {
        type: "p" as const,
        text: "Аккредитация предоставляется на срок от одного до трёх лет по выбору учреждающей организации. Чтобы продолжить работу, организация подаёт заявление о продлении не позднее чем за один месяц до истечения срока свидетельства (см. ниже). При реорганизации или ликвидации учреждающая организация обязана уведомить Министерство в течение двух недель.",
      },
      { type: "h2" as const, text: "Документы для первичной аккредитации" },
      {
        type: "ul" as const,
        items: [
          "Заявление — подаётся в электронной форме через Центр государственных услуг или Единый портал интерактивных государственных услуг (my.gov.uz); при подаче через портал электронная цифровая подпись не требуется. В заявлении указываются сведения о собственниках и учредителях, уставном капитале, истории, численности персонала, видах деятельности, ассортименте, обороте за прошлый год, руководстве, дочерних компаниях, филиалах и представительствах учреждающей организации, планах сотрудничества и запрашиваемом сроке аккредитации.",
          "Учредительные документы (устав и учредительный договор).",
          "Подтверждение регистрации в стране учреждения — свидетельство о регистрации, выписка из торгового реестра или торговая лицензия.",
          "Доверенность на имя Главы представительства — с паспортными данными (или данными ID-карты) и описанием полномочий.",
          "Положение о представительстве — подписанное руководством учреждающей организации и заверенное печатью (при наличии).",
        ],
      },
      {
        type: "p" as const,
        text: "Все иностранные документы должны быть нотариально заверены, легализованы или апостилированы (см. ниже) и представлены на узбекском или русском языке, при необходимости с нотариально заверенным переводом. Документы подаются не позднее шести месяцев с даты их выдачи. Договор аренды или иной документ на помещение для первичной аккредитации не требуется: копия договора аренды (или иного договора о праве на помещение) представляется при продлении аккредитации.",
      },
      { type: "h2" as const, text: "Сроки и решение" },
      {
        type: "ul" as const,
        items: [
          "Министерство рассматривает заявление и выносит решение (об аккредитации или отказе) в течение 5 рабочих дней.",
          "Заявитель уведомляется о решении в электронной форме в день его принятия.",
          "После положительного решения государственная пошлина должна быть уплачена в течение одного месяца; в противном случае подаётся новое заявление.",
          "Свидетельство об аккредитации в электронной форме с QR-кодом выдаётся в течение 1 рабочего дня с момента поступления пошлины и направляется через Центр государственных услуг или my.gov.uz.",
        ],
      },
      { type: "h2" as const, text: "Основания для отказа" },
      {
        type: "p" as const,
        text: "Министерство может отказать в аккредитации по четырём основаниям: документы представлены не в полном объёме или оформлены ненадлежащим образом; в документах содержатся недостоверные сведения; Положение о представительстве противоречит законодательству Узбекистана; у Министерства имеются сведения о нарушении иностранной организацией или представительством законодательства Узбекистана. Если заявитель устранил недостатки и подал документы повторно, Министерство не вправе ссылаться на основания, не указанные в первоначальном отказе, кроме связанных с документами, представленными для устранения недостатков. Отказы могут быть обжалованы в суде.",
      },
      { type: "h2" as const, text: "Пошлина за аккредитацию" },
      {
        type: "p" as const,
        text: "Сбор за рассмотрение заявления не взимается. После положительного решения взимается государственная пошлина в размере, установленном Законом «О государственной пошлине»; при подаче заявления через my.gov.uz пошлина составляет 90% от суммы, уплачиваемой при обращении через Центр государственных услуг. При досрочном прекращении аккредитации пошлина не возвращается.",
      },
      { type: "h2" as const, text: "Обязательства после аккредитации" },
      {
        type: "p" as const,
        text: "Отдельно вставать на налоговый учёт не нужно. В течение одного дня после аккредитации Министерство вносит сведения о представительстве в центральную базу данных налоговых органов, и представительство одновременно ставится на учёт в налоговом органе по месту нахождения.",
      },
      {
        type: "p" as const,
        text: "Глава представительства обязан представлять сведения об учреждающей организации и представительстве по запросу Министерства. Представительство должно действовать в пределах своего Положения, а его иностранные сотрудники подлежат аккредитации (см. раздел «Трудовые отношения»).",
      },
      { type: "h2" as const, text: "Продление аккредитации" },
      {
        type: "p" as const,
        text: "Для продления аккредитации учреждающая организация не позднее чем за один месяц до истечения срока свидетельства подаёт в электронной форме через Центр государственных услуг или my.gov.uz: заявление о продлении; новую доверенность на имя Главы (только если срок предыдущей истёк); сведения о деятельности представительства, включая почтовый адрес, паспортные данные сотрудников, приток инвестиций, заключённые договоры, местных партнёров и благотворительную деятельность; копию договора аренды или иного договора, подтверждающего право на офисное помещение.",
      },
      { type: "h2" as const, text: "Финансы и операционная деятельность" },
      {
        type: "p" as const,
        text: "Представительство финансируется учреждающей организацией. К расходам, которые может нести представительство, относятся: представительские расходы; приобретение товаров для нужд офиса; заработная плата сотрудников; служебные командировки; аренда, коммунальные платежи и налоги. Допускаются также расчёты за коды цифровой маркировки, которые не считаются коммерческой деятельностью. Средства в узбекских сумах могут формироваться только за счёт иностранной валюты, конвертированной в установленном порядке, или средств в сумах, оставленных в распоряжении представительства по решению материнской компании.",
      },
      { type: "h2" as const, text: "Налогообложение" },
      {
        type: "p" as const,
        text: "Представительство не освобождено от налогов. Налогообложение учреждающей организации, представительства и его сотрудников осуществляется по Налоговому кодексу и международным договорам Узбекистана. По Налоговому кодексу представительства иностранных юридических лиц уплачивают социальный налог с заработной платы сотрудников (статья 402) и как налоговые агенты удерживают налог на доходы физических лиц с выплат работникам (статья 386).",
      },
      {
        type: "p" as const,
        text: "Представительство может вести только некоммерческую деятельность — например, поддерживать связи и оказывать маркетинговую поддержку учреждающей организации. Деятельность, выходящая за рамки подготовительной или вспомогательной, может образовать постоянное учреждение иностранной компании (статья 36 Налогового кодекса) с собственными обязательствами по налоговой регистрации и налогу на прибыль. Поэтому приносящую доход работу в Узбекистане следует вести через местную компанию или зарегистрированное постоянное учреждение. Единственное исключение, которому разрешена коммерческая деятельность, — представительства иностранных авиакомпаний.",
      },
      { type: "h2" as const, text: "Трудовые отношения" },
      { type: "h3" as const, text: "Иностранные граждане" },
      {
        type: "p" as const,
        text: "Иностранные граждане могут составлять не более 40% сотрудников представительства и не более пяти человек. Каждый иностранный сотрудник подлежит аккредитации в Министерстве. Представительство подаёт анкету личных данных на узбекском и английском языках (в двух экземплярах), копию паспорта или ID-карты с данными о миграционном учёте и копию доверенности или документа о приёме на работу. Министерство принимает решение в течение 5 рабочих дней. Аккредитационная карточка действует до 12 месяцев, может быть продлена и не может превышать срок аккредитации представительства или срок доверенности сотрудника. Аккредитованные иностранные сотрудники вправе работать в Узбекистане без подтверждения Агентства внешней трудовой миграции, но только в аккредитованном представительстве. Визы выдаются в общем порядке, установленном законодательством.",
      },
      { type: "h3" as const, text: "Граждане Узбекистана" },
      {
        type: "p" as const,
        text: "Узбекские сотрудники принимаются на работу в соответствии с трудовым законодательством Узбекистана. Поскольку представительство не является юридическим лицом, Глава принимает сотрудников от имени учреждающей организации на основании доверенности, поэтому полномочия на приём на работу следует прямо указать в доверенности и в Положении о представительстве.",
      },
      { type: "h2" as const, text: "Легализация документов" },
      {
        type: "p" as const,
        text: "Документы из стран — участниц Гаагской конвенции от 5 октября 1961 года требуют апостиля, а не консульской легализации. Документы из других стран легализуются в консульском учреждении Узбекистана. Легализация не требуется для документов, оформленных в рамках международных договоров Узбекистана; распространяется ли такой договор на вашу страну, стоит проверить заранее. Если законодательство страны учреждения не предусматривает какой-либо из требуемых документов, вместо него представляется подтверждение министерства иностранных дел или посольства этой страны.",
      },
      { type: "h2" as const, text: "Чем может помочь Advizen" },
      {
        type: "p" as const,
        text: "Открытие представительства в Узбекистане сопряжено с прохождением требований по легализации документов, разработкой соответствующего Положения о представительстве, соблюдением сроков аккредитации и выполнением обязательств после аккредитации. Команда Advizen помогает иностранным компаниям на каждом этапе — от подготовки документов и координации переводов до аккредитации сотрудников, продления аккредитации и текущего соблюдения требований Министерства инвестиций, промышленности и торговли.",
      },
    ],
      faq: [
      {
        question: "Каков правовой статус представительства в Узбекистане?",
        answer: "Представительство не является юридическим лицом и не вправе вести коммерческую деятельность — единственное исключение составляют представительства иностранных авиакомпаний. Представительство существует для представления и защиты интересов учреждающей организации на территории Узбекистана и считается открытым с даты выдачи Министерством инвестиций, промышленности и торговли свидетельства об аккредитации согласно Постановлению Кабинета Министров № 76 от 7 февраля 2024 года. Оно не освобождено от налогов: уплачивает социальный налог с заработной платы сотрудников и удерживает налог на доходы физических лиц, а коммерческая деятельность может образовать постоянное учреждение учреждающей организации.",
      },
      {
        question: "Сколько времени занимает аккредитация и как уплачивается государственная пошлина?",
        answer: "Заявление подаётся в электронной форме через Центр государственных услуг или my.gov.uz, сбор за его рассмотрение не взимается. Министерство инвестиций, промышленности и торговли выносит решение в течение 5 рабочих дней. После положительного решения государственная пошлина, установленная Законом «О государственной пошлине», уплачивается в течение одного месяца (при подаче через my.gov.uz — 90% суммы), а свидетельство выдаётся в течение 1 рабочего дня с момента оплаты. Аккредитация предоставляется на срок от 1 до 3 лет по выбору учреждающей организации.",
      },
      {
        question: "Какие документы необходимы для аккредитации представительства в Узбекистане?",
        answer: "Для первичной аккредитации требуются: заявление, поданное в электронной форме через Центр государственных услуг или my.gov.uz; учредительные документы (устав и учредительный договор); подтверждение регистрации в стране учреждения; доверенность на имя Главы представительства; Положение о представительстве. Иностранные документы должны быть нотариально заверены, апостилированы или легализованы (если они не оформлены в рамках международного договора Узбекистана), представлены на узбекском или русском языке и выданы в течение 6 месяцев до их подачи. Копия договора аренды офиса требуется только при продлении.",
      },
      {
        question: "Каковы текущие обязательства представительства в Узбекистане?",
        answer: "Постановка на налоговый учёт происходит автоматически: Министерство инвестиций, промышленности и торговли вносит представительство в базу данных налоговых органов в течение одного дня после аккредитации. Представительство уплачивает социальный налог с заработной платы сотрудников и удерживает налог на доходы физических лиц, представляет сведения в Министерство по запросу и аккредитует иностранных сотрудников (не более 40% персонала и не более пяти человек). О своей реорганизации или ликвидации учреждающая организация обязана уведомить Министерство в течение двух недель. Для продолжения работы заявление о продлении подаётся не позднее чем за один месяц до истечения срока свидетельства вместе со сведениями о деятельности и копией договора аренды.",
      },
    ],
  },
  uz: {
    subtitle: "Oʻzbekistonda xorijiy tijorat tashkilotining vakolatxonasini akkreditatsiya qilish boʻyicha bosqichma-bosqich qoʻllanma — hujjatlar, muddatlar, davlat boji va doimiy majburiyatlar.",
    author: "Advizen yuridik amaliyoti",
    readTime: "8 daqiqa oʻqish",
    inShort: {
      figures: [
        { value: "76-son", label: "2024-yil 9-maydan akkreditatsiyani tartibga soluvchi Vazirlar Mahkamasining 2024-yil 7-fevraldagi qarori" },
        { value: "5 ish kuni", label: "Investitsiyalar, sanoat va savdo vazirligi arizani koʻrib chiqib qaror chiqaradigan muddat" },
        { value: "1 ish kuni", label: "Davlat boji tushganidan keyin guvohnoma berish muddati; boj ijobiy qarordan keyin bir oy ichida toʻlanadi" },
        { value: "1–3 yil", label: "Akkreditatsiya muddati, xorijiy tashkilotning tanloviga koʻra" },
      ],
      points: [
        "Oʻzbekistondagi vakolatxona yuridik shaxs emas va tijorat faoliyati yurita olmaydi; yagona istisno — xorijiy aviakompaniyalar vakolatxonalari.",
        "Vakolatxona Investitsiyalar, sanoat va savdo vazirligi akkreditatsiya guvohnomasini bergan kundan boshlab ochilgan hisoblanadi; ariza Davlat xizmatlari markazi yoki my.gov.uz orqali elektron shaklda beriladi.",
        "Soliq organida hisobga qoʻyish avtomatik amalga oshiriladi. Vakolatxona xodimlar ish haqidan ijtimoiy soliq toʻlaydi va jismoniy shaxslardan olinadigan daromad soligʻini ushlab qoladi.",
        "Xorijiy fuqarolar xodimlarning 40 foizidan va besh kishidan oshmasligi kerak; akkreditatsiya qilingan xorijiy xodimlarga Tashqi mehnat migratsiyasi agentligining tasdiqnomasi talab qilinmaydi, oʻzbekistonlik xodimlar esa Oʻzbekiston mehnat qonunchiligiga muvofiq ishga olinadi.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Mahalliy yuridik shaxs tashkil etmasdan Oʻzbekistonda mavjudlik oʻrnatishni istagan xorijiy kompaniyalar vakolatxona ochishlari mumkin. 2024-yil 9-maydan boshlab jarayon Vazirlar Mahkamasining 2024-yil 7-fevraldagi 76-son qarori bilan tartibga solinadi. Ushbu qaror xorijiy tijorat tashkilotlari vakolatxonalarini akkreditatsiya qilish toʻgʻrisidagi nizomni tasdiqlagan va Vazirlar Mahkamasining 2000-yil 23-oktabrdagi 410-son qarori oʻrnini egallagan. Akkreditatsiyani Investitsiyalar, sanoat va savdo vazirligi (keyingi oʻrinlarda — Vazirlik) amalga oshiradi. Bu yerda akkreditatsiya — roʻyxatdan oʻtkazish emas — asosiy tushunchadir: vakolatxona Vazirlik akkreditatsiya guvohnomasini bergan kundan boshlab ochilgan hisoblanadi.",
      },
      { type: "h2" as const, text: "Vakolatxonani kim ocha oladi" },
      {
        type: "p" as const,
        text: "Tashkil etilgan mamlakat qonunchiligiga koʻra roʻyxatdan oʻtgan hamda ushbu qonunchilikka koʻra tijorat faoliyati bilan shugʻullanish va chet elda vakolatxonalar ochish huquqiga ega boʻlgan har qanday xorijiy tijorat tashkiloti — firma, kompaniya, korporatsiya, shirkat yoki boshqa tashkiliy-huquqiy shakldagi — ariza topshirishi mumkin. Nizom xorijiy banklarning vakolatxonalariga nisbatan qoʻllanilmaydi.",
      },
      { type: "h2" as const, text: "Huquqiy maqom" },
      {
        type: "p" as const,
        text: "Vakolatxona yuridik shaxs emas, xoʻjalik yoki tijorat faoliyatini amalga oshirmaydi (yagona istisno — Oʻzbekiston qonunchiligi va xalqaro shartnomalariga muvofiq tijorat faoliyati bilan shugʻullanishi mumkin boʻlgan xorijiy aviakompaniyalar vakolatxonalari). Vakolatxona toʻgʻrisidagi Nizomda nazarda tutilmagan faoliyat taqiqlanadi va akkreditatsiyani tugatishga olib kelishi mumkin. Vakolatxona tashkil etuvchi tashkilotning Oʻzbekiston hududidagi manfaatlarini ifodalash va himoya qilish uchun mavjud.",
      },
      {
        type: "p" as const,
        text: "Vakolatxona tashkil etuvchi tashkilot rahbariyati tomonidan imzolangan va muhrlangan (muhr mavjud boʻlsa) Nizom (Ustav) asosida faoliyat yuritadi. Uni tashkil etuvchi tashkilot tomonidan berilgan ishonchnoma asosida ish yuritadigan Vakolatxona Boshligʻi boshqaradi; ishonchnomada Boshliqning pasport yoki ID-karta maʼlumotlari va vakolatlari koʻrsatilgan boʻlishi shart.",
      },
      { type: "h2" as const, text: "Akkreditatsiya muddati" },
      {
        type: "p" as const,
        text: "Akkreditatsiya tashkil etuvchi tashkilotning tanloviga koʻra bir yildan uch yilgacha muddatga beriladi. Faoliyatni davom ettirish uchun tashkilot guvohnoma muddati tugashidan kamida bir oy oldin uzaytirish uchun ariza beradi (quyiga qarang). Tashkil etuvchi tashkilot qayta tashkil etilganda yoki tugatilganda u ikki hafta ichida Vazirlikni xabardor qilishi shart.",
      },
      { type: "h2" as const, text: "Birlamchi akkreditatsiya uchun zarur hujjatlar" },
      {
        type: "ul" as const,
        items: [
          "Ariza — Davlat xizmatlari markazi yoki Yagona interaktiv davlat xizmatlari portali (my.gov.uz) orqali elektron shaklda beriladi; portal orqali berilganda elektron raqamli imzo talab etilmaydi. Arizada tashkil etuvchi tashkilotning mulkdorlari va taʼsischilari, ustav kapitali, tarixi, xodimlar soni, faoliyat turlari, mahsulot assortimenti, oʻtgan yilgi aylanmasi, rahbariyati, shoʻba korxonalari, filial va vakolatxonalari, hamkorlik rejalari hamda soʻralayotgan akkreditatsiya muddati haqida maʼlumot koʻrsatiladi.",
          "Taʼsis hujjatlari (ustav va taʼsis shartnomasi).",
          "Tashkil etilgan mamlakatdagi roʻyxatdan oʻtganlik dalili — roʻyxatdan oʻtganlik toʻgʻrisidagi guvohnoma, savdo reyestridan koʻchirma yoki savdo litsenziyasi.",
          "Vakolatxona Boshligʻi nomiga ishonchnoma — pasport yoki ID-karta maʼlumotlari va vakolatlar bayoni bilan.",
          "Vakolatxona toʻgʻrisidagi Nizom — tashkil etuvchi tashkilot rahbariyati tomonidan imzolangan va muhrlangan (muhr mavjud boʻlsa).",
        ],
      },
      {
        type: "p" as const,
        text: "Barcha xorijiy hujjatlar notarial tasdiqlangan, qonuniylashtirilgan yoki apostillangan (quyiga qarang) hamda oʻzbek yoki rus tilida, zarur hollarda notarial tasdiqlangan tarjima bilan taqdim etilishi kerak. Hujjatlar berilgan kundan boshlab olti oydan kechiktirmay topshiriladi. Birlamchi akkreditatsiya uchun ijara shartnomasi yoki binoga oid boshqa hujjat talab qilinmaydi: ijara shartnomasining (yoki binoga boʻlgan huquqni tasdiqlovchi boshqa shartnomaning) nusxasi akkreditatsiyani uzaytirishda taqdim etiladi.",
      },
      { type: "h2" as const, text: "Muddatlar va qaror" },
      {
        type: "ul" as const,
        items: [
          "Vazirlik arizani koʻrib chiqadi va 5 ish kuni ichida qaror chiqaradi (akkreditatsiya qilish yoki rad etish).",
          "Ariza beruvchi qaror qabul qilingan kuni elektron shaklda xabardor qilinadi.",
          "Ijobiy qarordan keyin davlat boji bir oy ichida toʻlanishi kerak; aks holda ariza qaytadan beriladi.",
          "QR-kod qoʻyilgan elektron akkreditatsiya guvohnomasi boj tushgan kundan boshlab 1 ish kuni ichida beriladi va Davlat xizmatlari markazi yoki my.gov.uz orqali yuboriladi.",
        ],
      },
      { type: "h2" as const, text: "Rad etish asoslari" },
      {
        type: "p" as const,
        text: "Vazirlik akkreditatsiyani toʻrtta asosda rad etishi mumkin: hujjatlar toʻliq taqdim etilmagan yoki belgilangan tartibda rasmiylashtirilmagan; taqdim etilgan hujjatlarda notoʻgʻri maʼlumot keltirilgan; Vakolatxona toʻgʻrisidagi Nizom Oʻzbekiston qonunchiligiga zid; Vazirlikda xorijiy tashkilot yoki vakolatxona Oʻzbekiston qonunchiligini buzganligi haqida maʼlumot mavjud. Kamchiliklar bartaraf etilib, hujjatlar qayta topshirilganda Vazirlik avvalgi rad etishda koʻrsatilmagan asoslarni keltira olmaydi, kamchiliklarni bartaraf etish uchun taqdim etilgan hujjatlar bilan bogʻliq holatlar bundan mustasno. Rad etish qarorlari ustidan sudga shikoyat qilinishi mumkin.",
      },
      { type: "h2" as const, text: "Akkreditatsiya yigʻimi" },
      {
        type: "p" as const,
        text: "Arizani koʻrib chiqish uchun yigʻim undirilmaydi. Ijobiy qaror qabul qilingandan keyin «Davlat boji toʻgʻrisida»gi Qonunda belgilangan miqdorda davlat boji undiriladi; ariza my.gov.uz orqali berilganda boj Davlat xizmatlari markazi orqali murojaat qilinganda toʻlanadigan summaning 90 foizi miqdorida undiriladi. Akkreditatsiya muddatidan oldin tugatilganda boj qaytarilmaydi.",
      },
      { type: "h2" as const, text: "Akkreditatsiyadan keyingi majburiyatlar" },
      {
        type: "p" as const,
        text: "Soliq organida alohida roʻyxatdan oʻtish talab qilinmaydi. Akkreditatsiyadan keyin bir kun ichida Vazirlik vakolatxona haqidagi maʼlumotlarni soliq organlarining markaziy maʼlumotlar bazasiga kiritadi va vakolatxona bir vaqtning oʻzida joylashgan hududidagi soliq organida hisobga qoʻyiladi.",
      },
      {
        type: "p" as const,
        text: "Vakolatxona Boshligʻi Vazirlikning soʻroviga binoan tashkil etuvchi tashkilot va vakolatxona haqida maʼlumot taqdim etishi shart. Vakolatxona oʻz Nizomi doirasida faoliyat yuritishi, uning xorijiy xodimlari esa akkreditatsiya qilinishi kerak (quyida «Mehnat munosabatlari» boʻlimiga qarang).",
      },
      { type: "h2" as const, text: "Akkreditatsiyani uzaytirish" },
      {
        type: "p" as const,
        text: "Akkreditatsiyani uzaytirish uchun tashkil etuvchi tashkilot guvohnoma muddati tugashidan kamida bir oy oldin Davlat xizmatlari markazi yoki my.gov.uz orqali elektron shaklda quyidagilarni taqdim etadi: uzaytirish toʻgʻrisidagi ariza; Boshliq nomiga yangi ishonchnoma (faqat oldingisining muddati tugagan boʻlsa); vakolatxona faoliyati haqida maʼlumot, jumladan pochta manzili, xodimlarning pasport maʼlumotlari, investitsiyalar oqimi, imzolangan shartnomalar, mahalliy hamkorlar va xayriya-homiylik faoliyati; ijara shartnomasi yoki ofis binosiga boʻlgan huquqni tasdiqlovchi boshqa shartnoma nusxasi.",
      },
      { type: "h2" as const, text: "Moliya va operatsion faoliyat" },
      {
        type: "p" as const,
        text: "Vakolatxona tashkil etuvchi tashkilot tomonidan moliyalashtiriladi. Vakolatxona amalga oshirishi mumkin boʻlgan xarajatlarga quyidagilar kiradi: vakillik xarajatlari; ofis ehtiyojlari uchun tovarlar sotib olish; xodimlar ish haqi; xizmat safarlari; ijara, kommunal toʻlovlar va soliqlar. Raqamli markirovka kodlari uchun hisob-kitoblarga ham ruxsat beriladi va ular tijorat faoliyati hisoblanmaydi. Oʻzbek soʻmidagi mablagʻlar faqat belgilangan tartibda konvertatsiya qilingan xorijiy valyuta yoki ona kompaniya qarori bilan vakolatxona ixtiyorida qoldirilgan soʻm mablagʻlari hisobidan shakllanishi mumkin.",
      },
      { type: "h2" as const, text: "Soliqqa tortish" },
      {
        type: "p" as const,
        text: "Vakolatxona soliqlardan ozod emas. Tashkil etuvchi tashkilot, vakolatxona va uning xodimlarini soliqqa tortish Soliq kodeksi va Oʻzbekistonning xalqaro shartnomalariga muvofiq amalga oshiriladi. Soliq kodeksiga koʻra, xorijiy yuridik shaxslarning vakolatxonalari xodimlar ish haqidan ijtimoiy soliq toʻlaydi (402-modda) va soliq agenti sifatida xodimlarga toʻlanadigan daromaddan jismoniy shaxslardan olinadigan daromad soligʻini ushlab qoladi (386-modda).",
      },
      {
        type: "p" as const,
        text: "Vakolatxona faqat notijorat faoliyat bilan shugʻullanishi mumkin, masalan, tashkil etuvchi tashkilot uchun aloqalarni yoʻlga qoʻyish va marketing koʻmagi. Tayyorgarlik yoki yordamchi xususiyatdan tashqariga chiqadigan faoliyat xorijiy kompaniyaning doimiy muassasasini vujudga keltirishi mumkin (Soliq kodeksining 36-moddasi), bu esa alohida soliq roʻyxatidan oʻtish va foyda soligʻi majburiyatlarini keltirib chiqaradi. Shu sababli Oʻzbekistonda daromad keltiruvchi ishlar mahalliy kompaniya yoki roʻyxatdan oʻtgan doimiy muassasa orqali olib borilishi kerak. Tijorat faoliyatiga ruxsat berilgan yagona istisno — xorijiy aviakompaniyalar vakolatxonalari.",
      },
      { type: "h2" as const, text: "Mehnat munosabatlari" },
      { type: "h3" as const, text: "Xorijiy fuqarolar" },
      {
        type: "p" as const,
        text: "Xorijiy fuqarolar vakolatxona xodimlarining 40 foizidan va besh kishidan oshmasligi kerak. Har bir xorijiy xodim Vazirlikda akkreditatsiya qilinishi shart. Vakolatxona oʻzbek va ingliz tillaridagi shaxsiy maʼlumotlar varaqasi (ikki nusxada), migratsiya hisobiga qoʻyilganlik maʼlumotlari koʻrsatilgan pasport yoki ID-karta nusxasi hamda ishonchnoma yoki ishga qabul qilish toʻgʻrisidagi hujjat nusxasini taqdim etadi. Vazirlik 5 ish kuni ichida qaror qabul qiladi. Akkreditatsiya kartasi 12 oygacha amal qiladi, uzaytirilishi mumkin va vakolatxona akkreditatsiyasi yoki xodim ishonchnomasi muddatidan oshmaydi. Akkreditatsiya qilingan xorijiy xodimlar Oʻzbekistonda Tashqi mehnat migratsiyasi agentligining tasdiqnomasisiz ishlashlari mumkin, lekin faqat akkreditatsiya qilingan vakolatxonada. Vizalar qonunchilikda belgilangan umumiy tartibda beriladi.",
      },
      { type: "h3" as const, text: "Oʻzbekiston fuqarolari" },
      {
        type: "p" as const,
        text: "Oʻzbekistonlik xodimlar Oʻzbekiston mehnat qonunchiligiga muvofiq ishga olinadi. Vakolatxona yuridik shaxs boʻlmaganligi sababli, Boshliq xodimlarni ishonchnoma asosida tashkil etuvchi tashkilot nomidan ishga oladi, shuning uchun ishga olish vakolatlari ishonchnomada va Vakolatxona toʻgʻrisidagi Nizomda aniq koʻrsatilishi lozim.",
      },
      { type: "h2" as const, text: "Hujjatlarni qonuniylashtirish" },
      {
        type: "p" as const,
        text: "1961-yil 5-oktabrdagi Gaaga Konvensiyasi ishtirokchisi boʻlgan mamlakatlardan kelgan hujjatlar konsullik qonuniylashtirishi oʻrniga apostilni talab qiladi. Boshqa mamlakatlar hujjatlari Oʻzbekiston konsullik muassasasida qonuniylashtiriladi. Oʻzbekistonning xalqaro shartnomalari doirasida rasmiylashtirilgan hujjatlar qonuniylashtirishni talab qilmaydi; bunday shartnoma sizning mamlakatingizga tatbiq etilishini oldindan tekshirib olish tavsiya etiladi. Agar tashkil etilgan mamlakat qonunchiligida talab qilinadigan hujjatlardan biri nazarda tutilmagan boʻlsa, uning oʻrniga ushbu mamlakat tashqi ishlar vazirligi yoki elchixonasining tasdigʻi taqdim etiladi.",
      },
      { type: "h2" as const, text: "Advizen qanday yordam bera oladi" },
      {
        type: "p" as const,
        text: "Oʻzbekistonda vakolatxona ochish hujjatlarni qonuniylashtirish talablarini hal etish, mos Vakolatxona Nizomini ishlab chiqish, akkreditatsiya muddatlarini boshqarish va akkreditatsiyadan keyingi majburiyatlarni bajarishni oʻz ichiga oladi. Advizen jamoasi xorijiy kompaniyalarga har bir bosqichda yordam beradi — hujjatlarni tayyorlash va tarjima koordinatsiyasidan tortib, xodimlarni akkreditatsiya qilish, akkreditatsiyani uzaytirish va Investitsiyalar, sanoat va savdo vazirligi talablariga doimiy rioya qilishgacha.",
      },
    ],
      faq: [
      {
        question: "Oʻzbekistondagi vakolatxonaning huquqiy maqomi qanday?",
        answer: "Vakolatxona yuridik shaxs emas va tijorat faoliyati yuritishi mumkin emas — yagona istisno xorijiy aviakompaniyalar vakolatxonalaridir. Vakolatxona tashkil etuvchi tashkilotning Oʻzbekiston hududidagi manfaatlarini ifodalash va himoya qilish uchun mavjud boʻlib, Vazirlar Mahkamasining 2024-yil 7-fevraldagi 76-son qarori asosida Investitsiyalar, sanoat va savdo vazirligi akkreditatsiya guvohnomasini bergan kundan boshlab ochilgan hisoblanadi. U soliqlardan ozod emas: xodimlar ish haqidan ijtimoiy soliq toʻlaydi va jismoniy shaxslardan olinadigan daromad soligʻini ushlab qoladi, tijorat faoliyati esa tashkil etuvchi tashkilotning doimiy muassasasini vujudga keltirishi mumkin.",
      },
      {
        question: "Oʻzbekistonda vakolatxonani akkreditatsiya qilish qancha vaqt oladi va davlat boji qanday toʻlanadi?",
        answer: "Ariza Davlat xizmatlari markazi yoki my.gov.uz orqali elektron shaklda beriladi, uni koʻrib chiqish uchun yigʻim undirilmaydi. Investitsiyalar, sanoat va savdo vazirligi 5 ish kuni ichida qaror chiqaradi. Ijobiy qarordan keyin «Davlat boji toʻgʻrisida»gi Qonunda belgilangan davlat boji bir oy ichida toʻlanadi (my.gov.uz orqali berilganda — summaning 90 foizi), guvohnoma esa toʻlov tushgan kundan boshlab 1 ish kuni ichida beriladi. Akkreditatsiya tashkil etuvchi tashkilotning tanloviga koʻra 1 yildan 3 yilgacha muddatga beriladi.",
      },
      {
        question: "Oʻzbekistonda vakolatxonani akkreditatsiya qilish uchun qanday hujjatlar talab etiladi?",
        answer: "Birlamchi akkreditatsiya uchun: Davlat xizmatlari markazi yoki my.gov.uz orqali elektron shaklda berilgan ariza; taʼsis hujjatlari (ustav va taʼsis shartnomasi); tashkil etilgan mamlakatdagi roʻyxatdan oʻtganlik dalili; Vakolatxona Boshligʻi nomiga ishonchnoma; Vakolatxona toʻgʻrisidagi Nizom. Xorijiy hujjatlar notarial tasdiqlangan, apostillangan yoki qonuniylashtirilgan (agar ular Oʻzbekistonning xalqaro shartnomasi doirasida rasmiylashtirilmagan boʻlsa), oʻzbek yoki rus tilida taqdim etilgan va topshirishdan oldingi 6 oy ichida berilgan boʻlishi shart. Ofis ijara shartnomasining nusxasi faqat akkreditatsiyani uzaytirishda talab qilinadi.",
      },
      {
        question: "Oʻzbekistondagi vakolatxonaning doimiy majburiyatlari qanday?",
        answer: "Soliq organida hisobga qoʻyish avtomatik amalga oshiriladi: Investitsiyalar, sanoat va savdo vazirligi akkreditatsiyadan keyin bir kun ichida vakolatxonani soliq organlarining maʼlumotlar bazasiga kiritadi. Vakolatxona xodimlar ish haqidan ijtimoiy soliq toʻlaydi va jismoniy shaxslardan olinadigan daromad soligʻini ushlab qoladi, Vazirlikning soʻroviga binoan maʼlumot taqdim etadi va xorijiy xodimlarini akkreditatsiya qiladi (xodimlarning 40 foizidan va besh kishidan oshmagan holda). Tashkil etuvchi tashkilot qayta tashkil etilganda yoki tugatilganda ikki hafta ichida Vazirlikni xabardor qilishi shart. Faoliyatni davom ettirish uchun guvohnoma muddati tugashidan kamida bir oy oldin faoliyat haqidagi maʼlumotlar va ijara shartnomasi nusxasi bilan uzaytirish uchun ariza beriladi.",
      },
    ],
  },
};

export default article;
