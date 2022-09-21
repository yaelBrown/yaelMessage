class Users:
  def __init__(self, username, password, email):
    self.username = username
    self.password = password
    self.email = email

  def serialize(self):
    return {
      "username": self.username,
      "password": self.password,
      "email": self.email
    }