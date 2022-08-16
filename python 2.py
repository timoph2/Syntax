def to_jaden_case(string):
    ans = ""
    for i in range(len(string)):
        if i == 0:
            ans += string[i].upper()
        elif string[i-1] == " ":
            ans += string[i].upper()
        else:
            ans += string[i].lower()
            
    return ans

