var fs = require('fs');

function generateTriangles(limit) {
  var arr = [];
  for (var i = 1; i < limit + 1; i++) {
    arr[i - 1] = (0.5 * i * (i + 1));
  }

  return arr;
}

fs.readFile('./supporting_files/p042_words.txt', {encoding: 'utf-8'}, function(err, result) {
  if (err) throw err;

  var start = Date.now();
  var alphabet = '_ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var triangles = generateTriangles(30);
  var words = result.substr(1, result.length - 2).split('","');

  var ans = words.filter(function(curr, index, arr) {
    var currArr = curr.split('');
    currMap = currArr.map(function(curr) {
      return alphabet.indexOf(curr);
    });

    var currSum = currMap.reduce(function(a, b) {
      return a + b;
    });

    if (triangles.indexOf(currSum) > 0) {
      return true;
    }
    return false;
  });

  console.log('%s ms', Date.now() - start);
  console.log(ans.length);
});