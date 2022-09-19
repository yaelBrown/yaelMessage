from config.mongoConn import mongoConn

mongo_collection = mongoConn["test"]


class TestService:
    def checkMongoStatus():
        try:
            return mongo_collection.find_one({"test": "mongo-test"})["status"]
        except Exception as err:
            return err

    def checkMysqlStatus():
        pass
