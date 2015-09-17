
function main() {
  var start = Date.now();
  var oneMillion = 1000 * 1000;
  var str = '';
  var sum = 1;

  for (var i = 1; i < oneMillion; i++) {
    str += i;
  }

  for (var n = 1; n <= oneMillion; n *= 10) {
    sum *= parseInt(str.charAt(n - 1), 10);
  }
  
  console.log('%s ms', Date.now() - start);
  return sum;

}

console.log(main());