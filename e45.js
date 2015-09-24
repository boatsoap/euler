var limit = 1000 * 1000;

function generatePentagon() {
  var arr =[0];
  for (var i = 1; i < limit; i++) {
    arr.push(i * (3 * i - 1) / 2);
  }
  return arr;
}

function generateHexagon() {
  var arr =[0];
  for (var i = 1; i < limit; i++) {
    arr.push((i * (2 * i - 1)));
  }
  return arr;
}


function generateTriangle() {
  var arr =[0];
  for (var i = 1; i < limit; i++) {
    arr.push(0.5 * i * (i + 1));
  }
  return arr;
}

//var t = generateTriangle();
var h = generateHexagon();
var p = generatePentagon();

//console.log(t[285], h.indexOf(40755), p.indexOf(40755));

for (var n = 286; n < limit; n++) {
  var hh = h[n];
  if (p.indexOf(hh) > 0) {
    console.log(hh);
    break;
  }
}