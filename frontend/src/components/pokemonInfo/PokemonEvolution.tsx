import { ChainEvolution } from "../../interfaces/IPokemonData";

export default function PokemonEvolution({ pokemon, ImagesUrls, isShiny, index }: ChainEvolution) {

    return (<>
        <div className="flex flex-col items-center ml-5 h-35 ">
            <div className="h-full flex items-end">
                <img className="mt-auto " width={index ? index < 0 ? 50 : index < 2 ? 75 : 110 : 50} src={!isShiny ? ImagesUrls.front_default || '' : ImagesUrls.front_shiny || ''} alt="" />
            </div>
            <p className="text-black mt-auto ">{pokemon}</p>
        </div>
    </>)
}