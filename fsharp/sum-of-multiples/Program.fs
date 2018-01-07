module Program  
open SumOfMultiples

let [<EntryPoint>] main _ = 
    let sum = sumOfMultiples [3; 5] 10
    printf "Sum is %d" sum
    0