// eslint-disable-next-line no-unused-vars
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "../../styles/Carrousel.css";

function Carrousel() {
  return (
 
    <div style={{ display: 'block', width: '100%', padding: 20 }}>

    <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
src="https://recetas.eluniverso.com/static/02c3c69b9f1b32ce0be6508b65ad1d6b/91c3e/48-Bizcochuelo-de-pinol-orito-caramelizado-y-trufa-de-chocolate-con-melcocha.jpg"
          alt="Image One"
        /> 
        <Carousel.Caption>
          <h3>Label for first slide</h3>
          <p>Sample Text for Image One</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
src="https://familiadiana.com/wp-content/uploads/2021/12/RECETAS-PRACTICAS-500X300.jpg"
          alt="Image Two"
        />
        <Carousel.Caption>
          <h3>Label for second slide</h3>
          <p>Sample Text for Image Two</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>

  )
}

export default Carrousel
