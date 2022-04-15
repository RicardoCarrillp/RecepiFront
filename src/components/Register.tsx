/* eslint-disable no-console */
import axios from 'axios';
import { useState, SyntheticEvent } from 'react';
import { Form, Button } from 'react-bootstrap'
import { RouteComponentProps } from 'react-router';
import FormContainer from './FormContainer'

interface props{
  history:RouteComponentProps['history']
}

const Register = ({history}:props) => {

  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  

  const submitHandler=(e:SyntheticEvent)=>{
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(email,password);

    axios.post('https://recepiv1.herokuapp.com/register', {
      email: email,
      username: username,
      pass: password
    })
    .then((response) => {
      console.log(response);
      console.log(response.data);
    }, (error) => {
      console.log(error);
    });

    history.push('/login')
    
    
  }
  return (
    <FormContainer>
    <h1>Sing Up</h1>
    <Form onSubmit={submitHandler}>
    <Form.Group className="my-3" controlId="username">
      <Form.Label>Name</Form.Label>
      <Form.Control required type="text" placeholder="Ingresa tu Nombre"
          value={username}
          onChange={e => setUsername(e.target.value)} />

    </Form.Group>
    <Form.Group className="my-3" controlId="email">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" required placeholder="Ingresa tu email" 
          value={email}
          onChange={e => setEmail(e.target.value)}/>

    </Form.Group>
  
    <Form.Group className="my-3" controlId="password">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" required placeholder="Contraseña" 
          value={password}
          onChange={e => setPassword(e.target.value)}/>
    </Form.Group>

    <Button variant="primary" type="submit" disabled={!email || !password || !username}>
      Submit
    </Button>
  </Form>
  </FormContainer>  )
}

export default Register