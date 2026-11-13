import type { LocalizedArticle } from "../publications";

const article: Record<string, LocalizedArticle> = {
  en: {
    subtitle: "A practical guide to Uzbekistan's unified licensing, permitting, and notification framework under Law No. ZRU-701.",
    author: "Advizen Legal Practice",
    readTime: "12 min read",
    inShort: {
      figures: [
        { value: "ZRU-701", label: "Law of 14 July 2021 on licensing, permitting and notification procedures" },
        { value: "20 working days", label: "Standard deadline for the authority to issue or refuse a licence or permitting document" },
        { value: "10 days", label: "Longest suspension an authority can impose without a court order" },
        { value: "50% / 70%", label: "Share of a fine that, paid within 15 / 30 days together with an application for the missing authorisation, waives the rest (since 1 March 2026)" },
      ],
      points: [
        "Uzbekistan has three authorisation tracks: licences, permitting documents and notifications, and all applications are filed electronically through the License system (license.gov.uz) or EPAGU.",
        "If the authority neither issues nor refuses within the deadline, the applicant may start operating once the fee is paid through the License system, and cannot be held liable for operating without a licence.",
        "A licence or permitting document can be refused only on five grounds listed in the Law — incomplete documents, non-compliance with licensing requirements, a one-year ban on obtaining a licence, false or distorted information, or a well-founded negative conclusion of a required study, inspection or assessment; refusal for \"inexpediency\" is prohibited.",
        "Licences are generally valid indefinitely, except for a minimum 5-year term in sectors such as medical and pharmaceutical activities, mobile telecoms, oil and gas extraction, and lottery and online gambling.",
        "Since 14 August 2026, a company may start a licensable activity designated by the Cabinet of Ministers free of charge by notifying the authority, and operate for up to three months without a licence while it obtains one.",
        "Since 1 March 2026, foreign companies apply through their registered permanent establishment, and only the organisation — not its officials — is fined for licensing, permitting and notification violations.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Uzbekistan consolidated its rules on business authorisation into a single Law No. ZRU-701 dated 14 July 2021 \"On Licensing, Permitting and Notification Procedures\". The law establishes three distinct tracks — licensing, permitting documents, and notifications — and moves the entire process onto a unified electronic platform called the \"License\" system (license.gov.uz).",
      },
      { type: "h2" as const, text: "Three tracks at a glance" },
      {
        type: "ul" as const,
        items: [
          "Licensing: required for activities where unrestricted operation could harm public health, safety, or the environment. The full list is in Appendix 1 of the Law.",
          "Permitting documents: a lighter authorisation for activities listed in Appendix 2. These also require advance approval but are subject to simpler conditions.",
          "Notifications: the most flexible track. You notify the relevant authority before starting — no approval is needed. Activities requiring notifications are listed in Appendix 3.",
        ],
      },
      { type: "h2" as const, text: "Types of licences" },
      {
        type: "p" as const,
        text: "The law draws a clear line between two licence categories:",
      },
      {
        type: "ul" as const,
        items: [
          "Standard (typovye) licences — issued to any applicant who meets uniform conditions. These are the norm for most regulated activities.",
          "Individual licences — issued on special terms and grant exclusive rights. They are limited in number, by territory or object, and are typically awarded through a tender. Broadcast spectrum allocation is a typical example.",
        ],
      },
      {
        type: "p" as const,
        text: "Each licence covers one type of activity (though sub-types are possible). Licences are valid indefinitely as a rule. The exception: a minimum 5-year term applies to medical and pharmaceutical activities, narcotics-related operations, mobile telecoms, oil and gas extraction, lottery and online gambling operations, and a handful of other sensitive sectors.",
      },
      { type: "h2" as const, text: "How to apply" },
      {
        type: "p" as const,
        text: "All applications — for licences, permitting documents, and notifications — are filed electronically through the License system or the Unified Portal of Interactive Government Services (EPAGU), signed with a digital signature. The portal is available 24/7 including weekends. State fees and processing charges are set out in each activity's passport and must be paid before the application is forwarded to the competent authority.",
      },
      {
        type: "ul" as const,
        items: [
          "Legal entities provide their taxpayer identification number (INN).",
          "Individuals provide full name, identity document details, or personal identification number (PINFL).",
          "All applicants specify the type (and sub-type) of activity and attach documents confirming that licensing conditions are met.",
        ],
      },
      {
        type: "p" as const,
        text: "The competent authority must issue or refuse the licence or permitting document within 20 working days of the application date, unless the Cabinet of Ministers has set a longer period for a particular activity. Its decision must be posted in the License system within one day, and the applicant notified within one working hour of that posting. If the authority neither issues nor refuses within the deadline, the applicant may start operating once the fee has been paid through the License system. The licence is then issued, the applicant cannot be held liable for operating without a licence, and responsibility for the missed deadline rests with the authority.",
      },
      { type: "h2" as const, text: "Grounds for refusal, suspension and revocation" },
      { type: "h3" as const, text: "Refusal" },
      {
        type: "p" as const,
        text: "A licence or permitting document may only be refused on five grounds, listed exhaustively in Article 29 of the Law: incomplete documents; non-compliance with licensing requirements and conditions; a one-year ban on obtaining a licence imposed under law or by a court decision (added from 17 February 2024 by Law ZRU-878); false or distorted information; or a well-founded negative conclusion of the studies, inspections or assessments required for the activity. Refusal on any other basis — including \"inexpediency\" — is prohibited. Where deficiencies in the application can be fixed, the authority notifies the applicant within one working day and sets a correction period of up to 30 working days, during which the review is suspended. If the licence is refused, the refusal notice must state the reasons and the legal provisions relied on, and give the applicant at least 10 working days to cure the deficiencies; once they are cured, the authority decides within 5 working days, with no new fee charged and no new grounds for refusal.",
      },
      { type: "h3" as const, text: "Suspension" },
      {
        type: "p" as const,
        text: "The competent authority may suspend a licence for up to 10 days where violations are identified. Suspension beyond 10 days (up to 6 months) requires a court order. Once the violations are remedied, the authority must lift the suspension within 3 working days of receiving confirmation.",
      },
      { type: "h3" as const, text: "Revocation (annulment)" },
      {
        type: "ul" as const,
        items: [
          "Voluntary application by the holder.",
          "Liquidation or reorganisation of the legal entity (cancellation is automatic since 1 March 2026 under Law ZRU-1099), or death of the individual.",
          "Non-payment of fees within the required period.",
          "Failure to remedy the grounds for suspension within the prescribed time.",
          "Repeated (twice or more within a year) or single serious breach of licensing conditions.",
          "Use of forged documents.",
        ],
      },
      { type: "h2" as const, text: "Notification procedure" },
      {
        type: "p" as const,
        text: "For notification-track activities, no advance approval is required — the business simply files a notification and can begin operating. The notification is auto-accepted if all conditions are met and a confirmation is issued instantly. A fee of up to 50% of the base calculation value (BCV) is charged for most notification filings, with retail alcohol sales being one of the exceptions.",
      },
      {
        type: "p" as const,
        text: "The authority can reject a notification only in five specific circumstances: false information; non-payment of the fee; non-confirmation of compliance with requirements; a current suspension order; or a court-imposed prohibition. The authority may suspend notified activities for up to 10 working days where violations are found; court involvement is required for longer periods.",
      },
      { type: "h2" as const, text: "Branches and representative offices" },
      {
        type: "p" as const,
        text: "Branches and representative offices of a legal entity do not need separate licences or permitting documents. Instead, their addresses are added to the parent entity's existing licence through an amendment filed with the competent authority. For entities that already have branches, the addition is handled through a notification to the authority via the License system or EPAGU.",
      },
      { type: "h2" as const, text: "Can a permanent establishment apply?" },
      {
        type: "p" as const,
        text: "A Permanent Establishment (PE) is a tax status — not a legal entity — and therefore has no standing as an independent civil-law subject. Previously, the Law named only individuals and legal entities as applicants, and practice on PEs was inconsistent. Since 1 March 2026, under amendments made by Law ZRU-1099 of 27 November 2025, foreign non-resident legal entities apply for licences and permitting documents and file notifications through their permanent establishment registered in Uzbekistan. A PE is not required for one-off foreign-trade operations or for transit cargo permits.",
      },
      { type: "h2" as const, text: "Liability for violations" },
      {
        type: "p" as const,
        text: "Individuals face administrative liability under Articles 165, 176³ and 241⁵ of the Administrative Responsibility Code, and criminal liability under Articles 190 and 192⁵ of the Criminal Code for operating without a licence, permitting document, or notification. Since 1 March 2026, under Presidential Decree UP-214 of 14 November 2025, officials of legal entities are no longer separately held administratively liable for licensing, permitting or notification violations — only the organisation itself is fined.",
      },
      {
        type: "p" as const,
        text: "Legal entities are subject to fines (set out in Appendix 4 of the Law) for: operating without required authorisation; using forged documents; or providing false information. The competent authority issues the fine decision within 5 working days of detecting the violation. Since 1 March 2026 (amendments made by Law ZRU-1099 of 27 November 2025), an offender who pays 50% of the fine within 15 days or 70% within 30 days, and applies for the required licence or permitting document or files the required notification, has the rest of the fine waived. Unpaid fines are referred to court within 5 working days.",
      },
      { type: "h2" as const, text: "What changed in 2026" },
      {
        type: "p" as const,
        text: "Several amendments that took effect in 2026 change how the framework works in practice:",
      },
      {
        type: "ul" as const,
        items: [
          "Entry into business without a licence. Article 28¹ of the Law, added by Law ZRU-1164 (August 2026) and in force from 14 August 2026, lets a company start a licensable activity free of charge by notifying the competent authority through the License system or my.gov.uz. The regime lasts three months, during which the company cannot be held liable for operating without a licence; by the end of that period it must obtain the licence or stop the activity. Which activities qualify is decided by the Cabinet of Ministers, so check that your activity is covered before relying on this route.",
          "Voluntary preliminary assessment. From 1 March 2026, under Presidential Decree UP-214 of 14 November 2025, an applicant can ask through the License system for its premises, equipment and staff to be checked against the licensing requirements before filing; results are provided within 20 days.",
          "\"Business in 15 minutes\". From 1 January 2026 (UP-214), a licence application can be ordered together with the state registration of a new company.",
          "Automatic data updates. From 1 January 2026 (UP-214), changes to the holder's name, address or legal form are reflected in its licence automatically and free of charge.",
          "Other amendments by Law ZRU-1099 (from 1 March 2026): a licence is cancelled automatically on liquidation or reorganisation of the holder, and installation and servicing of automatic fire suppression and fire alarm systems moved from the notification track to licensing.",
          "New and excluded sectors. Islamic banking was added to the licensed activities by Law ZRU-1126 of 27 March 2026 (in force from 29 June 2026), with licences issued by the Central Bank. The Tashkent International Financial Centre has its own licensing regime that operates outside Law ZRU-701 (Law ZRU-1158, in force from 25 July 2026).",
        ],
      },
      { type: "h2" as const, text: "How Advizen can help" },
      {
        type: "p" as const,
        text: "Navigating Uzbekistan's licensing and permitting landscape requires knowing which track applies to your activity, what conditions must be met, and how to respond if the authority pushes back. Advizen's legal team assists clients at every stage — from identifying the correct authorisation path and preparing application packages, to managing suspensions, amendments, and regulatory disputes.",
      },
    ],
    faq: [
      {
        question: "What are the three authorisation tracks for businesses in Uzbekistan?",
        answer: "Law No. ZRU-701 establishes three tracks: (1) Licensing — required for activities that could harm public health, safety, or the environment without restriction, listed in Appendix 1; (2) Permitting documents — a lighter authorisation for Appendix 2 activities, requiring advance approval under simpler conditions; (3) Notifications — the most flexible track, where you notify the relevant authority before starting with no approval needed, covering activities in Appendix 3. All applications are filed electronically via the License system (license.gov.uz) or the EPAGU portal with a digital signature.",
      },
      {
        question: "How long does it take to obtain a licence or permitting document in Uzbekistan?",
        answer: "The competent authority must issue or refuse the licence or permitting document within 20 working days of the application date, unless the Cabinet of Ministers has set a longer period for the activity. If the authority neither issues nor refuses within the deadline, the applicant may start operating once the fee is paid through the License system; the licence is then issued and the applicant cannot be held liable for operating without one. Where documents are deficient, the applicant has up to 30 working days to remedy them, and the review is suspended meanwhile. If an application is refused, the applicant is given at least 10 working days to cure the deficiencies, and the authority then decides within 5 working days. The authority's decision is posted in the License system within one day, and the applicant is notified within one working hour of that posting.",
      },
      {
        question: "On what grounds can a business licence be refused in Uzbekistan?",
        answer: "Article 29 of Law No. ZRU-701 lists five grounds, and the list is closed: incomplete documents; non-compliance with licensing requirements and conditions; a one-year ban on obtaining a licence imposed under law or by a court decision (added from 17 February 2024 by Law ZRU-878); false or distorted information; or a well-founded negative conclusion of the studies, inspections or assessments required for the activity. Refusal on any other basis — including \"inexpediency\" — is prohibited by law. Where documents are deficient, the applicant has up to 30 working days to remedy them, and the review is suspended meanwhile. If the licence is refused, the refusal must state the reasons and legal provisions and give the applicant at least 10 working days to cure the deficiencies; after the cure, the authority decides within 5 working days, with no new fee and no new grounds for refusal.",
      },
      {
        question: "What are the penalties for operating without a licence in Uzbekistan?",
        answer: "Individuals face administrative liability under Articles 165, 176³ and 241⁵ of the Administrative Responsibility Code, and criminal liability under Articles 190 and 192⁵ of the Criminal Code. Since 1 March 2026 (Presidential Decree UP-214), officials of legal entities are no longer separately held administratively liable for licensing, permitting or notification violations; only the organisation is fined. Legal entities are subject to fines set out in Appendix 4 of the Law. An offender who pays 50% of the fine within 15 days or 70% within 30 days, and applies for the required licence or permitting document or files the required notification, has the rest of the fine waived. Unpaid fines are referred to court within 5 working days.",
      },
      {
        question: "Can a company start a licensable activity before obtaining the licence?",
        answer: "Since 14 August 2026, yes, for activities designated by the Cabinet of Ministers. Under Article 28¹ of Law No. ZRU-701, added by Law ZRU-1164, a company may start such an activity free of charge by notifying the competent authority through the License system or my.gov.uz. The regime lasts three months, during which the company cannot be held liable for operating without a licence. By the end of the three months it must obtain the licence or stop the activity. Check whether your activity is covered by the Cabinet of Ministers' decision before relying on this route.",
      },
    ],
  },
  ru: {
    subtitle: "Практическое руководство по единой системе лицензирования, разрешительных документов и уведомлений в Узбекистане согласно Закону № ЗРУ-701.",
    author: "Юридическая практика Advizen",
    readTime: "12 мин чтения",
    inShort: {
      figures: [
        { value: "ЗРУ-701", label: "Закон от 14 июля 2021 года о лицензировании, разрешительных документах и уведомительном порядке" },
        { value: "20 рабочих дней", label: "Общий срок выдачи или отказа в выдаче лицензии или разрешительного документа" },
        { value: "10 дней", label: "Максимальный срок приостановления лицензии органом без решения суда" },
        { value: "50% / 70%", label: "Доля штрафа, при уплате которой в течение 15 / 30 дней с одновременной подачей заявки на недостающую лицензию остаток списывается (с 1 марта 2026 года)" },
      ],
      points: [
        "В Узбекистане три трека авторизации: лицензии, разрешительные документы и уведомления; все заявки подаются электронно через систему «Лицензия» (license.gov.uz) или ЕПАГУ.",
        "Если орган в срок не выдал документ и не отказал в его выдаче, заявитель вправе начать деятельность после уплаты сбора через систему «Лицензия» и не может быть привлечён к ответственности за деятельность без лицензии.",
        "В выдаче лицензии или разрешительного документа можно отказать только по пяти основаниям, перечисленным в Законе: неполнота документов, несоответствие лицензионным требованиям, годичный запрет на получение лицензии, недостоверные или искажённые сведения либо обоснованное отрицательное заключение обязательного исследования, проверки или оценки; отказ по мотивам «нецелесообразности» запрещён.",
        "Лицензии, как правило, бессрочны, но для ряда сфер — медицинской и фармацевтической деятельности, мобильной связи, добычи нефти и газа, лотерей и онлайн-гемблинга — установлен минимальный 5-летний срок.",
        "С 14 августа 2026 года компания может бесплатно начать определённый Кабинетом Министров лицензируемый вид деятельности, уведомив орган, и работать без лицензии до трёх месяцев, пока получает её.",
        "С 1 марта 2026 года иностранные компании подают заявки через зарегистрированное постоянное учреждение, а за нарушения в сфере лицензирования, разрешительных процедур и уведомлений штрафуется только организация — не её должностные лица.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Узбекистан консолидировал правила бизнес-авторизации в единый Закон № ЗРУ-701 от 14 июля 2021 года «О лицензировании, разрешительных документах и уведомительном порядке». Закон устанавливает три самостоятельных трека — лицензирование, разрешительные документы и уведомления — и переводит весь процесс на единую электронную платформу «Лицензия» (license.gov.uz).",
      },
      { type: "h2" as const, text: "Три трека в сравнении" },
      {
        type: "ul" as const,
        items: [
          "Лицензирование: обязательно для видов деятельности, при осуществлении которых без ограничений может быть нанесён вред здоровью населения, безопасности или окружающей среде. Полный перечень приведён в Приложении 1 к Закону.",
          "Разрешительные документы: более лёгкая форма авторизации для видов деятельности, перечисленных в Приложении 2. Они также требуют предварительного одобрения, но в упрощённом порядке.",
          "Уведомления: наиболее гибкий трек. Субъект уведомляет соответствующий орган до начала деятельности — одобрение не требуется. Виды деятельности, требующие уведомления, перечислены в Приложении 3.",
        ],
      },
      { type: "h2" as const, text: "Виды лицензий" },
      {
        type: "p" as const,
        text: "Закон проводит чёткую границу между двумя категориями лицензий:",
      },
      {
        type: "ul" as const,
        items: [
          "Типовые лицензии — выдаются любому заявителю, соответствующему единым условиям. Это норма для большинства регулируемых видов деятельности.",
          "Индивидуальные лицензии — выдаются на особых условиях и предоставляют исключительные права. Они ограничены по количеству, территории или объекту и, как правило, присваиваются по тендеру. Типичный пример — распределение частотного спектра для вещания.",
        ],
      },
      {
        type: "p" as const,
        text: "Каждая лицензия охватывает один вид деятельности (при этом допускаются подвиды). По общему правилу лицензии действуют бессрочно. Исключение: минимальный 5-летний срок применяется к медицинской и фармацевтической деятельности, операциям, связанным с наркотиками, мобильной связи, добыче нефти и газа, лотерейным и онлайн-игорным операциям, а также ряду других чувствительных секторов.",
      },
      { type: "h2" as const, text: "Порядок подачи заявки" },
      {
        type: "p" as const,
        text: "Все заявки — на лицензии, разрешительные документы и уведомления — подаются в электронном виде через систему «Лицензия» или Единый портал интерактивных государственных услуг (ЕПАГУ) и подписываются электронной цифровой подписью. Портал работает круглосуточно, включая выходные дни. Государственные пошлины и сборы за обработку указаны в паспорте каждого вида деятельности и должны быть уплачены до направления заявки в компетентный орган.",
      },
      {
        type: "ul" as const,
        items: [
          "Юридические лица указывают идентификационный номер налогоплательщика (ИНН).",
          "Физические лица указывают полное имя, реквизиты удостоверяющего документа или персональный идентификационный номер (ПИНФЛ).",
          "Все заявители указывают вид (и подвид) деятельности и прилагают документы, подтверждающие соответствие лицензионным условиям.",
        ],
      },
      {
        type: "p" as const,
        text: "Компетентный орган обязан выдать или отказать в выдаче лицензии или разрешительного документа в течение 20 рабочих дней с даты подачи заявки, если Кабинет Министров не установил для конкретного вида деятельности более длительный срок. Решение должно быть размещено в системе «Лицензия» в течение одного дня, а заявитель должен быть уведомлён в течение одного рабочего часа с момента такого размещения. Если в установленный срок орган не выдал лицензию и не отказал в её выдаче, заявитель вправе начать деятельность после уплаты сбора через систему «Лицензия». Лицензия в этом случае выдаётся, заявитель не может быть привлечён к ответственности за деятельность без лицензии, а ответственность за нарушение срока несёт орган.",
      },
      { type: "h2" as const, text: "Основания для отказа, приостановления и отзыва" },
      { type: "h3" as const, text: "Отказ" },
      {
        type: "p" as const,
        text: "В выдаче лицензии или разрешительного документа может быть отказано только по пяти основаниям, исчерпывающе перечисленным в статье 29 Закона: неполный пакет документов; несоответствие лицензионным требованиям и условиям; запрет на получение лицензии в течение одного года, установленный законом или решением суда (основание добавлено с 17 февраля 2024 года Законом № ЗРУ-878); ложные или искажённые сведения; обоснованное отрицательное заключение по результатам обязательных исследований, проверок или оценок. Отказ по иным основаниям — в том числе по соображениям «нецелесообразности» — запрещён. Если недостатки заявки устранимы, орган в течение одного рабочего дня уведомляет заявителя и устанавливает срок для их устранения не более 30 рабочих дней; на это время рассмотрение приостанавливается. В уведомлении об отказе в выдаче лицензии должны быть указаны причины и нормы законодательства, а также срок не менее 10 рабочих дней для устранения недостатков; после их устранения орган принимает решение в течение 5 рабочих дней без взимания нового сбора и без новых оснований для отказа.",
      },
      { type: "h3" as const, text: "Приостановление" },
      {
        type: "p" as const,
        text: "Компетентный орган вправе приостановить действие лицензии на срок до 10 дней при выявлении нарушений. Приостановление на срок свыше 10 дней (до 6 месяцев) требует судебного решения. После устранения нарушений орган обязан снять приостановление в течение 3 рабочих дней с момента получения подтверждения.",
      },
      { type: "h3" as const, text: "Отзыв (аннулирование)" },
      {
        type: "ul" as const,
        items: [
          "Добровольное заявление держателя лицензии.",
          "Ликвидация или реорганизация юридического лица (с 1 марта 2026 года лицензия аннулируется автоматически согласно Закону № ЗРУ-1099) либо смерть физического лица.",
          "Неуплата сборов в установленный срок.",
          "Неустранение оснований для приостановления в предписанный срок.",
          "Повторное (дважды и более в течение года) или единичное грубое нарушение лицензионных условий.",
          "Использование поддельных документов.",
        ],
      },
      { type: "h2" as const, text: "Уведомительный порядок" },
      {
        type: "p" as const,
        text: "Для видов деятельности, осуществляемых в уведомительном порядке, предварительное одобрение не требуется — субъект просто подаёт уведомление и может приступить к работе. Уведомление принимается автоматически при соблюдении всех условий, а подтверждение выдаётся мгновенно. За большинство уведомлений взимается сбор в размере до 50% базовой расчётной величины (БРВ); одним из исключений является розничная продажа алкоголя.",
      },
      {
        type: "p" as const,
        text: "Орган вправе отклонить уведомление лишь в пяти конкретных случаях: ложные сведения; неуплата сбора; неподтверждение соответствия требованиям; действующее предписание о приостановлении; судебный запрет. Орган может приостановить уведомленную деятельность на срок до 10 рабочих дней при выявлении нарушений; для более длительных периодов требуется участие суда.",
      },
      { type: "h2" as const, text: "Филиалы и представительства" },
      {
        type: "p" as const,
        text: "Филиалы и представительства юридического лица не нуждаются в отдельных лицензиях или разрешительных документах. Вместо этого их адреса добавляются к действующей лицензии материнской организации посредством изменения, подаваемого в компетентный орган. Для организаций, у которых уже имеются филиалы, добавление осуществляется путём уведомления органа через систему «Лицензия» или ЕПАГУ.",
      },
      { type: "h2" as const, text: "Может ли постоянное учреждение подать заявку?" },
      {
        type: "p" as const,
        text: "Постоянное учреждение (ПУ) является налоговым статусом, а не юридическим лицом, и поэтому не обладает статусом самостоятельного субъекта гражданского права. Ранее Закон называл в качестве заявителей только физических и юридических лиц, а практика в отношении ПУ была непоследовательной. С 1 марта 2026 года, согласно изменениям, внесённым Законом № ЗРУ-1099 от 27 ноября 2025 года, иностранные юридические лица — нерезиденты обращаются за лицензиями и разрешительными документами и направляют уведомления через своё постоянное учреждение, зарегистрированное в Узбекистане. Для разовых внешнеторговых операций и разрешений на транзитную перевозку грузов постоянное учреждение не требуется.",
      },
      { type: "h2" as const, text: "Ответственность за нарушения" },
      {
        type: "p" as const,
        text: "Физические лица несут административную ответственность по статьям 165, 176³ и 241⁵ Кодекса об административной ответственности и уголовную ответственность по статьям 190 и 192⁵ Уголовного кодекса за осуществление деятельности без лицензии, разрешительного документа или уведомления. С 1 марта 2026 года в соответствии с Указом Президента № УП-214 от 14 ноября 2025 года должностные лица юридических лиц больше не несут отдельной административной ответственности за нарушения в сфере лицензирования, разрешительных процедур и уведомлений — штрафуется только сама организация.",
      },
      {
        type: "p" as const,
        text: "Юридические лица подлежат штрафам (установленным в Приложении 4 к Закону) за: осуществление деятельности без необходимой авторизации; использование поддельных документов; предоставление ложных сведений. Компетентный орган выносит решение о наложении штрафа в течение 5 рабочих дней с момента обнаружения нарушения. С 1 марта 2026 года (изменения, внесённые Законом № ЗРУ-1099 от 27 ноября 2025 года) нарушитель, уплативший 50% штрафа в течение 15 дней или 70% в течение 30 дней и подавший заявку на получение требуемой лицензии или разрешительного документа либо направивший требуемое уведомление, освобождается от уплаты оставшейся части штрафа. Неуплаченные штрафы передаются на рассмотрение суда в течение 5 рабочих дней.",
      },
      { type: "h2" as const, text: "Что изменилось в 2026 году" },
      {
        type: "p" as const,
        text: "Ряд изменений, вступивших в силу в 2026 году, меняет работу системы на практике:",
      },
      {
        type: "ul" as const,
        items: [
          "Начало деятельности без лицензии. Статья 28¹ Закона, введённая Законом № ЗРУ-1164 (август 2026 года) и действующая с 14 августа 2026 года, позволяет компании бесплатно начать лицензируемый вид деятельности, уведомив компетентный орган через систему «Лицензия» или my.gov.uz. Режим действует три месяца, в течение которых компания не может быть привлечена к ответственности за деятельность без лицензии; к концу этого срока она должна получить лицензию или прекратить деятельность. Виды деятельности, к которым применяется этот режим, определяет Кабинет Министров, поэтому перед использованием этого пути следует убедиться, что ваш вид деятельности к ним относится.",
          "Добровольная предварительная оценка. С 1 марта 2026 года в соответствии с Указом Президента № УП-214 от 14 ноября 2025 года заявитель может до подачи заявки запросить в системе «Лицензия» проверку помещений, оборудования и персонала на соответствие лицензионным требованиям; результаты предоставляются в течение 20 дней.",
          "«Бизнес за 15 минут». С 1 января 2026 года (УП-214) заявку на лицензию можно оформить одновременно с государственной регистрацией новой компании.",
          "Автоматическое обновление данных. С 1 января 2026 года (УП-214) изменения наименования, адреса или организационно-правовой формы владельца лицензии отражаются в лицензии автоматически и бесплатно.",
          "Другие изменения, внесённые Законом № ЗРУ-1099 (с 1 марта 2026 года): лицензия аннулируется автоматически при ликвидации или реорганизации владельца, а монтаж и обслуживание автоматических систем пожаротушения и пожарной сигнализации переведены из уведомительного порядка в лицензируемые виды деятельности.",
          "Новые и исключённые сферы. Исламская банковская деятельность включена в перечень лицензируемых видов деятельности Законом № ЗРУ-1126 от 27 марта 2026 года (вступил в силу 29 июня 2026 года); лицензию выдаёт Центральный банк. Ташкентский международный финансовый центр имеет собственный режим лицензирования вне рамок Закона № ЗРУ-701 (Закон № ЗРУ-1158, действует с 25 июля 2026 года).",
        ],
      },
      { type: "h2" as const, text: "Чем может помочь Advizen" },
      {
        type: "p" as const,
        text: "Ориентирование в системе лицензирования и разрешительной деятельности Узбекистана требует знания того, какой трек применяется к вашему виду деятельности, какие условия должны быть выполнены и как реагировать в случае противодействия со стороны органа. Юридическая команда Advizen сопровождает клиентов на каждом этапе — от определения правильного пути авторизации и подготовки пакетов документов до управления приостановлениями, внесения изменений и урегулирования регуляторных споров.",
      },
    ],
    faq: [
      {
        question: "Какие три трека авторизации предусмотрены для бизнеса в Узбекистане?",
        answer: "Закон № ЗРУ-701 устанавливает три трека: (1) Лицензирование — обязательно для видов деятельности, способных нанести вред здоровью, безопасности или окружающей среде без ограничений (Приложение 1); (2) Разрешительные документы — более лёгкая форма авторизации для видов деятельности из Приложения 2, требующая предварительного одобрения в упрощённом порядке; (3) Уведомления — наиболее гибкий трек: уведомите орган до начала деятельности — одобрение не требуется (Приложение 3). Все заявки подаются в электронном виде через систему «Лицензия» (license.gov.uz) или портал ЕПАГУ с электронной подписью.",
      },
      {
        question: "Сколько времени занимает получение лицензии или разрешительного документа в Узбекистане?",
        answer: "Компетентный орган обязан выдать или отказать в выдаче лицензии или разрешительного документа в течение 20 рабочих дней с даты подачи заявки, если Кабинет Министров не установил для данного вида деятельности более длительный срок. Если в этот срок орган не выдал документ и не отказал в его выдаче, заявитель вправе начать деятельность после уплаты сбора через систему «Лицензия»; лицензия затем выдаётся, и заявитель не может быть привлечён к ответственности за деятельность без лицензии. В случае неполноты документов заявителю предоставляется до 30 рабочих дней для устранения недостатков, и рассмотрение на это время приостанавливается. При отказе заявителю предоставляется не менее 10 рабочих дней для устранения недостатков, после чего орган принимает решение в течение 5 рабочих дней. Решение размещается в системе «Лицензия» в течение одного дня, а заявитель уведомляется в течение одного рабочего часа.",
      },
      {
        question: "По каким основаниям может быть отказано в выдаче лицензии в Узбекистане?",
        answer: "Статья 29 Закона № ЗРУ-701 содержит исчерпывающий перечень из пяти оснований: неполный пакет документов; несоответствие лицензионным требованиям и условиям; запрет на получение лицензии в течение одного года, установленный законом или решением суда (добавлен с 17 февраля 2024 года Законом № ЗРУ-878); ложные или искажённые сведения; обоснованное отрицательное заключение по результатам обязательных исследований, проверок или оценок. Отказ по иным основаниям — в том числе по соображениям «нецелесообразности» — законом запрещён. В случае неполноты документов заявителю предоставляется до 30 рабочих дней для их устранения, и рассмотрение на это время приостанавливается. В уведомлении об отказе указываются причины и нормы законодательства, а заявителю предоставляется не менее 10 рабочих дней для устранения недостатков; после их устранения орган принимает решение в течение 5 рабочих дней без нового сбора и без новых оснований для отказа.",
      },
      {
        question: "Какова ответственность за осуществление деятельности без лицензии в Узбекистане?",
        answer: "Физические лица несут административную ответственность по статьям 165, 176³ и 241⁵ Кодекса об административной ответственности и уголовную ответственность по статьям 190 и 192⁵ Уголовного кодекса. С 1 марта 2026 года (Указ Президента № УП-214) должностные лица юридических лиц больше не несут отдельной административной ответственности за нарушения в сфере лицензирования, разрешительных процедур и уведомлений — штрафуется только организация. Юридические лица подлежат штрафам согласно Приложению 4 к Закону. Нарушитель, уплативший 50% штрафа в течение 15 дней или 70% в течение 30 дней и подавший заявку на требуемую лицензию или разрешительный документ либо направивший требуемое уведомление, освобождается от уплаты остатка штрафа. Неуплаченные штрафы передаются в суд в течение 5 рабочих дней.",
      },
      {
        question: "Можно ли начать лицензируемую деятельность до получения лицензии?",
        answer: "С 14 августа 2026 года — да, для видов деятельности, определённых Кабинетом Министров. Согласно статье 28¹ Закона № ЗРУ-701, введённой Законом № ЗРУ-1164, компания может бесплатно начать такую деятельность, уведомив компетентный орган через систему «Лицензия» или my.gov.uz. Режим действует три месяца, в течение которых компания не может быть привлечена к ответственности за деятельность без лицензии. К концу этого срока она должна получить лицензию или прекратить деятельность. Перед использованием этого пути проверьте, распространяется ли решение Кабинета Министров на ваш вид деятельности.",
      },
    ],
  },
  uz: {
    subtitle: "Oʻzbekistonda OʻRQ-701-sonli Qonun asosidagi yagona litsenziyalash, ruxsat berish va xabardor qilish tartibi boʻyicha amaliy qoʻllanma.",
    author: "Advizen yuridik amaliyoti",
    readTime: "12 daqiqa oʻqish",
    inShort: {
      figures: [
        { value: "OʻRQ-701", label: "Litsenziyalash, ruxsat berish va xabardor qilish tartibi toʻgʻrisidagi 2021-yil 14-iyuldagi Qonun" },
        { value: "20 ish kuni", label: "Litsenziya yoki ruxsat hujjatini berish yoki rad etish uchun umumiy muddat" },
        { value: "10 kun", label: "Organ sud qarorisiz litsenziyani toʻxtatib qoʻyishi mumkin boʻlgan eng uzoq muddat" },
        { value: "50% / 70%", label: "Jarimaning 15 / 30 kun ichida toʻlanadigan ulushi: bunda zarur litsenziyaga ariza berilsa, qolgan qismi undirilmaydi (2026-yil 1-martdan)" },
      ],
      points: [
        "Oʻzbekistonda uchta ruxsat yoʻnalishi bor: litsenziyalar, ruxsat hujjatlari va xabarnomalar; barcha arizalar «Litsenziya» tizimi (license.gov.uz) yoki EPAGU orqali elektron topshiriladi.",
        "Organ belgilangan muddatda hujjatni bermasa va rad ham etmasa, ariza beruvchi «Litsenziya» tizimi orqali yigʻimni toʻlagach faoliyatni boshlashi mumkin va litsenziyasiz faoliyat uchun javobgarlikka tortilmaydi.",
        "Litsenziya yoki ruxsat hujjati faqat Qonunda sanab oʻtilgan beshta asosda rad etilishi mumkin: hujjatlar toʻliq boʻlmaganda, litsenziya talablariga javob berilmaganda, litsenziya olishga bir yillik taqiq mavjud boʻlganda, maʼlumotlar soxta yoki buzib koʻrsatilganda yoki majburiy tadqiqot, tekshiruv yoki baholashning asosli salbiy xulosasi boʻlganda; «maqsadga muvofiq emaslik» sababli rad etish taqiqlanadi.",
        "Litsenziyalar odatda muddatsiz, biroq tibbiy va farmatsevtika faoliyati, mobil telekommunikatsiya, neft va gaz qazib olish, lotereya va onlayn qimor oʻyinlari kabi sohalarga kamida 5 yillik muddat qoʻllaniladi.",
        "2026-yil 14-avgustdan kompaniya Vazirlar Mahkamasi belgilagan litsenziyalanadigan faoliyatni organni xabardor qilib, bepul boshlashi va litsenziya olgunga qadar uch oygacha litsenziyasiz ishlashi mumkin.",
        "2026-yil 1-martdan xorijiy kompaniyalar roʻyxatdan oʻtgan doimiy muassasasi orqali murojaat qiladi, litsenziyalash, ruxsat berish va xabardor qilish sohasidagi qoidabuzarliklar uchun esa mansabdor shaxslar emas, faqat tashkilotning oʻzi jarimaga tortiladi.",
      ],
    },
    content: [
      {
        type: "p" as const,
        text: "Oʻzbekiston biznes-avtorizatsiya qoidalarini 2021-yil 14-iyuldagi «Litsenziyalash, ruxsat berish va xabardor qilish tartibi toʻgʻrisida»gi OʻRQ-701-sonli yagona Qonunda birlashtirdi. Qonun uchta alohida yoʻnalish — litsenziyalash, ruxsat hujjatlari va xabarnomalar — ni belgilab, butun jarayonni «Litsenziya» deb nomlangan yagona elektron platformaga (license.gov.uz) oʻtkazadi.",
      },
      { type: "h2" as const, text: "Uch yoʻnalishga umumiy nazar" },
      {
        type: "ul" as const,
        items: [
          "Litsenziyalash: cheklovlarsiz amalga oshirilishi aholining sogʻligʻiga, xavfsizligiga yoki atrof-muhitga zarar yetkazishi mumkin boʻlgan faoliyat turlari uchun majburiy. Toʻliq roʻyxat Qonunning 1-ilovasida keltirilgan.",
          "Ruxsat hujjatlari: 2-ilovada keltirilgan faoliyat turlari uchun yengilroq avtorizatsiya shakli. Ular ham oldindan tasdiqlashni talab qiladi, lekin oddiyroq shartlarga boʻysunadi.",
          "Xabarnomalar: eng moslashuvchan yoʻnalish. Faoliyatni boshlamasdan oldin tegishli organ xabardor qilinadi — tasdiqlash talab etilmaydi. Xabarnoma talab qiladigan faoliyat turlari 3-ilovada keltirilgan.",
        ],
      },
      { type: "h2" as const, text: "Litsenziya turlari" },
      {
        type: "p" as const,
        text: "Qonun ikki litsenziya toifasi oʻrtasida aniq chegara oʻrnatadi:",
      },
      {
        type: "ul" as const,
        items: [
          "Namunaviy litsenziyalar — yagona shartlarga javob beradigan istalgan arizachiga beriladi. Bu koʻpgina tartibga solinadigan faoliyat turlari uchun meʼyordir.",
          "Individual litsenziyalar — maxsus shartlarda beriladi va eksklyuziv huquqlar beradi. Ular soni, hududi yoki obyekti jihatidan cheklangan boʻlib, odatda tender orqali beriladi. Efir spektrini taqsimlash bunga tipik misol.",
        ],
      },
      {
        type: "p" as const,
        text: "Har bir litsenziya bir turdagi faoliyatni qamrab oladi (bunda kichik turlar ham mumkin). Qoidaga koʻra litsenziyalar muddatsiz amal qiladi. Istisno: tibbiy va farmatsevtika faoliyati, giyohvand moddalarga oid operatsiyalar, mobil telekommunikatsiya, neft va gaz qazib olish, lotereya va onlayn qimor oʻyinlari operatsiyalari hamda boshqa bir qator sezgir sohalarga kamida 5 yillik muddat qoʻllaniladi.",
      },
      { type: "h2" as const, text: "Ariza berish tartibi" },
      {
        type: "p" as const,
        text: "Barcha arizalar — litsenziyalar, ruxsat hujjatlari va xabarnomalar uchun — «Litsenziya» tizimi yoki Interaktiv davlat xizmatlari yagona portali (EPAGU) orqali elektron shaklda, elektron raqamli imzo bilan taqdim etiladi. Portal haftaning etti kuni, kechayu kunduz ishlaydi. Davlat yigʻimlari va koʻrib chiqish xarajatlari har bir faoliyat turining pasportida belgilanib, ariza vakolatli organga joʻnatilgunga qadar toʻlanishi shart.",
      },
      {
        type: "ul" as const,
        items: [
          "Yuridik shaxslar soliq toʻlovchisining identifikatsiya raqamini (STIR) koʻrsatadilar.",
          "Jismoniy shaxslar toʻliq ism-sharif, shaxsni tasdiqlovchi hujjat maʼlumotlari yoki shaxsiy identifikatsiya raqamini (JShShIR) koʻrsatadilar.",
          "Barcha arizachilar faoliyat turini (va kichik turini) koʻrsatadilar hamda litsenziya shartlariga muvofiqligini tasdiqlovchi hujjatlarni ilova qiladilar.",
        ],
      },
      {
        type: "p" as const,
        text: "Vakolatli organ ariza sanasidan boshlab 20 ish kuni ichida litsenziya yoki ruxsat hujjatini berishi yoki berishdan bosh tortishi shart, agar Vazirlar Mahkamasi muayyan faoliyat turi uchun uzoqroq muddat belgilamagan boʻlsa. Qaror bir kun ichida «Litsenziya» tizimida joylashtirilishi, ariza beruvchi esa ushbu joylashtiruvdan bir ish soati ichida xabardor qilinishi kerak. Belgilangan muddatda organ litsenziyani bermasa va berishni rad ham etmasa, ariza beruvchi «Litsenziya» tizimi orqali yigʻimni toʻlagan holda faoliyatni boshlash huquqiga ega. Bunda litsenziya beriladi, ariza beruvchi litsenziyasiz faoliyat uchun javobgarlikka tortilishi mumkin emas, muddatni buzganlik uchun javobgarlik esa organ zimmasida boʻladi.",
      },
      { type: "h2" as const, text: "Rad etish, toʻxtatib qoʻyish va bekor qilish asoslari" },
      { type: "h3" as const, text: "Rad etish" },
      {
        type: "p" as const,
        text: "Litsenziya yoki ruxsat hujjati faqat Qonunning 29-moddasida tugal sanab oʻtilgan beshta asosda rad etilishi mumkin: toʻliq boʻlmagan hujjatlar; litsenziya talablari va shartlariga mos kelmaslik; qonun yoki sud qaroriga koʻra bir yil davomida litsenziya olish taqiqlanganligi (2024-yil 17-fevraldan OʻRQ-878-sonli Qonun bilan qoʻshilgan); notoʻgʻri yoki buzib koʻrsatilgan maʼlumotlar; majburiy tadqiqotlar, tekshiruvlar yoki baholashlarning asosli salbiy xulosasi. Boshqa asoslarda — jumladan «maqsadga muvofiq emaslik» sababli — rad etish taqiqlanadi. Agar arizadagi kamchiliklarni bartaraf etish mumkin boʻlsa, organ bir ish kuni ichida ariza beruvchini xabardor qiladi va ularni bartaraf etish uchun 30 ish kunidan oshmaydigan muddat belgilaydi; bu davrda koʻrib chiqish toʻxtatib turiladi. Litsenziya berish rad etilganda, rad etish toʻgʻrisidagi xabarnomada sabablar va qonunchilik normalari koʻrsatilishi hamda kamchiliklarni bartaraf etish uchun kamida 10 ish kuni muddat berilishi kerak; ular bartaraf etilgach, organ 5 ish kuni ichida yangi yigʻim undirmasdan va rad etishning yangi asoslarini koʻrsatmasdan qaror qabul qiladi.",
      },
      { type: "h3" as const, text: "Toʻxtatib qoʻyish" },
      {
        type: "p" as const,
        text: "Vakolatli organ buzilishlar aniqlanganda litsenziyani 10 kungacha toʻxtatib qoʻyishi mumkin. 10 kundan ortiq (6 oygacha) toʻxtatib qoʻyish uchun sud qarori talab etiladi. Buzilishlar bartaraf etilgandan soʻng organ tasdiqlash olinganidan 3 ish kuni ichida toʻxtatib qoʻyishni bekor qilishi shart.",
      },
      { type: "h3" as const, text: "Bekor qilish (annullash)" },
      {
        type: "ul" as const,
        items: [
          "Litsenziya egasining ixtiyoriy arizasi.",
          "Yuridik shaxsning tugatilishi yoki qayta tashkil etilishi (2026-yil 1-martdan OʻRQ-1099-sonli Qonunga koʻra litsenziya avtomatik ravishda bekor qilinadi) yoki jismoniy shaxsning vafoti.",
          "Belgilangan muddatda yigʻimlar toʻlanmasligi.",
          "Belgilangan muddatda toʻxtatib qoʻyish asoslarini bartaraf etmaslik.",
          "Litsenziya shartlarining takroriy (bir yil ichida ikki va undan koʻp marta) yoki bir martalik jiddiy buzilishi.",
          "Soxta hujjatlardan foydalanish.",
        ],
      },
      { type: "h2" as const, text: "Xabardor qilish tartibi" },
      {
        type: "p" as const,
        text: "Xabardor qilish tartibidagi faoliyat turlari uchun oldindan tasdiqlash talab etilmaydi — tadbirkor shunchaki xabarnoma topshiradi va faoliyatni boshlashi mumkin. Barcha shartlar bajarilgan taqdirda xabarnoma avtomatik qabul qilinadi va darhol tasdiqlash beriladi. Koʻpgina xabarnomalar uchun bazaviy hisoblash miqdorining (BHM) 50 foizigacha yigʻim undiriladi; chakana spirtli ichimliklarni sotish bundan mustasnodir.",
      },
      {
        type: "p" as const,
        text: "Organ xabarnomani faqat beshta aniq holatda rad etishi mumkin: notoʻgʻri maʼlumotlar; yigʻim toʻlanmaganligi; talablarga muvofiqlik tasdiqlanmaganligi; amaldagi toʻxtatib qoʻyish koʻrsatmasi; yoki sud taqiqi. Organ buzilishlar aniqlangan taqdirda xabardor qilingan faoliyatni 10 ish kunigacha toʻxtatib qoʻyishi mumkin; uzoqroq muddatlar uchun sud ishtiroki talab etiladi.",
      },
      { type: "h2" as const, text: "Filiallar va vakolatxonalar" },
      {
        type: "p" as const,
        text: "Yuridik shaxsning filiallari va vakolatxonalari alohida litsenziya yoki ruxsat hujjatlariga muhtoj emas. Buning oʻrniga ularning manzillari vakolatli organga topshiriladigan oʻzgartirish orqali ona tashkilotning mavjud litsenziyasiga qoʻshiladi. Allaqachon filiallari mavjud tashkilotlar uchun qoʻshish «Litsenziya» tizimi yoki EPAGU orqali organga xabarnoma yuborish yoʻli bilan amalga oshiriladi.",
      },
      { type: "h2" as const, text: "Doimiy muassasa ariza bera oladimi?" },
      {
        type: "p" as const,
        text: "Doimiy muassasa (DM) — bu yuridik shaxs emas, balki soliq maqomi boʻlib, fuqarolik huquqining mustaqil subyekti sifatida huquqiy layoqatga ega emas. Ilgari Qonun ariza beruvchi sifatida faqat jismoniy va yuridik shaxslarni nazarda tutar, DMga nisbatan amaliyot esa bir xil emas edi. 2026-yil 1-martdan, 2025-yil 27-noyabrdagi OʻRQ-1099-sonli Qonun bilan kiritilgan oʻzgartirishlarga koʻra, norezident xorijiy yuridik shaxslar litsenziya va ruxsat hujjatlari olish uchun Oʻzbekistonda roʻyxatdan oʻtgan doimiy muassasasi orqali murojaat qiladi va xabarnomalarni ham shu orqali yuboradi. Bir martalik tashqi savdo operatsiyalari va tranzit yuklarni tashishga ruxsatnomalar uchun doimiy muassasa talab etilmaydi.",
      },
      { type: "h2" as const, text: "Buzilishlar uchun javobgarlik" },
      {
        type: "p" as const,
        text: "Jismoniy shaxslar litsenziya, ruxsat hujjati yoki xabarnomasisiz faoliyat yuritganligi uchun Maʼmuriy javobgarlik toʻgʻrisidagi kodeksning 165, 176³ va 241⁵-moddalari boʻyicha maʼmuriy va Jinoyat kodeksining 190 va 192⁵-moddalari boʻyicha jinoiy javobgarlikka tortiladi. 2026-yil 1-martdan Prezidentning 2025-yil 14-noyabrdagi PF-214-son Farmoniga muvofiq yuridik shaxslarning mansabdor shaxslari litsenziyalash, ruxsat berish va xabardor qilish tartibini buzganlik uchun alohida maʼmuriy javobgarlikka tortilmaydi — faqat tashkilotning oʻzi jarimaga tortiladi.",
      },
      {
        type: "p" as const,
        text: "Yuridik shaxslar quyidagi hollarda jarima (Qonunning 4-ilovasida belgilangan) toʻlashga majbur: zarur avtorizatsiyasiz faoliyat yuritish; soxta hujjatlardan foydalanish; yoki notoʻgʻri maʼlumotlar taqdim etish. Vakolatli organ buzilish aniqlangandan 5 ish kuni ichida jarima toʻgʻrisida qaror chiqaradi. 2026-yil 1-martdan (2025-yil 27-noyabrdagi OʻRQ-1099-sonli Qonun bilan kiritilgan oʻzgartirishlar) huquqbuzar jarimaning 50%ini 15 kun ichida yoki 70%ini 30 kun ichida toʻlasa hamda zarur litsenziya yoki ruxsat hujjatiga ariza bersa yoki zarur xabarnomani yuborsa, jarimaning qolgan qismi undirilmaydi. Toʻlanmagan jarimalar 5 ish kuni ichida sudga oʻtkaziladi.",
      },
      { type: "h2" as const, text: "2026-yilda nima oʻzgardi" },
      {
        type: "p" as const,
        text: "2026-yilda kuchga kirgan bir qator oʻzgartirishlar tizimning amaldagi ishlash tartibini oʻzgartirdi:",
      },
      {
        type: "ul" as const,
        items: [
          "Litsenziyasiz tadbirkorlikka kirish. OʻRQ-1164-sonli Qonun (2026-yil avgust) bilan qoʻshilgan va 2026-yil 14-avgustdan kuchga kirgan Qonunning 28¹-moddasi kompaniyaga «Litsenziya» tizimi yoki my.gov.uz orqali vakolatli organni xabardor qilib, litsenziyalanadigan faoliyatni bepul boshlash imkonini beradi. Bu tartib uch oy amal qiladi va shu davrda kompaniya litsenziyasiz faoliyat uchun javobgarlikka tortilmaydi; muddat oxirigacha u litsenziya olishi yoki faoliyatni toʻxtatishi kerak. Qaysi faoliyat turlariga bu tartib qoʻllanilishini Vazirlar Mahkamasi belgilaydi, shu sababli unga tayanishdan oldin faoliyatingiz shular jumlasiga kirishini tekshiring.",
          "Ixtiyoriy dastlabki baholash. 2026-yil 1-martdan Prezidentning 2025-yil 14-noyabrdagi PF-214-son Farmoniga muvofiq ariza beruvchi ariza topshirishdan oldin «Litsenziya» tizimida binolar, uskunalar va xodimlarning litsenziya talablariga muvofiqligini tekshirishni soʻrashi mumkin; natijalar 20 kun ichida taqdim etiladi.",
          "«Biznes 15 daqiqada». 2026-yil 1-yanvardan (PF-214) litsenziyaga ariza yangi kompaniyani davlat roʻyxatidan oʻtkazish bilan birga rasmiylashtirilishi mumkin.",
          "Maʼlumotlarning avtomatik yangilanishi. 2026-yil 1-yanvardan (PF-214) litsenziya egasining nomi, manzili yoki tashkiliy-huquqiy shakli oʻzgarganda bu oʻzgarishlar litsenziyada avtomatik va bepul aks ettiriladi.",
          "OʻRQ-1099-sonli Qonun bilan kiritilgan boshqa oʻzgartirishlar (2026-yil 1-martdan): litsenziya egasi tugatilganda yoki qayta tashkil etilganda litsenziya avtomatik ravishda bekor qilinadi, avtomatik oʻt oʻchirish va yongʻin signalizatsiyasi tizimlarini oʻrnatish hamda ularga xizmat koʻrsatish xabardor qilish tartibidan litsenziyalanadigan faoliyatga oʻtkazildi.",
          "Yangi va istisno etilgan sohalar. Islom bankchiligi 2026-yil 27-martdagi OʻRQ-1126-sonli Qonun bilan (2026-yil 29-iyundan kuchga kirgan) litsenziyalanadigan faoliyat turlariga qoʻshildi; litsenziyani Markaziy bank beradi. Toshkent xalqaro moliya markazi OʻRQ-701-sonli Qonundan tashqarida oʻz litsenziyalash tartibiga ega (OʻRQ-1158-sonli Qonun, 2026-yil 25-iyuldan).",
        ],
      },
      { type: "h2" as const, text: "Advizen qanday yordam bera oladi" },
      {
        type: "p" as const,
        text: "Oʻzbekistonning litsenziyalash va ruxsat berish tizimida moʻljal olish faoliyatingizga qaysi yoʻnalish qoʻllanilishini, qanday shartlar bajarilishi kerakligini va organ qarshi chiqqan taqdirda qanday javob berishni bilishni talab etadi. Advizen yuridik jamoasi mijozlarga har bir bosqichda yordam beradi — toʻgʻri avtorizatsiya yoʻlini aniqlash va ariza paketlarini tayyorlashdan tortib, toʻxtatib qoʻyishlarni boshqarish, oʻzgartirish kiritish va tartibga soluvchi nizolarni hal etishgacha.",
      },
    ],
    faq: [
      {
        question: "Oʻzbekistondagi biznes uchun qanday uchta avtorizatsiya yoʻnalishi mavjud?",
        answer: "OʻRQ-701-sonli Qonun uchta yoʻnalishni belgilaydi: (1) Litsenziyalash — cheklovlarsiz amalga oshirilishi sogʻliq, xavfsizlik yoki atrof-muhitga zarar yetkazishi mumkin boʻlgan faoliyat turlari uchun majburiy (1-ilova); (2) Ruxsat hujjatlari — 2-ilovadagi faoliyat turlari uchun yengilroq avtorizatsiya shakli, oldindan tasdiqlashni talab qiladi; (3) Xabarnomalar — eng moslashuvchan yoʻnalish: faoliyatni boshlamasdan oldin organni xabardor qiling — tasdiqlash talab etilmaydi (3-ilova). Barcha arizalar «Litsenziya» tizimi (license.gov.uz) yoki EPAGU portali orqali elektron raqamli imzo bilan taqdim etiladi.",
      },
      {
        question: "Oʻzbekistonda litsenziya yoki ruxsat hujjatini olish qancha vaqt oladi?",
        answer: "Vakolatli organ ariza sanasidan boshlab 20 ish kuni ichida litsenziya yoki ruxsat hujjatini berishi yoki berishdan bosh tortishi shart, agar Vazirlar Mahkamasi ushbu faoliyat turi uchun uzoqroq muddat belgilamagan boʻlsa. Organ bu muddatda hujjatni bermasa va rad ham etmasa, ariza beruvchi «Litsenziya» tizimi orqali yigʻimni toʻlagach faoliyatni boshlashi mumkin; shundan soʻng litsenziya beriladi va ariza beruvchi litsenziyasiz faoliyat uchun javobgarlikka tortilmaydi. Hujjatlar toʻliq boʻlmagan taqdirda ariza beruvchiga ularni bartaraf qilish uchun 30 ish kunigacha vaqt beriladi va bu davrda koʻrib chiqish toʻxtatib turiladi. Rad etilgan taqdirda ariza beruvchiga kamchiliklarni bartaraf etish uchun kamida 10 ish kuni beriladi, shundan soʻng organ 5 ish kuni ichida qaror qabul qiladi. Qaror bir kun ichida «Litsenziya» tizimida joylashtiriladi, ariza beruvchi esa bir ish soati ichida xabardor qilinadi.",
      },
      {
        question: "Oʻzbekistonda litsenziya berishdan qanday asoslarda bosh tortilishi mumkin?",
        answer: "OʻRQ-701-sonli Qonunning 29-moddasida beshta asos tugal sanab oʻtilgan: toʻliq boʻlmagan hujjatlar; litsenziya talablari va shartlariga mos kelmaslik; qonun yoki sud qaroriga koʻra bir yil davomida litsenziya olish taqiqlanganligi (2024-yil 17-fevraldan OʻRQ-878-sonli Qonun bilan qoʻshilgan); notoʻgʻri yoki buzib koʻrsatilgan maʼlumotlar; majburiy tadqiqotlar, tekshiruvlar yoki baholashlarning asosli salbiy xulosasi. Boshqa asoslarda — jumladan «maqsadga muvofiq emaslik» sababli — rad etish qonun bilan taqiqlanadi. Hujjatlar toʻliq boʻlmagan taqdirda ariza beruvchiga ularni bartaraf qilish uchun 30 ish kunigacha vaqt beriladi va bu davrda koʻrib chiqish toʻxtatib turiladi. Rad etish toʻgʻrisidagi xabarnomada sabablar va qonunchilik normalari koʻrsatiladi hamda kamchiliklarni bartaraf etish uchun kamida 10 ish kuni muddat beriladi; ular bartaraf etilgach, organ 5 ish kuni ichida yangi yigʻim undirmasdan va yangi asoslar koʻrsatmasdan qaror qabul qiladi.",
      },
      {
        question: "Oʻzbekistonda litsenziyasiz faoliyat yuritganlik uchun qanday jarimalar qoʻllaniladi?",
        answer: "Jismoniy shaxslar Maʼmuriy javobgarlik toʻgʻrisidagi kodeksning 165, 176³ va 241⁵-moddalari boʻyicha maʼmuriy va Jinoyat kodeksining 190 va 192⁵-moddalari boʻyicha jinoiy javobgarlikka tortiladi. 2026-yil 1-martdan (Prezidentning PF-214-son Farmoni) yuridik shaxslarning mansabdor shaxslari litsenziyalash, ruxsat berish va xabardor qilish tartibini buzganlik uchun alohida maʼmuriy javobgarlikka tortilmaydi — faqat tashkilot jarimaga tortiladi. Yuridik shaxslar Qonunning 4-ilovasida belgilangan jarimalar toʻlaydi. Huquqbuzar jarimaning 50%ini 15 kun ichida yoki 70%ini 30 kun ichida toʻlasa hamda zarur litsenziya yoki ruxsat hujjatiga ariza bersa yoki zarur xabarnomani yuborsa, jarimaning qolgan qismi undirilmaydi. Toʻlanmagan jarimalar 5 ish kuni ichida sudga oʻtkaziladi.",
      },
      {
        question: "Litsenziya olishdan oldin litsenziyalanadigan faoliyatni boshlash mumkinmi?",
        answer: "2026-yil 14-avgustdan — ha, Vazirlar Mahkamasi belgilagan faoliyat turlari uchun. OʻRQ-1164-sonli Qonun bilan qoʻshilgan OʻRQ-701-sonli Qonunning 28¹-moddasiga koʻra kompaniya «Litsenziya» tizimi yoki my.gov.uz orqali vakolatli organni xabardor qilib, bunday faoliyatni bepul boshlashi mumkin. Bu tartib uch oy amal qiladi va shu davrda kompaniya litsenziyasiz faoliyat uchun javobgarlikka tortilmaydi. Uch oy oxirigacha u litsenziya olishi yoki faoliyatni toʻxtatishi kerak. Bu yoʻlga tayanishdan oldin Vazirlar Mahkamasining qarori faoliyatingizga tatbiq etilishini tekshiring.",
      },
    ],
  },
};

export default article;
