// functions
function hello() {
  console.log("HELLO!");
}

hello();
hello();
hello();

const greeting = hello;

greeting();
greeting();

const message = function () {
  console.log("Hi, JS!");
};
message();
