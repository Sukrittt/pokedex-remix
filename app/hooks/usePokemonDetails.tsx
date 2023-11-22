import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export const usePokemonDetails = (pokemonId: number) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<any | null>(null);

  const fetchPokemonDetails = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      setData(response.data);
    } catch (error) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }, [pokemonId]);

  useEffect(() => {
    fetchPokemonDetails();
  }, [fetchPokemonDetails]);

  return { loading, error, data };
};
