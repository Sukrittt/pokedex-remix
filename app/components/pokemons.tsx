import { Link } from "@remix-run/react";
import { Loader } from "lucide-react";

import { Card, CardContent } from "~/components/ui/card";
import { usePokemonDetails } from "~/hooks/usePokemonDetails";

export const Pokemons = ({ pokemon }: { pokemon: PokemonEntry }) => {
  const { data: pokemonDetails, loading } = usePokemonDetails(
    pokemon.entry_number
  );

  const formattedName =
    pokemon.pokemon_species.name.charAt(0).toUpperCase() +
    pokemon.pokemon_species.name.slice(1);

  return (
    <Link to={`/pokemon/${pokemon.pokemon_species.name}`}>
      <Card>
        <CardContent className="p-3 hover:bg-slate-100 transition flex justify-center">
          {loading ? (
            <Loader className="h-4 w-4 animate-spin" />
          ) : (
            formattedName
          )}
        </CardContent>
      </Card>
    </Link>
  );
};
