// object methods
const user = {};
user.name = "Tom";
user.age = 26;
user.display = function () {
  console.log(user.name);
  console.log(user.age);
};

user.display();
