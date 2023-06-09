import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: number = 1;

const stepSlice = createSlice({
    name: "step",
    initialState,
    reducers: {
        stepReceved: (state, action: PayloadAction<number>) => {
            return state = action.payload
        },
        stepIncrease: (state) => {
            return state + 1;
        },
        stepDecrease: (state) => {
            return state - 1;
        }
    }
});

const { reducer: stepReducer, actions } = stepSlice;
export const { stepReceved, stepIncrease, stepDecrease } = actions;

export default stepReducer;

