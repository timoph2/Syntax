

let get_total = (costs, items, tax) => {
    let sum = 0
    items.forEach(item=> {
        if (item in Object.keys(costs)) {
            sum += costs[item]
        }
    })

    return Math.round(sum * (1+tax), 2) 
}

