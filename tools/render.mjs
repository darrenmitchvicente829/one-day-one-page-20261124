// Build step, not part of what the grader runs: draws page/index.html in headless Chromium and saves it as
// entry.png, 1024 by 1024, then checks the picture against the contest's limits.
//
//   node tools/render.mjs [--out entry.png] [--thumb small.png]
//
// It needs the playwright-core package and its Chromium installed where Node resolves packages from (a
// node_modules folder in this repository or in a folder above it). Nothing here runs in the grader.
//
// It fails (exit 1) when any text does not fit its box, when the page throws, or when the PNG breaks a limit,
// so a clipped headline cannot reach the committed image unnoticed.

import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from 'playwright-core';

const SIDE = 1024;
const MAX_BYTES = 1048576;

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const option = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const out = resolve(option('--out', join(root, 'entry.png')));
const thumb = option('--thumb', '');

const browser = await chromium.launch();
const problems = [];

const page = await browser.newPage({ viewport: { width: SIDE, height: SIDE }, deviceScaleFactor: 1 });
page.on('pageerror', (e) => problems.push('page error: ' + e.message));
page.on('console', (m) => {
  if (m.type() === 'error') problems.push('console error: ' + m.text());
});
await page.goto(pathToFileURL(join(root, 'page', 'index.html')).href);
await page.waitForFunction(() => window.__ready === true, null, { timeout: 15000 });
await page.evaluate(() => document.fonts.ready);

// Every text box on the page has a fixed size and hides what spills out of it; find the ones that spill.
const spills = await page.evaluate(() => {
  const boxes = '.strip, .date, .deck, .regions div, .timeline, .numbers .n span, .where, .kicker, .card h2, .card p, ' +
    '.src, .h3, .also .l1, .also .l2, .mapkey, .howsure div, .check .rule, .check p';
  const found = [];
  for (const e of document.querySelectorAll(boxes)) {
    const wide = e.scrollWidth - e.clientWidth;
    const tall = e.scrollHeight - e.clientHeight;
    if (wide > 0.5 || tall > 0.5) {
      found.push(`${e.className || e.tagName}: "${e.textContent.trim().slice(0, 60)}" spills ${wide}px wide, ${tall}px tall`);
    }
  }
  // Anything that reaches past the page edge is a layout mistake too.
  for (const e of document.querySelectorAll('#page > *')) {
    const r = e.getBoundingClientRect();
    if (r.right > 1024.5 || r.bottom > 1024.5 || r.left < -0.5 || r.top < -0.5) found.push(`${e.className}: outside the page`);
  }
  return found;
});
problems.push(...spills);

const counts = await page.evaluate(() => ({
  stories: window.DAY.stories.length,
  cards: document.querySelectorAll('.card').length,
  listed: document.querySelectorAll('.also li').length,
}));

await page.screenshot({ path: out, type: 'png', clip: { x: 0, y: 0, width: SIDE, height: SIDE } });

if (thumb) {
  // The judge is told to look for legibility at about 300 pixels across: save that view for a human check.
  // The picture goes in as a data URL: a blank page may not load a file:// image.
  const small = await browser.newPage({ viewport: { width: 300, height: 300 }, deviceScaleFactor: 1 });
  const data = readFileSync(out).toString('base64');
  await small.setContent(`<body style="margin:0"><img src="data:image/png;base64,${data}" width="300" height="300"></body>`);
  await small.waitForFunction(() => document.images[0].complete && document.images[0].naturalWidth > 0);
  await small.screenshot({ path: resolve(thumb), type: 'png' });
}
await browser.close();

// The limits the gate applies: a whole PNG, at most 1024 by 1024 and 1 MiB.
const png = readFileSync(out);
const signature = png.subarray(0, 8).toString('hex') === '89504e470d0a1a0a';
const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);
if (!signature) problems.push('not a PNG');
if (width !== SIDE || height !== SIDE) problems.push(`image is ${width} x ${height}, expected ${SIDE} x ${SIDE}`);
if (png.length > MAX_BYTES) problems.push(`image is ${png.length} bytes, over the ${MAX_BYTES} limit`);
if (counts.cards + counts.listed !== counts.stories) problems.push(`page shows ${counts.cards + counts.listed} stories, data holds ${counts.stories}`);

console.log(`${out}: ${width} x ${height}, ${png.length} bytes, sha256 ${createHash('sha256').update(png).digest('hex')}`);
console.log(`stories on the page: ${counts.cards} cards + ${counts.listed} listed = ${counts.cards + counts.listed}`);
if (problems.length) {
  console.log(`${problems.length} problem(s):`);
  for (const p of problems) console.log('  - ' + p);
  process.exit(1);
}
console.log('no problems found');
