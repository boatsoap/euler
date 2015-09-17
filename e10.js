  
function sumOfPrimes(limit, cb) {
  var nums = [];
  for (var i = 9; i <= limit; i += 2) {
    nums.push(i);
  }
  var primes = [2, 3, 5, 7];
  nums = nums.filter(function(curr, index, arr) {
    var sqrt = Math.floor(Math.sqrt(curr));
    for (var n = 0; n <= sqrt; n++) {
      if (!(curr % primes[n])) {
        return false;
      }
    }
    primes.push(curr);
    return true;
  });

  cb(primes.reduce(function(a, b) {
    return a + b;
  }));
}

sumOfPrimes(1000 * 2000, console.log);