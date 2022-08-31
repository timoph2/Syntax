
function fxName(str) {
    let char = str[0]
    str = str.replace(char,'RR')
    str = str + " " + str.substring(0,2)
    return str
}

console.log(fxName('restart'))