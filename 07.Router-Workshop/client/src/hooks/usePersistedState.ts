import { useState } from "react";
import AuthState from "../types/AuthState";

export default function usePersistedState<T>(key:string, initialState: T) {
    const [state, setState] = useState<T>(() => {
        const persistedAuth = localStorage.getItem(key);

        if(!persistedAuth){
            return typeof initialState === 'function'
            ? initialState()
            : initialState;
        }

        const authData = JSON.parse(persistedAuth);

        return authData;
    });

    const updateState = (value: T) => {
        const newState = typeof value === 'function'
        ? value(state) 
        : value;

        localStorage.setItem(key, JSON.stringify(value));
        
         setState(newState);
    }
    return [state, updateState];
}
