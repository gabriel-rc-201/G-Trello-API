import { getCustomRepository } from "typeorm";
import { ListsRepositories } from "../repositories/ListsRepositories";

class UpdateListService {
  async execute(oldName: string, newName: string) {
    const listsRepositories = getCustomRepository(ListsRepositories);

    if (!oldName) {
      throw new Error("List Name Incorrect");
    }

    const listDoesNotExist = await listsRepositories.findOne({ name: oldName });

    if (!listDoesNotExist) {
      throw new Error("List Does Not Exist");
    }

    const listAlreadyExists = await listsRepositories.findOne({
      name: newName,
    });

    if (listAlreadyExists) {
      throw new Error("List Already Exists");
    }

    const list = listsRepositories.update({ name: oldName }, { name: newName });

    return list;
  }
}

export { UpdateListService };
