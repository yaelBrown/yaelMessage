from hashlib import new
from config.mysqlConn import mysqlConn
from models.usersModel import Users

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
