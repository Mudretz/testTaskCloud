import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IStepState = {
    entities: 1
};

const stepSlice = createSlice({
    name: "step",
    initialState,
    reducers: {
        stepReceived: (state, action: PayloadAction<number>) => {
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
export const { stepReceived, stepIncrease, stepDecrease } = actions;

export default stepReducer;

