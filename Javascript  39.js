 
//...args spread operators same as *args

function area_rectangle(...args){


    if (args.length == 2) {
        if (args[0] < 0 || args[1] < 0) {
            return -1.0
        }         else{
            return args[0] * args[1]
    }}}

console.log(area_rectangle(5,3))


//#args = method overloading in java
//java just need list same function name, (but args length need manually set....)
 











