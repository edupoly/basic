import puppeteer from "puppeteer";

describe("App.js", () => {
let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("contains the welcome text", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".App-welcome-text");
    const text = await page.$eval(".App-welcome-text", (e) => e.textContent);
    expect(text).toContain("Welcome");
  });
  it("navigation to counter", async () => {
    await page.goto("http://localhost:3000");
    await page.click("#counter");
    await page.waitForSelector("#counterval")
    const text = await page.$eval("#counterval",(e)=>e.textContent);
    expect(text).toContain("Counter")
  });

  afterAll(() => browser.close());
});