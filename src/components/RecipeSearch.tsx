// import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
// eslint-disable-next-line no-unused-vars
import React, { SyntheticEvent, useState,useEffect } from 'react'
// import axios from 'axios'

const RecipeSearch = () => {

  // const apiSpoonacularIngredients =
  //   'https://api.spoonacular.com/recipes/findByIngredients?apiKey=2d11dc4203cc4c4f94737dc957ee4904&ingredients=';





    // const submitHandler = (e: SyntheticEvent) => {
    //   e.preventDefault();
    //   // eslint-disable-next-line no-console
        
    //   axios.post(`${apiSpoonacular}`, {
    //     email: email,
    //     pass: password
    //   })
    //     .then((response) => {
    //       console.log(response);
    //       console.log(response.data);
    //       if (response.data === 'Email o contraseña incorrecta') {
  
    //         toast.error(response.data, {
    //           position: "top-center",
    //           autoClose: 5000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //         });
    //       } else {
    //         const User = JSON.stringify(response.data);
    //         toast.success('Sesión iniciada con exito!!!', {
    //           position: "top-center",
    //           autoClose: 5000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //         });
    //         localStorage.setItem("user",User);
    //         localStorage.setItem("isAuth","true");
    //         setAuthorized(true);
    //         history.push("/home") ;
    //       }
    //     }, (error) => {
    //       console.log(error);
    //     });
  
  
  
  
    // }



  return (
    <>
      <div className='container'>
        <h2>Escriba los ingredientes separados por coma</h2>

        <Form>
          <Container>
            <Row>
              <Col>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label>Ingredientes</Form.Label>
                  <Form.Control as='textarea' rows={3} />{' '}
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    </>
  )
}

export default RecipeSearch
