from flask import Flask
from api.register import register_blueprint
app = Flask(__name__)
app.register_blueprint(register_blueprint)