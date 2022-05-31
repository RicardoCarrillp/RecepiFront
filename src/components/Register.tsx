/* eslint-disable no-console */
import axios from 'axios';
import { useState, SyntheticEvent } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap'
import { useHistory } from 'react-router';
import { toast,  } from 'react-toastify';
import FormContainer from './FormContainer'



const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);

  const history = useHistory();


  

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    setDisabled(true);
    // eslint-disable-next-line no-console
   
    axios.post('https://recepiv1.herokuapp.com/register', {
      email: email,
      username: username,
      pass: password
    })
      .then((response) => {
        


        if (response.data === `Duplicate entry '${email}' for key 'email_UNIQUE'`) {
          setDisabled(false);
          toast.error(`El correo '${email}' ya está en uso`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.success('Usuario creado con exito', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          history.push('/login')
          // console.log(response);
          // console.log(response.data);
        }

      }, (error) => {
        setDisabled(false);
        console.log(error);
      });




  }
  return (
    <>
 
        
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
              onChange={e => setEmail(e.target.value)} />

          </Form.Group>

          <Form.Group className="my-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required placeholder="Contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          {(disabled?     <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />

  </Button>:
          <Button variant="primary" type="submit" disabled={!email || !password || !username}>
            Submit
          </Button>)}
        </Form>
      </FormContainer> </>
  )
}

export default Register