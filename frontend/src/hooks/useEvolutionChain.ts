import { useQuery } from "react-query";
import { getEvolvingChainbyPokemonId } from "../api/pokeApi";

export default function useEvolutionChain(pokemonId: number) {

    return useQuery({
        queryKey: ["evolutionChain", pokemonId], // cache separado por id
        queryFn: () => getEvolvingChainbyPokemonId(pokemonId),
        staleTime: 1000 * 60 * 5, // cachea por 5 min
        enabled: pokemonId !== 0, 
    });
}