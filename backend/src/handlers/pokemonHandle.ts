import { Request, Response } from "express";
import { } from "../utils/pokeApiHttp";
import { getAllPokemonById, getEvolvingChainById, getPokemonById, getPokemonByName, getUrlChainEvolution } from "../services/pokemonService";
import { IPokemon, SpriteMap } from "../interfaces/pokemonInterface";
import { all } from "axios";
import { IResponse } from '../interfaces/responseType';

export const findPokemonById = async (req: Request, res: Response) => {

    try {
        const pokemonId: number = Number.parseInt(req.query.idPokemon.toString());
        const rawPokemonData = await getPokemonById(pokemonId) as any
        const pokemonData = await formatPokemonData(rawPokemonData)
        res.status(200).json(pokemonData)
        return;
    } catch (error) {
        let newError;
        if (error instanceof Error) {
            newError = new Error(`An error ocurred while finding pokemon ${error}`)

        } else {
            newError = new Error(`An error ocurred while finding pokemon`)

        }
        res.status(400).send(newError)
        return;
    }
}

export const getAllPokemon = async (req: Request, res: Response) => {
    try {
        let allPokemon: IPokemon[] = [];
        const chunksForPromises = 500
        const { count, results } = await getAllPokemonById() as any

        if (results) {
            const loopForLoadPromises = Math.round(count / chunksForPromises)
            for (let index = 1; index <= loopForLoadPromises; index++) {
                let from = (chunksForPromises * index) - chunksForPromises
                let to = chunksForPromises * index
                let resultToLoad = results.slice(from, to)
                let allPromises = resultToLoad.map(async ({ url }) => {
                    const idPokemon = splitPokemonId(url);
                    const rawPokemonData = await getPokemonById(idPokemon);

                    if (rawPokemonData)
                        allPokemon.push(await formatPokemonData(rawPokemonData))
                });

                await Promise.all(allPromises);
            }

        }

        res.status(200).json(allPokemon.sort((a, b) => a.pokedexNumber - b.pokedexNumber))

    } catch (error) {
        let newError;
        if (error instanceof Error) {
            newError = new Error(`An error ocurred while getting all pokemons ${error}`)

        } else {
            newError = new Error(`An error ocurred while getting all pokemons`)

        }
        res.status(400).send(newError)
        return;
    }

}
export const getEvolvingChainbyPokemonId = async (req: Request, res: Response) => {
    try {
        const pokemonId: number = Number.parseInt(req.query.idPokemon.toString());

        if (!pokemonId) {
            let response: IResponse = {
                data: [],
                isSuccess: false,
                message: "PokemonId is required "
            }
            res.status(400).json(response)
        }
        const { name: PokemonName, idChainEvolution } = await getUrlChainEvolution(pokemonId) as any
        if (!idChainEvolution) {
            let response: IResponse = {
                data: [],
                isSuccess: true,
                message: "Not Exists Evolving Chain for this Pokemon"
            }
            res.status(200).json(response)
        }
        const { chain: rawEvolvingChain } = await getEvolvingChainById(idChainEvolution) as any
        if (!rawEvolvingChain) {
            let response: IResponse = {
                data: [],
                isSuccess: true,
                message: "Not Exists Evolving Chain for this Pokemon"
            }
            res.status(200).json(response)
        }
        var chainEvolution = formatEvolvingChain(rawEvolvingChain) as any[]

        const completeEvolvingChain = await Promise.all(
            chainEvolution.map(async (pokemonDetail) => {
                const urls = await getImagesUrlbyPokemonName(pokemonDetail.pokemon);
                return {
                    ...pokemonDetail,
                    ImagesUrls:urls
                };
            })
        );
       
        res.status(200).json({
            completeEvolvingChain
        })
    } catch (error) {
        let newError;
        if (error instanceof Error) {
            newError = new Error(`An error ocurred while getting all pokemons ${error}`)

        } else {
            newError = new Error(`An error ocurred while getting all pokemons`)

        }
        res.status(400).send(newError)
        return;
    }
}

const formatEvolvingChain = (chainData: any): object[] => {
    if (!chainData?.species?.name) return [];

    formatEvolutionDetails(chainData.evolution_details)

    return [
        {
            pokemon: chainData.species.name,
            evolution_details: formatEvolutionDetails(chainData.evolution_details)
        },
        ...chainData.evolves_to.flatMap(evolution => formatEvolvingChain(evolution))
    ];
};

const getImagesUrlbyPokemonName = async (pokemonName: string) => {
    const { sprites: { versions } } = await getPokemonByName(pokemonName) as any
    const urls = versions["generation-v"]["black-white"]["animated"]
    return urls
}

const formatEvolutionDetails = (rawEvolutionDetails: any[]) => {
    let evolutionDetailsList: object[] = [];
    try {
        rawEvolutionDetails.forEach((evolutionDetail) => {

            let objEvolutionDetail = {
                trigger: evolutionDetail.trigger?.name.replace('-', ' ') || null,
                location: evolutionDetail.location?.name.replace('-', ' ') || null,
                known_move_type: evolutionDetail.known_move_type?.name.replace('-', ' ') || null,
                item: evolutionDetail.item?.name.replace('-', ' ') || null,
                gender: evolutionDetail.gender?.replace('-', ' ') || null,
                min_happiness: evolutionDetail.min_happiness || null,
                time_of_day: evolutionDetail.time_of_day || null,
            }
            evolutionDetailsList.push(cleanObject(objEvolutionDetail))
        })
    } catch (error) {
        console.log(error)
    }

    return evolutionDetailsList


}
const cleanObject = (obj: Object) => {
    for (var propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined) {
            delete obj[propName];
        }
    }
    return obj
}
const formatPokemonData = async (rawPokemonData: any) => {
    const { abilities, cries, id, name, heigth, weight, types, sprites: { versions } } = rawPokemonData
    const abilitiesArray = abilities.map((data) => { return data.ability.name })
    const typesArray = types.map(({ type }) => { return type.name })
    const imagesArray: SpriteMap = versions["generation-v"]["black-white"]["animated"]
    const pokemonData: IPokemon = {
        cries: cries.latest,
        abilities: abilitiesArray,
        heigth,
        image: imagesArray,
        name,
        pokedexNumber: id,
        types: typesArray,
        weight
    }
    return pokemonData;
}

const splitPokemonId = (url: string) => {
    const splitUrl = url.split('/')
    return Number.parseInt(splitUrl[(splitUrl.length) - 2])
}