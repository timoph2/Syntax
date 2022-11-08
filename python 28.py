

def isLeapYear(year):
    if year >= 9999 or year <= 0:
        return False
    


    if (year % 400 == 0) and (year % 100 == 0):
        return True

    elif (year % 4 ==0) and (year % 100 != 0):
        return True

    else:
        return False


 






 