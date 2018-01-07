module Raindrops

// - If the number has 3 as a factor, output 'Pling'.
// - If the number has 5 as a factor, output 'Plang'.
// - If the number has 7 as a factor, output 'Plong'.
// - If the number does not have 3, 5, or 7 as a factor,
//   just pass the number's digits straight through.

let convert (number: int): string = 
    let hasFactor (number: int) (factor: int): bool = number % factor = 0
    match number with
    | hasFactor number 3 -> "Pling"
    | hasFactor number 5 -> "Plang"
    | hasFactor number 7 -> "Plong"
    | _ -> number