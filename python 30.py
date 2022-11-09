


def hasTeen(age1,age2,age3):
    return isTeen(age1) or isTeen(age2) or isTeen(age3)
    





    return False

def isTeen(age):
    return (age > 12 and age < 20)


print(hasTeen(3,16,22))



# hasTeen (int firstValue, int secondValue, int thirdValue) {
#         return isTeen(firstValue) || isTeen(secondValue) || isTeen(thirdValue);
#     }

#isTeen (int value) {
#         return value > 12 && value < 20;
#     }