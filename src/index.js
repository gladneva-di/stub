import "./styles/main.scss";
const main = document.querySelector(".main");
const module = document.querySelector(".mobile__module");
const contents = document.querySelectorAll(".main .col p");
const close = document.querySelector(".mobile__icon_close");

window.addEventListener("resize", function () {
  changePos();
});

const changePos = () => {
  if (window.matchMedia("(max-width: 560px)").matches) {
    module.addEventListener("click", () => {
      contentOn();
      closeModule();
    });
  }
};
changePos();

const closeModule = () => {
  if (close) {
    close.addEventListener("click", () => {
      contentOff();
    });
  }
};

const contentOn = () => {
  main.classList.add("visible--main");
  close.classList.add("visible");
  module.classList.remove("visible--module");
  module.classList.add("hidden");
};
const contentOff = () => {
  main.classList.remove("visible--main");
  close.classList.remove("visible");
  setTimeout(function () {
    module.classList.remove("hidden");
    module.classList.add("visible--module");
  }, 350);
};
