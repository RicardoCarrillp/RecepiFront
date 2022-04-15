/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { SyntheticEvent, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import FormContainer from './FormContainer'
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface props {
  setAuthorized:React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setAuthorized }: props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const logged=JSON.parse(localStorage.getItem('user')!)
  const history=useHistory()
  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
      
    axios.post('https://recepiv1.herokuapp.com/login', {
      email: email,
      pass: password
    })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        if (response.data === 'Email o contraseña incorrecta') {

          toast.error(response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          const User = JSON.stringify(response.data);
          toast.success('Sesión iniciada con exito!!!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          localStorage.setItem("user",User);
          localStorage.setItem("isAuth","true");
          setAuthorized(true);
          history.push("/home") ;
        }
      }, (error) => {
        console.log(error);
      });




  }
  return (
    <>
   
      <FormContainer>

        <h1>Login</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="my-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

          </Form.Group>

          <Form.Group className="my-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={!email || !password}>
            Submit
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default Login