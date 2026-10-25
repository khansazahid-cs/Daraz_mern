import express from "express";
import addressController from "../controllers/address/add_address.js";

const router = express.Router();

router.post("/", addressController.create);
router.get("/", addressController.getAll);
router.get("/:id", addressController.getOne);
router.put("/:id", addressController.update);
router.delete("/:id", addressController.remove);

export default router;
