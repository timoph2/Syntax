function likes(names){

    if (names.length == 0){
        return "no one likes this"


    } else if (names.length == 1){
        return names[0] + " likes this"

    } else if (names.length == 2){
        return names[0] + " and " + names[1] + " like this"


    } else {
        numbers = names.length -2 
        return names[0] + ", " + names[1] + " and " + String(numbers) + " others like this"
    }}




    console.log(likes(['john','tom','rick']))
    console.log(likes(['jay','june']))
    console.log(likes(['jot']))


