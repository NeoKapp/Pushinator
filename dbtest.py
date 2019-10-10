from pymongo import MongoClient
client = MongoClient('18.216.84.200',27017)

db = client.textstore
collection=db['texts']
cursor = collection.find({})
for document in cursor:
        print(document)
