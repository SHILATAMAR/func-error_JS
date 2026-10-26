// task1
function extractNumbers(arr) {
    let newArr = []
    if (!Array.isArray(arr)) {
        throw new Error('its not array!')
    }
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            newArr.push(arr[i])
        }
    }
    return newArr
}
// console.log(extractNumbers([2, 4, "hi", 7]))

// task2
function sumNumbersSafe(arr) {
    let sum = 0

    try {
        let newARR = extractNumbers(arr)
        for (let i = 0; i < newARR.length; i++) {
            sum += parseInt(newARR[i])
        }
    }
    catch (err) {
        console.warn("invalid input: return 0")
        return 0
    }
    return sum
}
// console.log(sumNumbersSafe("ffffff"))

// task3
function filterLargeSums(arrList, minTotal) {
    let num = 0
    let newArr3 = []
    for (let i = 0; i < arrList.length; i++) {
        num = sumNumbersSafe(arrList[i])
        if (minTotal <= num) {
            newArr3.push(arrList[i])
        }
    }
    return newArr3
}
// console.log(filterLargeSums([[5, 7, 'a'], [4, 1, 9], ['g', 'j']], 10))

// task4
function summaryStats(arrList) {
    let filArr = (filterLargeSums(arrList, 10))
    return filArr.map(filArr => {
        const sum = sumNumbersSafe(filArr);
        const valNumbers = extractNumbers(filArr);
        let avg;
        if (valNumbers.length > 0) {
            avg = sum / valNumbers.length;
        } else {
            avg = 0;
        }

        return {
            sum: sum,
            average: avg
        }
    })
}
// console.log(summaryStats([[1, 2, 3], [5, 5, 5], [100], "bad"]));

// task5
function safeCalculator(a, b, operation) {
    if (typeof a !== typeof b) {
        throw new Error("Not same type");
    }
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;
        default:
            throw new Error("Invalid operation");
    }
}
console.log(safeCalculator(10, 5, "add"));
console.log(safeCalculator(10, 5, "divide"));
console.log(safeCalculator(10, "5", "add")); // יזרוק שגיאה

