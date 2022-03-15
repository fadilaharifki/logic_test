const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Drawwing Tools: 
1. Persegi
2. Segitiga Siku2 Rata kiri
3. Segitiga Siku2 Rata kanan

Jenis Bangunan:   `, JenisBangunan => {

    if (+JenisBangunan < 3) {
        readline.question(`Ukuran:   `, ukuran => {

            if (JenisBangunan === "1") {
                for (var j = 0; j < ukuran; j++) {
                    var result = ''
                    for (var i = 0; i < ukuran; i++) {
                        result = result + '*'
                    }
                    console.log(result)
                }
            } else if (JenisBangunan === "2") {
                for (let i = 0; i < ukuran; i++) {
                    let c = '*'
                    for (let l = 0; l < i; l++) {
                        c = c + '*'
                    }
                    console.log(c)
                }
            } else if (JenisBangunan === "3") {
                for (var i = 0; i < ukuran; i++) {
                    var result = ''
                    for (var j = 0; j < ukuran - (i + 1); j++) {
                        result = result + ' '
                    }
                    var result1 = ''
                    for (var k = 0; k < 1 + i; k++) {
                        result1 = result1 + '*'
                    }
                    console.log(result + result1)
                }
            }

            readline.close()
        })
    } else {
        console.log('Jenis Bangunan tidak ada')

        readline.close()
    }
})