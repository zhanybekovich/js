// rest
function sum(...numbers) {
  let res = 0;
  for (const n of numbers) {
    res += n;
  }

  console.log(res);
}

sum(1);
sum(1, 2);
sum(1, 2, 3);
sum(1, 2, 3, 4);

function display(season, ...temps) {
  console.log(season);
  for (const index in temps) {
    console.log(temps[index]);
  }
}

display("Spring", -2, -3, -1, -4);
