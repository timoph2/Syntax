def what_list_am_i_on(actions):
    naughty = 0
    nice = 0
    for i in actions:
        if i[0] in ['b','f','k']:
            naughty += 1
        if i[0] in ['g','s','n']:
            nice += 1
    if naughty >= nice:
        return 'naughty'
    return 'nice'
        