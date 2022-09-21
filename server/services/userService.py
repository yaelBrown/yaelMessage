from config.mysqlConn import mysqlConn
from models.usersModel import Users

class UserService: 
  def registerUser(self, newUser):
    try:
      stmt = "insert into users (username, password, email) values (%s, %s, %s)"
      val = (newUser.username, newUser.password, newUser.email)
      mysqlConn.execute(stmt, val)
      return newUser.serialize()
    except Exception as err: 
      print(str(err))
      return False

  # def _countUsers(self):
  #   try:
  #     mysqlConn.execute("select * from test")
  #     return mysqlConn.fetchone()
  #   except Exception as err:
  #     print(str(err))
  #     return False
