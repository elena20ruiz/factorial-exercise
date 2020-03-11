from flask import Flask, request, jsonify

from src.db import sqlalchemy
from src.controller import ctrl_event

app = Flask(__name__)

@app.route("/api/event", methods=["GET, POST, PUT, DELETE"])
def event():

    try:
        if request.method == 'GET':
            ctrl_event.get()
        
        if request.method == 'POST':
            ctrl_event.update()
        
        if request.method == 'PUT':
            ctrl_event.create()

        if request.method == 'DELETE':
            ctrl_event.delete()

    except Exception as e:
        pass