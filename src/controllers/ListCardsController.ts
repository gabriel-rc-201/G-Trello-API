import { Request, Response } from "express";
import { ListCardsService } from "../services/ListCardsService";

class ListCardsController {
  async handle(req: Request, res: Response) {
    const listCardService = new ListCardsService();

    const cards = await listCardService.execute();

    return res.json({ cards });
  }
}

export { ListCardsController };
