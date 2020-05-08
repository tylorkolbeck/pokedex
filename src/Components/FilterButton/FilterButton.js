import React from "react";
import "./FilterButton.scss";

export default function FilterButton({ onClick, filtered }) {
  return (
    <div
      className="filterButton-wrapper"
      onClick={onClick}
      style={{ marginLeft: "auto" }}
    >
      <div
        className={`filterButton-check-box ${filtered ? "active" : ""}`}
        style={{}}
      ></div>
      <div>Sort a-z</div>
    </div>
  );
}
