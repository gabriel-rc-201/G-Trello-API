import { Request, Response } from "express";
import { ListListsService } from "../services/ListListsService";

class ListListsController {
  async handle(req: Request, res: Response) {
    const updateListService = new ListListsService();

    const list = await updateListService.execute();

    return res.json({ list });
  }
}

export { ListListsController };
