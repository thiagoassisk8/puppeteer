const puppeteer = require('puppeteer');


(async function(){
    try{
        const browser = await puppeteer.launch({
            headless:false,
            ignoreHTTPSErrors:false,
            defaultViewport: null
        });
        let links=["https://www.flightradar24.com/data/airports/cgr/statistics",//1
        "https://www.flightradar24.com/data/airports/sdu/statistics",//2
        "https://www.flightradar24.com/data/airports/vcp/statistics",//3
        "https://www.flightradar24.com/data/airports/cgh/statistics",//4
        "https://www.flightradar24.com/data/airports/gru/statistics",//5
        "https://www.flightradar24.com/data/airports/bsb/statistics",//6
        "https://www.flightradar24.com/data/airports/gig/statistics",//7
        "https://www.flightradar24.com/data/airports/poa/statistics",//8
        "https://www.flightradar24.com/data/airports/cwb/statistics",//9
        "https://www.flightradar24.com/data/airports/cnf/statistics",//10
        "https://www.flightradar24.com/data/airports/bel/statistics",//11
        "https://www.flightradar24.com/data/airports/ssa/statistics",//12
        "https://www.flightradar24.com/data/airports/rec/statistics",//13
        "https://www.flightradar24.com/data/airports/for/statistics",//14
        "https://www.flightradar24.com/data/airports/slz/statistics"];//15                        
        

        const page = await browser.newPage();
        let i;
        for(i=0; i < links.length; i++) {
        
            await page.goto(links[i]);
            await page.click(".highcharts-button-box");
            
            await page.evaluate(() => {
                const elements = [...document.querySelectorAll('.highcharts-menu-item')];
                const element = elements.find(element => element.innerHTML === 'Download CSV');
                element.click();                
                console.log('Download concluido')
            });
            
            await new Promise(resolve => setTimeout(resolve, 2500));
        }        
        
        await browser.close();
        
    
    } catch (e){
        console.log('Deu ruim',e);
    }

})();