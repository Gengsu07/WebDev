datascience = ["sql", "python", "tableau", "powerbi", "spark", "superset"];

webdev = ["html", "css", "bootstrap", "javascript", "reactjs", "nodejs"];
nominal = [23, 45, 23, 6, 78, 77, 45, 67];

for (var i = 0; i < datascience.length; i++) {
  datascience[i] = datascience[i] + "!";
}

for (var i = 0; i < datascience.length; i++) {
  webdev.pop();
}

var counter = 0;
while (counter < 10) {
  console.log(counter);
  counter++;
}

var countertwo = 10;
do {
  console.log("do while" + countertwo);
  countertwo++;
} while (countertwo < 10);

datascience.forEach(function (item, i) {
  console.log(item, i);
});

nominal.forEach(function (items, i) {
  console.log(items, i);
});
