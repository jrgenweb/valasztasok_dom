import { votesArray } from "./data.js";
import "./dropdown.js";
import { filter, renderTable, currentPage } from "./table.js";

renderTable(filter(), currentPage);

function btnFilterClickEvent() {
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  let factionName = document.querySelector("#factionName").value;

  //ez az összes kiválasztásához szükséges, mivel csak kezdetleges dropdown-t hoztam létre
  if (factionName === "Összes") {
    factionName = "";
  }
  renderTable(filter(firstName, lastName, factionName), currentPage);
}

const btnFilterEl = document.querySelector("#btnFilter");
btnFilterEl.onclick = btnFilterClickEvent;

/** Többi feladat */
const citizenCount = 12345;

function feladat1() {
  document.querySelector(
    ".task1 .panel"
  ).innerHTML = `A helyhatósági választáson <strong>${votesArray.length} </strong>képviselőjelölt indult.`;
}
feladat1();

function feladat4() {
  let voteCount = 0;
  votesArray.forEach((element) => {
    voteCount += element.vote;
  });

  let htmlOutput = `<strong>${voteCount}</strong>-n adták le a szavazatukat, a részvételi arány: <strong>${(
    (voteCount / citizenCount) *
    100
  ).toFixed(2)}%</strong>`;

  document.querySelector(".task4 .panel").innerHTML = htmlOutput;
}
feladat4();
