import axios from "axios";

export function getRecipes(ingredients: string): Promise<any> {
  return axios
    .get(
      `https://us-central1-recipes-31990.cloudfunctions.net/api/recipes?ingredients=${ingredients}`
    )
    .then((response) => response.data);
}
