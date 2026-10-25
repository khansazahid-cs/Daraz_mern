import Review from "../../models/review.js";
import { crudController } from "../crudController.js";

const reviewController = crudController(Review);
export default reviewController;
