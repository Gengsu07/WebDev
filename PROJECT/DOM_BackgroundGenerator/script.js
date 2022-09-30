var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var css = document.querySelector(".css_code");
var body = document.querySelector("body");

function color() {
  body.style.background =
    "linear-gradient(to right" + "," + color1.value + "," + color2.value + ")";
  css.style.color = "rgba(0,0,0,0.6)";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", color);
color2.addEventListener("input", color);
