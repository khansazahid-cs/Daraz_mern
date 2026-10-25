import express from "express";
import couponController from "../controllers/coupon/add_coupon.js";

const router = express.Router();

router.post("/", couponController.create);
router.get("/", couponController.getAll);
router.get("/:id", couponController.getOne);
router.put("/:id", couponController.update);
router.delete("/:id", couponController.remove);

export default router;
