// ^ først definere jeg de forskellige varieable
const btn = document.querySelector(".burger_menu");
const lukbtn = document.querySelector(".burger_menu_luk");
const nav = document.querySelector(".nav_sidebar");

// ^ så får jeg siden til at loade, altså når siden har loaded så skal den gå til funktionen
// ^ "sidenVises"
window.addEventListener("load", sidenVises);

// ^I denne funktion gemmer den navigationen væk, og gemmer kryddset væk
function sidenVises() {
  nav.classList.add("hidden");
  lukbtn.classList.add("hidden");
}

// ^ Her har jeg så lavet en funktion som hedder toggleMenu
// ^ Når - den funktion aktiveres så toggler hidden på nav'en
// ^ Den adder klassen hidden på min burger menu og fjerner hidden på krydset.
function toggleMenu() {
  console.log("toggleMenu");

  nav.classList.toggle("hidden");

  btn.classList.toggle("hidden");
  lukbtn.classList.toggle("hidden");
}

// ^ Man kan sige at det er her jeg starter min funktion, fordi her får jeg den til at lytte efter et klik som så starter den
btn.addEventListener("click", toggleMenu);
lukbtn.addEventListener("click", toggleMenuLuk);

function toggleMenuLuk() {
  console.log("toggleMenu2");
  nav.classList.toggle("hidden");

  btn.classList.toggle("hidden");
  lukbtn.classList.toggle("hidden");
}
