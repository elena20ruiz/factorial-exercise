


def all(setOfObjects):
    output = []
    for o in setOfObjects:
        output.append(
            o.serialize()
        )
    return output