import { CarTC } from "./CarsRepository.js";

export const CarQuery = {
  CarMany: CarTC.getResolver("findMany"),
  CarPagination: CarTC.getResolver("pagination"),
};

export const CarMutation = {
  cartCreateOne: CarTC.getResolver("createOne"),
  carRemoveById: CarTC.getResolver("removeById"),
};
