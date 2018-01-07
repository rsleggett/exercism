module Raindrops
open System
// - If the number has 3 as a factor, output 'Pling'.
// - If the number has 5 as a factor, output 'Plang'.
// - If the number has 7 as a factor, output 'Plong'.
// - If the number does not have 3, 5, or 7 as a factor,
//   just pass the number's digits straight through.

let convert (number: int): string = 
    let hasFactor (number: int, factor: int,  returnValue: string): string Option = 
        if number % factor = 0 then Some returnValue  
        else None
    
    let fs = [
        hasFactor (number, 3, "Pling"); 
        hasFactor (number, 5, "Plang"); 
        hasFactor (number, 7, "Plong");
    ]

    let result = 
        List.filter (fun x -> not(x = None)) fs 
        |> List.distinct 
        |> List.map (fun x -> x.Value)

    if result.Length = 0 then 
        number.ToString()
    else 
        String.Join("", result)