


function print_all_numbers(num){

    for (i=0; i<num; i++) {
        if (i < 10){
            i = "0" + i
        }
        console.log(`${i},`)
    }
    console.log(num)
}

print_all_numbers(10)









