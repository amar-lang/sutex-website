// One-off: crop the orange S mark from the wordmark, knock out the white
// background, and emit src/app/icon.png (+ apple-icon.png) for Next's
// file-based favicon convention.
import sharp from "sharp";

const SRC = "public/sutexlogo.png";
// S-mark bounding square in the 3822x2112 source
const CROP = { left: 545, top: 650, width: 840, height: 840 };

const { data, info } = await sharp(SRC)
  .extract(CROP)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

// White -> transparent, with soft edges for anti-aliased pixels
for (let i = 0; i < data.length; i += 4) {
  const min = Math.min(data[i], data[i + 1], data[i + 2]);
  if (min > 250) data[i + 3] = 0;
  else if (min > 200) data[i + 3] = Math.round(((250 - min) / 50) * 255);
}

const mark = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
  .trim()
  .png()
  .toBuffer();

// Pad the trimmed mark back to a square canvas with a small margin
const pad = async (size, background) =>
  sharp(mark)
    .resize(Math.round(size * 0.86), Math.round(size * 0.86), {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .extend({
      top: Math.round(size * 0.07),
      bottom: Math.round(size * 0.07),
      left: Math.round(size * 0.07),
      right: Math.round(size * 0.07),
      background,
    })
    .resize(size, size)
    .png();

await (await pad(512, { r: 0, g: 0, b: 0, alpha: 0 })).toFile("src/app/icon.png");
await (await pad(180, { r: 255, g: 255, b: 255, alpha: 1 }))
  .flatten({ background: "#ffffff" })
  .toFile("src/app/apple-icon.png");

console.log("done");
