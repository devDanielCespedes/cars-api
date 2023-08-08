import fs from 'fs'
import { parse } from 'csv-parse'
import { ICategoriesRepository } from '@carsRepositories/ICategoriesRepository'

interface IImportCategory {
  name: string;
  description: string;
}

export class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }


  loadCategories({ path }: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(path)
      const categories: IImportCategory[] = []

      const parseFile = parse()
      stream.pipe(parseFile)

      parseFile.on("data", async (line) => {
        const [name, description] = line
        categories.push({
          name,
          description
        })
      }).on('end', () => {
        fs.promises.unlink(path)
        resolve(categories)
      }).on("error", (error) => {
        reject(error)
      })
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)
    categories.map(async (category) => {
      const { name, description } = category;

      const existCategory = this.categoriesRepository.findByName(name)

      if (!existCategory) {
        this.categoriesRepository.create({
          name,
          description
        })
      }
    })
  }
}