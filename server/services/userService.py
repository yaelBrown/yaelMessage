from config.mysqlConn import mysqlConn
from models.usersModel import Users

import bcrypt

cursor = mysqlConn.cursor()


class UserService:
    def registerUser(self, newUser: Users):
        try:
            stmt = "insert into users (username, password, email) values (%s, %s, %s)"
            val = (newUser.username, newUser.password, newUser.email)
            cursor.execute(stmt, val)
            mysqlConn.commit()
            return newUser.serialize()
        except Exception as err:
            print(str(err))
            return False

    def loginUserByUsername(self, username, password):
        if username == "" or password == "":
            return False
        try:
            stmt = "select * from users where username = '" + username + "'"
            cursor.execute(stmt)
            res = cursor.fetchone()
            if res == None:
                return False
            temp = res if bcrypt.checkpw(
                bytes(password, 'utf-8'), bytes(res[2], 'utf-8')) else False
            if temp != False:
              out = {
                "id": res[0],
                "username": res[1],
                "password": res[2],
                "email": res[3]
              }
              return out
            else: 
              return False
        except Exception as err:
            print(str(err))
            return False

    def loginUserByEmail(self, email, password):
        if email == "" or password == "":
            return False
        try:
            stmt = "select * from users where email = '" + email + "'"
            cursor.execute(stmt)
            res = cursor.fetchone()
            if res == None:
                return False
            out = self._serializeFromMysql(res) if bcrypt.checkpw(
                password, res[2]) else False
            return out
        except Exception as err:
            print(str(err))
            return False

    def _serializeFromMysql(self, mysqlTuple):
        return {
            "id": mysqlTuple[0],
            "username": mysqlTuple[1],
            "password": mysqlTuple[2],
            "email": mysqlTuple[3]
        }
