import Notification from "../../models/notification.js";
import { crudController } from "../crudController.js";

const notificationController = crudController(Notification);
export default notificationController;
