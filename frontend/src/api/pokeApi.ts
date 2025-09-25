import { isAxiosError } from "axios";
import { api } from "../config/axios"; 
import { IEvolutionChain, IPokemon } from "../interfaces/IPokemonData";

export async function getPokemonById(id:number){
    
    try {
        
        const { data } = await api.get<IPokemon>(`pokemon/getPokemonById?idPokemon=${id}`) 
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.message)
        }
    }
}
export async function getEvolvingChainbyPokemonId(id:number){
    
    try {

        const { data } = await api.get<IEvolutionChain>(`/pokemon/getEvolvingChainbyPokemonId?idPokemon=${id}`) 
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.message)
        }
    }
}
export async function getAllPokemon(){
    
    try {

        const { data } = await api.get<IPokemon[]>(`pokemon/getAllPokemon`) 
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.message)
        }
      
    }
}