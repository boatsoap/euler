def factorial(n: Long, accumulator: Long = 1): Long = {
  if(n == 0) accumulator
  else factorial(n - 1, accumulator * n)
}

def factor(i: Long): Long = {
  val num = i.toString.map(_.asDigit)
  num.map(factorial(_)).sum
}

var sum = 0
for (a <- 145 to 146)
  if (factor(a) == a)
    sum += a

println(sum)

//println(factor(0))
//println(List.range(1, 10).map(factor(_)))