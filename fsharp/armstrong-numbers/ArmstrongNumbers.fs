module ArmstrongNumbers

open System

let isArmstrongNumber (number: int): bool = 
    let numbers = Convert.ToString(number).ToCharArray() |> Array.toList
    let length: double = numbers.Length |> double

    let value = numbers  
                |> List.map (fun x -> (System.Char.GetNumericValue(x) |> double) ** length) 
                |> List.sum

    Console.WriteLine(value)
    value = (number |> double)