const body = document.querySelector("body");
body.style.backgroundColor = "#904ead";

window.onresize = function (event) {
  const inner_width = window.innerWidth;

  if (inner_width <= 500) {
    body.style.backgroundColor = "#2d8ed6";
  } else if (inner_width > 500 && inner_width <= 1000) {
    body.style.backgroundColor = "#904ead";
  } else {
    body.style.backgroundColor = "#ffbd10";
  }
};
