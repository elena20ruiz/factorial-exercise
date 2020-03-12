from src.db.sqlalchemy import db_session
from src.model.all import SQLObjClass

def get_all(tablename):
    sqlobject = SQLObjClass[tablename]
    allObjects = sqlobject.query.all()
    return allObjects

def create_item(tablename, parameters):
    try:
        sqlobject = SQLObjClass[tablename]
        insObj = sqlobject(parameters)
        db_session.add(insObj)
        db_session.commit()
        return True
    except Exception as e:
        print(e)
        return False

def update_item():
    pass

def delete_item():
    pass