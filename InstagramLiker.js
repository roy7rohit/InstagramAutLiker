// Puppeteer launches Chromium in headless mode.To launch a full version of Chromium, set the headless{true / false} option when launching a browser:

const puppeteer = require('puppeteer'); //require puppeteer(import puppeteer)

(async function(){//this function is simply awakening our browser and completing the task and the closing the browser automatically

  //launch our browser
  const browser = await puppeteer.launch(); //headless byDefault is true  

  const page = await browser.newPage(); //awakes a new page in the browser
  await page.goto('https://www.instagram.com/');
  await page.screenshot({path : 'roy.png'});

  await browser.close();
})();