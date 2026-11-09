import type { LocalizedArticle } from "../publications";

const article: Record<string, LocalizedArticle> = {
  en: {
    subtitle: "Navigate the legal framework and mandatory registration processes for successful franchise agreements in Uzbekistan.",
    author: "Advizen Legal Practice",
    readTime: "7 min read",
    inShort: {
      figures: [
        { value: "20%", label: "Income tax the licensee withholds from each royalty paid to a non-resident licensor without a permanent establishment" },
        { value: "1 business day", label: "Typical time for a Public Service Center to register the agreement when documents are complete" },
        { value: "1/3 BCA", label: "State fee for registration, one third of the basic estimated amount" },
        { value: "10%", label: "Discount on the state fee for online applications" },
      ],
      points: [
        "A franchise agreement in Uzbekistan is governed mainly by the Civil Code and must be in writing and registered; an unregistered agreement is invalid.",
        "Only commercial organisations and registered individual entrepreneurs can be parties to a franchise agreement.",
        "The part of the agreement that transfers intellectual property rights, such as trademarks, must also be registered with the Intellectual Property Department of the Ministry of Justice.",
        "For a foreign licensor the agreement is a foreign trade contract, so royalties can be paid in foreign currency, and the 20% withholding rate may be reduced or removed by a double taxation agreement.",
      ],
    },
    content: [
      {
        type: "p",
        text: "Franchising offers a powerful avenue for business growth and market entry in Uzbekistan. However, to leverage this model effectively, a clear understanding of its legal foundation and mandatory registration requirements is crucial. Operating without proper adherence can lead to significant penalties.",
      },
      { type: "h2", text: "Legal framework and core definition" },
      {
        type: "p",
        text: "Franchise agreements in Uzbekistan are primarily governed by the Civil Code of the Republic of Uzbekistan, alongside laws on Trademarks, Competition, and Trade Secrets. Legally, a franchise agreement is defined as a comprehensive business licence agreement under which the Licensor grants the Licensee a 'complex licence' — a set of exclusive rights for a fee. This package typically includes the right to use the Licensor's brand name, trademarks, commercial secrets, and other intellectual property in the Licensee's business operations.",
      },
      { type: "h2", text: "Key requirements for your franchise agreement" },
      {
        type: "ul",
        items: [
          "Written Form and Mandatory Registration: All franchise agreements and their significant amendments must be in writing and legally registered. Failure to do so renders the agreement invalid.",
          "Eligible Parties: Only commercial organisations and registered individual entrepreneurs can act as parties to a franchise agreement.",
          "Clear Subject Matter: The agreement must precisely define the exclusive rights being granted, the scope of use, and any specified territory or field of activity.",
          "Term: Agreements can be for a fixed period or indefinite.",
          "Remuneration: Payment can be structured in various forms — fixed fees, periodic royalties, revenue deductions, or mark-ups on goods.",
          "Information & Training: The Licensor is obliged to provide the Licensee with all necessary technical and commercial documentation, information, and training for proper operation.",
        ],
      },
      { type: "h2", text: "Understanding registration procedures" },
      {
        type: "ul",
        items: [
          "Public Service Centers (PSC): The primary registration of the agreement itself, including any amendments, is handled here — typically within one business day if documents are complete. A state fee (1/3 of the basic estimated amount) applies, with a 10% discount for online applications.",
          "Intellectual Property Department: The portion of the agreement transferring intellectual property rights (e.g., trademarks) must be registered with the Intellectual Property Department of the Ministry of Justice. Non-compliance here can invalidate the IP transfer or even the entire agreement.",
          "Unified System of Foreign Trade Operations: If your franchise agreement involves international trade (import/export), it also requires registration in this system.",
        ],
      },
      { type: "h2", text: "International aspects, IP protection, and liabilities" },
      {
        type: "ul",
        items: [
          "Governing Law: Parties to an international franchise agreement can choose the applicable law, though Uzbek law provides default rules if no choice is made.",
          "Intellectual Property: Beyond registration, protecting commercial secrets through adherence to the Law 'On Commercial Secrets' is vital, with penalties for disclosure.",
          "Competition: The law allows certain exclusive clauses (e.g., non-compete for licensee) but invalidates others (e.g., licensor dictating licensee's prices).",
          "Liability: The Licensor bears subsidiary liability for the quality of goods/services provided by the Licensee. For products manufactured by the Licensor, there is joint and several liability for certain claims.",
        ],
      },
      { type: "h2", text: "Currency and taxation considerations" },
      {
        type: "p",
        text: "For foreign Licensors, the agreement is treated as a foreign trade contract. While domestic payments are in Uzbek Soum, foreign currency payments are permitted under foreign trade contracts, and there are generally no significant restrictions on fund repatriation.",
      },
      {
        type: "p",
        text: "From a tax perspective, if royalties are paid to a non-resident Licensor without a permanent establishment in Uzbekistan, the Licensee is required to withhold income tax at a 20% rate from each payment. This rate may be reduced or exempted by international double taxation agreements.",
      },
    ],
    faq: [
      {
        question: "Must franchise agreements be registered in Uzbekistan?",
        answer: "Yes. All franchise agreements and significant amendments must be registered at two authorities: the Public Service Center (PSC), which handles primary registration typically within one business day, and the Intellectual Property Department of the Ministry of Justice, which registers the intellectual property rights transfer (e.g., trademarks). An unregistered agreement is legally invalid.",
      },
      {
        question: "What is the withholding tax rate on royalties paid to a foreign franchisor in Uzbekistan?",
        answer: "The Uzbek Licensee must withhold income tax at 20% from each royalty payment to a non-resident Licensor that has no permanent establishment in Uzbekistan. This rate may be reduced or fully exempted under an applicable international double taxation treaty between Uzbekistan and the Licensor's country of residence.",
      },
      {
        question: "Can a foreign franchisor repatriate royalty payments from Uzbekistan?",
        answer: "Yes. Franchise agreements with foreign Licensors are treated as foreign trade contracts. Payments can be made in foreign currency under such contracts, and there are generally no significant restrictions on repatriation of royalty funds from Uzbekistan.",
      },
      {
        question: "Who can be a party to a franchise agreement in Uzbekistan?",
        answer: "Only commercial organisations and registered individual entrepreneurs can be parties to a franchise agreement in Uzbekistan. Natural persons who are not registered as individual entrepreneurs cannot enter into franchise agreements under Uzbek law.",
      },
    ],
  },
  ru: {
    subtitle: "Разбираемся в правовой базе и обязательных процедурах регистрации для успешных франчайзинговых соглашений в Узбекистане.",
    author: "Юридическая практика Advizen",
    readTime: "7 мин чтения",
    inShort: {
      figures: [
        { value: "20%", label: "Налог на доход, который Лицензиат удерживает с каждой выплаты роялти нерезиденту без постоянного представительства" },
        { value: "1 рабочий день", label: "Обычный срок регистрации договора в ЦГУ при полном комплекте документов" },
        { value: "1/3 БРВ", label: "Государственная пошлина за регистрацию — треть базовой расчётной величины" },
        { value: "10%", label: "Скидка на пошлину при подаче заявки онлайн" },
      ],
      points: [
        "Договор франчайзинга в Узбекистане регулируется прежде всего Гражданским кодексом и должен быть оформлен письменно и зарегистрирован; незарегистрированный договор недействителен.",
        "Сторонами договора франчайзинга могут быть только коммерческие организации и зарегистрированные индивидуальные предприниматели.",
        "Часть договора, передающая права на интеллектуальную собственность (например, товарные знаки), дополнительно регистрируется в Управлении по интеллектуальной собственности при Министерстве юстиции.",
        "Для иностранного Лицензиара договор является внешнеторговым контрактом, поэтому роялти можно платить в иностранной валюте, а ставка удержания 20% может быть снижена или отменена соглашением об избежании двойного налогообложения.",
      ],
    },
    content: [
      {
        type: "p",
        text: "Франчайзинг — мощный инструмент для роста бизнеса и выхода на рынок Узбекистана. Однако, чтобы эффективно использовать эту модель, необходимо чёткое понимание её правовой основы и обязательных требований к регистрации. Работа без надлежащего соблюдения может привести к существенным штрафам.",
      },
      { type: "h2", text: "Правовая база и базовое определение" },
      {
        type: "p",
        text: "Договоры франчайзинга в Узбекистане регулируются преимущественно Гражданским кодексом Республики Узбекистан, а также законами о товарных знаках, конкуренции и коммерческой тайне. Юридически договор франчайзинга определяется как комплексный договор о предоставлении лицензии на бизнес, по которому Лицензиар предоставляет Лицензиату «комплексную лицензию» — пакет исключительных прав за вознаграждение. Этот пакет обычно включает право использования фирменного наименования Лицензиара, товарных знаков, коммерческих секретов и другой интеллектуальной собственности в деятельности Лицензиата.",
      },
      { type: "h2", text: "Ключевые требования к договору франчайзинга" },
      {
        type: "ul",
        items: [
          "Письменная форма и обязательная регистрация: все договоры франчайзинга и их существенные изменения должны быть оформлены в письменной форме и юридически зарегистрированы. Несоблюдение этого правила влечёт недействительность договора.",
          "Допустимые стороны: сторонами договора франчайзинга могут быть только коммерческие организации и зарегистрированные индивидуальные предприниматели.",
          "Чёткий предмет: в договоре необходимо точно определить передаваемые исключительные права, объём использования, а также территорию или сферу деятельности, если таковые указаны.",
          "Срок: договоры могут быть заключены на определённый срок или бессрочно.",
          "Вознаграждение: оплата может быть структурирована по-разному — фиксированные платежи, периодические роялти, отчисления от выручки или наценки на товары.",
          "Информация и обучение: Лицензиар обязан предоставить Лицензиату всю необходимую техническую и коммерческую документацию, информацию и обучение для надлежащей деятельности.",
        ],
      },
      { type: "h2", text: "Процедуры регистрации" },
      {
        type: "ul",
        items: [
          "Центры государственных услуг (ЦГУ): здесь осуществляется первичная регистрация договора и любых его изменений — обычно в течение одного рабочего дня при полном комплекте документов. Уплачивается государственная пошлина (1/3 базовой расчётной величины), для онлайн-заявок предусмотрена скидка 10%.",
          "Управление по интеллектуальной собственности: часть договора, передающая права на интеллектуальную собственность (например, товарные знаки), подлежит регистрации в Управлении по интеллектуальной собственности при Министерстве юстиции. Несоблюдение этого требования может повлечь недействительность передачи прав или всего договора.",
          "Единая система внешнеторговых операций: если договор франчайзинга связан с международной торговлей (импорт/экспорт), он также подлежит регистрации в этой системе.",
        ],
      },
      { type: "h2", text: "Международные аспекты, защита ИС и ответственность" },
      {
        type: "ul",
        items: [
          "Применимое право: стороны международного франчайзингового договора могут выбрать применимое право, при этом узбекское право устанавливает правила по умолчанию, если выбор не сделан.",
          "Интеллектуальная собственность: помимо регистрации, важна защита коммерческой тайны в соответствии с Законом «О коммерческой тайне», предусматривающим санкции за разглашение.",
          "Конкуренция: закон допускает определённые исключительные положения (например, обязательство Лицензиата не конкурировать), но признаёт недействительными другие (например, диктование Лицензиаром цен Лицензиата).",
          "Ответственность: Лицензиар несёт субсидиарную ответственность за качество товаров/услуг, предоставляемых Лицензиатом. По товарам, изготовленным Лицензиаром, по определённым требованиям предусмотрена солидарная ответственность.",
        ],
      },
      { type: "h2", text: "Валютные и налоговые аспекты" },
      {
        type: "p",
        text: "Для иностранных Лицензиаров договор рассматривается как внешнеторговый контракт. Хотя внутренние расчёты осуществляются в узбекских сумах, по внешнеторговым контрактам допускается оплата в иностранной валюте, и существенных ограничений на репатриацию средств, как правило, нет.",
      },
      {
        type: "p",
        text: "С точки зрения налогообложения, если роялти выплачиваются нерезиденту-Лицензиару, не имеющему постоянного представительства в Узбекистане, Лицензиат обязан удерживать налог на доход по ставке 20% с каждой выплаты. Эта ставка может быть снижена или отменена международными соглашениями об избежании двойного налогообложения.",
      },
    ],
    faq: [
      {
        question: "Обязательна ли регистрация франчайзинговых договоров в Узбекистане?",
        answer: "Да. Все договоры франчайзинга и их существенные изменения подлежат регистрации в двух органах: в Центре государственных услуг (ЦГУ), где осуществляется первичная регистрация, как правило, в течение одного рабочего дня, и в Управлении по интеллектуальной собственности при Министерстве юстиции, которое регистрирует передачу прав на интеллектуальную собственность (например, товарные знаки). Незарегистрированный договор юридически недействителен.",
      },
      {
        question: "Какова ставка налога у источника на роялти, выплачиваемые иностранному франчайзеру в Узбекистане?",
        answer: "Узбекский Лицензиат обязан удерживать налог на доход по ставке 20% с каждой выплаты роялти нерезиденту-Лицензиару, не имеющему постоянного представительства в Узбекистане. Эта ставка может быть снижена или полностью освобождена в соответствии с применимым международным соглашением об избежании двойного налогообложения между Узбекистаном и страной резидентства Лицензиара.",
      },
      {
        question: "Может ли иностранный франчайзер репатриировать платежи роялти из Узбекистана?",
        answer: "Да. Договоры франчайзинга с иностранными Лицензиарами рассматриваются как внешнеторговые контракты. По таким договорам расчёты могут осуществляться в иностранной валюте, и существенных ограничений на репатриацию средств роялти из Узбекистана, как правило, нет.",
      },
      {
        question: "Кто может быть стороной договора франчайзинга в Узбекистане?",
        answer: "Сторонами договора франчайзинга в Узбекистане могут быть только коммерческие организации и зарегистрированные индивидуальные предприниматели. Физические лица, не зарегистрированные в качестве индивидуальных предпринимателей, не могут заключать договоры франчайзинга по узбекскому законодательству.",
      },
    ],
  },
  uz: {
    subtitle: "Oʻzbekistonda muvaffaqiyatli franchayzing shartnomalari uchun huquqiy bazani va majburiy roʻyxatga olish jarayonlarini bilib oling.",
    author: "Advizen yuridik amaliyoti",
    readTime: "7 daqiqalik oʻqish",
    inShort: {
      figures: [
        { value: "20%", label: "Doimiy vakolatxonasi boʻlmagan norezident Litsenziarga toʻlanadigan har bir royaltidan ushlab qolinadigan daromad soligʻi" },
        { value: "1 ish kuni", label: "Hujjatlar toʻliq boʻlsa, DXMda shartnomani roʻyxatga olishning odatiy muddati" },
        { value: "1/3 BHM", label: "Roʻyxatga olish uchun davlat boji — asosiy hisoblangan miqdorning uchdan biri" },
        { value: "10%", label: "Onlayn arizalar uchun davlat bojiga beriladigan chegirma" },
      ],
      points: [
        "Oʻzbekistonda franchayzing shartnomasi asosan Fuqarolik kodeksi bilan tartibga solinadi, yozma shaklda tuzilishi va roʻyxatga olinishi shart; roʻyxatga olinmagan shartnoma haqiqiy emas.",
        "Franchayzing shartnomasining tomonlari faqat tijorat tashkilotlari va roʻyxatga olingan yakka tartibdagi tadbirkorlar boʻlishi mumkin.",
        "Shartnomaning intellektual mulk huquqlarini (masalan, tovar belgilarini) oʻtkazadigan qismi Adliya vazirligi huzuridagi Intellektual mulk boshqarmasida ham roʻyxatga olinishi kerak.",
        "Chet ellik Litsenziar uchun shartnoma tashqi savdo shartnomasi hisoblanadi, shuning uchun royalti chet el valyutasida toʻlanishi mumkin, 20% stavka esa qoʻsh soliqqa tortishni bartaraf etish toʻgʻrisidagi shartnoma bilan kamaytirilishi yoki bekor qilinishi mumkin.",
      ],
    },
    content: [
      {
        type: "p",
        text: "Franchayzing Oʻzbekistonda biznesni rivojlantirish va bozorga kirish uchun kuchli vositadir. Biroq, bu modelni samarali qoʻllash uchun uning huquqiy asosi va majburiy roʻyxatga olish talablarini aniq tushunish zarur. Tegishli tartiblarga rioya qilmasdan ish olib borish katta jarimalarga olib kelishi mumkin.",
      },
      { type: "h2", text: "Huquqiy baza va asosiy taʼrif" },
      {
        type: "p",
        text: "Oʻzbekistondagi franchayzing shartnomalari asosan Oʻzbekiston Respublikasi Fuqarolik kodeksi, shuningdek, tovar belgilari, raqobat va tijorat siri toʻgʻrisidagi qonunlar bilan tartibga solinadi. Yuridik nuqtai nazardan franchayzing shartnomasi keng qamrovli biznes litsenziya shartnomasi sifatida belgilanadi, unga koʻra Litsenziar Litsenziatga toʻlov evaziga «kompleks litsenziya» — eksklyuziv huquqlar toʻplamini beradi. Bu paket odatda Litsenziarning firma nomi, tovar belgilari, tijorat sirlari va boshqa intellektual mulkidan Litsenziatning faoliyatida foydalanish huquqini oʻz ichiga oladi.",
      },
      { type: "h2", text: "Franchayzing shartnomasi uchun asosiy talablar" },
      {
        type: "ul",
        items: [
          "Yozma shakl va majburiy roʻyxatga olish: barcha franchayzing shartnomalari va ularga muhim oʻzgartirishlar yozma shaklda boʻlishi va yuridik roʻyxatga olinishi shart. Aks holda shartnoma haqiqiy emas hisoblanadi.",
          "Talab qilingan tomonlar: franchayzing shartnomasining tomonlari sifatida faqat tijorat tashkilotlari va roʻyxatga olingan yakka tartibdagi tadbirkorlar boʻlishi mumkin.",
          "Aniq predmet: shartnomada beriladigan eksklyuziv huquqlar, foydalanish koʻlami va belgilangan hudud yoki faoliyat sohasi aniq belgilanishi shart.",
          "Muddat: shartnomalar muayyan muddatga yoki muddatsiz tuzilishi mumkin.",
          "Toʻlov: toʻlov turli koʻrinishlarda — qatʼiy toʻlov, davriy royalti, daromaddan ushlovlar yoki tovarlarga ustama sifatida belgilanishi mumkin.",
          "Maʼlumot va oʻqitish: Litsenziar Litsenziatga toʻgʻri faoliyat uchun zarur boʻlgan barcha texnik va tijorat hujjatlari, maʼlumot va treningni taqdim etishi shart.",
        ],
      },
      { type: "h2", text: "Roʻxatga olish tartiblari" },
      {
        type: "ul",
        items: [
          "Davlat xizmatlari markazlari (DXM): shartnomaning va unga oʻzgartirishlarning birlamchi roʻyxatga olinishi shu yerda amalga oshiriladi — odatda hujjatlar toʻliq boʻlsa, bir ish kuni ichida. Davlat boji (asosiy hisoblangan miqdorning 1/3) toʻlanadi, onlayn arizalar uchun 10% chegirma berilgan.",
          "Intellektual mulk boshqarmasi: shartnomaning intellektual mulk huquqlarini (masalan, tovar belgilari) oʻtkazadigan qismi Adliya vazirligi huzuridagi Intellektual mulk boshqarmasida roʻyxatga olinishi kerak. Bu yerda talablarga rioya qilmaslik IM huquqini oʻtkazishni yoki butun shartnomani haqiqiy emas qilishi mumkin.",
          "Tashqi savdo operatsiyalarining yagona tizimi: agar franchayzing shartnomasi xalqaro savdo (import/eksport) bilan bogʻliq boʻlsa, u ham bu tizimda roʻyxatga olinishi kerak.",
        ],
      },
      { type: "h2", text: "Xalqaro jihatlar, IM himoyasi va javobgarlik" },
      {
        type: "ul",
        items: [
          "Qoʻllaniladigan huquq: xalqaro franchayzing shartnomasining tomonlari qoʻllaniladigan huquqni tanlashi mumkin, biroq tanlov amalga oshirilmasa, oʻzbek qonuni standart qoidalarni belgilaydi.",
          "Intellektual mulk: roʻyxatdan tashqari, «Tijorat siri toʻgʻrisida»gi qonunga rioya qilish orqali tijorat sirlarini himoya qilish muhim, ochib qoʻyganlik uchun jazolar koʻzda tutilgan.",
          "Raqobat: qonun muayyan eksklyuziv shartlarni (masalan, Litsenziatning raqobat qilmaslik majburiyati) qabul qiladi, lekin boshqalarni (masalan, Litsenziarning Litsenziat narxlarini belgilashi) haqiqiy emas deb tan oladi.",
          "Javobgarlik: Litsenziar Litsenziat tomonidan taqdim etilgan tovar/xizmatlar sifati uchun subsidiar javobgarlik tashiydi. Litsenziar tomonidan ishlab chiqarilgan mahsulotlar boʻyicha esa muayyan talablar uchun birgalikdagi javobgarlik mavjud.",
        ],
      },
      { type: "h2", text: "Valyuta va soliq jihatlari" },
      {
        type: "p",
        text: "Chet ellik Litsenziarlar uchun shartnoma tashqi savdo shartnomasi sifatida koʻriladi. Ichki toʻlovlar oʻzbek soʻmida amalga oshirilsa-da, tashqi savdo shartnomalari boʻyicha chet el valyutasidagi toʻlovlarga ruxsat etiladi va mablagʻlarni repatriatsiya qilishga sezilarli cheklovlar odatda yoʻq.",
      },
      {
        type: "p",
        text: "Soliq nuqtai nazaridan, agar royalti Oʻzbekistonda doimiy vakolatxonasi boʻlmagan norezident Litsenziarga toʻlansa, Litsenziat har bir toʻlovdan 20% stavkada daromad soligʻini ushlab qolishi shart. Bu stavka qoʻsh soliqqa tortishni bartaraf etish toʻgʻrisidagi xalqaro shartnomalar bilan kamaytirilishi yoki bekor qilinishi mumkin.",
      },
    ],
    faq: [
      {
        question: "Oʻzbekistonda franchayzing shartnomalari roʻyxatga olinishi shart bo'ladimi?",
        answer: "Ha. Barcha franchayzing shartnomalari va ularga muhim oʻzgartirishlar ikkita organda roʻyxatga olinishi kerak: birlamchi roʻyxatga olishni odatda bir ish kuni ichida amalga oshiradigan Davlat xizmatlari markazida (DXM) va intellektual mulk huquqlari oʻtkazilishini (masalan, tovar belgilari) roʻyxatga oladigan Adliya vazirligi huzuridagi Intellektual mulk boshqarmasida. Roʻxatga olinmagan shartnoma yuridik jihatdan haqiqiy emas hisoblanadi.",
      },
      {
        question: "Oʻzbekistonda chet ellik franchayzer foydasiga toʻlanadigan royaltilardan ushlab qolinadigan soliq stavkasi qancha?",
        answer: "Oʻzbekistonlik Litsenziat Oʻzbekistonda doimiy vakolatxonasi boʻlmagan norezident Litsenziarga har bir royalti toʻlovidan 20% stavkada daromad soligʻini ushlab qolishi shart. Bu stavka Oʻzbekiston va Litsenziar rezidentligi mamlakatining qoʻsh soliqqa tortishni bartaraf etish toʻgʻrisidagi xalqaro shartnomasi asosida kamaytirilishi yoki toʻliq bekor qilinishi mumkin.",
      },
      {
        question: "Chet ellik franchayzer Oʻzbekistondan royalti toʻlovlarini repatriatsiya qila oladimi?",
        answer: "Ha. Chet ellik Litsenziarlar bilan tuzilgan franchayzing shartnomalari tashqi savdo shartnomalari sifatida koʻriladi. Bunday shartnomalar boʻyicha toʻlovlar chet el valyutasida amalga oshirilishi mumkin va Oʻzbekistondan royalti mablagʻlarini repatriatsiya qilishga sezilarli cheklovlar odatda mavjud emas.",
      },
      {
        question: "Oʻzbekistonda franchayzing shartnomasining tomoni kim boʻlishi mumkin?",
        answer: "Oʻzbekistonda franchayzing shartnomasining tomonlari sifatida faqat tijorat tashkilotlari va roʻyxatga olingan yakka tartibdagi tadbirkorlar boʻlishi mumkin. Yakka tartibdagi tadbirkor sifatida roʻyxatga olinmagan jismoniy shaxslar oʻzbek qonunchiligiga muvofiq franchayzing shartnomalari tuzish huquqiga ega emas.",
      },
    ],
  },
};

export default article;
