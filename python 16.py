def expanded_form(num):
    length = len(str(num))
    ans = ''
    num = str(num)
    
    for i in range(length):
        if num[i] != '0':
            ans += num[i] + ('0' * (length-i-1))
            if i != (length-1):
                ans += ' + '

    if ans[-1] == ' ':
        return ans[:-3:]
    return ans