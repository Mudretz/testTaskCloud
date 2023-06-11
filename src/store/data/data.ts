import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAdvantagesData, IAuthData, ICreateUserData, IDataState } from "./type.data";

const initialState: IDataState = {
    authData: {
        phone: "",
        email: ""
    },
    createUserData: {
        nickname: "",
        name: "",
        sername: "",
        sex: {
            value: "",
            label: ""
        }
    },
    advantagesData: {
        advantages: [
            { advantage: "" },
            { advantage: "" },
            { advantage: "" }
        ],
        checkboxes: [],
        radioOption: ""
    },
    aboutMeData: ""
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        authReceved: (state, action: PayloadAction<IAuthData>) => {
            state.authData = action.payload;
        },
        createUserReceived: (state, action: PayloadAction<ICreateUserData>) => {
            state.createUserData = action.payload;
        },
        advantagesReceived: (state, action: PayloadAction<IAdvantagesData>) => {
            state.advantagesData = action.payload;
        },
        aboutMeReceived: (state, action: PayloadAction<string>) => {
            state.aboutMeData = action.payload;
        },
        clearStateData: (state) => {
            Object.assign(state, initialState);
        }
    }
});

const { reducer: dataReducer, actions } = dataSlice;
export const {
    authReceved,
    createUserReceived,
    advantagesReceived,
    aboutMeReceived,
    clearStateData 
} = actions;

export default dataReducer;

