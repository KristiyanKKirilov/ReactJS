import { ErrorInfo } from 'react';
import {login} from '../api/auth-api';

export const useLogin = () => {
    const loginHandler = async (email: string, password: string): Promise<void> => {        
            const result = await login(email, password)
            console.log(result);
    }   
    
    return loginHandler;
}
