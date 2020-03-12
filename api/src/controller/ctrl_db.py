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


def is_item(tablename, primary_keys):
    sqlobject = SQLObjClass[tablename]
    res = db_session.query(sqlobject).filter_by(**primary_keys).first()
    if res:
        return True
    else:
        return False