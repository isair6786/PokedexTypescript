import { useQuery } from "react-query";
import { getPokemonById } from "../api/pokeApi";

export default function usePokemonInfo(pokemonId: number) {
   
    return useQuery({
        queryKey: ["pokemon", pokemonId], // cache separado por id
        queryFn: () => getPokemonById(pokemonId),
        staleTime: 1000 * 60 * 5, // cachea por 5 min
        enabled: pokemonId !== 0, 
    });
}
