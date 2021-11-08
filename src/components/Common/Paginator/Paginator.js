import React from "react";
import "./Paginator.css";

const Paginator = ({ onPageChanged, currentPage, totalPlanetCount }) => {
  const onPageChangedHandleClick = (cell) => {
    onPageChanged(cell);
  };
  const paginatorCell = [...new Array(Math.ceil(totalPlanetCount / 10))].map(
    (e, index) => {
      return (
        <button
          className={currentPage === index + 1 ? "activecell" : "cell"}
          onClick={() => onPageChangedHandleClick(index + 1)}
          key={index + 1}
          disabled={currentPage === index + 1}
        />
      );
    }
  );
  return <div className={"paginator"}>{paginatorCell}</div>;
};

export default Paginator;
