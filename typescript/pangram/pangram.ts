class Pangram {
    input: String;
    constructor(input: String) {
        this.input = input
    }

    isPangram() {
        let lower = this.input.toLowerCase()
        let alphabet = "abcdefghijklmnopqrstuvwxyz"
        for(let letter of alphabet)
        {
            if(!lower.includes(letter))
            {
                return false
            }    
        }
        return true
    }
}

export default Pangram
