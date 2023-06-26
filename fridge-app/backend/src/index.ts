import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { fridgeRouter } from "./routes/fridgeRouter";
import { recipesRouter } from "./routes/recipeRouter";

const app = express();
app.use(cors());

app.use("/", recipesRouter);
app.use("/", fridgeRouter);
export const api = functions.https.onRequest(app);
