

function fib() {
  var start = Date.now();

  var f1 = 1,
    f2 = 1,
    temp = 0;


  for (var i = 3; i > 0; i++) {
    temp = f2;
    f2 = f2 + f1;
    f1 = temp;

    var str = f2.toString();
    var indexOfE = str.indexOf('e');
    if(indexOfE > -1) {

      var digits = str.substr(indexOfE + 2);
      console.log(i, digits);

      if (digits >= 999) {
        var end = Date.now();
        console.log(end - start);

        return i;

      }

    }
  }

}

console.log(fib());