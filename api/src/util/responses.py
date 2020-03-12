from flask import jsonify


def bad_parameters(mparameters):
    return jsonify(f'Missing parameters: {mparameters.join(" ")}'), 400

def correctly_created():
    return jsonify('Resource correctly created'), 200

def correctly_updated():
    return jsonify('Resource correctly updated'), 200

def unexpected_error():
    return jsonify('Unexpected error'), 200