import { useEffect, useState } from "react";
import { IEvolutionChain, IPokemon, pokemonTypeColors } from "../../interfaces/IPokemonData";
import { FaRegEyeSlash } from "react-icons/fa";
import { motion } from "motion/react";
import { PiSparkleLight, PiSparkleFill } from "react-icons/pi";
import PokemonEvolution from "./PokemonEvolution";
import { TiArrowRightThick } from "react-icons/ti";

export default function PokemonInfo() {
    const [pokemon, setPokemon] = useState<IPokemon>()
    const [evolutionChain, setEvolutionChain] = useState<IEvolutionChain>()

    const fillData = async () => {
        setPokemon({
            "cries": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/6.ogg",
            "abilities": [
                {
                    "name": "blaze",
                    "isHidden": false
                },
                {
                    "name": "solar-power",
                    "isHidden": true
                }
            ],
            "image": {
                "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/6.gif",
                "back_female": null,
                "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/6.gif",
                "back_shiny_female": null,
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif",
                "front_female": null,
                "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/6.gif",
                "front_shiny_female": null
            },
            "name": "charizard",
            "pokedexNumber": 6,
            "types": [
                "fire",
                "flying"
            ],
            "weight": 905,
            "genera": "Flame Pokémon",
            "descriptionPokemon": "It is said that Charizard’s fire\nburns hotter if it has\nexperienced harsh battles.",
            "height": 17
        })
        setEvolutionChain({
            "completeEvolvingChain": [
                {
                    "pokemon": "charmander",
                    "evolution_details": [],
                    "ImagesUrls": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/4.gif",
                        "back_female": null,
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/4.gif",
                        "back_shiny_female": null,
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/4.gif",
                        "front_shiny_female": null
                    }
                },
                {
                    "pokemon": "charmeleon",
                    "evolution_details": [
                        {
                            "trigger": "level up"
                        }
                    ],
                    "ImagesUrls": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/5.gif",
                        "back_female": null,
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/5.gif",
                        "back_shiny_female": null,
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/5.gif",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/5.gif",
                        "front_shiny_female": null
                    }
                },
                {
                    "pokemon": "charizard",
                    "evolution_details": [
                        {
                            "trigger": "level up"
                        }
                    ],
                    "ImagesUrls": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/6.gif",
                        "back_female": null,
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/6.gif",
                        "back_shiny_female": null,
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/6.gif",
                        "front_shiny_female": null
                    }
                }
            ]
        })
    }
    useEffect(() => {
        (async () => { await fillData() })();
    }, [])

    const [showShiny, isShowShiny] = useState(false)

    if (!pokemon) return <>Loading</>

    return (<>


        {pokemon ? (<>
            <div className="flex flex-col justify-around items-center bg-white mt-25 rounded-2xl shadow">

                <div className={`${pokemon.height < 8 ? 'w-15' : pokemon.height < 16 ? 'w-25' : 'w-40'} -mt-20`}>
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
                <div className="flex flex-row justify-center items-center mb-5 p-4">
                    {evolutionChain ? (evolutionChain.completeEvolvingChain.map((evolution,index) => {
                        return <div className="flex flex-row justify-center items-center ">
                                    <PokemonEvolution key={index} pokemon={evolution.pokemon} ImagesUrls={evolution.ImagesUrls} isShiny={showShiny} index={index} /> 
                                    {index+1!=evolutionChain.completeEvolvingChain.length?(<TiArrowRightThick className="text-black" size={35}/>):(<></>)}
                                </div>
                    })) : (<></>)}
                </div>
            </div>


        </>) :
            (<></>)
        }

    </>);

}