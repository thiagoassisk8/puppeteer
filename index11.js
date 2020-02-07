const puppeteer = require('puppeteer');

 async function run(){
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage()
    await page.goto('https://www.ibge.gov.br/estatisticas/economicas/industria/9294-pesquisa-industrial-mensal-producao-fisica-brasil.html?=&t=resultados');
    //await new Promise(resolve => setTimeout(resolve, 5000));  
    var selectedValue = await page.evaluate(() => {
        return $(`select#tabelasidra20180414509450export.selectExport`)[0].value
      });
    await console.log("Selected Value"+ selectedValue)

    var selectedOrNot = await page.evaluate(() => {
        return $(`select [value='Microsoft']`)[0].selected
      });
    await console.log("Selected Or Not "+ selectedOrNot)
    await browser.close();
}
run()