import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }

  handle(_request: Request, response: Response): Response {
    const categoriesList = this.listCategoriesUseCase.execute()
    return response.json(categoriesList)
  }
}