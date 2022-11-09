


def areEqualByThreeDecimalPlaces(num1, num2):
    if int(num1*1000) == int(num2*1000):
        return True
    else:
        return False


print(areEqualByThreeDecimalPlaces(3.12311, 3.12322))