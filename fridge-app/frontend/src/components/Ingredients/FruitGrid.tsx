import { useContext } from "react";
import { FridgeContext } from "../../context/FridgeContextProvider";

export function FruitGrid() {
  const { fridge, addFridgeItem } = useContext(FridgeContext);
  const fruits: string[] = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Watermelon",
    "Pineapple",
    "Strawberry",
    "Kiwi",
    "Peach",
    /*"Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Watermelon",
    "Pineapple",
    "Strawberry",
    "Kiwi",
    "Peach",
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Watermelon",
    "Pineapple",
    "Strawberry",
    "Kiwi",
    "Peach",
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Watermelon",
    "Pineapple",
    "Strawberry",
    "Kiwi",
    "Peach",*/
  ];

  function handleIngredients(ingredient: string) {
    addFridgeItem(ingredient);
  }

  return (
    <>
    <h1>Fruit</h1>

    <div className="container">
      <div className="row">
        {fruits.map((fruit, index) => (
          <div className="fruit-item" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{fruit}</h5>
                <button onClick={() => handleIngredients(fruit)}>
                  Add to Fridge
                </button>
                {/* <ol>
                  {fridge.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ol> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default FruitGrid;

/*import { useState } from "react";



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

export default FruitGrid;*/
