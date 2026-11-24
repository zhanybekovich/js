// closure
function outer() {
  let x = 5;
  function inner() {
    x++;
    console.log(x);
  }

  return inner;
}

const fn = outer();
fn();
fn();

const fn2 = outer();
fn2();
fn2();
