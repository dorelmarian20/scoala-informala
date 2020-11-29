function sumaPrime (num) {
  let sum = 0;
  for(var i=1; i<=num; i++){
    sum += i;
  }
  return sum * 4 / 2 - 2;
}
console.log(sumaPrime(3) );