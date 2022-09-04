function fx (x,y) {
    if (x==y) {
        return (x+y)*3
    }
    else if (x > y) {
        return (x**y)
    }
    else {
        return (x+y)
    }
}
console.log(fx(4,2))