// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var user = {
  username: "gengsu07",
  password: "sgwi2341",
};

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [
  {
    username: "gengsu07",
    password: "sgwi2341",
  },
  {
    username: "ghilma",
    password: "wm07",
  },
  {
    username: "elfatih",
    password: "080422",
  },
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
  {
    username: "abatasa",
    timeline: "Lear JAvascript everyday",
  },
  {
    username: "abracadabra",
    timeline: "To make great apps, javascript needed",
  },
  {
    username: "iseeyou",
    timeline: "Why Javascript is everywhere",
  },
];

var userName = prompt("Enter your Username:");
var userPassword = prompt("Enter your Password:");

function login(user, pass) {
  if (
    userName === database[0].username &&
    userPassword === database[0].password
  ) {
    console.log(newsfeed);
  } else {
    alert("You cant Login");
  }
}

login(userName, userPassword);
