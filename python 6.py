def is_isogram(string):
    x = []
    for i in string:
        if i.lower() not in x:
            x.append(i.lower())
        else:
            return False
    return True