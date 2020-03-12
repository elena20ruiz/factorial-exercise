import datetime
from src.controller import ctrl_db, ctrl_serialize
from src.model.all import SQLObj

def get():
    result = ctrl_db.get_all(SQLObj.event)
    return ctrl_serialize.all(result)

def create(parameters):
    try:
        res = ctrl_db.create_item(SQLObj.event, parameters)
        if res:
            return True 
        return False
    except Exception as e:
        return False

def update(parameters):
    try:
        # Check if exists
        original_obj = ctrl_db.get_item(SQLObj.event, {'id': parameters['id']})
        # Step 2: Update it
        if original_obj:
            res = ctrl_db.update_item(original_obj, parameters)
            return True
        else:
            return False
    except Exception as e:
        return False

def delete(event_id):
    try:
        # Check if exists
        original_obj = ctrl_db.get_item(SQLObj.event, {'id': int(event_id)})
        if not original_obj:
            return False
        res = ctrl_db.delete_item(SQLObj.event, {'id': int(event_id)})
        if res:
            return True
    except Exception as e:
        return False


def to_datetime(value):
    dates = value.split('-')
    value = datetime.date(
        int(dates[0]),
        int(dates[1]),
        int(dates[2])
    )
    return value