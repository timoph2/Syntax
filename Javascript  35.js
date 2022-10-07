 


function shouldWakeUp(barking,hourOfday) {
    if (barking || hourOfday < 8 || hourOfday > 22){
        return true
    }else{
        return false
    }}






    console.log(shouldWakeUp(true, 12))
    console.log(shouldWakeUp(false, 10))








 