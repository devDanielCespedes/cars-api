import { Category } from "@carsModel/Category";
import { ICategoriesRepository } from "@carsRepositories/ICategoriesRepository";

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute(): Category[] {
    const categories = this.categoriesRepository.list()
    return categories
  }
}