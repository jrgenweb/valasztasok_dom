import { useState } from "react";

import style from "./Table.module.scss";
export default function Table(props) {
  const [currentPage, setCurrentPage] = [
    props.currentPage,
    props.setCurrentPage,
  ];

  //useState(props.currentPage);
  const ITEMS_PER_PAGE = 10;
  const maxPage = Math.ceil(props.votes.length / ITEMS_PER_PAGE);

  function nextPage() {
    if (currentPage < maxPage - 1) setCurrentPage(currentPage + 1);
  }
  function prevPage() {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  }

  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Körzet</th>
          <th>Szavazat</th>
          <th>Vezetéknév</th>
          <th>Keresztnév</th>
          <th>Párt</th>
        </tr>
      </thead>
      <tbody>
        {props.votes
          .slice(
            currentPage * ITEMS_PER_PAGE,
            currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
          )
          .map((v, index) => (
            <tr key={index}>
              <td>{v.district}</td>
              <td>{v.vote}</td>
              <td>{v.lastName}</td>
              <td>{v.firstName}</td>
              <td>{v.faction}</td>
            </tr>
          ))}
      </tbody>
      <tfoot>
        <tr>
          <td>
            <button onClick={prevPage}>
              <i className="fa-solid fa-angles-left"></i>
            </button>
          </td>
          <td colSpan="3">
            <strong>
              <span className={style.currentPage}>{currentPage + 1}</span> /{" "}
              <span className={style.maxPage}>{maxPage}</span>
            </strong>
          </td>
          <td>
            <button onClick={nextPage}>
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
