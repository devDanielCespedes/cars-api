import { createSpecificationController } from "@carsUseCases/createSpecification";
import { Router } from "express";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response)
})

export { specificationsRoutes }