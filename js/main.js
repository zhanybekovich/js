// function as param
function sum(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function operation(x, y, func) {
  const res = func(x, y);
  console.log(res);
}

console.log("Sum");
operation(10, 6, sum);

console.log("Subtraction");
operation(10, 2, subtract);
