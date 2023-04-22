var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");
//console.log(fans, fish, pets);
var toggle = document.querySelector(".switch-container #toggle");
var ball = document.querySelector(".ball");
var header = document.querySelector("h1");
var body = document.querySelector("body");
//console.log(toggle, ball, header, body);

fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
});

fish.addEventListener("mouseover", function () {
  fish.innerText = "47K";
});

pets.addEventListener("mouseover", function () {
  pets.innerText = "20K";
});

toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    header.innerText = "Stealth Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    header.innerText = "Party Quincy";
  }
});
