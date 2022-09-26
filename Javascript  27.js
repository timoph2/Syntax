

function longest(a1, a2){
    let combined = a1.concat(a2)
    console.log(combined)

    let ans = []
    for (i=0; i<combined.length; i++){
        ans.push(combined[i])
    }
    console.log(ans)

    ans = new Set(ans)
    ans = Array.from(ans)
    ans.sort()

    return ans
    
}


console.log(longest(['a', 'z', 'c'], ['c', 'e' , 'a']))
