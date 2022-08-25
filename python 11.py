def box(n):
    ans = []
    for i in range(n):
        if i == 0 or i == n-1:
            ans.append('-'*n)
        else:
            ans.append('-'+' '*(n-2) +'-')
            
    return ans