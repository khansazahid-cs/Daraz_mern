import express from "express";
import orderController from "../controllers/order/add_order.js";

const router = express.Router();

router.post("/", orderController.create);
router.get("/", orderController.getAll);
router.get("/:id", orderController.getOne);
router.put("/:id", orderController.update);
router.delete("/:id", orderController.remove);

export default router;
