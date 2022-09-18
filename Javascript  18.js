

let myDict = {'a':1, 'b':2, 'c':3, 'd':4}
console.log(myDict)

if ('a' in myDict) {
    delete myDict['a']  //remove a key-value
}


for (const [key,value] of Object.entries(myDict)) {
    console.log(key + '->' + String(value))
}




