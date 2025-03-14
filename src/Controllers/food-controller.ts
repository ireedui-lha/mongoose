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
export const putUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const updateId = req.params.id;
    const deletedUser = await FoodSchema.findByIdAndUpdate(updateId, req.body, {
      new: true,
    });
    if (!deletedUser) {
      res.status(404).json({ message: "Хэрэглэгч олдсонгүй!" });
      return;
    }
    res.status(200).json({
      message: "hereglegch amjilttai shinechlegdlee",
      data: deletedUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Алдаа гарлаа", error });
  }
};
export const deleteFood = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deleteId = req.params.id;

    // const deletedUser = await FoodSchema.deleteMany();
    const deletedUser = await FoodSchema.findByIdAndDelete(deleteId);

    if (!deletedUser) {
      res.status(404).json({ message: "Хэрэглэгч олдсонгүй!" });
    }
    res
      .status(200)
      .json({ message: "Хэрэглэгч амжилттай устгагдлаа!", data: deletedUser });
  } catch (error) {
    res.status(500).json({ message: "Алдаа гарлаа", error });
  }
};
