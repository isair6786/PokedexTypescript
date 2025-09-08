export interface IPokemon {
  cries: string
  abilities: AbilitesMap[]
  image: SpriteMap
  name: string
  pokedexNumber: number
  types: PokemonType[]
  weight: number
  genera: string,
  descriptionPokemon: string
  height: number
}
export interface IEvolutionChain {
  completeEvolvingChain :ChainEvolution[]
}

export interface ChainEvolution {
  evolution_details?: EvolutionDetailMap[]
  pokemon: string
  ImagesUrls: SpriteMap
  isShiny?:boolean
  index?:number
}
 interface SpriteMap {
  [key: string]: string | null;
}
 interface EvolutionDetailMap {
  [key: string]: string | null;
}
 interface AbilitesMap {
  [key: string]: string | boolean | null;
}

export type PokemonType =
  | "grass"
  | "poison"
  | "fire"
  | "water"
  | "electric"
  | "bug"
  | "normal"
  | "ground"
  | "fairy"
  | "flying"
  | "psychic"
  | "fighting"
  | "rock"
  | "ghost"
  | "ice"
  | "dragon"
  | "dark"
  | "steel";

export type TPokemonTypeColors = Record<PokemonType, string>;
export const pokemonTypeColors: TPokemonTypeColors = {
  grass:    "shadow border-1  bg-gradient-to-b from-green-400  via-green-600 to-green-400 font-bold pokemonType  ",
  poison:   "shadow border-1  bg-gradient-to-b from-purple-400  via-purple-600 to-purple-400  font-bold pokemonType",
  fire:     "shadow border-1  bg-gradient-to-b from-red-400  via-red-600 to-red-400  pokemonType",
  water:    "shadow border-1  bg-gradient-to-b from-blue-400  via-blue-600 to-blue-400  font-bold pokemonType",
  electric: "shadow border-1  bg-gradient-to-b from-yellow-400  via-yellow-600 to-yellow-400  font-bold pokemonType",
  bug:      "shadow border-1  bg-gradient-to-b from-lime-400  via-lime-600 to-lime-400 font-bold pokemonType",
  normal:   "shadow border-1  bg-gradient-to-b from-gray-400  via-gray-600 to-gray-400  pokemonType",
  ground:   "shadow border-1  bg-gradient-to-b from-yellow-400  via-yellow-600 to-yellow-400   font-bold pokemonType",
  fairy:    "shadow border-1  bg-gradient-to-b from-pink-400  via-pink-600 to-pink-400 font-bold pokemonType",
  flying:   "shadow border-1  bg-gradient-to-b from-sky-400  via-sky-600 to-sky-400  font-bold pokemonType",
  psychic:  "shadow border-1  bg-gradient-to-b from-pink-400  via-pink-600 to-pink-400  font-bold pokemonType",
  fighting: "shadow border-1  bg-gradient-to-b from-orange-400  via-orange-600 to-orange-400   font-bold pokemonType",
  rock:     "shadow border-1  bg-gradient-to-b from-stone-400  via-stone-600 to-stone-400  font-bold pokemonType",
  ghost:    "shadow border-1  bg-gradient-to-b from-indigo-400  via-indigo-600 to-indigo-400   font-bold pokemonType",
  ice:      "shadow border-1  bg-gradient-to-b from-cyan-400  via-cyan-600 to-cyan-400  font-bold pokemonType",
  dragon:   "shadow border-1  bg-gradient-to-b from-purple-400  via-purple-600 to-purple-400   font-bold pokemonType",
  dark:     "shadow border-1  bg-gradient-to-b from-gray-400  via-gray-600 to-gray-400  font-bold pokemonType",
  steel:    "shadow border-1  bg-gradient-to-b from-slate-400  via-slate-600 to-slate-400  font-bold pokemonType",
};
