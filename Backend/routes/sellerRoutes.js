import express from "express";
import sellerController from "../controllers/seller/add_seller.js";

const router = express.Router();

router.post("/", sellerController.create);
router.get("/", sellerController.getAll);
router.get("/:id", sellerController.getOne);
router.put("/:id", sellerController.update);
router.delete("/:id", sellerController.remove);

export default router;
