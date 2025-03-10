import mongoose from "mongoose";
export default async function ConnectMongoose() {
  try {
    await mongoose.connect(process.env.Mongo_db || "");
    console.log("amjiltta holbogdloo");
  } catch (error) {
    console.log("holbolt amjiltgu");
  }
}
