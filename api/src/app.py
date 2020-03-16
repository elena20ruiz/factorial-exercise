from flask import Flask, request, jsonify

from src.db import sqlalchemy
from src.controller import ctrl_event

from src.responses import responses, r_event
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/api/event", methods=["GET", "POST", "PUT", "DELETE"])
def event():
    try:
        if request.method == 'GET':
            result = ctrl_event.get()
            return jsonify(result), 200
        
        if request.method == 'DELETE':
            event_id = request.args.get('id')
            error = ctrl_event.delete(event_id)
            if not error:
                return responses.correctly_deleted()
            return r_event.get_error_msg(error)

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
        body['initdate'] = ctrl_serialize.to_datetime(body['initdate'])
        body['enddate'] = ctrl_serialize.to_datetime(body['enddate'])

        if request.method == 'POST':
            error = ctrl_event.create(body)
            if not error:
                return responses.correctly_created()
            return r_event.get_error_msg(error)
        
        if request.method == 'PUT':
            error = ctrl_event.update(body)
            if not error:
                return responses.correctly_updated()
            return r_event.get_error_msg(error)

    except Exception as e:
        return responses.unexpected_error()