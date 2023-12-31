import { Category } from "@carsModel/Category";
import { CreateCategoryDTO, ICategoriesRepository } from "@carsRepositories/ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[]

  private static INSTANCE: CategoriesRepository

  private constructor() {
    this.categories = []
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }

    return CategoriesRepository.INSTANCE
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name)
    return category
  }

  list(): Category[] {
    return this.categories
  }

  create({ description, name }: CreateCategoryDTO): void {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(category)
  }


}








