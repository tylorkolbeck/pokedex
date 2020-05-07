import React, { Component } from "react";
import "./Dex.scss";
import PokeItem from "../PokeItem/PokeItem";
import dexHeader from "../../assets/images/dexHeader.png";
import getPokemon from "../API/api";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Button from "../UI/Button/Button";
import TypeBadge from "../TypeBadge/TypeBadge";

export default class Dex extends Component {
  state = {
    pokemon: [],
    displayedPokemon: [],
    searchValue: "",
    offset: 0,
    loading: false
  };

  componentDidMount() {
    this.getPokemon();
  }

  inputChangedHandler = (event) => {
    let input = event.target.value;
    this.setState({
      searchValue: input,
      displayedPokemon: input
        ? this.state.pokemon.filter(
            (poke) => poke.name.match(input, "gi")
            // (poke) => poke.name.toLowerCase() === input.toLowerCase()
          )
        : this.state.pokemon
    });
  };

  filterByType = (type) => {
    this.setState({
      displayedPokemon:
        type === "reset"
          ? this.state.pokemon
          : this.state.pokemon.filter((poke) => poke.type === type)
    });
  };

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
          displayedPokemon: [...this.state.pokemon, ...data],
          offset: this.state.offset + data.length
        },
        () => this.setState({ loading: false })
      )
    );
  };

  determineTypeFilters = () => {};
  render() {
    return (
      <div className="dex-wrapper">
        <div className="dex-header">
          <img src={dexHeader} alt="header" />
        </div>
        <div className="dex-content">
          <div className="search-wrapper">
            <div>
              <input
                value={this.state.searchValue}
                type="text"
                placeholder="Search..."
                onChange={this.inputChangedHandler}
              />
            </div>
          </div>
          <div className="typeBadges-wrapper">
            <TypeBadge showAll={true} onClick={this.filterByType} />
          </div>

          {this.state.displayedPokemon.map((poke) => {
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
          <Button className="u-m-a" onClick={this.loadMoreClickedHandler}>
            Load More
          </Button>
        </div>
      </div>
    );
  }
}
