// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

const people = ["Tom", "Erik", "Bob"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

for (let i = 2; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log("=================");
}
