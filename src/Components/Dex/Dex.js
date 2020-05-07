import React, { Component } from "react";
import "./Dex.scss";
import PokeItem from "../PokeItem/PokeItem";
import dexHeader from "../../assets/images/dexHeader.png";
import getPokemon, { getPokemonDetails } from "../API/api";

export default class Dex extends Component {
  state = {
    pokemon: []
  };

  componentDidMount() {
    getPokemon().then((data) => this.setState({ pokemon: data }));
  }
  render() {
    return (
      <div className="dex-wrapper">
        <div className="dex-header">
          <img src={dexHeader} alt="header" />
        </div>
        <div className="dex-content">
          <div className="search-wrapper">
            <div>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          {this.state.pokemon.map((poke) => {
            return (
              <PokeItem
                key={poke.id}
                id={poke.id}
                name={poke.name}
                img={poke.img}
                type={poke.type}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
