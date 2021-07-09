import { getCustomRepository } from "typeorm";
import { CardsRepositories } from "../repositories/CardsRepositories";
import { ListsRepositories } from "../repositories/ListsRepositories";

class CreateCardService {
  async execute(name: string, description: string, ownerList: string) {
    const cardsRepositories = getCustomRepository(CardsRepositories);
    const listsRepositories = getCustomRepository(ListsRepositories);

    const listExists = await listsRepositories.findOne({ id: ownerList });
    if (!ownerList || !listExists) {
      throw new Error("Incorrect List");
    }

    if (!name || !description) {
      throw new Error("Please Fill All The Card");
    }

    const cardAlreadyExists = await cardsRepositories.findOne({ name });

    if (cardAlreadyExists) {
      throw new Error("List Already Exists");
    }

    const card = cardsRepositories.create({ name, description, ownerList });

    await cardsRepositories.save(card);

    return card;
  }
}

export { CreateCardService };
