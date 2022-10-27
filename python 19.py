
def hi(n):
    x = n.split(" ")

    x.pop()
    x.append("hi")
    y = " "
    y = " # ".join(x)
    return y


    
print(hi('the quick brown fox'))
# returns the # quick # brown # fox