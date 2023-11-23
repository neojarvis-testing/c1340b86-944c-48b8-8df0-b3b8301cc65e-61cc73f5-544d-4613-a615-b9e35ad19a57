const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    try {
        await page.goto('https://8081-aecdbfdbefdbfddbafbdaaccfdabeada.ide.exam.ly/');
        await page.setViewport({
            width: 1200,
            height: 800,
        })
         // Click the BMI Calculator link
       await page.click('.navbarlink[routerLink="/bmi-checker"]');
       await page.waitForSelector('.bmi' , {timeout: 3000});

      const isBMICalculatorDisplayed = await page.evaluate(() => {
        const bmiComponent = document.querySelector('.bmi');
       const calculateButton = bmiComponent.querySelector('.bmibtn');
      return bmiComponent !== null && calculateButton !== null;
    });
    if (isBMICalculatorDisplayed) {
      console.log('TESTCASE:validate_bmi_calculator_display:success');
    } else {
      console.log('TESTCASE:validate_bmi_calculator_display:failure');
    }
  }
    catch (e) {
        console.log('TESTCASE:validate_bmi_calculator_display:failure');
    }


    const page1 = await browser.newPage();
    try {
        await page1.goto('https://8081-aecdbfdbefdbfddbafbdaaccfdabeada.ide.exam.ly/');
        await page1.setViewport({
            width: 1200,
            height: 800,
        })

          await page.click('.navbarlink[routerLink="/age-checker"]');
          await page.waitForSelector('.agecontainer' , {timeout: 3000});
          const isAgeCalculatorDisplayed = await page.evaluate(() => {
            const ageComponent = document.querySelector('.agecontainer');
            const checkAgeButton = ageComponent.querySelector('#button');
            return ageComponent !== null && checkAgeButton !== null;
          });

          if (isAgeCalculatorDisplayed) {
            console.log('TESTCASE:validate_age_calculator_display:success');
          } else {
            console.log('TESTCASE:validate_age_calculator_display:failure');
          }
        }
        catch (e) {
        console.log('TESTCASE:validate_age_calculator_display:failure');
    }
    finally {
        await page.close();
        await page1.close();
        await browser.close();
    }
})();
