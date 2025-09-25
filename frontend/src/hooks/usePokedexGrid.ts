import { useQuery } from "react-query"
import { getAllPokemon } from "../api/pokeApi";


export default function usePokedexGrid() {
    const { data:pokedexData, isLoading, error } = useQuery({
        queryKey: ["pokemons"], 
        queryFn: getAllPokemon, 
    });

    return {
        pokedexData,
        isLoading,
        error
    }
}