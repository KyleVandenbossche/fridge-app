import express from "express";
import { getClient } from "../db";
import UserFridge from "../models/UserFridge";
const collection = "fridge";

export const fridgeRouter = express.Router();

fridgeRouter.get("/fridge/:id", async (req, res) => {
  const userId = req.params.id;
  const client = await getClient();
  const result = await client
    .db()
    .collection<UserFridge>(collection)
    .findOne({ userId: userId });
  if (result === null) {
    res.status(404).send("Fridge Not Found");
  } else {
    res.json(result);
  }
});

fridgeRouter.post("/fridge", async (req, res) => {
  const UserFridge = req.body as UserFridge;
  const client = await getClient();
  await client.db().collection<UserFridge>(collection).insertOne(UserFridge);
  res.status(201).json(UserFridge);
});

fridgeRouter.put("/fridge/:id", async (req, res) => {
  const newUserFridge: UserFridge = req.body;
  const userId = req.params.id;
  const client = await getClient();
  const result = await client
    .db()
    .collection<UserFridge>(collection)
    .updateOne(
      { userId: userId },
      {
        $set: {
          fridgeContents: req.body.fridgeContents,
        },
      }
    );
  if (result.matchedCount === 0) {
    res.status(404).send("Fridge not found");
  } else {
    res.status(200).json(newUserFridge);
  }
});
