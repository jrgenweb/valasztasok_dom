import { useState } from "react";
import styles from "./Select.module.scss";
export default function Select(props) {
  const [isActive, setIsActive] = useState(false);

  const [inputValue, setInputValue] = useState("");

  function show() {
    setIsActive(!isActive);
  }

  function onSelect(value, label) {
    console.log();

    setIsActive(false);
    setInputValue(label);

    props.onValueChange(value);
  }

  return (
    <div className={styles["form-control"]}>
      <div className={styles.dropdown}>
        <label className={styles["dropdown-label"]} htmlFor="factionName">
          Párt kiválasztása
        </label>

        <input
          type="text"
          className={styles["dropdown-input"]}
          readOnly
          value={inputValue}
          placeholder="dropdown"
          name="factionName"
          id="factionName"
          onClick={show}
        />

        <div
          className={`${styles["dropdown-list"]} ${
            isActive ? styles.active : ""
          }`}
        >
          {props.data.map((d) => (
            <div
              className={styles["dropdown-option"]}
              data-value={d}
              key={d}
              onClick={() => {
                onSelect(d, d === "" ? "Összes" : d);
              }}
            >
              {d === "" ? "Összes" : d}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
