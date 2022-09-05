let dd = {
    a:1,
    b:2,
    3:'c'
}

if ('a' in dd) {
    delete dd['a'] //remove key-value
}

console.log(dd)