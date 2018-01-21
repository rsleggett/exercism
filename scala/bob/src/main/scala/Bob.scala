object Bob {
  def response(statement: String): String = {
    def isShouting(statement: String): Boolean = {
      var letters = statement.filter(x => x.isLetter);
      
      !letters.isEmpty() && letters.forall(x => x.isUpper);
    };
    
    def isQuestion(statement: String): Boolean  = {
      statement.endsWith("?");
    };
    
    def isSilence(statement: String): Boolean  = {
      statement.isEmpty();
    };
    
    val trimmed = statement.trim();

    if(isSilence(trimmed))
    {
      "Fine. Be that way!"
    }
    else if(isShouting(trimmed))
    {
      "Whoa, chill out!"
    }
    else if(isQuestion(trimmed))
    {
      "Sure."
    }
    else
    {
      "Whatever."
    }
  }
}
