import { useNavigate } from "react-router-dom";
import { useRegister } from "../../../hooks/useAuth";
import { useForm } from "../../../hooks/useForm";
import RegisterFormProps from "../../../types/RegisterFormProps";
import { useState } from "react";
import styles from './Register.module.css';

const initialValues = {
    email: "",
    password: "",
    rePassword: "",
};

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async ({
        email,
        password,
        rePassword,
    }: RegisterFormProps) => {

        if (password !== rePassword) {
            return setError(oldState => 'Passwords differ!');
        }

        try {
            await register(email, password);
            navigate("/");
        } catch (error) {
            const err = error as Error;
            setError(err.message);
            console.error(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        registerHandler
    );
    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        value={values.email}
                        onChange={changeHandler}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        value={values.password}
                        onChange={changeHandler}
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="rePassword"
                        id="rePassword"
                        value={values.rePassword}
                        onChange={changeHandler}
                    />

                    {error && (
                    <p className={styles['error']}>
                        <span>{error}</span>
                    </p>)}

                    <input
                        className="btn submit"
                        type="submit"
                        value="Register"
                    />

                    <p className="field">
                        <span>
                            If you already have profile click{" "}
                            <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}
