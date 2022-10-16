



function printYearsAndDays(minutes){

    if (minutes < 0){
        console.log( 'invalid value' )
    }

    let day = (minutes / 60) / 24  
    let year = day / 365 
    day -= year*365

    console.log( `${minutes}min = ${year}y and ${day}d` )
}


printYearsAndDays(525600)











