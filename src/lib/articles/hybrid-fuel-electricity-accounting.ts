import type { LocalizedArticle } from "../publications";

/* Based on a real Advizen project for a company with a hybrid fleet. Client data is anonymised:
   no company name, plates, people or per-car figures. Example numbers are illustrative. */

const en: LocalizedArticle = {
  subtitle:
    "Why two norms over the full mileage double the consumption, how to check it with one formula, and what to put in the accounting policy so the tax authority accepts the write-off.",
  author: "Advizen Tax Practice",
  inShort: {
    figures: [
      { value: "×2", label: "How much the norm is inflated when both the fuel and the electricity norm are applied to the full mileage" },
      { value: "±5%", label: "Tolerance we suggest fixing in the accounting policy" },
      { value: "+45%", label: "Average fleet deviation in a real project before the data was cleaned. Almost all of it was input errors" },
      { value: "1", label: "Check formula instead of split norms and seasonal coefficients" },
    ],
    points: [
      "The fuel and electricity norms of a hybrid cannot be added up over the full mileage. Each was measured while driving on one source only.",
      "Mileage cannot be split into petrol and electric kilometres. No document supports such a split, and the energy from the engine is already counted through the fuel.",
      "Write off actual consumption based on documents. Use the norms only to check whether the energy covers the mileage.",
      "In the accounting policy, the norms must be called control indicators, not natural loss norms. The deduction and the VAT depend on it.",
    ],
  },
  content: [
    {
      type: "p",
      text: "More and more companies add hybrids to their fleets. In 2024, Uzbekistan imported 80,235 passenger cars, and 39,564 of them were electric cars and hybrids.",
    },
    {
      type: "p",
      text: "Accounting is left without rules. There are no state consumption norms for hybrids. Companies order norms from private laboratories and get two at once: one for petrol and one for electricity.",
    },
    {
      type: "p",
      text: "Then the questions start. How to write off petrol and electricity. How to tell that consumption is not inflated. What to tell the tax authority if there is a deviation.",
    },
    {
      type: "p",
      text: "This article is based on a real Advizen project for a company with a hybrid fleet. Client data is anonymised, and the figures in the examples are illustrative.",
    },

    { type: "h2", text: "Three types of hybrids" },
    {
      type: "ul",
      items: [
        "HEV, a regular hybrid. No plug. The battery charges from the engine and when braking. For accounting purposes, it is an ordinary petrol car.",
        "PHEV, a plug-in hybrid. It has a plug. The wheels are driven by the electric motor, the petrol engine or both. Example: BYD models with DM-i technology.",
        "EREV, an extended-range hybrid. Only the electric motor drives the wheels. The petrol engine works as a generator and charges the battery. Example: Li Auto.",
      ],
    },
    {
      type: "p",
      text: "The rest of this article is about PHEV and EREV. These are the cars with two energy sources and two norms.",
    },

    { type: "h2", text: "The main mistake: two norms over the full mileage" },
    {
      type: "p",
      text: "A laboratory measures each norm separately. The petrol norm while driving on petrol only. The electricity norm while driving on the battery only.",
    },
    {
      type: "p",
      text: "If both norms are applied to the full mileage, the norm doubles. The car physically cannot use that much energy.",
    },
    {
      type: "example",
      title: "How the norm doubles",
      meta: "Hybrid, 2,000 km in the city",
      rows: [
        { label: "Petrol at the norm for the full mileage", note: "2,000 km × 7.3 l / 100 km", value: "146 l" },
        { label: "Electricity at the norm for the full mileage", note: "2,000 km × 20.0 kWh / 100 km", value: "400 kWh" },
        { label: "This energy would cover", value: "4,000 km", kind: "sum" },
      ],
    },
    {
      type: "p",
      text: "Each of the two amounts would cover the whole trip on its own. Together they are enough for 4,000 km, while the car drove 2,000.",
    },

    { type: "h2", text: "Why mileage cannot be split into petrol and electric" },
    {
      type: "p",
      text: "The second common idea is to split the kilometres into “petrol” and “electric” ones and apply its own norm to each part. It does not work.",
    },
    {
      type: "p",
      text: "Energy reaches the battery from three places. From a charging station, which comes with an invoice. From the petrol engine and from braking, which come with no documents.",
    },
    {
      type: "p",
      text: "Inside the battery the energy mixes. The on-board statistics for “petrol” and “electric” mileage are calculated differently by different models and are not a primary document.",
    },
    {
      type: "p",
      text: "There is also double counting. The energy the engine gave to the battery is already counted through the petrol. Counting it again as electricity inflates the consumption.",
    },

    { type: "h2", text: "A simple method: the sufficiency check" },
    {
      type: "p",
      text: "We suggest a different approach. Write off actual consumption based on documents, and use the norms only for control.",
    },
    {
      type: "p",
      text: "The control question is simple. Do the petrol filled and the electricity received cover the distance the car drove. And are they not more than needed.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Work out how many kilometres the energy covers",
          text: [
            "Petrol for the period × 100 / petrol norm. Electricity for the period × 100 / electricity norm.",
            "The sum of the two is the calculated mileage.",
          ],
        },
        {
          title: "Compare it with the odometer",
          text: ["Deviation = calculated mileage − actual mileage. Divide it by the actual mileage to get a percentage."],
        },
      ],
    },
    {
      type: "example",
      title: "Example check",
      meta: "Hybrid, one month, 2,000 km",
      split: [
        { label: "Petrol", value: 959, tone: "red" },
        { label: "Electricity", value: 1050, tone: "light" },
      ],
      rows: [
        { label: "Petrol", note: "70 l × 100 / 7.3 l", value: "959 km" },
        { label: "Electricity", note: "210 kWh × 100 / 20.0 kWh", value: "1,050 km" },
        { label: "Calculated mileage", value: "2,009 km" },
        { label: "Odometer mileage", value: "2,000 km" },
        { label: "Deviation", value: "+0.4%", kind: "sum" },
      ],
    },
    {
      type: "p",
      text: "The deviation is 0.4%. That is within tolerance. The energy matches the mileage, and the write-off is justified.",
    },
    { type: "h3", text: "How to read the deviation" },
    {
      type: "table",
      head: ["Result", "What it means", "What to do"],
      rows: [
        { cells: ["Within ±5%", "The energy matches the mileage", "Write off the actual amount"] },
        { cells: ["Above +5%", "More energy was used than needed. Possible overconsumption", "Find the cause and draw up a report"], highlight: true },
        { cells: ["Below −5%", "Not enough energy for the mileage. A fill-up or a charge is missing from the records", "Find the missing documents"] },
        { cells: ["Consumption without mileage", "The car did not move, but fuel was written off", "Investigate at once"] },
      ],
      caption: "We suggest 5% as a guide. The company sets the exact value itself.",
    },
    {
      type: "p",
      text: "If the car was never charged, the formula still works. The second term is zero, and the check runs on petrol only.",
    },
    {
      type: "p",
      text: "Use the city norm. Out-of-town trips serve as an explanation when the deviation is large.",
    },

    { type: "h2", text: "Check your car" },
    {
      type: "p",
      text: "Enter the data for a month or a quarter. The calculator works out the calculated mileage and shows what to do with the deviation.",
    },
    {
      type: "calculator",
      title: "Sufficiency check",
      intro: "The fields hold the example from this article. Replace the figures with your own.",
      decimal: ".",
      fields: {
        fuel: "Petrol for the period",
        fuelNorm: "Petrol norm",
        power: "Electricity for the period",
        powerNorm: "Electricity norm",
        distance: "Odometer mileage",
        tolerance: "Tolerance",
      },
      units: { l: "l", kwh: "kWh", km: "km", per100: "l/100 km", kwhPer100: "kWh/100" },
      out: {
        fuelKm: "Petrol covers",
        powerKm: "Electricity covers",
        total: "Calculated mileage",
        odometer: "Odometer mileage",
        deviation: "Deviation",
        band: "Tolerance ±{tol}%",
      },
      verdict: {
        ok: { title: "Within tolerance", text: "The energy matches the mileage. The consumption can be written off as it is." },
        over: {
          title: "More energy than needed",
          text: "The calculated mileage is {km} km above the actual one. Check the data and out-of-town trips. If you find the cause, record it in a report.",
          split: "If no cause is found, the unjustified part comes to about {l} l of petrol and {kwh} kWh of electricity. It is recorded in a commission report.",
        },
        under: {
          title: "Not enough energy for the mileage",
          text: "Energy for about {km} km is missing. Most likely a fill-up or a charge is not in the records, or the car was charged without documents.",
        },
        idle: { title: "Fill in the fields", text: "Enter numbers greater than zero. Use a point for decimals." },
        noDistance: { title: "Consumption without mileage", text: "The car did not move, but energy was written off. Such a case is investigated at once." },
        short: "Mileage is under 1,000 km. With low mileage a single missing fill-up gives a large deviation, so draw conclusions at the end of the quarter.",
      },
      reset: "Restore the example",
      privacy: "The calculation runs in your browser. No data is sent anywhere.",
      defaults: { fuel: 70, fuelNorm: 7.3, power: 210, powerNorm: 20, distance: 2000, tolerance: 5 },
    },

    { type: "h2", text: "Winter, summer and the last-day fill-up" },
    {
      type: "p",
      text: "In winter the heater runs, in summer the air conditioning. Consumption rises for every car at once. You do not need seasonal coefficients for that.",
    },
    {
      type: "p",
      text: "Compare the car's deviation with the average deviation of the rest of the fleet for the same month. If the gap is no more than 5 percentage points, it is the season. If it is larger, it is a reason to look closer.",
    },
    {
      type: "p",
      text: "If the average for the whole fleet is outside tolerance, the problem is most likely the norms. They should be reviewed.",
    },
    {
      type: "p",
      text: "Calculate every month, and draw conclusions at the end of each quarter on a year-to-date basis. This removes the problem of a fill-up on the last day of the month. The shift evens out in the next period.",
    },

    { type: "h2", text: "Accounting" },
    {
      type: "ul",
      items: [
        "Petrol. Written off by fill-ups for the period, based on fuel card reports and filling station receipts. The fuel left in the tank is not counted, because it cannot be measured reliably.",
        "Electricity. Recognised as an expense in the month of charging and not carried as inventory. The charge in the battery cannot be counted in a stocktake. In the project, an attempt to keep electricity in stock produced a negative balance.",
        "Late invoice. If the charging invoice arrives later, the expense still belongs to the month of charging. The invoice serves as confirmation.",
      ],
    },
    {
      type: "p",
      text: "The basis for this is the Law on Accounting. Expenses are recorded in the period they relate to. Checking consumption against norms is internal control, not a basis for accounting entries.",
    },

    { type: "h2", text: "Taxes: what it takes for the expense to be accepted" },
    {
      type: "p",
      text: "Corporate income tax. An expense is deductible if it is justified and supported by documents (Tax Code, Art. 305). Exceeding a control norm does not by itself prohibit the deduction. It has to be explained in a report or an internal memo.",
    },
    {
      type: "p",
      text: "VAT. Input VAT on passenger cars and their fuel cannot be offset if they are not related to the company's activity (Tax Code, Art. 267). The State Tax Committee treats electric cars as passenger cars and the electricity for them as fuel. An offset requires a VAT invoice with VAT shown separately (Tax Code, Art. 266).",
    },
    { type: "h3", text: "One word in the accounting policy that can cost the deduction" },
    {
      type: "p",
      text: "The Tax Code has rules on losses above natural loss norms. If the state has not set such norms, the company sets them itself.",
    },
    {
      type: "risks",
      title: "If the fuel norms are called natural loss norms",
      items: [
        "Corporate income tax. Losses above natural loss norms are not deductible (Tax Code, Art. 317, item 1).",
        "VAT offset. VAT on such expenses cannot be offset (Tax Code, Art. 267, part 1, item 7).",
        "VAT adjustment. VAT already offset on losses above natural loss norms must be adjusted (Tax Code, Art. 269, part 1, item 2).",
      ],
    },
    {
      type: "p",
      text: "So the company's document should say plainly that the consumption norms are control indicators, not natural loss norms. Then a deviation is examined on its merits rather than disallowed automatically.",
    },
    {
      type: "p",
      text: "According to the State Tax Committee, an audit looks at waybills with routes and mileage, fuel write-off reports, insurance policies, fines and accidents. If the drivers are not company employees or the cars are not used for business, the VAT offset will be removed.",
    },
    {
      type: "p",
      text: "There is currently no mandatory state waybill form for company passenger cars. Electronic waybills under Cabinet of Ministers Resolution No. 44 were piloted in 2024, and we found no extension of the pilot. The company approves its own waybill form.",
    },
    {
      type: "p",
      text: "Corporate income tax is reported quarterly (Tax Code, Art. 338), VAT monthly. If unjustified overconsumption is found at the end of a quarter, a corrected VAT return for the specific month may be needed.",
    },

    { type: "h2", text: "A large deviation? Check the data first" },
    {
      type: "p",
      text: "In the real project, the average fleet deviation first came out at about +45%. Almost all of it turned out to be data errors, not overconsumption.",
    },
    {
      type: "checklist",
      title: "What to check when the deviation is large",
      meta: "7 items",
      items: [
        { text: "The mileage matches the waybills" },
        { text: "All fill-ups and charges belong to this car", note: "A common mistake: one car's fill-up is booked to another" },
        { text: "No typos when copying from filling and charging station reports", note: "In the project, 30 l turned into 300 l because of an extra digit" },
        { text: "The car's version is recorded correctly", note: "Norms differ between versions of one model with different range. The error is about 7%" },
        { text: "The period's mileage is not too low", note: "With a few hundred kilometres, one missing fill-up gives tens of percent" },
        { text: "Out-of-town trips and long idling with climate control on are taken into account" },
        { text: "The cause is recorded in a report or an internal memo" },
      ],
    },
    {
      type: "p",
      text: "If the overconsumption is still unexplained, the unjustified part is split into litres and kilowatt-hours in proportion to their shares of the calculated mileage. It is valued at cost and recorded in a commission report.",
    },

    { type: "h2", text: "How neighbouring countries handle it" },
    {
      type: "table",
      head: ["Country", "How the question is solved"],
      rows: [
        { cells: ["Russia", "In 2021, kWh consumption for 46 models was added to the Ministry of Transport norms. All of them are fully electric cars, with no hybrids among them"] },
        { cells: ["Belarus", "Electricity norms for electric cars have not applied since 2022. Electricity is written off straight to expenses"] },
        { cells: ["Uzbekistan", "There are no state norms for hybrids. The company sets its own write-off procedure"], highlight: true },
      ],
    },
    {
      type: "p",
      text: "Nobody has a ready-made solution for hybrids. None of these countries officially splits mileage by energy source. The company writes its own procedure for hybrids, and its quality decides whether the tax authority accepts the expense.",
    },

    { type: "h2", text: "What to put in the accounting policy" },
    {
      type: "p",
      text: "Everything described above works only once it is written into the company's document. An audit looks not at the formula in the accountant's spreadsheet but at the approved procedure.",
    },
    {
      type: "p",
      text: "In its 2024 clarification, the State Tax Committee says directly that for a car running on two types of fuel, the company should develop a procedure and write-off norms for each type and fix them in the accounting policy.",
    },
    {
      type: "checks",
      items: [
        "Consumption norms as control indicators, not natural loss norms",
        "The sufficiency check formula and the tolerance",
        "Comparison with the fleet average instead of seasonal coefficients",
        "Monthly calculation and a quarterly year-to-date conclusion",
        "Petrol written off by fill-ups, electricity in the month of charging",
        "Waybill form and a log of charging sessions for each car",
        "Charging only at recorded sources",
        "Overconsumption report form and how it is valued",
      ],
    },
    {
      type: "takeaway",
      title: "Check your accounting policy",
      items: [
        "If it has no section on hybrids, consumption is written off without rules, and any deviation can be challenged.",
        "If the norms are called loss norms or are applied to the full mileage, it needs an amendment.",
        "If the fleet is large or growing, a separate regulation on fuel and electricity accounting is more convenient.",
      ],
    },
    {
      type: "offer",
      title: "We will set up fuel accounting for your fleet",
      text: "We have already done this for a company with a hybrid fleet. We can do the same for you.",
      items: [
        "Review your accounting policy and show the risks",
        "Draft amendments or a separate regulation on fuel and electricity",
        "Provide a calculation template and an overconsumption report form",
        "Check the laboratory's norm report for typical errors",
        "Walk your accountants through the new procedure",
      ],
      button: { label: "Discuss your accounting policy", href: "/contact" },
      secondary: { label: "Message us on Telegram", href: "https://t.me/advizen" },
    },

    { type: "h2", text: "Sources" },
    {
      type: "sources",
      items: [
        { title: "Tax Code of the Republic of Uzbekistan", meta: "Art. 266, 267, 269, 305, 317, 338", href: "https://lex.uz/en/docs/4674893" },
        { title: "Law on Accounting No. ZRU-404", meta: "13.04.2016", href: "https://lex.uz/ru/docs/2931251" },
        { title: "National Accounting Standard No. 4 “Inventories”", href: "https://lex.uz/ru/docs/4890446" },
        { title: "Cabinet of Ministers Resolution No. 44 on electronic waybills", meta: "22.01.2024", href: "https://lex.uz/ru/docs/6774924" },
        {
          title: "State Tax Committee on VAT offset for electric cars, electricity and fuel",
          meta: "buxgalter.uz, 15.07.2024, in Russian",
          href: "https://buxgalter.uz/publish/doc/text201389_mojno_li_prinimat_k_zachetu_nds_po_elektromobilyam_elektroenergii_benzinu_i_gazu",
        },
        {
          title: "Electric and hybrid vehicle imports overtake conventional cars for the first time",
          meta: "Tashkent Times",
          href: "https://www.tashkenttimes.uz/economy/14426-uzbekistan-electric-and-hybrid-vehicle-imports-overtake-conventional-cars-for-first-time",
        },
      ],
    },
  ],
  faq: [
    {
      question: "Can petrol and electricity be written off by two norms over the full mileage?",
      answer: "No. Each norm was measured while driving on one source only. Applying both to the full mileage doubles the norm. Write off actual consumption and use the norms for the sufficiency check.",
    },
    {
      question: "Should electricity be carried as inventory?",
      answer: "No. The charge in the battery cannot be counted in a stocktake. Electricity is recognised as an expense in the month of charging, and the supplier's invoice serves as confirmation.",
    },
    {
      question: "What if an employee charges the car at home?",
      answer: "Such charging does not reach the records, and the check will show missing energy. The accounting policy should allow charging only at recorded sources or set a metered compensation procedure.",
    },
  ],
};

const ru: LocalizedArticle = {
  subtitle:
    "Почему две нормы на весь пробег удваивают расход, как проверить его одной формулой и что закрепить в учётной политике, чтобы налоговая приняла списание.",
  author: "Налоговая практика Advizen",
  inShort: {
    figures: [
      { value: "×2", label: "Во столько раз завышается норма, если применить нормы бензина и электричества ко всему пробегу" },
      { value: "±5%", label: "Допуск отклонения, который мы предлагаем закрепить в учётной политике" },
      { value: "+45%", label: "Среднее отклонение по парку в реальном проекте до сверки данных. Почти всё оказалось ошибками ввода" },
      { value: "1", label: "Формула проверки вместо раздельных норм и сезонных коэффициентов" },
    ],
    points: [
      "Нормы бензина и электричества для гибрида нельзя складывать на весь пробег. Каждая измерена при езде только на одном источнике.",
      "Пробег нельзя делить на бензиновый и электрический. Документа на такое деление нет, а энергия от двигателя уже учтена через бензин.",
      "Списывайте фактический расход по документам. Нормы нужны только для проверки, хватает ли энергии на пробег.",
      "В учётной политике нормы должны называться контрольными показателями, а не нормами естественной убыли. От этого зависит вычет и НДС.",
    ],
  },
  content: [
    {
      type: "p",
      text: "Компании всё чаще берут в служебные парки гибриды. В 2024 году в Узбекистан ввезли 80 235 легковых машин, и 39 564 из них были электромобилями и гибридами.",
    },
    {
      type: "p",
      text: "Бухгалтерия при этом остаётся без правил. Государственных норм расхода для гибридов нет. Компании заказывают нормы у частных лабораторий и получают сразу две: на бензин и на электричество.",
    },
    {
      type: "p",
      text: "Дальше возникают вопросы. Как списывать бензин и электроэнергию. Как понять, что расход не завышен. Что ответить налоговой, если отклонение всё же есть.",
    },
    {
      type: "p",
      text: "Материал основан на реальном проекте Advizen для компании с парком гибридов. Данные клиента обезличены, цифры в примерах условные.",
    },

    { type: "h2", text: "Три типа гибридов" },
    {
      type: "ul",
      items: [
        "HEV, обычный гибрид. Розетки нет. Батарея заряжается от двигателя и при торможении. Для учёта это обычная бензиновая машина.",
        "PHEV, подключаемый гибрид. Есть розетка. Колёса крутит электромотор, бензиновый двигатель или оба сразу. Пример: модели BYD с технологией DM-i.",
        "EREV, гибрид с увеличенным запасом хода. Колёса крутит только электромотор. Бензиновый двигатель работает как генератор и подзаряжает батарею. Пример: Li Auto.",
      ],
    },
    {
      type: "p",
      text: "Дальше речь пойдёт о PHEV и EREV. Именно у них два источника энергии и две нормы.",
    },

    { type: "h2", text: "Главная ошибка: две нормы на весь пробег" },
    {
      type: "p",
      text: "Лаборатория измеряет каждую норму отдельно. Норму бензина при езде только на бензине. Норму электричества при езде только на батарее.",
    },
    {
      type: "p",
      text: "Если применить обе нормы ко всему пробегу, норма удваивается. Машина физически не может потратить столько энергии.",
    },
    {
      type: "example",
      title: "Как удваивается норма",
      meta: "Гибрид, 2 000 км по городу",
      rows: [
        { label: "Бензин по норме на весь пробег", note: "2 000 км × 7,3 л / 100 км", value: "146 л" },
        { label: "Электроэнергия по норме на весь пробег", note: "2 000 км × 20,0 кВт·ч / 100 км", value: "400 кВт·ч" },
        { label: "Этой энергии хватило бы на", value: "4 000 км", kind: "sum" },
      ],
    },
    {
      type: "p",
      text: "Каждой из двух величин хватило бы на весь пробег. Вместе они рассчитаны на 4 000 км, хотя машина проехала 2 000.",
    },

    { type: "h2", text: "Почему нельзя делить пробег на бензиновый и электрический" },
    {
      type: "p",
      text: "Вторая частая идея: разделить километры на «бензиновые» и «электрические» и к каждой части применить свою норму. Это не работает.",
    },
    {
      type: "p",
      text: "Энергия приходит в батарею из трёх мест. С зарядной станции, на это есть счёт. От бензинового двигателя и при торможении, на это документов нет.",
    },
    {
      type: "p",
      text: "В батарее энергия смешивается. Бортовая статистика пробега «на бензине» и «на электричестве» у разных моделей считается по-разному и первичным документом не является.",
    },
    {
      type: "p",
      text: "Есть и двойной счёт. Энергия, которую двигатель отдал в батарею, уже учтена через бензин. Если посчитать её ещё раз как электричество, расход завысится.",
    },

    { type: "h2", text: "Простой способ: проверка достаточности" },
    {
      type: "p",
      text: "Мы предлагаем другой подход. Списывать фактический расход по документам, а нормы использовать только для контроля.",
    },
    {
      type: "p",
      text: "Вопрос контроля простой. Хватает ли заправленного бензина и полученной электроэнергии на пробег, который проехала машина. И не больше ли их, чем нужно.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Считаем, на сколько километров хватит энергии",
          text: [
            "Бензин за период × 100 / норма бензина. Электроэнергия за период × 100 / норма электричества.",
            "Сумма двух чисел это расчётный пробег.",
          ],
        },
        {
          title: "Сравниваем с пробегом по одометру",
          text: ["Отклонение = расчётный пробег − фактический пробег. Делим его на фактический пробег и получаем процент."],
        },
      ],
    },
    {
      type: "example",
      title: "Пример проверки",
      meta: "Гибрид, месяц, 2 000 км",
      split: [
        { label: "Бензин", value: 959, tone: "red" },
        { label: "Электроэнергия", value: 1050, tone: "light" },
      ],
      rows: [
        { label: "Бензин", note: "70 л × 100 / 7,3 л", value: "959 км" },
        { label: "Электроэнергия", note: "210 кВт·ч × 100 / 20,0 кВт·ч", value: "1 050 км" },
        { label: "Расчётный пробег", value: "2 009 км" },
        { label: "Пробег по одометру", value: "2 000 км" },
        { label: "Отклонение", value: "+0,4%", kind: "sum" },
      ],
    },
    {
      type: "p",
      text: "Отклонение 0,4%. Это в пределах допуска. Энергии ровно столько, сколько нужно на такой пробег, и списание обосновано.",
    },
    { type: "h3", text: "Как читать отклонение" },
    {
      type: "table",
      head: ["Результат", "Что это значит", "Что делать"],
      rows: [
        { cells: ["В пределах ±5%", "Энергии столько, сколько нужно на пробег", "Списать по факту"] },
        { cells: ["Больше +5%", "Энергии потрачено больше, чем нужно. Возможен перерасход", "Найти причину и оформить акт"], highlight: true },
        { cells: ["Меньше −5%", "Энергии не хватает на пробег. Заправка или зарядка не попала в учёт", "Найти недостающие документы"] },
        { cells: ["Расход без пробега", "Машина не ездила, а топливо списано", "Сразу на разбор"] },
      ],
      caption: "Допуск 5% мы предлагаем как ориентир. Конкретное значение компания утверждает сама.",
    },
    {
      type: "p",
      text: "Если машину не заряжали, формула работает и для неё. Второе слагаемое равно нулю, и проверка идёт только по бензину.",
    },
    {
      type: "p",
      text: "Норма берётся городская. Поездки за город служат объяснением, если отклонение вышло большим.",
    },

    { type: "h2", text: "Проверьте свою машину" },
    {
      type: "p",
      text: "Введите данные за месяц или квартал. Калькулятор посчитает расчётный пробег и покажет, что делать с отклонением.",
    },
    {
      type: "calculator",
      title: "Проверка достаточности",
      intro: "В полях стоит пример из статьи. Замените цифры на свои.",
      decimal: ",",
      fields: {
        fuel: "Бензин за период",
        fuelNorm: "Норма бензина",
        power: "Электроэнергия за период",
        powerNorm: "Норма электроэнергии",
        distance: "Пробег по одометру",
        tolerance: "Допуск",
      },
      units: { l: "л", kwh: "кВт·ч", km: "км", per100: "л/100 км", kwhPer100: "кВт·ч/100" },
      out: {
        fuelKm: "Бензина хватит на",
        powerKm: "Электричества хватит на",
        total: "Расчётный пробег",
        odometer: "Пробег по одометру",
        deviation: "Отклонение",
        band: "Допуск ±{tol}%",
      },
      verdict: {
        ok: { title: "В пределах допуска", text: "Энергии хватает ровно на пробег. Расход можно списать по факту." },
        over: {
          title: "Энергии больше, чем нужно",
          text: "Расчётный пробег больше фактического на {km} км. Проверьте данные и поездки за город. Если причина найдена, зафиксируйте её в акте.",
          split: "Если причину не найти, необоснованная часть составит около {l} л бензина и {kwh} кВт·ч электроэнергии. Её оформляют актом комиссии.",
        },
        under: {
          title: "Энергии не хватает на пробег",
          text: "Не хватает энергии примерно на {km} км. Скорее всего, заправка или зарядка не попала в учёт, или машину заряжали без документов.",
        },
        idle: { title: "Заполните поля", text: "Введите числа больше нуля. Дробную часть можно писать через запятую." },
        noDistance: { title: "Расход без пробега", text: "Машина не ездила, а энергия списана. Такой случай сразу идёт на разбор." },
        short: "Пробег меньше 1 000 км. При малом пробеге одна пропущенная заправка даёт большое отклонение, поэтому делайте вывод по итогам квартала.",
      },
      reset: "Вернуть пример",
      privacy: "Расчёт идёт в вашем браузере. Данные никуда не отправляются.",
      defaults: { fuel: 70, fuelNorm: 7.3, power: 210, powerNorm: 20, distance: 2000, tolerance: 5 },
    },

    { type: "h2", text: "Зима, лето и заправка в последний день" },
    {
      type: "p",
      text: "Зимой работает печка, летом кондиционер. Расход растёт у всех машин сразу. Сезонные коэффициенты для этого не нужны.",
    },
    {
      type: "p",
      text: "Сравните отклонение машины со средним отклонением остальных машин парка за тот же месяц. Если разница не больше 5 процентных пунктов, это сезон. Если больше, это повод разбираться.",
    },
    {
      type: "p",
      text: "Если за допуск вышло среднее по всему парку, дело скорее в нормах. Их стоит пересмотреть.",
    },
    {
      type: "p",
      text: "Считайте каждый месяц, а вывод делайте по итогам квартала нарастающим итогом с начала года. Так уходит проблема заправки в последний день месяца. Сдвиг гасится в следующем периоде.",
    },

    { type: "h2", text: "Бухгалтерский учёт" },
    {
      type: "ul",
      items: [
        "Бензин. Списывается по заправкам за период на основании отчётов по топливным картам и чеков АЗС. Остаток в баке не учитывается, его нельзя надёжно замерить.",
        "Электроэнергия. Признаётся расходом в месяце зарядки и не учитывается как запас. Заряд в батарее нельзя проинвентаризировать. В проекте попытка вести электроэнергию на складе дала отрицательный остаток.",
        "Поздний счёт. Если счёт за зарядку пришёл позже, расход всё равно относится к месяцу зарядки. Счёт служит подтверждением.",
      ],
    },
    {
      type: "p",
      text: "Основа для этого в Законе «О бухгалтерском учёте». Расходы отражаются в том периоде, к которому они относятся. Проверка расхода по нормам это внутренний контроль, а не основание для проводок.",
    },

    { type: "h2", text: "Налоги: что нужно, чтобы расход приняли" },
    {
      type: "p",
      text: "Налог на прибыль. Расход вычитается, если он обоснован и подтверждён документами (ст. 305 НК). Превышение контрольной нормы само по себе вычет не запрещает. Его нужно объяснить актом или служебной запиской.",
    },
    {
      type: "p",
      text: "НДС. По легковым машинам и топливу для них НДС не зачитывается, если они не связаны с деятельностью компании (ст. 267 НК). Налоговый комитет приравнивает электромобили к легковым машинам, а электроэнергию для них к топливу. Для зачёта нужен счёт-фактура с выделенным НДС (ст. 266 НК).",
    },
    { type: "h3", text: "Слово в учётной политике, которое может стоить вычета" },
    {
      type: "p",
      text: "В Налоговом кодексе есть правила о потерях сверх норм естественной убыли. Если государство таких норм не установило, их устанавливает сама компания.",
    },
    {
      type: "risks",
      title: "Если нормы ГСМ названы нормами убыли",
      items: [
        "Налог на прибыль. Потери сверх норм естественной убыли не вычитаются (п. 1 ст. 317 НК).",
        "Зачёт НДС. НДС по таким расходам не зачитывается (п. 7 ч. 1 ст. 267 НК).",
        "Корректировка НДС. Уже зачтённый НДС по утрате сверх норм убыли нужно скорректировать (п. 2 ч. 1 ст. 269 НК).",
      ],
    },
    {
      type: "p",
      text: "Поэтому в документе компании нужно прямо написать: нормы расхода это контрольные показатели, а не нормы естественной убыли. Тогда отклонение разбирают по существу, а не снимают автоматически.",
    },
    {
      type: "p",
      text: "По разъяснению ГНК, при проверке смотрят путевые листы с маршрутом и пробегом, акты списания топлива, страховые полисы, штрафы и ДТП. Если водители не работают в компании или машины используются не для бизнеса, зачёт НДС снимут.",
    },
    {
      type: "p",
      text: "Обязательной государственной формы путевого листа для служебных легковых машин сейчас нет. Электронные путевые листы по ПКМ № 44 вводились пилотом в 2024 году, его продления мы не нашли. Форму путевого листа компания утверждает сама.",
    },
    {
      type: "p",
      text: "Налог на прибыль считается по кварталам (ст. 338 НК), НДС по месяцам. Если необоснованный перерасход выявлен по итогам квартала, по НДС может понадобиться уточнённый расчёт за конкретный месяц.",
    },

    { type: "h2", text: "Большое отклонение? Сначала проверьте данные" },
    {
      type: "p",
      text: "В реальном проекте среднее отклонение по парку сначала вышло около +45%. Почти всё оказалось ошибками в данных, а не перерасходом.",
    },
    {
      type: "checklist",
      title: "Что проверить при большом отклонении",
      meta: "7 пунктов",
      items: [
        { text: "Пробег совпадает с путевыми листами" },
        { text: "Все заправки и зарядки относятся к этой машине", note: "Частая ошибка: заправку одной машины записали на другую" },
        { text: "Нет опечаток при переносе из отчётов АЗС и зарядных станций", note: "В проекте 30 л превратились в 300 л из-за лишней цифры" },
        { text: "Модификация машины указана верно", note: "Нормы версий одной модели с разным запасом хода различаются. Ошибка даёт около 7%" },
        { text: "Пробег за период не слишком мал", note: "При нескольких сотнях километров одна пропущенная заправка даёт десятки процентов" },
        { text: "Учтены поездки за город и долгий простой с включённым климатом" },
        { text: "Причина зафиксирована в акте или служебной записке" },
      ],
    },
    {
      type: "p",
      text: "Если перерасход так и не объяснён, необоснованную часть делят на литры и киловатт-часы пропорционально их долям в расчётном пробеге. Её оценивают по себестоимости и оформляют актом комиссии.",
    },

    { type: "h2", text: "Как у соседей" },
    {
      type: "table",
      head: ["Страна", "Как решён вопрос"],
      rows: [
        { cells: ["Россия", "В 2021 году в нормы Минтранса добавили расход в кВт·ч для 46 моделей. Все они чистые электромобили, гибридов среди них нет"] },
        { cells: ["Беларусь", "Нормы электроэнергии для электромобилей с 2022 года не применяются. Электроэнергию сразу списывают в расход"] },
        { cells: ["Узбекистан", "Государственных норм для гибридов нет. Порядок списания компания определяет сама"], highlight: true },
      ],
    },
    {
      type: "p",
      text: "Готового решения для гибридов нет ни у кого. Ни в одной из этих стран пробег официально не делят по источникам энергии. Порядок для гибридов компания пишет сама, и от его качества зависит, примет ли налоговая расход.",
    },

    { type: "h2", text: "Что закрепить в учётной политике" },
    {
      type: "p",
      text: "Всё, о чём шла речь выше, работает только тогда, когда записано в документе компании. На проверке смотрят не на формулу в таблице бухгалтера, а на утверждённый порядок.",
    },
    {
      type: "p",
      text: "ГНК в разъяснении 2024 года прямо указывает: для машины на двух видах топлива нужно разработать порядок и нормы списания каждого вида и закрепить их в учётной политике.",
    },
    {
      type: "checks",
      items: [
        "Нормы расхода как контрольные показатели, а не нормы естественной убыли",
        "Формула проверки достаточности и допуск отклонения",
        "Сравнение со средним по парку вместо сезонных коэффициентов",
        "Ежемесячный расчёт и квартальный вывод нарастающим итогом",
        "Списание бензина по заправкам, электроэнергии в месяце зарядки",
        "Форма путевого листа и реестр зарядных сессий по каждой машине",
        "Зарядка только на учтённых источниках",
        "Форма акта о перерасходе и порядок его оценки",
      ],
    },
    {
      type: "takeaway",
      title: "Проверьте свою учётную политику",
      items: [
        "Если в ней нет раздела о гибридах, расход списывается без правил, и любое отклонение можно оспорить.",
        "Если нормы названы нормами убыли или применяются ко всему пробегу, нужна правка.",
        "Если парк большой или растёт, удобнее отдельное положение об учёте ГСМ и электроэнергии.",
      ],
    },
    {
      type: "offer",
      title: "Подготовим порядок учёта ГСМ для вашего парка",
      text: "Мы уже прошли этот путь с компанией, у которой парк гибридов. Сделаем то же для вас.",
      items: [
        "Проверим вашу учётную политику и покажем риски",
        "Подготовим правки или отдельное положение по ГСМ и электроэнергии",
        "Дадим шаблон расчёта и форму акта о перерасходе",
        "Проверим отчёт лаборатории о нормах на типичные ошибки",
        "Объясним бухгалтерии, как работать по новому порядку",
      ],
      button: { label: "Обсудить учётную политику", href: "/contact" },
      secondary: { label: "Написать в Telegram", href: "https://t.me/advizen" },
    },

    { type: "h2", text: "Источники" },
    {
      type: "sources",
      items: [
        { title: "Налоговый кодекс Республики Узбекистан", meta: "ст. 266, 267, 269, 305, 317, 338", href: "https://lex.uz/ru/docs/4674893" },
        { title: "Закон «О бухгалтерском учёте» № ЗРУ-404", meta: "13.04.2016", href: "https://lex.uz/ru/docs/2931251" },
        { title: "НСБУ № 4 «Товарно-материальные запасы»", href: "https://lex.uz/ru/docs/4890446" },
        { title: "Постановление Кабмина № 44 об электронных путевых листах", meta: "22.01.2024", href: "https://lex.uz/ru/docs/6774924" },
        {
          title: "Разъяснение ГНК о зачёте НДС по электромобилям, электроэнергии и топливу",
          meta: "buxgalter.uz, 15.07.2024",
          href: "https://buxgalter.uz/publish/doc/text201389_mojno_li_prinimat_k_zachetu_nds_po_elektromobilyam_elektroenergii_benzinu_i_gazu",
        },
        {
          title: "Импорт электромобилей и гибридов впервые превысил импорт обычных машин",
          meta: "Tashkent Times",
          href: "https://www.tashkenttimes.uz/economy/14426-uzbekistan-electric-and-hybrid-vehicle-imports-overtake-conventional-cars-for-first-time",
        },
      ],
    },
  ],
  faq: [
    {
      question: "Можно ли списывать бензин и электроэнергию по двум нормам на весь пробег?",
      answer: "Нет. Каждая норма измерена при езде только на одном источнике. Если применить обе ко всему пробегу, норма удвоится. Списывайте фактический расход, а нормы используйте для проверки достаточности.",
    },
    {
      question: "Нужно ли учитывать электроэнергию как запас?",
      answer: "Нет. Заряд в батарее нельзя проинвентаризировать. Электроэнергию признают расходом в месяце зарядки, а счёт поставщика служит подтверждением.",
    },
    {
      question: "Что делать, если сотрудник заряжает машину дома?",
      answer: "Такая зарядка не попадает в учёт, и проверка покажет нехватку энергии. В учётной политике стоит закрепить зарядку только на учтённых источниках или порядок компенсации по счётчику.",
    },
  ],
};

const uz: LocalizedArticle = {
  subtitle:
    "Nega butun yurgan masofaga ikki meʼyor sarfni ikki baravar oshiradi, uni bitta formula bilan qanday tekshirish mumkin va soliq organi hisobdan chiqarishni qabul qilishi uchun hisob siyosatida nimani belgilash kerak.",
  author: "Advizen soliq amaliyoti",
  inShort: {
    figures: [
      { value: "×2", label: "Benzin va elektr meʼyorlari butun yurgan masofaga qoʻllanilsa, meʼyor shuncha baravar oshib ketadi" },
      { value: "±5%", label: "Hisob siyosatida belgilashni taklif qiladigan ruxsat etilgan chetlanish" },
      { value: "+45%", label: "Haqiqiy loyihada maʼlumotlar tekshirilgunga qadar avtopark boʻyicha oʻrtacha chetlanish. Deyarli hammasi kiritishdagi xatolar boʻlib chiqdi" },
      { value: "1", label: "Alohida meʼyorlar va mavsumiy koeffitsiyentlar oʻrniga bitta tekshirish formulasi" },
    ],
    points: [
      "Gibridning benzin va elektr meʼyorlarini butun yurgan masofaga qoʻshib boʻlmaydi. Har biri faqat bitta manbada yurganda oʻlchangan.",
      "Yurgan masofani benzinli va elektr kilometrlarga ajratib boʻlmaydi. Bunday taqsimotni tasdiqlovchi hujjat yoʻq, dvigateldan kelgan energiya esa benzin orqali allaqachon hisobga olingan.",
      "Haqiqiy sarfni hujjatlar asosida hisobdan chiqaring. Meʼyorlar faqat energiya yurgan masofaga yetadimi, shuni tekshirish uchun kerak.",
      "Hisob siyosatida meʼyorlar tabiiy kamayish meʼyorlari emas, nazorat koʻrsatkichlari deb atalishi kerak. Chegirma va QQS shunga bogʻliq.",
    ],
  },
  content: [
    {
      type: "p",
      text: "Kompaniyalar xizmat avtoparklariga tobora koʻproq gibridlar olmoqda. 2024-yilda Oʻzbekistonga 80 235 ta yengil avtomobil olib kirilgan, ulardan 39 564 tasi elektromobil va gibridlar edi.",
    },
    {
      type: "p",
      text: "Buxgalteriya esa qoidasiz qolmoqda. Gibridlar uchun davlat sarf meʼyorlari yoʻq. Kompaniyalar meʼyorlarni xususiy laboratoriyalarga buyurtma qiladi va birdaniga ikkitasini oladi: benzin va elektr energiyasi uchun.",
    },
    {
      type: "p",
      text: "Keyin savollar paydo boʻladi. Benzin va elektr energiyasini qanday hisobdan chiqarish kerak. Sarf oshirib yuborilmaganini qanday bilish mumkin. Chetlanish boʻlsa, soliq organiga nima deyish kerak.",
    },
    {
      type: "p",
      text: "Material Advizenning gibrid avtoparkiga ega kompaniya uchun bajargan haqiqiy loyihasiga asoslangan. Mijoz maʼlumotlari anonimlashtirilgan, misollardagi raqamlar shartli.",
    },

    { type: "h2", text: "Gibridlarning uch turi" },
    {
      type: "ul",
      items: [
        "HEV, oddiy gibrid. Rozetkasi yoʻq. Batareya dvigateldan va tormozlashda quvvatlanadi. Hisob uchun bu oddiy benzinli avtomobil.",
        "PHEV, rozetkaga ulanadigan gibrid. Rozetkasi bor. Gʻildiraklarni elektr motor, benzin dvigateli yoki ikkalasi birga aylantiradi. Misol: DM-i texnologiyali BYD modellari.",
        "EREV, yurish zaxirasi kengaytirilgan gibrid. Gʻildiraklarni faqat elektr motor aylantiradi. Benzin dvigateli generator boʻlib ishlaydi va batareyani quvvatlaydi. Misol: Li Auto.",
      ],
    },
    {
      type: "p",
      text: "Quyida PHEV va EREV haqida soʻz boradi. Aynan ularda ikki energiya manbai va ikki meʼyor bor.",
    },

    { type: "h2", text: "Asosiy xato: butun yurgan masofaga ikki meʼyor" },
    {
      type: "p",
      text: "Laboratoriya har bir meʼyorni alohida oʻlchaydi. Benzin meʼyorini faqat benzinda yurganda. Elektr meʼyorini faqat batareyada yurganda.",
    },
    {
      type: "p",
      text: "Ikkala meʼyor butun yurgan masofaga qoʻllanilsa, meʼyor ikki baravar oshadi. Avtomobil jismonan buncha energiya sarflay olmaydi.",
    },
    {
      type: "example",
      title: "Meʼyor qanday ikki baravar oshadi",
      meta: "Gibrid, shaharda 2 000 km",
      rows: [
        { label: "Butun masofa uchun meʼyor boʻyicha benzin", note: "2 000 km × 7,3 l / 100 km", value: "146 l" },
        { label: "Butun masofa uchun meʼyor boʻyicha elektr energiyasi", note: "2 000 km × 20,0 kVt·soat / 100 km", value: "400 kVt·soat" },
        { label: "Bu energiya yetadi", value: "4 000 km", kind: "sum" },
      ],
    },
    {
      type: "p",
      text: "Ikki miqdorning har biri butun masofaga yetardi. Birgalikda ular 4 000 km ga moʻljallangan, avtomobil esa 2 000 km yurgan.",
    },

    { type: "h2", text: "Nega yurgan masofani benzinli va elektrga ajratib boʻlmaydi" },
    {
      type: "p",
      text: "Ikkinchi keng tarqalgan gʻoya: kilometrlarni «benzinli» va «elektr» qismlarga ajratib, har biriga oʻz meʼyorini qoʻllash. Bu ishlamaydi.",
    },
    {
      type: "p",
      text: "Batareyaga energiya uch joydan keladi. Quvvatlash stansiyasidan, buning uchun hisob bor. Benzin dvigatelidan va tormozlashda, bularga hujjat yoʻq.",
    },
    {
      type: "p",
      text: "Batareyada energiya aralashib ketadi. «Benzinda» va «elektrda» yurilgan masofa boʻyicha bort statistikasi turli modellarda turlicha hisoblanadi va birlamchi hujjat hisoblanmaydi.",
    },
    {
      type: "p",
      text: "Ikki marta hisoblash ham bor. Dvigatel batareyaga bergan energiya benzin orqali allaqachon hisobga olingan. Uni yana elektr sifatida hisoblasangiz, sarf oshib ketadi.",
    },

    { type: "h2", text: "Oddiy usul: yetarlilikni tekshirish" },
    {
      type: "p",
      text: "Biz boshqacha yondashuvni taklif qilamiz. Haqiqiy sarfni hujjatlar asosida hisobdan chiqarish, meʼyorlarni esa faqat nazorat uchun ishlatish.",
    },
    {
      type: "p",
      text: "Nazorat savoli oddiy. Quyilgan benzin va olingan elektr energiyasi avtomobil yurgan masofaga yetadimi. Kerakligidan koʻp emasmi.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Energiya necha kilometrga yetishini hisoblaymiz",
          text: [
            "Davr uchun benzin × 100 / benzin meʼyori. Davr uchun elektr energiyasi × 100 / elektr meʼyori.",
            "Ikki sonning yigʻindisi hisoblangan yurgan masofa boʻladi.",
          ],
        },
        {
          title: "Odometr boʻyicha masofa bilan solishtiramiz",
          text: ["Chetlanish = hisoblangan masofa − haqiqiy masofa. Uni haqiqiy masofaga boʻlib, foizni olamiz."],
        },
      ],
    },
    {
      type: "example",
      title: "Tekshirish misoli",
      meta: "Gibrid, bir oy, 2 000 km",
      split: [
        { label: "Benzin", value: 959, tone: "red" },
        { label: "Elektr energiyasi", value: 1050, tone: "light" },
      ],
      rows: [
        { label: "Benzin", note: "70 l × 100 / 7,3 l", value: "959 km" },
        { label: "Elektr energiyasi", note: "210 kVt·soat × 100 / 20,0 kVt·soat", value: "1 050 km" },
        { label: "Hisoblangan masofa", value: "2 009 km" },
        { label: "Odometr boʻyicha masofa", value: "2 000 km" },
        { label: "Chetlanish", value: "+0,4%", kind: "sum" },
      ],
    },
    {
      type: "p",
      text: "Chetlanish 0,4%. Bu ruxsat etilgan chegarada. Energiya aynan shu masofaga yetadigan miqdorda, hisobdan chiqarish asosli.",
    },
    { type: "h3", text: "Chetlanishni qanday oʻqish kerak" },
    {
      type: "table",
      head: ["Natija", "Bu nimani anglatadi", "Nima qilish kerak"],
      rows: [
        { cells: ["±5% ichida", "Energiya yurgan masofaga mos", "Haqiqiy sarf boʻyicha hisobdan chiqarish"] },
        { cells: ["+5% dan yuqori", "Kerakligidan koʻp energiya sarflangan. Ortiqcha sarf boʻlishi mumkin", "Sababini topish va dalolatnoma tuzish"], highlight: true },
        { cells: ["−5% dan past", "Energiya masofaga yetmaydi. Yoqilgʻi quyish yoki quvvatlash hisobga tushmagan", "Yetishmayotgan hujjatlarni topish"] },
        { cells: ["Masofasiz sarf", "Avtomobil yurmagan, lekin yoqilgʻi hisobdan chiqarilgan", "Darhol tekshirish"] },
      ],
      caption: "5% ni moʻljal sifatida taklif qilamiz. Aniq qiymatni kompaniya oʻzi tasdiqlaydi.",
    },
    {
      type: "p",
      text: "Avtomobil quvvatlanmagan boʻlsa ham formula ishlaydi. Ikkinchi qoʻshiluvchi nolga teng, tekshiruv faqat benzin boʻyicha boradi.",
    },
    {
      type: "p",
      text: "Shahar meʼyori olinadi. Chetlanish katta chiqsa, shahar tashqarisiga safarlar izoh boʻlib xizmat qiladi.",
    },

    { type: "h2", text: "Avtomobilingizni tekshiring" },
    {
      type: "p",
      text: "Bir oy yoki chorak maʼlumotlarini kiriting. Kalkulyator hisoblangan masofani topadi va chetlanish bilan nima qilish kerakligini koʻrsatadi.",
    },
    {
      type: "calculator",
      title: "Yetarlilikni tekshirish",
      intro: "Maydonlarda maqoladagi misol turibdi. Raqamlarni oʻzingiznikiga almashtiring.",
      decimal: ",",
      fields: {
        fuel: "Davr uchun benzin",
        fuelNorm: "Benzin meʼyori",
        power: "Davr uchun elektr energiyasi",
        powerNorm: "Elektr meʼyori",
        distance: "Odometr boʻyicha masofa",
        tolerance: "Ruxsat etilgan chetlanish",
      },
      units: { l: "l", kwh: "kVt·soat", km: "km", per100: "l/100 km", kwhPer100: "kVt·soat/100" },
      out: {
        fuelKm: "Benzin yetadi",
        powerKm: "Elektr yetadi",
        total: "Hisoblangan masofa",
        odometer: "Odometr boʻyicha masofa",
        deviation: "Chetlanish",
        band: "Chegara ±{tol}%",
      },
      verdict: {
        ok: { title: "Ruxsat etilgan chegarada", text: "Energiya aynan yurgan masofaga yetadi. Sarfni haqiqiy miqdorda hisobdan chiqarish mumkin." },
        over: {
          title: "Energiya kerakligidan koʻp",
          text: "Hisoblangan masofa haqiqiysidan {km} km ga koʻp. Maʼlumotlarni va shahar tashqarisiga safarlarni tekshiring. Sabab topilsa, uni dalolatnomada qayd eting.",
          split: "Sabab topilmasa, asossiz qism taxminan {l} l benzin va {kwh} kVt·soat elektr energiyasini tashkil qiladi. U komissiya dalolatnomasi bilan rasmiylashtiriladi.",
        },
        under: {
          title: "Energiya masofaga yetmaydi",
          text: "Taxminan {km} km uchun energiya yetishmaydi. Ehtimol, yoqilgʻi quyish yoki quvvatlash hisobga tushmagan yoki avtomobil hujjatsiz quvvatlangan.",
        },
        idle: { title: "Maydonlarni toʻldiring", text: "Noldan katta sonlarni kiriting. Kasr qismini vergul bilan yozish mumkin." },
        noDistance: { title: "Masofasiz sarf", text: "Avtomobil yurmagan, lekin energiya hisobdan chiqarilgan. Bunday holat darhol tekshiriladi." },
        short: "Masofa 1 000 km dan kam. Kichik masofada bitta tushib qolgan yoqilgʻi quyish katta chetlanish beradi, shuning uchun xulosani chorak yakunida chiqaring.",
      },
      reset: "Misolni qaytarish",
      privacy: "Hisob-kitob brauzeringizda bajariladi. Maʼlumotlar hech qayerga yuborilmaydi.",
      defaults: { fuel: 70, fuelNorm: 7.3, power: 210, powerNorm: 20, distance: 2000, tolerance: 5 },
    },

    { type: "h2", text: "Qish, yoz va oyning oxirgi kunidagi yoqilgʻi quyish" },
    {
      type: "p",
      text: "Qishda isitgich, yozda konditsioner ishlaydi. Sarf barcha avtomobillarda birdaniga oshadi. Buning uchun mavsumiy koeffitsiyentlar kerak emas.",
    },
    {
      type: "p",
      text: "Avtomobil chetlanishini oʻsha oy uchun avtoparkdagi qolgan avtomobillarning oʻrtacha chetlanishi bilan solishtiring. Farq 5 foiz punktdan oshmasa, bu mavsum. Oshsa, bu tekshirish uchun sabab.",
    },
    {
      type: "p",
      text: "Agar butun avtopark boʻyicha oʻrtacha koʻrsatkich chegaradan chiqsa, muammo koʻproq meʼyorlarda. Ularni qayta koʻrib chiqish kerak.",
    },
    {
      type: "p",
      text: "Har oy hisoblang, xulosani esa chorak yakunida yil boshidan oʻsib boruvchi yakun bilan chiqaring. Shunda oyning oxirgi kunidagi yoqilgʻi quyish muammosi yoʻqoladi. Siljish keyingi davrda qoplanadi.",
    },

    { type: "h2", text: "Buxgalteriya hisobi" },
    {
      type: "ul",
      items: [
        "Benzin. Yoqilgʻi kartalari hisobotlari va YoQSh cheklari asosida davr uchun quyilgan miqdor boʻyicha hisobdan chiqariladi. Bakdagi qoldiq hisobga olinmaydi, uni ishonchli oʻlchab boʻlmaydi.",
        "Elektr energiyasi. Quvvatlangan oyda xarajat sifatida tan olinadi va zaxira sifatida hisobga olinmaydi. Batareyadagi zaryadni inventarizatsiya qilib boʻlmaydi. Loyihada elektr energiyasini omborda yuritishga urinish manfiy qoldiq bergan.",
        "Kechikkan hisob. Quvvatlash uchun hisob keyinroq kelsa ham, xarajat quvvatlangan oyga tegishli boʻladi. Hisob tasdiq boʻlib xizmat qiladi.",
      ],
    },
    {
      type: "p",
      text: "Buning asosi «Buxgalteriya hisobi toʻgʻrisida»gi Qonunda. Xarajatlar ular tegishli boʻlgan davrda aks ettiriladi. Sarfni meʼyorlar boʻyicha tekshirish ichki nazorat, buxgalteriya yozuvlari uchun asos emas.",
    },

    { type: "h2", text: "Soliqlar: xarajat qabul qilinishi uchun nima kerak" },
    {
      type: "p",
      text: "Foyda soligʻi. Xarajat asosli va hujjatlar bilan tasdiqlangan boʻlsa, chegiriladi (SK 305-moddasi). Nazorat meʼyoridan oshish oʻz-oʻzidan chegirishni taqiqlamaydi. Uni dalolatnoma yoki xizmat xati bilan izohlash kerak.",
    },
    {
      type: "p",
      text: "QQS. Yengil avtomobillar va ular uchun yoqilgʻi boʻyicha QQS, agar ular kompaniya faoliyati bilan bogʻliq boʻlmasa, hisobga olinmaydi (SK 267-moddasi). Soliq qoʻmitasi elektromobillarni yengil avtomobillarga, ular uchun elektr energiyasini esa yoqilgʻiga tenglashtiradi. Hisobga olish uchun QQS alohida koʻrsatilgan hisob-faktura kerak (SK 266-moddasi).",
    },
    { type: "h3", text: "Hisob siyosatidagi bitta soʻz chegirmaga qimmatga tushishi mumkin" },
    {
      type: "p",
      text: "Soliq kodeksida tabiiy kamayish meʼyorlaridan ortiq yoʻqotishlar haqida qoidalar bor. Davlat bunday meʼyorlarni belgilamagan boʻlsa, ularni kompaniyaning oʻzi belgilaydi.",
    },
    {
      type: "risks",
      title: "YoMM meʼyorlari tabiiy kamayish meʼyorlari deb atalsa",
      items: [
        "Foyda soligʻi. Tabiiy kamayish meʼyorlaridan ortiq yoʻqotishlar chegirilmaydi (SK 317-moddasi 1-bandi).",
        "QQSni hisobga olish. Bunday xarajatlar boʻyicha QQS hisobga olinmaydi (SK 267-moddasi birinchi qismi 7-bandi).",
        "QQSga tuzatish. Tabiiy kamayish meʼyorlaridan ortiq yoʻqotish boʻyicha ilgari hisobga olingan QQS tuzatilishi kerak (SK 269-moddasi birinchi qismi 2-bandi).",
      ],
    },
    {
      type: "p",
      text: "Shuning uchun kompaniya hujjatida aniq yozish kerak: sarf meʼyorlari tabiiy kamayish meʼyorlari emas, nazorat koʻrsatkichlari. Shunda chetlanish avtomatik rad etilmaydi, mazmunan koʻrib chiqiladi.",
    },
    {
      type: "p",
      text: "Soliq qoʻmitasining tushuntirishiga koʻra, tekshiruvda marshrut va masofa koʻrsatilgan yoʻl varaqalari, yoqilgʻini hisobdan chiqarish dalolatnomalari, sugʻurta polislari, jarimalar va YTHlar koʻriladi. Haydovchilar kompaniya xodimi boʻlmasa yoki avtomobillar biznes uchun ishlatilmasa, QQSni hisobga olish bekor qilinadi.",
    },
    {
      type: "p",
      text: "Hozir xizmat yengil avtomobillari uchun yoʻl varaqasining majburiy davlat shakli yoʻq. Vazirlar Mahkamasining 44-son qarori boʻyicha elektron yoʻl varaqalari 2024-yilda tajriba tariqasida joriy qilingan, uning uzaytirilganini topmadik. Yoʻl varaqasi shaklini kompaniya oʻzi tasdiqlaydi.",
    },
    {
      type: "p",
      text: "Foyda soligʻi choraklar boʻyicha (SK 338-moddasi), QQS oylar boʻyicha hisoblanadi. Asossiz ortiqcha sarf chorak yakunida aniqlansa, QQS boʻyicha aniq oy uchun aniqlashtirilgan hisobot kerak boʻlishi mumkin.",
    },

    { type: "h2", text: "Chetlanish kattami? Avval maʼlumotlarni tekshiring" },
    {
      type: "p",
      text: "Haqiqiy loyihada avtopark boʻyicha oʻrtacha chetlanish dastlab taxminan +45% chiqdi. Deyarli hammasi ortiqcha sarf emas, maʼlumotlardagi xatolar boʻlib chiqdi.",
    },
    {
      type: "checklist",
      title: "Chetlanish katta boʻlsa nimani tekshirish kerak",
      meta: "7 band",
      items: [
        { text: "Masofa yoʻl varaqalari bilan mos keladi" },
        { text: "Barcha yoqilgʻi quyish va quvvatlashlar shu avtomobilga tegishli", note: "Keng tarqalgan xato: bir avtomobilning yoqilgʻisi boshqasiga yozilgan" },
        { text: "YoQSh va quvvatlash stansiyalari hisobotlaridan koʻchirishda xato yoʻq", note: "Loyihada ortiqcha raqam tufayli 30 l 300 l ga aylangan" },
        { text: "Avtomobil modifikatsiyasi toʻgʻri koʻrsatilgan", note: "Bir modelning yurish zaxirasi turlicha boʻlgan versiyalari meʼyorlari farq qiladi. Xato taxminan 7% beradi" },
        { text: "Davr uchun masofa juda kichik emas", note: "Bir necha yuz kilometrda bitta tushib qolgan yoqilgʻi quyish oʻnlab foiz beradi" },
        { text: "Shahar tashqarisiga safarlar va iqlim tizimi yoqilgan holda uzoq turish hisobga olingan" },
        { text: "Sabab dalolatnoma yoki xizmat xatida qayd etilgan" },
      ],
    },
    {
      type: "p",
      text: "Ortiqcha sarf baribir izohlanmasa, asossiz qism hisoblangan masofadagi ulushlariga mutanosib ravishda litr va kilovatt-soatlarga boʻlinadi. U tannarx boʻyicha baholanadi va komissiya dalolatnomasi bilan rasmiylashtiriladi.",
    },

    { type: "h2", text: "Qoʻshni davlatlarda qanday" },
    {
      type: "table",
      head: ["Davlat", "Masala qanday hal qilingan"],
      rows: [
        { cells: ["Rossiya", "2021-yilda Transport vazirligi meʼyorlariga 46 ta model uchun kVt·soatdagi sarf qoʻshilgan. Ularning barchasi toʻliq elektromobillar, gibridlar yoʻq"] },
        { cells: ["Belarus", "Elektromobillar uchun elektr energiyasi meʼyorlari 2022-yildan qoʻllanilmaydi. Elektr energiyasi darhol xarajatga hisobdan chiqariladi"] },
        { cells: ["Oʻzbekiston", "Gibridlar uchun davlat meʼyorlari yoʻq. Hisobdan chiqarish tartibini kompaniya oʻzi belgilaydi"], highlight: true },
      ],
    },
    {
      type: "p",
      text: "Gibridlar uchun tayyor yechim hech kimda yoʻq. Bu davlatlarning birortasida yurgan masofa rasman energiya manbalari boʻyicha ajratilmaydi. Gibridlar uchun tartibni kompaniya oʻzi yozadi, soliq organi xarajatni qabul qilishi esa uning sifatiga bogʻliq.",
    },

    { type: "h2", text: "Hisob siyosatida nimani belgilash kerak" },
    {
      type: "p",
      text: "Yuqorida aytilganlarning barchasi faqat kompaniya hujjatida yozilganda ishlaydi. Tekshiruvda buxgalter jadvalidagi formulaga emas, tasdiqlangan tartibga qaraladi.",
    },
    {
      type: "p",
      text: "Soliq qoʻmitasi 2024-yilgi tushuntirishida toʻgʻridan-toʻgʻri koʻrsatadi: ikki turdagi yoqilgʻida ishlaydigan avtomobil uchun har bir turni hisobdan chiqarish tartibi va meʼyorlarini ishlab chiqib, hisob siyosatida mustahkamlash kerak.",
    },
    {
      type: "checks",
      items: [
        "Sarf meʼyorlari tabiiy kamayish meʼyorlari emas, nazorat koʻrsatkichlari sifatida",
        "Yetarlilikni tekshirish formulasi va ruxsat etilgan chetlanish",
        "Mavsumiy koeffitsiyentlar oʻrniga avtopark oʻrtachasi bilan solishtirish",
        "Har oylik hisob-kitob va chorak boʻyicha oʻsib boruvchi xulosa",
        "Benzinni quyilgan miqdor boʻyicha, elektr energiyasini quvvatlangan oyda hisobdan chiqarish",
        "Yoʻl varaqasi shakli va har bir avtomobil boʻyicha quvvatlash seanslari reyestri",
        "Faqat hisobga olingan manbalarda quvvatlash",
        "Ortiqcha sarf dalolatnomasi shakli va uni baholash tartibi",
      ],
    },
    {
      type: "takeaway",
      title: "Hisob siyosatingizni tekshiring",
      items: [
        "Unda gibridlar haqida boʻlim boʻlmasa, sarf qoidasiz hisobdan chiqariladi va har qanday chetlanishga eʼtiroz bildirish mumkin.",
        "Meʼyorlar kamayish meʼyorlari deb atalgan yoki butun masofaga qoʻllanilgan boʻlsa, tuzatish kerak.",
        "Avtopark katta yoki oʻsib borayotgan boʻlsa, YoMM va elektr energiyasi hisobi boʻyicha alohida nizom qulayroq.",
      ],
    },
    {
      type: "offer",
      title: "Avtoparkingiz uchun YoMM hisobi tartibini tayyorlaymiz",
      text: "Biz bu yoʻlni gibrid avtoparkiga ega kompaniya bilan allaqachon bosib oʻtganmiz. Siz uchun ham shunday qilamiz.",
      items: [
        "Hisob siyosatingizni tekshirib, xatarlarni koʻrsatamiz",
        "YoMM va elektr energiyasi boʻyicha tuzatishlar yoki alohida nizom tayyorlaymiz",
        "Hisob-kitob shabloni va ortiqcha sarf dalolatnomasi shaklini beramiz",
        "Laboratoriyaning meʼyorlar boʻyicha hisobotini odatiy xatolarga tekshiramiz",
        "Buxgalteriyaga yangi tartib boʻyicha ishlashni tushuntiramiz",
      ],
      button: { label: "Hisob siyosatini muhokama qilish", href: "/contact" },
      secondary: { label: "Telegramda yozish", href: "https://t.me/advizen" },
    },

    { type: "h2", text: "Manbalar" },
    {
      type: "sources",
      items: [
        { title: "Oʻzbekiston Respublikasi Soliq kodeksi", meta: "266, 267, 269, 305, 317, 338-moddalar", href: "https://lex.uz/docs/4674893" },
        { title: "«Buxgalteriya hisobi toʻgʻrisida»gi Qonun, OʻRQ-404", meta: "13.04.2016", href: "https://lex.uz/docs/2931251" },
        { title: "4-son BHMS «Tovar-moddiy zaxiralar»", href: "https://lex.uz/docs/4890446" },
        { title: "Vazirlar Mahkamasining elektron yoʻl varaqalari toʻgʻrisidagi 44-son qarori", meta: "22.01.2024", href: "https://lex.uz/docs/6774924" },
        {
          title: "Soliq qoʻmitasining elektromobillar, elektr energiyasi va yoqilgʻi boʻyicha QQSni hisobga olish haqidagi tushuntirishi",
          meta: "buxgalter.uz, 15.07.2024, rus tilida",
          href: "https://buxgalter.uz/publish/doc/text201389_mojno_li_prinimat_k_zachetu_nds_po_elektromobilyam_elektroenergii_benzinu_i_gazu",
        },
        {
          title: "Elektromobil va gibridlar importi ilk bor oddiy avtomobillar importidan oshdi",
          meta: "Tashkent Times, ingliz tilida",
          href: "https://www.tashkenttimes.uz/economy/14426-uzbekistan-electric-and-hybrid-vehicle-imports-overtake-conventional-cars-for-first-time",
        },
      ],
    },
  ],
  faq: [
    {
      question: "Benzin va elektr energiyasini butun masofaga ikki meʼyor boʻyicha hisobdan chiqarish mumkinmi?",
      answer: "Yoʻq. Har bir meʼyor faqat bitta manbada yurganda oʻlchangan. Ikkalasini butun masofaga qoʻllash meʼyorni ikki baravar oshiradi. Haqiqiy sarfni hisobdan chiqaring, meʼyorlarni esa yetarlilikni tekshirish uchun ishlating.",
    },
    {
      question: "Elektr energiyasini zaxira sifatida hisobga olish kerakmi?",
      answer: "Yoʻq. Batareyadagi zaryadni inventarizatsiya qilib boʻlmaydi. Elektr energiyasi quvvatlangan oyda xarajat sifatida tan olinadi, yetkazib beruvchining hisobi esa tasdiq boʻlib xizmat qiladi.",
    },
    {
      question: "Xodim avtomobilni uyda quvvatlasa nima qilish kerak?",
      answer: "Bunday quvvatlash hisobga tushmaydi va tekshiruv energiya yetishmasligini koʻrsatadi. Hisob siyosatida faqat hisobga olingan manbalarda quvvatlashni yoki hisoblagich boʻyicha kompensatsiya tartibini belgilash kerak.",
    },
  ],
};

const article: Record<string, LocalizedArticle> = { en, ru, uz };

export default article;
