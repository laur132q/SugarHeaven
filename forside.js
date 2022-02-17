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

//  ---------------------------------------------------------------------------------

const url = "https://tema7slik-1f37.restdb.io/rest/slik";
// settings, (test data, tag link, husk at fjerne max
// key = database, API keys, manage dem --> Selve nøglen

const options = {
  headers: {
    "x-apikey": "620e5bf934fd621565858739",
  },
};

let json;
let myKatogri = "alt";

const main = document.querySelector("#slikket");
const template = document.querySelector("template").content;
const header = document.querySelector("#overskrift");
// const modal = document.querySelector("#modal");
// OKAY OKAY!! Så nede i min asynkrone funktion henter jeg altså både
// min nøgle og mit link og venter på at det et hentet så jeg kan vise det
document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  const filterKnapper = document.querySelectorAll("nav button");
  filterKnapper.forEach((knap) =>
    knap.addEventListener("click", filtrerKategorier)
  );

  async function henData() {
    const resspons = await fetch(url, options);
    json = await resspons.json();
    vis(json, myKatogri);
  }

  henData();
}

function filtrerKategorier() {
  console.log("filtrerKategorier");
  let klikketPaa = this.dataset.kategori;
  console.log("klikketPaa :" + klikketPaa);
  document.querySelector(".valgt").classList.remove("valgt");
  this.classList.add("valgt");

  header.textContent = this.textContent;
  vis(json, klikketPaa);
}

function vis(json, x) {
  console.log(json);

  main.textContent = "";
  json.forEach((slik) => {
    if (slik.kategori == x || x == "alt") {
      const klon = template.cloneNode(true);

      klon.querySelector(".billedeurl").src =
        "tema7billeder/" + slik.billede + ".jpg";
      klon.querySelector(".navn").textContent = slik.navn;
      // klon.querySelector(".kortbeskrivelse").textContent =
      //   retter.kortbeskrivelse;
      klon.querySelector(".pris").textContent = slik.pris + " kr.";
      klon.querySelector("article").addEventListener("click", () => {
        visDetaljer(slik);
      });
      // klon.querySelector("article").addEventListener("click", () => {
      //   location.href = `retSingleView.html?id=${retter._id}`;
      // };
      main.appendChild(klon);
    }
  });

  console.log(myKatogri);
}

// function visDetaljer(retter) {
//   console.log("visDetajler" + retter);
//   modal.querySelector("h3").textContent = retter.navn;
//   modal.querySelector("img").src = "images/" + retter.billednavn + "-md.jpg";
//   modal.querySelector(".kortbeskrivelse").textContent = retter.kortbeskrivelse;
//   modal.querySelector(".langbeskrivelse").textContent = retter.langbeskrivelse;
//   modal.querySelector(".oprindelsesregion").textContent =
//     "Oprindelsesregion: " + retter.oprindelsesregion;
//   modal.querySelector(".pris").textContent = retter.pris += " kr.";
//   modal.style.display = "block";
//   modal.addEventListener("click", () => (modal.style.display = "none"));
// }
