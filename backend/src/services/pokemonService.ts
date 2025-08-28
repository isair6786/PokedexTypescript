import { httpPokeApi } from "../utils/pokeApiHttp"


export const getPokemonById = async (id:number) => {
    try {
        return await httpPokeApi.get(`/pokemon/${id}`)
    } catch (error ) {
        console.log(error.message)
        return null;
    }
    
}
export const getPokemonByName = async (pokemonName:string) => {
    try {
        return await httpPokeApi.get(`/pokemon/${pokemonName}`)
    } catch (error ) {
        console.log(error.message)
        return null;
    }
    
}
export const getAllPokemonById = async () => {
    return await httpPokeApi.get(`pokemon?limit=10000`)
}
export const getEvolvingChainById = async (idChainEvolution:number) => {
    try {
        return await httpPokeApi.get(`/evolution-chain/${idChainEvolution}`)
    } catch (error ) {
        console.log(error.message)
        return null;
    }
    
}
export const getUrlChainEvolution = async (id:number) => {
    try {
        const { name , "evolution_chain": { url :evolutionChain } } = await httpPokeApi.get(`/pokemon-species/${id}`) as any
        if( name && evolutionChain ){
            
            let rawUrl = evolutionChain.split('/')
            let idChainEvolution = Number.parseInt(rawUrl[rawUrl.length - 2])
            return {
                name,
                idChainEvolution
            }
        }
        return {};
    } catch (error ) {
        console.log(error.message)
        return null;
    }
    
}