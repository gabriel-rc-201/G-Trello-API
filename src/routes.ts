import { Router } from "express";
import { CreateListController } from "./controllers/CreateListController";
import { UpdateListController } from "./controllers/UpdateListController";
import { DeleteListController } from "./controllers/DeleteListController";
import { ListListsController } from "./controllers/ListListsController";

import { CreateCardController } from "./controllers/CreateCardcontroller";

const router = Router();

const createListController = new CreateListController();
const updateListController = new UpdateListController();
const deleteListController = new DeleteListController();
const listListsController = new ListListsController();

const createCardController = new CreateCardController();

router.post("/lists", createListController.handle);
router.put("/lists", updateListController.handle);
router.delete("/lists", deleteListController.handle);
router.get("/lists", listListsController.handle);

router.post("/cards", createCardController.handle);

export { router };
