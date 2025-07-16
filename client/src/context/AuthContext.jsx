import { jwtDecode } from "jwt-decode";
import { createContext,  useContext,  useMemo, useState } from "react";

//exporting hooks leads to fast refresh warning which is a feature of react..
//so avoid exporting hooks
//create custom hooks and export it

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const[token, setToken] = useState(()=> localStorage.getItem('token'));

    const login = (token)=>{
        setToken(token);
        localStorage.setItem("token",token);
    };

    //to avoid decoding of the token to get the id on every render.. we can use useMemo hook
    //useMemo only calculates if there is a change in the the token(base value)..
    //simple

    const user = useMemo(()=>{
        try {
             return token ? jwtDecode(token): null;
        } catch (err) {
            console.error(err);
            return null;
        }
    },[token]);

    return(
    <AuthContext.Provider value={{token,login,user}}>
        {children}
    </AuthContext.Provider>

 );
}

export const useAuth = ()=>{
    return useContext(AuthContext);
}


 