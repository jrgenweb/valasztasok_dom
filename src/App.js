import "./App.css";
import Table from "./components/Table/Table";
import Filter from "./components/Filter/Filter";
import { votesArray } from "./data/data";
import { useState } from "react";

function App() {
  const [votes, setVotes] = useState(votesArray);
  const [currentPage, setCurrentPage] = useState(0);

  function changeFilter(lastName, firstName, faction) {
    setVotes(
      votesArray.filter((v) => {
        const lastNameMatch =
          !lastName ||
          v.lastName.toLowerCase().includes(lastName.toLowerCase());

        const firstNameMatch =
          !firstName ||
          v.firstName.toLowerCase().includes(firstName.toLowerCase());
        const factionMatch =
          !faction || v.faction.toLowerCase().includes(faction.toLowerCase());

        return lastNameMatch && firstNameMatch && factionMatch;
      })
    );
    setCurrentPage(0);
  }
  return (
    <div className="App">
      <h1>Virtuális szavazások</h1>
      <div className="container">
        <Filter changeFilter={changeFilter}></Filter>
        <Table
          votes={votes}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Table>
      </div>
    </div>
  );
}

export default App;
