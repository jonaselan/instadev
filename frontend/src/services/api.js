import axios from 'axios';
import { getToken } from "./auth";

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1'
});

// verify if token was save in localstorage before the
// request actually happen using "interceptors" from axios
api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;