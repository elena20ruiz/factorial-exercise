from enum import Enum


class EventErrors(Enum):
    not_exists = 'not_exists'
    already_exists = 'already_exists'
    unexpected = 'unexpected'
    precondition = 'precondition'
