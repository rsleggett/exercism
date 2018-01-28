using System;
using System.Linq;

public static class Bob
{
    public static string Response(string input)
    {
        if (string.IsNullOrWhiteSpace(input))
        {
            return "Fine. Be that way!";
        }
        if (IsShouting(input))
        {
            return "Whoa, chill out!";
        }
        if (IsQuestion(input))
        {
            return "Sure.";
        }
        return "Whatever.";
    }

    private static bool IsQuestion(string input)
    {
        return input.Trim().EndsWith("?");
    }

    private static bool IsShouting(string input)
    {
        return input.Any(char.IsLetter) && input.Where(char.IsLetter).All(char.IsUpper);
    }
}