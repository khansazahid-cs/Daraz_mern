import express from "express";
import reviewController from "../controllers/review/add_review.js";

const router = express.Router();

router.post("/", reviewController.create);
router.get("/", reviewController.getAll);
router.get("/:id", reviewController.getOne);
router.put("/:id", reviewController.update);
router.delete("/:id", reviewController.remove);

export default router;
