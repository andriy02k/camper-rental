import axios from 'axios'

const API_KEY = '64389f8c9597f749526cf3aa862ff846';

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: API_KEY,
    },
});