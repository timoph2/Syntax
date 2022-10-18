let x =0

function isOdd(num){
    if (num < 0){
        return false
    }
    if (num%2 == 0){
        return false
    }else{
        return true
    }}
      
    
function sumOdd(start, end){
    for (i=start; i<end+1; i++){
        if (isOdd(i)){
            x = x + i
        }}
    return x
}


console.log(isOdd(55))
console.log(isOdd(56))
















