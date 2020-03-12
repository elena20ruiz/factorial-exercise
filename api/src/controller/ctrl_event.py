from src.controller import ctrl_db, ctrl_serialize
from src.model.all import SQLObj

def get():
    result = ctrl_db.get_all(SQLObj.event)
    return ctrl_serialize.all(result)

def create(parameters):
    try:
        res = ctrl_db.create_item(SQLObj.event, parameters)
    except Exception as e:
        pass

def update():
    try:
        res = ctrl_db.update_item(SQLObj.event)
    except Exception as e:
        pass

def delete():
    try:
        res = ctrl_db.delete_item(SQLObj.event)
    except Exception as e:
        pass 
