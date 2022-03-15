function fibonaci(params) {
    let result = []

    for (let i = 0; i < params; i++) {
        if (result.length > 1) {
            result.push(result[i - 2] + result[i - 1])
        } else {
            result.push(i)
        }
    }

    return result.join()
}

console.log(fibonaci(10));