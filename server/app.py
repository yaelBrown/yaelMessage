from flask import Flask
from flask_cors import CORS

from config.mongoConn import mongoConn

from controllers.testController import testController
from controllers.authenticationController import authenticationController
from controllers.userController import userController

app = Flask(__name__)
CORS(app)

app.register_blueprint(testController, url_prefix='/api/test')
app.register_blueprint(authenticationController, url_prefix='/api/auth')
app.register_blueprint(userController, url_prefix='/api/user')


@app.route("/")
def hello_world():
    return {"msg": "Were you expecting a webpage or something?"}


@app.route("/ws")
def websocket():
    return {"msg": "Placeholder route for socket"}


if __name__ == "__main__":
    app.run(port=5000, debug=True)
