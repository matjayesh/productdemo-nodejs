import { ProductsUtils } from "./productsUtils";
import { ResponseBuilder } from "../../../helpers/responseBuilder";
import { Constants } from "../../../config/constants";
import { Utils } from "../../../helpers/utils";

export class ProductsController {
    private productsUtils: ProductsUtils = new ProductsUtils();

    public getProductsDetails = async (req, res) => {
        const { pageNo } = req.query;
        const limit: number = Constants.LIMIT;
        const skip = pageNo ? (pageNo - 1) * limit : 0;

        const productsDetails = await this.productsUtils.getProductsDetails(limit, skip);
        const pagination = Utils.getPagination(productsDetails.totalRecords, limit, pageNo);
        const response = ResponseBuilder.data(productsDetails);
        res.status(response.code).json({
            productsDetails: productsDetails.productsData,
            pagination
        });
    }
}