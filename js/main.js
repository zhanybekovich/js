// this

// call() ... apply()
function foo() {
  console.log(this.bar);
}

var obj = { bar: "obj_bar" };
var bar = "global bar";

foo();
foo.apply(obj);
foo.call(obj);

// bind()
function foo2() {
  console.log(this.bar);
}

const obj2 = { bar: "object" };
var bar = "global";

foo2();

const func = foo2.bind(obj2);
foo2();
