import { Request, Response } from "express";
import { CreateCardService } from "../services/CreateCardService";

class CreateCardController {
  async handle(req: Request, res: Response) {
    const { name, description, list_id } = req.body;
    const createListService = new CreateCardService();

    const card = await createListService.execute(name, description, list_id);

    return res.json(card);
  }
}

export { CreateCardController };
