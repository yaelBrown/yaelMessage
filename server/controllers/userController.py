from flask import Blueprint, request
from services.userService import UserService
from models.usersModel import Users

userController = Blueprint('userController', __name__)

@userController.route('/', methods=['POST'])
def registerUser():
  data = request.get_json()
  if data["username"] == None or data["password"] == None or data["email"] == None:
    raise Exception("Invalid Information to create User")
  try: 
    out = UserService.registerUser(None, Users(data["username"], data["password"], data["email"]))
    del out['password']
    return {"msg": out}, 200
  except Exception as err: 
    print(str(err))
    return {"err": str(err)}, 422
  

def editUser():
  pass

def deleteUSer():
  pass