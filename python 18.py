
def fxName(stri):
    char = stri[0]
    stri = stri.replace(char, "RR")
    stri = stri + " " + stri[0:2]
    return stri

print(fxName('restart'))