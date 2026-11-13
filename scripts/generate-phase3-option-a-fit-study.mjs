import fs from 'node:fs';
import path from 'node:path';

const out = path.resolve('drawings/provisional/phase3');
fs.mkdirSync(out, { recursive: true });

const C = {
  paper: '#fbf8f1', ink: '#343b3a', green: '#315b50', copper: '#b8734f',
  red: '#a94135', gold: '#c58b21', pale: '#eef3ef', hatch: '#7f8987'
};
const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const text = (x, y, s, size = 14, anchor = 'start', weight = 400, fill = C.ink, extra = '') =>
  `<text x="${x}" y="${y}" font-family="Arial,Helvetica,sans-serif" font-size="${size}" text-anchor="${anchor}" font-weight="${weight}" fill="${fill}" ${extra}>${esc(s)}</text>`;
const rect = (x, y, w, h, fill = 'none', stroke = C.ink, sw = 2, extra = '') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${extra}/>`;
const line = (x1, y1, x2, y2, stroke = C.ink, sw = 2, extra = '') =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${sw}" ${extra}/>`;
const dimH = (x1, x2, y, label) => line(x1, y, x2, y, C.hatch, 1.5) + line(x1, y - 10, x1, y + 10, C.hatch, 1.5) + line(x2, y - 10, x2, y + 10, C.hatch, 1.5) + text((x1 + x2) / 2, y - 8, label, 12, 'middle', 700, C.hatch);
const defs = `<defs><pattern id="unknown" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="12" stroke="${C.hatch}" stroke-width="2"/></pattern></defs>`;

function sheet(id, title, subtitle, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" role="img" aria-labelledby="title desc">
  <title id="title">${esc(id)} ${esc(title)}</title>
  <desc id="desc">${esc(subtitle)} Superseded Option A placement study retained for history only; do not use for placement, fabrication or procurement.</desc>
  ${defs}
  ${rect(34, 34, 1532, 932, C.paper, C.ink, 2, 'rx="10"')}
  ${text(72, 88, `PHASE 3 • ${id} • ${title}`, 31, 'start', 700, C.green)}
  ${text(72, 124, subtitle, 15)}
  ${line(72, 148, 1528, 148, C.copper, 5)}
  ${rect(72, 160, 1456, 48, '#f8e3df', C.red, 2, 'rx="5"')}
  ${text(800, 192, 'SUPERSEDED PLACEMENT STUDY • INVENTORY FIRST • DO NOT USE FOR PLACEMENT', 18, 'middle', 700, C.red)}
  ${body}
  ${line(72, 928, 1528, 928, C.hatch, 1)}
  ${text(72, 953, 'SUPERSEDED PLACEMENT STUDY • HISTORICAL REFERENCE ONLY', 14, 'start', 700, C.red)}
  ${text(1528, 953, 'D1 POSITION IS A STRESS-TEST PROXY • VERIFY ON ACQUIRED DONOR', 12, 'end', 400, C.hatch)}
</svg>`;
}

function plan() {
  const x = 300, y = 250, u = 8, L = 114 * u, W = 56 * u;
  const door1 = x + 18 * u, door2 = x + 48 * u;
  const wet1 = x + 54 * u, sink2 = x + 90 * u, rinse2 = x + 96 * u, wet2 = x + 114 * u;
  const aisleY = y + 24 * u;
  let b = '';
  b += text(x - 65, y + 12, 'FRONT / TONGUE', 15, 'end', 700, C.green);
  b += text(x + L + 20, y + 12, 'REAR / DOUBLE DOORS', 15, 'start', 700, C.green);
  b += text(x + L / 2, y - 40, 'PASSENGER / UTILITY SIDE', 16, 'middle', 700, C.green);
  b += text(x + L / 2, y + W + 52, 'DRIVER / CUSTOMER / SERVICE SIDE', 16, 'middle', 700, C.green);
  b += rect(x, y, L, W, '#ffffff', C.ink, 4, 'rx="8"');

  b += rect(door1, y - 8, door2 - door1, 30, 'url(#unknown)', C.gold, 3, 'stroke-dasharray="10 7"');
  b += text((door1 + door2) / 2, y + 56, 'D1 30 NOMINAL', 13, 'middle', 700, C.gold);
  b += text((door1 + door2) / 2, y + 78, 'X 18–48 PROXY', 11, 'middle', 400, C.red);
  b += rect(door1, y, door2 - door1, 38 * u, 'none', C.gold, 2, 'stroke-dasharray="8 7"');
  b += text((door1 + door2) / 2, y + 38 * u - 16, 'PROTECTED APPROACH', 11, 'middle', 700, C.gold);

  b += rect(wet1, y, sink2 - wet1, 24 * u, '#dfeae5', C.green, 3);
  b += rect(sink2, y, rinse2 - sink2, 24 * u, '#f3e7c9', C.gold, 3);
  b += rect(rinse2, y, wet2 - rinse2, 24 * u, '#d9e1e8', '#526a7a', 3);
  b += text((wet1 + sink2) / 2, y + 82, '36 TWO-COMP SINK', 14, 'middle', 700, C.green);
  b += text((sink2 + rinse2) / 2, y + 105, '6 RINSE', 9, 'middle', 700, C.gold, `transform="rotate(-90 ${(sink2 + rinse2) / 2} ${y + 105})"`);
  b += text((rinse2 + wet2) / 2, y + 82, '18 REFRIGERATOR 2', 11, 'middle', 700, '#526a7a');
  b += rect(rinse2 + 12, y + 20, wet2 - rinse2 - 24, 52, 'none', C.copper, 2, 'stroke-dasharray="7 5"');
  b += text((rinse2 + wet2) / 2, y + 52, 'REMOVABLE ICE BIN', 8, 'middle', 700, C.copper);
  b += text((wet1 + wet2) / 2, y + 152, '60-IN PASSENGER SERVICE LINE • TEST X 54–114', 12, 'middle', 700, C.ink);

  b += rect(x, y + 38 * u, 24 * u, 18 * u, '#d9e1e8', '#526a7a', 3);
  b += text(x + 12 * u, y + 47 * u, '18 REFRIGERATOR 1', 12, 'middle', 700, '#526a7a', `transform="rotate(-90 ${x + 12 * u} ${y + 47 * u})"`);
  b += text(x + 30 * u, y + 49 * u, '38-IN PROVISIONAL FRONT PASSAGE', 12, 'middle', 700, C.green);

  b += line(x + 24 * u, aisleY, x + L, aisleY, C.green, 2, 'stroke-dasharray="12 8"');
  b += text(x + 72 * u, aisleY + 78, '32-IN NOMINAL MAIN AISLE', 17, 'middle', 700, C.green);
  b += line(x + 39 * u, y + W, x + 99 * u, y + W, C.red, 10, 'stroke-dasharray="15 9"');
  b += text(x + 69 * u, y + W - 20, '60 MAX SERVICE OPENING • OPPOSITE SERVICE LINE', 12, 'middle', 700, C.red);

  b += dimH(x, door1, 770, '18 PROXY');
  b += dimH(door1, door2, 800, '30 D1');
  b += dimH(door2, wet1, 830, '6 TEST GAP');
  b += dimH(wet1, wet2, 860, '60 SERVICE LINE');
  b += dimH(x, x + L, 900, '114 FINISHED CLEAR — FIXED');
  return sheet('PH3-OA-PL-01', 'OPTION A FIXED-SHELL FIT PLAN', '36-IN SINK • 6-IN GLASS RINSE • TWO 18-IN REFRIGERATORS • RETAINED D1', b);
}

function elevation() {
  const x = 260, yTop = 235, yFloor = 720, u = 8.5;
  const L = 114 * u, d1a = x + 18 * u, d1b = x + 48 * u, wet = x + 54 * u, sinkEnd = x + 90 * u, rinseEnd = x + 96 * u, end = x + 114 * u;
  let b = '';
  b += text(x, yTop - 28, 'FRONT / TONGUE', 14, 'start', 700, C.green);
  b += text(x + L, yTop - 28, 'REAR / DOUBLE DOORS', 14, 'end', 700, C.green);
  b += rect(x, yTop, L, yFloor - yTop, '#f1f0ea', C.ink, 4);
  b += rect(d1a, yFloor - 360, d1b - d1a, 360, 'url(#unknown)', C.gold, 3, 'stroke-dasharray="10 7"');
  b += text((d1a + d1b) / 2, yFloor - 270, 'D1 • 30 NOMINAL', 16, 'middle', 700, C.gold);
  b += text((d1a + d1b) / 2, yFloor - 240, 'X 18–48 PROXY ONLY', 11, 'middle', 700, C.red);
  b += text((d1a + d1b) / 2, yFloor - 200, 'HINGE / CLEAR OPENING', 11, 'middle', 700, C.hatch);
  b += text((d1a + d1b) / 2, yFloor - 178, 'VERIFY ON DONOR', 11, 'middle', 700, C.hatch);

  b += rect(wet, yFloor - 216, sinkEnd - wet, 216, '#dfeae5', C.green, 3);
  b += rect(sinkEnd, yFloor - 216, rinseEnd - sinkEnd, 216, '#f3e7c9', C.gold, 3);
  b += rect(rinseEnd, yFloor - 216, end - rinseEnd, 216, '#d9e1e8', '#526a7a', 3);
  b += line(wet, yFloor - 216, end, yFloor - 216, C.ink, 7);
  b += text((wet + sinkEnd) / 2, yFloor - 118, '36 TWO-COMP SINK', 14, 'middle', 700, C.green);
  b += text((sinkEnd + rinseEnd) / 2, yFloor - 110, '6 RINSE', 9, 'middle', 700, C.gold, `transform="rotate(-90 ${(sinkEnd + rinseEnd) / 2} ${yFloor - 110})"`);
  b += text((rinseEnd + end) / 2, yFloor - 102, '18 REF 2', 11, 'middle', 700, '#526a7a');
  b += rect(rinseEnd + 10, yFloor - 300, end - rinseEnd - 20, 62, 'none', C.copper, 2, 'stroke-dasharray="7 5"');
  b += text((rinseEnd + end) / 2, yFloor - 264, 'REMOVABLE ICE BIN', 8, 'middle', 700, C.copper);
  b += text((wet + end) / 2, yFloor - 330, '60-IN PASSENGER SERVICE LINE', 15, 'middle', 700, C.ink);
  b += text((d1b + wet) / 2, yFloor - 32, '6 TEST GAP', 10, 'middle', 700, C.red);

  b += dimH(x, d1a, 785, '18 PROXY');
  b += dimH(d1a, d1b, 815, '30 D1');
  b += dimH(d1b, wet, 845, '6');
  b += dimH(wet, sinkEnd, 875, '36');
  b += dimH(sinkEnd, rinseEnd, 875, '6');
  b += dimH(rinseEnd, end, 875, '18');
  b += dimH(x, end, 910, '114 FINISHED CLEAR — FIXED');
  return sheet('PH3-OA-EL-01', 'PASSENGER-WALL FIT ELEVATION', 'D1 PROXY • 36-IN SINK + 6-IN GLASS RINSE + 18-IN REFRIGERATOR 2 • REMOVABLE ICE BIN', b);
}

const files = {
  'PH3-OA-PL-01-fixed-shell-fit-plan.svg': plan(),
  'PH3-OA-EL-01-passenger-wall-fit-elevation.svg': elevation()
};

for (const [name, body] of Object.entries(files)) {
  const target = path.join(out, name);
  fs.writeFileSync(target, body);
  console.log(target);
}
