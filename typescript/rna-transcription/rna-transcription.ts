class Transcriptor {
    toRna(dna: string) {
        const rna: String[] = []
        for (const item of dna) {
            rna.push(this.toRnaNucleotide(item))
        }
        return rna.join('')
    }

    toRnaNucleotide(dnaNucleotide: String) {
        switch (dnaNucleotide) {
            case 'G':
                return 'C'
            case 'C':
                return 'G'
            case 'T':
                return 'A'
            case 'A':
                return 'U'
            default:
                throw "Invalid input DNA."
        }
    }
}

export default Transcriptor