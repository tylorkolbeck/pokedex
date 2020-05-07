import React from "react";
import "./PokeItem.scss";

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
          {id} {name}
        </div>
        <span className="pokeItem-type">{type}</span>
      </div>
    </div>
  );
}
