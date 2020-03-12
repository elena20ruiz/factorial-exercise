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

def update_item(original_obj, parameters):
    try:

        cols = original_obj.__table__.columns
        for c in cols:
            value = getattr(original_obj, c.name)
            # If different update
            if value != parameters[c.name]:
                setattr(original_obj, c.name, parameters[c.name])

            

        db_session.commit()
        return True
    except Exception as e:
        print(e)
        return False

def delete_item(tablename, primary_keys):
    try:
        sqlobject = SQLObjClass[tablename]
        db_session.query(sqlobject).filter_by(**primary_keys).delete()
        db_session.commit()
        return True
    except Exception as e:
        print(e)
        return False

def get_item(tablename, primary_keys):
    sqlobject = SQLObjClass[tablename]
    res = db_session.query(sqlobject).filter_by(**primary_keys).first()
    if res:
        return res
    else:
        return False