// return function
function menu(n) {
  if (n === 1)
    return function (x, y) {
      return x + y;
    };
  else if (n === 2)
    return function (x, y) {
      return x - y;
    };
  else if (n === 3)
    return function (x, y) {
      return x * y;
    };

  return function () {
    return 0;
  };
}

const action = menu(1);
const res = action(2, 5);
console.log(res);
