import mongoose from "mongoose";
import CarsSchema from "./CarSchema.js";

export const CarModel = mongoose.model("Car", CarsSchema);
