import { Router } from "express";
import { ProductsController } from "./productsController";

const router: Router = Router();
const productsController = new ProductsController();


const getProducts = [
    productsController.getProductsDetails
]
router.get("/", getProducts);


export const ProductsRoutes: Router = router;