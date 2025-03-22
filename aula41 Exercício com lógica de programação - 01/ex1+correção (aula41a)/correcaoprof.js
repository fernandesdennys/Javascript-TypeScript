function max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
console.log(max(1, 2));

//====================================//

function max(x, y) {
  return x > y ? x : y;
}
console.log(max(4, 3));

//====================================//

const max2 = (x, y) => x > y ? x : y;
console.log(max2(10, 5));