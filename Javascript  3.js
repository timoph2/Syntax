

function hey(n,str) {
    word_len = []
    txt = str.split(' ')
    for (let x of txt) {
        if (x.length > n) {
            word_len.push(x)
        }
    }
    return word_len
}

console.log(hey(4, 'jump over lazy buffalo'))