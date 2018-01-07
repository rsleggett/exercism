module TwoFer

open System

let name (input: string option): string = 
    let person =
        match input with
            | None -> "you"
            | Some s -> s  
    sprintf "One for %s, one for me." person