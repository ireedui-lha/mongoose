import express from "express";
import AddFood, {
  deleteFood,
  getFood,
  putUser,
} from "../Controllers/food-controller";

const route = express.Router();
route.post("/", AddFood);
route.get("/:id", getFood);
route.get("/", getFood);
route.delete("/:id", deleteFood);
route.put("/:id", putUser);
export default route;
