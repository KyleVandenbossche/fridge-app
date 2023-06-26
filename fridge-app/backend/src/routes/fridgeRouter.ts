import express from "express";
import { getClient } from "../db";
import { ObjectId } from "mongodb";
import UserFridge from "../models/UserFridge";
import * as functions from "firebase-functions";
const collection = "fridge";
const userId: string = functions.config().user.id;

export const fridgeRouter = express.Router();

fridgeRouter.get("/fridge/:id", async (req, res) => {
  let user = req.query.user;
  if (user !== userId) {
    res.status(403).send("Please Include a user parameter");
  }
  if (ObjectId.isValid(req.params.id) === false) {
    res.status(400).end();
  } else {
    const _id = new ObjectId(req.params.id);
    const client = await getClient();
    const result = await client
      .db()
      .collection<UserFridge>(collection)
      .findOne({ _id: _id });
    if (result === null) {
      res.status(404).send("Fridge Not Found");
    } else {
      res.json(result);
    }
  }
});

fridgeRouter.post("/fridge", async (req, res) => {
  const UserFridge = req.body as UserFridge;
  const client = await getClient();
  await client.db().collection<UserFridge>(collection).insertOne(UserFridge);
  res.status(201).json(UserFridge);
});

fridgeRouter.put("/fridge/:id", async (req, res) => {
  if (ObjectId.isValid(req.params.id) === false) {
    res.status(400).end();
  } else {
    const newUserFridge: UserFridge = req.body;
    const _id = new ObjectId(req.params.id);
    const client = await getClient();
    const result = await client
      .db()
      .collection<UserFridge>(collection)
      .updateOne(
        { _id: _id },
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
  }
});
