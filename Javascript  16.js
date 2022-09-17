



function change_char(str) {

let char = str[0]   

for (i=0;i<str.length;i++) {
    str = str.replace(char, '$')   
}
return str
}

console.log(change_char("hohehehe"))














