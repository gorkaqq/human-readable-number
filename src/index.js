module.exports = function toReadable(number) {
    const single = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    const teen = {
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const dozens = {
        10: "ten",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    const num = String(number);
    if (num.length === 1) {
        return single[number];
    }

    if (num.length === 2) {
        if (number % 10 === 0) {
            return dozens[number];
        } else if (number > 10 && number < 20) {
            return teen[number];
        } else if (number > 20 && number < 100) {
            return `${dozens[num[0] + 0]} ${single[num[1]]}`;
        }
    }

    if (num.length === 3) {
        if (number % 100 === 0) {
            return `${single[num[0]]} hundred`;
        } else if (num[2] === "0") {
            console.log(num[2]);
            return `${single[num[0]]} hundred ${dozens[num[1] + 0]}`;
        } else if (+(num[1] + num[2]) > 10 && +(num[1] + num[2]) < 20) {
            return `${single[num[0]]} hundred ${teen[num[1] + num[2]]}`;
        } else if (num[1] === "0") {
            return `${single[num[0]]} hundred ${single[num[2]]}`;
        } else if (+(num[1] + num[2]) > 20) {
            return `${single[num[0]]} hundred ${dozens[num[1] + 0]} ${
                single[num[2]]
            }`;
        }
    }
};
