export interface IDataState {
    authData: IAuthData,
    createUserData: ICreateUserData,
    advantagesData: IAdvantagesData,
    aboutMeData: string
};

export interface IAuthData {
    phone: string,
    email: string
};

export interface ICreateUserData {
    nickname: string,
    name: string,
    sername: string,
    sex: ISexOption | undefined
};

export interface ISexOption {
    value: string;
    label: string;
};

export interface IAdvantagesInputs {
    [key: string]: string
}

export interface IAdvantagesData {
    advantages: IAdvantagesInputs[],
    checkboxes: Array<number>,
    radioOption: string
};