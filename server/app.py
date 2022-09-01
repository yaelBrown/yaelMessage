from flask import Flask
# from flask_cors import CORS

app = Flask(__name__)
# CORS(app)

# app.register_blueprint([controller], url_prefix='/api/')

@app.route("/")
def hello_world():
  return {"msg": "Were you expecting a webpage or something?"}

@app.route("/ws")
def websocket():
  return {"msg": "Placeholder route for socket"}


if __name__ == "__main__":
  print("Just use 'flask run'")
  app.run(port=5000, debug=True)