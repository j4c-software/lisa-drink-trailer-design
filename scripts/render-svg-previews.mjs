import path from 'node:path';
import fs from 'node:fs';

const sharpPath = path.join(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES, 'sharp/dist/index.cjs');
const sharpModule = await import(sharpPath);
const sharp = sharpModule.default;

const names = process.argv.slice(2);
if (!names.length) throw new Error('Pass one or more SVG paths.');
fs.mkdirSync('preview', { recursive: true });
for (const name of names) {
  const source = path.resolve(name);
  const output = path.resolve('preview', `${path.basename(name, '.svg')}.png`);
  await sharp(source).png().toFile(output);
  console.log(output);
}
