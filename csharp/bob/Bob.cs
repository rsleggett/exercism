using System;
using System.Linq;

public static class Bob
{
    public static string Response(string statement)
    {
        if (string.IsNullOrWhiteSpace(statement))
        {
            return "Fine. Be that way!";
        }
        if (statement.Any(char.IsLetter) && statement.Where(char.IsLetter).All(char.IsUpper))
        {
            return "Whoa, chill out!";
        }
        if (statement.Trim().EndsWith("?"))
        {
            return "Sure.";
        }
        return "Whatever.";
    }
}