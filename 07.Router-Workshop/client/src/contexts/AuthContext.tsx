import { createContext, ReactNode, useContext, useState } from "react";
import AuthContextType from "../types/AuthContextType";
import AuthState from "../types/AuthState";

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthContextProvider(props:any) {
    const [authState, setAuthState] = useState<AuthState>();

    const changeAuthState = (state: AuthState) => {
       // TODO: Fix by persisted authState implementation
       localStorage.setItem('accessToken', state.accessToken);
       setAuthState(state);
    }
 
    const contextData: AuthContextType = {
       userId: authState?._id || '',
       email: authState?.email || '',
       accessToken: authState?.accessToken || '',
       isAuthenticated: !!authState?.email,
       changeAuthState
    } 

   return (
    <AuthContext.Provider value={contextData}>
        {props.children}
    </AuthContext.Provider>
   )
}

export function useAuthContext () {
   const authData = useContext(AuthContext);
   return authData;
}
