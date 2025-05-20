import { votesArray } from "./data.js";

const pages = 10;
let maxPage = 0;
let currentPage = 1;
let previousPage = 1;
let nextPage = 1;
//ebből jelenítem meg az adatokat
let filteredData = [];

let animationDuration = 0.6;
//ez csak azért kell hogy az oldal betöltsékor ne csusszon szét az animációm
let firstLoad = true;

function filter(lastName = "", firstName = "", faction = "") {
  filteredData = votesArray.filter((element) => {
    /** AI-tól kértem segítséget */
    const lastNameMatch =
      lastName === "" ||
      element.lastName.toLowerCase().includes(lastName.toLowerCase());
    const firstNameMatch =
      firstName === "" ||
      element.firstName.toLowerCase().includes(firstName.toLowerCase());
    const factionMatch =
      faction === "" ||
      element.faction.toLowerCase().includes(faction.toLowerCase());

    return lastNameMatch && firstNameMatch && factionMatch;
  });

  return filteredData;
}

/**
 * beállítom a max oldal számot
 * a jelenlegi oldalt
 * az előző és a következő gombok értékét
 *
 */

function renderTable(filteredData, currentPage) {
  //console.log(filteredData, 1 / 10);
  maxPage = Math.ceil(filteredData.length / pages);
  currentPage = getCurrentPage(currentPage);
  previousPage = getPreviousPage(currentPage);
  nextPage = getNextPage(currentPage);

  updateTableBody(filteredData, currentPage);
  renderPagination(maxPage, currentPage, previousPage, nextPage);
  return maxPage;
}
function getCurrentPage(currentPage) {
  if (currentPage > maxPage) {
    return maxPage;
  } else if (currentPage <= 1) {
    return 1;
  }
  return currentPage;
}
function getPreviousPage(currentPage) {
  if (currentPage - 1 <= 1) {
    return 1;
  }
  return currentPage - 1;
}

function getNextPage(currentPage) {
  if (currentPage + 1 < maxPage) {
    return currentPage + 1;
  }
  return maxPage;
}

/**
 * adott index-től, pages-ig azaz a beállított egyszerre megjeleníthető értékig listáza
 * az adatokat
 *
 * @param {
 * } filteredData
 * @param {*} index
 *
 */
function updateTableBody(filteredData, index) {
  if (!firstLoad) {
    beforeUpdate();
  }

  setTimeout(
    () => {
      const tbodyEl = document.querySelector("table tbody");
      tbodyEl.innerHTML = "";
      let startIndex = (index - 1) * pages <= 0 ? 0 : (index - 1) * pages;
      let endIndex =
        index * pages > filteredData.length
          ? filteredData.length
          : index * pages;

      //console.log(filteredData.length, "filtereztük");
      //ez csak a lehető legegyszerűbben megoldott, ha nincs adat
      if (filteredData.length < 1) {
        tbodyEl.appendChild(
          createTableBodyElements({
            emty: "",
            emt: "",
            empty: "Nincs megjeleníthető adat",
            emty2: "",
            emty3: "",
          })
        );
      } else {
        for (let i = startIndex; i < endIndex; i++) {
          tbodyEl.appendChild(createTableBodyElements(filteredData[i]));
        }
      }
    },

    firstLoad ? 0 : animationDuration * 1000 * 1.5
  );

  firstLoad = false;
}

/** ez csak egy kis animáció kezeléshez kell */
function beforeUpdate() {
  document.querySelector("table tbody").classList.add("rotate");
  setTimeout(() => {
    document.querySelector("table tbody").classList.remove("rotate");
  }, animationDuration * 1000 * 1.5);
}

/**
 *
 * @param {*} data
 * @returns
 */
function createTableBodyElements(data) {
  data = Array.from(Object.values(data));
  const tableRowEl = document.createElement("tr");

  data.forEach((element) => {
    const tableCelEl = document.createElement("td");
    tableCelEl.innerText = element;
    tableRowEl.appendChild(tableCelEl);
  });
  return tableRowEl;
}

/**
 * a létrehozott elözö, következő gombok újból meghívják a ..... a pagination-t ami
 * újból meghívja a filter function-t ... stb
 * ebben a fgv-ben createElement-el hozom létre a gombokat, hogy egyszerűbben rátudjak
 * regisztrálni event-eket
 * @param {*} maxPage
 * @param {*} currentPage
 * @param {*} previousPage
 * @param {*} nextPage
 *
 */

function renderPagination(maxPage, currentPage, previousPage, nextPage) {
  //console.log(previousPage, nextPage);
  const paginationEl = document.querySelector("table tfoot");
  const trEl = document.createElement("tr");
  const tdPreviousEl = document.createElement("td");
  tdPreviousEl.appendChild(createButton("previous", previousPage));
  const tdMiddle = document.createElement("td");
  tdMiddle.setAttribute("colspan", "3");
  tdMiddle.innerText = `${currentPage} / ${maxPage}`;
  const tdNextEl = document.createElement("td");
  tdNextEl.appendChild(createButton("next", nextPage));

  trEl.appendChild(tdPreviousEl);
  trEl.appendChild(tdMiddle);
  trEl.appendChild(tdNextEl);

  paginationEl.innerHTML = "";
  paginationEl.appendChild(trEl);
}

/**
 *
 * @param {*} type 'next' | 'previous'
 * @param {*} pageIndex
 * @returns
 */
function createButton(type, pageIndex) {
  const buttonEl = document.createElement("button");
  buttonEl.innerHTML =
    type == "next"
      ? `<i class="fa-solid fa-angles-right"></i>`
      : `
  <i class="fa-solid fa-angles-left"></i>`;
  buttonEl.addEventListener("click", () => {
    renderTable(filteredData, pageIndex);
  });
  return buttonEl;
}

export { filter, renderTable, currentPage };
