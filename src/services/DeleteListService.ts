import { getCustomRepository } from "typeorm";
import { ListsRepositories } from "../repositories/ListsRepositories";

class DeleteListService {
  async execute(name: string) {
    const listsRepositories = getCustomRepository(ListsRepositories);

    if (!name) {
      throw new Error("List Name Incorrect");
    }

    const lisExist = await listsRepositories.findOne({ name });

    if (!lisExist) {
      throw new Error("List Does Not Exist");
    }

    const list = await listsRepositories.delete({ name });

    return list;
  }
}

export { DeleteListService };
