import { Request, Response } from "express";
import { CreateListService } from "../services/CreateListService";

class CreateListController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const createListService = new CreateListService();

    const list = await createListService.execute(name);

    return res.json(list);
  }
}

export { CreateListController };
