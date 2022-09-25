

function expanded_form(num){
    num = String(num)
    let length = num.length
    let ans = ''
    
    for (i=0; i<length; i++){
        if (num[i] != '0'){
            ans = ans + num[i] + ('0'.repeat(length-i-1))
            
            if (i != length-1) {
                ans = ans + ' + '
    }}}


    if (ans[-1] == ' '){
        return ans.slice(-3)
    }
    return ans
}

console.log(expanded_form(33))
