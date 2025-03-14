import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import ConnectMongoose from "./DB/food-db";
import Random from "./Routers/food-router";
import User from "./Routers/user-router";
const app = express();
app.use(bodyParser.json());
app.use(cors());
configDotenv();
ConnectMongoose();
const port = process.env.Port;
app.use("/food", Random);
app.use("/user", User);
app.listen(port, () => {
  console.log(`aslaa port${port}`);
});
