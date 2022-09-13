

function hasTeen(age1,age2,age3){
    return isTeen(age1) || isTeen(age2) || isTeen(age3)
}

 
function isTeen(age){
    return (age > 12 && age < 20)
}

console.log(hasTeen(3,16,22))


