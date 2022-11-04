 


def toMilesPerHour(kilometersPerHour):
    if kilometersPerHour < 0:
        return -1
    
    global miles 
    miles = kilometersPerHour * 1.609

    return miles

def printConversion(kilometersPerHour):
    print( str(kilometersPerHour) + f' km/h = {str(miles)} mph' )




toMilesPerHour(1.5)
printConversion(1.5)










 