import { Request, Response } from "express";
import { DeleteListService } from "../services/DeleteListService";

class DeleteListController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const updateListService = new DeleteListService();

    const list = await updateListService.execute(name);

    return res.json({ list, message: "delete successful" });
  }
}

export { DeleteListController };
