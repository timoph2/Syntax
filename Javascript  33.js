 

let miles = 0

function toMilesPerHour(kilometersPerHour){
    if (kilometersPerHour < 0){
        return -1
    }
    
    miles = kilometersPerHour * 1.609
    return miles
}


function printConversion(kilometersPerHour){
    console.log( String(kilometersPerHour) + ` km/h = ${String(miles)} mph` )
}



toMilesPerHour(1.5)
printConversion(1.5)










 