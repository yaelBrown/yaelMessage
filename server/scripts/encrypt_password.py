"""
  This file is for manually encrypting password in an variable to bcrypt encrypted password. 

  (This file should rarely be used)
"""
# from flask_bcrypt import Bcrypt
import bcrypt

if "__main__" == __name__:
  pw = b"Pa$$w0rd!"
  # out = Bcrypt.generate_password_hash(None, 'ab', pw, 12)
  out = bcrypt.hashpw(pw, bcrypt.gensalt())
  print(out)