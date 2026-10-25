import express from "express";
import bannerController from "../controllers/banner/add_banner.js";

const router = express.Router();

router.post("/", bannerController.create);
router.get("/", bannerController.getAll);
router.get("/:id", bannerController.getOne);
router.put("/:id", bannerController.update);
router.delete("/:id", bannerController.remove);

export default router;
