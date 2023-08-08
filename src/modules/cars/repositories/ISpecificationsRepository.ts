import { Specification } from "@carsModel/Specification"

export interface CreateSpecificationDTO {
  name: string
  description: string
}

export interface ISpecificationsRepository {
  create({ description, name }: CreateSpecificationDTO): void
  findByName(name: string): Specification
}