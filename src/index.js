const showAnswer = (ans, butt) => {
  let answer = document.getElementById(ans);
  let button = document.getElementById(butt);

  if (answer.style.height == "" || answer.style.height == "0px") {
    answer.style.height = "auto";
    answer.style.opacity = "100%";
    answer.style.transition = "opacity 800ms ease";
    rotateArrowUp(butt);
  } else if (answer.style.height != "0") {
    answer.style.height = "0";
    answer.style.opacity = "0";
    answer.style.transition = "opacity 800ms ease";
    rotateArrowDown(butt);
  }
  button.style.transition = "800ms ease";
};

const rotateArrowUp = (button) => {
  document.getElementById(button).style.transform = "rotate(180deg)";
};

const rotateArrowDown = (button) => {
  document.getElementById(button).style.transform = "rotate(0deg)";
};
