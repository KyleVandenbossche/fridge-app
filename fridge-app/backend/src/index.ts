import express from "express";
import cors from "cors";
import { recipesRouter } from "./routes/recipes";

// require thr express module
const app = express();

// enable cors
app.use(cors());

app.use(express.json());
app.use("/", recipesRouter);

const port = 3000;

app.listen(port, () => console.log(`Listening on port: ${port}.`));
