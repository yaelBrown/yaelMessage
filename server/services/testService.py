from config.mongoConn import mongoConn
from config.mysqlConn import mysqlConn

mongo_collection = mongoConn["test"]
cursor = mysqlConn.cursor()

class TestService:
    def checkMongoStatus():
        try:
            return mongo_collection.find_one({"test": "mongo-test"})["status"]
        except Exception as err:
            return str(err)

    def checkMysqlStatus():
        try:
            cursor.execute("select * from test")
            return cursor.fetchall()[0][0]
        except Exception as err:
            return str(err)
