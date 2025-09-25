import usePokedexGrid from "../../hooks/usePokedexGrid"
import { IPokemon } from '../../interfaces/IPokemonData';
// components/PokemonGridLocalPagination.tsx
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import PokemonInfo from "./pokemonInfo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/stores/pokemonStore";
import { setPokemonId } from "../../redux/slices/pokemonSlice";
import SeachingBar from "../seachingBar/SeachingBar";
import Loading from "../animations/Loading";



export default function PokemonGridInfo({setShowModal }:{setShowModal: Dispatch<SetStateAction<boolean>>}) {
    const { pokedexData, error, isLoading } = usePokedexGrid();
    const [page, setPage] = useState(1);
    const [searchWord, setSearchWord] = useState("");
    const [limit, setLimit] = useState(10);
    const dispatch = useDispatch();
    const idPokemon = useSelector((state: RootState) => state.pokemon.idPokemon);

    useEffect(() => {
        console.log(idPokemon)
    }, [idPokemon])
    // 🔎 Filter Pokémon by search word
    const filteredPokemons = useMemo(() => {
        if (!searchWord) return pokedexData;
        return pokedexData?.filter((p: IPokemon) =>
            p.name.toLowerCase().includes(searchWord.toLowerCase())
        );
    }, [searchWord, pokedexData]);




    const totalPokemons = filteredPokemons?.length || 0;
    const totalPages = Math.ceil(totalPokemons / limit);

    // Slice the array to show only the current page
    const start = (page - 1) * limit;
    const end = start + limit;
    const currentPokemons = filteredPokemons?.slice(start, end) || [];

    return (
        <div>
            <SeachingBar setSearchWord={setSearchWord} />

            <div className="mb-4 flex gap-2 items-center text-black mt-5  justify-center md:justify-start pl-2">
                <label className="font-semibold">Pokémon per page:</label>
                <select
                    value={limit}
                    onChange={(e) => {
                        setLimit(Number(e.target.value));
                        setPage(1); // reset page when limit changes
                    }}
                    className="rounded px-2 py-1 bg-white border-0 shadow focus:border-0 selection:border-0"
                >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </div>
              {/* Pagination Controls */}
            <div className="flex md:hidden justify-center gap-4 mt-15 text-black mb-5">
                <button
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                    className="px-4 py-2 shadow pokemonType text-2xl rounded disabled:opacity-50 bg-white"
                >
                    Prev
                </button>
                <span className="flex items-center px-2 pokemonType font-bold text-2xl ">
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={() => setPage((p) => (p < totalPages ? p + 1 : p))}
                    disabled={page === totalPages}
                    className="px-4 py-2 shadow pokemonType text-2xl rounded disabled:opacity-50 bg-white"
                >
                    Next
                </button>
            </div>
            {/* Pokémon Grid */}
            {!isLoading && !error ? (<>
                <ul className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-black h-[500px]  overflow-y-auto scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-red-200">
                    {currentPokemons.map((pokemon: IPokemon) => {
                        return (
                            <div>
                                <li
                                    key={pokemon.name}
                                    onClick={() => {
                                            dispatch(setPokemonId(pokemon.pokedexNumber))
                                            setShowModal(true)
                                        }}
                                    className="rounded bg-white hover:bg-gray-100 transition mb-5 pb-5 pt-5"
                                >
                                    <PokemonInfo isSpecial={pokemon.isSpecial} height={pokemon.height} image={pokemon.image} name={pokemon.name} pokedexNumber={pokemon.pokedexNumber} types={pokemon.types} />
                                </li>
                            </div>
                        )
                    }
                    )}
                </ul>
            </>) :
                error ? <p className="text-gray-500">Error on load Pokedex</p> :
                    isLoading ? <div className="p-5 mt-15 mb-15"><Loading /></div> : <p className="text-gray-500">No data </p>}

            {/* Pagination Controls */}
            <div className="hidden md:flex justify-center gap-4 mt-15 text-black">
                <button
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                    className="px-4 py-2 shadow pokemonType text-2xl rounded disabled:opacity-50 bg-white"
                >
                    Previous
                </button>
                <span className="flex justify-center items-center px-2  pokemonType text-xl text-gray-500">
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={() => setPage((p) => (p < totalPages ? p + 1 : p))}
                    disabled={page === totalPages}
                    className="px-4 py-2 shadow pokemonType text-2xl rounded disabled:opacity-50 bg-white"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
