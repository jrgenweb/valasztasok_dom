import { factions } from "./data.js";

const dropdownEl = document.querySelector(".dropdown");

const dropdownInputEl = dropdownEl.querySelector(".dropdown-input");
const dropdownListEl = dropdownEl.querySelector(".dropdown-list");
const dropdownOptions = dropdownEl.querySelectorAll(".dropdown-option");

/**
 *
 *
 * dropdown feltöltése a megfelelő értékekkel, és az alapértelmezés 'összes' beállítása
 * lehetne dataset-et használni, hogy teljes mértékben "szimuláljuk" az alap select-et
 *
 * minta:
 * <div class="dropdown-option">Összes</div>
 *
 *
 */

function dropdownOnLoad() {
  //egy összes választó option létrehozása, azzal, hogy a factions tömb elejére beszúrok egy 'összes' nevű elemet
  factions.unshift("Összes");
  factions.forEach((faction) => {
    const dropdownOptionEl = document.createElement("div");
    dropdownOptionEl.classList.add("dropdown-option");
    dropdownOptionEl.innerText = faction;
    dropdownOptionEl.onclick = dropdownOptionClickEvent;
    dropdownListEl.appendChild(dropdownOptionEl);
    //
  });
  dropdownInputEl.value = "Összes";
}
dropdownOnLoad();
/**
 *
 * megváltoztatjuk az input mező value-ját
 *
 */

function dropdownOptionClickEvent(event) {
  dropdownInputEl.value = event.currentTarget.innerText;
  //console.log("ok", event.currentTarget);
}

/**
 *
 * dropdown-list elrejtése megjelenítése
 * itt az egyszerűség kedvéért nem class-t használok hanem az elem-nek a display
 * property-jét módosítom
 */

dropdownEl.onclick = dropdownToggleOptions;
dropdownEl.onblur = dropdownToggleOptions;
function dropdownToggleOptions() {
  let displayProperty =
    dropdownEl.querySelector(".dropdown-list").style.display;
  if (displayProperty == "block") {
    displayProperty = "none";
  } else {
    displayProperty = "block";
  }
  dropdownEl.querySelector(".dropdown-list").style.display = displayProperty;
}
