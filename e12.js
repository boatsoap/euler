
function triangleNumber(find) {
  var start = Date.now();
  var limit = 1000 * 1000;
  var count = find / 2;
  var num = 0;
  for (var i = 1; i < limit; i++) {
    num += i;
    var divisors = check(num);
    if (divisors > count) {
      console.log('%s ms', Date.now() - start);
      return num;
    }
  }
}

function check(num) {
  var sqrt = Math.sqrt(num);
  var count = 0;

  for (var n = 1; n < sqrt; n++) {
    if (!(num % n)) {
      count++;
    }
  }
  return count;
}

console.log(triangleNumber(500));