import { useNavigate } from "react-router-dom";
import { login } from "../../../api/auth-api";
import { useLogin } from "../../../hooks/useAuth";
import { useForm } from "../../../hooks/useForm";
import LoginFormProps from "../../../types/LoginFormProps";

const initialValues = {
    email: "",
    password: "",
};

export default function Login() {
    const login = useLogin();
    const navigate = useNavigate();
    const loginHandler = async ({ email, password }: LoginFormProps) => {
        try {
            await login(email, password);
            navigate("/");
        } catch (error) {
            const err = error as Error;
            console.log(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        loginHandler
    );
    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                        value={values.email}
                        onChange={changeHandler}
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}
