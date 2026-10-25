import Category from "../../models/category.js";
import { crudController } from "../crudController.js";

const categoryController = crudController(Category);
export default categoryController;
