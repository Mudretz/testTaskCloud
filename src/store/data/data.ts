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
        createUserReceved: (state, action: PayloadAction<ICreateUserData>) => {
            state.createUserData = action.payload;
        },
        advantagesReceved: (state, action: PayloadAction<IAdvantagesData>) => {
            state.advantagesData = action.payload;
        },
        aboutMeReceved: (state, action: PayloadAction<string>) => {
            state.aboutMeData = action.payload
        },
        clearStateData: (state) => {
            return state = initialState
        }
    }
});

const { reducer: dataReducer, actions } = dataSlice;
export const {
    authReceved,
    createUserReceved,
    advantagesReceved,
    aboutMeReceved,
    clearStateData 
} = actions;

export default dataReducer;

