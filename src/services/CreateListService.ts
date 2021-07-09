import { getCustomRepository } from "typeorm";
import { ListsRepositories } from "../repositories/ListsRepositories";

class CreateListService {
  async execute(name: string) {
    const listsRepositories = getCustomRepository(ListsRepositories);

    if (!name) {
      throw new Error("List Name Incorrect");
    }

    const listAlreadyExists = await listsRepositories.findOne({ name });

    if (listAlreadyExists) {
      throw new Error("List Already Exists");
    }

    const list = listsRepositories.create({ name });

    await listsRepositories.save(list);

    return list;
  }
}

export { CreateListService };
