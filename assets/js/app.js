const btnMenu = document.querySelector("#nav-toggle");
const btnClose = document.querySelector("#nav-close");
const navLink = document.querySelectorAll(".nav__link");
const form = document.querySelector("#form");
const btnForm = document.querySelector("#submit");

//Evenement
btnMenu.addEventListener("click", menu);
btnClose.addEventListener("click", close);
window.addEventListener("scroll", shadowHeader);
form.addEventListener("submit", validateForm);

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

/*Fonction qui permet d'appliquer l'ombre à la 
barre de navigation si en scrollant l'axe de abscisse 
devient superieur ou egal 50*/
function shadowHeader() {
  const header = document.querySelector(".header");

  //Une condition ternaire
  this.scrollY >= 50
    ? header.classList.add("shadow__header")
    : header.classList.remove("shadow__header");
}

// Fonction qui nous permet de validé le formulaire
function validateForm(e) {
  e.preventDefault();

  //On accède à tout les elements du formulaires
  const formElement = e.target.elements;

  //On recupere le valeur des champs de saisies
  const nom = formElement.nom.value;
  const prenom = formElement.prenom.value;
  const email = formElement.email.value;
  const sujet = formElement.sujet.value;
  const message = formElement.message.value;
  const gmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; //on definit le format de l'adresse mail

  //On test que tout le champ de saisi ne soit pas vide
  if (
    nom !== "" &&
    prenom !== "" &&
    email !== "" &&
    sujet !== "" &&
    message !== ""
  ) {
    //On verifie si le format d'un adresse mail est respecté
    if (!gmail.test(email)) {
      alert(
        "Vous devez respecté le format d'une adresse mail (ex: pkwongee@gmail.com)"
      );
      return;
    }
    alert("Votre message a été envoyer avec success!");
    return;
  } else {
    alert("Veuillez remplir tout les champs correctement");
    return;
  }
}
