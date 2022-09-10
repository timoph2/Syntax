 

function robot_dest(s) {
let x = 0
let y = 0


    for (ch=0; ch<s.length; ch++) {
        if (s[ch] == 'U') {
            y += 1
        }else if (s[ch] == 'D') {
            y -= 1
        }else if (s[ch] == 'L') {
            x -= 1
        }else if (s[ch] == 'R') {
            x += 1
        }}
    
    return [x,y]   //javascript cant return tuple, only array.

}


// console.log(robot_dest('UULRDRDDDD') == (1,-3))
// console.log(robot_dest('URLD') == (0,0))


console.log(robot_dest('UULRDRDDDD'))
console.log(robot_dest('URLD'))
