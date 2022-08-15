def longest(a1, a2):
    combined = a1 + a2
    ans = []
    for i in combined:
        ans.append(i)

    ans = set(ans)
    ans = list(ans)
    ans.sort()
    final = ""
    for i in ans:
        final += i
    return final
    