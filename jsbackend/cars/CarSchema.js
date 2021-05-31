import mongoose from "mongoose";
const Schema = mongoose.Schema;

export default new Schema({
  make: { type: String, enum: ["Honda", "Ford"] },
  model: { type: String },
});
