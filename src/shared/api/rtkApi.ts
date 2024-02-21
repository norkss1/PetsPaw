import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            if (__TOKEN__) {
                headers.set('x-api-key', __TOKEN__);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});
