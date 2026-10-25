import Payment from "../../models/payment.js";
import { crudController } from "../crudController.js";

const paymentController = crudController(Payment);
export default paymentController;
