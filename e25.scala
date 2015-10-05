def e25(): Int = {
  var a = BigInt("1")
  var b = BigInt("1")
  var index = 3

  while(index > 0) {
    val temp = a + b
    if (temp.toString().length() > 999) {
      return index
    }
    index += 1
    a = b
    b = temp
  }
  index
}

println(e25())