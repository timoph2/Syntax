
def hey(n,stri):
    word_len = []
    txt = stri.split(' ')
    for x in txt:
        if len(x) > n:
            word_len.append(x)
    return word_len

print(hey(4, 'jump over lazy buffalo'))
