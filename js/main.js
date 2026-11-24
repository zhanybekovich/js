// args
function sum() {
  let res = 0;
  for (const n of arguments) {
    res += n;
  }

  console.log(res);
}

sum(6);
sum(6, 4);
sum(6, 4, 5);
