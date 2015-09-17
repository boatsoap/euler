var fs = require('fs');

var alphabet = '_ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var sum = 0;

fs.readFile('./files/p022_names.txt', {encoding: 'utf-8'}, function(err, data) {
  if (err) throw err;

  var names = data.substr(1, data.length - 2).split('","');
  names = names.sort();

  var scores =names.map(function(val, index, arr) {
    var score = 0;
    for (var i = 0; i < val.length; i++) {
      score += alphabet.indexOf(val.charAt(i));
    }
    score *= index + 1;
    return score
  });

  console.log(scores.reduce(function(a,b) {
    return a + b;
  }));
});