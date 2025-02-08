export default interface AuthContextType {
    email: string,
    accessToken: string,
    isAuthenticated: boolean,
    changeAuthState: Function
}
