import { Router } from "express";
import { CreateListController } from "./controllers/CreateListController";
import { UpdateListController } from "./controllers/UpdateListController";

const router = Router();

const createListController = new CreateListController();
const updateListController = new UpdateListController();

router.post("/lists", createListController.handle);
router.put("/lists", updateListController.handle);

export { router };
