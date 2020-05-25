# How did I

* Scrape the Town eCode for the ordinances, and load it into the mongoDB database

  1. First I inspected the website to get the table html
  2. Then I used an HTML to csv converter to remove the html tags and get a csv file
  3. Used Python to parse out information and place it into the MongoDB database
  