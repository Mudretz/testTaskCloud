export interface IPostDataBody {
    phone: string,
    email: string,
    nickname: string,
    name: string,
    serName: string,
    sex: string,
    advantages: string[],
    checkboxes: number[],
    radioOption: number,
    aboutMe: string
};

export interface IPostDataResponse {
    status: string,
    message: string
};