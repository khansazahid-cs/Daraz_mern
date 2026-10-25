import Cart from "../../models/cart.js";
import { crudController } from "../crudController.js";

const cartController = crudController(Cart);
export default cartController;
