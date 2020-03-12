from src.model.Event import Event
from enum import Enum

class SQLObj(Enum):
    event = 'event'

SQLObjClass = {
    SQLObj.event: Event
}