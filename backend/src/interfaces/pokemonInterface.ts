
export interface IPokemon {
    cries: string
    abilities: [string]
    heigth: number
    image: SpriteMap
    name: string
    pokedexNumber: number
    types: [string]
    weight: number
}
export interface SpriteMap {
    [key: string]: string | null;
}
