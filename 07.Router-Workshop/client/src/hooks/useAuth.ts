import { ErrorInfo, useContext } from 'react';
import {login} from '../api/auth-api';
import { AuthContext } from '../contexts/AuthContext';

export const useLogin = () => {
    const {} = useContext(AuthContext);
    const loginHandler = async (email: string, password: string): Promise<void> => {        
            const result = await login(email, password)
            console.log(result);
    }   
    
    return loginHandler;
}
