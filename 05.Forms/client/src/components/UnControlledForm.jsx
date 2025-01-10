import {useState} from 'react';

export default function UnControlledForm() {
    const [user, setUser] = useState({});
    
    const formSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        setUser({
            username: formData.get('username'),
            password: formData.get('password')
        });
    }

    const logoutHandler = () => {
        setUser({});
    }

    const usernameInputHandler = (e) => {
        console.log(e.target.value);
    }

    return (
        <>
        <h1>UnControlled form</h1>       

        {user.username 
        ? <p>Hello, {user.username}! <button onClick={logoutHandler}>Logout</button></p>
        :( 
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" onInput={usernameInputHandler}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>)}
           
        </>
    );
}
