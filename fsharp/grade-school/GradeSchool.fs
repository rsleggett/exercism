module GradeSchool

let empty: Map<int, string list> = 
    Map.empty

let add (student: string) (gradeNumber: int) (school: Map<int, string list>): Map<int, string list> = 
    if school.ContainsKey(gradeNumber) then school.Add(gradeNumber, school.[gradeNumber] @ [student])
    else school.Add(gradeNumber, [student])

let grade (number: int) (school: Map<int, string list>): string list = 
    if(school.ContainsKey(number)) then
        school.[number]
        |> List.sort
    else []

let roster (school: Map<int, string list>): (int * string list) list = 
    let mutable gradeList = []
    let sorted = school |> Map.toSeq |> Seq.map fst
    
    for gradeNumber in sorted do
        gradeList <- gradeList @ [(gradeNumber, grade gradeNumber school)]
    gradeList

