// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
function HomeLogged() {
  return (
    <div>
      {/* <h2>Recetas random 🔃</h2> */}
      <br />

      <Container>
        <h2>Bienvenido a recepi</h2>
        <Row>
          <Col>
            {' '}
            <img className='img-fluid shadow-5'
              src='https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg'
            />
          </Col>
          <Col><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer massa odio, tincidunt quis vulputate vel, gravida sed purus. Ut egestas tortor quis placerat sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam et nunc quis turpis ultrices lacinia. Pellentesque lobortis ante sit amet sem vestibulum, ut dictum dui consectetur. Nunc quis consectetur libero. Donec fermentum accumsan arcu non viverra. Ut id elementum orci. Nam aliquam ultrices lacinia. Nunc non nunc vitae ipsum lacinia fringilla. Quisque ultricies suscipit elementum. Duis congue tincidunt ullamcorper. Integer sodales velit molestie nisi lacinia, venenatis volutpat tellus eleifend.

Integer mattis vulputate iaculis. Phasellus arcu est.</p></Col>
        </Row>

      </Container>
    </div>
  )
}

export default HomeLogged
