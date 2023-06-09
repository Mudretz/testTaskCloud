import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IPostDataBody {
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
            query: () => ({
                url: "bootcamp/frontend",
                method: "POST",
            })
        })
    })
});

export const { usePostDataMutation } = apiReduxQuery;