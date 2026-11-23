// spread operator in params
function printPerson(...person) {
  console.log(person[0], person[1], person[2]);
}

const user1 = ["Tom", 45, "tom@tom.com"];
const user2 = ["Pete", 30, "pete@pete.com"];

printPerson(...user1);
