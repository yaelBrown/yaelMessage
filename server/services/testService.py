from config.mongoConn import mongoConn
from config.mysqlConn import mysqlConn

mongo_collection = mongoConn["test"]


class TestService:
    def checkMongoStatus():
        try:
            return mongo_collection.find_one({"test": "mongo-test"})["status"]
        except Exception as err:
            return str(err)

    def checkMysqlStatus():
        try:
            mysqlConn.execute("select * from test")
            return mysqlConn.fetchall()[0]
        except Exception as err:
            return str(err)
