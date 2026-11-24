// Builds the page from window.DAY (stories.js), window.ART (art.js) and window.WORLD (worldmap.js).
// Counts shown on the page (stories, regions, fields, stories per region) are computed here from the data,
// so the masthead can never claim more than the page holds.
(function () {
  const D = window.DAY;
  const ART = window.ART;
  const WORLD = window.WORLD;
  const page = document.getElementById('page');

  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const add = (cls, html) => {
    const e = document.createElement('div');
    e.className = cls;
    e.innerHTML = html;
    page.appendChild(e);
    return e;
  };

  const region = Object.fromEntries(D.regions.map((r) => [r.key, r]));
  const stories = D.stories;
  const inRegion = (key) => stories.filter((s) => s.region === key).length;
  const regionsUsed = D.regions.filter((r) => r.key !== 'world' && inRegion(r.key) > 0);
  const fields = new Set(stories.map((s) => s.field));
  const cards = stories.filter((s) => s.kind !== 'list');
  const listed = stories.filter((s) => s.kind === 'list');

  // ---------- masthead ----------
  add('strip', `<span>${esc(D.kicker)}</span><span class="right">${stories.length} STORIES · ${regionsUsed.length} REGIONS · ` +
    `${fields.size} FIELDS · EVERY ONE DATED ${esc(D.short)}</span>`);
  add('date', esc(D.date));
  add('deck', D.deck.map(esc).join(' &nbsp;·&nbsp; '));
  add('regions', D.regions.filter((r) => inRegion(r.key) > 0)
    .map((r) => `<div style="background:${r.color}">${esc(r.name)} ${inRegion(r.key)}</div>`).join(''));

  add('timeline', `<span class="chip">UTC</span>` +
    D.timeline.map((e) => `<span><b>${esc(e.t)}</b>${esc(e.text)}</span>`).join(''));

  add('numbers', `<div class="title">THE DAY IN<br>NUMBERS</div>` +
    D.numbers.map((x) => `<div class="n"><b>${esc(x.n)}</b><span>${esc(x.label)}</span></div>`).join(''));

  // ---------- story cards ----------
  const card = (s) => {
    const r = region[s.region];
    const small = s.kind === 'small';
    return `<article class="card ${s.kind}" style="border-top-color:${r.color}">` +
      `<div class="art">${ART[s.art]()}` +
      `<div class="where"><b style="background:${r.color}">${s.id}</b>${esc(s.place)}</div></div>` +
      `<div class="txt"><div class="kicker"><span style="color:${r.color}">${esc(r.name)} · ${esc(s.field)}</span>` +
      `<span class="tag tag-${s.tag.toLowerCase()}">${s.tag}</span></div>` +
      `<h2>${esc(s.head)}</h2>` +
      `<p>${esc(s.body)}${small ? ` <i>${esc(s.src)}</i>` : ''}</p>` +
      (small ? '' : `<div class="src">${esc(s.src)}</div>`) +
      `</div></article>`;
  };
  const smalls = cards.filter((s) => s.kind === 'small');
  add('row leads', cards.filter((s) => s.kind === 'lead').map(card).join(''));
  add('row smalls one', smalls.slice(0, 5).map(card).join(''));
  add('row smalls two', smalls.slice(5, 10).map(card).join(''));

  // ---------- the "also" list ----------
  add('also', `<div class="h3">ALSO ON ${esc(D.weekday.toUpperCase())} ${esc(D.dayMonth.toUpperCase())}` +
    `<small>${listed.length} more stories · numbers run on from the cards</small></div><ol>` +
    listed.map((s) => {
      const r = region[s.region];
      return `<li><b class="num" style="background:${r.color}">${s.id}</b>` +
        `<div class="l1"><em style="color:${r.color}">${esc(s.place)}:</em> ${esc(s.head)}</div>` +
        `<div class="l2"><b style="color:${r.color}">${esc(s.field)}</b> · ${esc(s.detail)} · ${esc(s.src)}</div></li>`;
    }).join('') + `</ol>`);

  // ---------- the map ----------
  const W = 298;
  const H = Math.round(((WORLD.top - WORLD.bottom) * W) / 360);
  const X = (lon) => (((lon + 180) / 360) * W).toFixed(1);
  const Y = (lat) => (((WORLD.top - lat) / (WORLD.top - WORLD.bottom)) * H).toFixed(1);
  const land = WORLD.land.map((ring) => `<polygon points="${ring.map(([lon, lat]) => X(lon) + ',' + Y(lat)).join(' ')}"/>`).join('');
  const dots = listed.filter((s) => s.lon != null).map((s) =>
    `<circle cx="${X(s.lon)}" cy="${Y(s.lat)}" r="3" fill="${region[s.region].color}" stroke="#fff" stroke-width=".9"/>`).join('');
  const pins = cards.map((s) =>
    `<circle cx="${X(s.lon)}" cy="${Y(s.lat)}" r="6.6" fill="${region[s.region].color}" stroke="#fff" stroke-width="1.3"/>` +
    `<text x="${X(s.lon)}" y="${(Number(Y(s.lat)) + 3.1).toFixed(1)}" text-anchor="middle" font-family="DejaVu Sans, sans-serif" ` +
    `font-weight="700" font-size="8.6" fill="#fff">${s.id}</text>`).join('');
  const keyDot = (inner) => `<svg width="12" height="12" viewBox="0 0 12 12">${inner}</svg>`;
  add('mapbox', `<div class="h3">WHERE IT HAPPENED</div>` +
    `<svg class="map" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">` +
    `<rect width="${W}" height="${H}" fill="#d9e9f2"/><g fill="#b8c2a6" stroke="#8e9a7f" stroke-width=".5">${land}</g>${dots}${pins}` +
    `<rect x=".5" y=".5" width="${W - 1}" height="${H - 1}" fill="none" stroke="#b7ad98"/></svg>` +
    `<div class="mapkey">${keyDot('<circle cx="6" cy="6" r="5.2" fill="#12203c"/>')} 1–${cards.length} pictured stories &nbsp; ` +
    `${keyDot('<circle cx="6" cy="6" r="3" fill="#12203c"/>')} ${cards.length + 1}–${stories.length} listed, coloured by region</div>` +
    `<div class="howsure">` + D.legend.map((l) =>
      `<div><span class="tag tag-${l.tag.toLowerCase()}">${l.tag}</span>${esc(l.text)}</div>`).join('') + `</div>`);

  // ---------- date check ----------
  add('check', `<div class="rule"><span class="lab">DATE CHECK</span>${esc(D.check.rule)}</div>` +
    `<p>` + D.check.notes.map((n) => `<b>${esc(n.lead)}:</b> ${esc(n.text)}`).join(' ') + `</p>`);

  document.title = `${D.date}: one day of world news on one page`;
  window.__ready = true;
})();
