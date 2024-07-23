import "./styles/main.scss";

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
      module.classList.add("visible--module");
      module.classList.remove("hidden");
    });
  }
};

const contentOn = () => {
  contents.forEach((el) => (el.classList.add("visible")));
  close.classList.add("visible");
  module.classList.remove("visible--module");
  module.classList.add("hidden");

};
const contentOff = () => {
  contents.forEach((el) => (el.classList.remove("visible")));
  close.classList.remove("visible");
  module.classList.remove("hidden");
  module.classList.add("visible--module");
};
