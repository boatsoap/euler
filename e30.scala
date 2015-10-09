def power(i: Int): Int = {
  i.toString.map(_.asDigit).map(Math.pow(_, 5).toInt).sum
}

val start = System.currentTimeMillis
val r = (2 to power(9) * 9).view.filter(n => n == power(n)).sum
val total = System.currentTimeMillis - start
println(r, total + "ms")