import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thecatapi.com/v1/',
        prepareHeaders: (headers) => {
            const token = 'live_ZoRUMrexLxDWz3IvkhRyILgL9mqpizgVlsnXsOdl1cruf0p3WiA0Pka8l35da6qg';
            if (token) {
                headers.set('x-api-key', token);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});
