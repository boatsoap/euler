var count = 0;
var sum = 1;
var n = 2;
var limit = 1001 * 1001;
for (var i = 3; i <= limit; i += n) {
  sum += i;
  count++;
  if (count == 4) {
    n += 2;
    count = 0;
  }
}

console.log(sum);