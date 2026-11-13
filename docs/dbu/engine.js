/* Layout engine for the guide. Pours each chapter's blocks into square pages: text runs in
   three columns, wide blocks (tables, examples, quotes) span the frame, and any space a page
   cannot fill with text is given to a picture. Runs in the browser before Chrome prints. */
(function () {
  const MM = 96 / 25.4;
  const B = window.BOOK;
  const root = document.getElementById("book");
  const used = new Set();
  let pageNo = 0;
  const headingPages = []; // {chapter, text, page}
  const chapterPages = []; // {title, page, kind}

  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const strip = (h) => h.replace(/<[^>]+>/g, "");

  function newPage(cls) {
    const p = el("section", "page " + (cls || ""));
    root.appendChild(p);
    pageNo++;
    p.dataset.no = pageNo;
    return p;
  }
  function folio(p, label, light) {
    const f = el("div", "folio" + (light ? " light" : ""), `<b>${p.dataset.no}</b><span>${label}</span>`);
    p.appendChild(f);
    return f;
  }
  function takeImage(pool) {
    while (pool.length) {
      const src = pool.shift();
      if (!used.has(src)) { used.add(src); return src; }
    }
    // fall back to pictures no chapter has used yet
    for (const src of B.spares || []) if (!used.has(src)) { used.add(src); return src; }
    return null;
  }
  const img = (src, alt) => `<img src="${src}" alt="${alt || ""}">`;

  /* ---------------- front matter ---------------- */
  function cover() {
    const p = newPage("cover");
    used.add(B.front.cover);
    p.innerHTML = `${img(B.front.cover)}
      <div class="wordmark"><img src="img/Logo.webp" alt=""><span>ADVIZEN</span></div>
      <h1>Doing Business in Uzbekistan</h1>
      <p class="sub">Law, tax, accounting and employment for companies investing in Uzbekistan.</p>
      <p class="year">2026</p>
      <p class="edition">${B.edition} &nbsp;·&nbsp; advizenco.com</p>`;
  }

  function foreword() {
    const p = newPage("fore");
    used.add(B.front.foreword);
    p.innerHTML = `<div class="col">
      <h1>About this guide</h1>
      <p class="stand">A practical map of the rules a foreign company meets in Uzbekistan, from the first visit to the first tax return.</p>
      <div class="cols2">
        <p>Uzbekistan has spent the past decade opening its economy: a convertible currency, a new Tax Code, a new Labour Code, special zones for investors and a growing list of digital public services. The rules change quickly, and much of the detail is published only in Uzbek and Russian.</p>
        <p>This guide brings the essentials together in English. Each chapter explains a part of the system: how to enter the country and set up a company, how profits, sales and salaries are taxed, how accounts are kept, how people are employed, how goods cross the border, how money moves and which legal rules matter most.</p>
        <p>Figures and rules are stated as of November 2026. Where a rule depends on the facts of a case, we say so. Each chapter's opening page lists the sections inside it, and the appendices hold the treaty rates and the tax calendar.</p>
        <p>We prepare this guide every year for our clients and for anyone weighing an investment in Uzbekistan. If a question is not answered here, our team in Tashkent will be glad to help.</p>
      </div>
      <div class="kf">
        <div><b>15%</b><span>Corporate income tax</span></div>
        <div><b>12%</b><span>VAT and personal income tax</span></div>
        <div><b>55</b><span>Double tax treaties in force</span></div>
      </div>
      <p class="note">This guide is for general information only and is not legal, tax or accounting advice. Laws and their interpretation change, and every situation depends on its own facts. Please consult a qualified adviser before acting on any information in this publication. Advizen Consulting accepts no liability for decisions taken on the basis of this guide.</p>
    </div>
    <figure class="fill fill-side">${img(B.front.foreword)}</figure>`;
    folio(p, B.title);
  }

  function contentsPage() {
    const p = newPage("toc-page");
    used.add(B.front.contents);
    p.innerHTML = `<h1>Contents</h1><ol class="list"></ol><figure class="fill fill-side">${img(B.front.contents)}</figure>`;
    folio(p, B.title);
    return p.querySelector(".list");
  }

  /* ---------------- openers ---------------- */
  function opener(ch) {
    const kind = ch.opener || "dark";
    const p = newPage("opener op-" + kind + (kind === "dark" ? " dark" : ""));
    used.add(ch.image);
    const figs = `<div class="figs">${ch.figures.slice(0, 3).map((f) => `<div class="fig"><b><i>${f.value}</i></b><span>${f.label}</span></div>`).join("")}</div>`;
    const toc = `<nav class="toc"><ul></ul></nav>`;
    if (kind === "dark") {
      p.innerHTML = `<figure class="photo">${img(ch.image)}</figure><div class="below"><h1>${ch.title}</h1>${figs}<div class="row"><p class="lead">${ch.lead}</p>${toc}</div></div>`;
    } else if (kind === "photo") {
      p.innerHTML = `${img(ch.image)}<div class="shade"></div><div class="below"><h1>${ch.title}</h1><p class="lead">${ch.lead}</p>${figs}</div>`;
    } else {
      p.innerHTML = `<figure class="side">${img(ch.image)}</figure><div class="col"><h1>${ch.title}</h1><p class="lead">${ch.lead}</p>${toc}${figs}</div>`;
    }
    folio(p, ch.title, kind !== "split");
    ch._opener = p;
    chapterPages.push({ title: ch.title, page: p.dataset.no, kind: "chapter" });
  }

  /* ---------------- block rendering ---------------- */
  function tableHTML(t, cls) {
    const head = t.head.map((h) => `<th>${h}</th>`).join("");
    const rows = t.rows.map((r) => `<tr>${r.map((c, i) => `<td${i > 0 && strip(c).length <= 12 && /^[\d.,%\s/–-]+$|^\d+(\.\d+)?\s?%$/.test(strip(c)) ? ' class="num"' : ""}>${c}</td>`).join("")}</tr>`).join("");
    return `<table class="${cls || ""}"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>`;
  }
  function simple(body) {
    return body.map((b) => (b.t === "p" ? `<p>${b.html}</p>` : `<ul>${b.items.map((i) => `<li>${i}</li>`).join("")}</ul>`)).join("");
  }
  function isWideTable(t) {
    return t.head.length > 2 || t.rows.some((r) => r.some((c) => strip(c).length > 70));
  }

  /* ---------------- the flow ---------------- */
  function flowChapter(ch, opts) {
    opts = opts || {};
    const pool = (ch.fillers || []).slice();
    const havePics = () => pool.some((s) => !used.has(s)) || (B.spares || []).some((s) => !used.has(s));
    let page, frame, region, side, sideUsed = false, pagesInChapter = 0, lastRatio = 1;
    const queue = [];
    const quotes = [];
    let held = null; // a box that did not fit at the foot of a page waits for the next one

    function startPage(first) {
      page = newPage("flow" + (opts.tight ? " tight" : ""));
      pagesInChapter++;
      frame = el("div", "frame");
      page.appendChild(frame);
      region = null;
      side = false;
      // Every third page in a long chapter gives its right column to a picture.
      if (!first && !opts.noSide && pagesInChapter % 3 === 0 && pool.length > 1) {
        const src = takeImage(pool);
        if (src) {
          page.appendChild(el("figure", "fill fill-side", img(src)));
          frame.classList.add("narrow");
          side = sideUsed = true;
        }
      }
      page._folio = folio(page, ch.title);
      if (first && ch.kind === "appendix") {
        frame.appendChild(el("div", "page-head", `<h1>${ch.title}</h1>${ch.lead ? `<p>${ch.lead}</p>` : ""}`));
        chapterPages.push({ title: ch.title, page: page.dataset.no, kind: "appendix" });
      }
      if (queue.length) {
        // Waiting wide blocks go to the foot of the new page, so the text that ran over from
        // the previous page continues at the top without a break.
        const stack = el("div", "bottomstack");
        frame.appendChild(stack);
        while (queue.length) {
          stack.appendChild(queue[0][0]);
          if (!frameFits()) { stack.lastElementChild.remove(); break; }
          queue.shift();
        }
        if (!stack.children.length) { stack.remove(); flushQueue(); }
      }
    }

    const frameRect = () => frame.getBoundingClientRect();
    function usedHeight() {
      const last = frame.lastElementChild;
      if (!last) return 0;
      return last.getBoundingClientRect().bottom - frameRect().top;
    }
    const remaining = () => frameRect().height - usedHeight() - (frame.lastElementChild ? 6 * MM : 0);
    const frameFits = () => frame.scrollHeight <= frame.clientHeight + 1;
    const overflow = (r) => {
      if (r.scrollWidth > r.clientWidth + 2 || r.scrollHeight > r.clientHeight + 2) return true;
      // An element that may not break can be pushed into a hidden extra column without
      // changing scrollWidth, so check where the children actually landed.
      const rr = r.getBoundingClientRect();
      return [...r.children].some((c) => { const cr = c.getBoundingClientRect(); const atomic = !/^(P|UL|OL|H2|H3|H4)$/.test(c.tagName); return cr.left >= rr.right - 1 || (atomic && cr.bottom > rr.bottom - 8); });
    };

    function openRegion() {
      const stack = frame.querySelector(".bottomstack");
      if (stack && !stack.previousElementSibling?.classList.contains("region")) {
        const prev = stack.previousElementSibling;
        const start = prev ? prev.getBoundingClientRect().bottom - frameRect().top + 6 * MM : 0;
        const h = Math.floor(stack.getBoundingClientRect().top - frameRect().top - start - 6 * MM);
        if (h >= 22 * MM) {
          region = el("div", "region");
          region.style.height = h + "px";
          frame.insertBefore(region, stack);
          return;
        }
      }
      const h = Math.floor(remaining());
      if (h < 22 * MM) { finishPage(); startPage(); return openRegion(); }
      region = el("div", "region");
      region.style.height = h + "px";
      frame.appendChild(region);
    }
    function balance(r) {
      r.style.height = "auto";
      r.style.columnFill = "balance";
      // A few leftover lines are not cut into three tiny columns: they stay in one column.
      if (r.getBoundingClientRect().height < 20 * MM && r.style.columnCount !== "1") {
        r.style.columnCount = 1;
        r.style.width = "var(--col)";
      }
    }
    function closeRegion() {
      if (!region) return;
      if (!region.children.length) region.remove();
      else balance(region);
      region = null;
    }
    function dropSide() {
      page.querySelector(".fill-side")?.remove();
      frame.classList.remove("narrow");
      side = false;
    }

    function finishPage(isLast) {
      if (isLast) { const st = frame.querySelector(".bottomstack"); if (st) st.style.marginTop = 6 * MM + "px"; }
      if (region && isLast) balance(region);
      let room = frameRect().height - usedHeight();
      if (isLast) {
        lastRatio = usedHeight() / frameRect().height;
        // A short closing page: the remaining text becomes a column on the right and one
        // picture takes the rest of the page, instead of a few lines above a huge picture.
        const onlyText = [...frame.children].every((c) => c.classList.contains("region"));
        if (side && lastRatio < 0.42 && onlyText) {
          dropSide();
          frame.querySelectorAll(".region").forEach(balance);
          lastRatio = usedHeight() / frameRect().height;
        }
        if (lastRatio < 0.42 && onlyText && !side && havePics()) {
          frame.classList.add("tail");
          frame.querySelectorAll(".region").forEach((r) => { r.style.columnCount = 1; balance(r); });
          if (frameFits()) {
            const src = takeImage(pool);
            page.appendChild(el("figure", "fill fill-tail", img(src)));
            page._folio.classList.add("light");
            region = null;
            return;
          }
          frame.classList.remove("tail");
          frame.querySelectorAll(".region").forEach((r) => { r.style.columnCount = ""; });
        }
        if (room < 34 * MM && !side && havePics() && region) {
          // Not enough room below the last text: try two columns with a picture down the right.
          frame.classList.add("narrow");
          if (frameFits()) {
            const src = takeImage(pool);
            if (src) { page.appendChild(el("figure", "fill fill-side", img(src))); side = true; }
            else frame.classList.remove("narrow");
          } else frame.classList.remove("narrow");
        }
      }
      // An empty right column inside a text block takes a picture, bled to the page edge.
      if (!side && !page.querySelector(".fill") && havePics() && !frame.classList.contains("narrow")) {
        for (const r of frame.querySelectorAll(".region")) {
          const rr = r.getBoundingClientRect();
          const right = Math.max(...[...r.children].map((c) => c.getBoundingClientRect().right));
          const col3 = rr.left + (rr.width - 2 * 5.5 * MM) / 3 * 2 + 2 * 5.5 * MM;
          if (right < col3 - 2 && rr.height >= 40 * MM) {
            const src = takeImage(pool);
            if (!src) break;
            const pr = page.getBoundingClientRect();
            const f = el("figure", "fill", img(src));
            const atTop = rr.top - frameRect().top < 2;
            f.style.left = col3 - pr.left + "px";
            f.style.right = "0";
            f.style.top = (atTop ? 0 : rr.top - pr.top) + "px";
            f.style.height = rr.bottom - pr.top - (atTop ? 0 : rr.top - pr.top) + "px";
            page.appendChild(f);
            break;
          }
        }
      }
      room = frameRect().height - usedHeight();
      // One picture per page: a page that already has a side picture and a gap below gives
      // the side picture up, so the text runs in three columns and one picture fills the foot.
      if (side && room >= 34 * MM) {
        dropSide();
        frame.querySelectorAll(".region").forEach(balance);
        room = frameRect().height - usedHeight();
      }
      // A right-hand page does not get a foot picture when the facing page already has one.
      const facing = +page.dataset.no % 2 === 1 ? page.previousElementSibling : null;
      const facingFoot = facing && facing.querySelector(".fill.scrim, .fill-tail");
      if (!side && !page.querySelector(".fill") && room >= 30 * MM && !facingFoot && havePics()) {
        const src = takeImage(pool);
        if (src) {
          const pageRect = page.getBoundingClientRect();
          const f = el("figure", "fill scrim", img(src));
          f.style.top = frameRect().top - pageRect.top + usedHeight() + 7 * MM + "px";
          f.style.bottom = "0";
          f.style.left = "0";
          f.style.right = "0";
          page.appendChild(f);
          page._folio.classList.add("light");
        }
      }
      region = null;
    }

    function takeTrailingHeadings(r) {
      const out = [];
      while (r && r.lastElementChild && /^H[234]$/.test(r.lastElementChild.tagName)) {
        out.unshift(r.lastElementChild);
        r.lastElementChild.remove();
      }
      return out;
    }

    function splitPara(node, tag) {
      const tokens = node.innerHTML.split(/(\s+)/);
      const words = tokens.filter((t, i) => i % 2 === 0);
      if (words.length < 12) return [null, node];
      let lo = 0, hi = words.length - 1, best = 0;
      const build = (k) => tokens.slice(0, 2 * k - 1).join("");
      const probe = el(tag);
      region.appendChild(probe);
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        probe.innerHTML = build(mid);
        if (!overflow(region)) { best = mid; lo = mid + 1; } else hi = mid - 1;
      }
      // Keep about two lines for the next page rather than moving the whole paragraph.
      if (words.length - best < 12) best = words.length - 12;
      // A paragraph does not start at the foot of a page with fewer than three lines.
      probe.innerHTML = build(Math.max(best, 1));
      const rg = document.createRange(); rg.selectNodeContents(probe);
      const rb = region.getBoundingClientRect(), colW = rb.width / (parseInt(getComputedStyle(region).columnCount) || 1);
      const lines = new Set([...rg.getClientRects()].map((q) => Math.floor((q.left - rb.left + 1) / colW) + ":" + Math.round(q.top))).size;
      probe.remove();
      if (best < 8 || lines < 3 || words.length - best < 12) return [null, node];
      return [el(tag, node.className, build(best)), el(tag, (node.className + " cont").trim(), tokens.slice(2 * best).join(""))];
    }

    // The text that ran over has resumed on the new page; the waiting box goes in now,
    // ahead of any heading that is still waiting for its first paragraph.
    function dropHeld() {
      const h = held; held = null; h._deferred = true;
      const heads = region ? takeTrailingHeadings(region) : [];
      placeNarrow(h);
      heads.forEach((x) => placeNarrow(x));
    }
    function placeNarrow(node) {
      if (held && held._page !== page && !node._cont) dropHeld();
      if (!region) openRegion();
      region.appendChild(node);
      if (!overflow(region)) return;
      node.remove();
      if (node.tagName === "P") {
        const [a, rest] = splitPara(node, "p");
        if (a) {
          region.appendChild(a);
          finishPage(); startPage(); openRegion();
          rest._cont = true;
          return placeNarrow(rest);
        }
      }
      if (node.tagName === "UL" && node.children.length > 1) {
        region.appendChild(node);
        const rest = el("ul");
        while (overflow(region) && node.children.length > 1) rest.prepend(node.lastElementChild);
        if (!overflow(region)) {
          finishPage(); startPage(); openRegion();
          rest._cont = true;
          return placeNarrow(rest);
        }
        while (rest.firstChild) node.appendChild(rest.firstChild);
        node.remove();
      }
      const last = region.lastElementChild;
      if (node.tagName === "ASIDE" && !node._deferred && !held && last && !/^H[234]$/.test(last.tagName)) {
        // Like a magazine sidebar: the text keeps filling this page and the box opens the next.
        held = node; node._page = page;
        return;
      }
      const carried = takeTrailingHeadings(region);
      finishPage(); startPage(); openRegion();
      if (held && held !== node) dropHeld();
      carried.forEach((h) => region.appendChild(h));
      region.appendChild(node);
    }

    function putWide(wrap, splittable) {
      (frame.querySelector(".bottomstack") || frame).appendChild(wrap);
      if (frameFits()) return;
      const tall = wrap.offsetHeight > 0.62 * frameRect().height;
      wrap.remove();
      const node = wrap.lastElementChild;
      if (splittable && tall) {
        // Only a table taller than about two thirds of a page is split, by rows, header repeated.
        const rows = [...node.querySelectorAll("tbody tr")];
        const part = wrap.cloneNode(true);
        const pbody = part.querySelector("tbody");
        pbody.innerHTML = "";
        part.querySelector(".caption")?.remove();
        frame.appendChild(part);
        let n = 0;
        while (n < rows.length) {
          pbody.appendChild(rows[n].cloneNode(true));
          if (!frameFits()) { pbody.lastElementChild.remove(); break; }
          n++;
        }
        if (n >= 5 && rows.length - n >= 4) {
          rows.slice(0, n).forEach((r) => r.remove());
          wrap.querySelectorAll(".lone").forEach((h) => h.remove());
          finishPage(); startPage();
          return putWide(wrap, true);
        }
        part.remove();
      }
      finishPage(); startPage();
      frame.appendChild(wrap);
    }

    // Wide blocks (tables, examples, quotes) never cut the text into short balanced columns:
    // one that arrives mid-text waits and opens the next page; the text keeps flowing.
    function placeWide(node, splittable, now) {
      const heads = region ? takeTrailingHeadings(region) : [];
      const wrap = el("div", "wide keep");
      heads.forEach((h) => { h.classList.add("lone"); wrap.appendChild(h); });
      wrap.appendChild(node);
      if (region && region.children.length && !now) { queue.push([wrap, splittable]); return; }
      closeRegion();
      putWide(wrap, splittable);
    }
    function flushQueue() {
      while (queue.length) {
        const [w, s] = queue.shift();
        putWide(w, s);
      }
    }

    function factsGrid(t) {
      const items = t.rows.map((r) => `<div class="fact"><b>${r[0]}</b><span>${r.slice(1).join(" ")}</span></div>`).join("");
      return `<div class="facts">${items}</div>${t.caption ? `<p class="caption">${t.caption}</p>` : ""}`;
    }

    // ----- go -----
    let blocks = ch.blocks || [];
    if (opts.dropBox) {
      const i = blocks.map((b) => b.t).lastIndexOf("box");
      if (i >= 0) blocks = blocks.filter((_, k) => k !== i);
    }
    startPage(true);
    for (const b of blocks) {
      if (b.t === "h2" || b.t === "h3") {
        const n = el(b.t, null, b.html);
        if (b.t === "h2") n.dataset.h2 = strip(b.html);
        placeNarrow(n);
      } else if (b.t === "p") placeNarrow(el("p", null, b.html));
      else if (b.t === "ul") placeNarrow(el("ul", null, b.items.map((x) => `<li>${x}</li>`).join("")));
      else if (b.t === "box") placeNarrow(el("aside", "box", `${b.title ? `<h4>${b.title}</h4>` : ""}${simple(b.body)}${b.table ? tableHTML(b.table, "narrow-t") : ""}`));
      else if (b.t === "table") {
        const longest = Math.max(...b.rows.flat().map((c) => strip(c).length), ...b.head.map((c) => strip(c).length));
        if (b.head.length <= 2 && b.rows.length >= 7) placeWide(el("div", "tbl-facts", factsGrid(b)));
        else if ((b.head.length <= 2 && longest <= 70) || (b.head.length === 3 && longest <= 24)) placeNarrow(el("div", "tbl-n", `${tableHTML(b, "narrow-t")}${b.caption ? `<p class="caption">${b.caption}</p>` : ""}`));
        else {
          const short = longest <= 30 && b.head.length <= 3;
          placeWide(el("div", "tbl" + (short ? " tbl-short" : ""), `${tableHTML(b)}${b.caption ? `<p class="caption">${b.caption}</p>` : ""}`), true);
        }
      } else if (b.t === "kpis") {
        const cells = b.rows.map((r) => `<div class="k"><b>${r[0]}</b><span>${r[1] || ""}</span></div>`).join("");
        placeWide(el("div", "kpis", `<div class="kgrid">${cells}<div class="k kcap">${b.caption}</div></div>`));
      } else if (b.t === "bars") {
        const max = Math.max(...b.rows.map((r) => parseFloat(strip(r[2]))));
        const rows = b.rows.map((r) => `<div class="br"><span class="who"><img class="flag" src="img/flags/${strip(r[0])}.svg" alt="">${r[1]}</span>
          <span class="track"><i style="width:${(parseFloat(strip(r[2])) / max) * 100}%"></i><em>${r[2]}</em></span><span class="sh">${r[3]}</span><span class="sh">${r[4]}</span></div>`).join("");
        placeWide(el("div", "bars", `<div class="br bh"><span>Partner</span><span>Trade turnover, USD bn</span><span class="sh">Share of turnover</span><span class="sh">Share of exports</span></div>${rows}<p class="caption">${b.caption}</p>`));
      } else if (b.t === "ratings") {
        // Where each agency places Uzbekistan on the rating scale, against the investment-grade line.
        const sp = ["BBB", "BBB–", "BB+", "BB", "BB–", "B+"], md = ["Baa2", "Baa3", "Ba1", "Ba2", "Ba3", "B1"];
        const head = sp.map((g, i) => `<span class="n${i < 2 ? " ig" : ""}"><b>${g}</b>${md[i]}</span>`).join("");
        const rows = b.rows.map((r) => {
          const g = strip(r[1]).replace("-", "–");
          const at = Math.max(sp.indexOf(g), md.indexOf(g));
          const cells = sp.map((_, i) => `<span class="n${i < 2 ? " ig" : ""}">${i === at ? `<i>${r[1]}</i>` : ""}</span>`).join("");
          return `<div class="rr"><span class="ag"><b>${r[0]}</b>${r[2]} outlook · ${r[3]}</span>${cells}</div>`;
        }).join("");
        placeWide(el("div", "ratings", `<div class="rr rh"><span class="ag"></span><span class="zone ig">Investment grade</span><span class="zone">BB range: two notches to investment grade</span></div><div class="rr rs"><span class="ag">S&amp;P and Fitch / Moody's</span>${head}</div>${rows}<p class="caption">${b.caption}</p>`));
      } else if (b.t === "notes") {
        // Footnotes to a table read one per line, letter on the left, across the full width.
        placeWide(el("div", "tbl notes", tableHTML({ head: ["", ""], rows: b.rows }, "notes-t")), true, true);
      } else if (b.t === "example") {
        // A worked example with two scenarios reads as two cards side by side, result last and large.
        const t = b.table;
        const cards = t && t.head.length === 3 ? `<div class="ex-cards">${[1, 2].map((k) => {
          const body = t.rows.slice(0, -1).filter((r) => strip(r[k] || "")).map((r) => `<div class="ln${/^(incl|of which)/i.test(strip(r[0])) ? " sub" : ""}"><span>${r[0]}</span><span>${r[k]}</span></div>`).join("");
          const last = t.rows[t.rows.length - 1], labels = last[0].split(" / ");
          return `<div class="card c${k}"><b class="ch">${t.head[k]}</b>${body}<div class="res"><span>${labels[Math.min(k - 1, labels.length - 1)]}</span><strong>${last[k]}</strong></div></div>`;
        }).join("")}</div>` : (t ? tableHTML(t) : "");
        placeWide(el("div", "example", `<div class="ex-body"><h4>${b.title}</h4>${simple(b.body)}</div><div>${cards}</div>`));
      } else if (b.t === "quote") {
        // Pull quotes are not set in the middle of the text; one may close the chapter.
        quotes.push(b.html);
      }
    }
    if (held) dropHeld();
    if (queue.length) { closeRegion(); flushQueue(); }
    if (!opts.noQuotes && quotes.length) {
      closeRegion();
      const q = el("div", "wide keep quote-row solo", `<blockquote>“${quotes[0]}”</blockquote>`);
      (frame.querySelector(".bottomstack") || frame).appendChild(q);
      if (!frameFits()) q.remove();
    }
    finishPage(true);
    // A closing page with no running text (only a box, a table or a quote and a picture) is weak.
    const orphan = pagesInChapter > 1 && !page.querySelector(".region > p, .region > ul");
    return { lastRatio, sideUsed, orphan };
  }

  function recordHeadings(ch) {
    document.querySelectorAll("[data-h2]").forEach((h) => {
      if (h.dataset.done) return;
      h.dataset.done = 1;
      headingPages.push({ chapter: ch, text: h.dataset.h2, page: h.closest(".page").dataset.no });
    });
  }

  function layoutChapter(ch) {
    // Lay the chapter out. If its last page is mostly picture, try again without side pictures,
    // then also without pull quotes, and keep whichever version closes the text best.
    const snap = { n: root.children.length, pageNo, used: new Set(used), cp: chapterPages.length };
    const rollback = () => {
      while (root.children.length > snap.n) root.lastElementChild.remove();
      pageNo = snap.pageNo;
      used.clear(); snap.used.forEach((s) => used.add(s));
      chapterPages.length = snap.cp;
    };
    const variants = [
      {},
      { noSide: true },
      { noSide: true, tight: true },
      { noSide: true, noQuotes: true, tight: true },
      { noSide: true, tight: true, dropBox: true },
      { noSide: true, noQuotes: true, tight: true, dropBox: true },
    ];
    // Fewer pages first, then a fuller last page; each compromise costs a little, and dropping
    // a tip box only wins when it saves a whole page.
    const score = (r, pages, v) => pages * 10 - Math.min(r.lastRatio, 0.6) + (r.orphan ? 8 : 0) + (v.dropBox ? 5 : 0) + (v.tight ? 0.2 : 0) + (v.noQuotes ? 0.1 : 0) + (v.noSide ? 0.05 : 0);
    let best = null;
    for (const v of variants) {
      const r = flowChapter(ch, v);
      const pages = pageNo - snap.pageNo;
      const s = score(r, pages, v);
      if (!best || s < best.s) best = { v, s };
      if (r.lastRatio >= 0.42 && !r.orphan) break;
      rollback();
    }
    if (pageNo === snap.pageNo) flowChapter(ch, best.v); // the loop rolled back the last try
    recordHeadings(ch);
  }

  /* ---------------- Advizen and back cover ---------------- */
  function advizen() {
    const p = newPage("advizen dark");
    p.innerHTML = `<div class="col">
      <h1>How Advizen can help</h1>
      <p class="stand">Advizen is a Tashkent firm of tax advisers, lawyers and accountants working with foreign companies in Uzbekistan and Central Asia. We take a project from the first question to the filed return.</p>
      <div class="services">
        <div><h3>Tax advisory</h3><p>Structuring, tax due diligence, treaty relief, transfer pricing, disputes and audits, and day-to-day compliance.</p></div>
        <div><h3>Legal</h3><p>Company formation, contracts, licences, corporate governance, employment law, real estate and dispute support.</p></div>
        <div><h3>Accounting and payroll</h3><p>Bookkeeping, statutory and IFRS reporting, accounting policies, payroll and the transition to NSFO.</p></div>
        <div><h3>HR and Employer of Record</h3><p>Hiring in Uzbekistan without a local entity, work permits for foreign staff, and HR administration.</p></div>
        <div><h3>Customs and trade</h3><p>Classification, duties, import and export procedures, certification and labelling.</p></div>
        <div><h3>Market entry</h3><p>Choosing the right vehicle, registering it, opening accounts and getting to the first contract.</p></div>
      </div>
      <div class="contact">
        <div><b>Telephone</b>+998 33 488 48 88</div>
        <div><b>Email</b><a href="mailto:info@advizenco.com">info@advizenco.com</a></div>
        <div><b>Website</b><a href="https://advizenco.com">advizenco.com</a></div>
      </div>
    </div>`;
    folio(p, B.title);
    chapterPages.push({ title: "How Advizen can help", page: p.dataset.no, kind: "end" });
  }
  function back() {
    const p = newPage("back");
    p.innerHTML = `${img("img/window-night.jpg")}
      <div class="wordmark"><img src="img/Logo.webp" alt=""><span>ADVIZEN</span></div>
      <p class="bline">Tax, legal and accounting advice for companies investing in Uzbekistan.</p>
      <p class="fine">© 2026 Advizen Consulting, Tashkent. This publication is for general information only and is not legal, tax or accounting advice. advizenco.com</p>`;
  }

  /* ---------------- build ---------------- */
  async function build() {
    await document.fonts.ready;
    // Fonts come in unicode-range subsets that load only when a character first needs them,
    // which would reflow the fixed-height regions after they were measured. Load every face now.
    await Promise.all([...document.fonts].map((f) => f.load().catch(() => null)));
    await document.fonts.ready;
    cover();
    foreword();
    const tocList = contentsPage();
    for (const ch of B.chapters) {
      if (ch.missing) continue;
      if (ch.kind !== "appendix") opener(ch);
      layoutChapter(ch);
    }
    advizen();
    back();

    // fill the chapter contents on openers
    for (const ch of B.chapters) {
      if (!ch._opener) continue;
      const ul = ch._opener.querySelector(".toc ul");
      if (!ul) continue;
      const items = headingPages.filter((h) => h.chapter === ch).slice(0, 7);
      ul.innerHTML = items.map((h) => `<li><span>${h.text}</span><span>${h.page}</span></li>`).join("");
    }
    // main contents
    let prevKind = null;
    tocList.innerHTML = chapterPages.map((c) => {
      const cls = (c.kind !== "chapter" ? "app" : "") + (prevKind && prevKind !== c.kind ? " gap" : "");
      prevKind = c.kind;
      return `<li class="${cls}"><span>${c.page}</span><span>${c.title}</span></li>`;
    }).join("");

    // keep each opener figure on one line, then make the opener's words fit their space
    document.querySelectorAll(".opener .figs").forEach((row) => {
      // one size for all three figures: the size at which the longest still fits
      const bs = [...row.querySelectorAll(".fig b")];
      let size = parseFloat(getComputedStyle(bs[0]).fontSize);
      const fits = () => bs.every((b) => b.querySelector("i").offsetWidth <= b.clientWidth * 0.9);
      while (!fits() && size > 14) { size -= 1; bs.forEach((b) => (b.style.fontSize = size + "px")); }
    });
    // dark openers: the photo grows down to the words, so there is no gap between them
    document.querySelectorAll(".op-dark").forEach((p) => {
      const below = p.querySelector(".below");
      const photo = p.querySelector(".photo");
      const top = below.getBoundingClientRect().top - p.getBoundingClientRect().top;
      photo.style.height = Math.max(70 * MM, top - 9 * MM) + "px";
    });
    document.querySelectorAll(".opener").forEach((p) => {
      const box = p.querySelector(".below, .col");
      const h1 = p.querySelector("h1");
      let size = parseFloat(getComputedStyle(h1).fontSize);
      while (box && box.scrollHeight > box.clientHeight + 1 && size > 30) { size -= 2; h1.style.fontSize = size + "px"; }
    });

    // report pages whose regions still overflow (for the build log)
    const bad = [...document.querySelectorAll(".region")].filter((r) => {
      const rr = r.getBoundingClientRect();
      return r.scrollWidth > r.clientWidth + 2 || [...r.children].some((c) => { const cr = c.getBoundingClientRect(); return cr.left >= rr.right - 1 || cr.bottom > rr.bottom + 2; });
    }).map((r) => r.closest(".page").dataset.no);
    document.body.dataset.overflow = bad.join(",");
    document.body.dataset.pages = pageNo;
    // The <title> becomes the PDF's title, so it stays the guide's name; the build reads data-ready.
    document.title = B.title;
    document.body.dataset.ready = "READY " + pageNo + (bad.length ? " overflow:" + bad.join(",") : "");
  }
  build();
})();
