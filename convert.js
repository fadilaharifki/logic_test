function terbilang(input) {
    if (input == "" || input == null || input == "null" || input == undefined) {
        return "";
    } else {
        let arr = Array.from(String(input))

        input = []

        for (let i = arr.length - 1; i >= 0; i--) {
            input.push(arr[i])
        }

        let sentance = "";
        let arrayNumber = new Array('0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
        let word = new Array('', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine');
        let wordPendek = new Array('', '', 'twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine');
        let level = new Array("", "", 'thousand', 'million', 'Billion', 'Trillion');
        let inputLenght = input.length;

        if (inputLenght > 15) {
            sentance = "Diluar Batas";
        } else {
            for (let i = 0; i < inputLenght; i++) {
                arrayNumber.splice(i, 1, input[i])
            }

            let i = 0;
            let j = 0;

            for (let i = 0; i < inputLenght; i++) {
                let subsentance = "";
                let word1 = "";
                let word2 = "";
                let word3 = "";

                if (arrayNumber[i + 2] !== "0") {
                    if (arrayNumber[i + 2] === "1") {
                        word1 = "one hundred";
                    } else {
                        word1 = word[arrayNumber[i + 2]] + " hundred";
                    }
                }

                if (arrayNumber[i + 1] !== "0") {
                    if (arrayNumber[i + 1] === "1") {
                        if (arrayNumber[i] === "0") {
                            word2 = "ten";
                        } else if (arrayNumber[i] === "1") {
                            word2 = "eleven";
                        } else if (arrayNumber[i] === "2") {
                            word2 = "twelve";
                        } else {
                            word2 = wordPendek[arrayNumber[i]] + "teen";
                        }
                    } else {
                        word2 = wordPendek[arrayNumber[i + 1]] + "ty";
                    }
                }

                if (arrayNumber[i] !== "0") {
                    if (arrayNumber[i + 1] !== "1") {
                        word3 = word[arrayNumber[i]];
                    }
                }

                if ((arrayNumber[i] !== "0") || (arrayNumber[i + 1] !== "0") || (arrayNumber[i + 2] !== "0")) {
                    subsentance = word1 + " " + word2 + " " + word3 + " " + level[j] + " ";
                }
                sentance = subsentance + sentance;

                i = i + 2;
                j = j + 2;
            }
        }
        return sentance;
    }
}

console.log(terbilang(123456));