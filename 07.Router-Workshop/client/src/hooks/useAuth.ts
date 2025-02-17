import {login, register} from '../api/auth-api';
import { useAuthContext } from '../contexts/AuthContext';
import AuthState from '../types/AuthState';

export const useLogin = () => {
    const context = useAuthContext();

    if(!context){
        throw new Error("useLogin must be used within an AuthContextProvider");
    }
    const {changeAuthState} = context;
    
    const loginHandler = async (email: string, password: string): Promise<AuthState> => {        
        const result: AuthState = await login(email, password);
        changeAuthState(result);
        return result;
    }   
    
    return loginHandler;
}

export const useRegister = () =>{
    const context = useAuthContext();

    if(!context){
        throw new Error("useRegister must be used within an AuthContextProvider");
    }

    const {changeAuthState} = context;

    const registerHandler = async (email: string, password: string): Promise<AuthState> => {
        const result = await register(email, password);
        changeAuthState(result);
        return result;
    }

    return registerHandler;
}
