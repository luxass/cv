import {
  Buffer,
} from "node:buffer";
// @ts-check
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import * as process from "node:process";
import {
  launch,
} from "puppeteer";

// @ts-expect-error testing

Promise.withResolvers || (Promise.withResolvers = function withResolvers() {
  let a;
  let b;
  const c = new this((resolve, reject) => {
    a = resolve;
    b = reject;
  });
  return { resolve: a, reject: b, promise: c };
});

/**
 * @param {Uint8Array} pdf
 */
async function getText(pdf) {
  const pdfjs = await import("pdfjs-dist").then((m) => m.default || m);

  const pdfDocument = await pdfjs.getDocument(new Uint8Array(pdf.slice())).promise;

  let text = "";

  for (let i = 0; i < pdfDocument.numPages; i++) {
    const page = await pdfDocument.getPage(i + 1);
    text += await pageRender(page);
  }

  pdfDocument.destroy();
  return text;
}

/**
 * @param {import("pdfjs-dist").PDFPageProxy} page
 */
async function pageRender(page) {
  const textContent = await page.getTextContent({
    includeMarkedContent: false,
  });

  let lastY;
  let text = "";
  for (const item of textContent.items) {
    if ("type" in item) {
      throw new Error("Item should not have a type.");
    }

    if (lastY === item.transform[5] || !lastY) {
      text += item.str;
    } else {
      text += `\n${item.str}`;
    }
    lastY = item.transform[5];
  }

  return text;
}

async function run() {
  const browser = await launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto("https://cv.luxass.dev", {
    waitUntil: "networkidle2",
  });

  const pdfBuffer = await page.pdf({
    format: "A4",
    displayHeaderFooter: false,
    printBackground: true,
    margin: {
      top: "0.4in",
      bottom: "0.4in",
      left: "0.4in",
      right: "0.4in",
    },
  });

  await browser.close();
  if (!existsSync("./public")) {
    await mkdir("./public");
  }

  const pdf = new Uint8Array(Buffer.from(pdfBuffer));

  const oldPDF = existsSync("./public/resume.pdf") ? await getText(new Uint8Array(await readFile("./public/resume.pdf"))) : "";

  const newPDF = await getText(pdf);

  if (oldPDF === newPDF) {
    console.log("PDF did not change, skipping write");
    return;
  }

  await writeFile("./public/resume.pdf", pdf);
  console.log("Wrote resume.pdf to public folder");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
