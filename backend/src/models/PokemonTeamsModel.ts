import mongoose, {  Document, Schema } from "mongoose";

interface IPokemonTeams extends Document{
    userId: String,
    pokemonId: String,
    addedAt: Date
}

const pokemonTeamsSchema = new Schema({
    pokemons:{
        type: [String],
        required: true,
        validate: [arr => arr.length <= 6, '{PATH} exceeds the limit of 6']
    },
    userId: {
        type : String,
        required:true,
        trim:true
    },
    updatedAt: {
        type : Date,
        default: new Date(),
        trim:true,
    }
})

const PokemonTeams = mongoose.model<IPokemonTeams>('PokemonTeams',pokemonTeamsSchema);
export default PokemonTeams