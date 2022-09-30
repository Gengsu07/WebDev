var addtodo = document.getElementById("enter");
var todo = document.getElementById("input_todo");
var ul = document.querySelector("ul");

function inputLength() {
  return todo.value.length;
}

function listElement() {
  var list = document.createElement("li");
  list.appendChild(document.createTextNode(todo.value));
  ul.appendChild(list);
  todo.value = "";
}

function mouseClick() {
  if (inputLength() > 0) {
    listElement();
  }
}

function Keypress(event) {
  if (inputLength() > 0 && event.code === "Enter") {
    listElement();
  }
}

addtodo.addEventListener("click", mouseClick);
todo.addEventListener("keypress", Keypress);

var li = document.getElementsByTagName("li");

function done(item) {
  item.className = "done";
}

for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", done);
}
