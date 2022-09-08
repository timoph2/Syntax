

function zero_fuel(distance_to_pump, mpg, fuel_left){
    let d_travel = mpg * fuel_left
    if (d_travel >= distance_to_pump){
        return true}
    else{
        return false
    }}

console.log(zero_fuel(22,44,0))

    