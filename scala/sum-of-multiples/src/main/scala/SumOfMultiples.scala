object SumOfMultiples {
  def sum(factors: Set[Int], limit: Int): Int = {
    def getMultiples(factor: Int, limit: Int): Seq[Int] = {
      for(i <- Range(0, limit) if  i % factor == 0) yield i;
    } 

    factors
      .flatMap(f => getMultiples(f, limit))
      .sum
  }    
}

