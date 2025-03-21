function num(x) {
  const myN = x
  if (myN % 3) {
    return 'Fizz';
  } else if (myN % 5) {
    return 'Buzz';
  } else if (myN % 3 || myN % 5) {
    return 'FizBuzz';
  } else if (myN % 3 || myN % 5) {

  }
};
console.log(num(15));