const body = document.querySelector("body");
const converter = document.querySelector(".converter");
const inputs = document.querySelectorAll(".scale-list input");
const button = document.querySelector(".button-mode");
let mode = false;

export const modeChange = () => {
  if (!mode) {
    body.style.background =
      "linear-gradient(to left bottom, rgb(3, 65, 3), rgb(84, 137, 155))";
    converter.style.background = "rgba(255, 255, 255, 0.14)";
    converter.style.color = "rgb(1, 198, 198)";
    inputs.forEach((el) => {
      el.style.background = "rgba(255, 255, 255, 0.14)";
      el.style.borderColor = "rgba(255, 255, 255, 0.3)";
      el.classList.add("darkmode");
    });
    button.innerText = "☀️";
    button.style.background =
      "linear-gradient(to left bottom, lightgreen, lightblue)";
    mode = true;
  } else {
    body.style.background =
      "linear-gradient(to left bottom, lightgreen, lightblue)";
    converter.style.background = "rgba(255, 255, 255, 0.3)";
    converter.style.color = "darkcyan";
    inputs.forEach((el) => {
      el.style.background = "rgba(255, 255, 255, 0.3)";
      el.style.borderColor = "rgba(255, 255, 255, 0.5)";
      el.classList.remove("darkmode");
    });
    button.innerText = "🌙";
    button.style.background =
      "linear-gradient(to left bottom, rgb(3, 65, 3), rgb(84, 137, 155))";
    mode = false;
  }
};
