import axios from "axios";

export const ApiClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    withCredentials: true,
    timeout: 2000,
});
