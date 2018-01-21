object Bob {
  def response(statement: String): String = {
    def isShouting(statement: String) = {
      statement.filter(x => x.isLetter).forall(x => x.isUpper);
    };
    
    def isQuestion(statement: String) = {
      statement.endsWith("?");
    };
    
    def isSilence(statement: String) = {
      statement.isEmpty();
    };
    
    val trimmed = statement.trim();

    if(isShouting(trimmed))
    {
      "Whoa, chill out!"
    }
    else if(isQuestion(trimmed))
    {
      "Sure."
    }
    else if(isSilence(trimmed))
    {
      "Fine. Be that way!"
    }
    else
    {
      "Whatever."
    }
  }
    
}
