import { jwtDecode } from "jwt-decode";
import { createContext,  useContext,  useEffect,  useMemo, useState } from "react";

//exporting hooks leads to fast refresh warning which is a feature of react..
//so avoid exporting hooks
//create custom hooks and export it

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const[accessToken, setAccessToken] = useState(null);

    useEffect(()=>{
        const token = localStorage.getItem('accessToken');
        if(token){
            setAccessToken(token);
        }
    },[]);

    const login = (accessToken)=>{
        setAccessToken(accessToken);
        localStorage.setItem("accessToken",accessToken);
    };

    //to avoid decoding of the accessToken to get the id on every render.. we can use useMemo hook
    //useMemo only calculates if there is a change in the the accessToken(base value)..
    //simple

    const user = useMemo(()=>{
        try {
             return accessToken ? jwtDecode(accessToken): null;
        } catch (err) {
            console.error(err);
            return null;
        }
    },[accessToken]);

    return(
    <AuthContext.Provider value={{accessToken,login,user, isAuthenticated:!!accessToken}}>
        {children}
    </AuthContext.Provider>

 );
}

export const useAuth = ()=>{
    return useContext(AuthContext);
}


 