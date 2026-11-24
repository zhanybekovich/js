// recursion
function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const res = factorial(4);
console.log(res);
