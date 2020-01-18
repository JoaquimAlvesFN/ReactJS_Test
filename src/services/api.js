import axios from 'axios';

const api = axios.create({
    baseURL: 'https://radardev.herokuapp.com'
});

export default api;