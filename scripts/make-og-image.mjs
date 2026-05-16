import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'public/photos/01-hero-salon.avif');
const ogOut = join(root, 'public/og-image.jpg');
const appleOut = join(root, 'public/apple-touch-icon.png');
const faviconSvg = join(root, 'public/favicon.svg');

await sharp(src)
  .resize(1200, 630, { fit: 'cover', position: 'center' })
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(ogOut);

await sharp(faviconSvg, { density: 300 })
  .resize(180, 180, { fit: 'contain', background: { r: 11, g: 9, b: 7, alpha: 1 } })
  .png()
  .toFile(appleOut);

console.log('OK: og-image.jpg + apple-touch-icon.png generated');
