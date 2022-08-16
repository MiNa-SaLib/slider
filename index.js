let left = document.querySelector(".fa-angles-left");
let right = document.querySelector(".fa-angles-right");
let slider = document.querySelector(".slider");
let contaner = document.querySelector(".contaner");
let spans = document.querySelectorAll("span");
console.log(spans[1]);
let x = 0,
  z = 0;
// console.log(document.styleSheets[0].cssRules[4].cssRules[1].style.left);
left.addEventListener("click", function () {
  //first methode
  if (
    parseInt(document.styleSheets[0].cssRules[1].style.left) <= 0 &&
    parseInt(document.styleSheets[0].cssRules[1].style.left) >= -2000
  ) {
    document.styleSheets[0].cssRules[1].style.left = `${
      parseInt(document.styleSheets[0].cssRules[1].style.left) - 500
    }px`;
  }
  //bolets
  if (parseInt(document.styleSheets[0].cssRules[1].style.left) == 0) {
    spans[0].classList.add("active");
    spans[1].classList.remove("active");
    spans[2].classList.remove("active");
    spans[3].classList.remove("active");
    spans[4].classList.remove("active");
    spans[5].classList.remove("active");
  } else if (parseInt(document.styleSheets[0].cssRules[1].style.left) == -500) {
    spans[0].classList.remove("active");
    spans[1].classList.add("active");
    spans[2].classList.remove("active");
    spans[3].classList.remove("active");
    spans[4].classList.remove("active");
    spans[5].classList.remove("active");
  } else if (
    parseInt(document.styleSheets[0].cssRules[1].style.left) == -1000
  ) {
    spans[0].classList.remove("active");
    spans[1].classList.remove("active");
    spans[2].classList.add("active");
    spans[3].classList.remove("active");
    spans[4].classList.remove("active");
    spans[5].classList.remove("active");
  } else if (
    parseInt(document.styleSheets[0].cssRules[1].style.left) == -1500
  ) {
    spans[0].classList.remove("active");
    spans[1].classList.remove("active");
    spans[2].classList.remove("active");
    spans[3].classList.add("active");
    spans[4].classList.remove("active");
    spans[5].classList.remove("active");
  } else if (
    parseInt(document.styleSheets[0].cssRules[1].style.left) == -2000
  ) {
    spans[0].classList.remove("active");
    spans[1].classList.remove("active");
    spans[2].classList.remove("active");
    spans[3].classList.remove("active");
    spans[4].classList.add("active");
    spans[5].classList.remove("active");
  } else if (
    parseInt(document.styleSheets[0].cssRules[1].style.left) == -2500
  ) {
    spans[0].classList.remove("active");
    spans[1].classList.remove("active");
    spans[2].classList.remove("active");
    spans[3].classList.remove("active");
    spans[4].classList.remove("active");
    spans[5].classList.add("active");
  }

  //small screens
  if (
    parseInt(document.styleSheets[0].cssRules[7].cssRules[1].style.left) <= 0 &&
    parseInt(document.styleSheets[0].cssRules[7].cssRules[1].style.left) > -1750
  ) {
    document.styleSheets[0].cssRules[7].cssRules[1].style.left = `${
      parseInt(document.styleSheets[0].cssRules[7].cssRules[1].style.left) - 350
    }px`;
  }

  console.log(x);
});
right.addEventListener("click", function () {
  //first methode

  if (
    parseInt(document.styleSheets[0].cssRules[1].style.left) < 0 &&
    parseInt(document.styleSheets[0].cssRules[1].style.left) >= -2500
  ) {
    document.styleSheets[0].cssRules[1].style.left = `${
      parseInt(document.styleSheets[0].cssRules[1].style.left) + 500
    }px`;
  }
  //bolets
  if (parseInt(document.styleSheets[0].cssRules[1].style.left) == 0) {
    spans[0].classList.add("active");
    spans[1].classList.remove("active");
    spans[2].classList.remove("active");
    spans[3].classList.remove("active");
    spans[4].classList.remove("active");
    spans[5].classList.remove("active");
  } else if (parseInt(document.styleSheets[0].cssRules[1].style.left) == -500) {
    spans[0].classList.remove("active");
    spans[1].classList.add("active");
    spans[2].classList.remove("active");
    spans[3].classList.remove("active");
    spans[4].classList.remove("active");
    spans[5].classList.remove("active");
  } else if (
    parseInt(document.styleSheets[0].cssRules[1].style.left) == -1000
  ) {
    spans[0].classList.remove("active");
    spans[1].classList.remove("active");
    spans[2].classList.add("active");
    spans[3].classList.remove("active");
    spans[4].classList.remove("active");
    spans[5].classList.remove("active");
  } else if (
    parseInt(document.styleSheets[0].cssRules[1].style.left) == -1500
  ) {
    spans[0].classList.remove("active");
    spans[1].classList.remove("active");
    spans[2].classList.remove("active");
    spans[3].classList.add("active");
    spans[4].classList.remove("active");
    spans[5].classList.remove("active");
  } else if (
    parseInt(document.styleSheets[0].cssRules[1].style.left) == -2000
  ) {
    spans[0].classList.remove("active");
    spans[1].classList.remove("active");
    spans[2].classList.remove("active");
    spans[3].classList.remove("active");
    spans[4].classList.add("active");
    spans[5].classList.remove("active");
  } else if (
    parseInt(document.styleSheets[0].cssRules[1].style.left) == -2500
  ) {
    spans[0].classList.remove("active");
    spans[1].classList.remove("active");
    spans[2].classList.remove("active");
    spans[3].classList.remove("active");
    spans[4].classList.remove("active");
    spans[5].classList.add("active");
  }

  //small screens
  if (
    parseInt(document.styleSheets[0].cssRules[7].cssRules[1].style.left) < 0 &&
    parseInt(document.styleSheets[0].cssRules[7].cssRules[1].style.left) >=
      -1750
  ) {
    document.styleSheets[0].cssRules[7].cssRules[1].style.left = `${
      parseInt(document.styleSheets[0].cssRules[7].cssRules[1].style.left) + 350
    }px`;
  }
});
//bullets
let n1 = spans[0];
let n2 = spans[1];
let n3 = spans[2];
let n4 = spans[3];
let n5 = spans[4];
let n6 = spans[5];
n1.addEventListener("click", function () {
  document.styleSheets[0].cssRules[1].style.left = "0px";
  document.styleSheets[0].cssRules[7].cssRules[1].style.left = "0px";
  spans[0].classList.add("active");
  spans[1].classList.remove("active");
  spans[2].classList.remove("active");
  spans[3].classList.remove("active");
  spans[4].classList.remove("active");
  spans[5].classList.remove("active");
});
n2.addEventListener("click", function () {
  document.styleSheets[0].cssRules[1].style.left = "-500px";
  document.styleSheets[0].cssRules[7].cssRules[1].style.left = "-350px";
  spans[0].classList.remove("active");
  spans[1].classList.add("active");
  spans[2].classList.remove("active");
  spans[3].classList.remove("active");
  spans[4].classList.remove("active");
  spans[5].classList.remove("active");
});
n3.addEventListener("click", function () {
  document.styleSheets[0].cssRules[1].style.left = "-1000px";
  document.styleSheets[0].cssRules[7].cssRules[1].style.left = "-700px";
  spans[0].classList.remove("active");
  spans[1].classList.remove("active");
  spans[2].classList.add("active");
  spans[3].classList.remove("active");
  spans[4].classList.remove("active");
  spans[5].classList.remove("active");
});
n4.addEventListener("click", function () {
  document.styleSheets[0].cssRules[1].style.left = "-1500px";
  document.styleSheets[0].cssRules[7].cssRules[1].style.left = "-1050px";
  spans[0].classList.remove("active");
  spans[1].classList.remove("active");
  spans[2].classList.remove("active");
  spans[3].classList.add("active");
  spans[4].classList.remove("active");
  spans[5].classList.remove("active");
});
n5.addEventListener("click", function () {
  document.styleSheets[0].cssRules[1].style.left = "-2000px";
  document.styleSheets[0].cssRules[7].cssRules[1].style.left = "-1400px";
  spans[0].classList.remove("active");
  spans[1].classList.remove("active");
  spans[2].classList.remove("active");
  spans[3].classList.remove("active");
  spans[4].classList.add("active");
  spans[5].classList.remove("active");
});
n6.addEventListener("click", function () {
  document.styleSheets[0].cssRules[1].style.left = "-2500px";
  document.styleSheets[0].cssRules[7].cssRules[1].style.left = "-1750px";
  spans[0].classList.remove("active");
  spans[1].classList.remove("active");
  spans[2].classList.remove("active");
  spans[3].classList.remove("active");
  spans[4].classList.remove("active");
  spans[5].classList.add("active");
});
//h1 motion
let h1 = document.querySelector("h1");
setTimeout(function () {
  h1.classList.add("posi");
}, 1000);
