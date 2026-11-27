// this

// global this
console.log(this);

// ES2020 globalThis
console.log(globalThis);

// function context
function foo() {
  var bar = "local";
  console.log(this);
  console.log(this.bar); // undefined in strict mode
}

foo();

// object context
const obj = {
  bar: "my object",
  foo: function () {
    console.log(this.bar);
  },
};

obj.foo();
