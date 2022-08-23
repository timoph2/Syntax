def get_total(costs, items, tax):
    sum = 0
    for item in items:
        if item in costs.keys():
            sum += costs[item]
    return round(sum * (1+tax), 2) 