import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Header() {
    const context = useAuthContext();

    if (!context) {
        throw new Error(
            "useRegister must be used within an AuthContextProvider"
        );
    }

    const { isAuthenticated } = context;

    return (
        <header>
            {/* <!-- Navigation --> */}
            <h1>
                <Link className="home" to="/">
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to="/games">All games</Link>
                {isAuthenticated ? (
                    <div id="user">
                        <Link to="/games/create">Create Game</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                ) : (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
