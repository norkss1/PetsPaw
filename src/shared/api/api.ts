import axios from 'axios';

export const $api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/',
});

$api.interceptors.request.use((config) => config);
