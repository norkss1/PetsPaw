import axios from 'axios';

const baseUrl = 'https://api.thecatapi.com/v1/';
const token = 'live_ZoRUMrexLxDWz3IvkhRyILgL9mqpizgVlsnXsOdl1cruf0p3WiA0Pka8l35da6qg';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        'x-api-key': token,
    },
});

$api.interceptors.request.use((config) => config);
