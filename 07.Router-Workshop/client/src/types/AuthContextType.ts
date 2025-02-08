import AuthState from "./AuthState";

export default interface AuthContextType {
    email: string,
    accessToken: string,
    isAuthenticated: boolean,
    changeAuthState: (state: AuthState) => void
}
