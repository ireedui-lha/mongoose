import mongoose, { Schema } from "mongoose";

type User = {
  name: string;
  password: string;
  email: string;
};

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.model<User>("user", UserSchema);
