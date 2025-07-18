import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoute = ({children})=>{
    const {isAuthenticated} = useAuth();
    return isAuthenticated ? <Navigate to='/' repalce/>: children;
}

export default PublicRoute;