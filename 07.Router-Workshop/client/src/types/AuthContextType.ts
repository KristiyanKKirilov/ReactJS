import AuthState from "./AuthState";

export default interface AuthContextType {
    userId: string;
    email: string,
    accessToken: string,
    isAuthenticated: boolean,
    changeAuthState: (state: AuthState) => void
}
