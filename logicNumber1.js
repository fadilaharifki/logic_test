function oclock(params) {
    let result = 0
    for (let i = 1; i <= params; i++) {
        result += i
    }
    return result + " strikes"
}

console.log(oclock(2));