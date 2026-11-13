import fs from 'node:fs';
import path from 'node:path';

const OUT = path.resolve('drawings/provisional/phase2');
fs.mkdirSync(OUT, { recursive: true });

const C = {
  paper: '#fffdf8', ivory: '#f4efe5', retained: '#343b3a', retainedFill: '#d9d9d2',
  remove: '#a33f36', infill: '#47745f', infillFill: '#dce9e1', unknown: '#7c8582',
  unknownFill: '#e3e5e3', conditional: '#b78a32', conditionalFill: '#f4ead0',
  clear: '#ffffff', accent: '#b56f4c', green: '#315b50', blue: '#557b89'
};

const esc = (value) => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const text = (x, y, value, size = 16, anchor = 'start', weight = 400, fill = C.retained, extra = '') =>
  `<text x="${x}" y="${y}" font-family="Arial,Helvetica,sans-serif" font-size="${size}" text-anchor="${anchor}" font-weight="${weight}" fill="${fill}" ${extra}>${esc(value)}</text>`;
const line = (x1, y1, x2, y2, stroke = C.retained, width = 2, extra = '') =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${width}" ${extra}/>`;
const rect = (x, y, width, height, fill = 'none', stroke = C.retained, strokeWidth = 2, extra = '') =>
  `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" ${extra}/>`;
const pathEl = (d, fill = 'none', stroke = C.retained, strokeWidth = 2, extra = '') =>
  `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" ${extra}/>`;

const defs = `<defs>
  <marker id="arrow-gray" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${C.unknown}"/></marker>
  <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${C.remove}"/></marker>
  <pattern id="unknown-hatch" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="12" stroke="${C.unknown}" stroke-width="2" opacity="0.5"/></pattern>
  <pattern id="infill-hatch" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><line x1="0" y1="0" x2="0" y2="12" stroke="${C.infill}" stroke-width="3" opacity="0.55"/></pattern>
  <pattern id="remove-hatch" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="12" stroke="${C.remove}" stroke-width="3" opacity="0.55"/></pattern>
</defs>`;

function dimH(x1, x2, y, label, color = C.unknown) {
  return `${line(x1, y, x2, y, color, 1.5, 'marker-start="url(#arrow-gray)" marker-end="url(#arrow-gray)"')}
    ${line(x1, y - 10, x1, y + 10, color, 1.5)}${line(x2, y - 10, x2, y + 10, color, 1.5)}
    ${text((x1 + x2) / 2, y - 9, label, 14, 'middle', 700, color)}`;
}

function dimV(x, y1, y2, label, color = C.unknown) {
  return `${line(x, y1, x, y2, color, 1.5, 'marker-start="url(#arrow-gray)" marker-end="url(#arrow-gray)"')}
    ${line(x - 10, y1, x + 10, y1, color, 1.5)}${line(x - 10, y2, x + 10, y2, color, 1.5)}
    ${text(x + 18, (y1 + y2) / 2, label, 14, 'middle', 700, color, `transform="rotate(90 ${x + 18} ${(y1 + y2) / 2})"`)}`;
}

function legend(x = 80, y = 850) {
  const items = [
    [C.retainedFill, C.retained, 'EXISTING RETAINED'],
    ['url(#remove-hatch)', C.remove, 'REMOVAL / PROPOSED CUT'],
    ['url(#infill-hatch)', C.infill, 'NEW INFILL / PROTECTED RESERVE'],
    ['url(#unknown-hatch)', C.unknown, 'UNKNOWN / PROTECTED'],
    [C.conditionalFill, C.conditional, 'CONDITIONAL RESERVE'],
    [C.clear, C.green, 'FINISHED-CLEAR / USABLE']
  ];
  return items.map(([fill, stroke, label], index) => {
    const xx = x + (index % 3) * 390;
    const yy = y + Math.floor(index / 3) * 38;
    return `${rect(xx, yy - 18, 28, 22, fill, stroke, 2)}${text(xx + 40, yy, label, 12, 'start', 700, stroke)}`;
  }).join('\n');
}

function sheet(id, title, subtitle, body) {
  const fullTitle = `PHASE 2 • ${id} • ${title}`;
  const titleSize = fullTitle.length > 70 ? 25 : fullTitle.length > 58 ? 28 : 31;
  const subtitleSize = subtitle.length > 105 ? 14 : subtitle.length > 88 ? 15 : 17;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" role="img" aria-labelledby="title desc">
  <title id="title">${esc(`${id} ${title}`)}</title>
  <desc id="desc">${esc(subtitle)} This is a provisional spatial-control drawing and is not a fabrication or cut-release document.</desc>
  ${defs}
  <rect width="1600" height="1000" fill="${C.paper}"/>
  <rect x="34" y="34" width="1532" height="932" rx="8" fill="none" stroke="${C.retained}" stroke-width="2"/>
  ${text(72, 88, fullTitle, titleSize, 'start', 700, C.green)}
  ${text(72, 124, subtitle, subtitleSize, 'start', 400, C.retained)}
  ${line(72, 148, 1528, 148, C.accent, 5)}
  ${body}
  ${legend()}
  ${line(72, 928, 1528, 928, C.retained, 1)}
  ${text(72, 952, 'PROVISIONAL — NOT FOR FABRICATION • NOT A CUT FILE • VERIFY AGAINST VIN-SPECIFIC SURVEY', 14, 'start', 700, C.remove)}
  ${text(1528, 952, 'DIMENSIONS IN INCHES • DESIGN ASSUMPTIONS UNLESS MARKED UNKNOWN', 12, 'end', 400, C.unknown)}
</svg>`;
}

function planSheet() {
  const bx = 310, by = 245, u = 7.5, bodyL = 120 * u, bodyW = 60 * u;
  const ix = bx + 3 * u, iy = by + 2 * u, intL = 114 * u, intW = 56 * u;
  const workStart = ix + 24 * u, openingStart = workStart + 15 * u, openingEnd = openingStart + 60 * u;
  let b = '';
  b += pathEl(`M ${bx} ${by} H ${bx + bodyL} V ${by + bodyW} H ${bx} Q ${bx - 38} ${by + bodyW} ${bx - 38} ${by + bodyW - 38} V ${by + 38} Q ${bx - 38} ${by} ${bx} ${by} Z`, C.retainedFill, C.retained, 5);
  b += text(185, by + 10, 'FRONT / TONGUE', 16, 'middle', 700, C.green);
  b += text(1315, by + 10, 'REAR / DOUBLE DOORS', 16, 'middle', 700, C.green);
  b += text(760, by - 48, 'PASSENGER / NON-CUSTOMER / UTILITY SIDE', 16, 'middle', 700, C.green);
  b += text(425, by + bodyW + 58, 'DRIVER / CUSTOMER / SERVICE SIDE', 15, 'middle', 700, C.green);
  b += rect(ix, iy, intL, intW, C.clear, C.green, 3, 'stroke-dasharray="12 8"');
  b += text(ix + 175, iy + intW / 2 - 10, '114 × 56 × 76', 20, 'middle', 700, C.green);
  b += text(ix + 175, iy + intW / 2 + 18, 'FINISHED-CLEAR BOUNDARY', 15, 'middle', 700, C.green);
  b += text(ix + 175, iy + intW / 2 + 43, 'NO EQUIPMENT IN THIS PHASE', 11, 'middle', 700, C.unknown);

  // Driver-side service opening: plotted from the finished interior datum, not as skin-cut coordinates.
  b += line(openingStart, by + bodyW, openingEnd, by + bodyW, C.remove, 12, 'stroke-dasharray="16 9"');
  b += line(openingStart, by + bodyW - 26, openingStart, by + bodyW + 26, C.infill, 16);
  b += line(openingEnd, by + bodyW - 26, openingEnd, by + bodyW + 26, C.infill, 16);
  b += text((openingStart + openingEnd) / 2, by + bodyW - 22, '60 MAX SERVICE OPENING — DESIGN INTENT', 14, 'middle', 700, C.remove);
  b += text((openingStart + openingEnd) / 2, by + bodyW + 45, 'X = 39–99 FROM FINISHED-INTERIOR FRONT DATUM • NOT SKIN CUT COORDINATES', 12, 'middle', 700, C.remove);
  b += dimH(workStart, openingStart, by + bodyW + 82, '15 NOMINAL');
  b += dimH(openingStart, openingEnd, by + bodyW + 82, '60 MAX');
  b += dimH(openingEnd, ix + intL, by + bodyW + 82, '15 NOMINAL');

  // Passenger door remains spatially unresolved; show a free-floating reserve rather than a located door.
  const doorX = ix + 18 * u;
  b += rect(doorX, by - 10, 30 * u, 42, 'url(#unknown-hatch)', C.unknown, 3, 'stroke-dasharray="10 7"');
  b += text(doorX + 15 * u, by - 14, 'D1 30 NOMINAL OUTER WIDTH • X / CLEAR OPENING UNKNOWN', 11, 'middle', 700, C.unknown);
  b += pathEl(`M ${doorX} ${by} A ${30 * u} ${30 * u} 0 0 1 ${doorX + 30 * u} ${by - 80}`, 'none', C.conditional, 2, 'stroke-dasharray="8 6"');
  b += pathEl(`M ${doorX + 30 * u} ${by} A ${30 * u} ${30 * u} 0 0 0 ${doorX} ${by - 80}`, 'none', C.conditional, 2, 'stroke-dasharray="8 6"');
  b += text(doorX + 15 * u, by + 58, 'PROTECT OUTWARD SWING / APPROACH FOR EITHER HINGE — FINAL HINGE UNKNOWN', 11, 'middle', 700, C.conditional);

  // Unknown protected chassis/floor field and tank planning zones.
  b += rect(ix + 47 * u, iy + 50, 67 * u, intW - 100, 'url(#unknown-hatch)', C.unknown, 2, 'stroke-dasharray="12 8"');
  b += text(ix + 80.5 * u, iy + 42, 'FRAME / CROSSMEMBERS / WHEEL WELLS / SUSPENSION', 10, 'middle', 700, C.unknown);
  b += text(ix + 80.5 * u, iy + 62, 'UNKNOWN PROTECTED GEOMETRY', 10, 'middle', 700, C.unknown);
  b += rect(ix + 58 * u, iy + intW / 2 - 26, 20 * u, 52, C.conditionalFill, C.conditional, 2);
  b += rect(ix + 80 * u, iy + intW / 2 - 26, 20 * u, 52, C.conditionalFill, C.conditional, 2);
  b += text(ix + 68 * u, iy + intW / 2 + 5, 'POTABLE', 11, 'middle', 700, C.conditional);
  b += text(ix + 90 * u, iy + intW / 2 + 5, 'WASTE', 11, 'middle', 700, C.conditional);
  b += text(ix + 79 * u, iy + intW / 2 + 78, 'LOW / CENTERED PLANNING ZONES ONLY', 10, 'middle', 700, C.conditional);
  b += text(ix + 79 * u, iy + intW / 2 + 97, 'SIZES / SUPPORTS / MOUNTS UNKNOWN', 10, 'middle', 700, C.conditional);

  b += dimH(bx, bx + bodyL, 825, '120 EXTERIOR BODY — DESIGN ASSUMPTION');
  return sheet('PH2-FS-PL-01', 'OPTION A FABRICATION-SHELL PLAN', 'OPTION A SHELL • SERVICE OPENING, D1, CLEAR BOUNDARY AND PROTECTED EXCLUSIONS', b);
}

function driverExteriorSheet() {
  const x = 210, yTop = 220, yFloor = 720, u = 9.4, clearL = 114 * u;
  const workStart = x + 24 * u, openX = workStart + 15 * u, openW = 60 * u;
  const sillY = yFloor - 36 * 5.6, headY = yFloor - 66 * 5.6;
  let b = '';
  b += pathEl(`M ${x} ${yFloor} L ${x} ${yTop + 65} Q ${x + 45} ${yTop} ${x + 120} ${yTop} H ${x + clearL - 105} Q ${x + clearL - 35} ${yTop} ${x + clearL} ${yTop + 62} V ${yFloor} Z`, C.retainedFill, C.retained, 5);
  b += text(x, yTop - 28, 'FRONT / TONGUE', 14, 'start', 700, C.green);
  b += text(x + clearL, yTop - 28, 'REAR / DOUBLE DOORS', 14, 'end', 700, C.green);

  // Retained W1 and former W2/W4 infill are deliberately diagrammatic.
  b += rect(x + 25, yTop + 75, 100, 56, C.clear, C.infill, 4);
  b += text(x + 75, yTop + 110, 'W1 RETAIN', 12, 'middle', 700, C.infill);
  b += rect(x + 185, yTop + 58, 155, 86, 'url(#infill-hatch)', C.infill, 3);
  b += text(x + 262, yTop + 98, 'FORMER W2', 12, 'middle', 700, C.infill);
  b += text(x + 262, yTop + 118, 'INFILL EXTENTS VERIFY', 10, 'middle', 400, C.infill);
  b += rect(x + clearL - 260, yTop + 50, 215, 100, 'url(#infill-hatch)', C.infill, 3);
  b += text(x + clearL - 152, yTop + 96, 'FORMER W4', 12, 'middle', 700, C.infill);
  b += text(x + clearL - 152, yTop + 118, 'INFILL EXTENTS VERIFY', 10, 'middle', 400, C.infill);

  b += rect(openX, headY, openW, sillY - headY, C.paper, C.remove, 5, 'stroke-dasharray="18 10"');
  b += text(openX + openW / 2, headY + 92, 'PROPOSED 60 × 30 MAXIMUM ROUGH OPENING', 18, 'middle', 700, C.remove);
  b += text(openX + openW / 2, headY + 122, 'DESIGN INTENT ONLY • CORNER RADII UNKNOWN', 13, 'middle', 700, C.remove);

  // Protected structural reserves have intentionally symbolic thickness.
  b += rect(openX - 22, yTop + 38, 22, yFloor - yTop - 38, 'url(#infill-hatch)', C.infill, 2);
  b += rect(openX + openW, yTop + 38, 22, yFloor - yTop - 38, 'url(#infill-hatch)', C.infill, 2);
  b += rect(openX - 22, headY - 22, openW + 44, 22, 'url(#infill-hatch)', C.infill, 2);
  b += rect(openX - 22, sillY, openW + 44, 22, 'url(#infill-hatch)', C.infill, 2);
  b += text(openX + openW / 2, headY - 34, 'CONTINUOUS HEADER RESERVE • SYMBOLIC WIDTH • MEMBER / CONNECTION UNKNOWN', 11, 'middle', 700, C.infill);
  b += text(openX - 38, (headY + sillY) / 2, 'FULL-HEIGHT JAMB RESERVE', 10, 'middle', 700, C.infill, `transform="rotate(-90 ${openX - 38} ${(headY + sillY) / 2})"`);
  b += text(openX + openW + 40, (headY + sillY) / 2, 'FULL-HEIGHT JAMB RESERVE', 10, 'middle', 700, C.infill, `transform="rotate(90 ${openX + openW + 40} ${(headY + sillY) / 2})"`);

  b += pathEl(`M ${openX} ${headY} L ${openX + openW / 2} ${headY - 122} L ${openX + openW} ${headY}`, C.conditionalFill, C.conditional, 3, 'stroke-dasharray="9 6"');
  b += text(openX + openW / 2, headY - 138, 'TOP-HINGED HATCH OPERATING ENVELOPE • FRAME / HARDWARE / LOADS UNKNOWN', 11, 'middle', 700, C.conditional);
  b += rect(openX, sillY + 34, openW, 45, C.conditionalFill, C.conditional, 2, 'stroke-dasharray="9 6"');
  b += text(openX + openW / 2, sillY + 62, '14–16 LEDGE • DRAINAGE / FLASHING / ATTACHMENT UNKNOWN', 11, 'middle', 700, C.conditional);

  b += dimH(x, workStart, 780, '24 TARGET REMAINDER');
  b += dimH(workStart, x + clearL, 810, '90 CONTROLLING WORK ZONE');
  b += dimH(openX, openX + openW, headY - 72, '60 MAX');
  b += dimV(x + clearL + 45, sillY, yFloor, '36 SILL FROM FINISHED FLOOR');
  b += dimV(x + clearL + 82, headY, sillY, '30 MAX');
  return sheet('PH2-FS-EL-01', 'DRIVER / CUSTOMER EXTERIOR CUT ELEVATION', 'OPTION A SERVICE WALL • RETAIN W1 • INFILL W2/W4 • NEW OPENING SEPARATE FROM FORMER FRAMES', b);
}

function interiorReserveSheet() {
  const x = 240, yTop = 215, yFloor = 720, u = 9.4, clearL = 114 * u;
  const workStart = x + 24 * u, openX = workStart + 15 * u, openW = 60 * u;
  const sillY = yFloor - 36 * 5.6, headY = yFloor - 66 * 5.6;
  let b = '';
  b += rect(x, yTop, clearL, yFloor - yTop, C.clear, C.green, 4);
  b += text(x + clearL / 2, yTop + 32, 'INTERIOR FACE OF PROVISIONAL 114 × 76 FINISHED-CLEAR BOUNDARY', 14, 'middle', 700, C.green);
  b += rect(openX, headY, openW, sillY - headY, C.paper, C.remove, 4, 'stroke-dasharray="18 10"');
  b += text(openX + openW / 2, headY + 105, 'OPENING VOID • NO EQUIPMENT PLACED', 18, 'middle', 700, C.remove);

  const jambWidth = 34;
  b += rect(openX - jambWidth, yTop + 48, jambWidth, yFloor - yTop - 48, 'url(#infill-hatch)', C.infill, 3);
  b += rect(openX + openW, yTop + 48, jambWidth, yFloor - yTop - 48, 'url(#infill-hatch)', C.infill, 3);
  b += rect(openX - jambWidth, headY - 32, openW + jambWidth * 2, 32, 'url(#infill-hatch)', C.infill, 3);
  b += rect(openX - jambWidth, sillY, openW + jambWidth * 2, 32, 'url(#infill-hatch)', C.infill, 3);
  b += text(openX + openW / 2, headY - 46, 'PROTECTED HEADER RESERVE — DEPTH / SECTION / CONNECTIONS UNKNOWN', 12, 'middle', 700, C.infill);
  b += text(openX + openW / 2, sillY + 54, 'PROTECTED SILL / BOTTOM-MEMBER RESERVE — UNKNOWN', 12, 'middle', 700, C.infill);
  b += text(openX - 52, (headY + sillY) / 2, 'PROTECTED JAMB', 11, 'middle', 700, C.infill, `transform="rotate(-90 ${openX - 52} ${(headY + sillY) / 2})"`);
  b += text(openX + openW + 54, (headY + sillY) / 2, 'PROTECTED JAMB', 11, 'middle', 700, C.infill, `transform="rotate(90 ${openX + openW + 54} ${(headY + sillY) / 2})"`);

  b += rect(x + 24, yTop + 72, 150, 110, 'url(#unknown-hatch)', C.unknown, 2, 'stroke-dasharray="10 7"');
  b += text(x + 99, yTop + 112, 'POSTS / RAILS /', 12, 'middle', 700, C.unknown);
  b += text(x + 99, yTop + 134, 'SEAMS UNKNOWN', 12, 'middle', 700, C.unknown);
  b += rect(x + clearL - 180, yTop + 72, 150, 110, 'url(#unknown-hatch)', C.unknown, 2, 'stroke-dasharray="10 7"');
  b += text(x + clearL - 105, yTop + 112, 'ROOF LOAD PATH /', 12, 'middle', 700, C.unknown);
  b += text(x + clearL - 105, yTop + 134, 'REAR PORTAL UNKNOWN', 12, 'middle', 700, C.unknown);

  b += text(x + clearL / 2, yFloor - 42, 'KEEP EQUIPMENT • CABINETRY • UTILITIES • HATCH HARDWARE • ATTACHMENTS OUT OF ALL RESERVE ZONES', 13, 'middle', 700, C.remove);
  b += dimH(workStart, openX, 780, '15 NOMINAL PIER');
  b += dimH(openX, openX + openW, 780, '60 MAX OPENING');
  b += dimH(openX + openW, x + clearL, 780, '15 NOMINAL PIER');
  b += dimV(x - 45, sillY, yFloor, '36 SILL');
  b += dimV(x - 82, headY, sillY, '30 MAX');
  return sheet('PH2-FS-EL-02', 'INTERIOR STRUCTURAL-RESERVE ELEVATION', 'PROTECTED HEADER, FULL-HEIGHT JAMBS AND SILL • GRAPHIC RESERVE WIDTHS ARE SYMBOLIC AND UNDIMENSIONED', b);
}

function passengerExteriorSheet() {
  const x = 220, yTop = 220, yFloor = 720, w = 1080;
  let b = '';
  b += pathEl(`M ${x} ${yFloor} L ${x} ${yTop + 65} Q ${x + 45} ${yTop} ${x + 120} ${yTop} H ${x + w - 105} Q ${x + w - 35} ${yTop} ${x + w} ${yTop + 62} V ${yFloor} Z`, C.retainedFill, C.retained, 5);
  b += text(x, yTop - 28, 'FRONT / TONGUE', 14, 'start', 700, C.green);
  b += text(x + w, yTop - 28, 'REAR / DOUBLE DOORS', 14, 'end', 700, C.green);
  b += rect(x + 28, yTop + 72, 100, 56, C.clear, C.infill, 4);
  b += text(x + 78, yTop + 107, 'W1 RETAIN', 12, 'middle', 700, C.infill);

  // D1 is deliberately not tied to a numeric X datum.
  const dx = x + 220, dw = 250, dy = yFloor - 380;
  b += rect(dx, dy, dw, 380, C.paper, C.unknown, 4, 'stroke-dasharray="12 8"');
  b += text(dx + dw / 2, dy + 72, 'D1 • 30 NOMINAL', 16, 'middle', 700, C.unknown);
  b += text(dx + dw / 2, dy + 98, 'OUTER WIDTH ONLY', 12, 'middle', 700, C.unknown);
  b += text(dx + dw / 2, dy + 145, 'HOLD TONGUE-SIDE JAMB', 11, 'middle', 700, C.unknown);
  b += text(dx + dw / 2, dy + 166, 'EXTEND TOWARD WHEELS', 11, 'middle', 700, C.unknown);
  b += text(dx + dw / 2, dy + 235, 'OUTWARD OPEN', 12, 'middle', 700, C.conditional);
  b += text(dx + dw / 2, dy + 258, 'HINGE SIDE UNKNOWN', 12, 'middle', 700, C.conditional);
  b += text(dx + dw / 2, dy + 310, 'X / CLEAR HEIGHT / THRESHOLD /', 10, 'middle', 700, C.remove);
  b += text(dx + dw / 2, dy + 329, 'STEP / GRAB / HARDWARE VERIFY', 10, 'middle', 700, C.remove);

  b += rect(x + 625, yTop + 58, 235, 100, 'url(#infill-hatch)', C.infill, 3);
  b += text(x + 742, yTop + 102, 'FORMER W3 INFILL', 13, 'middle', 700, C.infill);
  b += text(x + 742, yTop + 124, 'EXACT EXTENTS / ASSEMBLY UNKNOWN', 10, 'middle', 400, C.infill);

  b += rect(x + 535, yFloor - 210, 380, 142, C.conditionalFill, C.conditional, 3, 'stroke-dasharray="10 7"');
  b += text(x + 725, yFloor - 174, 'ELIGIBLE PASSENGER-SIDE UTILITY RESERVE', 14, 'middle', 700, C.conditional);
  b += text(x + 725, yFloor - 143, 'POTABLE • WASTE • SHORE POWER — SEPARATE', 12, 'middle', 700, C.conditional);
  b += text(x + 725, yFloor - 113, 'EXACT LOCATIONS UNKNOWN • RESERVE ONLY • NO HOLES', 12, 'middle', 700, C.conditional);
  b += text(x + 725, yFloor - 84, 'EXCLUDE D1 • REAR DOORS • RUNNING GEAR • STRUCTURE • ROAD LIGHTING', 10, 'middle', 700, C.remove);

  b += rect(x + 910, yTop + 95, 130, 82, C.conditionalFill, C.conditional, 2, 'stroke-dasharray="9 6"');
  b += text(x + 975, yTop + 126, 'RELIEF / EXHAUST', 11, 'middle', 700, C.conditional);
  b += text(x + 975, yTop + 147, 'RESERVE • NO CUT', 10, 'middle', 700, C.conditional);
  b += text(x + w / 2, 785, 'NO CUSTOMER-SIDE SERVICE CONNECTIONS • ALL PENETRATIONS REQUIRE STRUCTURAL / ROUTING COORDINATION', 13, 'middle', 700, C.remove);
  return sheet('PH2-FS-EL-03', 'PASSENGER / UTILITY EXTERIOR ELEVATION', 'D1 AND UTILITY RESERVES • RETAIN W1 • INFILL W3 • EXACT POSITIONS REMAIN UNKNOWN', b);
}

function reservePlanSheet() {
  let b = '';
  const leftX = 115, topY = 235, panelW = 650, panelH = 470;
  const rightX = 835;
  b += text(leftX, 205, 'ROOF / VENTILATION RESERVE PLAN', 18, 'start', 700, C.green);
  b += rect(leftX, topY, panelW, panelH, C.retainedFill, C.retained, 4, 'rx="44"');
  b += line(leftX + panelW / 2, topY + 28, leftX + panelW / 2, topY + panelH - 28, C.unknown, 2, 'stroke-dasharray="10 7"');
  b += rect(leftX + 245, topY + 175, 170, 120, C.conditionalFill, C.conditional, 3, 'stroke-dasharray="10 7"');
  b += text(leftX + 330, topY + 215, 'OPTIONAL HVAC', 14, 'middle', 700, C.conditional);
  b += text(leftX + 330, topY + 238, 'RESERVE ONLY', 13, 'middle', 700, C.conditional);
  b += text(leftX + 330, topY + 263, 'PRODUCT / OPENING /', 10, 'middle', 700, C.conditional);
  b += text(leftX + 330, topY + 281, 'COORDINATES UNKNOWN', 10, 'middle', 700, C.conditional);
  b += rect(leftX + 470, topY + 270, 120, 82, C.conditionalFill, C.conditional, 2, 'stroke-dasharray="9 6"');
  b += text(leftX + 530, topY + 304, 'RELIEF / EXHAUST', 10, 'middle', 700, C.conditional);
  b += text(leftX + 530, topY + 324, 'RESERVE • NO CUT', 10, 'middle', 700, C.conditional);
  b += rect(leftX + 80, topY + 55, 500, 55, 'url(#unknown-hatch)', C.unknown, 2, 'stroke-dasharray="9 6"');
  b += text(leftX + 330, topY + 88, 'ROOF BOWS / PROFILE / LOAD PATHS UNKNOWN — PROTECTED', 11, 'middle', 700, C.unknown);
  b += text(leftX + panelW / 2, topY + panelH - 40, 'NO BASE ROOF EXIT • NO INSTALLED HVAC • NO RELEASED ROOF CUT', 12, 'middle', 700, C.remove);

  b += text(rightX, 205, 'CHASSIS / FLOOR EXCLUSION PLAN', 18, 'start', 700, C.green);
  b += rect(rightX, topY, panelW, panelH, C.retainedFill, C.retained, 4, 'rx="26"');
  for (const yy of [topY + 105, topY + 365]) b += rect(rightX + 40, yy, panelW - 80, 42, 'url(#unknown-hatch)', C.unknown, 2, 'stroke-dasharray="9 6"');
  for (const xx of [rightX + 220, rightX + 390]) b += line(xx, topY + 35, xx, topY + panelH - 35, C.unknown, 8, 'stroke-dasharray="12 9"');
  b += text(rightX + panelW / 2, topY + 75, 'FRAME RAILS / CROSSMEMBERS / WHEEL WELLS / SUSPENSION TRAVEL', 11, 'middle', 700, C.unknown);
  b += text(rightX + panelW / 2, topY + 96, 'UNKNOWN PROTECTED GEOMETRY — GRAPHIC LOCATIONS ARE SYMBOLIC', 10, 'middle', 700, C.unknown);
  b += rect(rightX + 255, topY + 205, 110, 70, C.conditionalFill, C.conditional, 2);
  b += rect(rightX + 380, topY + 205, 110, 70, C.conditionalFill, C.conditional, 2);
  b += text(rightX + 310, topY + 246, 'POTABLE', 11, 'middle', 700, C.conditional);
  b += text(rightX + 435, topY + 246, 'WASTE', 11, 'middle', 700, C.conditional);
  b += text(rightX + panelW / 2, topY + 315, 'LOW / CENTERED / NEAR AXLE GROUP — PLANNING RELATIONSHIP ONLY', 11, 'middle', 700, C.conditional);
  b += text(rightX + panelW / 2, topY + panelH - 48, 'NO FLOOR HOLES • NO BRACKETS • NO MOUNTING COORDINATES RELEASED', 12, 'middle', 700, C.remove);
  return sheet('PH2-FS-RP-01', 'ROOF, UTILITY AND CHASSIS RESERVE PLAN', 'CONDITIONAL HVAC / RELIEF RESERVES AND PROTECTED UNKNOWN FLOOR / RUNNING-GEAR GEOMETRY', b);
}

function sectionsSheet() {
  let b = '';
  // Horizontal section through service wall.
  b += text(110, 205, 'SECTION A — HORIZONTAL THROUGH SERVICE WALL / LEDGE', 17, 'start', 700, C.green);
  const hx = 130, hy = 330, scale = 8.2;
  b += rect(hx, hy, 60 * scale, 180, C.retainedFill, C.retained, 4);
  b += rect(hx + 2 * scale, hy + 18, 56 * scale, 144, C.clear, C.green, 3);
  b += rect(hx, hy + 50, 2 * scale, 80, 'url(#unknown-hatch)', C.unknown, 2);
  b += rect(hx + 58 * scale, hy + 50, 2 * scale, 80, 'url(#unknown-hatch)', C.unknown, 2);
  b += text(hx + 30 * scale, hy + 92, '56 FINISHED CLEAR', 16, 'middle', 700, C.green);
  b += text(hx + 30 * scale, hy + 118, '2 NOMINAL PER SIDE', 12, 'middle', 700, C.unknown);
  b += text(hx + 30 * scale, hy + 141, 'ACTUAL CURVED WALL BUILD-UP UNKNOWN', 10, 'middle', 700, C.unknown);
  b += rect(hx + 60 * scale, hy + 55, 15 * scale, 70, C.conditionalFill, C.conditional, 3);
  b += text(hx + 67.5 * scale, hy + 86, '15 NOM.', 11, 'middle', 700, C.conditional);
  b += text(hx + 67.5 * scale, hy + 106, 'LEDGE', 11, 'middle', 700, C.conditional);
  b += text(hx + 67.5 * scale, hy + 146, 'EXTERIOR ONLY', 10, 'middle', 700, C.remove);
  b += dimH(hx, hx + 60 * scale, hy + 220, '60 EXTERIOR BODY — DESIGN ASSUMPTION');
  b += text(hx + 30 * scale, hy + 265, 'HATCH / LEDGE / FLASHING / SUPPORTS: ZERO INTRUSION INTO 56-INCH CLEAR WIDTH', 11, 'middle', 700, C.remove);

  // Vertical section at service opening.
  b += text(865, 205, 'SECTION B — VERTICAL THROUGH SERVICE OPENING', 17, 'start', 700, C.green);
  const vx = 990, vFloor = 730, vs = 5.7, extH = 84 * vs, clearH = 76 * vs;
  const clearTop = vFloor - clearH, sill = vFloor - 36 * vs, head = vFloor - 66 * vs;
  b += rect(vx, vFloor - extH, 250, extH, C.retainedFill, C.retained, 4);
  b += rect(vx + 28, clearTop, 194, clearH, C.clear, C.green, 3);
  b += rect(vx + 12, head - 26, 226, 26, 'url(#infill-hatch)', C.infill, 2);
  b += rect(vx + 12, sill, 226, 26, 'url(#infill-hatch)', C.infill, 2);
  b += rect(vx + 28, head, 194, sill - head, C.paper, C.remove, 4, 'stroke-dasharray="14 8"');
  b += text(vx + 125, (head + sill) / 2 - 6, '30 MAX', 16, 'middle', 700, C.remove);
  b += text(vx + 125, (head + sill) / 2 + 18, 'OPENING', 12, 'middle', 700, C.remove);
  b += pathEl(`M ${vx + 28} ${head} L ${vx + 125} ${head - 95} L ${vx + 222} ${head}`, C.conditionalFill, C.conditional, 3, 'stroke-dasharray="9 6"');
  b += text(vx + 125, head - 110, 'HATCH OPERATING ENVELOPE', 10, 'middle', 700, C.conditional);
  b += rect(vx + 222, sill + 8, 100, 30, C.conditionalFill, C.conditional, 2);
  b += text(vx + 272, sill + 29, 'LEDGE', 10, 'middle', 700, C.conditional);
  b += dimV(vx - 48, sill, vFloor, '36 SILL');
  b += dimV(vx - 86, head, sill, '30 MAX');
  b += dimV(vx + 292, clearTop, vFloor, '76 FINISHED CLEAR');
  b += dimV(vx + 338, vFloor - extH, vFloor, '84 EXTERIOR');
  b += text(vx + 125, vFloor + 48, '8 COMBINED FLOOR + ROOF/CEILING ALLOWANCE', 11, 'middle', 700, C.unknown);
  b += text(vx + 125, vFloor + 69, 'SPLIT / ASSEMBLIES UNKNOWN — DO NOT ASSIGN', 11, 'middle', 700, C.unknown);

  b += rect(110, 675, 700, 115, C.unknownFill, C.unknown, 2, 'stroke-dasharray="9 6"');
  b += text(130, 704, 'SECTION CONTROL NOTES', 13, 'start', 700, C.unknown);
  b += text(130, 731, '• Header, jamb and sill reserve widths shown graphically only; no member size or connection is implied.', 11, 'start', 400, C.unknown);
  b += text(130, 754, '• Cut-line corner radii, hatch frame, hinge, strut, latch, ledge attachment, drainage and finish returns remain UNKNOWN.', 11, 'start', 400, C.unknown);
  b += text(130, 777, '• Replace every provisional allowance after the donor structural and wall-assembly survey.', 11, 'start', 400, C.unknown);
  return sheet('PH2-FS-SE-01', 'SCHEMATIC SERVICE-WALL SECTIONS', 'FINISHED-CLEAR BOUNDARY, SYMBOLIC STRUCTURAL RESERVES AND EXTERIOR-ONLY HATCH / LEDGE ENVELOPES', b);
}

const files = {
  'PH2-FS-PL-01-common-shell-plan.svg': planSheet(),
  'PH2-FS-EL-01-driver-service-cut-elevation.svg': driverExteriorSheet(),
  'PH2-FS-EL-02-interior-structural-reserve-elevation.svg': interiorReserveSheet(),
  'PH2-FS-EL-03-passenger-utility-elevation.svg': passengerExteriorSheet(),
  'PH2-FS-RP-01-roof-chassis-reserve-plan.svg': reservePlanSheet(),
  'PH2-FS-SE-01-service-wall-sections.svg': sectionsSheet()
};

for (const [name, contents] of Object.entries(files)) {
  fs.writeFileSync(path.join(OUT, name), contents);
  console.log(path.join(OUT, name));
}
