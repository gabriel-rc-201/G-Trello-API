import { Request, Response } from "express";
import { DeleteCardService } from "../services/DeleteCardService";

class DeleteCardController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const updateCardService = new DeleteCardService();

    const card = await updateCardService.execute(name);

    return res.json({ card, message: "delete successful" });
  }
}

export { DeleteCardController };
