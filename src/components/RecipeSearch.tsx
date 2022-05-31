/* eslint-disable no-console */
// import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
// eslint-disable-next-line no-unused-vars
import React, { SyntheticEvent, useState,useEffect } from 'react'
import axios from 'axios'
import { Button, Card, Spinner } from 'react-bootstrap'
// import axios from 'axios'

const RecipeSearch = () => {
  const [inputText, setInputText] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [recipes, setRecipes] = useState<any[]>([])

  // const [resultText, setResultText] = useState(''); 


  const apiSpoonacularIngredients =
    'https://api.spoonacular.com/recipes/findByIngredients';





    const submitHandler = (ingredients:string) => {
      setDisabled(true);

      // eslint-disable-next-line no-console
      // const data={
      //   apiKey:'2d11dc4203cc4c4f94737dc957ee4904',
      //   ingredients:ingredients,

      // }
      axios.get(`${apiSpoonacularIngredients}?apiKey=2d11dc4203cc4c4f94737dc957ee4904&ingredients=${ingredients}&number=9`)
      .then((response) => {
        setDisabled(false);
        // eslint-disable-next-line no-console
        console.log(response.data.recipes)
        setRecipes(response.data)
      })
      .catch((e) => {
        setDisabled(false);

        setRecipes([])
        // eslint-disable-next-line no-console
        console.log(e)
         // eslint-disable-next-line no-console
        console.log(recipes.length )
        });
  
  
  
  
    }
    



    const translateIngredients=()=>{
      setDisabled(true);

      const data = {
        q : inputText,
        source: 'es',
        target: 'en'
    };
      axios.post(`https://libretranslate.de/translate`, data)
      .then((response) => {
        setDisabled(false);

          // setResultText(response.data.translatedText)
          submitHandler(response.data.translatedText)
          // eslint-disable-next-line no-console
          console.log(response.data.translatedText);
          
      })
  }

  return (
    <>
      <div className='container'>
        <h2>Escriba los ingredientes separados por coma y un espacio</h2>

        <Form>
          <Container>
            <Row>
              <Col>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Control as='textarea' rows={3} 
                   value={inputText}
                   placeholder="arroz, pan, maiz"
                   onChange={e => setInputText(e.target.value)}/>{' '}
                </Form.Group>
                {/* <Button variant="outline-success" disabled={!inputText} onClick={translateIngredients}>Enviar</Button>{' '} */}
                {(disabled?     <Button variant="outline-success" disabled>
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />

  </Button>:<Button variant="outline-success" type="submit"  onClick={translateIngredients} disabled={!inputText}>
            Submit
          </Button>)}
              </Col>
            </Row>
          </Container>


        </Form>
<br />
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
            
         </Row>
      
        }
      </Container>
      </div>
    </>
  )
}

export default RecipeSearch
