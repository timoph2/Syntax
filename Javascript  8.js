
function is_triangle(a, b, c){
    let x = [a,b,c]
    let y = Math.max(...x)   //need spread operator

    let index = x.indexOf(y);
    x.splice(index)

    let initialValue = 0;
    const sumX = x.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
      );
    console.log(sumX)
    console.log(y)

    
    if (sumX > y) {
        return true
    }else{
        return false
    }}

console.log(is_triangle(3,4,5))

//Math.max() & spread operator to use list.
//remove specific element == find index, then slice.
//sum of list == array.reduce