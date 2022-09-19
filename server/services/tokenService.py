from dotenv import dotenv_values
from datetime import datetime

import jwt

env = dotenv_values(".env")

class TokenService:
    def generateToken(self, user_id):
        return jwt.encode({
            "user_id": user_id,
            "created": datetime.timestamp(datetime.now()) ,
            "expires": datetime.timestamp(datetime.now())  + 10800
        },
            env["JWT_SECRET"],
            algorithm="HS256"
        )
