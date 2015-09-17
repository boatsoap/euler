
function largePalinProd(num, cb) {
  //var limit = num * num;
  //var palindrome = getPalin(limit);
  var pos = [];

  for (var i = num; i > 99; i--) {
    for (var n = num; n > 99; n--) {
      if (isPalin(i * n)) {
        pos.push(i * n);
        break;
      }
    }
  }

cb(pos.max());

}

Array.prototype.max = function() {
  return Math.max.apply(null, this);
}

function isPalin(num) {
  var str = num.toString();
  var rev = Number(str.split('').reverse().join(''));
  return (num === rev) ? true : false;
}
function getPalin(limit){
  for (var i = limit; i > 0; i--) {
    var str = i.toString();
    var check = Number(str.split('').reverse().join(''));
    if(i === check) {
      return i;
    } 
  }
}

largePalinProd(999, console.log);
