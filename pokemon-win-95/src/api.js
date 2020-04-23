const axios = require("axios");

const getAllPokemon = async () => {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");

    const pokemonToReturn = res.data.results.map((pokemon, index) => {
      return {
        id: index + 1,
        name: pokemon.name,
        selected: false,
      };
    });

    return pokemonToReturn;
  } catch (err) {
    console.log("some error occurred", err);
  }
};

getAllPokemon();

module.exports = { getAllPokemon };
