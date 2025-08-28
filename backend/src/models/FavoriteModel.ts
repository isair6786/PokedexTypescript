import mongoose, {  Document, Schema } from "mongoose";

interface IFavoritesPokemon extends Document{
    userId: String,
    pokemonId: String,
    addedAt: Date
}

const favoritesPokemonSchema = new Schema({
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

const FavoritesPokemon = mongoose.model<IFavoritesPokemon>('FavoritesPokemon',favoritesPokemonSchema);
export default FavoritesPokemon