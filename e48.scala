def e48(limit: Int): IndexedSeq[BigInt] = {
  for (i <- 1 to limit) yield BigInt(i).pow(i)
}

println(e48(1000).sum.toString().takeRight(10))