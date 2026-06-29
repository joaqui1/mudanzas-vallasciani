import sharp from "sharp"
import { readFile, writeFile, rm } from "fs/promises"
import { dirname, join } from "path"
import { fileURLToPath } from "url"
import toIco from "to-ico"

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, "..", "public")
const logoSource = join(publicDir, "vallasciani-logo.png")
const trimmedLogo = join(publicDir, "vallasciani-logo.trimmed.png")

const white = { r: 255, g: 255, b: 255, alpha: 1 }

async function logoMarkBuffer(size) {
  const mark = await sharp(logoSource)
    .extract({ left: 0, top: 0, width: 235, height: 330 })
    .trim({ background: "#ffffff", threshold: 12 })
    .resize(Math.round(size * 0.76), Math.round(size * 0.76), {
      fit: "inside",
      withoutEnlargement: false,
      kernel: sharp.kernel.lanczos3,
    })
    .toBuffer()

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: white,
    },
  })
    .composite([{ input: mark, gravity: "center" }])
    .png()
    .toBuffer()
}

async function logoMark(size, outfile) {
  await writeFile(join(publicDir, outfile), await logoMarkBuffer(size))
}

async function main() {
  await sharp(logoSource)
    .trim({ background: "#ffffff", threshold: 12 })
    .png()
    .toFile(trimmedLogo)

  await sharp(trimmedLogo).toFile(logoSource)
  await rm(trimmedLogo, { force: true })

  // Google Search pide favicons cuadrados, multiplos de 48px, con fondo solido.
  await logoMark(16, "icon-16.png")
  await logoMark(32, "icon-32.png")
  await logoMark(48, "icon-48.png")
  await logoMark(96, "icon-96.png")
  await logoMark(180, "apple-touch-icon.png")
  await logoMark(192, "icon-192.png")
  await logoMark(342, "favicon-mark.png")
  await logoMark(512, "icon-512.png")

  const ico = await toIco([
    await readFile(join(publicDir, "icon-16.png")),
    await readFile(join(publicDir, "icon-32.png")),
    await readFile(join(publicDir, "icon-48.png")),
  ])
  await writeFile(join(publicDir, "favicon.ico"), ico)

  console.log("Favicons generados desde la marca Vallasciani")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
