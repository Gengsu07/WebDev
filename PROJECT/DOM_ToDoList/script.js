var addtodo = document.getElementById("enter");
var todo = document.getElementById("input_todo");
var ul = document.getElementsByTagName("ul");

addtodo.addEventListener("click", function () {
  var list = document.createElement("li");
  list.appendChild(document.createTextNode(todo.value));
  ul.appendChild(list);
  todo.value = "";
});
