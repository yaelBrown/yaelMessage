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
        print("cookies")
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
                return {
                    "id": res[0],
                    "username": res[1],
                    "password": res[2],
                    "email": res[3]
                }
            else:
                return False
        except Exception as err:
            print(str(err))
            return False

    def loginUserByEmail(self, email, password):
        print("login by email")
        if email == "" or password == "":
            return False
        try:
            stmt = "select * from users where email = '" + email + "'"
            cursor.execute(stmt)
            res = cursor.fetchone()
            if res == None:
                return False
            temp = res if bcrypt.checkpw(
                bytes(password, 'utf-8'), bytes(res[2], 'utf-8')) else False
            if temp != False:
                return {
                    "id": res[0],
                    "username": res[1],
                    "password": res[2],
                    "email": res[3]
                }
        except Exception as err:
            print(str(err))
            return False
