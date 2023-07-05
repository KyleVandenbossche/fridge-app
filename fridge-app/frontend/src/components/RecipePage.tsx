import { useContext, useEffect, useState } from "react";
import { FridgeContext } from "../context/FridgeContextProvider";
import "./recipepage.css";
import { getRecipes } from "../services/RecipeService";
import AuthContext from "../context/AuthContext";

const RecipePage = () => {
  const { fridge, getFridge } = useContext(FridgeContext);
  const [table, addToTable] = useState<string[]>([]);
  const [recipes, updateRecipes] = useState<any>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getFridge(user!.uid);
  });

  const tableAdd = (ingredient: string) => {
    addToTable([...table!, ingredient]);
  };

  const getUserRecipes = () => {
    const searchIngredients = table.join("%20");
    console.log(searchIngredients);
    getRecipes(searchIngredients).then((data) => updateRecipes(data.hits));
    console.log(recipes);
  };
  return (
    <>
      <div className="recipePageContainersContainer">
        <div className="fridgeContainer">
          <h2 className="fridge-text">Fridge</h2>
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
            <div className="add-items">
              Please Add Items to your Table to search for recipes
            </div>
          ) : (
            <ul className="table-ingredients">
              {table.map((ingredient: string, i: number) => (
                <li key={i}>{ingredient}</li>
              ))}
              <button onClick={() => addToTable([])}>Clear Table</button>
            </ul>
          )}
        </div>
        <div className="recipesearch">
          {table.length > 0 ? (
            <button onClick={() => getUserRecipes()}>Search for Recipes</button>
          ) : (
            <div></div>
          )}
        </div>
        <div className="userrecipes">
          {recipes.length === 0 ? (
            <div>No recipes searched for yet</div>
          ) : (
            <ul>
              {recipes.map((recipe: any, i: number) => (
                <li key={i}>
                  <div className="recipecontainer">
                    <div className="recipeimage">
                      {/* <a href={recipe.recipe.url}>{getTitle(recipe.recipe.url)}</a> */}
                      <a href={recipe.recipe.url}>
                        <img src={recipe.recipe.image} />
                      </a>
                    </div>
                    <div className="calories">
                      <p>Calories: {recipe.recipe.calories}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {console.log(recipes)}
    </>
  );
};

export default RecipePage;
