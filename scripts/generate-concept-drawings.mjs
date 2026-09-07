import fs from 'node:fs';
import path from 'node:path';

const OUT = path.resolve('drawings/concept');
fs.mkdirSync(OUT, { recursive: true });

const C = {
  ivory: '#F4EFE5', paper: '#FFFDF8', green: '#315B50', green2: '#6F8B80',
  copper: '#B56F4C', charcoal: '#2E3232', gray: '#8B908D', pale: '#DED8CD',
  blue: '#577A86', red: '#9A4D43', amber: '#D9A441', white: '#FFFFFF'
};

const esc = (s) => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const txt = (x,y,s,size=18,anchor='start',weight=400,fill=C.charcoal,extra='') =>
  `<text x="${x}" y="${y}" font-family="Arial,Helvetica,sans-serif" font-size="${size}" text-anchor="${anchor}" font-weight="${weight}" fill="${fill}" ${extra}>${esc(s)}</text>`;
const rect = (x,y,w,h,fill='none',stroke=C.charcoal,sw=2,extra='') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${extra}/>`;
const line = (x1,y1,x2,y2,stroke=C.charcoal,sw=2,extra='') =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${sw}" ${extra}/>`;
const poly = (pts,fill='none',stroke=C.charcoal,sw=2,extra='') =>
  `<polyline points="${pts}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${extra}/>`;

function shell(title, subtitle, body, note='CONCEPT DESIGN • NOT FOR FABRICATION • VERIFY AGAINST ACQUIRED TRAILER') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" role="img" aria-labelledby="title desc">
  <title id="title">${esc(title)}</title><desc id="desc">${esc(subtitle)}</desc>
  <rect width="1200" height="800" fill="${C.paper}"/>
  <rect x="28" y="28" width="1144" height="744" fill="none" stroke="${C.charcoal}" stroke-width="2"/>
  ${txt(56,70,title,28,'start',700,C.green)}
  ${txt(56,100,subtitle,16,'start',400,C.charcoal)}
  ${line(56,118,1144,118,C.copper,4)}
  ${body}
  ${line(56,725,1144,725,C.charcoal,1)}
  ${txt(56,752,note,11,'start',700,C.charcoal)}
  ${txt(1144,752,'INCHES • DIAGRAMMATIC CONCEPT SCALE',11,'end',400,C.gray)}
  </svg>`;
}

function dimH(x1,x2,y,label) {
  return `${line(x1,y,x2,y,C.gray,1,'marker-start="url(#arrow)" marker-end="url(#arrow)"')}${line(x1,y-8,x1,y+8,C.gray,1)}${line(x2,y-8,x2,y+8,C.gray,1)}${txt((x1+x2)/2,y-7,label,13,'middle',700,C.gray)}`;
}

const defs = `<defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" fill="${C.gray}"/></marker><pattern id="hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="10" stroke="${C.gray}" stroke-width="2"/></pattern></defs>`;

const optionNames = {
  A: 'OPPOSITE-WALL SERVICE BAR', B: 'SINGLE-BARTENDER LINEAR GALLERY', C: 'TWO-BARTENDER TWIN-WING BACKBAR'
};

function moduleBlocks(x,y,unit,modules,depth=190) {
  let out='', cx=x;
  for (const m of modules) {
    const w=m.in*unit;
    out += rect(cx,y,w,depth,m.fill||C.green,C.paper,2);
    const lines=m.label;
    lines.forEach((s,i)=> out += txt(cx+w/2,y+depth/2-8+i*20,s,13,'middle',700,C.white));
    out += txt(cx+w/2,y+depth-14,`${m.in}"`,12,'middle',400,C.white);
    cx += w;
  }
  return out;
}

function plan(option) {
  const x=120,y=205,u=8,uy=7,L=114*u,D=56*uy,front=24*u,service=90*u;
  const xService=x+front, yStreet=y+D;
  const data = option==='C' ? [
    {in:12,label:['HAND','SINK'],fill:C.blue},{in:18,label:['STATION A','12" ICE + 6" TOOLS']},
    {in:24,label:['CENTER','2-COMP SINK'],fill:C.blue},{in:18,label:['STATION B','12" ICE + 6" TOOLS']},
    {in:18,label:['REFRIGERATOR'],fill:C.green2}
  ] : [
    {in:12,label:['HAND','SINK'],fill:C.blue},{in:36,label:['2-COMP SINK','+ RIGHT DRAINBOARD'],fill:C.blue},
    {in:24,label:['COCKTAIL / ICE','STATION']},{in:18,label:['REFRIGERATOR'],fill:C.green2}
  ];
  let b=defs;
  b+=rect(x,y,L,D,C.ivory,C.charcoal,3,'rx="16"');
  b+=line(x+front,y,x+front,y+D,C.charcoal,3);
  b+=txt(x+front/2,y+70,'FRONT / TONGUE',15,'middle',700,C.green);
  b+=txt(x+front/2,y+105,'24" EMPLOYEE',14,'middle',700);
  b+=txt(x+front/2,y+128,'BREAK / SUPPORT',14,'middle',700);
  b+=rect(x+28,y+160,front-56,84,C.pale,C.gray,1,'rx="6"');
  b+=txt(x+front/2,y+194,'SLIDING',13,'middle',700);
  b+=txt(x+front/2,y+214,'PARTITION',13,'middle',700);
  b+=rect(x+38,y+272,front-76,72,C.paper,C.red,2,'stroke-dasharray="8 6"');
  b+=txt(x+front/2,y+300,'DRY',12,'middle',700,C.red); b+=txt(x+front/2,y+318,'ELECTRIC',12,'middle',700,C.red);
  b+=line(x+L,y+24,x+L,y+D/2-28,C.copper,7); b+=line(x+L,y+D/2+28,x+L,y+D-24,C.copper,7);
  b+=txt(x+L-12,y+D/2-4,'REAR',13,'end',700,C.copper); b+=txt(x+L-12,y+D/2+16,'DOUBLE DOORS',13,'end',700,C.copper);
  const openX=xService+15*u, openW=60*u;
  b+=rect(openX,y-30,openW,28,C.copper,C.copper,1,'rx="3"');
  b+=txt(xService+service/2,y-53,'CUSTOMER VIEW: ORDER RIGHT = FRONT • PICKUP LEFT = REAR',13,'middle',700,C.green);
  if(option==='A'){
    b+=rect(xService,y-50,service,48,C.green2,C.green,2,'stroke-dasharray="7 5"');
    b+=txt(xService+service/2,y-17,'6" OUTBOARD DRY STORAGE • FLUSH INTERIOR FACE',13,'middle',700,C.white);
    b+=line(openX,y,openX+openW,y,C.copper,8);
    b+=moduleBlocks(xService,y+D-24*uy,u,data,24*uy);
    b+=rect(xService,y+D-24*uy,service,24*uy,'none',C.copper,3);
    b+=txt(xService+service/2,y+D-24*uy-14,'STREET / OPPOSITE-WALL 90" EQUIPMENT LINE',14,'middle',700,C.green);
    b+=txt(xService+45*u,y+D-24*uy-34,'FORMER SIDE DOOR: ENGINEERED PERMANENT INFILL',12,'middle',700,C.red);
    b+=rect(xService+60*u,y+30,24*u,18*uy,C.paper,C.red,2,'stroke-dasharray="8 5"');
    b+=txt(xService+72*u,y+82,'ROOF HATCH',12,'middle',700,C.red);
    b+=txt(xService+72*u,y+102,'VERIFY',11,'middle',700,C.red);
  } else {
    b+=txt(openX+openW/2,y-11,'60" MAX SERVICE OPENING + 14–16" LEDGE',13,'middle',700,C.white);
    b+=moduleBlocks(xService,y,u,data,24*uy);
    b+=txt(xService+service/2,y+24*uy+24,'CURB / UNDER-WINDOW 90" EQUIPMENT LINE',14,'middle',700,C.green);
    b+=rect(xService,y+D-26,service,24,C.paper,C.copper,2,'stroke-dasharray="8 5"');
    const label=option==='B'?'OVERHEAD LINEAR GALLERY — NO FLOOR PROJECTION':'OVERHEAD TWIN-WING BACKBAR — NO FLOOR PROJECTION';
    b+=txt(xService+service/2,y+D-9,label,12,'middle',700,C.copper);
    b+=line(x+30,y+D,x+front-30,y+D,C.red,7,'stroke-dasharray="12 7"');
    b+=txt(x+front/2,y+D-14,'STAFF DOOR PROXY — VERIFY',11,'middle',700,C.red);
  }
  b+=txt(x+L/2,y-74,'CURB / SERVICE / CUSTOMER SIDE',14,'middle',700,C.green);
  b+=txt(x+L/2,y+D+33,'STREET / UTILITY SIDE',15,'middle',700,C.green);
  const aisleY=option==='A'?y+94:y+24*uy+105;
  b+=txt(xService+30*u,aisleY,'32" NOMINAL CLEAR AISLE',18,'middle',700,C.charcoal);
  b+=txt(xService+30*u,aisleY+28,'TRAVEL CASES ONLY WHILE TOWING',13,'middle',400,C.gray);
  b+=rect(xService+24*u,y+D+38,42*u,30,C.paper,C.blue,2,'stroke-dasharray="8 5"');
  b+=txt(xService+45*u,y+D+58,'UNDERFLOOR TANK / AXLE ZONE — VERIFY',12,'middle',700,C.blue);
  b+=dimH(x,x+front,y+D+92,'24"'); b+=dimH(x+front,x+L,y+D+92,'90"');
  b+=dimH(x,x+L,y+D+120,'114" INTERIOR CLEAR LENGTH');
  const planNote=option==='C'?'CONDITIONAL • FUTURE WRITTEN HEALTH-AUTHORITY PERMISSION REQUIRED • NOT FOR FABRICATION':undefined;
  return shell(`OPTION ${option} • PL-01 • CONCEPT PLAN`,optionNames[option],b,planNote);
}

function longShell(title,subtitle,inside,note) {
  const x=120,yTop=160,yFloor=650,w=935;
  const curve=`M ${x} ${yFloor} L ${x} ${yTop+70} Q ${x+45} ${yTop} ${x+120} ${yTop} L ${x+w-120} ${yTop} Q ${x+w-45} ${yTop} ${x+w} ${yTop+70} L ${x+w} ${yFloor}`;
  const body=defs+`<path d="${curve}" fill="${C.ivory}" stroke="${C.charcoal}" stroke-width="3"/>`+inside({x,yTop,yFloor,w,u:w/114,front:24*(w/114),service:90*(w/114) });
  return shell(title,subtitle,body,note);
}

function curbElevation(option) {
  return longShell(`OPTION ${option} • EL-01 • CURB / SERVICE WALL`,`INTERIOR ELEVATION LOOKING TOWARD CURB WALL • CUSTOMER EXTERIOR READS ORDER RIGHT / PICKUP LEFT`,g=>{
    const {x,yFloor,u,front,service}=g, xs=x+front, openX=xs+15*u, openW=60*u, counterY=yFloor-36*5.4, winBottom=counterY-18, winTop=winBottom-30*5.4;
    let b='';
    b+=rect(x+18,yFloor-310,front-36,270,C.pale,C.gray,1,'stroke-dasharray="7 5"');
    b+=txt(x+front/2,yFloor-275,'FRONT BREAK',13,'middle',700); b+=txt(x+front/2,yFloor-254,'AREA BEYOND',13,'middle',700);
    b+=line(xs,175,xs,yFloor,C.charcoal,3);
    b+=rect(openX,winTop,openW,winBottom-winTop,C.paper,C.copper,4);
    b+=txt(openX+openW/2,winTop+70,'60" MAX SERVICE OPENING',18,'middle',700,C.copper);
    b+=line(openX-8,winBottom,openX+openW+8,winBottom,C.copper,8);
    b+=txt(openX+openW/2,winBottom-12,'14–16" CUSTOMER LEDGE',13,'middle',700,C.copper);
    b+=txt(openX+28,winTop+105,'ORDER / POS',13,'start',700,C.green);
    b+=txt(openX+openW-28,winTop+105,'PICKUP',13,'end',700,C.green);
    if(option==='A'){
      b+=rect(xs,counterY,service,yFloor-counterY,C.green2,C.charcoal,2);
      for(let i=1;i<6;i++) b+=line(xs+i*service/6,counterY,xs+i*service/6,yFloor,C.paper,1);
      b+=txt(xs+service/2,counterY+65,'6"-DEEP OUTBOARD DRY STORAGE',17,'middle',700,C.white);
      b+=txt(xs+service/2,counterY+90,'FLUSH INTERIOR FACE • LIGHT GOODS ONLY',12,'middle',400,C.white);
    } else {
      const modules=option==='C'?[{in:12,label:['HAND']},{in:18,label:['STATION A']},{in:24,label:['CENTER SINK']},{in:18,label:['STATION B']},{in:18,label:['REF']}]:[{in:12,label:['HAND']},{in:36,label:['2-COMP SINK']},{in:24,label:['ICE STATION']},{in:18,label:['REF']}];
      b+=moduleBlocks(xs,counterY,u,modules,yFloor-counterY);
      b+=line(xs,counterY,xs+service,counterY,C.charcoal,6);
      if(option==='C'){
        const sinkStart=xs+(12+18)*u, sinkEnd=sinkStart+24*u;
        b+=rect(sinkStart-8,counterY-65,8,65,C.red,C.red,0); b+=rect(sinkEnd,counterY-65,8,65,C.red,C.red,0);
        b+=txt((sinkStart+sinkEnd)/2,counterY-78,'SPLASH SEPARATION BOTH SIDES',11,'middle',700,C.red);
      }
    }
    b+=dimH(xs,xs+service,yFloor+40,'90" SERVICE BAY');
    b+=dimH(openX,openX+openW,winTop-22,'60"');
    return b;
  },option==='C'?'CONDITIONAL • FUTURE WRITTEN HEALTH-AUTHORITY PERMISSION REQUIRED • NOT FOR FABRICATION':'CONCEPT DESIGN • TWO-COMPARTMENT SINK BASIS REQUIRES WRITTEN ACCEPTANCE • NOT FOR FABRICATION');
}

function streetElevation(option) {
  return longShell(`OPTION ${option} • EL-02 • STREET / OPPOSITE WALL`,option==='A'?'COMPLETE EQUIPMENT WALL • NO OPERATING SIDE DOOR':'SHALLOW FUNCTIONAL BACKBAR • STAFF-DOOR LOCATION VERIFY',g=>{
    const {x,yFloor,u,front,service}=g, xs=x+front, counterY=yFloor-36*5.4;
    let b='';
    b+=line(xs,175,xs,yFloor,C.charcoal,3);
    if(option==='A'){
      b+=rect(x+18,yFloor-310,front-36,270,C.pale,C.gray,1,'stroke-dasharray="7 5"');
      b+=txt(x+front/2,yFloor-270,'FRONT BREAK',13,'middle',700); b+=txt(x+front/2,yFloor-248,'AREA BEYOND',13,'middle',700);
      const modules=[{in:12,label:['HAND']},{in:36,label:['2-COMP SINK','+ DRAINBOARD']},{in:24,label:['ICE STATION']},{in:18,label:['REF']}];
      b+=moduleBlocks(xs,counterY,u,modules,yFloor-counterY);
      b+=line(xs,counterY,xs+service,counterY,C.charcoal,6);
      b+=rect(xs+5*u,245,24*u,90,C.paper,C.green,2); b+=txt(xs+17*u,282,'SOAP / TOWELS',12,'middle',700,C.green);
      b+=rect(xs+32*u,225,24*u,110,C.paper,C.green,2); b+=txt(xs+44*u,270,'ENCLOSED',12,'middle',700,C.green); b+=txt(xs+44*u,289,'CLEAN GLASS',12,'middle',700,C.green);
      b+=rect(xs+60*u,215,25*u,120,C.paper,C.copper,3); b+=txt(xs+72.5*u,264,'ILLUMINATED',12,'middle',700,C.copper); b+=txt(xs+72.5*u,284,'BOTTLES',12,'middle',700,C.copper);
      b+=rect(xs+8*u,counterY-48,74*u,38,'url(#hatch)',C.red,1); b+=txt(xs+45*u,counterY-61,'ENGINEERED FORMER-DOOR INFILL • NO SEAMS / HARDWARE',11,'middle',700,C.red);
    } else {
      b+=rect(x+22,260,front-44,yFloor-260,C.paper,C.red,2,'stroke-dasharray="9 6"');
      b+=txt(x+front/2,330,'STAFF DOOR',14,'middle',700,C.red); b+=txt(x+front/2,350,'PROXY — VERIFY',12,'middle',700,C.red);
      if(option==='B'){
        b+=line(xs+4*u,235,xs+86*u,235,C.amber,9);
        b+=txt(xs+45*u,215,'CONTINUOUS HORIZONTAL WARM-LIGHT DATUM',13,'middle',700,C.copper);
        b+=rect(xs+4*u,270,18*u,68,C.paper,C.green,2); b+=txt(xs+13*u,310,'SERVICE RAIL',12,'middle',700,C.green);
        b+=rect(xs+26*u,250,28*u,100,C.paper,C.copper,3); b+=txt(xs+40*u,294,'WORKING-BOTTLE',12,'middle',700,C.copper); b+=txt(xs+40*u,313,'DISPLAY',12,'middle',700,C.copper);
        b+=rect(xs+58*u,242,28*u,108,C.paper,C.green,2); b+=txt(xs+72*u,290,'ENCLOSED',12,'middle',700,C.green); b+=txt(xs+72*u,309,'CLEAN GLASS',12,'middle',700,C.green);
        b+=txt(xs+45*u,400,'FORWARD / ORDER  →  PRODUCTION  →  REAR / PICKUP',13,'middle',700,C.green);
      } else {
        const cx=xs+45*u;
        b+=line(xs+5*u,240,xs+29*u,240,C.amber,9); b+=line(xs+61*u,240,xs+85*u,240,C.amber,9); b+=line(cx-10*u,225,cx+10*u,225,C.amber,11);
        b+=rect(xs+5*u,260,24*u,105,C.paper,C.green,2); b+=txt(xs+17*u,307,'ENCLOSED',12,'middle',700,C.green); b+=txt(xs+17*u,326,'GLASS A',12,'middle',700,C.green);
        b+=rect(cx-10*u,215,20*u,150,C.paper,C.copper,3); b+=txt(cx,282,'RESERVE',12,'middle',700,C.copper); b+=txt(cx,301,'BOTTLES',12,'middle',700,C.copper);
        b+=rect(xs+61*u,260,24*u,105,C.paper,C.green,2); b+=txt(xs+73*u,307,'ENCLOSED',12,'middle',700,C.green); b+=txt(xs+73*u,326,'GLASS B',12,'middle',700,C.green);
        b+=line(xs+6*u,400,xs+30*u,400,C.green,8); b+=line(xs+60*u,400,xs+84*u,400,C.green,8);
        b+=txt(xs+18*u,425,'STATION A TOOL RAIL',11,'middle',700,C.green); b+=txt(xs+72*u,425,'STATION B TOOL RAIL',11,'middle',700,C.green);
      }
      b+=txt(xs+45*u,530,'OPEN LOWER WALL • NO FLOOR CABINET • NO SECOND COUNTER',14,'middle',700,C.charcoal);
    }
    b+=line(x,yFloor,x+g.w,yFloor,C.charcoal,4);
    b+=dimH(xs,xs+service,yFloor+40,'90" SERVICE ZONE');
    return b;
  },option==='C'?'CONDITIONAL • FUTURE WRITTEN HEALTH-AUTHORITY PERMISSION REQUIRED • NOT FOR FABRICATION':'CONCEPT DESIGN • NOT FOR FABRICATION • VERIFY AGAINST ACQUIRED TRAILER');
}

function endElevation(option,frontView) {
  const title=`OPTION ${option} • ${frontView?'EL-03 • FRONT PARTITION':'EL-04 • REAR DOOR WALL'}`;
  const subtitle=frontView?'LOOKING TOWARD TONGUE / EMPLOYEE BREAK AREA':'LOOKING TOWARD FUNCTIONAL DOUBLE REAR DOORS';
  let b=defs;
  const x=208,yTop=160,yFloor=650,u=13.5,w=56*u;
  const curve=`M ${x} ${yFloor} L ${x} ${yTop+80} Q ${x+50} ${yTop} ${x+135} ${yTop} L ${x+w-135} ${yTop} Q ${x+w-50} ${yTop} ${x+w} ${yTop+80} L ${x+w} ${yFloor}`;
  b+=`<path d="${curve}" fill="${C.ivory}" stroke="${C.charcoal}" stroke-width="3"/>`;
  b+=`<path d="M ${x+8} ${yTop+52} Q ${x+w/2} ${yTop-8} ${x+w-8} ${yTop+52}" fill="none" stroke="${C.copper}" stroke-width="18" opacity="0.85"/>`;
  if(frontView){
    b+=rect(x+60,yTop+120,150,120,C.paper,C.red,2); b+=txt(x+135,yTop+168,'HIGH DRY',13,'middle',700,C.red); b+=txt(x+135,yTop+190,'ELECTRICAL PANEL',13,'middle',700,C.red);
    b+=rect(x+250,yTop+95,w-310,yFloor-yTop-135,C.pale,C.green,3); b+=txt(x+250+(w-310)/2,yTop+265,'TOP-HUNG SLIDING PANEL',18,'middle',700,C.green);
    b+=txt(x+w/2,yFloor-72,'BREAK AREA BEYOND: FOLDING SEAT • CUBBIES • HOOKS • MIRROR',13,'middle',700);
    b+=txt(x+w/2,yFloor-45,'DRINKING WATER • CHARGING • FIRST AID • PAPERWORK',13,'middle',700);
  } else {
    const doorW=48*u, dx=x+(w-doorW)/2, doorTop=yTop+95;
    b+=rect(dx,doorTop,doorW,yFloor-doorTop,C.paper,C.green,3);
    b+=line(dx+doorW/2,doorTop,dx+doorW/2,yFloor,C.green,3);
    b+=line(dx+24,doorTop+28,dx+doorW/2-14,yFloor-20,C.pale,2); b+=line(dx+doorW-24,doorTop+28,dx+doorW/2+14,yFloor-20,C.pale,2);
    b+=rect(x+70,yTop+52,120,54,C.paper,C.blue,2); b+=txt(x+130,yTop+85,'RELIEF VENT — VERIFY',11,'middle',700,C.blue);
    b+=rect(x+w-190,yTop+52,120,54,C.paper,C.red,2); b+=txt(x+w-130,yTop+85,'EMERGENCY LIGHT',11,'middle',700,C.red);
    b+=txt(x+w/2,doorTop+170,'FUNCTIONAL DOUBLE REAR DOORS',18,'middle',700,C.green);
    const egress=option==='A'?'PRIMARY STAFF ENTRY / EGRESS':option==='C'?'CLEAR TWO-BARTENDER SECONDARY EGRESS':'CLEAR SECONDARY EGRESS';
    b+=txt(x+w/2,doorTop+205,egress,14,'middle',700,C.charcoal);
    b+=txt(x+w/2,yFloor-25,option==='C'?'TWIN-WING TERMINATES BEFORE OPENING':option==='B'?'LINEAR GALLERY TERMINATES BEFORE OPENING':'WEATHER SEALS • HOLD-OPEN CATCHES',12,'middle',700,C.copper);
    if(option==='A') b+=txt(x+w/2,yFloor+40,'SECOND EGRESS: RESERVED 24 × 36" MIN ROOF HATCH — VERIFY / APPROVAL REQUIRED',12,'middle',700,C.red);
  }
  b+=dimH(x,x+w,yFloor+78,'56" INTERIOR CLEAR WIDTH');
  const note=option==='C'?'CONDITIONAL • FUTURE WRITTEN HEALTH-AUTHORITY PERMISSION REQUIRED • NOT FOR FABRICATION':'CONCEPT DESIGN • NOT FOR FABRICATION • VERIFY AGAINST ACQUIRED TRAILER';
  return shell(title,subtitle,b,note);
}

for (const option of ['A','B','C']) {
  const files = {
    [`${option}-PL-01.svg`]: plan(option),
    [`${option}-EL-01-curb-service.svg`]: curbElevation(option),
    [`${option}-EL-02-street-opposite.svg`]: streetElevation(option),
    [`${option}-EL-03-front-partition.svg`]: endElevation(option,true),
    [`${option}-EL-04-rear-doors.svg`]: endElevation(option,false)
  };
  for (const [name,content] of Object.entries(files)) fs.writeFileSync(path.join(OUT,name),content);
}

console.log(`Generated 15 controlled SVG drawings in ${OUT}`);
