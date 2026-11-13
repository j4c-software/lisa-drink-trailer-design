import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('drawings/provisional/phase3');
const files = [
  'PH3-OA-PL-01-fixed-shell-fit-plan.svg',
  'PH3-OA-EL-01-passenger-wall-fit-elevation.svg'
];
const failures = [];
let combined = '';

for (const file of files) {
  const target = path.join(dir, file);
  if (!fs.existsSync(target)) {
    failures.push(`missing ${file}`);
    continue;
  }
  const body = fs.readFileSync(target, 'utf8');
  combined += body;
  for (const required of ['SUPERSEDED PLACEMENT STUDY', 'DO NOT USE FOR PLACEMENT', '<title', '<desc']) {
    if (!body.includes(required)) failures.push(`${file}: missing ${required}`);
  }
}

for (const required of ['D1 30 NOMINAL', '60-IN PASSENGER SERVICE LINE', '18 REFRIGERATOR 1', '18 REFRIGERATOR 2', '6 RINSE', 'REMOVABLE ICE BIN', '114 FINISHED CLEAR', 'X 18–48 PROXY']) {
  if (!combined.includes(required)) failures.push(`package missing ${required}`);
}

const wall = 114;
const door = 30;
const formerLine = 90;
const wetLine = 60;
const testGap = 6;
const proxyFront = 18;

if (door + formerLine - wall !== 6) failures.push('former line overrun must equal 6 inches');
if (proxyFront + door + testGap + wetLine !== wall) failures.push('18 + 30 + 6 + 60 must equal 114 inches');
if (36 + 6 + 18 !== wetLine) failures.push('36-inch sink + 6-inch rinser + 18-inch Refrigerator 2 must equal 60-inch passenger service line');
if (56 - 18 !== 38) failures.push('56-inch clear width - 18-inch refrigerator width must equal 38-inch front passage');

const report = fs.readFileSync(path.join(dir, 'PH3-OA-FIT-STUDY-01.md'), 'utf8');
for (const required of ['REJECTED FOR FIT', 'also **SUPERSEDED**', 'clear opening, hinge, threshold and interior approach remain `UNKNOWN`']) {
  if (!report.includes(required)) failures.push(`report missing control: ${required}`);
}

if (failures.length) {
  console.error('PHASE 3 OPTION A FIT-STUDY VALIDATION FAILED');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PASS: two Phase 3 Option A fit-study SVG sheets are visibly marked superseded.');
console.log('PASS: 30 + 90 exceeds 114 by 6 inches; former uninterrupted line is rejected.');
console.log('PASS: historical fit arithmetic remains internally consistent but is not active placement authority.');
