export default (app) => {
  const cars = [{ make: "Ford", model: "Mustang" }];
  app.get("/Cars", (req, res) => {
    res.json(cars);
  });
  app.post("/Cars", (req, res) => {
    const { params, body } = req;
    const { make, model } = body;
    const id = cars.reduce((maxId, cars) => Math.max(maxId, cars.id), 0);
    const newCar = { id: id + 1, make, model };
    cars.push(newCar);
    res.json(newCar);
  });
  app.delete("/Cars/:id", (req, res) => {
    const { params } = req;
    const n = cars.findIndex((car) => cars.id === parseInt(params.id));

    if (n > -1) {
      car.splice(n, 1);
    }
    res.end();
  });
};
