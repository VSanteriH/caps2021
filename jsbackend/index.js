import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.json());

import FruitsController from "./fruits/FruitsController.js";
import CarsController from "./cars/CarsController.js";
import SampleController from "./SampleController.js";
FruitsController(app);
SampleController(app);
CarsController(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
