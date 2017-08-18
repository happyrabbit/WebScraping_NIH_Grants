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

## step 2: fetch personal wiki pages
HTML <- list()
# loop
i<-1
for ( i in seq_along(links) ){
  # url
  url <- links[i]
   # read in files
  HTML[[i]] <- read_html(url)
}

