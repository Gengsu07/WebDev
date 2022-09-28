var name = "Sugeng";

if (name === "Sugeng") {
  alert("Hi Sugeng");
} else if ((name = "Ghilma")) {
  alert("Sugengs Wife");
} else {
  alert("Hmm I dont Know You");
}

function sayHello(nama) {
  console.log(nama);
}

sayHello("Sugeng");
sayHello("ghilma");
sayHello("el Fatih");

function kali(x, y) {
  if (x > 10 || y > 10) {
    alert("Its too Hard");
  } else if (x === 0 || y === 0) {
    alert("Cant use Zero");
  } else {
    return x * y;
  }
}
