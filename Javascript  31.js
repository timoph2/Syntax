

function filter_list(l) {

    let x = []
    l.forEach( i => {
        if (Number.isInteger(i)) {
            if (!(x.includes(i))) {
                x.push(i)
            }}
 
})
return x
}

console.log(filter_list([2,4,5,'hi',3]))