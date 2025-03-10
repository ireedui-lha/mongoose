import { Request, Response } from "express";
import FoodSchema from "../Models/food-model";
export default async function AddFood(req: Request, res: Response) {
  try {
    const Connect = req.body;
    const addfood = await FoodSchema.create(Connect);
    res.status(200).json({ message: "amjilttai", addfood });
  } catch (error) {
    res.status(400).json({ message: "amjiltgui" });
  }
}
export const getFood = async (req: Request, res: Response) => {
  try {
    const getfood = await FoodSchema.find();
    res.status(200).json({ message: "holbolt amjilttai", getfood });
  } catch (error) {
    res.status(400).json({ message: "bolsongue" });
  }
};
export const deleteFood = async (req: Request, res: Response) => {
  try {
    const deleteid = req.params.id;
    const Deleteuser = await FoodSchema.findByIdAndDelete(deleteid);
    if (!Deleteuser) {
      res.status(404).json({ message: "daanc oldsngue" });
    }

    res.status(200).json({ message: "holbolt amjilttai", data: Deleteuser });
  } catch (error) {
    res.status(400).json({ message: "bolsongue" });
  }
};
