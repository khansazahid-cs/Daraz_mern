import Coupon from "../../models/coupon.js";
import { crudController } from "../crudController.js";

const couponController = crudController(Coupon);
export default couponController;
