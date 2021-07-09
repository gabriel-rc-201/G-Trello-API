import { Request, Response } from "express";
import { UpdateListService } from "../services/UpdateListService";

class UpdateListController {
  async handle(req: Request, res: Response) {
    const { oldName, newName } = req.body;
    const updateListService = new UpdateListService();

    const list = await updateListService.execute(oldName, newName);

    return res.json({ list, message: "update successful" });
  }
}

export { UpdateListController };
