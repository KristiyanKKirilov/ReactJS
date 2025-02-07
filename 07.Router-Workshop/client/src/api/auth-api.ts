import { AUTH_BASE_URL } from '../constants';
import {get, post, put, del} from './requester';

/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
export const login = async (email: string, password: string) => {
    const authData = await post(`${AUTH_BASE_URL}/login`, {email, password});
    return authData;
}
