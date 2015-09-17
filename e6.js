
function sumSquareDiff(limit, cb) {
  var first = [];
  var sum = 0

  for(var i = 1; i <= limit; i++) {
    first.push(Math.pow(i, 2));
    sum += i;
  }

  var ss = Math.pow(sum, 2);
  var firstSum = first.reduce(sumIt);

  var temp = ss - firstSum;

  console.log(sum, ss, firstSum, temp)
  cb(ss - firstSum);
}

function sumIt(a, b) {
  return a + b;
}

sumSquareDiff(100, console.log);