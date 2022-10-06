function even_repeating(string){
    let x = []

    for (i=0;i<string.length; i++) {
        let letter = string[i].toLowerCase()
        let index = 0

        if (! ( x.includes( letter ) )) {
            x.push(letter)

         } else if (x.includes( letter )) {
            index = x.indexOf(letter);
            x.splice(index, 1)
 
        }}

    if (x.length == 0) {
        return true
    }
    return false

}


console.log(even_repeating('sasAsasa'))
console.log(even_repeating('sasAsa'))

