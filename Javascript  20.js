


function what_list_am_i_on(actions) {
    let naughty = 0
    let nice = 0

    actions.forEach(i => {
        if (['b','f','k'].includes(i)) {
            naughty += 1
        }
        if ( ['g','s','n'].includes(i)) {
            nice += 1
        }})

    if (naughty >= nice) {
        return 'naughty'
    }
    return 'nice'

}