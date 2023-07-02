import { useContext, useState } from "react";
import { FridgeContext } from "../context/FridgeContextProvider";
import "./recipepage.css";
import { getRecipes } from "../services/RecipeService";

const RecipePage = () => {
  const { fridge } = useContext(FridgeContext);
  const [table, addToTable] = useState<string[]>([]);
  const [recipes, updateRecipes] = useState<any>([]);

  const tableAdd = (ingredient: string) => {
    addToTable([...table!, ingredient]);
  };

  const getUserRecipes = () => {
    const searchIngredients = table.join("%20");
    getRecipes(searchIngredients).then((data) => updateRecipes(data.hits));
    console.log(recipes);
  };

  const getTitle = (url: any) => {
    let full = url.split("/");
    let title = full.slice(-1);
    return title;
  };

  return (
    <>
      <div className="recipePageContainersContainer">
        <div className="fridgeContainer">
          <h2>Fridge</h2>
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
          <h2>Table</h2>
          {table.length === 0 ? (
            <div>Please Add Items to your Table to search for recipes</div>
          ) : (
            <ul>
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
                  <a href={recipe.recipe.url}>{getTitle(recipe.recipe.url)}</a>
                  <p>{recipe.recipe.recipeLines}</p>
                  <img src={recipe.recipe.image} />
                  <p>Calories: {recipe.recipe.calories}</p>
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
