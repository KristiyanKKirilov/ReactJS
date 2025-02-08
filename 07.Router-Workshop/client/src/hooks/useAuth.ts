import { ErrorInfo, useContext } from 'react';
import {login} from '../api/auth-api';
import { AuthContext } from '../contexts/AuthContext';
import AuthState from '../types/AuthState';

export const useLogin = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useLogin must be used within an AuthContextProvider");
    }

    const {changeAuthState} = context;
    
    const loginHandler = async (email: string, password: string): Promise<void> => {        
        const result: AuthState = await login(email, password)
        console.log(result);
        changeAuthState(result);
    }   
    
    return loginHandler;
}
