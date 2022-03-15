// I live on Sunset Boulevard, where there are 6 houses on my side of the block. The
// house numbers are consecutive even numbers. The sum of all 6 house numbers is 8790.
// You don't know which block I live on, and it's a long street, but I will tell you that I live in
// the lowest number on my side of the block. What's my address?

function addressHouse(totalNumberHouse, totalHouse) {
    let array = []
    let temp = 5 * totalHouse
    for (let i = 0; i < totalHouse; i++) {
        array.push(totalNumberHouse / totalHouse)
    }

    for (let i = 0; i < array.length; i++) {
        array.splice(i, 1, (array[i] - 5 + (2 * i)))
    }

    array.sort()

    return 'address house : ' + array[0]
}

console.log(addressHouse(8790, 6));