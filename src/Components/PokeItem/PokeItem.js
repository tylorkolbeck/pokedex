import React from "react";
import "./PokeItem.scss";
import { titleCase } from "../helpers/formatter";

const types = {
  normal: "#e0d4b1",
  fighting: "#ff412b",
  flying: "#e49cff",
  poison: "#c730ff",
  ground: "#c7a156",
  rock: "#b5b4b3",
  bug: "#9cba72",
  ghost: "#a372ba",
  steel: "#ababab",
  fire: "#ff9f40",
  water: "#3dc6fc",
  grass: "#46e84e",
  electric: "#f8ff3b",
  psychic: "#ff9efd",
  ice: "#9bf8fa",
  dragon: "#932eff",
  dark: "#8a6958",
  fairy: "#feb0ff",
  "???": "#4c8c6d"
};

export default function PokeItem({ name, img, id, type }) {
  return (
    <div className="pokeItem-wrapper">
      <div className="pokeItem-content">
        <div
          className="pokeItem-img"
          style={{
            background: `url(${img})`,
            backgroundPosition: "center"
          }}
        ></div>
        <div className="pokeItem">
          {id} {titleCase(name)}
        </div>
        <span style={{ background: types[type] }} className="pokeItem-type">
          {type}
        </span>
      </div>
    </div>
  );
}
