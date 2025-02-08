import { AUTH_BASE_URL } from '../constants';
import AuthState from '../types/AuthState';
import {get, post, put, del} from './requester';

export const login = async (email: string, password: string): Promise<AuthState> => {
    const authData: AuthState = await post(`${AUTH_BASE_URL}/login`, {email, password});
    return authData;
}
