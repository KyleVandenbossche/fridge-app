import { useState } from "react";



export function FruitGrid () {

  const fruits: string[] = [
    'Apple', 
    'Banana', 
    'Orange', 
    'Mango', 
    'Grapes', 
    'Watermelon', 
    'Pineapple', 
    'Strawberry', 
    'Kiwi', 
    'Peach',
    'Apple', 
    'Banana', 
    'Orange', 
    'Mango', 
    'Grapes', 
    'Watermelon', 
    'Pineapple', 
    'Strawberry', 
    'Kiwi', 
    'Peach',
    'Apple', 
    'Banana', 
    'Orange', 
    'Mango', 
    'Grapes', 
    'Watermelon', 
    'Pineapple', 
    'Strawberry', 
    'Kiwi', 
    'Peach',
    'Apple', 
    'Banana', 
    'Orange', 
    'Mango', 
    'Grapes', 
    'Watermelon', 
    'Pineapple', 
    'Strawberry', 
    'Kiwi', 
    'Peach',
  ];


  // usestate for fridge

  const [ingredients, setIngredients] = useState(['']);

  // function to add the ingredient to the fridge

  function handleIngredients(ingredient: string){
    setIngredients([...ingredients, ingredient])
  }



  return (
    <>
    <div className="container">
      <div className="row">
        {fruits.map((fruit, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{fruit}</h5>
                <button key={index} onClick={() => handleIngredients(fruit)}>Add to Fridge</button>

                <ol>
                    {
                      ingredients.map((ingredient, i) => <div key={i}></div>)
                    }
                </ol>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default FruitGrid;