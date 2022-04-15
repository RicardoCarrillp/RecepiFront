// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Container,Row,Col}from 'react-bootstrap';

const FormContainer: React.FC<React.ReactNode> = ({children}) => {
  return (
    <Container className="py-3">
    <Row className="justify-content-md-center ">
      <Col xs={12} md={6}>
       {children}
      </Col>
    </Row>
  </Container>
  )
}

export default FormContainer
