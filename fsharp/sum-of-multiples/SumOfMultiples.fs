module SumOfMultiples

let sumOfMultiples (numbers: int list) (upperBound: int): int = 
    [1..(upperBound - 1)]
    |> List.where (fun number -> List.exists (fun multiple -> number % multiple = 0) numbers)
    |> Seq.distinct
    |> List.ofSeq
    |> List.sum