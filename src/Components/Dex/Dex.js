import React, { Component } from "react";
import "./Dex.scss";
import PokeItem from "../PokeItem/PokeItem";
import dexHeader from "../../assets/images/dexHeader.png";
import getPokemon, { getPokemonDetails } from "../API/api";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default class Dex extends Component {
  state = {
    pokemon: [],
    offset: 0,
    loading: false
  };

  componentDidMount() {
    this.getPokemon();
  }

  loadMoreClickedHandler = () => {
    if (!this.state.loading) {
      this.setState({ loading: true }, () => {
        this.getPokemon();
      });
    }
  };

  getPokemon = () => {
    getPokemon(this.state.offset).then((data) =>
      this.setState(
        {
          pokemon: [...this.state.pokemon, ...data],
          offset: this.state.offset + data.length
        },
        () => this.setState({ loading: false })
      )
    );
  };
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
          {this.state.loading && <LoadingSpinner />}
        </div>
        <button onClick={this.loadMoreClickedHandler}>Load More</button>
      </div>
    );
  }
}
