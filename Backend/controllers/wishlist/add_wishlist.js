import Wishlist from "../../models/wishlist.js";
import { crudController } from "../crudController.js";

const wishlistController = crudController(Wishlist);
export default wishlistController;
