from utils.datetimeHelper import DatetimeHelper
from dotenv import dotenv_values

import jwt

class Sessions:
  def __init__(self, user_id, token):
    self.user_id = user_id
    self.dateTime = DatetimeHelper.currentTimeToUTC()
    self.token = token
