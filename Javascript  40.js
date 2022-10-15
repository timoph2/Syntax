 


function number(bus_stops){
    let bus_left = 0

        bus_stops.forEach(bus_stop => {
            
            bus_left += bus_stop[0]
            bus_left -= bus_stop[1]
            })
            return bus_left
        }
        



console.log( number( [ [1,2], [3,2], [4,2]] ) ) 
// console.log( number( [ (1,2), (3,2), (2,2)] ) )    

// somehow Javascript cant reviece tuples...?







