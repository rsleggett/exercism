class Bob {

    hey(statement: string): string {
        const trimmed = statement.trim()
        if (this.isShouting(trimmed)) {
            return "Whoa, chill out!"
        }
        else if (this.isQuestion(trimmed)) {
            return "Sure."
        }
        else if (this.isSilence(trimmed)) {
            return "Fine. Be that way!"
        }
        else {
            return "Whatever."
        }
    }

    private isShouting(statement: string): boolean {
        const letters = statement.match("[A-Za-zäöüß]+")
        const uppercase = letters !== null ? letters.filter((x) => x === x.toUpperCase()) : []
        return letters !== null && letters.length > 0 && uppercase !== null && letters.length === uppercase.length
    }

    private isSilence(statement: string): boolean {
        return !statement || statement.length === 0
    }

    private isQuestion(statement: string): boolean {
        return statement.endsWith("?")
    }
}

export default Bob