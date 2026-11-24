// Tuesday 24 November 2026 on one page: writes the day's news image to /output/entry.png.
//
// The image is drawn ahead of time from the page in page/ (see tools/render.mjs) and committed as entry.png.
// The grader runs this program with no network, so there is nothing to fetch or compute here: it reads the
// committed bytes and writes them out unchanged, which is also what makes two runs identical.
//
// Before writing, it checks the bytes against the contest's limits (a whole PNG, every chunk with a good
// checksum, at most 1024 by 1024 pixels and 1 MiB) and says what it found. A failed check is reported on
// stderr and the bytes are still written, so the gate, not this program, has the last word on the image.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { crc32 } from 'node:zlib';

const MAX_SIDE = 1024;
const MAX_BYTES = 1048576;
const PNG_SIGNATURE = '89504e470d0a1a0a';

// Walks the PNG chunk by chunk and returns what is wrong with it; an empty list means it is whole.
function inspect(png: Buffer): { width: number; height: number; chunks: number; faults: string[] } {
  const faults: string[] = [];
  let width = 0;
  let height = 0;
  let chunks = 0;
  let ended = false;
  if (png.length > MAX_BYTES) faults.push(`${png.length} bytes is over the ${MAX_BYTES} byte limit`);
  if (png.subarray(0, 8).toString('hex') !== PNG_SIGNATURE) {
    faults.push('the first eight bytes are not the PNG signature');
    return { width, height, chunks, faults };
  }
  let at = 8;
  while (at + 12 <= png.length && !ended) {
    const size = png.readUInt32BE(at);
    const type = png.toString('latin1', at + 4, at + 8);
    const end = at + 12 + size;
    if (end > png.length) {
      faults.push(`chunk ${type} runs past the end of the file`);
      break;
    }
    if (crc32(png.subarray(at + 4, at + 8 + size)) !== png.readUInt32BE(at + 8 + size)) faults.push(`chunk ${type} has a bad checksum`);
    if (chunks === 0) {
      if (type !== 'IHDR') faults.push('the first chunk is not IHDR');
      width = png.readUInt32BE(at + 8);
      height = png.readUInt32BE(at + 12);
    }
    ended = type === 'IEND';
    chunks += 1;
    at = end;
  }
  if (!ended) faults.push('there is no IEND chunk');
  else if (at !== png.length) faults.push(`${png.length - at} stray bytes follow IEND`);
  if (width < 1 || height < 1 || width > MAX_SIDE || height > MAX_SIDE) faults.push(`${width} x ${height} is outside 1 to ${MAX_SIDE} pixels a side`);
  return { width, height, chunks, faults };
}

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

const image = readFileSync(join(here, 'entry.png'));
const found = inspect(image);
for (const fault of found.faults) console.error(`entry.png: ${fault}`);

mkdirSync(outDir, { recursive: true });
writeFileSync(target, image);
console.log(
  `wrote ${target}: ${found.width} x ${found.height}, ${image.length} bytes, ${found.chunks} chunks, ` +
    `sha256 ${createHash('sha256').update(image).digest('hex')}` + (found.faults.length ? `, ${found.faults.length} fault(s)` : ', checks passed'),
);
