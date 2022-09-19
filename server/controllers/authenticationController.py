from flask import Blueprint
from services.tokenService import TokenService

authenticationController = Blueprint('authenticationController', __name__)

@authenticationController.route('/token', methods=['GET'])
def generateToken():
    return {"token": str(TokenService.generateToken(None, 1))[2:-1]}, 200


def authUser():
    pass
