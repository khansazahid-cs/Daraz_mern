import Banner from "../../models/banner.js";
import { crudController } from "../crudController.js";

const bannerController = crudController(Banner);
export default bannerController;
