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
            event_id = request.args.get('id')
            res = ctrl_event.delete(event_id)
            if res:
                return jsonify('Resource correctly deletc'), 200
            return responses.unexpected_error()

        body = request.json

        # Check parameters
        required_param = ['title', 'initdate', 'enddate']
        missed_param = []
        for r in required_param:
            if not r in body:
                missed_param.append(missed_param)
        if len(missed_param):
            return responses.bad_parameters(missed_param)

        # Format type variables
        body['initdate'] = ctrl_event.to_datetime(body['initdate'])
        body['enddate'] = ctrl_event.to_datetime(body['enddate'])

        if request.method == 'POST':
            res = ctrl_event.create(body)
            if res:
                return responses.correctly_created()
            else:
                return responses.unexpected_error()
        
        if request.method == 'PUT':
            res = ctrl_event.update(body)
            if res:
                return responses.correctly_updated()
            else:
                return responses.unexpected_error()

    except Exception as e:
        print(e)
        return jsonify(str(e))