import mongoose, {  Document, Schema } from "mongoose";

interface IPokemonSeaches extends Document{
    userId: String,
    pokemonId: String,
    addedAt: Date
}

const PokemonSeachesSchema = new Schema({
    pokemonId:{
        type: String,
        required: true,
        
    },
    userId: {
        type : String,
        required:true,
        trim:true
    },
    addedAt: {
        type : Date,
        default: new Date(),
        trim:true,
    }
})

const PokemonSeaches = mongoose.model<IPokemonSeaches>('PokemonSeaches',PokemonSeachesSchema);
export default PokemonSeaches