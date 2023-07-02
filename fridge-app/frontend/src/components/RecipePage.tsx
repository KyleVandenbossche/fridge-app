import { useContext, useState } from "react";
import { FridgeContext } from "../context/FridgeContextProvider";
import "./recipepage.css";

const RecipePage = () => {
  const { fridge } = useContext(FridgeContext);
  const [table, addToTable] = useState<string[]>([]);

  const tableAdd = (ingredient: string) => {
    addToTable([...table!, ingredient]);
  };

  const getRecipes = () => {
    const searchIngredients = table.join("%20");
    console.log(searchIngredients);
  };
  return (
    <>
      <div className="recipePageContainersContainer">
        <div className="fridgeContainer">
          <h2 className='fridge-text'>Fridge</h2>
          {fridge.length === 0 ? (
            <div>Please Add Items to your Fridge</div>
          ) : (
            <ul>
              {fridge.map((ingredient: string, i: number) => (
                <li key={i}>
                  <button onClick={() => tableAdd(ingredient)}>
                    {ingredient}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="tableContainer">
          <h2 className="table-text">Table</h2>
          {table.length === 0 ? (
            <div className='add-items'>Please Add Items to your Table to search for recipes</div>
          ) : (
            <ul className='table-ingredients'>
              {table.map((ingredient: string, i: number) => (
                <li key={i}>{ingredient}</li>
              ))}
              <button onClick={() => addToTable([])}>Clear Table</button>
            </ul>
          )}
        </div>
        <div className="recipesearch">
          {table.length > 0 ? (
            <button onClick={() => getRecipes()}>Search for Recipes</button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default RecipePage;
