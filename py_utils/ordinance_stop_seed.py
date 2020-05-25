from pymongo import MongoClient
import csv
import config

client = MongoClient(config.mongoURI)

db = client.get_database("traffic")
ordinances = db['ordinances-stopsigns']

with open("../data-import/ordinances/tc8-52_stop_intersections.csv","r") as file:
    reader = csv.reader(file, delimiter= '|')
    for row in reader:
      if len(row) > 2: 
        street, direction, cross, type = row[0], row[1], row[2], "stop sign"
        streetArr = street.split(" — ", 1)
        mainStreet = streetArr[0]

        if len(streetArr) > 1:
          info = streetArr[1]
          loc = info.split("[")
          hamlet = loc[0]

          if len(loc) > 1: 
            dates = loc[1].split("by")
            adoption = dates[0]
            
            if len(dates) > 1:
              number = dates[1]
            else:
              number = ""
          else:
            dates = ""
            adoption = ""
            number = ""

        else:
          info = ""
          loc = ""
          hamlet = ""
          dates = ""
          adoption = ""
          number = ""

        ordData = {\
        "streetName": mainStreet, "crossStreet": cross, "adoptionDate": adoption,\
        "tags": [type], "travelDir": direction, "number": number, "hamlet": hamlet}
        ordinances.insert_one(ordData)
      else:
        print(row)
pass
