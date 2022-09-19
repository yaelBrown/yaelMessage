from dotenv import dotenv_values
from pymongo import MongoClient

env = dotenv_values(".env")
MONGODB_URI = env["MONGO_URI"]

mongo_client = MongoClient(MONGODB_URI)
mongoConn = mongo_client["yaelmessage"]