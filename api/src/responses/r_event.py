from src.responses import responses
from src.errors.APIerrors import EventErrors


def get_error_msg(error):
    if EventErrors.precondition == error:
        return responses.precondition_failed('')
    elif EventErrors.already_exists == error:
        return responses.precondition_failed('resource alreay exists')
    elif EventErrors.not_exists == error:
        return responses.precondition_failed('resource not exists')
    else:
        return responses.unexpected_error()