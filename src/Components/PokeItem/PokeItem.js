import React from "react";
import "./PokeItem.scss";
import { titleCase, appendZeros } from "../helpers/formatter";
import TypeBadge from "../TypeBadge/TypeBadge";

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
          {appendZeros(id, 3)} {titleCase(name)}
        </div>
        <TypeBadge type={type} />
      </div>
    </div>
  );
}
