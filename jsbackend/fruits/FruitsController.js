export default (app) => {
  const fruits = [{ type: "apple", name: "Golden" }];
  app.get("/Fruits", (req, res) => {
    res.json(fruits);
  });

  app.post("/Fruits", (req, res) => {
    const { params, body } = req;
    const { type, name } = body;
    const id = fruits.reduce((maxId, fruit) => Math.max(maxId, fruit.id), 0);
    const newFruit = { id: id + 1, type, name };
    fruits.push(newFruit);
    res.json(newFruit);
  });
  app.delete("/Fruits/:id", (req, res) => {
    const { params } = req;
    const n = fruits.findIndex((fruit) => fruit.id === parseInt(params.id));

    if (n > -1) {
      fruits.splice(n, 1);
    }
    res.end();
  });
};