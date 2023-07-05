import { useContext } from "react";
import { FridgeContext } from "../../context/FridgeContextProvider";
import AuthContext from "../../context/AuthContext";

export function VegetableGrid() {
  const { fridge, addFridgeItem } = useContext(FridgeContext);
  const { user } = useContext(AuthContext);

  const vegetables: string[] = [
    "Carrot",
    "Broccoli",
    "Tomato",
    "Cabbage",
    "Spinach",
    "Bell Pepper",
    "Cauliflower",
    "Zucchini",
    "Eggplant",
    "Green Beans",
    /*"Lettuce",
    "Radish",
    "Onion",
    "Garlic",
    "Potato",
    "Sweet Potato",
    "Beetroot",
    "Cucumber",
    "Asparagus",
    "Kale",
    "Carrot",
    "Broccoli",
    "Tomato",
    "Cabbage",
    "Spinach",
    "Bell Pepper",
    "Cauliflower",
    "Zucchini",
    "Eggplant",
    "Green Beans",
    "Lettuce",
    "Radish",
    "Onion",
    "Garlic",
    "Potato",
    "Sweet Potato",
    "Beetroot",
    "Cucumber",
    "Asparagus",
    "Kale",*/
  ];
  function handleIngredients(ingredient: string) {
    addFridgeItem(user!.uid, ingredient);
  }

  return (
    <>
      <h1>Vegetables</h1>
      <div className="container">
        <div className="row">
          {vegetables.map((vegetable, index) => (
            <div className="vegetable-item" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{vegetable}</h5>
                  <button onClick={() => handleIngredients(vegetable)}>
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

export default VegetableGrid;

/*export function VegetableGrid () {

    const vegetables: string[] = [
        'Carrot',
        'Broccoli',
        'Tomato',
        'Cabbage',
        'Spinach',
        'Bell Pepper',
        'Cauliflower',
        'Zucchini',
        'Eggplant',
        'Green Beans',
        'Lettuce',
        'Radish',
        'Onion',
        'Garlic',
        'Potato',
        'Sweet Potato',
        'Beetroot',
        'Cucumber',
        'Asparagus',
        'Kale',
        'Carrot',
        'Broccoli',
        'Tomato',
        'Cabbage',
        'Spinach',
        'Bell Pepper',
        'Cauliflower',
        'Zucchini',
        'Eggplant',
        'Green Beans',
        'Lettuce',
        'Radish',
        'Onion',
        'Garlic',
        'Potato',
        'Sweet Potato',
        'Beetroot',
        'Cucumber',
        'Asparagus',
        'Kale'
    ];


  return (
    <>
    <div className="container">
      <div className="row">
        {vegetables.map((vegetable, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{vegetable}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default VegetableGrid;*/
