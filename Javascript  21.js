function convert(st){         

    let x = st.replace('o', 'u')   //first occurence only
    let y = x.replace('a', 'o')

    return y
}

console.log(convert('house apple'))
