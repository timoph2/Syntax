

function hi(n) {
    let x = n.split(" ")
    x.pop()
    x.push("hi")
    let y = " "
    y = x.join(" # ")
    return y
}

console.log(hi('the quick brown fox'))
// returns the # quick # brown # fox