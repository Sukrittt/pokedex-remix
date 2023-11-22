import { json } from "@remix-run/node";
import {
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import axios from "axios";

import { Pokemons } from "~/components/pokemons";

export async function loader({ params }: { params: { region: string } }) {
  console.log("params.region", params.region);

  const region = await axios(
    `https://pokeapi.co/api/v2/pokedex/${params.region}`
  );

  if (!region.data) throw new Response("", { status: 404 });

  return json(region.data);
}

export default function Region() {
  const region = useLoaderData<typeof loader>();

  return (
    <div className="grid grid-cols-6 gap-4">
      {region.pokemon_entries.map((pokemon: PokemonEntry) => (
        <Pokemons pokemon={pokemon} key={pokemon.entry_number} />
      ))}
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <div>Region not found!</div>;
    }

    return (
      <div>
        Something went wrong: {error.status} {error.statusText}
      </div>
    );
  }

  return <div>Something went wrong</div>;
}
