class Bob {

    hey(statement: String): String {
        let trimmed = statement.trim();
        if(this.isShouting(trimmed)) {
            return "Whoa, chill out!"
        }
        else if(this.isQuestion(trimmed)){
            return "Sure."
        }
        else if(this.isSilence(trimmed)){
            return "Fine. Be that way!"
        }
        else {
            return "Whatever."
        }
    }

    private isShouting(statement: String): Boolean {
        let letters = statement.match("[A-Za-zäöüß]+")
        let uppercase = letters != null ? letters.filter(x => x == x.toUpperCase()):[]
        return letters != null && letters.length > 0 && uppercase != null && letters.length == uppercase.length
    }

    private isSilence(statement: String): Boolean {
        return !statement || statement.length == 0
    }

    private isQuestion(statement: String): Boolean {
        return statement.endsWith("?")
    }
}

export default Bob