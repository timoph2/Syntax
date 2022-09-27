 
function char_frequency(str){
    let dictx = {}
 

    for (i=0; i<str.length; i++) {
        keys = Object.keys(dictx) //returns list
        console.log(keys)

        if (keys.includes(str[i])){
            dictx[str[i]] ++
        }else{
            dictx[str[i]] = 1
        }

    }
    
    return dictx
}

//count occurence of each letter in a string

console.log(char_frequency('google.com'))
 







