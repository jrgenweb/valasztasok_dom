import { szavazatok } from "./szavazatok.js";

let allampolgarokSzama = 12345;

const feladat1 = document.querySelector(".feladat1");
/** feladat1 */
feladat1.querySelector("button").onclick = () => {
  feladat1.querySelector(
    "p"
  ).innerText = `A helyhatósági választáson ${szavazatok.length} képviselőjelölt indult.`;
};

/** feladat2 */
const feladat2 = document.querySelector(".feladat2");
document.addEventListener("DOMContentLoaded", () => {
  feladat2.querySelector("select").innerHTML = "";
  let partok = new Set([]);
  for (let jeloltek of szavazatok) {
    partok.add(jeloltek.part);
  }

  for (let part of partok) {
    feladat2.querySelector(
      "select"
    ).innerHTML += `<option value="${part}">${part}</option>`;
  }
});

feladat2.querySelector("select").onchange = () => {
  const kivalasztottPart = feladat2.querySelector("select").value;
  const tableEl = feladat2.querySelector("table");

  tableEl.innerHTML = `<thead>
    <tr>
        <th>Körzet</th>
        <th>Szavazat</th>
        <th>Név</th>
        <th>Párt</th>
    </tr>
    </thead><tbody>`;

  let jeloltekSzam = 0;
  szavazatok
    .filter((jelolt) => {
      return jelolt.part == kivalasztottPart;
    })
    .forEach((jelolt) => {
      jeloltekSzam++;
      tableEl.innerHTML += `
    
        <tr>
            <td>${jelolt.korzet}</td>
            <td>${jelolt.szavazat}</td>
            <td>${jelolt.nev}</td>
            <td>${jelolt.part}</td>
        </tr>
    `;
    });
  tableEl.innerHTML += `
  </tbody><tfoot>
        <tr><td colspan="4"><strong>A jelöltek száma:  ${jeloltekSzam} </strong></td></tr>
    </tfoot>`;
};

const feladat3 = document.querySelector(".feladat3");
feladat3.querySelector("button").onclick = () => {
  let vezetekNev = feladat3.querySelector("#vezeteknev").value;
  let keresztNev = feladat3.querySelector("#keresztnev").value;

  let eredmeny = szavazatok.filter((jelolt) => {
    if (
      jelolt.nev.toLowerCase().includes(vezetekNev.toLowerCase()) &&
      jelolt.nev.toLowerCase().includes(keresztNev.toLowerCase())
    ) {
      return jelolt;
    }
  });
  console.log(szavazatok, eredmeny, vezetekNev, keresztNev);
  if (eredmeny.length === 0) {
    feladat3.querySelector(
      "p"
    ).innerText = `Ilyen nevű képviselőjelölt nem szerepel a nyilvántartásban!`;
  } else {
    feladat3.querySelector(
      "p"
    ).innerText = `${eredmeny[0].nev} ${eredmeny[0].szavazat} szavazatot kapott.`;
  }
};

const feladat4 = document.querySelector(".feladat4");

feladat4.querySelector("button").onclick = () => {
  let szavazatokSzama = 0;
  szavazatok.forEach((jelolt) => {
    szavazatokSzama += jelolt.szavazat;
  });

  let szovegesKimenet = `${szavazatokSzama}-n adták le a szavazatukat, a részvételi arány: ${(
    (szavazatokSzama / allampolgarokSzama) *
    100
  ).toFixed(2)}%`;

  feladat4.querySelector("p").innerText = szovegesKimenet;
};

const feladat5 = document.querySelector(".feladat5");

feladat5.querySelector("button").onclick = () => {
  const partObjektum = {};

  szavazatok.forEach((jelolt) => {
    if (partObjektum[jelolt.part]) {
      partObjektum[jelolt.part] += jelolt.szavazat;
    } else {
      partObjektum[jelolt.part] = jelolt.szavazat;
    }
  });

  const tableEl = feladat5.querySelector("table");
  tableEl.innerHTML = `
  <thead>
  <tr>
    <th>Párt neve</th>
    <th>Szavazatok mennyisége</th>
  <tr>
  </thead>`;

  Array.from(Object.entries(partObjektum)).forEach((element) => {
    tableEl.innerHTML += `
    <tbody>
        <tr>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
        <tr>
    </tbody>
    
    `;
  });
};

const feladat6 = document.querySelector(".feladat6");
feladat6.querySelector("button").onclick = () => {
  let max = szavazatok[0].szavazat;
  for (let jelolt of szavazatok) {
    if (jelolt.szavazat > max) {
      max = jelolt.szavazat;
    }
  }

  let legtobbSzavazatotKapottJeloltek = szavazatok.filter((jelolt) => {
    return jelolt.szavazat === max;
  });

  feladat6.querySelector("table").innerHTML = `
  
    <tr>
        <th>Jelölt neve</th>
        <th>Párt</th>
    </tr>
  `;
  legtobbSzavazatotKapottJeloltek.forEach((jelolt) => {
    feladat6.querySelector("table").innerHTML += `
    <tr>
    <td>${jelolt.nev}</td>
    <td>${jelolt.part !== "-" ? jelolt.part : "független"}</td>
    </tr>`;
  });
  feladat6.querySelector("table").innerHTML += ``;
};

function createTable(theadArray, tbodyArray) {
  const theadEl = document.createElement("thead");
  let tHeadRowEl = document.createElement("tr");
  for (let element of theadArray) {
    let thEl = document.createElement("th");
    thEl.innerText = element;
    tHeadRowEl.appendChild(thEl);
  }
  theadEl.appendChild(thEl);

  const tbodyEl = document.createElement("tbody");
  trowEl = document.createElement("tr");
  for (let row of tbodyArray) {

    for(let col of row){
        
    }
    let thEl = document.createElement("td");
    thEl.innerText = element;
    theadEl.appendChild(thEl);
  }
}
