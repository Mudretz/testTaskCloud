import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPostDataBody, IPostDataResponse } from "./apiReduxQuery.types";

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