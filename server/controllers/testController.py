from flask import Blueprint
from services.testService import TestService

testController = Blueprint('testController', __name__)


@testController.route('/api', methods=['GET'])
def apiTest():
    return {"msg": "ok"}, 200


@testController.route('/mongo', methods=['GET'])
def mongoTest():
    return {"msg": TestService.checkMongoStatus()}, 200


@testController.route('/mysql', methods=['GET'])
def mysqlTest():
    return {"msg": TestService.checkMysqlStatus()}, 200


@testController.route('/all', methods=['GET'])
def testAll():
    mongo = TestService.checkMongoStatus()
    mysql = TestService.checkMysqlStatus()

    return {
        "mongo": mongo,
        "mysql": mysql,
        "api": "ok"
    }, 200
