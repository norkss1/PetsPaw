import axios from 'axios';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        'x-api-key': __TOKEN__,
    },
});

$api.interceptors.request.use((config) => config);
