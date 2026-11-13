import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('drawings/provisional/phase2');
const expected = [
  'PH2-FS-PL-01-common-shell-plan.svg',
  'PH2-FS-EL-01-driver-service-cut-elevation.svg',
  'PH2-FS-EL-02-interior-structural-reserve-elevation.svg',
  'PH2-FS-EL-03-passenger-utility-elevation.svg',
  'PH2-FS-RP-01-roof-chassis-reserve-plan.svg',
  'PH2-FS-SE-01-service-wall-sections.svg'
];

const failures = [];
const contents = new Map();
for (const file of expected) {
  const target = path.join(dir, file);
  if (!fs.existsSync(target)) {
    failures.push(`missing ${file}`);
    continue;
  }
  const body = fs.readFileSync(target, 'utf8');
  contents.set(file, body);
  for (const required of ['PROVISIONAL — NOT FOR FABRICATION', 'NOT A CUT FILE', '<title', '<desc']) {
    if (!body.includes(required)) failures.push(`${file}: missing ${required}`);
  }
  for (const prohibited of ['curb side', 'street side', 'APPROVED FOR FABRICATION', 'RELEASED FOR FABRICATION', 'FINAL CUT DIMENSION']) {
    if (body.toLowerCase().includes(prohibited.toLowerCase())) failures.push(`${file}: prohibited phrase ${prohibited}`);
  }
}

const all = [...contents.values()].join('\n');
const packageChecks = [
  ['60 × 30', '60 × 30 maximum opening'],
  ['114 × 56 × 76', 'finished-clear boundary'],
  ['D1', 'passenger-side door'],
  ['HINGE SIDE UNKNOWN', 'D1 hinge uncertainty'],
  ['OPTIONAL HVAC', 'optional HVAC reserve'],
  ['NO FLOOR HOLES', 'floor penetration hold'],
  ['CORNER RADII UNKNOWN', 'corner-radius hold'],
  ['MEMBER / CONNECTION UNKNOWN', 'reinforcement-detail hold'],
  ['ZERO INTRUSION', 'clear-width protection']
];
for (const [needle, label] of packageChecks) {
  if (!all.includes(needle)) failures.push(`package missing ${label}: ${needle}`);
}

const openingWidth = 60;
const openingHeight = 30;
const sill = 36;
const workZone = 90;
const frontPier = 15;
const rearPier = 15;
const finishedLength = 114;
const finishedWidth = 56;
const counterDepth = 24;
const aisle = 32;

if (frontPier + openingWidth + rearPier !== workZone) failures.push('15 + 60 + 15 must equal the 90-inch work zone');
if (counterDepth + aisle !== finishedWidth) failures.push('24-inch counter + 32-inch aisle must equal 56-inch clear width');
if (Math.min(24, Math.max(0, finishedLength - workZone)) !== 24) failures.push('front wish-list remainder assertion failed');
if (sill + openingHeight !== 66) failures.push('36-inch sill + 30-inch opening must produce a 66-inch head datum');

const schedule = fs.readFileSync(path.join(dir, 'PH2-FS-SCHEDULE-01.md'), 'utf8');
for (const required of ['Fabrication release | Not authorized | HOLD', 'Overall Phase 2 Fabrication Shell approval | Approved as Option A Gate 2 spatial-control basis; all UNKNOWN and no-fabrication holds retained | APPROVED FOR COORDINATION', '1:1 CAD/vector file only after Gate 5 release']) {
  if (!schedule.includes(required)) failures.push(`schedule missing control: ${required}`);
}

if (failures.length) {
  console.error('PHASE 2 FABRICATION-SHELL VALIDATION FAILED');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`PASS: ${expected.length} Phase 2 SVG sheets present and controlled.`);
console.log('PASS: required unknown, reserve, no-cut and no-fabrication labels present.');
console.log('PASS: 15 + 60 + 15 = 90, 24 + 32 = 56, and Z 36 + 30 = Z 66 assertions hold.');
console.log('PASS: schedule keeps fabrication on HOLD and limits Phase 2 approval to Gate 2 coordination.');
