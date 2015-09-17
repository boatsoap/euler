
function doubleBase() {
  var start = Date.now();
  var oneMillion = 1000 * 1000;
  var sum = 0;

  for (var i = 1; i <= oneMillion; i++) {
    //base 10
    var index = i.toString();
    var revIndex = index.split('').reverse().join('');

    if (index.toString() === revIndex) {
      //base 2
      var base2 = i.toString(2);
      var rev2 = base2.split('').reverse().join('');

      if (base2 === rev2) {
        sum += i;
      }
    }
  }
  console.log('%s ms', Date.now() - start);
  return sum;
}

console.log(doubleBase());