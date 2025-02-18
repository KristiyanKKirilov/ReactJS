import AuthState from "../types/AuthState";

export const getAccessToken = (): string => {
    const authJSON = localStorage.getItem('auth');

    if(!authJSON){
        return '';
    }
    
    if(JSON.parse(authJSON) === null){
        return '';
    }

    const authData: AuthState = JSON.parse(authJSON);
    return authData.accessToken;
}
