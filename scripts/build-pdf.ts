import { writeFile } from "node:fs/promises"
import process from "node:process"
import {
  launch,
} from "puppeteer"

async function run() {
  const browser = await launch()
  const page = await browser.newPage()
  await page.goto("https://cv.luxass.dev", {
    waitUntil: "networkidle2",
  })

  const pdf = await page.pdf({
    format: "A4",
    displayHeaderFooter: false,
    printBackground: true,
    margin: {
      top: "0.4in",
      bottom: "0.4in",
      left: "0.4in",
      right: "0.4in",
    },
  })

  await browser.close()
  await writeFile("./public/resume.pdf", pdf)
  console.log("Wrote resume.pdf to public folder")
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
