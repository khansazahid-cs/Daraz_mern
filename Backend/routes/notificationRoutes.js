import express from "express";
import notificationController from "../controllers/notification/add_notification.js";

const router = express.Router();

router.post("/", notificationController.create);
router.get("/", notificationController.getAll);
router.get("/:id", notificationController.getOne);
router.put("/:id", notificationController.update);
router.delete("/:id", notificationController.remove);

export default router;
