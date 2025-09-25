import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../slices/pokemonSlice";


// Aquí guardamos todos los "slices"
export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer, // añadimos el reducer de Pokémon
  },
});

// Tipos para TypeScript (opcional pero recomendado)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
