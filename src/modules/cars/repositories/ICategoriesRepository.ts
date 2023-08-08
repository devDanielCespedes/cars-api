import { Category } from "@carsModel/Category";

export interface CreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[]
  create({ description, name }: CreateCategoryDTO): void
}