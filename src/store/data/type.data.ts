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
    sex: {
        value: string,
        label: string
    }
};

export interface IAdvantagesData {
    advantages: Array<{
        [key: string]: string
    }>,
    checkboxes: Array<number>,
    radioOption: string
};