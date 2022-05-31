// eslint-disable-next-line no-unused-vars
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function RandomRecipe() {
  const [recipes, setRecipes] = useState<any[]>([])

  useEffect(() => {
    getRamdomRecipes()
  }, [])

  const getRamdomRecipes = () => {
    axios
      .get(
        'https://api.spoonacular.com/recipes/random?number=6&apiKey=2d11dc4203cc4c4f94737dc957ee4904'
      )
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response.data.recipes)
        setRecipes(response.data.recipes)
      })
      .catch((e) => {
        setRecipes([])
        // eslint-disable-next-line no-console
        console.log(e)
         // eslint-disable-next-line no-console
        console.log(recipes.length )

        // Capturamos los errores
      })
  }

  return (
    <div>
      <Container>
        {recipes.length !== 0 ? 
          <Row>
            {recipes.map((recipe) => (
              <Col key={recipe.id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant='top' src={recipe.image} />

                  <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Puntaje saludable:{' '}
                      {recipe.healthScore
                        ? recipe.healthScore + '/100'
                        : 'No tiene'}
                    </Card.Subtitle>
                    <Card.Text>
                      {/* Tipo de plato:<br/>   */}
                      {/* {recipe.dishTypes.map((dish: any)=>
    <Stack key={dish} direction="horizontal" >
  <div   className="bg-light">{(dish===''?'No tiene tipo':dish)} </div>
</Stack>
)} */}
                    </Card.Text>
                    {/* <Card.Link href={recipe.spoonacularSourceUrl}>Más informacion de esta receta</Card.Link> */}
                    <Button
                      variant='info'
                      target='_blank'
                      href={recipe.spoonacularSourceUrl}
                    >
                      Más informacion de esta receta
                    </Button>
                  </Card.Body>
                </Card>
                <br />
              </Col>
            ))}{' '}
          </Row>
         : 
         <Row>
             <Col>    <h3 >No hay elementos o se acabaron las peticiones del dia😔</h3></Col>
         </Row>
      
        }
      </Container>
    </div>
  )
}

export default RandomRecipe
