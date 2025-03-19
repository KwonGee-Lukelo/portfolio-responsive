const header = document.querySelector(".header");
const btnMenu = document.querySelector("#nav-toggle");
const btnClose = document.querySelector("#nav-close");
const navLink = document.querySelectorAll(".nav__link");

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

/*Cette fonction permet de fermer le menu si on clique 
à n'importe qu'elle lien de navigation*/
const linkAction = () => {
  document.querySelector(".nav__list").classList.remove("nav__list__mobile");
  document.querySelector(".nav__close").classList.remove("nav__close__mobile");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
