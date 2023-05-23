var input = document.getElementById("inp");
var updateButton = document.getElementById("btn");
var lineThroughBtn = document.querySelector("#linthrough");
var list = document.querySelectorAll("li");


function listClick(num) {
  num = parseInt(num);
  list.forEach((item, index) => {
    if (num === index) {
      item.classList.toggle("through");
    }
  });
}
