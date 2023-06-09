import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IStepState = {
    entities: 1
}

const stepSlice = createSlice({
    name: "step",
    initialState,
    reducers: {
        stepReceved: (state, action: PayloadAction<number>) => {
            state.entities = action.payload
        },
        stepIncrease: (state) => {
            state.entities += 1;
        },
        stepDecrease: (state) => {
            state.entities -= 1;
        }
    }
});

const { reducer: stepReducer, actions } = stepSlice;
export const { stepReceved, stepIncrease, stepDecrease } = actions;

export default stepReducer;

