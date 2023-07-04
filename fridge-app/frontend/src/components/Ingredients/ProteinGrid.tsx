import { useContext } from "react";
import { FridgeContext } from "../../context/FridgeContextProvider";

export function ProteinGrid() {
  const { fridge, addFridgeItem } = useContext(FridgeContext);
  const proteins: string[] = [
    "Chicken",
    "Beef",
    "Salmon",
    "Pork",
    "Eggs",
    "Lamb",
    "Shrimp",
    "Turkey",
    "Bacon",
    "Ham",
    /*"Chicken",
    "Beef",
    "Salmon",
    "Pork",
    "Eggs",
    "Lamb",
    "Shrimp",
    "Turkey",
    "Bacon",
    "Ham",
    "Chicken",
    "Beef",
    "Salmon",
    "Pork",
    "Eggs",
    "Lamb",
    "Shrimp",
    "Turkey",
    "Bacon",
    "Ham",
    "Chicken",
    "Beef",
    "Salmon",
    "Pork",
    "Eggs",
    "Lamb",
    "Shrimp",
    "Turkey",
    "Bacon",
    "Ham",*/
  ];

  function handleIngredients(ingredient: string) {
    addFridgeItem(ingredient);
  }

  return (
    <div className="container">
      <h1>Proteins</h1>
      <div className="row">
        {proteins.map((protein, index) => (
          <div className="protein-item" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{protein}</h5>
                <button onClick={() => handleIngredients(protein)}>
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
  );
}

export default ProteinGrid;

/*export function ProteinGrid () {

    const proteins: string[] = [
        'Chicken', 
        'Beef', 
        'Salmon', 
        'Pork', 
        'Eggs', 
        'Lamb', 
        'Shrimp', 
        'Turkey', 
        'Bacon', 
        'Ham',
        'Chicken', 
        'Beef', 
        'Salmon', 
        'Pork', 
        'Eggs', 
        'Lamb', 
        'Shrimp', 
        'Turkey', 
        'Bacon', 
        'Ham',
        'Chicken', 
        'Beef', 
        'Salmon', 
        'Pork', 
        'Eggs', 
        'Lamb', 
        'Shrimp', 
        'Turkey', 
        'Bacon', 
        'Ham',
        'Chicken', 
        'Beef', 
        'Salmon', 
        'Pork', 
        'Eggs', 
        'Lamb', 
        'Shrimp', 
        'Turkey', 
        'Bacon', 
        'Ham',
    ];



  return (
    <>
    <div className="protein-container">
    <div className="container">
      <div className="row">
        {proteins.map((protein, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{protein}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default ProteinGrid;*/
