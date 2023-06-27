import { useEffect, useState } from "react"
import Recipe from "../models/Ingredients"
import './Card.css'
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';



export function Card(){

    const ingredients = [
        { name: "Flour", quantity: 1, measurement: "cup" },
        { name: "Sugar", quantity: 2, measurement: "tablespoons" },
        { name: "Salt", quantity: 0.5, measurement: "teaspoon" },
    ];




    // const [ingredient, newIngredient] = useState<Recipe>();

    // useEffect(() => {
    //     getIngredient(+id!).then(data => setIngredient(data))
    // })


  
   // return(
        // <div className="grid">
        // <div className="row">

        // {ingredients.map((ingredient, index) => (
        //   <div className="col-md-4" key={index}>
        //     <h3>{ingredient.name}</h3>
        //     <p>
        //       Quantity: {ingredient.quantity} {ingredient.measurement}
        //     </p>
        //   </div>
        // ))}
        //   </div>
        //   </div>

       /*<div>
        <Container>
      <Row>
        <Col>
        xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
      
      </Container>
      </div>*/


   // )
 }

    
