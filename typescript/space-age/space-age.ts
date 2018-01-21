class SpaceAge {
    seconds: number;
    constructor (ageInSeconds: number) {
        this.seconds = ageInSeconds
    }

    private toYears(input: number): number {
        return parseFloat(input.toFixed(2))
    }

    private onEarthUnrounded(): number {
        return this.seconds / 31557600    
    }
    

    onEarth(): number {
        return this.toYears(this.onEarthUnrounded())
    }

    onMercury(): number {
        return this.toYears(this.onEarthUnrounded() / 0.2408467)
    }

    onVenus(): number {
        return this.toYears(this.onEarthUnrounded() / 0.61519726)
    }

    onMars(): number {
        return this.toYears(this.onEarthUnrounded() / 1.8808158)
    }

    onJupiter(): number {
        return this.toYears(this.onEarthUnrounded() / 11.862615)
    }

    onSaturn(): number {
        return this.toYears(this.onEarthUnrounded() / 29.447498)
    }

    onUranus(): number {
        return this.toYears(this.onEarthUnrounded() / 84.016846)
    }

    onNeptune(): number {
        return this.toYears(this.onEarthUnrounded() / 164.79132)
    }
}

export default SpaceAge