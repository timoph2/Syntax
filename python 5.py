def filter_list(l):
    x = []
    for i in l:
        if str(i).isdigit():
            if int(i) not in x:
                x.append(int(i))
    if x == [1]:
        x = []

    return x