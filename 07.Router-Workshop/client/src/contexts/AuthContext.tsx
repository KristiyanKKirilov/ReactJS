import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from "react";
import AuthContextType from "../types/AuthContextType";
import AuthState from "../types/AuthState";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext<AuthContextType | null>(null);
const initialType: AuthState = {
    _id: "",
    accessToken: "",
    email: "",
    username: "",
};

export function AuthContextProvider(props: any) {
    const [authState, setAuthState] = usePersistedState<AuthState | null>(
        "auth",
        initialType
    ) as [AuthState | null, Dispatch<SetStateAction<AuthState | null>>];

    const changeAuthState = (state: AuthState) => {
        // TODO: Fix by persisted authState implementation
        localStorage.setItem("accessToken", state.accessToken);
        setAuthState(state);
        console.log(state);
    };

    const logout = () => {
        setAuthState(null);
    }

    const contextData: AuthContextType = {
        userId: authState?._id || "",
        email: authState?.email || "",
        accessToken: authState?.accessToken || "",
        isAuthenticated: !!authState?.email,
        changeAuthState,
        logout
    };

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    const authData = useContext(AuthContext);
    return authData;
}
