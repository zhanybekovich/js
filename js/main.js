// return
function sum(a, b) {
  return a + b;
}

const n1 = sum(2, 2);
console.log(n1);

// returning several values
function rectangle(width, height) {
  const perimeter = width * 2 + height * 2;
  const area = width * height;

  return [perimeter, area];
}

const rectData = rectangle(20, 30);
console.log(rectData[0]);
console.log(rectData[1]);

// return object
function rectangle2(width, height) {
  const perimeter = width * 2 + height * 2;
  const area = width * height;

  return { perimeter: perimeter, area: area };
}
const rectData2 = rectangle2(20, 30);
console.log("Perimeter", rectData2.perimeter);
console.log("Area", rectData2.area);
