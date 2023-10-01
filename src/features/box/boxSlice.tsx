import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Box, Pokemon } from "../../interfaces";
import uniqid from 'uniqid';
import { toast } from "sonner";
import Toast from "../../components/Toast/Toast";

const initialState: Box = {
    slots: []
}

export const boxSlice = createSlice({
    name: 'Box',
    initialState,
    reducers: {
        createBox: (state) => {
            for (let i = 0; i < 30; i++) {
                if (state.slots.length < 30) state.slots.push({ index: i, pokemon: null })
            }
        },
        addToBox: (state, action: PayloadAction<Pokemon>) => {
            toast(<Toast pokemon_name={action.payload.name} />);
            for (let i = 0; i < state.slots.length; i++) {
                if (!state.slots[i].pokemon) {
                    state.slots[i].pokemon = { ...action.payload, idCaptured: uniqid(), box: { box: 'Box 1', slot: i } };
                    break;
                }
            }
        },
        deleteToBox: (state, action: PayloadAction<number>) => {
            const validate = confirm('Are you sure about this?');
            if (validate) state.slots.splice(action.payload, 1);
        },
        changeSlot: (state, action: PayloadAction<{ current: number, destiny: number, pokemon: Pokemon }>) => {
            const { current, destiny, pokemon } = action.payload;
            if (current === destiny) return
            if (state.slots[destiny].pokemon) return
            state.slots[destiny].pokemon = { ...pokemon, box: { box: 'Box 1', slot: destiny } }
            state.slots[current].pokemon = null
        }
    }
})

export const { createBox, addToBox, deleteToBox, changeSlot } = boxSlice.actions;
export default boxSlice.reducer; 
