import datetime
from src.controller import ctrl_db, ctrl_serialize
from src.model.all import SQLObj
from src.errors.APIerrors import EventErrors
def get():
    result = ctrl_db.get_all(SQLObj.event)
    return ctrl_serialize.all(result)

def create(parameters):
    try:
        # Check if is repeated
        original_obj = ctrl_db.get_item(SQLObj.event, {
                'title': parameters['title'], 
                'initdate': parameters['initdate'], 
                'enddate': parameters['enddate']
            })
        if original_obj:
            return EventErrors.already_exists

        # Create
        created = ctrl_db.create_item(SQLObj.event, parameters)
        if created:
            return False 

        return EventErrors.precondition
    except Exception as e:
        return EventErrors.unexpected

def update(parameters):
    try:
        # Check if exists
        original_obj = ctrl_db.get_item(SQLObj.event, {'id': parameters['id']})
        if not original_obj:
            return EventErrors.not_exists

        # Step 2: Update it
        if original_obj:
            updated = ctrl_db.update_item(original_obj, parameters)
            if updated:
                return False
        return EventErrors.precondition
    except Exception as e:
        return EventErrors.unexpected

def delete(event_id):
    try:
        # Check if exists
        original_obj = ctrl_db.get_item(SQLObj.event, {'id': int(event_id)})
        if not original_obj:
            return EventErrors.not_exists
        deleted = ctrl_db.delete_item(SQLObj.event, {'id': int(event_id)})
        if deleted:
            return False
        else:
            return EventErrors.precondition
    except Exception as e:
        return EventErrors.unexpected
