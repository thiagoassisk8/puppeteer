library(openxlsx)
library(readr)


nomes <- c("CampoGrande International Airport",
                "RiodeJaneiro Santos Dumont",
                "Campinas Viracopos International Airport",
                "SaoPaulo Congonhas Airport",
                "SaoPaulo Guarulhos International Airport",
                "Brasilia International Aeroport",
                "RiodeJaneiro Galeao International Airport",
                " PortoAlegre Salgado Filho International Airport",
                "Curitiba Afonso Pena International Airport",
                "BeloHorizonte Tancredo Neves International Airport",
                "Belem Val de Cans International Airport",
                "Salvador International Airport",
                "Recife Airport",
                "Fortaleza Pinto Martins International Airport",
                "SaoLuis Airport")


system("node C:/Users/Thiago Assis/Documents/puppeteer/flightradar/flightradar.js")

for(i in nomes) {
  arquivo <- list.files(path = "C:/Users/Thiago Assis/Downloads/", pattern = "csv")
  atual <- which.max(file.info(paste0("C:/Users/Thiago Assis/Downloads/", arquivo))$mtime)
  
  
}

