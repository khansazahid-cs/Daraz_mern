import express from "express";
import cartController from "../controllers/cart/add_cart.js";

const router = express.Router();

router.post("/", cartController.create);
router.get("/", cartController.getAll);
router.get("/:id", cartController.getOne);
router.put("/:id", cartController.update);
router.delete("/:id", cartController.remove);

export default router;
