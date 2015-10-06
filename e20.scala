def factorial(n: Int, accumulator: BigInt = BigInt("1")): BigInt = {
  if(n == 0) accumulator
  else factorial(n - 1, accumulator * n)
}

println(factorial(100).toString().map(_.asDigit).sum)