const votesArray = [
  { korzet: 5, szavazat: 19, nev: "Ablak Antal", part: "-" },
  { korzet: 1, szavazat: 120, nev: " Alma Dalma", part: "GYEP" },
  { korzet: 7, szavazat: 162, nev: " Bab Zsuzsanna", part: "ZEP" },
  { korzet: 2, szavazat: 59, nev: "Barack Barna", part: "GYEP" },
  { korzet: 6, szavazat: 73, nev: "Birs Helga", part: "GYEP" },
  { korzet: 1, szavazat: 154, nev: " Bors Botond", part: "HEP" },
  { korzet: 5, szavazat: 188, nev: " Brokkoli Gyula", part: "ZEP" },
  { korzet: 6, szavazat: 29, nev: "Ceruza Zsombor", part: "-" },
  { korzet: 4, szavazat: 143, nev: " Fasirt Ferenc", part: "HEP" },
  { korzet: 8, szavazat: 157, nev: " Gomba Gitta", part: "TISZ" },
  { korzet: 3, szavazat: 13, nev: "Halmi Helga", part: "-" },
  { korzet: 2, szavazat: 66, nev: "Hold Ferenc", part: "-" },
  { korzet: 7, szavazat: 34, nev: "Hurka Herold", part: "HEP" },
  { korzet: 5, szavazat: 288, nev: " Joghurt Jakab", part: "TISZ" },
  { korzet: 4, szavazat: 77, nev: "Kajszi Kolos", part: "GYEP" },
  { korzet: 2, szavazat: 187, nev: " Kapor Karola", part: "ZEP" },
  { korzet: 6, szavazat: 13, nev: "Karfiol Ede", part: "ZEP" },
  { korzet: 6, szavazat: 187, nev: " Kefir Ilona", part: "TISZ" },
  { korzet: 7, szavazat: 130, nev: " Kupa Huba", part: "-" },
  { korzet: 8, szavazat: 98, nev: "Languszta Auguszta", part: "-" },
  { korzet: 1, szavazat: 34, nev: "Lila Lilla", part: "-" },
  { korzet: 1, szavazat: 56, nev: "Medve Rudolf", part: "-" },
  { korzet: 5, szavazat: 67, nev: "Meggy Csilla", part: "GYEP" },
  { korzet: 3, szavazat: 45, nev: "Moly Piroska", part: "-" },
  { korzet: 4, szavazat: 221, nev: " Monitor Tibor", part: "-" },
  { korzet: 8, szavazat: 288, nev: " Narancs Edmond", part: "GYEP" },
  { korzet: 2, szavazat: 220, nev: " Oldalas Olga", part: "HEP" },
  { korzet: 3, szavazat: 185, nev: " Pacal Kata", part: "HEP" },
  { korzet: 1, szavazat: 199, nev: " Petrezselyem Petra", part: "ZEP" },
  { korzet: 8, szavazat: 77, nev: "Pokol Vidor", part: "-" },
  { korzet: 8, szavazat: 67, nev: "Ragu Ida", part: "HEP" },
  { korzet: 3, szavazat: 156, nev: " Retek Etelka", part: "ZEP" },
  { korzet: 7, szavazat: 129, nev: " Sajt Hajnalka", part: "TISZ" },
  { korzet: 4, szavazat: 38, nev: "Simon Simon", part: "-" },
  { korzet: 3, szavazat: 87, nev: "Szilva Szilvia", part: "GYEP" },
  { korzet: 3, szavazat: 187, nev: " Tejes Attila", part: "TISZ" },
  { korzet: 2, szavazat: 65, nev: "Tejfel Edit", part: "TISZ" },
  { korzet: 4, szavazat: 39, nev: "Uborka Ubul", part: "ZEP" },
  { korzet: 6, szavazat: 288, nev: " Vadas Marcell", part: "HEP" },
  { korzet: 5, szavazat: 68, nev: "Vagdalt Edit", part: "HEP" },
].map((element) => {
  let nev = element.nev.split(" ").filter((e) => {
    if (e.length > 0);
    return e;
  });

  element.district = element.korzet;
  element.vote = element.szavazat;
  element.firstName = nev[0];
  element.lastName = nev[1];
  element.faction = element.part;

  delete element.szavazat;
  delete element.part;
  delete element.korzet;
  delete element.nev;
  return element;
});
//pártok kinyerése, hogy a dropdown-ba megjeleníthessem
const mappedFactions = votesArray.map((e) => e.faction);
const factions = mappedFactions.filter((e, index) => {
  return mappedFactions.indexOf(e) === index;
});

//létrehoztam bár a script többi részében nem használtam fel
const districts = Array.from(new Set(votesArray.map((e) => e.district)));

export { votesArray, factions, districts };
