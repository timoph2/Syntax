
function move_zeros(lst) {
    let lst2 = [...lst]
    console.log(lst)
    
    let counter = 0
    
    for (i=0; i<lst.length; i++){

        if (lst[counter] == 0){
            lst2.shift()
            counter = counter - 1
            lst2.push(0)}
        counter++
    }
                   
    return lst2
}

console.log(move_zeros([1,0,5,7,0,0,4,2]))
