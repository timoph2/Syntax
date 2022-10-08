


function printMegaBytesAndKiloBytes(kiloBytes) {

    if (kiloBytes < 0){
        console.log("invalid")
        return
        

    }
    let megabytes = Math.floor(kiloBytes / 1024) 
    let remainder = kiloBytes % 1024
    
    console.log(`${kiloBytes} KB = ${megabytes}MB & ${remainder}KB`)
    }

printMegaBytesAndKiloBytes(2500)











 