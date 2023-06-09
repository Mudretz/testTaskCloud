import { RootState } from "../store";

export const getStep = (state: RootState): number => {
    return state.step;
};