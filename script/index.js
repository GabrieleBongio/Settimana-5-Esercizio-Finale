window.addEventListener("scroll", function (e) {
  if (parseInt(window.pageYOffset) >= this.document.querySelector("main button").offsetTop + 54) {
    document.getElementsByTagName("header")[0].classList.add("whiteHeader");
  } else {
    document.getElementsByTagName("header")[0].classList.remove("whiteHeader");
  }
});
