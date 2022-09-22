

function pig_latin(word){

    if (word.length >3) {
        let word1 = word.slice(1)
        let word2 = word[0]  

        return  word1 + word2 + 'ay' 
    }
    
    return word
}

console.log(pig_latin('carrots and vegetables'))

