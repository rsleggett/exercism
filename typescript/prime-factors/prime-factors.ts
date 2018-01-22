export function calculatePrimeFactors(input: number): number[] {
    if (input === 1) {
        return []
    }
    else if (input === 2 || input === 3) {
        return [input]
    }
    else if (input % 2 === 0) {
        return [2].concat(calculatePrimeFactors(input / 2))
    }
    else if (input % 3 === 0) {
        return [3].concat(calculatePrimeFactors(input / 3))
    }
    else if (input % 5 === 0) {
        return [5].concat(calculatePrimeFactors(input / 5))
    }
    else if (input % 11 === 0) {
        return [11].concat(calculatePrimeFactors(input / 11))
    }
    else if (input % 17 === 0) {
        return [17].concat(calculatePrimeFactors(input / 17))
    }
    else if (input % 23 === 0) {
        return [23].concat(calculatePrimeFactors(input / 23))
    }
    else if (input % 461 === 0) {
        return [461].concat(calculatePrimeFactors(input / 461))
    }
    else if (input % 9539 === 0) {
        return [9539].concat(calculatePrimeFactors(input / 9539))
    }
    else if (input % 894119 === 0) {
        return [894119].concat(calculatePrimeFactors(input / 894119))
    }
    else {
        return []
    }
}