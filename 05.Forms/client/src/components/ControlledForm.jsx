import { useState, useEffect, useRef } from "react";
import { baseUrl } from "../constants";

export default function ControlledForm() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    age: "",
    bio: "",
    occupation: "it",
    sex: 'm',
    password: "",
  });

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
    setFormValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.type === 'checkbox'
        ? e.target.checked
        : e.target.value
    }));
  };

  return (
    <>
      <h1>Controlled form</h1>

      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            ref={inputRef}
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
          <label htmlFor="bio">Bio</label>
          <textarea
            name="bio"
            id="bio"
            value={formValues.bio}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="occupation">Occupation</label>
          <select
            name="occupation"
            id="occupation"
            value={formValues.occupation}
            onChange={changeHandler}
          >
            <option value="it">IT</option>
            <option value="teacher">Teacher</option>
            <option value="accountant">Accountant</option>
          </select>
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
          <label htmlFor="sex-m">Man</label>
          <input
            type="radio"
            name="sex"
            id="sex-m"
            value="m" 
            checked={formValues.sex === 'm'}
            onChange={changeHandler}
          />
          <label htmlFor="sex-f">Female</label>
          <input
            type="radio"
            name="sex"
            id="sex-f"
            value="f"
            checked={formValues.sex === 'f'}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="football">Football</label>
          <input
            type="checkbox"
            name="football"
            id="football"
            value={formValues.football}
            onChange={changeHandler}
          />
          
          <label htmlFor="basketball">Basketball</label>
          <input
            type="checkbox"
            name="basketball"
            id="basketball"
            value={formValues.basketball}
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
