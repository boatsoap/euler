function pythagTriplet() {
  var combos = [];

  for (var a = 1; a < 998; a++) {
    for (var b = 1; b < 988; b++) {
      var tmp = Math.pow(a, 2) + Math.pow(b, 2);
      var c = (Math.sqrt(tmp));
      if (a + b + c == 1000) {
        console.log(a*b*c)
      } 
    }
  }

}

pythagTriplet();