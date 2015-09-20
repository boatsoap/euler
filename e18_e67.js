var fs = require('fs');


function findMax(arr, cb) {
  var step = [];

  function _step() {
    if (arr.length > 0) {
      var curr = arr.shift();
      if (step.length === 0) {
        step = curr;
        return _step();
      }

      var temp = [];
      for (var i = 0; i < curr.length; i++) {
        if (i === 0) {
          temp.push(curr[i] + step[i]);
        } else if (i === curr.length - 1) {
          temp.push(curr[i] + step[i - 1]);
        } else {
          temp.push(Math.max((curr[i] + step[i]), (curr[i] + step[i - 1])));
        }
      }
      step = temp;
      return _step();
    }
    cb(null, getMax(step));
  }
  _step();
}

function getMax(arr) {
  return Math.max.apply(null, arr);
}

fs.readFile('./supporting_files/p067_triangle.txt', {encoding: 'utf-8'}, function(err, res) {
  var input = res.split('\n').map(function(val, index, arr) {
    //console.log(val)
    var ans = val.split(' ');
    for (var i = 0; i < ans.length; i++) {
      ans[i] = parseInt(ans[i], 10);
    }
    return ans;
  });

  findMax(input, function(err, ans) {
    console.log('Answer:', ans);
  });
});