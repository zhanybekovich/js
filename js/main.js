// arrow function
const hello = () => console.log("Hello");
hello();

const print = (mes) => console.log(mes);
print("Hello again");

const sum = (x, y) => x + y;
console.log(sum(4, 4));

const user = (username, age) => ({ name: username, age: age });
const tom = user("tom", 45);
console.log(tom.name, tom.age);
