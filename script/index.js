window.addEventListener("scroll", function (e) {
  if (parseInt(window.pageYOffset) >= this.document.querySelector("main button").offsetTop + 54) {
    document.getElementsByTagName("header")[0].classList.add("whiteHeader");
  } else {
    document.getElementsByTagName("header")[0].classList.remove("whiteHeader");
  }
});

const svgChange = function () {
  const takeThat = Math.floor(Math.random() * 561);
  const listOfM = document.querySelectorAll("svg>g>g>g");
  const MtoChange = listOfM[takeThat];
  if (MtoChange.getAttribute("opacity") == 1) {
    MtoChange.setAttribute("opacity", "0");
  } else {
    MtoChange.setAttribute("opacity", "1");
  }
};

setInterval(svgChange, 100);
