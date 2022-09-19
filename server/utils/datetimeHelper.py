"""
  from datetime import datetime

  dt = datetime.timestamp(datetime.now()) 
  dt2 = datetime.timestamp(datetime.now()) + (60 * 60 * 3)
  print(dt)
  print(dt2)

  date1 = datetime.utcfromtimestamp(dt)
  date = datetime.utcfromtimestamp(dt2)

  print(date1)
  print(date)
"""
from datetime import datetime

class DatetimeHelper:
  def currentTimeToUTC():
    return datetime.timestamp(datetime.now())

  def UTCtoCurrentTime(dt):
    return datetime.utcfromtimestamp(dt)