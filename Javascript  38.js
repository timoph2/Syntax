
function isLeapYear(year) {
    if (year >= 9999 || year <= 0){
        return false
    }
    
    if ((year % 400 == 0) && (year % 100 == 0)){
        return true
    }

    else if ((year % 4 ==0) && (year % 100 != 0)){
        return true
    }

    else{
        return false}
    }


    console.log(isLeapYear(1999))
    console.log(isLeapYear(2024))

 