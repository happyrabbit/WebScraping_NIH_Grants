p_needed <- c("plyr", "dplyr", "stringr", "lubridate", "jsonlite", "httr", "xml2", "rvest", "devtools", "ggmap",  "networkD3", "RSelenium", "pageviews", "aRxiv", "twitteR", "streamR","igraph","rbokeh","shiny","animation","caTools","wordcloud","coreNLP","plotly","DT")
lapply(p_needed, require, character.only = TRUE)
library(pageviews)
library(lubridate)
library(dygraphs)
library(xts)
library(leaflet)

# Step 1: get all links
url <- "Data/SearchResults.htm"
links<-getHTMLLinks(url)

# get all links with abstract needed
links<-links[grep("https://projectreporter.nih.gov/project_info_description.cfm?", links)]

## step 2: fetch project abstract pages

HTML <- list()
# loop
for ( i in seq_along(links) ){
  # url
  url <- links[i]
   # read in files
  HTML[[i]] <- read_html(url)
}
######################
res <- NULL
for (i in 1:length(HTML)){
tables<-html_table(HTML[[i]])
## get titles
title <- tables[[1]]
title2 <- title[1,]
names(title2) <- c("ProjectNumber", "Title","PI", "AwardeeOrganization")
title2[1,1]<- title[1,2]
title2[1,2]<- title[2,2]
title2[1,3]<- title[1,4]
title2[1,4]<- title[1,4]

## get abstract
abstract <- tables[[2]]
abstract2 = title2[1,1:3]
names(abstract2)<- c("Abstract_Text","Public_Health_Relevance_Statemen","Project_Terms")
abstract2[1,1]<-abstract[1,1]
abstract2[1,2]<-abstract[3,1]
abstract2[1,3]<-abstract[5,1]

res0 <- data.frame(c(title2, abstract2))
res<-rbind(res,res0)
}

write.csv(res, "Data/AbstractTable.csv", row.names=F)
