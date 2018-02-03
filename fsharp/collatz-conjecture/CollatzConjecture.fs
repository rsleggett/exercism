module CollatzConjecture

let steps (number: int): int option = 
    let rec calculateSteps (number: int, accumulate: int): int option =
        let isEven (number: int): bool = number % 2 = 0
        let isOdd (number: int): bool = not (number % 2 = 0)
        match number with
        | i when i <= 0 -> None
        | i when i = 1 -> Some accumulate
        | i when i > 1 && isEven i -> calculateSteps((number / 2), accumulate + 1)
        | i when i > 1 && isOdd i -> calculateSteps((number * 3) + 1, accumulate + 1)
    
    calculateSteps(number, 0)