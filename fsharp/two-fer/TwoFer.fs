module TwoFer

open System

let name (input: string option): string = 
    match input with
        | None -> "One for you, one for me."
        | Some input -> "One for " + input + ", one for me."