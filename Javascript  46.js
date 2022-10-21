

function get_sum(a,b){
let x = [a,b]
let start = Math.min(...x)
let end = Math.max(...x)
    

let ans = 0
    for (i=start;i<=end;i++) {
        ans += i
    }
    return ans
}
 
console.log(get_sum(5,2))
console.log(get_sum(1,3))
 









