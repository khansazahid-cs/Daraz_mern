import Order from "../../models/order.js";
import { crudController } from "../crudController.js";

const orderController = crudController(Order);
export default orderController;
