from src.model.all import SQLOBJECTS

def get_all(tablename):
    
    sqlobject = SQLOBJECTS[tablename]
    allObjects = sqlobject.query.all()
    return allObjects

def create_item():
    pass

def update_item():
    pass

def delete_item():
    pass