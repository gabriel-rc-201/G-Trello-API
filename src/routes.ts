import { Router } from "express";

import { CreateListController } from "./controllers/CreateListController";
import { UpdateListController } from "./controllers/UpdateListController";
import { DeleteListController } from "./controllers/DeleteListController";
import { ListListsController } from "./controllers/ListListsController";

import { CreateCardController } from "./controllers/CreateCardController";
import { UpdateCardController } from "./controllers/UpdateCardController";
import { DeleteCardController } from "./controllers/DeleteCardController";

const router = Router();

const createListController = new CreateListController();
const updateListController = new UpdateListController();
const deleteListController = new DeleteListController();
const listListsController = new ListListsController();

const createCardController = new CreateCardController();
const updateCardController = new UpdateCardController();
const deleteCardController = new DeleteCardController();

router.post("/lists", createListController.handle);
router.put("/lists", updateListController.handle);
router.delete("/lists", deleteListController.handle);
router.get("/lists", listListsController.handle);

router.post("/cards", createCardController.handle);
router.put("/cards", updateCardController.handle);
router.delete("/cards", deleteCardController.handle);

export { router };
