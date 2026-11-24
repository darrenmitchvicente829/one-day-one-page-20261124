// The pictures: one small flat scene per illustrated story, drawn here as SVG. No photographs, no outside art.
// Lead scenes use a 327 x 92 box and the smaller cards a 194 x 56 box. The top-left corner of every scene is
// kept quiet because the card puts the story number and place there.
(function () {
  const FONT = 'DejaVu Sans, sans-serif';

  const frame = (w, h, inner) =>
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">${inner}</svg>`;

  const label = (x, y, s, o = {}) =>
    `<text x="${x}" y="${y}" font-family="${FONT}" font-weight="700" font-size="${o.size || 9}" ` +
    `fill="${o.fill || '#fff'}" text-anchor="${o.anchor || 'start'}">${s}</text>`;

  // A star or a burst: n points, outer radius r, inner radius r * k.
  const spikes = (cx, cy, r, fill, n = 5, k = 0.42) => {
    const p = [];
    for (let i = 0; i < n * 2; i++) {
      const a = -Math.PI / 2 + (i * Math.PI) / n;
      const q = i % 2 ? r * k : r;
      p.push((cx + q * Math.cos(a)).toFixed(1) + ',' + (cy + q * Math.sin(a)).toFixed(1));
    }
    return `<polygon points="${p.join(' ')}" fill="${fill}"/>`;
  };

  const smoke = (x, y, s = 1, fill = '#474b55') =>
    `<ellipse cx="${x}" cy="${y}" rx="${12 * s}" ry="${6.5 * s}" fill="${fill}" opacity=".92"/>` +
    `<ellipse cx="${x + 11 * s}" cy="${y - 8 * s}" rx="${15 * s}" ry="${7.5 * s}" fill="${fill}" opacity=".8"/>`;

  const fire = (x, y, s = 1) =>
    `<polygon points="${x},${y} ${x + 4 * s},${y - 12 * s} ${x + 9 * s},${y - 5 * s} ${x + 13 * s},${y - 15 * s} ` +
    `${x + 18 * s},${y - 4 * s} ${x + 21 * s},${y - 9 * s} ${x + 24 * s},${y}" fill="#f26b21"/>` +
    `<polygon points="${x + 5 * s},${y} ${x + 9 * s},${y - 7 * s} ${x + 13 * s},${y - 2 * s} ` +
    `${x + 16 * s},${y - 8 * s} ${x + 19 * s},${y}" fill="#ffd166"/>`;

  // ---------------------------------------------------------------- lead scenes, 327 x 92

  // 1. Strait of Hormuz: three tankers burning between two shores, two mines in the water.
  const tanker = (x, y) =>
    `<g transform="translate(${x},${y})">` + smoke(18, -14, 1) + fire(10, 0, 1) +
    `<polygon points="0,0 54,0 49,8 5,8" fill="#141b26"/><rect x="5" y="6" width="44" height="2" fill="#a5281b"/>` +
    `<rect x="40" y="-7" width="10" height="7" fill="#e8edf2"/><rect x="45" y="-11" width="3" height="4" fill="#c0392b"/></g>`;
  const mine = (x, y) =>
    `<g stroke="#0d0f14" stroke-width="1.4"><path d="M${x - 6} ${y}H${x + 6}M${x} ${y - 6}V${y + 6}M${x - 4.3} ${y - 4.3}L${x + 4.3} ${y + 4.3}M${x - 4.3} ${y + 4.3}L${x + 4.3} ${y - 4.3}"/></g>` +
    `<circle cx="${x}" cy="${y}" r="3.6" fill="#0d0f14"/>`;
  const hormuz = () => frame(327, 92,
    `<rect width="327" height="92" fill="#24365e"/><rect y="28" width="327" height="8" fill="#d9783f"/>` +
    `<rect y="34" width="327" height="6" fill="#f3b562"/><rect y="40" width="327" height="52" fill="#1b4965"/>` +
    `<path d="M20 52h26M96 62h30M250 74h28M176 48h22M286 50h24" stroke="#3f7396" stroke-width="1.2"/>` +
    `<polygon points="0,40 0,22 30,18 62,26 98,21 132,32 158,40" fill="#3b302b"/>` +
    `<polygon points="327,92 236,92 256,77 288,69 327,63" fill="#2c2420"/>` +
    tanker(40, 60) + tanker(142, 74) + tanker(226, 56) + mine(118, 84) + mine(212, 86) +
    `<rect x="169" y="5" width="152" height="15" rx="2" fill="#a5281b"/>` + label(245, 15.6, 'IRAN: 3 TANKERS ABLAZE', { anchor: 'middle' }));

  // 2. Asia's markets: three green bars for the day's gains beside an AI chip.
  const bar = (x, h, value, city) =>
    `<rect x="${x}" y="${76 - h}" width="44" height="${h}" fill="#27ae60"/><rect x="${x}" y="${76 - h}" width="44" height="3" fill="#58d68d"/>` +
    label(x + 22, 76 - h - 4, value, { size: 13, anchor: 'middle' }) + label(x + 22, 87, city, { size: 9, anchor: 'middle', fill: '#dbe4f0' });
  const markets = () => frame(327, 92,
    `<rect width="327" height="92" fill="#0f1b33"/><path d="M0 36H327M0 56H327M0 76H327" stroke="#22335c" stroke-width="1"/>` +
    bar(26, 40, '+9%', 'TAIPEI') + bar(100, 28, '+6%', 'SEOUL') + bar(174, 17, '+4%', 'TOKYO') +
    `<g fill="#f2c14e"><rect x="250" y="26" width="46" height="46" rx="4"/>` +
    [0, 1, 2, 3].map((i) => `<rect x="${257 + i * 9.5}" y="20" width="4" height="6"/><rect x="${257 + i * 9.5}" y="72" width="4" height="6"/>` +
      `<rect x="244" y="${33 + i * 9.5}" width="6" height="4"/><rect x="296" y="${33 + i * 9.5}" width="6" height="4"/>`).join('') + `</g>` +
    `<rect x="258" y="34" width="30" height="30" fill="#1b2333"/>` + label(273, 54, 'AI', { size: 13, anchor: 'middle' }) +
    `<polygon points="316,18 325,33 319,33 319,74 313,74 313,33 307,33" fill="#27ae60"/>`);

  // 3. Ukraine: drones in the night sky and a five-storey block with one corner torn away.
  const drone = (x, y) =>
    `<path d="M${x - 22} ${y + 4}H${x - 3}" stroke="#7d8aa8" stroke-width="1" stroke-dasharray="3 3"/>` +
    `<polygon points="${x},${y} ${x + 14},${y + 4} ${x},${y + 8} ${x + 4},${y + 4}" fill="#dfe6f2"/>`;
  const ukraine = () => {
    let windows = '';
    for (let r = 0; r < 5; r++) for (let c = 0; c < 7; c++) {
      windows += `<rect x="${205 + c * 13}" y="${35 + r * 10}" width="8" height="6" fill="${(r * 3 + c * 5) % 4 === 0 ? '#f6d365' : '#161d33'}"/>`;
    }
    return frame(327, 92,
      `<rect width="327" height="92" fill="#0e1730"/>` +
      [[18, 30], [64, 60], [112, 26], [150, 58], [186, 22], [310, 14], [246, 12], [176, 70]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r=".9" fill="#c9d4ea"/>`).join('') +
      `<polygon points="34,92 4,24 22,24" fill="#fff" opacity=".09"/><polygon points="120,92 160,24 178,24" fill="#fff" opacity=".09"/>` +
      `<rect x="200" y="30" width="96" height="54" fill="#2a3350"/>` + windows +
      `<polygon points="266,30 296,30 296,62 286,55 280,45 270,41" fill="#0e1730"/>` +
      smoke(282, 20, 1.1, '#3a3f4b') + fire(268, 56, 1) +
      `<polygon points="286,84 292,74 300,78 306,70 314,84" fill="#3a4160"/><rect y="84" width="327" height="8" fill="#060a14"/>` +
      drone(40, 34) + drone(84, 48) + drone(122, 30) + drone(22, 58) + spikes(172, 40, 8, '#ffd166', 8, 0.45) +
      `<rect x="6" y="72" width="138" height="15" rx="2" fill="#1d4e89"/>` + label(75, 82.6, '96 DRONES · 73 DOWNED', { anchor: 'middle' }));
  };

  // ---------------------------------------------------------------- small scenes, 194 x 56

  // 4. Senegal: the flag, the cup and the score the court put back on the board.
  const senegal = () => frame(194, 56,
    `<rect width="194" height="56" fill="#1f6f3d"/>` +
    [0, 2, 4, 6].map((i) => `<rect x="${i * 28}" width="28" height="56" fill="#237a44"/>`).join('') +
    `<circle cx="66" cy="60" r="24" fill="none" stroke="#fff" stroke-width="1.2" opacity=".4"/>` +
    `<rect x="10" y="22" width="10" height="20" fill="#00853f"/><rect x="20" y="22" width="10" height="20" fill="#fdef42"/>` +
    `<rect x="30" y="22" width="10" height="20" fill="#e31b23"/>` + spikes(25, 32, 3.6, '#00853f') +
    `<rect x="9.5" y="21.5" width="31" height="21" fill="none" stroke="#fff" stroke-width="1"/>` +
    `<path d="M56 21H76V26A10 10 0 0 1 56 26Z" fill="#f2c14e"/>` +
    `<path d="M56 23H51A6 6 0 0 0 57 31M76 23H81A6 6 0 0 1 75 31" fill="none" stroke="#f2c14e" stroke-width="2.2"/>` +
    `<rect x="64" y="35" width="4" height="8" fill="#d9a531"/><rect x="58" y="43" width="16" height="5" rx="1" fill="#c9972b"/>` +
    `<rect x="92" y="19" width="96" height="32" rx="3" fill="#101820"/>` +
    label(140, 32.5, 'SENEGAL 1–0', { size: 11.5, anchor: 'middle' }) +
    label(140, 45, 'TITLE RESTORED', { size: 8.8, anchor: 'middle', fill: '#f2c14e' }));

  // 5. New York: the courthouse and the count of the verdict.
  const huawei = () => frame(194, 56,
    `<rect width="194" height="56" fill="#1c2541"/>` +
    `<polygon points="8,29 42,17 76,29" fill="#e3e8f1"/><rect x="10" y="29" width="64" height="4" fill="#cfd6e4"/>` +
    [0, 1, 2, 3, 4].map((i) => `<rect x="${14 + i * 13}" y="33" width="5" height="15" fill="#e3e8f1"/>`).join('') +
    `<rect x="8" y="48" width="68" height="3.5" fill="#cfd6e4"/><rect x="4" y="51.5" width="76" height="4.5" fill="#aab4c8"/>` +
    `<circle cx="42" cy="24.5" r="2.4" fill="#1c2541"/>` +
    `<rect x="90" y="19" width="98" height="32" rx="3" fill="#a5281b"/>` +
    label(139, 32.5, 'GUILTY ON 10', { size: 11, anchor: 'middle' }) +
    label(139, 45, 'OF 12 COUNTS', { size: 11, anchor: 'middle' }));

  // 6. Gaza: tents, a small police post, a drone overhead and the blast.
  const gaza = () => frame(194, 56,
    `<rect width="194" height="56" fill="#3a4162"/><rect y="31" width="194" height="6" fill="#c98b5e" opacity=".75"/>` +
    `<rect y="37" width="194" height="19" fill="#b89a6a"/>` +
    `<polygon points="8,46 20,32 32,46" fill="#e9e2cf"/><polygon points="30,48 41,35 52,48" fill="#d9cfb4"/><polygon points="0,52 9,41 18,52" fill="#efe9d8"/>` +
    `<path d="M20 32V46M41 35V48" stroke="#a89f86" stroke-width="1"/>` +
    `<rect x="94" y="28" width="46" height="17" fill="#a3a9b0"/><rect x="92" y="26" width="50" height="3" fill="#6b7280"/>` +
    `<rect x="94" y="31.5" width="46" height="2.5" fill="#1d4e89"/><rect x="112" y="35" width="8" height="10" fill="#4a5568"/>` +
    smoke(146, 17, 0.9, '#565c68') + spikes(136, 28, 10, '#f26b21', 8, 0.5) + spikes(136, 28, 5.5, '#ffd166', 8, 0.5) +
    `<path d="M74 26L128 28" stroke="#fff" stroke-width="1" stroke-dasharray="3 3"/>` +
    `<polygon points="52,24 57,21.5 72,22.5 77,19.5 77,25.5 57,26.5" fill="#dfe6ee"/><path d="M58 24.2H70" stroke="#8a93a3" stroke-width="1.6"/>`);

  // 7. Uzhhorod: the two flags, the railway between them and what was agreed.
  const uzhhorod = () => frame(194, 56,
    `<rect width="194" height="56" fill="#e3ebf6"/><rect y="44" width="194" height="12" fill="#c9d3e3"/>` +
    `<path d="M0 47H194M0 52H194" stroke="#5b6577" stroke-width="1.3"/>` +
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => `<rect x="${3 + i * 12.4}" y="46" width="3" height="7" fill="#7a5a3c"/>`).join('') +
    `<path d="M12 20V46M182 20V46" stroke="#5b6577" stroke-width="1.6"/>` +
    `<rect x="13" y="21" width="32" height="9.5" fill="#0057b7"/><rect x="13" y="30.5" width="32" height="9.5" fill="#ffd700"/>` +
    `<rect x="149" y="21" width="32" height="6.4" fill="#ce2939"/><rect x="149" y="27.4" width="32" height="6.3" fill="#fff"/>` +
    `<rect x="149" y="33.7" width="32" height="6.3" fill="#477050"/>` +
    `<rect x="52" y="21" width="90" height="19" rx="3" fill="#12203c"/>` +
    label(97, 29.6, 'DEALS ON GAS,', { size: 8.2, anchor: 'middle' }) + label(97, 37.6, 'DIESEL AND RAIL', { size: 8.2, anchor: 'middle' }));

  // 8. Ulleung: warplanes over the sea, the island and a red alert.
  const plane = (x, y) =>
    `<polygon points="${x},${y + 3} ${x + 6},${y + 2} ${x + 3},${y - 3} ${x + 6},${y - 3} ${x + 11},${y + 2} ${x + 18},${y + 3} ` +
    `${x + 11},${y + 4} ${x + 6},${y + 9} ${x + 3},${y + 9} ${x + 6},${y + 4}" fill="#33415c"/>`;
  const ulleung = () => frame(194, 56,
    `<rect width="194" height="56" fill="#cfe8f6"/><rect y="37" width="194" height="19" fill="#2a6f97"/>` +
    `<path d="M10 44h18M52 49h20M168 46h16M84 42h14" stroke="#7fb3d1" stroke-width="1.1"/>` +
    `<polygon points="104,37 115,25 125,17 133,24 142,14 154,27 168,37" fill="#3d5a45"/>` +
    `<path d="M150 14a10 10 0 0 1 8 8M155 9a17 17 0 0 1 12 13" stroke="#c0392b" stroke-width="1.6" fill="none"/>` +
    plane(14, 24) + plane(42, 29) + plane(70, 23) +
    `<rect x="146" y="26" width="44" height="13" rx="2.5" fill="#c0392b"/>` + label(168, 35.6, 'ALERT', { size: 9, anchor: 'middle' }));

  // 9. Jiuquan: the rocket on its pad between the two flags.
  const jiuquan = () => frame(194, 56,
    `<rect width="194" height="56" fill="#f6dfb3"/><rect y="43" width="194" height="13" fill="#c9a56a"/>` +
    `<polygon points="0,43 40,39 86,43" fill="#d8b77c"/>` +
    `<rect x="84" y="15" width="4" height="28" fill="#6b7280"/><path d="M88 22h7M88 32h7" stroke="#6b7280" stroke-width="1.5"/>` +
    `<rect x="90.5" y="29" width="3.5" height="14" fill="#d9dde3"/><rect x="102" y="29" width="3.5" height="14" fill="#d9dde3"/>` +
    `<rect x="94" y="17" width="8" height="26" fill="#f8f8f8" stroke="#9aa0a6" stroke-width=".6"/>` +
    `<polygon points="94,17 98,8 102,17" fill="#d62828"/><rect x="94" y="25" width="8" height="3" fill="#d62828"/>` +
    `<rect x="16" y="23" width="27" height="18" fill="#de2910"/>` + spikes(22.5, 29, 3.4, '#ffde00') +
    [[28, 25.5], [30, 28], [30, 31], [28, 33.5]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r=".9" fill="#ffde00"/>`).join('') +
    `<rect x="136" y="21" width="27" height="18" fill="#01411c"/><rect x="136" y="21" width="6.7" height="18" fill="#fff"/>` +
    `<circle cx="152.5" cy="30" r="5" fill="#fff"/><circle cx="154" cy="29" r="4.2" fill="#01411c"/>` + spikes(155.6, 27.6, 1.9, '#fff') +
    label(8, 53, 'SHENZHOU-24', { fill: '#3b2a12' }));

  // 10. Canberra: a phone, a gavel and the size of the fine.
  const canberra = () => frame(194, 56,
    `<rect width="194" height="56" fill="#d9efe6"/>` +
    `<rect x="14" y="20" width="22" height="33" rx="3" fill="#1b2333"/><rect x="16.5" y="23.5" width="17" height="25" fill="#f8fafc"/>` +
    [['#2563a8', 18.5, 25.5], ['#c0392b', 26, 25.5], ['#7d3c98', 18.5, 33], ['#27ae60', 26, 33], ['#e67e22', 18.5, 40.5], ['#0e8aa0', 26, 40.5]]
      .map(([c, x, y]) => `<rect x="${x}" y="${y}" width="5.5" height="5.5" rx="1" fill="${c}"/>`).join('') +
    `<path d="M56 49L82 27" stroke="#7a4b2a" stroke-width="4.5" stroke-linecap="round"/>` +
    `<polygon points="74,17 92,29 86,38 68,26" fill="#5c3a1e"/><rect x="48" y="50" width="24" height="4" rx="1" fill="#5c3a1e"/>` +
    label(142, 15, 'FINES UP TO', { size: 9, anchor: 'middle', fill: '#1b2333' }) + label(142, 40, '5%', { size: 27, anchor: 'middle', fill: '#b3261e' }));

  // 11. Villavicencio: a columned government building at night, one end blown out, a burnt car beside it.
  const villavicencio = () => frame(194, 56,
    `<rect width="194" height="56" fill="#2b2d42"/>` +
    `<path d="M18 22V48" stroke="#9aa0a6" stroke-width="1.4"/><rect x="19" y="22" width="15" height="5" fill="#fcd116"/>` +
    `<rect x="19" y="27" width="15" height="2.5" fill="#003893"/><rect x="19" y="29.5" width="15" height="2.5" fill="#ce1126"/>` +
    `<rect x="40" y="30" width="96" height="18" fill="#e7e1d3"/><polygon points="36,30 88,19 140,30" fill="#d6cfbe"/>` +
    [0, 1, 2, 3, 4, 5].map((i) => `<rect x="${46 + i * 15}" y="31" width="4" height="17" fill="#bdb5a1"/>`).join('') +
    `<rect x="84" y="38" width="8" height="10" fill="#5a4632"/>` +
    `<polygon points="110,24 140,30 140,48 126,48 121,39 114,35" fill="#2b2d42"/>` + smoke(142, 18, 0.95) + fire(114, 48, 0.9) +
    `<polygon points="136,48 140,43 146,46 150,41 155,48" fill="#8f8a7d"/>` +
    `<polygon points="158,48 161,42 168,40 177,40 183,43 187,48" fill="#101116"/><circle cx="164" cy="48" r="2.6" fill="#000"/><circle cx="181" cy="48" r="2.6" fill="#000"/>` +
    fire(164, 41, 0.55) + `<rect y="48.5" width="194" height="7.5" fill="#17181f"/>`);

  // 12. Singapore: an AI chip stopped at a striped barrier.
  const singapore = () => frame(194, 56,
    `<rect width="194" height="56" fill="#10233f"/>` +
    `<g fill="#f2c14e"><rect x="14" y="23" width="28" height="28" rx="3"/>` +
    [0, 1, 2].map((i) => `<rect x="${19.5 + i * 7.5}" y="19" width="3" height="4"/><rect x="${19.5 + i * 7.5}" y="51" width="3" height="4"/>` +
      `<rect x="10" y="${28.5 + i * 7.5}" width="4" height="3"/><rect x="42" y="${28.5 + i * 7.5}" width="4" height="3"/>`).join('') + `</g>` +
    `<rect x="19" y="28" width="18" height="18" fill="#1b2333"/>` + label(28, 40.4, 'AI', { size: 9, anchor: 'middle' }) +
    `<path d="M52 37H98" stroke="#9fb3d1" stroke-width="2" stroke-dasharray="4 3"/><polygon points="98,32.5 107,37 98,41.5" fill="#9fb3d1"/>` +
    `<rect x="113" y="22" width="5" height="31" fill="#dfe6ee"/><rect x="118" y="25" width="68" height="6.5" fill="#fff"/>` +
    [0, 1, 2, 3, 4, 5].map((i) => `<rect x="${121 + i * 11.4}" y="25" width="5.7" height="6.5" fill="#c0392b"/>`).join('') +
    label(124, 42, '7 FIRMS', { size: 8.8 }) + label(124, 52, 'BLACKLISTED', { size: 8.8 }));

  // 13. Eastern Nepal: snow peaks, a seismograph trace and the magnitude.
  const nepal = () => frame(194, 56,
    `<rect width="194" height="56" fill="#dceaf7"/>` +
    `<polygon points="0,46 26,22 44,34 70,14 98,38 122,22 150,42 172,28 194,40 194,56 0,56" fill="#7f8fa9"/>` +
    `<polygon points="20,28 26,22 32,28 26,26" fill="#fff"/><polygon points="63,22 70,14 77,22 70,19" fill="#fff"/><polygon points="116,28 122,22 128,28 122,26" fill="#fff"/>` +
    `<polygon points="0,56 0,48 38,43 88,49 138,43 194,49 194,56" fill="#4f7353"/>` +
    `<polyline points="0,35 46,35 52,31 57,40 62,21 67,47 72,26 77,41 82,32 90,35 194,35" fill="none" stroke="#c0392b" stroke-width="1.8" stroke-linejoin="round"/>` +
    `<rect x="130" y="35" width="58" height="16" rx="3" fill="#c0392b"/>` + label(159, 46.8, 'M 5.6', { size: 11, anchor: 'middle' }));

  window.ART = { hormuz, markets, ukraine, senegal, huawei, gaza, uzhhorod, ulleung, jiuquan, canberra, villavicencio, singapore, nepal };
})();
