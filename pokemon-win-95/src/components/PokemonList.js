import React, { Fragment, useEffect, useState } from "react";
import { Hourglass } from "react95";

import { getAllPokemon } from "../api";

const PokemonList = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getAllPokemon();
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Hourglass size={40} />
      </div>
    );
  }

  if (error) {
    return <div>There is an error. Please refresh</div>;
  }

  return <div>Hello world</div>;
};

export default PokemonList;
