export { iconTheme };

const iconTheme = document.querySelector(".icon-theme");
const changingThemeClasses = [
  ".icon-theme",
  ".herro__button .button",
  ".contact__button .button",
  ".body",
  ".header__container",
  ".hero__container",
  ".contacts__container",
  "h1",
  "h2",
  "h3",
  "h4",
  ".logo",
  ".icon-play",
  ".footer-icon",
  ".section__title--span",
  ".service__price",
  ".contact-form__input",
  ".contact-form__textarea",
  ".portfolio-button",
  ".nav-list",
  ".header__nav",
  ".burger-item",
  ".language-item",
];

const changeTheme = () => {
  changingThemeClasses.forEach((el) => {
    let classesToChange = document.querySelectorAll(el);
    classesToChange.forEach((item) => {
      item.classList.toggle("theme-light");
    });
  });
};

iconTheme.addEventListener("click", changeTheme);
