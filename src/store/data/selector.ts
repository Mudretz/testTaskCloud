import { RootState } from "../store";
import { IAdvantagesData, IAuthData, ICreateUserData } from "./type.data";

export const getAuthData = (state: RootState): IAuthData => {
    return state.data.authData;
};

export const getCreateUserData = (state: RootState): ICreateUserData => {
    return state.data.createUserData;
};

export const getAdvantagesData = (state: RootState): IAdvantagesData => {
    return state.data.advantagesData;
};