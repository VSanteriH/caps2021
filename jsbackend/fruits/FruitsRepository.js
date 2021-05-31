// Using ES6 imports
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const db = await mongoose.connect("mongodb://localhost/", {
  user: "root",
  pass: "example",
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const Fruit = new Schema({
  type: { type: String },
  name: { type: String },
});

console.log("Connection state: ", mongoose.connection.readyState);

export const FruitModel = mongoose.model("Fruit", Fruit);
