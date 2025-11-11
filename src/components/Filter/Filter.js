import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";
import { votesArray } from "../../data/data";
import style from "./Filter.module.scss";

export default function Filter(props) {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [faction, setFaction] = useState("");

  function onFactionChange(value) {
    setFaction(value);
    props.changeFilter(lastName, firstName, value);
  }
  function onFirstNameChange(value) {
    setFirstName(value);
    props.changeFilter(lastName, value, faction);
  }
  function onLastNameChange(value) {
    setLastName(value);
    props.changeFilter(value, firstName, faction);
  }

  const factions = [
    "",
    ...Array.from(
      votesArray.reduce((prev, current) => {
        return prev.add(current.faction);
      }, new Set())
    ),
  ];

  return (
    <div className={style.filter}>
      <Input
        name="lastname"
        value={lastName}
        onValueChange={onLastNameChange}
        label="Vezetéknév"
      ></Input>
      <Input
        name="firstname"
        label="Keresztnév"
        onValueChange={onFirstNameChange}
      ></Input>
      <Select onValueChange={onFactionChange} data={factions}></Select>
      <Button>Szűrés</Button>
    </div>
  );
}
