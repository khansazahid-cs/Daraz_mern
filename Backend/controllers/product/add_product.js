import Product from "../../models/product.js";
import { crudController } from "../crudController.js";

const productController = crudController(Product);
export default productController;
