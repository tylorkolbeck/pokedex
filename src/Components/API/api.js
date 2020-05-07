import { pokemon } from "./testData";

export default function getPokemon() {
  return fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((result) => result.json())
    .then(({ results }) => getPokemonDetails(results));
}

export function getPokemonDetails(pokemon) {
  let promises = pokemon.map((poke) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
      .then((res) => res.json())
      .then((data) => {
        return {
          name: data.name,
          type: data.types[0].type.name,
          img: data.sprites.front_default,
          id: data.id,
          data: data
        };
      });
  });
  return Promise.all(promises);
}
