import { getCustomRepository } from "typeorm";
import { CardsRepositories } from "../repositories/CardsRepositories";
import { ListsRepositories } from "../repositories/ListsRepositories";

interface IUpdateCard {
  oldName: string;
  oldDescription: string;
  oldOwnerList: string;
  newName: string;
  newDescription: string;
  newOwnerList: string;
}

class UpdateCardService {
  async execute({
    oldName,
    oldDescription,
    oldOwnerList,
    newName,
    newDescription,
    newOwnerList,
  }: IUpdateCard) {
    const cardsRepositories = getCustomRepository(CardsRepositories);
    const listsRepositories = getCustomRepository(ListsRepositories);

    const listExists = await listsRepositories.findOne({ id: newOwnerList });
    if (!newOwnerList || !listExists) {
      throw new Error("Incorrect List");
    }

    const cardAlreadyExists = await cardsRepositories.findOne({
      name: newName,
    });
    if (cardAlreadyExists && oldName !== newName) {
      throw new Error("List Already Exists");
    }

    const card = cardsRepositories.update(
      { name: oldName, description: oldDescription, ownerList: oldOwnerList },
      { name: newName, description: newDescription, ownerList: newOwnerList }
    );

    return card;
  }
}

export { UpdateCardService };
