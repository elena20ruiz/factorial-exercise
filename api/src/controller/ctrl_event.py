from src.controller import ctrl_db, ctrl_serialize
from src.data.tablenames import Tablenames


def get():
    result = ctrl_db.get_all(Tablenames.event.value)
    return ctrl_serialize.all(result)
    
def create():
    try:
        res = ctrl_db.create_item(Tablenames.event.value)
    except Exception as e:
        pass

def update():
    try:
        res = ctrl_db.update_item(Tablenames.event.value)
    except Exception as e:
        pass

def delete():
    try:
        res = ctrl_db.delete_item(Tablenames.event.value)
    except Exception as e:
        pass 
