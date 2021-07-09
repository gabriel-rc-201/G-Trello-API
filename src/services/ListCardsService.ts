import { getCustomRepository } from "typeorm";
import { CardsRepositories } from "../repositories/CardsRepositories";

class ListCardsService {
  async execute() {
    const cardsRepositories = getCustomRepository(CardsRepositories);

    const cards = await cardsRepositories.find();

    return cards;
  }
}

export { ListCardsService };
