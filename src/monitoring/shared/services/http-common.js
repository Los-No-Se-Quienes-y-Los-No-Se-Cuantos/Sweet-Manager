import axios from "axios";

const API_BASE_URL = 'https://sweetmanager.ryzeon.me/';

axios.defaults.withCredentials = true;

const http = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'content-type': 'application/json'}
});

export default http;