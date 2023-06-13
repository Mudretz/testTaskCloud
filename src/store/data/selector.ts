import { RootState } from "../store";
import { IAdvantagesData, IAuthData, ICreateUserData, IDataState } from "./type.data";

export const getState = (state: RootState): IDataState => {
    return state.data
};

export const getAuthData = (state: RootState): IAuthData => {
    return state.data.authData;
};

export const getCreateUserData = (state: RootState): ICreateUserData => {
    return state.data.createUserData;
};

export const getAdvantagesData = (state: RootState): IAdvantagesData => {
    return state.data.advantagesData;
};

export const getAboutMeData = (state: RootState): string => {
    return state.data.aboutMeData;
};