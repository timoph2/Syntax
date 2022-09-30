function to_jaden_case(string){
    let ans = ""
    for (i=0; i<string.length; i++){
        if (i == 0){
            ans += string[i].toUpperCase()
        }else if (string[i-1] == " "){
            ans += string[i].toUpperCase()
        }else{
            ans += string[i].toLowerCase()
        }}
    return ans
}


console.log(to_jaden_case('tHis is a sEnteNCe'))

