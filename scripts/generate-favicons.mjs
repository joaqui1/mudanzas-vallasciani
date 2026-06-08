import sharp from "sharp"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, "..", "public")
const source = join(publicDir, "vallasciani-logo.png")

const white = { r: 255, g: 255, b: 255, alpha: 1 }

async function squarePng(size, outfile) {
  await sharp(source)
    .resize(size, size, { fit: "contain", background: white })
    .png()
    .toFile(join(publicDir, outfile))
}

async function main() {
  await squarePng(16, "icon-16.png")
  await squarePng(32, "icon-32.png")
  await squarePng(48, "icon-48.png")
  await squarePng(180, "apple-touch-icon.png")
  await squarePng(192, "icon-192.png")
  await squarePng(512, "icon-512.png")

  // favicon.ico: Google y navegadores lo buscan en la raíz
  await sharp(source)
    .resize(48, 48, { fit: "contain", background: white })
    .png()
    .toFile(join(publicDir, "favicon.ico"))

  console.log("Favicons generados en public/")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
