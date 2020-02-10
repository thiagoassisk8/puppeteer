const puppeteer = require('puppeteer');

async function run(){
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage()
    await page.goto('https://www.ibge.gov.br/estatisticas/economicas/industria/9294-pesquisa-industrial-mensal-producao-fisica-brasil.html?=&t=resultados');
    await new Promise(resolve => setTimeout(resolve, 2500));  
    await page.select("select#seriehistorica201804145443525export", "csv")
    //await page.waitFor(3000)
    //await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: './Documentos'});
    await browser.close();
}
run()
