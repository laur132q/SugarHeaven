// Her definerer jeg de forskellige konstanter
// Jeg tager fat i mine SVG'er nemlig burger Menu'en, krydset og og vores navigation bar.

const btn = document.querySelector(".burger_menuSVG");
const lukbtn = document.querySelector(".burger_menu_luk");
const navbarLinks = document.querySelector(".navbar-links");

// Der lyttes på burger menuen, om der bliver klikket
// Hvis der bliver klikket så skal den toggle klassen "active" på navigationen altså "åbne/display flex"
// Så skal burger menuen gemmes væk og vise krydset. (Gøres også med toggle)

btn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  lukbtn.classList.toggle("hidden");
  btn.classList.toggle("hidden");
});

// Så lytter vi efter klik på krydset, og hvis der klikkes på den skal det omvendte
// af det ovenståendende ske.

lukbtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  lukbtn.classList.toggle("hidden");
  btn.classList.toggle("hidden");
});

// window.addEventListener("load", sidenVises);
