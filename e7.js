
function primeAt(nth, cb) {

  var count = 3;
  var primes = [2];

  while (primes.length <= nth) {
    if (!notPrime(count)) {
      primes.push(count);
    }
    count++;
  }

  cb(primes[primes.length - 1]);

  function notPrime(num) {
    for (var index in primes) {
      if (!(num % primes[index])) {
        
        return true;
      }
    }

    return false;
  }



}

function primeBy(nth, cb) {

}


primeAt(10000, console.log);

