from flask import Flask, request, jsonify

from src.db import sqlalchemy
from src.controller import ctrl_event

from src.util import responses

app = Flask(__name__)

@app.route("/api/event", methods=["GET", "POST", "PUT", "DELETE"])
def event():

    try:
        if request.method == 'GET':
            result = ctrl_event.get()
            return jsonify(result)
        
        if request.method == 'DELETE':
            # TODO: Get parameters
            ctrl_event.delete()

        body = request.json
        # Check parameters
        required_param = ['title', 'initdate', 'enddate']
        missed_param = []
        for r in required_param:
            if not r in body:
                missed_param.append(missed_param)
        if len(missed_param):
            return responses.bad_parameters(missed_param)
        
        if request.method == 'POST':
            ctrl_event.create(body)
        
        if request.method == 'PUT':
            ctrl_event.update()


        
        return jsonify('PERFECT :D')
    except Exception as e:
        print(e)
        return jsonify(str(e))