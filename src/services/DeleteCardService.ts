import { getCustomRepository } from "typeorm";
import { CardsRepositories } from "../repositories/CardsRepositories";

class DeleteCardService {
  async execute(name: string) {
    const cardsRepositories = getCustomRepository(CardsRepositories);

    if (!name) {
      throw new Error("List Name Incorrect");
    }

    const CardExist = await cardsRepositories.findOne({ name });

    if (!CardExist) {
      throw new Error("Card Does Not Exist");
    }

    const list = await cardsRepositories.delete({ name });

    return list;
  }
}

export { DeleteCardService };
