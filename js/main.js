// for ... in
const person = { name: "Tom", age: 25 };

for (prop in person) {
  console.log(prop);
}

for (prop in person) {
  console.log(`${prop}: ${person[prop]}`);
}
