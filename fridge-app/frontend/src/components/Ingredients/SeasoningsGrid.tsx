import { useContext } from "react";
import { FridgeContext } from "../../context/FridgeContextProvider";
import AuthContext from "../../context/AuthContext";

export function SeasoningsGrid() {
  const { fridge, addFridgeItem } = useContext(FridgeContext);
  const { user } = useContext(AuthContext);

  const seasonings: string[] = [
    "Pepper",
    "Salt",
    "Paprika",
    "Garlic Powder",
    "Onion Powder",
    "Parsley",
    "Thyme",
    "Mint",
    "Cilantro",
    "Crushed Red Pepper",
    /*"Pepper",
    "Salt",
    "Paprika",
    "Garlic Powder",
    "Onion Powder",
    "Parsley",
    "Thyme",
    "Mint",
    "Cilantro",
    "Crushed Red Pepper",
    "Pepper",
    "Salt",
    "Paprika",
    "Garlic Powder",
    "Onion Powder",
    "Parsley",
    "Thyme",
    "Mint",
    "Cilantro",
    "Crushed Red Pepper",
    "Pepper",
    "Salt",
    "Paprika",
    "Garlic Powder",
    "Onion Powder",
    "Parsley",
    "Thyme",
    "Mint",
    "Cilantro",
    "Crushed Red Pepper",*/
  ];

  function handleIngredients(ingredient: string) {
    addFridgeItem(user!.uid, ingredient);
  }

  return (
    <>
      <h1>Seasonings</h1>
      <div className="container">
        <div className="row">
          {seasonings.map((seasoning, index) => (
            <div className="seasoning-item" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{seasoning}</h5>
                  <button onClick={() => handleIngredients(seasoning)}>
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

export default SeasoningsGrid;

/*export function SeasoningsGrid () {

    const seasonings: string[] = [
        'Pepper', 
        'Salt', 
        'Paprika', 
        'Garlic Powder', 
        'Onion Powder', 
        'Parsley', 
        'Thyme', 
        'Mint', 
        'Cilantro', 
        'Crushed Red Pepper',
        'Pepper', 
        'Salt', 
        'Paprika', 
        'Garlic Powder', 
        'Onion Powder', 
        'Parsley', 
        'Thyme', 
        'Mint', 
        'Cilantro', 
        'Crushed Red Pepper',
        'Pepper', 
        'Salt', 
        'Paprika', 
        'Garlic Powder', 
        'Onion Powder', 
        'Parsley', 
        'Thyme', 
        'Mint', 
        'Cilantro', 
        'Crushed Red Pepper',
        'Pepper', 
        'Salt', 
        'Paprika', 
        'Garlic Powder', 
        'Onion Powder', 
        'Parsley', 
        'Thyme', 
        'Mint', 
        'Cilantro', 
        'Crushed Red Pepper'
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
                
                  {
                    ingredients.map((ingredient,i) => <li key={i}>{ingredient}</li>)
                  }
                
        {seasonings.map((seasoning, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{seasoning}</h5>
                <button key={index} onClick={() => handleIngredients(seasoning)}>Add to Fridge</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default SeasoningsGrid;*/
