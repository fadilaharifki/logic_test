function fizzBuzz(input) {
    let result = ''

    for (let i = 0; i < input; i++) {
        if ((i + 1) % 3 === 0 & (i + 1) % 5 === 0) {
            result += 'FizzBuzz'
        } else if ((i + 1) % 3 === 0) {
            result += 'Fizz'
        } else if ((i + 1) % 5 === 0) {
            result += 'Buzz'
        } else {
            result += i + 1
        }
    }
    return result
}

console.log(fizzBuzz(100));