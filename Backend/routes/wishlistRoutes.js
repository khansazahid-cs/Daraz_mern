import express from "express";
import wishlistController from "../controllers/wishlist/add_wishlist.js";

const router = express.Router();

router.post("/", wishlistController.create);
router.get("/", wishlistController.getAll);
router.get("/:id", wishlistController.getOne);
router.put("/:id", wishlistController.update);
router.delete("/:id", wishlistController.remove);

export default router;
