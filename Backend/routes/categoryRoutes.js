import express from "express";
import categoryController from "../controllers/category/add_category.js";

const router = express.Router();

router.post("/", categoryController.create);
router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getOne);
router.put("/:id", categoryController.update);
router.delete("/:id", categoryController.remove);

export default router;
