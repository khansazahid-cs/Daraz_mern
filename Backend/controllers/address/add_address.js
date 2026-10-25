import Address from "../../models/address.js";
import { crudController } from "../crudController.js";

const addressController = crudController(Address);
export default addressController;
