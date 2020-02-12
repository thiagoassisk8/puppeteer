library(openxlsx)
library(readr)

system("node C:/Users/07037829161/Documents/ibge/index11.js")

arquivo <- list.files(path = "C:/Users/07037829161/Downloads/", pattern = "csv")
atual <- which.max(file.info(paste0("C:/Users/07037829161/Downloads/", arquivo))$mtime)
arquivo_baixado <- paste0("C:/Users/07037829161/Downloads/", arquivo[atual])
arquivo_novo <- paste0('L:/Area Macro/Conjuntura/IBGE Indicadores da Produção Industrial por Seções/(',Sys.Date(),") Indicadores da Produção Industrial por Seções e Atividades de Indústria")

file.copy(from = arquivo_baixado, to = paste0(arquivo_novo,'.csv'), overwrite = TRUE)

dado <- read_delim(paste0(arquivo_novo,'.csv'),";", escape_double = FALSE, locale = locale(),trim_ws = TRUE, skip = 1)
write.xlsx(dado, paste0(arquivo_novo,'.xlsx'))
