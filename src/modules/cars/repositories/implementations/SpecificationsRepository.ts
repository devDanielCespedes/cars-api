import { Specification } from "@carsModel/Specification";
import { CreateSpecificationDTO, ISpecificationsRepository } from "@carsRepositories/ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = []
  }

  create({ description, name }: CreateSpecificationDTO): void {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })

    this.specifications.push(specification)
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find((specification) => specification.name === name)
    return specification
  }
}