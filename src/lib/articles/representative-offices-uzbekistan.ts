import type { LocalizedArticle } from "../publications";

const article: Record<string, LocalizedArticle> = {
  en: {
    subtitle: "A step-by-step guide to accrediting a foreign commercial organisation's representative office in Uzbekistan — documents, timelines, costs, and ongoing obligations.",
    author: "Advizen Legal Practice",
    readTime: "8 min read",
    inShort: {
      figures: [
        { value: "No. 410", label: "Cabinet of Ministers Resolution of 23 October 2000 that governs accreditation" },
        { value: "10 working days", label: "For MIVT to decide on an application" },
        { value: "48 BCV", label: "State duty for accreditation, about USD 1,500 at current rates" },
        { value: "1–3 years", label: "Accreditation period; the initial certificate is issued for one year" },
      ],
      points: [
        "A representative office in Uzbekistan is not a legal entity and cannot conduct commercial activity; the only exception is representative offices of airlines.",
        "The office comes into existence on the date the Ministry of Investments and Foreign Trade (MIVT) issues its accreditation certificate.",
        "Within 10 days of receiving the certificate, the office must notify MIVT of its postal address, register with the local tax authorities and submit proof of tax registration to MIVT.",
        "Accredited foreign staff can work at the office without a separate labour migration permit, while Uzbek staff are employed by the founding foreign organisation under Uzbek labour law.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Foreign companies wishing to establish a presence in Uzbekistan without incorporating a local legal entity may open a representative office. The process is governed by Cabinet of Ministers Resolution No. 410 of 23 October 2000 and administered by the Ministry of Investments and Foreign Trade (MIVT). Accreditation — not registration — is the operative concept: the representative office comes into existence on the date MIVT issues its accreditation certificate.",
      },
      { type: "h2" as const, text: "Who can open a representative office" },
      {
        type: "p" as const,
        text: "Any foreign commercial organisation — a firm, company, corporation, partnership, or other business form — that has the legal capacity under its home-country law to open offices abroad may apply. Commercial representations of foreign state authorities (ministries, federal agencies, etc.) may also be accredited, provided the relevant foreign authority issues a permit.",
      },
      { type: "h2" as const, text: "Legal status" },
      {
        type: "p" as const,
        text: "A representative office is not a legal entity and cannot conduct commercial activity (the sole exception is representative offices of airlines, which may engage in commercial operations). It is not a taxpayer in its own right — tax obligations are governed by the Tax Code and applicable international treaties. The office exists to represent and protect the interests of its founding organisation on the territory of Uzbekistan.",
      },
      {
        type: "p" as const,
        text: "The office operates under a Regulation (Charter) approved and sealed by the founding organisation. It is managed by a Head of Representative Office who acts under a power of attorney issued by the founding organisation, which must expressly define the Head's authority.",
      },
      { type: "h2" as const, text: "Accreditation period" },
      {
        type: "p" as const,
        text: "Accreditation may be granted for a period of one to three years. Offices operating on a long-term basis refresh their documents with MIVT every three years (see document list below). If the founding organisation is reorganised or liquidated, the representative office must notify MIVT within two weeks.",
      },
      { type: "h2" as const, text: "Documents required for initial accreditation" },
      {
        type: "ul" as const,
        items: [
          "Written application on company letterhead — covering the founding organisation's address, contacts, management, headcount, business activities, annual turnover, product range, shareholder details, subsidiaries, history, and the proposed accreditation period (typically three years).",
          "Constitutional documents (charter and founders' agreement) — notarised copies, legalised at the Uzbek consulate in the country of incorporation (or via apostille under the Hague Convention 1961), plus a notarised translation into Uzbek or Russian. CIS-country documents require only notarised copies.",
          "Proof of registration in the country of origin — extract from the trade register or certificate of state registration, legalised or apostilled, with notarised translation.",
          "Power of attorney in favour of the Head of Representative Office — with full passport details and a statement of authority, legalised or apostilled, with notarised translation.",
          "Regulation on the Representative Office — approved and sealed by the founding organisation, legalised or apostilled, with notarised translation.",
          "Guarantee letter from the owner (or authorised lessee) of the office premises — confirming readiness to lease the premises, stating conditions and term. The building owner's property title documents must be provided as a simple copy.",
        ],
      },
      {
        type: "p" as const,
        text: "Documents issued in CIS member states (Belarus, Kazakhstan, Russia, Tajikistan, Armenia, Ukraine, Kyrgyzstan, Moldova, Azerbaijan, Georgia, Turkmenistan) do not require legalisation — notarised copies suffice. All documents submitted must have been issued within the six months prior to submission.",
      },
      { type: "h2" as const, text: "Timeline and decision" },
      {
        type: "ul" as const,
        items: [
          "MIVT reviews the application and issues a decision (grant or refusal) within 10 working days of submission.",
          "MIVT notifies the applicant in writing within 3 days of the decision.",
          "The accreditation certificate is issued within 5 days of MIVT receiving payment of the state duty.",
          "The initial certificate is issued for one year; subsequent renewals may cover the full accreditation period.",
        ],
      },
      { type: "h2" as const, text: "Grounds for refusal" },
      {
        type: "p" as const,
        text: "MIVT may refuse accreditation only on three grounds: submission of knowingly false documents; the Regulation on the Representative Office contradicting Uzbek law; or documents not meeting the requirements of the applicable regulation. The refusal must be issued in writing, listing specific deficiencies. Once deficiencies are remedied, the applicant may reapply — and MIVT may not raise new objections not included in the original written refusal. Refusals may be challenged in court.",
      },
      { type: "h2" as const, text: "Accreditation fee" },
      {
        type: "p" as const,
        text: "The state duty is 48 times the base calculation value (approximately USD 1,500 at current rates). Payment must be made to MIVT's account before the certificate is issued.",
      },
      { type: "h2" as const, text: "Post-accreditation obligations" },
      {
        type: "p" as const,
        text: "Within 10 days of receiving the accreditation certificate, the representative office must:",
      },
      {
        type: "ul" as const,
        items: [
          "Notify MIVT in writing of its postal address.",
          "Register with the tax authorities at the office's location.",
          "Submit to MIVT a certificate confirming tax registration.",
        ],
      },
      {
        type: "p" as const,
        text: "The Head of the Representative Office must submit an annual activity report to MIVT in the prescribed form. In practice, MIVT also requires the representative office to sign an \"Obligations\" document at the time of certificate collection, which includes a commitment to notify MIVT promptly of any changes to staff composition.",
      },
      { type: "h2" as const, text: "Renewing accreditation" },
      {
        type: "p" as const,
        text: "To renew accreditation, the founding organisation submits to MIVT: a written renewal application; a fresh power of attorney in favour of the Head (if the previous one has expired); and written confirmation of the postal address with a copy of the current lease or title document. No additional documents beyond this list may be demanded.",
      },
      { type: "h2" as const, text: "Finance and operations" },
      {
        type: "p" as const,
        text: "The representative office is funded by the founding organisation. Operating expenses that may be covered by the office include: representation expenses; procurement of supplies for office needs; staff salaries; business travel; rent and utilities; and other operational costs. Uzbek-sum funds must be sourced by converting foreign currency through authorised channels or from UZS funds transferred by the parent company. Foreign currency receipts are transferred from the founding organisation to the representative office's bank account.",
      },
      { type: "h2" as const, text: "Employment" },
      { type: "h3" as const, text: "Foreign nationals" },
      {
        type: "p" as const,
        text: "Foreign employees of the representative office must be individually accredited with MIVT. Accredited foreign staff may work without a separate labour migration permit — but only at the accredited representative office. To accredit a foreign employee, the office submits to MIVT: a written application signed by the Head; a personal data sheet in Uzbek and English (two copies); two photographs (3×4 cm); a letter of appointment signed by an authorised person of the founding organisation (legalised); an HIV-free certificate; and a copy of the national passport. MIVT issues the accreditation card within 10 working days. Accreditation is granted for the remaining term of the office's accreditation, up to a maximum of 12 months, and is renewable. Visas for nationals of countries that require one to enter Uzbekistan are issued for the accreditation period, up to 12 months.",
      },
      { type: "h3" as const, text: "Uzbek nationals" },
      {
        type: "p" as const,
        text: "Uzbek employees are hired under Uzbek labour law. Because the representative office is not a legal entity, the employer of record is the founding foreign commercial organisation. Employment contracts are concluded between the founding organisation and the Uzbek employee, signed by the employee and the Head of Representative Office (whose authority to hire must be stated in both the Regulation on the Representative Office and the power of attorney). The contract must specify that the place of work is the representative office in Uzbekistan, and the contract term must not exceed the remaining accreditation period of the office.",
      },
      { type: "h2" as const, text: "Legalisation of documents" },
      {
        type: "p" as const,
        text: "Documents from countries that have acceded to the Hague Convention of 5 October 1961 require an apostille rather than full consular legalisation. For countries not party to the Convention, the founding organisation must be legalised at the Uzbek consular mission in the country of incorporation (or, if none, through the foreign ministry of that country and subsequently at the Consular Division of the Uzbek Ministry of Foreign Affairs). CIS-country documents are exempt from legalisation entirely.",
      },
      { type: "h2" as const, text: "How Advizen can help" },
      {
        type: "p" as const,
        text: "Opening a representative office in Uzbekistan involves navigating document legalisation requirements, drafting a compliant Regulation on the Representative Office, managing the accreditation timeline, and meeting post-accreditation obligations. Advizen's team assists foreign companies at every stage — from document preparation and translation coordination to tax registration and ongoing MIVT compliance.",
      },
    ],
      faq: [
      {
        question: "What is the legal status of a representative office in Uzbekistan?",
        answer: "A representative office is not a legal entity and cannot conduct commercial activity — the sole exception is representative offices of airlines. It is not a taxpayer in its own right; tax obligations are governed by the Tax Code and applicable international treaties. The office exists to represent and protect the interests of its founding organisation on the territory of Uzbekistan, and comes into existence on the date MIVT issues its accreditation certificate under Cabinet of Ministers Resolution No. 410.",
      },
      {
        question: "How much does it cost to accredit a representative office in Uzbekistan?",
        answer: "The state duty is 48 times the base calculation value (approximately USD 1,500 at current rates), paid to MIVT's account before the certificate is issued. MIVT reviews the application and issues a decision within 10 working days; the accreditation certificate is issued within 5 days of payment. Accreditation may be granted for a period of 1 to 3 years; the initial certificate is issued for one year.",
      },
      {
        question: "What documents are required to accredit a representative office in Uzbekistan?",
        answer: "Required documents include: a written application on company letterhead; constitutional documents (charter and founders' agreement) legalised or apostilled with notarised translation; proof of registration in the country of origin; power of attorney for the Head of Representative Office; Regulation on the Representative Office (approved and sealed by the founding organisation); and a guarantee letter from the office premises owner. Documents from CIS member states require only notarised copies — no legalisation needed. All documents must have been issued within 6 months prior to submission.",
      },
      {
        question: "What are the ongoing obligations of a representative office in Uzbekistan?",
        answer: "Within 10 days of receiving the accreditation certificate, the office must: notify MIVT in writing of its postal address; register with the tax authorities at the office's location; and submit to MIVT a certificate confirming tax registration. The Head must submit an annual activity report to MIVT in the prescribed form. The office must also notify MIVT promptly of any changes to staff composition, and renew accreditation every 3 years for long-term operations.",
      },
    ],
  },
  ru: {
    subtitle: "Пошаговое руководство по аккредитации представительства иностранной коммерческой организации в Узбекистане — документы, сроки, расходы и текущие обязательства.",
    author: "Advizen Legal Practice",
    readTime: "8 мин чтения",
    inShort: {
      figures: [
        { value: "№ 410", label: "Постановление Кабинета Министров от 23 октября 2000 года, регулирующее аккредитацию" },
        { value: "10 рабочих дней", label: "На решение МИВТ по заявке" },
        { value: "48 БРВ", label: "Государственная пошлина за аккредитацию, около 1 500 долл. США по текущему курсу" },
        { value: "1–3 года", label: "Срок аккредитации; первоначальное свидетельство выдаётся на один год" },
      ],
      points: [
        "Представительство в Узбекистане не является юридическим лицом и не вправе вести коммерческую деятельность; единственное исключение — представительства авиакомпаний.",
        "Представительство возникает в день выдачи свидетельства об аккредитации Министерством инвестиций и внешней торговли (МИВТ).",
        "В течение 10 дней после получения свидетельства представительство обязано уведомить МИВТ о почтовом адресе, встать на налоговый учёт и представить в МИВТ справку о постановке на учёт.",
        "Аккредитованные иностранные сотрудники работают в представительстве без отдельного разрешения на трудовую миграцию, а узбекские сотрудники нанимаются учреждающей иностранной организацией по трудовому законодательству Узбекистана.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Иностранные компании, желающие открыть присутствие в Узбекистане без создания местного юридического лица, могут открыть представительство. Процесс регулируется Постановлением Кабинета Министров № 410 от 23 октября 2000 года и осуществляется Министерством инвестиций и внешней торговли (МИВТ). Действует именно аккредитация, а не регистрация: представительство возникает в день выдачи МИВТ свидетельства об аккредитации.",
      },
      { type: "h2" as const, text: "Кто может открыть представительство" },
      {
        type: "p" as const,
        text: "Любая иностранная коммерческая организация — фирма, компания, корпорация, товарищество или иная организационно-правовая форма — обладающая по законодательству страны учреждения правоспособностью открывать представительства за рубежом, может подать заявку. Коммерческие представительства иностранных государственных органов (министерств, федеральных ведомств и т. п.) также могут быть аккредитованы при наличии соответствующего разрешения иностранного органа.",
      },
      { type: "h2" as const, text: "Правовой статус" },
      {
        type: "p" as const,
        text: "Представительство не является юридическим лицом и не вправе осуществлять коммерческую деятельность (единственное исключение — представительства авиакомпаний, которые могут вести коммерческую деятельность). Оно не является самостоятельным налогоплательщиком — налоговые обязательства регулируются Налоговым кодексом и применимыми международными договорами. Представительство существует для представления и защиты интересов учреждающей организации на территории Узбекистана.",
      },
      {
        type: "p" as const,
        text: "Представительство действует на основании Положения (Устава), утверждённого и заверенного печатью учреждающей организации. Им руководит Глава представительства, действующий на основании доверенности, выданной учреждающей организацией, в которой должны быть прямо определены полномочия Главы.",
      },
      { type: "h2" as const, text: "Срок аккредитации" },
      {
        type: "p" as const,
        text: "Аккредитация может предоставляться на срок от одного до трёх лет. Представительства, работающие на долгосрочной основе, обновляют документы в МИВТ каждые три года (см. перечень ниже). При реорганизации или ликвидации учреждающей организации представительство обязано уведомить МИВТ в течение двух недель.",
      },
      { type: "h2" as const, text: "Документы для первичной аккредитации" },
      {
        type: "ul" as const,
        items: [
          "Письменное заявление на фирменном бланке — содержащее адрес, контакты, руководство, штатную численность, виды деятельности, годовой оборот, ассортимент, сведения об акционерах, дочерних компаниях, истории учреждающей организации и предполагаемом сроке аккредитации (как правило, трёх лет).",
          "Учредительные документы (устав и учредительный договор) — нотариально заверенные копии, легализованные в узбекском консульстве в стране учреждения (или с апостилем согласно Гаагской конвенции 1961 года), плюс нотариально заверенный перевод на узбекский или русский язык. Документы из стран СНГ требуют только нотариально заверенных копий.",
          "Подтверждение регистрации в стране учреждения — выписка из торгового реестра или свидетельство о государственной регистрации, легализованное или апостилированное, с нотариально заверенным переводом.",
          "Доверенность на имя Главы представительства — с полными паспортными данными и описанием полномочий, легализованная или апостилированная, с нотариально заверенным переводом.",
          "Положение о представительстве — утверждённое и заверенное печатью учреждающей организации, легализованное или апостилированное, с нотариально заверенным переводом.",
          "Гарантийное письмо собственника (или уполномоченного арендатора) офисного помещения — подтверждающее готовность сдать помещение в аренду с указанием условий и срока. Правоустанавливающие документы собственника здания предоставляются простой копией.",
        ],
      },
      {
        type: "p" as const,
        text: "Документы, выданные в странах-членах СНГ (Беларусь, Казахстан, Россия, Таджикистан, Армения, Украина, Кыргызстан, Молдова, Азербайджан, Грузия, Туркменистан), не требуют легализации — достаточно нотариально заверенных копий. Все представляемые документы должны быть выданы в течение шести месяцев до их подачи.",
      },
      { type: "h2" as const, text: "Сроки и решение" },
      {
        type: "ul" as const,
        items: [
          "МИВТ рассматривает заявку и выносит решение (о выдаче или отказе) в течение 10 рабочих дней с момента подачи.",
          "МИВТ письменно уведомляет заявителя в течение 3 дней с момента принятия решения.",
          "Свидетельство об аккредитации выдаётся в течение 5 дней с момента поступления оплаты государственной пошлины в МИВТ.",
          "Первоначальное свидетельство выдаётся на один год; последующие продления могут охватывать полный срок аккредитации.",
        ],
      },
      { type: "h2" as const, text: "Основания для отказа" },
      {
        type: "p" as const,
        text: "МИВТ может отказать в аккредитации только по трём основаниям: представление заведомо ложных документов; противоречие Положения о представительстве законодательству Узбекистана; несоответствие документов требованиям применимого положения. Отказ оформляется в письменном виде с перечислением конкретных недостатков. После их устранения заявитель вправе подать повторную заявку, и МИВТ не вправе выдвигать новые возражения, не указанные в первоначальном письменном отказе. Отказы могут быть обжалованы в суде.",
      },
      { type: "h2" as const, text: "Пошлина за аккредитацию" },
      {
        type: "p" as const,
        text: "Государственная пошлина составляет 48 базовых расчётных величин (приблизительно 1 500 долл. США по текущему курсу). Оплата производится на счёт МИВТ до выдачи свидетельства.",
      },
      { type: "h2" as const, text: "Обязательства после аккредитации" },
      {
        type: "p" as const,
        text: "В течение 10 дней с момента получения свидетельства об аккредитации представительство обязано:",
      },
      {
        type: "ul" as const,
        items: [
          "Письменно уведомить МИВТ о своём почтовом адресе.",
          "Встать на налоговый учёт по месту нахождения офиса.",
          "Представить в МИВТ справку, подтверждающую постановку на налоговый учёт.",
        ],
      },
      {
        type: "p" as const,
        text: "Глава представительства обязан представлять в МИВТ ежегодный отчёт о деятельности по установленной форме. На практике МИВТ также требует от представительства подписать документ «Обязательства» при получении свидетельства, включающий обязательство своевременно уведомлять МИВТ о любых изменениях в составе персонала.",
      },
      { type: "h2" as const, text: "Продление аккредитации" },
      {
        type: "p" as const,
        text: "Для продления аккредитации учреждающая организация представляет в МИВТ: письменное заявление о продлении; новую доверенность на имя Главы (если срок предыдущей истёк); и письменное подтверждение почтового адреса с копией действующего договора аренды или правоустанавливающего документа. Дополнительные документы сверх указанного перечня требоваться не могут.",
      },
      { type: "h2" as const, text: "Финансы и операционная деятельность" },
      {
        type: "p" as const,
        text: "Представительство финансируется учреждающей организацией. К операционным расходам, которые могут покрываться представительством, относятся: представительские расходы; закупка материалов для нужд офиса; заработная плата сотрудников; служебные командировки; аренда и коммунальные услуги; иные операционные расходы. Узбекские сумы должны формироваться путём конвертации иностранной валюты через уполномоченные каналы или из средств в сумах, переведённых материнской компанией. Поступления в иностранной валюте перечисляются учреждающей организацией на банковский счёт представительства.",
      },
      { type: "h2" as const, text: "Трудовые отношения" },
      { type: "h3" as const, text: "Иностранные граждане" },
      {
        type: "p" as const,
        text: "Иностранные сотрудники представительства должны быть индивидуально аккредитованы в МИВТ. Аккредитованные иностранные работники могут работать без отдельного разрешения на трудовую миграцию, но только в аккредитованном представительстве. Для аккредитации иностранного сотрудника представительство подаёт в МИВТ: письменное заявление, подписанное Главой; анкету личных данных на узбекском и английском языках (в двух экземплярах); две фотографии (3×4 см); приказ о назначении, подписанный уполномоченным лицом учреждающей организации (легализованный); справку об отсутствии ВИЧ; копию национального паспорта. МИВТ выдаёт аккредитационную карту в течение 10 рабочих дней. Аккредитация предоставляется на оставшийся срок аккредитации представительства, но не более чем на 12 месяцев, и может быть продлена. Визы для граждан стран, нуждающихся в визе для въезда в Узбекистан, выдаются на срок аккредитации, не превышающий 12 месяцев.",
      },
      { type: "h3" as const, text: "Граждане Узбекистана" },
      {
        type: "p" as const,
        text: "Узбекские сотрудники принимаются на работу в соответствии с трудовым законодательством Узбекистана. Поскольку представительство не является юридическим лицом, работодателем выступает учреждающая иностранная коммерческая организация. Трудовые договоры заключаются между учреждающей организацией и узбекским работником и подписываются работником и Главой представительства (полномочия которого на приём на работу должны быть указаны как в Положении о представительстве, так и в доверенности). В договоре должно быть указано, что местом работы является представительство в Узбекистане, а срок договора не может превышать оставшийся срок аккредитации представительства.",
      },
      { type: "h2" as const, text: "Легализация документов" },
      {
        type: "p" as const,
        text: "Документы из стран, присоединившихся к Гаагской конвенции от 5 октября 1961 года, требуют апостиля, а не полной консульской легализации. Для стран, не являющихся участниками Конвенции, документы учреждающей организации должны быть легализованы в узбекском консульском учреждении в стране учреждения (или, при его отсутствии, через министерство иностранных дел этой страны и затем в Консульском управлении Министерства иностранных дел Узбекистана). Документы из стран СНГ полностью освобождены от легализации.",
      },
      { type: "h2" as const, text: "Чем может помочь Advizen" },
      {
        type: "p" as const,
        text: "Открытие представительства в Узбекистане сопряжено с прохождением требований по легализации документов, разработкой соответствующего Положения о представительстве, соблюдением сроков аккредитации и выполнением обязательств после аккредитации. Команда Advizen помогает иностранным компаниям на каждом этапе — от подготовки документов и координации переводов до постановки на налоговый учёт и текущего соблюдения требований МИВТ.",
      },
    ],
      faq: [
      {
        question: "Каков правовой статус представительства в Узбекистане?",
        answer: "Представительство не является юридическим лицом и не вправе вести коммерческую деятельность — единственное исключение составляют представительства авиакомпаний. Оно не является самостоятельным налогоплательщиком; налоговые обязательства регулируются Налоговым кодексом и применимыми международными договорами. Представительство существует для представления и защиты интересов учреждающей организации на территории Узбекистана и возникает с даты выдачи МИВТ свидетельства об аккредитации согласно Постановлению КМ № 410.",
      },
      {
        question: "Сколько стоит аккредитация представительства в Узбекистане?",
        answer: "Государственная пошлина составляет 48 базовых расчётных величин (приблизительно 1 500 долл. США по текущему курсу), оплачивается на счёт МИВТ до выдачи свидетельства. МИВТ рассматривает заявку и выносит решение в течение 10 рабочих дней; свидетельство выдаётся в течение 5 дней с момента оплаты. Аккредитация предоставляется на срок от 1 до 3 лет; первоначальное свидетельство выдаётся на один год.",
      },
      {
        question: "Какие документы необходимы для аккредитации представительства в Узбекистане?",
        answer: "Требуются: письменное заявление на фирменном бланке; учредительные документы (устав и учредительный договор), легализованные или апостилированные с нотариально заверенным переводом; подтверждение регистрации в стране учреждения; доверенность на имя Главы представительства; Положение о представительстве (утверждённое и заверенное печатью); гарантийное письмо собственника офисных помещений. Документы из стран СНГ требуют только нотариально заверенных копий — легализация не нужна. Все документы должны быть выданы в течение 6 месяцев до их подачи.",
      },
      {
        question: "Каковы текущие обязательства представительства в Узбекистане?",
        answer: "В течение 10 дней с момента получения свидетельства об аккредитации: уведомить МИВТ о почтовом адресе; встать на налоговый учёт по месту нахождения офиса; представить в МИВТ справку о постановке на налоговый учёт. Глава представительства обязан ежегодно представлять в МИВТ отчёт о деятельности по установленной форме. Необходимо также своевременно уведомлять МИВТ об изменениях в составе персонала и обновлять аккредитацию каждые 3 года при долгосрочной работе.",
      },
    ],
  },
  uz: {
    subtitle: "Oʻzbekistonda xorijiy tijorat tashkilotining vakolatxonasini akkreditatsiya qilish boʻyicha bosqichma-bosqich qoʻllanma — hujjatlar, muddatlar, xarajatlar va doimiy majburiyatlar.",
    author: "Advizen Legal Practice",
    readTime: "8 daqiqa oʻqish",
    inShort: {
      figures: [
        { value: "410-son", label: "Akkreditatsiyani tartibga soluvchi Vazirlar Mahkamasining 2000-yil 23-oktyabrdagi qarori" },
        { value: "10 ish kuni", label: "ITSV ariza boʻyicha qaror chiqarishi uchun" },
        { value: "48 BHM", label: "Akkreditatsiya uchun davlat boji, joriy kursda taxminan 1 500 AQSh dollari" },
        { value: "1–3 yil", label: "Akkreditatsiya muddati; birlamchi guvohnoma bir yilga beriladi" },
      ],
      points: [
        "Oʻzbekistondagi vakolatxona yuridik shaxs emas va tijorat faoliyati yurita olmaydi; yagona istisno — aviakompaniyalar vakolatxonalari.",
        "Vakolatxona Investitsiyalar va tashqi savdo vazirligi (ITSV) akkreditatsiya guvohnomasini bergan kundan boshlab mavjud boʻladi.",
        "Guvohnoma olingandan keyin 10 kun ichida vakolatxona ITSVni pochta manzili haqida xabardor qilishi, soliq organlarida roʻyxatdan oʻtishi va buni tasdiqlovchi maʼlumotnomani ITSVga taqdim etishi shart.",
        "Akkreditatsiya qilingan xorijiy xodimlar vakolatxonada alohida mehnat migratsiyasi ruxsatnomasisiz ishlaydi, oʻzbek xodimlar esa Oʻzbekiston mehnat qonunchiligiga koʻra tashkil etuvchi xorijiy tashkilot tomonidan yollanadi.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Mahalliy yuridik shaxs tashkil etmasdan Oʻzbekistonda mavjudlik oʻrnatishni istagan xorijiy kompaniyalar vakolatxona ochishlari mumkin. Jarayon Vazirlar Mahkamasining 2000 yil 23 oktyabrdagi 410-sonli Qarori bilan tartibga solinadi va Investitsiyalar va tashqi savdo vazirligi (ITSV) tomonidan amalga oshiriladi. Bu yerda akkreditatsiya — roʻyxatdan oʻtkazish emas — asosiy tushunchadir: vakolatxona ITSV akkreditatsiya guvohnomasini berganidan boshlab mavjud boʻladi.",
      },
      { type: "h2" as const, text: "Vakolatxonani kim ocha oladi" },
      {
        type: "p" as const,
        text: "Tashkil etilgan mamlakat qonunchiligiga koʻra chet elda vakolatxonalar ochish huquqiga ega boʻlgan har qanday xorijiy tijorat tashkiloti — firma, kompaniya, korporatsiya, shirkat yoki boshqa tashkiliy-huquqiy shakldagi — ariza topshirishi mumkin. Xorijiy davlat organlarining (vazirliklar, federal idoralar va boshqalar) tijorat vakolatxonalari ham tegishli xorijiy organ ruxsatnoma bergan taqdirda akkreditatsiya qilinishi mumkin.",
      },
      { type: "h2" as const, text: "Huquqiy maqom" },
      {
        type: "p" as const,
        text: "Vakolatxona yuridik shaxs emas va tijorat faoliyati yuritishi mumkin emas (yagona istisno — tijorat faoliyati bilan shugʻullanishi mumkin boʻlgan aviakompaniyalar vakolatxonalari). U mustaqil soliq toʻlovchi emas — soliq majburiyatlari Soliq kodeksi va amaldagi xalqaro shartnomalar bilan tartibga solinadi. Vakolatxona tashkil etuvchi tashkilotning Oʻzbekiston hududidagi manfaatlarini ifodalash va himoya qilish uchun mavjud.",
      },
      {
        type: "p" as const,
        text: "Vakolatxona tashkil etuvchi tashkilot tomonidan tasdiqlangan va muhrlangan Nizom (Ustav) asosida faoliyat yuritadi. Uni tashkil etuvchi tashkilot tomonidan berilgan ishonchnoma asosida ish yuritadigan Vakolatxona Boshligʻi boshqaradi va ishonchnomada Boshliqning vakolatlari aniq belgilangan boʻlishi shart.",
      },
      { type: "h2" as const, text: "Akkreditatsiya muddati" },
      {
        type: "p" as const,
        text: "Akkreditatsiya bir yildan uch yilgacha muddatga berilishi mumkin. Uzoq muddatli faoliyat yurituvchi vakolatxonalar har uch yilda ITSVda hujjatlarini yangilab turadilar (quyida hujjatlar roʻyxatiga qarang). Tashkil etuvchi tashkilot qayta tashkil etilganda yoki tugatilganda vakolatxona ikki hafta ichida ITSVni xabardor qilishi shart.",
      },
      { type: "h2" as const, text: "Birlamchi akkreditatsiya uchun zarur hujjatlar" },
      {
        type: "ul" as const,
        items: [
          "Firma blankasidagi yozma ariza — tashkil etuvchi tashkilotning manzili, kontaktlari, rahbariyati, xodimlar soni, faoliyat turlari, yillik aylanmasi, mahsulot assortimenti, aktsionerlar, shoʻba korxonalar, tarixi va taklif etilayotgan akkreditatsiya muddati (odatda uch yil) haqida maʼlumot.",
          "Taʼsis hujjatlari (ustav va taʼsis shartnomasi) — tashkil etilgan mamlakatdagi Oʻzbekiston konsulligida (yoki 1961 yilgi Gaaga Konvensiyasi boʻyicha apostil orqali) qonuniylashtirilgan notarial tasdiqlangan nusxalar, hamda oʻzbek yoki rus tiliga notarial tasdiqlangan tarjima bilan birga. MDH mamlakatlari hujjatlari uchun faqat notarial tasdiqlangan nusxalar talab etiladi.",
          "Tashkil etilgan mamlakatdagi roʻyxatdan oʻtganlik dalili — savdo reyestridan koʻchirma yoki davlat roʻyxatidan oʻtganlik toʻgʻrisidagi guvohnoma, qonuniylashtirilgan yoki apostillangan, notarial tasdiqlangan tarjima bilan.",
          "Vakolatxona Boshligʻi nomiga ishonchnoma — toʻliq pasport maʼlumotlari va vakolatlar bayoni bilan, qonuniylashtirilgan yoki apostillangan, notarial tasdiqlangan tarjima bilan.",
          "Vakolatxona toʻgʻrisidagi Nizom — tashkil etuvchi tashkilot tomonidan tasdiqlangan va muhrlangan, qonuniylashtirilgan yoki apostillangan, notarial tasdiqlangan tarjima bilan.",
          "Ofis binosi egasi (yoki vakolatli ijaraga oluvchi) tomonidan kafolat xati — binoni ijaraga berishga tayyorligini tasdiqlovchi, shartlar va muddatlarni koʻrsatuvchi. Bino egasining mulk huquqi hujjatlari oddiy nusxa shaklida taqdim etiladi.",
        ],
      },
      {
        type: "p" as const,
        text: "MDH aʼzo davlatlarida (Belarus, Qozogʻiston, Rossiya, Tojikiston, Armaniston, Ukraina, Qirgʻiziston, Moldova, Ozarbayjon, Gruziya, Turkmaniston) berilgan hujjatlar qonuniylashtirishni talab qilmaydi — notarial tasdiqlangan nusxalar yetarli. Topshirilayotgan barcha hujjatlar topshirilishidan oldingi olti oy ichida berilgan boʻlishi shart.",
      },
      { type: "h2" as const, text: "Muddatlar va qaror" },
      {
        type: "ul" as const,
        items: [
          "ITSV arizani koʻrib chiqadi va topshirilgan kundan boshlab 10 ish kuni ichida qaror chiqaradi (berish yoki rad etish).",
          "ITSV qaror qabul qilinganidan 3 kun ichida ariza beruvchini yozma ravishda xabardor qiladi.",
          "Akkreditatsiya guvohnomasi davlat boji ITSV hisobiga tushganidan 5 kun ichida beriladi.",
          "Birlamchi guvohnoma bir yilga beriladi; keyingi qayta uzaytirishlar toʻliq akkreditatsiya muddatini qamrab olishi mumkin.",
        ],
      },
      { type: "h2" as const, text: "Rad etish asoslari" },
      {
        type: "p" as const,
        text: "ITSV akkreditatsiyani faqat uchta asosda rad etishi mumkin: aniq soxta hujjatlar topshirilishi; Vakolatxona toʻgʻrisidagi Nizomning Oʻzbekiston qonunchiligiga zid boʻlishi; hujjatlarning tegishli nizom talablariga javob bermasligi. Rad etish aniq kamchiliklarni koʻrsatgan holda yozma ravishda rasmiylashtirilishi shart. Kamchiliklar bartaraf etilganidan soʻng ariza beruvchi qayta murojaat qilishi mumkin va ITSV dastlabki yozma rad etishda qayd etilmagan yangi eʼtirozlarni qoʻya olmaydi. Rad etish qarorlari sudda apellyatsiya tartibida shikoyat qilinishi mumkin.",
      },
      { type: "h2" as const, text: "Akkreditatsiya yigʻimi" },
      {
        type: "p" as const,
        text: "Davlat boji asosiy hisob-kitob qiymatining 48 baravarini tashkil etadi (joriy kursda taxminan 1 500 AQSh dollari). Toʻlov guvohnoma berilishidan oldin ITSV hisobiga amalga oshiriladi.",
      },
      { type: "h2" as const, text: "Akkreditatsiyadan keyingi majburiyatlar" },
      {
        type: "p" as const,
        text: "Akkreditatsiya guvohnomasini olganidan keyin 10 kun ichida vakolatxona quyidagilarni amalga oshirishi shart:",
      },
      {
        type: "ul" as const,
        items: [
          "ITSVni oʻzining pochta manzili haqida yozma ravishda xabardor qilish.",
          "Ofis joylashgan joydagi soliq organlarida roʻyxatdan oʻtish.",
          "Soliq roʻyxatidan oʻtganligini tasdiqlovchi maʼlumotnomani ITSVga taqdim etish.",
        ],
      },
      {
        type: "p" as const,
        text: "Vakolatxona Boshligʻi ITSVga belgilangan shaklda yillik faoliyat hisobotini taqdim etishi shart. Amalda ITSV guvohnomani olish paytida vakolatxonadan «Majburiyatlar» hujjatini imzolashni ham talab qiladi, unda xodimlar tarkibidagi har qanday oʻzgarishlar haqida ITSVni oʻz vaqtida xabardor qilish majburiyati koʻzda tutilgan.",
      },
      { type: "h2" as const, text: "Akkreditatsiyani uzaytirish" },
      {
        type: "p" as const,
        text: "Akkreditatsiyani uzaytirish uchun tashkil etuvchi tashkilot ITSVga quyidagilarni taqdim etadi: yozma uzaytirish arizasi; Boshliq nomiga yangi ishonchnoma (oldingisining muddati tugagan boʻlsa); pochta manzilining yozma tasdigʻi va amaldagi ijara shartnomasi yoki egalik hujjatining nusxasi. Ushbu roʻyxatdan tashqari qoʻshimcha hujjatlar talab qilinmaydi.",
      },
      { type: "h2" as const, text: "Moliya va operatsion faoliyat" },
      {
        type: "p" as const,
        text: "Vakolatxona tashkil etuvchi tashkilot tomonidan moliyalashtiriladi. Vakolatxona tomonidan qoplanishi mumkin boʻlgan operatsion xarajatlarga quyidagilar kiradi: vakillik xarajatlari; ofis ehtiyojlari uchun materiallar sotib olish; xodimlar maoshi; xizmat safarlari; ijara va kommunal xizmatlar; boshqa operatsion xarajatlar. Oʻzbek soʻmlari xorijiy valyutani vakolatli kanallar orqali konvertatsiya qilish yoki ona kompaniya tomonidan oʻtkazilgan soʻm mablagʻlaridan olinishi kerak. Xorijiy valyutadagi tushumlar tashkil etuvchi tashkilot tomonidan vakolatxonaning bank hisobvaragʻiga oʻtkaziladi.",
      },
      { type: "h2" as const, text: "Mehnat munosabatlari" },
      { type: "h3" as const, text: "Xorijiy fuqarolar" },
      {
        type: "p" as const,
        text: "Vakolatxonaning xorijiy xodimlari ITSVda yakka tartibda akkreditatsiya qilinishi shart. Akkreditatsiya qilingan xorijiy xodimlar alohida mehnat migratsiyasi ruxsatnomasisiz ishlashlari mumkin, lekin faqat akkreditatsiya qilingan vakolatxonada. Xorijiy xodimni akkreditatsiya qilish uchun vakolatxona ITSVga quyidagilarni taqdim etadi: Boshliq imzolagan yozma ariza; oʻzbek va ingliz tillaridagi shaxsiy maʼlumotlar varaqasi (ikki nusxada); ikkita fotosurat (3×4 sm); tashkil etuvchi tashkilotning vakolatli shaxsi imzolagan tayinlash toʻgʻrisidagi xat (qonuniylashtirilgan); OIVdan xoli ekanligi haqida maʼlumotnoma; milliy pasport nusxasi. ITSV akkreditatsiya kartasini 10 ish kuni ichida beradi. Akkreditatsiya vakolatxona akkreditatsiyasining qolgan muddatiga, lekin 12 oydan koʻp boʻlmagan muddatga beriladi va uzaytirilishi mumkin. Oʻzbekistonga kirish uchun viza talab qiladigan mamlakatlar fuqarolariga vizalar akkreditatsiya muddatiga, 12 oydan oshmaydigan muddatga beriladi.",
      },
      { type: "h3" as const, text: "Oʻzbekiston fuqarolari" },
      {
        type: "p" as const,
        text: "Oʻzbekistonlik xodimlar Oʻzbekiston mehnat qonunchiligiga muvofiq ishga olinadi. Vakolatxona yuridik shaxs boʻlmaganligi sababli, ish beruvchi sifatida tashkil etuvchi xorijiy tijorat tashkiloti chiqadi. Mehnat shartnomalari tashkil etuvchi tashkilot va oʻzbek xodim oʻrtasida tuziladi va xodim hamda Vakolatxona Boshligʻi tomonidan imzolanadi (Boshliqning ishga olish vakolatlari Vakolatxona toʻgʻrisidagi Nizom va ishonchnomada ham koʻrsatilgan boʻlishi kerak). Shartnomada ish joyi Oʻzbekistondagi vakolatxona ekanligi koʻrsatilishi shart va shartnoma muddati vakolatxonaning qolgan akkreditatsiya muddatidan oshmasligi kerak.",
      },
      { type: "h2" as const, text: "Hujjatlarni qonuniylashtirish" },
      {
        type: "p" as const,
        text: "1961 yil 5 oktyabrdagi Gaaga Konvensiyasiga qoʻshilgan mamlakatlardan kelgan hujjatlar toʻliq konsullik qonuniylashtirishi oʻrniga apostilni talab qiladi. Konvensiyada ishtirok etmagan mamlakatlar uchun tashkil etuvchi tashkilotning hujjatlari tashkil etilgan mamlakatdagi Oʻzbekiston konsullik vakolatxonasida qonuniylashtirilishi (yoki, bunday vakolatxona boʻlmasa, ushbu mamlakatning tashqi ishlar vazirligi orqali va keyin Oʻzbekiston Tashqi ishlar vazirligining Konsullik boʻlimida) kerak. MDH mamlakatlari hujjatlari qonuniylashtirishdan butunlay ozod qilingan.",
      },
      { type: "h2" as const, text: "Advizen qanday yordam bera oladi" },
      {
        type: "p" as const,
        text: "Oʻzbekistonda vakolatxona ochish hujjatlarni qonuniylashtirish talablarini hal etish, mos Vakolatxona Nizomini ishlab chiqish, akkreditatsiya muddatlarini boshqarish va akkreditatsiyadan keyingi majburiyatlarni bajarishni oʻz ichiga oladi. Advizen jamoasi xorijiy kompaniyalarga har bir bosqichda yordam beradi — hujjatlarni tayyorlash va tarjima koordinatsiyasidan tortib, soliq roʻyxatidan oʻtish va doimiy ITSV muvofiqligigacha.",
      },
    ],
      faq: [
      {
        question: "Oʻzbekistondagi vakolatxonaning huquqiy maqomi qanday?",
        answer: "Vakolatxona yuridik shaxs emas va tijorat faoliyati yuritishi mumkin emas — yagona istisno aviakompaniyalar vakolatxonalaridir. U mustaqil soliq toʻlovchi emas; soliq majburiyatlari Soliq kodeksi va amaldagi xalqaro shartnomalar bilan tartibga solinadi. Vakolatxona tashkil etuvchi tashkilotning Oʻzbekiston hududidagi manfaatlarini ifodalash va himoya qilish uchun mavjud boʻlib, VM 410-sonli Qarori asosida ITSV akkreditatsiya guvohnomasini berganidan boshlab mavjud boʻladi.",
      },
      {
        question: "Oʻzbekistonda vakolatxonani akkreditatsiya qilish qancha turadi?",
        answer: "Davlat boji asosiy hisob-kitob qiymatining 48 baravarini tashkil etadi (joriy kursda taxminan 1 500 AQSh dollari), guvohnoma berilishidan oldin ITSV hisobiga toʻlanadi. ITSV arizani koʻrib chiqib 10 ish kuni ichida qaror chiqaradi; guvohnoma toʻlovdan 5 kun ichida beriladi. Akkreditatsiya 1 yildan 3 yilgacha muddatga berilishi mumkin; birlamchi guvohnoma bir yilga beriladi.",
      },
      {
        question: "Oʻzbekistonda vakolatxonani akkreditatsiya qilish uchun qanday hujjatlar talab etiladi?",
        answer: "Talab qilinadigan hujjatlar: firma blankasidagi yozma ariza; taʼsis hujjatlari (ustav va taʼsis shartnomasi) notarial tasdiqlangan tarjima bilan apostillangan yoki qonuniylashtirilgan; tashkil etilgan mamlakatdagi roʻyxatdan oʻtganlik dalili; Vakolatxona Boshligʻi nomiga ishonchnoma; Vakolatxona toʻgʻrisidagi Nizom (tasdiqlangan va muhrlangan); ofis binosi egasidan kafolat xati. MDH mamlakatlari hujjatlari uchun faqat notarial tasdiqlangan nusxalar talab etiladi — qonuniylashtirish shart emas. Barcha hujjatlar topshirishdan oldingi 6 oy ichida berilgan boʻlishi shart.",
      },
      {
        question: "Oʻzbekistondagi vakolatxonaning doimiy majburiyatlari qanday?",
        answer: "Akkreditatsiya guvohnomasini olganidan 10 kun ichida: ITSVni pochta manzili haqida yozma xabardor qilish; ofis joylashgan joydagi soliq organlarida roʻyxatdan oʻtish; soliq roʻyxatidan oʻtganligini tasdiqlovchi maʼlumotnomani ITSVga taqdim etish. Vakolatxona Boshligʻi har yili ITSVga belgilangan shaklda faoliyat hisobotini taqdim etishi shart. Xodimlar tarkibidagi oʻzgarishlar haqida ITSVni oʻz vaqtida xabardor qilish va uzoq muddatli faoliyat uchun har 3 yilda akkreditatsiyani yangilash ham zarur.",
      },
    ],
  },
};

export default article;
