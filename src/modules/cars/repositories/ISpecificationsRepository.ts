import { Specification } from "../model/Spefication";

interface ISpecificationRepositoryDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ISpecificationRepositoryDTO);
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ISpecificationRepositoryDTO };
