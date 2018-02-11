class Prime {
    private maxPrime: number = 104744

    /* Implements the Sieve of Eratosthenes */
    nth(n: number): number {
        if (n < 1) {
            throw Error('Prime is not possible')
        }
        const integers: boolean[] = []
        const primes: number[] = []

        integers.push(false)
        integers.push(false)
        for (let i = 2; i < this.maxPrime; i++) {
            integers.push(true)
        }
        for (let i = 2; i < Math.sqrt(this.maxPrime); i++) {
            if (integers[i] === true) {
                let count = 0
                for (let j = i * i; j < integers.length; j = (count * i) + i * i) {
                    integers[j] = false
                    count++
                }
            }
        }
        for (let i = 0; i < integers.length; i++) {
            if (integers[i] === true) {
                primes.push(i)
            }
        }
        console.dir(primes)
        return primes[n - 1]
    }
}

export default Prime