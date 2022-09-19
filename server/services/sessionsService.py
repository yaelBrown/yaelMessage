from dotenv import dotenv_values

import jwt

class SessionService:
    secret = dotenv_values["JWT_SECRET"]
    algorithm = "HS256"

    def generateToken(self, user_id, dateTime):
        return jwt.encode({
            "user_id": user_id,
            "created": dateTime,
            "expires": dateTime + (3 * 60 * 60 * 1000)
        },
            self.secret,
            algorithms=self.algorithm
        )
