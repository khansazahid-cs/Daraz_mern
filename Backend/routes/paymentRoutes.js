import express from "express";
import paymentController from "../controllers/payment/add_payment.js";

const router = express.Router();

router.post("/", paymentController.create);
router.get("/", paymentController.getAll);
router.get("/:id", paymentController.getOne);
router.put("/:id", paymentController.update);
router.delete("/:id", paymentController.remove);

export default router;
