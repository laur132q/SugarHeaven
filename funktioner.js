// ^ først definere jeg de forskellige varieable
const btn = document.querySelector(".burger_menu");
const lukbtn = document.querySelector(".burger_menu_luk");
const nav = document.querySelector(".nav_sidebar");
const TopTekst = document.querySelector(".topInformation");
const DeskNav = document.querySelector(".DeskNav");
// const HeleNav = document.querySelector(".BurgerNav-DeskNav");

// ^ så får jeg siden til at loade, altså når siden har loaded så skal den gå til funktionen
// ^ "sidenVises"
window.addEventListener("load", sidenVises);
document.addEventListener("DOMContentLoaded", () => {
  let resizer = new ResizeObserver(handleResize);
  resizer.observe(document.querySelector(".BurgerNav-DeskNav"));
});

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

var x = window.matchMedia("(max-width:720px)");

x.addListener(myFunction);
myFunction(x);

function myFunction(x) {
  if (x.matches) {
    btn.classList.toggle("hidden");
    lukbtn.classList.toggle("hidden");
    nav.classList.toggle("hidden");
  } else {
    TopTekst.classList.remove("hidden");
    DeskNav.classList.remove("hidden");
  }
}
