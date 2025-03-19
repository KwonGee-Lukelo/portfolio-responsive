const btnMenu = document.querySelector("#nav-toggle");
const btnClose = document.querySelector("#nav-close");

//Evenement
btnMenu.addEventListener("click", menu);
btnClose.addEventListener("click", close);

//Function pour ouvrir menu de navigation (Hamburger) sur petit écran
function menu(e) {
  e.preventDefault();
  document.querySelector(".nav__list").classList.add("nav__list__mobile");
  document.querySelector(".nav__close").classList.add("nav__close__mobile");
  console.log("Yes!!!");
}

//Function Pour fermer le menu de navigation sur petit écran
function close() {
  document.querySelector(".nav__list").classList.remove("nav__list__mobile");
  document.querySelector(".nav__close").classList.remove("nav__close__mobile");
}
