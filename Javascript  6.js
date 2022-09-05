
function funk()  {
    for (let i=0; i<8; i++) {
        if (i<5) {
            let w = 'str ' + `hi ${i}`
            console.log(w)
        }
    }
}


funk()