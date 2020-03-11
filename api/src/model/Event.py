from sqlalchemy import Column, Integer, String, Date
from src.db.sqlalchemy import Base

class Event(Base):
    __tablename__ = 'events'
    id = Column(Integer, primary_key=True)
    title = Column(String(50), nullable=False)
    description = Column(String(500))
    initDate = Column(Date, nullable=False)
    endDate= Column(Date, nullable=False)

    def serialize(self):
        return dict(
            title = self.title,
            description = self.description,
            initDate = self.initDate,
            endDate = self.endDate
        )