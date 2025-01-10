import { useState, useEffect } from "react";
import { baseUrl } from "../constants";

export default function ControlledForm() {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    age: '',
    password: ''
  });

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${baseUrl}/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a`
      );
      const profile = await response.json();

    //   setFormValues(profile.username);
    })();
  }, []);

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    setFormValues(oldValues => ({
        ...oldValues, 
        [e.target.name]: e.target.value
    }))
  };


  return (
    <>
      <h1>Controlled form</h1>

      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="John Doe"
            value={formValues.username}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={formValues.age}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={changeHandler}
          />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </>
  );
}
