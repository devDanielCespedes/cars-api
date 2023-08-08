import { CategoriesRepository } from "@carsRepositories/implementations/CategoriesRepository"

interface CreateCategoryRequest {
  name: string
  description: string
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}
  execute({ description, name }: CreateCategoryRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)
    if (categoryAlreadyExists) {
      throw new Error("Category already exists!")
    }
    this.categoriesRepository.create({ name, description })
  }
}