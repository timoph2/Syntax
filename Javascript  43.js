


function high_and_low(nums){
let x = nums.split("")   //.split works for string only!! not number

let y = []

    x.forEach( i => {
        y.push(parseInt(i))
    })

    
    let high = Math.max(...y)
    let low =  Math.min(...y)
    return `${high} ${low}`
}





    console.log(high_and_low('14127'))




    



