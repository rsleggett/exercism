module SpaceAge
open System

type Planet = Earth | Mercury | Venus | Mars | Jupiter | Saturn | Uranus | Neptune

let spaceAge (planet: Planet) (seconds: decimal): decimal = 
    let proportionOfEarthYear = 
        match planet with 
        | Earth -> 1m
        | Mercury -> 0.2408467m
        | Venus -> 0.61519726m
        | Mars -> 1.8808158m
        | Jupiter -> 11.862615m
        | Saturn -> 29.447498m
        | Uranus -> 84.016846m
        | Neptune -> 164.79132m
    let earthOrbitalPeriod = 31557600m
    let orbitalPeriod = earthOrbitalPeriod * proportionOfEarthYear
    Decimal.Round(seconds / orbitalPeriod, 2)