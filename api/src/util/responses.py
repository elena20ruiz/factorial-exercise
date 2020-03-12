from flask import jsonify


def bad_parameters(mparameters):
    return jsonify(f'Missing parameters: {mparameters.join(" ")}'), 400

