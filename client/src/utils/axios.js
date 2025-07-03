import axios from 'axios';

// Create Axios instance with base URL from env
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,// optional: use if you're sending cookies/auth
});

export default api;
