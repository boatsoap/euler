function smallestMultiple(limit, cb) {
  var hardLimit = Math.pow(20,20);
  var checks = [];
  for (var i = 1; i <= limit; i++) {
    if (limit % i) {
      checks.push(i);
    }
  }

  for (var n = limit; n < hardLimit; n += limit) {
    var out = checks.filter(divisible, {num: n} );
    if (out.length === 0) {
      cb(n);
      break;
    }
  }
}

function divisible(curr, index, arr) {
  if(this.num % curr) {
    return true;
  }
  return false;
}

smallestMultiple(20, console.log);