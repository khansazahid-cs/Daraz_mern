import express from "express";
import productController from "../controllers/product/add_product.js";

const router = express.Router();

router.post("/", productController.create);
router.get("/", productController.getAll);
router.get("/:id", productController.getOne);
router.put("/:id", productController.update);
router.delete("/:id", productController.remove);

export default router;
