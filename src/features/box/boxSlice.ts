import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Box, Pokemon } from "../../interfaces";
import uniqid from 'uniqid';

const initialState: Box = {
    pokemons: []
}

export const boxSlice = createSlice({
    name: 'Box',
    initialState,
    reducers: {
        addToBox: (state, action: PayloadAction<Pokemon>) => {
            if(state.pokemons.length < 30){
                state.pokemons.push({...action.payload, idCaptured: uniqid()});
            }
        },
        deleteToBox: (state, action: PayloadAction<number>) => {
            const validate = confirm('Are you sure about this?');
            if(validate) state.pokemons.splice(action.payload,1);
        }
    }
})

export const {addToBox, deleteToBox} = boxSlice.actions;
export default boxSlice.reducer; 
