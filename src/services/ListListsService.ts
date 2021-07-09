import { getCustomRepository } from "typeorm";
import { ListsRepositories } from "../repositories/ListsRepositories";

class ListListsService {
  async execute() {
    const listsRepositories = getCustomRepository(ListsRepositories);

    const lists = await listsRepositories.find();

    return lists;
  }
}

export { ListListsService };
