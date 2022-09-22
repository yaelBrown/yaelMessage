from dotenv import dotenv_values
import mysql.connector

env = dotenv_values(".env")

mysqlConn = mysql.connector.connect(
  host=env["MYSQL_URI"],
  port=env["MYSQL_PORT"],
  user=env["MYSQL_USER"],
  password=env["MYSQL_PASSWORD"],
  database="yaelmessage"
)

