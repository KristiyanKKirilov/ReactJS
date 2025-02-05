import { useContext } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import UserContext from '../../contexts/UserContext';
import { useForm } from '../../hooks/useForm';
import styles from './Login.module.css';
import { useNavigate } from 'react-router';

const initialValues = {
    username: '',
    password: ''
};

function Login() {
    const {login} = useContext(UserContext);
    const navigate = useNavigate();
    
    const submitFormHandler = ({username, password}) => {
        login(username, password);
        navigate('/');
    }   
    
    const {values, changeHandler, submitHandler} = useForm(initialValues, submitFormHandler);

  return (
    <Form onSubmit={submitHandler} className={styles['form']}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="username" placeholder="Steve" value={values.username} onChange={changeHandler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={values.password} onChange={changeHandler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlPassword1">
      <Button type="submit "variant="info">Login</Button>
      </Form.Group>
    </Form>
  );
}

export default Login;
