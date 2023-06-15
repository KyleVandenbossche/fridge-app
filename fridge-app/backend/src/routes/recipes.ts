import express from "express";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const appid: string = process.env.APPID || "";
const appkey: string = process.env.APPKEY || "";
const userId: string = process.env.USERID || "";

export const recipesRouter = express.Router();

recipesRouter.get("/", async function (req, res) {
  let ingredients = req.query.ingredients;
  let user = req.query.user;
  let recipeURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredients}&app_id=${appid}&app_key=${appkey}&mealType=Dinner&dishType=Main%20course&random=true&field=uri&field=image&field=source&field=url&field=shareAs&field=ingredientLines&field=ingredients&field=calories&field=totalTime`;
  console.log(recipeURL);
  if (user !== userId) {
    res.status(403).send("Please Include a user parameter");
  } else {
    try {
      // Make a request to the API
      const response = await axios.get(recipeURL);

      // Extract the data from the response
      const data = response.data;

      // Return the data as a response
      res.json(data);
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Failed to fetch data from the API" });
    }
  }
});
