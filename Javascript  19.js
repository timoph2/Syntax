


function box(n){
    let ans = []
    for (i=0; i<n; i++){
        if (i == 0 || i == n-1){
            ans.push('-'.repeat(n))
        }else{
            ans.push('-'+  ' '.repeat((n-2)) +  '-')
    }}
    return ans}

    console.log(box(7))