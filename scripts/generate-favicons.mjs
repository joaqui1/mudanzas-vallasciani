import sharp from "sharp"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, "..", "public")
const logoSource = join(publicDir, "vallasciani-logo.png")

const white = { r: 255, g: 255, b: 255, alpha: 1 }
const brandRed = { r: 196, g: 30, b: 30, alpha: 1 }

/** Logo horizontal centrado en cuadrado — ideal para Google Search */
async function logoSquare(size, outfile, background = white, fill = 0.9) {
  const maxW = Math.max(1, Math.round(size * fill))
  const resized = await sharp(logoSource)
    .resize(maxW, null, {
      fit: "inside",
      withoutEnlargement: false,
      kernel: sharp.kernel.lanczos3,
    })
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
  // Google Search pide favicon cuadrado, múltiplo de 48px, fondo sólido
  await logoSquare(48, "icon-48.png", white, 0.96)
  await logoSquare(96, "icon-96.png", white, 0.96)
  await logoSquare(48, "favicon.ico", white, 0.96)
  await logoSquare(32, "icon-32.png", white, 0.9)
  await logoSquare(16, "icon-16.png", white, 0.88)

  await logoSquare(180, "apple-touch-icon.png", white, 0.85)
  await logoSquare(192, "icon-192.png", brandRed, 0.82)
  await logoSquare(512, "icon-512.png", brandRed, 0.82)

  console.log("Favicons generados desde vallasciani-logo.png")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
