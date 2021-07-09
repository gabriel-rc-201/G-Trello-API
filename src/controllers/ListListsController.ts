import { Request, Response } from "express";
import { ListListsService } from "../services/ListListsService";

class ListListsController {
  async handle(req: Request, res: Response) {
    const listListService = new ListListsService();

    const list = await listListService.execute();

    return res.json({ list });
  }
}

export { ListListsController };
