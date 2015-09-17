
function largePrimeFactor(num, cb) {
  var limit = Math.floor(Math.sqrt(num));
  var nums = [];
  var primes = [2, 3, 5, 7];
  for (var i = 9; i <= limit; i += 2) {
    nums.push(i);
  }

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

  for (var q = nums.length-1; q > 0; q--) {
    if(!(num % nums[q])) {
      var ans = num / nums[q];
      cb(ans);
      break;
    }
  }
}

largePrimeFactor(600851475143, console.log);