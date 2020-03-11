from sqlalchemy import Column, Integer, String, Date, UniqueConstraint
from src.db.sqlalchemy import Base

class Event(Base):
    __tablename__ = 'events'
    id = Column('id',Integer, primary_key=True)
    title = Column('title',String(50), nullable=False)
    description = Column('description', String(500))
    initDate = Column('initdate', Date, nullable=False)
    endDate= Column('enddate', Date, nullable=False)
    
    UniqueConstraint('title', 'initDate', 'endDate', name='uniqueEvent')

    def serialize(self):
        return dict(
            title = self.title,
            description = self.description,
            initDate = self.initDate,
            endDate = self.endDate
        )