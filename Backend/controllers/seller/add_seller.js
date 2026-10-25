import Seller from "../../models/seller.js";
import { crudController } from "../crudController.js";

const sellerController = crudController(Seller);
export default sellerController;
