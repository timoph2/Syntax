


function areEqualByThreeDecimalPlaces(num1, num2) {

    if (parseInt(num1*1000) == parseInt(num2*1000)){
        return true
    }else{
        return false
    }}


console.log(areEqualByThreeDecimalPlaces(3.12311, 3.12322))
console.log(areEqualByThreeDecimalPlaces(3.2311, 3.12322))
