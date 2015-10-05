def e16(power: Int): Int = {
  BigInt("2").pow(power).toString().map(_.asDigit).sum
}
println(e16(1000))