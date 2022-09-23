from flask import Blueprint, request
from services.userService import UserService
from models.usersModel import Users
import bcrypt

userController = Blueprint('userController', __name__)


@userController.route('/', methods=['POST'])
def registerUser():
    data = request.get_json()['data']
    if data["username"] == None or data["password"] == None or data["email"] == None:
        raise Exception("Invalid Information to create User")
    try:
        out = UserService.registerUser(None, Users(data["username"], bcrypt.hashpw(
            bytes(data["password"], 'utf-8'), bcrypt.gensalt()), data["email"]))
        del out['password']
        return {"msg": out}, 200
    except Exception as err:
        print(str(err))
        return {"err": str(err)}, 422


@userController.route('/', methods=['GET'])
def loginUser():
    try:
        data = request.get_json()['data']
        if data["password"] == None:
            raise Exception("Invalid Information to login User")
        if data["username"] == None and data["email"] is None:
            raise Exception("You need a username or password to login user")
        if data["username"]:
            out = UserService.loginUserByUsername(
                None, data["username"], data["password"])
            if out == False:
                raise Exception("Unable to login user")
            del out['password']
            return {"msg": out}, 200
        if data["email"]:
            out = UserService.loginUserByEmail(
                None, data["email"], data["password"])
            if out == False:
                raise Exception("Unable to login user")
            del out['password']
            return {"msg": out}, 200
    except Exception as err:
        print(str(err))
        return {"err": str(err)}, 400


def getUser():
    pass


def getUsers():
    pass
  

def editUser():
    pass


def deleteUSer():
    pass
