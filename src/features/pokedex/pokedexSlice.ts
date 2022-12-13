import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { PokedexData, Pokemon, PokemonEspecie } from "../../interfaces";

export const fetchPokeSelect = createAsyncThunk(
    'pokedex/fetchPokeDescription',
    async (pokemon: Pokemon) => {
        const response = await axios.get(pokemon.species.url);
        const data : PokemonEspecie = await response.data;
        console.log(data)
        return data;
    }    
)

interface Pokedex{
    pokedexData?: PokedexData;
    pokeSelected?: Pokemon;
    pokesInPokedex?: Pokemon[];
}

const initialState : Pokedex = {}

export const pokedexSlice = createSlice({
    name: 'Pokedex',
    initialState,
    reducers: {
        enterData: (state, action: PayloadAction<PokedexData>) => {
            state.pokedexData = action.payload;
        },
        enterPokemons: (state, action: PayloadAction<Pokemon[]>) => {
            state.pokesInPokedex = action.payload;
        },
        selectPokemon: (state, action: PayloadAction<Pokemon>) => {
            state.pokeSelected = action.payload;
            
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPokeSelect.fulfilled, (state, action: PayloadAction<PokemonEspecie>) => {
            const index = state.pokesInPokedex?.findIndex(poke => poke.name === action.payload.name) || 0;
            
            if(index >= 0 && state.pokesInPokedex){
                const findPoke = state.pokesInPokedex[index].description;
                console.log(findPoke)
                state.pokesInPokedex[index].description = action.payload.flavor_text_entries[0].flavor_text.replace("\f","");
                state.pokeSelected = state.pokesInPokedex[index];
            }
        })
    }
})

export const {enterData, enterPokemons, selectPokemon} = pokedexSlice.actions;
export default pokedexSlice.reducer
