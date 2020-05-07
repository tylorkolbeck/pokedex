import React from "react";
import "./PokeItem.scss";

export default function PokeItem() {
  return (
    <div className="pokeItem-wrapper">
      <div className="pokeItem-content">
        <div
          className="pokeItem-img"
          style={{
            background: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png)`,
            backgroundPosition: "center"
          }}
        ></div>
        <div className="pokeItem">001 Bulbasaur</div>
        <span className="pokeItem-type">Grass</span>
      </div>
    </div>
  );
}
