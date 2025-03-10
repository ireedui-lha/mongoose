import express from "express";
import AddUser, { deleteUser, getUser } from "../Controllers/user-controller";
const route = express.Router();
route.post("/", AddUser);
route.get("/:id", getUser);
route.delete("/:id", deleteUser);
export default route;
