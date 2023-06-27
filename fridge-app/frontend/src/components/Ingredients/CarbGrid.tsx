import { useState } from "react";



export function CarbGrid () {


    const carbohydrates: string[] = [
        'Rice', 
        'Bread', 
        'Pasta', 
        'Potatoes', 
        'Quinoa', 
        'Oats', 
        'Barley', 
        'Couscous', 
        'Corn', 
        'Sweet potatoes',
        'Rice', 
        'Bread', 
        'Pasta', 
        'Potatoes', 
        'Quinoa', 
        'Oats', 
        'Barley', 
        'Couscous', 
        'Corn', 
        'Sweet potatoes',
        'Rice', 
        'Bread', 
        'Pasta', 
        'Potatoes', 
        'Quinoa', 
        'Oats', 
        'Barley', 
        'Couscous', 
        'Corn', 
        'Sweet potatoes',
        'Rice', 
        'Bread', 
        'Pasta', 
        'Potatoes', 
        'Quinoa', 
        'Oats', 
        'Barley', 
        'Couscous', 
        'Corn', 
        'Sweet potatoes',
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
        {carbohydrates.map((carbohydrate, index) => (
          <div className="carbs-item" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{carbohydrate}</h5>
                <button onClick={() => handleIngredients(carbohydrate)}>Add to Fridge</button>
                <ol>
                  {ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
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

export default CarbGrid;




/*import { useState } from "react";



export function CarbGrid () {


    const carbohydrates: string[] = [
        'Rice', 
        'Bread', 
        'Pasta', 
        'Potatoes', 
        'Quinoa', 
        'Oats', 
        'Barley', 
        'Couscous', 
        'Corn', 
        'Sweet potatoes',
        'Rice', 
        'Bread', 
        'Pasta', 
        'Potatoes', 
        'Quinoa', 
        'Oats', 
        'Barley', 
        'Couscous', 
        'Corn', 
        'Sweet potatoes',
        'Rice', 
        'Bread', 
        'Pasta', 
        'Potatoes', 
        'Quinoa', 
        'Oats', 
        'Barley', 
        'Couscous', 
        'Corn', 
        'Sweet potatoes',
        'Rice', 
        'Bread', 
        'Pasta', 
        'Potatoes', 
        'Quinoa', 
        'Oats', 
        'Barley', 
        'Couscous', 
        'Corn', 
        'Sweet potatoes',
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
        {carbohydrates.map((carbohydrate, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{carbohydrate}</h5>
                <button key={index} onClick={() => handleIngredients(carbohydrate)}>Add to Fridge</button>

              </div>
            </div>
            <ol>
                  {
                    ingredients.map((ingredient,i) => <li key={i}>{ingredient}</li>)
                  }
                </ol>
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default CarbGrid;*/
