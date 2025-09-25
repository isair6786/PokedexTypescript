import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
  idPokemon: number | null;
}

const initialState: PokemonState = {
  idPokemon: null,
};

const pokemonSlice = createSlice({
  name: "pokemon", // nombre del slice
  initialState,
  reducers: {
    setPokemonId: (state, action: PayloadAction<number>) => {
      state.idPokemon = action.payload; // guarda un id
    },
    clearPokemonId: (state) => {
      state.idPokemon = null; // limpia el id
    },
  },
});

// Exportamos las "acciones" para usarlas en componentes
export const { setPokemonId, clearPokemonId } = pokemonSlice.actions;

// Exportamos el reducer para conectarlo al store
export default pokemonSlice.reducer;
