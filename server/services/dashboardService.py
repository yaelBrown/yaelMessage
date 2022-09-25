from config.mysqlConn import mysqlConn

import calendar
import datetime
import json

cursor = mysqlConn.cursor()

class DashboardService:
  def dashboardInit(user_id):
    now = datettime()
    #need to get utc time
    dt = calendar.timegm(datetime.utctimetuple())
    try: 
      def _pullUserMetaData():
        stmt = "select * from users_meta where user_id = " + str(user_id)
        cursor.execute(stmt)
        return cursor.fetchone()

      # pull users meta data
      res = _pullUserMetaData()
      
      print(res)

      # init new meta data if one does not exist
      if res is None:
        newConvosList = {
          conversations: []
        }
        conv = json.loads(newConvosList)
        stmt = "insert into users_meta (user_id, conversations) values (%s, %s)"
        vals = (user_id, dt, conv)
        cursor.execute(stmt, vals)

      # update user last login
      stmt = "update users_meta set last_login = '" + dt + "' where user_id = '" + user_id + "'"
      cursor.execute(stmt)
      mysqlConn.commit()
      print({"dt": dt})
      # pull user meta data again
      res = _pullUserMetaData()

      print(res)


        
      return {"msg": "terminal"}
    except Exception as err:
      print(str(err))
      return False