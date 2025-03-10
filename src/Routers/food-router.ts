import express from "express";
import AddFood, { deleteFood, getFood } from "../Controllers/food-controller";
const route = express.Router();
route.post("/", AddFood);
route.get("/:id", getFood);
route.delete("/:id", deleteFood);
export default route;
