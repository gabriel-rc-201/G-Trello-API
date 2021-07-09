import { Request, Response } from "express";
import { UpdateCardService } from "../services/UpdateCardService";

class UpdateCardController {
  async handle(req: Request, res: Response) {
    const {
      oldName,
      oldDescription,
      oldOwnerList,
      newName,
      newDescription,
      newList_id,
    } = req.body;
    const updateCardService = new UpdateCardService();

    const list = await updateCardService.execute({
      oldName,
      oldDescription,
      oldOwnerList,
      newName,
      newDescription,
      newOwnerList: newList_id,
    });

    return res.json({ list, message: "update successful" });
  }
}

export { UpdateCardController };
