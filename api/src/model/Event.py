import datetime
from sqlalchemy import Column, Integer, String, Date, UniqueConstraint, Sequence
from src.db.sqlalchemy import Base



class Event(Base):
    __tablename__ = 'events'
    id = Column('id',Integer, Sequence('events_id_seq'), primary_key=True)
    title = Column('title',String(50), nullable=False)
    description = Column('description', String(500))
    initdate = Column('initdate', Date, nullable=False)
    enddate= Column('enddate', Date, nullable=False)
    
    UniqueConstraint('title', 'initdate', 'enddate', name='uniqueEvent')

    def __init__(self, parameters):
        cols = self.__table__.columns
        for c in cols:
            if not (c.name in parameters):
                continue
            value = parameters[c.name]
            setattr(self, c.name, value)


    def serialize(self):
        return dict(
            id = self.id,
            title = self.title,
            description = self.description,
            initDate = self.initdate,
            endDate = self.enddate
        )