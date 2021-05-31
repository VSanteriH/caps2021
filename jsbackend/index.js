import express from "express";
import bodyParser from "body-parser";
<<<<<<< HEAD
const app = express();
const port = 3000;

app.use(bodyParser.json());
=======
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

const VERY_SECRET_KEY = "akjngfwoeinoi2n3n2rlk3nlknslf";
app.use(cookieParser(VERY_SECRET_KEY));
app.use(bodyParser.json());

import AuhtController from "./AuthController.js";
import SampleController from "./SampleController.js";
import FruitsController from "./fruits/FruitsController.js";

AuhtController(app);
SampleController(app);
FruitsController(app);
>>>>>>> 2acb37576a34cf35293d1502f836e55377bc90b0

import FruitsController from "./fruits/FruitsController.js";
import CarsController from "./cars/CarsController.js";
import SampleController from "./SampleController.js";
FruitsController(app);
SampleController(app);
CarsController(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
