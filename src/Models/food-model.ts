import mongoose, { Schema, SchemaType, SchemaTypes } from "mongoose";

type FOOD = {
  categoryName: string;
  price: number;
  image: string;
  ingredients: number;
  category: Schema.Types.ObjectId;
};

const FoodSchema: Schema = new Schema(
  {
    FoodName: { type: String, required: true },
    price: { type: Number, require: true },
    image: { type: String, require: true },
    ingredients: { type: Number, require: true },
    category: { type: Object, rel: "FoodCategory", require: true },
  },
  { timestamps: true }
);
export default mongoose.model<FOOD>("food", FoodSchema);
