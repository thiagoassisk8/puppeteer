const puppeteer = require('puppeteer');

function run () {
        return new Promise(async (reject) => {
            try {
                const browser =await puppeteer.launch({
                    headless:false
                });
                //const Banana= '#produto-4';
                const PASSWORD_SELECTOR= '#password';
                const BUTTON_SELECTOR= '.signinbutton';
                const Emails_destino= 'email_fictício@fazenda.gov.br';
                const Assunto = 'Agenda SPE';

                await page.goto('https://www.hfbrasil.org.br/br/banco-de-dados-precos-medios-dos-hortifruticolas.aspx');

                await page.click(Banana);
                
                

                //await browser.close(); 
    
                            
            
           



        } catch (e) {
            return reject(e);

            }
        })
      
};

run().then(console.log).catch(console.error);
