
var oneMillion = 1000 * 1000;
var max = 0;
var index;

var start = Date.now();

var collatz = function(num) {
  var cache = num;
  var count = 0;
  var ans = _collatz(num);
  return [count, cache];


  function _collatz(num) {
    count++;
    if (num === 1) {
      return count;
    }
    if (num % 2) { //odd
      _collatz(num * 3 + 1);
    } else {
      _collatz(num/2);
    }
  }
};


for (oneMillion; oneMillion > 0; oneMillion--) {
  var ans = collatz(oneMillion);
  if (ans[0] > max) {
    max = ans[0];
    index = ans[1];
  }
}
console.log('%s ms', Date.now() - start);
console.log(index);