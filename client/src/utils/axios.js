import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
// Create Axios instance with base URL from env
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  // optional: use if you're sending cookies/auth
});
//global auth header..


api.interceptors.request.use((config)=>{
  const token = localStorage.getItem('accessToken');
  if(token){
    try{
      const currdate = new Date();
      const decodedToken = jwtDecode(token);
      if(decodedToken.exp * 1000 < currdate.getTime()){
        localStorage.removeItem('accessToken');
        window.location.reload();
      }else{
        config.headers.Authorization = `Bearer ${token}`
      }
    }catch(err){
      console.log(err);
    }
   
  }
  return config;
},(error)=>Promise.reject(error))


export default api;
