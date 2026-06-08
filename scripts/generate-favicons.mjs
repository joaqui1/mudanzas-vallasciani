import sharp from "sharp"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, "..", "public")
const source = join(publicDir, "favicon-mark.png")

const transparent = { r: 0, g: 0, b: 0, alpha: 0 }
const white = { r: 255, g: 255, b: 255, alpha: 1 }
const brandRed = { r: 196, g: 30, b: 30, alpha: 1 }

async function squarePng(size, outfile, background, fill = 0.9) {
  const inner = Math.max(1, Math.round(size * fill))
  const resized = await sharp(source)
    .resize(inner, inner, {
      fit: "contain",
      background: transparent,
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.5, m1: 0.5, m2: 0.25 })
    .toBuffer()

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background,
    },
  })
    .composite([{ input: resized, gravity: "center" }])
    .png()
    .toFile(join(publicDir, outfile))
}

async function main() {
  await squarePng(16, "icon-16.png", transparent, 0.92)
  await squarePng(32, "icon-32.png", transparent, 0.9)
  await squarePng(48, "icon-48.png", transparent, 0.9)
  await squarePng(32, "favicon.ico", transparent, 0.9)

  await squarePng(180, "apple-touch-icon.png", white, 0.78)
  await squarePng(192, "icon-192.png", brandRed, 0.78)
  await squarePng(512, "icon-512.png", brandRed, 0.78)

  console.log("Favicons generados desde favicon-mark.png")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
