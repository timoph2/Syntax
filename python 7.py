
def is_triangle(a, b, c):
    x = [a,b,c]
    y = max(x)
    x.remove(y)
    
    if sum(x) > y:
        return True
    else:
        return False