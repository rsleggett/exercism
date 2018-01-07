module Bob
open System

let response (input: string): string = 
    let isShouting (input: string): bool = Seq.exists Char.IsLetter input && input.ToUpper() = input
    let isQuestion (input: string): bool = input.EndsWith("?")
    let isForcefulQuestion (input: string): bool = isShouting(input) && isQuestion(input)
    let trimmed = input.Trim()

    match input with
        | _ when trimmed |> String.IsNullOrWhiteSpace -> "Fine. Be that way!"
        | _ when trimmed |> isForcefulQuestion -> "Calm down, I know what I'm doing!"
        | _ when trimmed |> isShouting -> "Whoa, chill out!"
        | _ when trimmed |> isQuestion -> "Sure."
        | _ -> "Whatever."