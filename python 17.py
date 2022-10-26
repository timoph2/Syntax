def move_zeros(lst):
    counter = 0
    
    for i in range(len(lst)):
        if lst[counter] == 0:
            lst.pop(counter)
            counter -= 1
            lst.append(0)
        counter += 1
        
            
    return lst