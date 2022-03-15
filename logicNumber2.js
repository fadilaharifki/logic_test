function snail(params) {
    let height = 0
    let hours = 0

    while (height < params) {
        height += 3 - 2
        hours += 1
    }

    return hours
}

console.log(snail(14));