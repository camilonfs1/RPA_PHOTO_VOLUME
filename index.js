const puppeteer = require("puppeteer");
const fs = require("fs");
var mkdirp = require('mkdirp');


Screenshot("https://actualidad.rt.com/");

async function Screenshot(url) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();
  await page.goto(url, {
    timeout: 0,
    waitUntil: "networkidle0",
  });
  const screenData = await page.screenshot({
    encoding: "binary",
    type: "jpeg",
    quality: 30,
  });
  mkdirp('/EJEMPLOTE');
  fs.writeFileSync("/EJEMPLOTE/tssc.jpg", screenData); 

  fs.appendFileSync("/EJEMPLOTE/log", "\nhola");

  console.log("ok");

  await page.close();
  await browser.close();
}
