export function calculatePrimeFactors(input: number): number[] {
    const result: number[] = []

    if (input % 2 === 0) {
        result.push(2)
        result.concat(calculatePrimeFactors(input / 2))
        input = input / 2
    }

    for (let i = 3; i <= Math.sqrt(input); i += 2) {
        while (input % i === 0) {
            result.push(i)
            input = input / i
        }
    }

    if (input % 2 === 0) {
        result.push(2)
        result.concat(calculatePrimeFactors(input / 2))
        input = input / 2
    }

    if (input % 2 === 0) {
        result.push(2)
        result.concat(calculatePrimeFactors(input / 2))
        input = input / 2
    }

    if (input > 2) {
        result.push(input)
    }
    return result
}