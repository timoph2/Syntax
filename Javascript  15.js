 

function decimal_to_binary(d) {
    let string = ''

    while (d > 0) {
        string += String(d%2)
        d = Math.floor(d / 2) //floor division
    }

    return(string.split("").reverse().join(""))  //how reverse string>>  
}
 

console.log(decimal_to_binary(11)) // '1011'
console.log(decimal_to_binary(76)) // '1001100'