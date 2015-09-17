function sumMultiple(num, limit) {
  var numOfMultiples = (limit - 1) / num;
  return num * (numOfMultiples * (numOfMultiples + 1) / 2);
}

console.log(sumMultiple(3, 1000) + sumMultiple(5, 1000) - sumMultiple(15, 1000));