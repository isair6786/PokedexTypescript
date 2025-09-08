
export interface IPokemon {
    cries: string
    abilities: string[]
    image: SpriteMap
    name: string
    pokedexNumber: number
    types: string[]
    weight: number
    genera:string,
    descriptionPokemon:string
    height:number
}
export interface SpriteMap {
    [key: string]: string | null;
}

