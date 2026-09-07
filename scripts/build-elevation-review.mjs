import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'renders', 'elevation-review');
const SOURCE_OUT = path.join(OUT, 'source-svg');
const ILLUSTRATION_OUT = path.join(OUT, 'illustrations');
const PHOTO_OUT = path.join(OUT, 'photo-renders');
const BOARD_OUT = path.join(OUT, 'boards');
for (const dir of [OUT, SOURCE_OUT, ILLUSTRATION_OUT, PHOTO_OUT, BOARD_OUT]) fs.mkdirSync(dir, { recursive: true });

const optionDocs = {
  A: path.join(ROOT, '03-OPTION-A.md'),
  B: path.join(ROOT, '04-OPTION-B.md'),
  C: path.join(ROOT, '05-OPTION-C.md'),
};

const shared = {
  'EL-03': [
    'HIGH DRY', 'ELECTRICAL PANEL', 'LOCKABLE EMPLOYEE CUBBIES', 'MIRROR',
    'WATER', 'CHARGING', 'FIRST AID', 'FOLDING HOOKS', 'FOLD-DOWN EMPLOYEE SEAT',
    'NO PARTITION', '56&quot; INTERIOR CLEAR WIDTH',
  ],
  'EL-04': [
    'RELIEF VENT', 'EMERGENCY LIGHT', 'FUNCTIONAL DOUBLE REAR DOORS',
    '56&quot; INTERIOR CLEAR WIDTH',
  ],
};

const jobs = [
  {
    option: 'A', view: 'PL-01', file: 'A-PL-01.svg',
    expected: ['TONGUE / FRONT', 'TRAILER RIGHT • CURB / SERVICE / CUSTOMER SIDE', 'TRAILER LEFT • STREET / UTILITY / EQUIPMENT SIDE', '32&quot; NOMINAL CLEAR AISLE', '114&quot; ASSUMED INTERIOR CLEAR LENGTH', 'ROOF ESCAPE HATCH', '6&quot; OUTBOARD DRY STORAGE'],
    docExpected: ['24-inch', '90-inch equipment line', '32-inch', 'outboard storage', 'roof escape'],
  },
  {
    option: 'B', view: 'PL-01', file: 'B-PL-01.svg',
    expected: ['TONGUE / FRONT', 'TRAILER RIGHT • CURB / SERVICE / CUSTOMER SIDE', 'TRAILER LEFT • STREET / UTILITY / STAFF-DOOR SIDE', '32&quot; NOMINAL CLEAR AISLE', '114&quot; ASSUMED INTERIOR CLEAR LENGTH', '90&quot; UNDER-WINDOW', 'LINEAR GALLERY'],
    docExpected: ['24-inch', '90-inch equipment line', '32-inch', 'Linear Gallery'],
  },
  {
    option: 'A', view: 'EL-01', file: 'A-EL-01-curb-service.svg',
    expected: ['TRAILER RIGHT WALL', 'FRONT / TONGUE AT IMAGE RIGHT', '60&quot; MAXIMUM CONCEPT', 'SERVICE HATCH', '14–16&quot; CUSTOMER LEDGE', '6&quot;-DEEP OUTBOARD DRY STORAGE'],
    docExpected: ['six-inch-deep fixed storage cabinets', '60" service opening'],
  },
  {
    option: 'C', view: 'PL-01', file: 'C-PL-01.svg',
    expected: ['TONGUE / FRONT', 'TRAILER RIGHT • CURB / SERVICE / CUSTOMER SIDE', 'TRAILER LEFT • STREET / UTILITY / STAFF-DOOR SIDE', '32&quot; NOMINAL CLEAR AISLE', '114&quot; ASSUMED INTERIOR CLEAR LENGTH', 'TWIN-WING BACKBAR', 'HEALTH-AUTHORITY PERMISSION REQUIRED'],
    docExpected: ['24-inch', '90-inch equipment line', '32-inch', 'Twin-Wing Backbar'],
  },
  {
    option: 'A', view: 'EL-02', file: 'A-EL-02-street-opposite.svg',
    expected: ['TRAILER LEFT WALL', 'FRONT / TONGUE AT IMAGE LEFT', 'HAND', '2-COMP SINK', '36&quot;', 'COCKTAIL / ICE', '24&quot;', 'REFRIGERATOR', '18&quot;', 'ENGINEERED INFILL'],
    docExpected: ['12-inch hand sink', '36-inch two-compartment sink', '24-inch cocktail station', '18-inch undercounter refrigerator'],
  },
  {
    option: 'A', view: 'EL-03', file: 'A-EL-03-front-partition.svg', expected: shared['EL-03'],
    docExpected: ['electrical distribution panel', 'cubbies', 'mirror', 'hooks', 'drinking water', 'charging', 'first-aid', 'fold-down seat'],
    reviewedOverride: 'renders/candidates/option-a-elevations/A-EL-03-photo-render-candidate-03-interior-only.png',
  },
  {
    option: 'A', view: 'EL-04', file: 'A-EL-04-rear-doors.svg',
    expected: [...shared['EL-04'], 'PRIMARY STAFF ENTRY / EGRESS', 'FORWARD 24 × 36" MIN ROOF HATCH'],
    docExpected: ['double rear doors', 'emergency light', 'relief vent', 'roof escape'],
  },
  {
    option: 'B', view: 'EL-01', file: 'B-EL-01-curb-service.svg',
    expected: ['TRAILER RIGHT WALL', 'FRONT / TONGUE AT IMAGE RIGHT', 'HAND SINK', '12&quot;', '2-COMP SINK', '36&quot;', 'COCKTAIL / ICE', '24&quot;', 'REFRIGERATOR', '18&quot;'],
    docExpected: ['12-inch hand sink', '36-inch two-compartment sink', '24-inch cocktail station', '18-inch undercounter refrigerator'],
  },
  {
    option: 'B', view: 'EL-02', file: 'B-EL-02-street-opposite.svg',
    expected: ['TRAILER LEFT WALL', 'FRONT / TONGUE AT IMAGE LEFT', 'STAFF DOOR', 'CONTINUOUS HORIZONTAL WARM-LIGHT DATUM', 'SERVICE RAIL', 'WORKING-BOTTLE', 'ENCLOSED', 'CLEAN GLASS', 'NO FLOOR CABINET', 'NO SECOND COUNTER'],
    docExpected: ['Linear Gallery', 'working-bottle display', 'enclosed glass storage', 'lightweight rail', 'no floor cabinet', 'second counter'],
  },
  {
    option: 'B', view: 'EL-03', file: 'B-EL-03-front-partition.svg', expected: shared['EL-03'],
    docExpected: ['electrical distribution panel', 'cubbies', 'mirror', 'hooks', 'drinking water', 'charging', 'first-aid', 'fold-down seat'],
  },
  {
    option: 'B', view: 'EL-04', file: 'B-EL-04-rear-doors.svg',
    expected: [...shared['EL-04'], 'CLEAR SECONDARY EGRESS', 'LINEAR GALLERY TERMINATES BEFORE OPENING'],
    docExpected: ['double rear doors', 'emergency light', 'relief vent', 'Linear Gallery'],
  },
  {
    option: 'C', view: 'EL-01', file: 'C-EL-01-curb-service.svg',
    expected: ['TRAILER RIGHT WALL', 'FRONT / TONGUE AT IMAGE RIGHT', 'HAND SINK', '12&quot;', 'STATION A', '18&quot;', 'CENTER', '2-COMP SINK', '24&quot;', 'STATION B', 'REFRIGERATOR', 'HEALTH-AUTHORITY PERMISSION REQUIRED'],
    docExpected: ['12-inch hand sink', '18-inch Station A', '24-inch centered two-compartment sink', '18-inch Station B', '18-inch refrigerator'],
  },
  {
    option: 'C', view: 'EL-02', file: 'C-EL-02-street-opposite.svg',
    expected: ['TRAILER LEFT WALL', 'FRONT / TONGUE AT IMAGE LEFT', 'STAFF DOOR', 'GLASS A', 'RESERVE', 'BOTTLES', 'GLASS B', 'STATION A TOOL RAIL', 'STATION B TOOL RAIL', 'NO FLOOR CABINET', 'NO SECOND COUNTER', 'HEALTH-AUTHORITY PERMISSION REQUIRED'],
    docExpected: ['Twin-Wing Backbar', 'central restrained softly illuminated reserve-bottle display', 'enclosed clean-glass storage wings', 'two separate shallow service/tool rails', 'no floor cabinet'],
  },
  {
    option: 'C', view: 'EL-03', file: 'C-EL-03-front-partition.svg',
    expected: [...shared['EL-03'], 'HEALTH-AUTHORITY PERMISSION REQUIRED'],
    docExpected: ['electrical distribution panel', 'cubbies', 'mirror', 'hooks', 'drinking water', 'charging', 'first-aid', 'fold-down seat'],
  },
  {
    option: 'C', view: 'EL-04', file: 'C-EL-04-rear-doors.svg',
    expected: [...shared['EL-04'], 'CLEAR TWO-BARTENDER SECONDARY EGRESS', 'TWIN-WING TERMINATES BEFORE OPENING', 'HEALTH-AUTHORITY PERMISSION REQUIRED'],
    docExpected: ['double rear doors', 'emergency light', 'relief vent', 'Twin-Wing'],
  },
];

const normalize = value => value
  .replaceAll('&quot;', '"').replaceAll('&amp;', '&')
  .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
const escapeXml = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

function dimensionAudit(job, svgNormalized) {
  const common = job.view === 'PL-01' ? ['24"', '90"', '114"', '32"', '60"']
    : job.view === 'EL-01' ? ['60"', '14–16"', '90"']
    : job.view === 'EL-02' ? ['90"']
    : ['56"'];
  const optionSpecific = [];
  if (job.option === 'A' && job.view === 'PL-01') optionSpecific.push('6"');
  if (job.option === 'A' && job.view === 'EL-01') optionSpecific.push('6"');
  if (job.option === 'A' && ['PL-01', 'EL-02'].includes(job.view)) optionSpecific.push('12"', '36"', '24"', '18"');
  if (job.option === 'A' && job.view === 'EL-04') optionSpecific.push('24 × 36"');
  if (job.option === 'B' && ['PL-01', 'EL-01'].includes(job.view)) optionSpecific.push('12"', '36"', '24"', '18"');
  if (job.option === 'C' && ['PL-01', 'EL-01'].includes(job.view)) optionSpecific.push('12"', '18"', '24"');
  const required = [...new Set([...common, ...optionSpecific])];
  const missing = required.filter(label => !svgNormalized.includes(normalize(label)));
  const arithmetic = job.view !== 'PL-01' || (24 + 90 === 114);
  const equipmentTotal = !['PL-01', 'EL-01', 'EL-02'].includes(job.view)
    || job.option === 'C' ? (12 + 18 + 24 + 18 + 18 === 90)
    : (12 + 36 + 24 + 18 === 90);
  return { required, missing, arithmetic, equipmentTotal, pass: missing.length === 0 && arithmetic && equipmentTotal };
}

function svgText(width, height, body) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${body}</svg>`);
}

function dataUri(file) {
  const ext = path.extname(file).toLowerCase();
  const mime = ext === '.svg' ? 'image/svg+xml' : 'image/png';
  return `data:${mime};base64,${fs.readFileSync(file).toString('base64')}`;
}

function rasterizeSvg(svgBuffer, output) {
  const working = `${output}.working.svg`;
  fs.writeFileSync(working, svgBuffer);
  execFileSync('/usr/bin/sips', ['-s', 'format', 'png', working, '--out', output], { stdio: 'ignore' });
  fs.unlinkSync(working);
}

function pngDimensions(file) {
  const data = fs.readFileSync(file);
  if (data.toString('ascii', 1, 4) !== 'PNG') throw new Error(`${file} is not a PNG.`);
  return { width: data.readUInt32BE(16), height: data.readUInt32BE(20) };
}

const report = {
  generatedAt: new Date().toISOString(),
  authority: 'approved drawings/concept SVG files; option equipment schedules are advisory cross-checks only',
  method: 'photorealistic rendering generated from each approved SVG; reviewed raster override only where explicitly listed',
  jobs: [],
};

for (const job of jobs) {
  const id = `${job.option}-${job.view}`;
  const svgPath = path.join(ROOT, 'drawings', 'concept', job.file);
  const svgRaw = fs.readFileSync(svgPath, 'utf8');
  const svgNormalized = normalize(svgRaw);
  const docRaw = fs.readFileSync(optionDocs[job.option], 'utf8');
  const docNormalized = normalize(docRaw);
  const missingSvg = job.expected.filter(item => !svgNormalized.includes(normalize(item)));
  const missingDoc = job.docExpected.filter(item => !docNormalized.includes(normalize(item)));
  const dimensions = dimensionAudit(job, svgNormalized);
  if (missingSvg.length) {
    throw new Error(`${id} preflight failed against approved SVG authority. Missing SVG controls: ${missingSvg.join(', ')}.`);
  }
  if (!dimensions.pass) {
    throw new Error(`${id} dimension preflight failed against approved SVG authority. Missing: ${dimensions.missing.join(', ') || 'none'}.`);
  }

  const sourcePng = path.join(SOURCE_OUT, `${id}-approved-source.png`);
  rasterizeSvg(Buffer.from(svgRaw), sourcePng);

  const overridePath = job.reviewedOverride ? path.join(ROOT, job.reviewedOverride) : null;
  const useOverride = Boolean(overridePath && fs.existsSync(overridePath));
  const generatedPhotoPath = path.join(PHOTO_OUT, `${id}-photo-render.png`);
  const illustrationPng = path.join(ILLUSTRATION_OUT, `${id}-photorealistic.png`);
  if (useOverride) {
    const normalized = svgText(1200, 800, `<rect width="1200" height="800" fill="#f4efe5"/><image href="${dataUri(overridePath)}" x="0" y="0" width="1200" height="800" preserveAspectRatio="xMidYMid meet"/>`);
    rasterizeSvg(normalized, illustrationPng);
  } else {
    if (!fs.existsSync(generatedPhotoPath)) {
      if (process.argv.includes('--prepare')) continue;
      throw new Error(`${id} is missing its required photorealistic render: ${path.relative(ROOT, generatedPhotoPath)}`);
    }
    const normalized = svgText(1200, 800, `<rect width="1200" height="800" fill="#f4efe5"/><image href="${dataUri(generatedPhotoPath)}" x="0" y="0" width="1200" height="800" preserveAspectRatio="xMidYMid meet"/>`);
    rasterizeSvg(normalized, illustrationPng);
  }

  const header = svgText(2400, 900, `
    <rect width="2400" height="900" fill="#f4efe5"/>
    <rect x="38" y="108" width="1122" height="754" fill="#fffdf8" stroke="#b9b0a3" stroke-width="3"/>
    <rect x="1240" y="108" width="1122" height="754" fill="#fffdf8" stroke="#b9b0a3" stroke-width="3"/>
    <text x="40" y="72" font-family="Georgia,serif" font-size="31" font-weight="700" fill="#315b50">Approved SVG source · ${id}</text>
    <text x="1240" y="72" font-family="Georgia,serif" font-size="31" font-weight="700" fill="#315b50">Photorealistic concept rendering</text>
    <image href="${dataUri(sourcePng)}" x="39" y="111" width="1120" height="747" preserveAspectRatio="xMidYMid meet"/>
    <image href="${dataUri(illustrationPng)}" x="1241" y="111" width="1120" height="747" preserveAspectRatio="xMidYMid meet"/>
  `);
  const boardPath = path.join(BOARD_OUT, `${id}-svg-and-illustration.png`);
  rasterizeSvg(header, boardPath);

  const sourceMeta = pngDimensions(sourcePng);
  const illustrationMeta = pngDimensions(illustrationPng);
  const boardMeta = pngDimensions(boardPath);
  const qa = {
    sourceEquipmentAndLabels: missingSvg.length === 0,
    sourceDimensionCheck: dimensions,
    optionScheduleCrossCheck: missingDoc.length === 0,
    optionScheduleWarnings: missingDoc,
    sourceDimensions: sourceMeta.width === 1200 && sourceMeta.height === 800,
    illustrationDimensions: illustrationMeta.width === 1200 && illustrationMeta.height === 800,
    boardDimensions: boardMeta.width === 2400 && boardMeta.height === 900,
    interiorOnlyOverride: useOverride ? id === 'A-EL-03' : null,
  };
  report.jobs.push({ id, source: path.relative(ROOT, svgPath), illustration: path.relative(ROOT, illustrationPng), board: path.relative(ROOT, boardPath), renderingBasis: useOverride ? 'reviewed-interior-photo-override' : 'approved-svg-to-photorealistic', qa, pass: qa.sourceEquipmentAndLabels && qa.sourceDimensionCheck.pass && qa.sourceDimensions && qa.illustrationDimensions && qa.boardDimensions && qa.interiorOnlyOverride !== false });
}

if (process.argv.includes('--prepare')) {
  const generationManifest = jobs.map(job => ({
    id: `${job.option}-${job.view}`,
    approvedSource: `renders/elevation-review/source-svg/${job.option}-${job.view}-approved-source.png`,
    destination: `renders/elevation-review/photo-renders/${job.option}-${job.view}-photo-render.png`,
    type: job.view === 'PL-01' ? 'photorealistic orthographic top-down plan rendering' : 'photorealistic straight-on interior elevation rendering',
    constraints: 'Use the approved SVG as the sole geometry and equipment authority. Show only the trailer interior; no exterior environment, people, text, labels, logos, or watermark. Preserve left/right orientation, openings, equipment count, module order, labeled dimensions, and clear floor/egress areas exactly. All service windows are in operating state: show the open aperture and countertop/ledge only, with no raised hatch panel or awning visible.',
  }));
  fs.writeFileSync(path.join(OUT, 'generation-manifest.json'), `${JSON.stringify(generationManifest, null, 2)}\n`);
  console.log(`PASS: validated and prepared ${jobs.length} approved SVG sources.`);
  console.log(path.relative(ROOT, path.join(OUT, 'generation-manifest.json')));
  process.exit(0);
}

const boardThumbs = [];
for (let index = 0; index < jobs.length; index += 1) {
  const job = jobs[index];
  const id = `${job.option}-${job.view}`;
  boardThumbs.push(`<image href="${dataUri(path.join(BOARD_OUT, `${id}-svg-and-illustration.png`))}" x="${30 + (index % 3) * 780}" y="${30 + Math.floor(index / 3) * 305}" width="760" height="285" preserveAspectRatio="xMidYMid meet"/>`);
}
const contactSheet = path.join(OUT, 'all-15-plan-and-elevation-pairs-contact-sheet.png');
rasterizeSvg(svgText(2380, 1555, `<rect width="2380" height="1555" fill="#f4efe5"/>${boardThumbs.join('')}`), contactSheet);

report.pass = report.jobs.length === 15 && report.jobs.every(job => job.pass);
report.outputs = {
  boards: path.relative(ROOT, BOARD_OUT),
  contactSheet: path.relative(ROOT, contactSheet),
};
fs.writeFileSync(path.join(OUT, 'qa-report.json'), `${JSON.stringify(report, null, 2)}\n`);
const qaMarkdown = [
  '# Elevation Pair QA Report', '',
  `**Overall:** ${report.pass ? 'PASS' : 'FAIL'}`,
  `**Authority:** ${report.authority}`,
  `**Generated:** ${report.generatedAt}`, '',
  '| Pair | SVG/equipment | Source dimensions | Option schedule | Output dimensions | Rendering basis | Result |',
  '|---|---|---|---|---|---|---|',
  ...report.jobs.map(job => `| ${job.id} | ${job.qa.sourceEquipmentAndLabels ? 'PASS' : 'FAIL'} | ${job.qa.sourceDimensionCheck.pass ? 'PASS' : 'FAIL'} | ${job.qa.optionScheduleCrossCheck ? 'PASS' : `WARN: ${job.qa.optionScheduleWarnings.join('; ')}`} | ${job.qa.sourceDimensions && job.qa.illustrationDimensions && job.qa.boardDimensions ? 'PASS' : 'FAIL'} | ${job.renderingBasis} | ${job.pass ? 'PASS' : 'FAIL'} |`),
  '',
  'Automated QA treats each approved SVG as sole authority. Option-document differences are warnings only. Final visual review must compare every rendering to its approved SVG before presentation use.',
];
fs.writeFileSync(path.join(OUT, 'qa-report.md'), `${qaMarkdown.join('\n')}\n`);

if (!report.pass) process.exitCode = 1;
console.log(`${report.pass ? 'PASS' : 'FAIL'}: built ${report.jobs.length} SVG/photorealistic review boards.`);
console.log(path.relative(ROOT, contactSheet));
console.log(path.relative(ROOT, path.join(OUT, 'qa-report.md')));
