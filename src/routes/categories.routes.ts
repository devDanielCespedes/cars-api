import { createCategoryController } from "@carsUseCases/createCategory";
import { importCategoryController } from "@carsUseCases/importCategory";
import { listCategoriesController } from "@carsUseCases/listCategories";
import { Router } from "express";
import multer from "multer";

const categoriesRoutes = Router()

const upload = multer({
  dest: "./tmp"
})

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response)
})

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response)
})

export { categoriesRoutes }
