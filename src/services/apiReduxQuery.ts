import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IPostDataBody {
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

interface IPostDataResponse {
    status: string,
    message: string
};

export const apiReduxQuery = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.sbercloud.ru/content/v1/"}),
    endpoints: (build) => ({
        postData: build.mutation<IPostDataResponse, IPostDataBody>({
            query: (body) => ({
                url: "bootcamp/frontend",
                method: "POST",
                body
            })
        })
    })
});

export const { usePostDataMutation } = apiReduxQuery;