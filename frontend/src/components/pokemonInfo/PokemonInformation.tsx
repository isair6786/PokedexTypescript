import {  useState } from "react";
import { pokemonTypeColors } from "../../interfaces/IPokemonData";
import { FaRegEyeSlash } from "react-icons/fa";
import { motion } from "motion/react";
import { PiSparkleLight, PiSparkleFill } from "react-icons/pi";
import PokemonEvolution from "./PokemonEvolution";
import { TiArrowRightThick } from "react-icons/ti";
import usePokemonInfo from "../../hooks/usePokemonInfo";
import useEvolutionChain from "../../hooks/useEvolutionChain";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/stores/pokemonStore";
import Loading from "../animations/Loading";

export default function PokemonInfo() {
   
    const [showShiny, isShowShiny] = useState(false)
    const idPokemon = useSelector((state: RootState) => state.pokemon.idPokemon);
    
    const {data:pokemon,isLoading:isLoadingPokemon,error:ErrorPokemon} = usePokemonInfo(idPokemon||0)
    const {data:evolutionChain}  = useEvolutionChain(idPokemon||0)

    if(ErrorPokemon) return <>Error on load pokemon info...</>

    return (<>

        <div className="flex flex-col justify-around items-center bg-white mt-25 rounded-2xl md:shadow  xl:h-[850px] 2xl:h-[850px]">
        {!idPokemon? <p className="text-gray-400 text-2xl "> Select a Pokemon</p>:<></>}
        {isLoadingPokemon? <Loading />:<></>}
        {pokemon ? (<>
           
                <div className={`${!pokemon.isSpecial? pokemon.height < 8 ? 'w-17 -mt-10' : pokemon.height < 16 ? 'w-25 -mt-15' : 'w-40 -mt-20':'w-50'}`}>
                    <img
                        className="w-full h-auto object-contain transition-all"
                        src={showShiny ? pokemon.image.front_shiny || '' : pokemon.image.front_default || ''}
                        alt={pokemon.name}
                    />
                </div>
                <div className="w-full px-5">

                    {showShiny ? (
                        <motion.div
                            key="on"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <PiSparkleFill
                                className="ml-auto text-white rounded-xl cursor-pointer bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 animate-rainbow shadow-2xl p-2"
                                size={40}
                                onClick={() => isShowShiny((prevState) => !prevState)}
                            />

                        </motion.div>
                    ) : (
                        <motion.div
                            key="off"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}

                        >
                            <PiSparkleLight
                                className="ml-auto cursor-pointer text-gray-500 rounded-xl bg-gray-50 shadow-md p-2"
                                size={40}
                                onClick={() => isShowShiny((prevState) => !prevState)}
                            />
                        </motion.div>
                    )}

                </div>
                <div>
                    <p className="text-center text-md lg:text-xl font-bold text-gray-400">#{pokemon.pokedexNumber}</p>
                    <p className="text-center text-md lg:text-3xl font-bold text-gray-600">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
                    <p className="text-center text-md lg:text-xlfont-bold text-gray-400">{pokemon.genera}</p>
                </div>
                <div>
                    <div className="flex flex-row max-w-full justify-center">
                        {pokemon.types.map((type, index) => {
                            return (<p className={`${pokemonTypeColors[type]} mx-3 px-4 pb-1 pt-1 rounded-xl`} key={index}>{type.charAt(0).toUpperCase() + type.slice(1)}</p>)
                        })}
                    </div>
                </div>
                <div className="w-full max-w-md px-5 mx-auto text-center">
                    <p className="text-center text-lg font-bold text-gray-600 mt-8">Pokedex Entry</p>
                    <p className="text-center text-md font-bold text-gray-500 italic">"{pokemon.descriptionPokemon}"</p>
                    <p className="text-center text-lg font-bold text-gray-600 mt-8">Cries</p>
                    <audio controls className="text-center md:w-full lg:w-full mx-auto" key={pokemon.cries}>
                        <source src={pokemon.cries} type="audio/ogg" />
                        Tu navegador no soporta audio.
                    </audio>
                </div>
                <p className="text-center text-lg font-bold text-gray-600 mt-8">Abilities</p>
                <div className="flex flex-row justify-center items-center pokemonType">
                    <div className="flex flex-col justify-center items-center">
                        {pokemon.abilities ? pokemon.abilities.map((ability, index) => {
                            return (<p key={index} className={`flex flex-row items-center justify-center border-2 ${ability.isHidden ? 'border-red-500 ' : 'border-indigo-500 '} p-1 px-5 mb-2 mt-2 rounded-2xl text-black text-lg`}>
                                {ability.name}{ability.isHidden ? (<FaRegEyeSlash className="ml-5" />) : (<></>)}
                            </p>)
                        }) : (<></>)}
                    </div>

                </div>
                <p className="text-center text-lg font-bold text-gray-600 mt-8">Evolution Chain</p>
                <div className="flex flex-row justify-center items-start pb-5 px-4 mt-auto">
                    {evolutionChain ? (evolutionChain.completeEvolvingChain.map((evolution,index) => {
                        return <div className="flex flex-row justify-center items-end mb-5 ">
                                    <PokemonEvolution key={index} pokemon={evolution.pokemon} ImagesUrls={evolution.ImagesUrls} isShiny={showShiny} index={index} /> 
                                    {index+1!=evolutionChain.completeEvolvingChain.length?(<TiArrowRightThick className="text-black mb-5" size={35}/>):(<></>)}
                                </div>
                    })) : (<p className="text-gray-400"> No Data</p>)}
                </div>


        </>) :
            (<></>)
        }
      </div>
    </>);

}