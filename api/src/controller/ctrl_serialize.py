
import datetime

def all(setOfObjects):
    output = []
    for o in setOfObjects:
        output.append(
            o.serialize()
        )
    return output

def to_datetime(value):
    dates = value.split('-')
    value = datetime.date(
        int(dates[0]),
        int(dates[1]),
        int(dates[2])
    )
    return value