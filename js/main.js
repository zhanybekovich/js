// this in arrow functions

// const person = {
//   name: "Tom",
//   say: () => console.log(this.name),
// };

// person.say();

const person = {
  name: "Tom",
  hello() {
    console.log("Hello");
    let say = () => console.log(`My name is ${this.name}`);
    say();
  },
};

person.hello();
