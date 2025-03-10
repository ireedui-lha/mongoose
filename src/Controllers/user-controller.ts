import { Request, Response } from "express";
import UserSchema from "../Models/user-model";
export default async function AddUser(req: Request, res: Response) {
  try {
    const { name, password, email } = req.body;
    const checkEmail = UserSchema.findOne({ email });
    if (!checkEmail) {
      res.status(400).json({ message: "burtegsen baina" });
    }
    const newuser = new UserSchema({ name, email, password });
    await newuser.save();

    res.status(200).json({ message: " shine herglegch amjilttai" });
  } catch (error) {
    res.status(400).json({ message: "amjiltgui" });
  }
}
export const getUser = async (req: Request, res: Response) => {
  try {
    const saveUser = req.params.id;
    const user = UserSchema.findById(saveUser);
    if (!user) {
      res.status(400).json({ message: "hereglegch oldsngue" });
    }
    res.status(400).json({ saveUser });
  } catch (error) {
    res.status(400).json({ message: "amjiltgui" });
  }
};
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.id;
    const deleteUser = await UserSchema.findByIdAndDelete(userId);
    if (!deleteUser) {
      res.status(404).json({ message: "Хэрэглэгч олдсонгүй!" });
    }
    res
      .status(200)
      .json({ message: "Хэрэглэгч амжилттай устгагдлаа!", user: deleteUser });
  } catch (error) {
    res.status(400).json({ massaage: "ustgahad aldaa garlaa" });
  }
};
