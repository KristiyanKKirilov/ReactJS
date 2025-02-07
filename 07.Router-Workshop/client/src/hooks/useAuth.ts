import { ErrorInfo } from 'react';
import {login} from '../api/auth-api';

export const useLogin = () => {
    const loginHandler = async (email: string, password: string): Promise<void> => {
        try {
            const result = await login(email, password)
            console.log(result);
        } catch (error: unknown) {
            const err = error as Error;
            console.log(err.message);
        }
    }   
    
    return loginHandler;
}
