import { secure } from "../AuthController.js";
import { FruitModel } from "./FruitsRepository.js";

import { FruitModel } from "./FruitsRepository.js";

const fruits = [{ id: 1, type: "apple", name: "Golden" }];

export default (app) => {
<<<<<<< HEAD
  app.get("/Fruits", secure("USER", "ADMIN"), (req, res) => {
    const fruit = FruitModel.find();
    res.send(fruits);
  });

  app.post("/Fruits", secure("ADMIN"), (req, res) => {
    const { body } = req;
    const { type, name } = body;

    const id = fruits.reduce((maxId, fruit) => Math.max(maxId, fruit.id), 0);

    const newFruit = { id: id + 1, type, name };

    fruits.push(newFruit);
    res.json(newFruit);
  });
=======
  app.get(
    "/Fruits",
    /*secure("USER", "ADMIN"),*/ async (req, res) => {
      const fruits = await FruitModel.find({});
      res.send(fruits);
    }
  );
>>>>>>> cd395e858829d26bdb426a21c6ca83c292d19fe4

  app.post(
    "/Fruits",
    /*secure("ADMIN"),*/ async (req, res) => {
      const { body } = req;

      try {
        const newFruit = new FruitModel(body);
        await newFruit.save();

        res.json(newFruit);
      } catch (err) {
        res.status(400).send(err);
      }
    }
<<<<<<< HEAD
    res.end();
  });
=======
  );

  app.delete(
    "/Fruits/:id",
    /*secure("ADMIN"),*/ async (req, res) => {
      const { params } = req;
      await FruitModel.findByIdAndDelete(params.id);
      res.end();
    }
  );
>>>>>>> cd395e858829d26bdb426a21c6ca83c292d19fe4
};
