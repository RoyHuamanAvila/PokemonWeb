import { configureStore } from '@reduxjs/toolkit'
import pokedexReducers from '../features/pokedex/pokedexSlice'
import boxReducers from '../features/box/boxSlice'

export const store = configureStore({
  reducer: {
    pokedex: pokedexReducers,
    box: boxReducers
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
