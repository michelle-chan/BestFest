#BestFest

#populate database
mongoimport -h localhost:3001 --db meteor --collection artists --type json --file artists.json --jsonArray

#clear database
meteor mongo
db.artists.remove({})