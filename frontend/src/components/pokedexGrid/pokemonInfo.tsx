import { IPokemonInfo, pokemonTypeColors, pokemonTextColorByType} from "../../interfaces/IPokemonData";

export default function PokemonInfo({ name, pokedexNumber, types, image,height ,isSpecial}: IPokemonInfo) {

    return (
        <div className={`h-full text-center pokemonType`}>
            <p className={`capitalize font-bold mb-5 text-6xl ${pokemonTextColorByType[types[0]]} `}>{pokedexNumber<10?'#000'+pokedexNumber:pokedexNumber<99?'#00'+pokedexNumber:pokedexNumber<999?'#0'+pokedexNumber:pokedexNumber}</p>
            <div className={`flex justify-center w-full ${!isSpecial? height < 8 ? 'w-17 -mt-5' : height < 16 ? 'w-25 -mt-7' : 'w-40 -mt-9':'w-50'}`}>
                {image?.front_default ? <img width='h-full ' src={image?.front_default} alt="" /> : <></>}
            </div>
            <div className="">
                <p className="capitalize font-bold text-black text-2xl">{name}</p>

                <div className="flex flex-row max-w-full justify-center">
                    {types.map((type, index) => {
                        return (<p className={`${pokemonTypeColors[type]} text-white mt-5 ml-1 px-4 pb-1 pt-1 rounded-xl`} key={index}>{type.charAt(0).toUpperCase() + type.slice(1)}</p>)
                    })}
                </div>
            </div>
        </div>

    )

}