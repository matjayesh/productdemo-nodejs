import * as My from "jm-ez-mysql";
import { Tables } from "../../../config/tables";
import { Utils } from "../../../helpers/utils";
import { Constants } from "../../../config/constants";

export class ProductsUtils {
// Get all product details
    public async getProductsDetails(limit, skip) {
        const newQ = My.initQuery();
        newQ.select(["p.id", "p.name", "p.price", "p.description"]);
        newQ.where("p.status NOT IN (?)", Constants.STATUS.DELETED);
        newQ.skip(skip);
        newQ.limit(limit);
        newQ.orderBy("p.updatedAt", "DESC");
        const productsData = await newQ.execute(`${Tables.PRODUCTS} AS p`, [], true);
        newQ.count('p.id');
        const totalRecordsResponse = await newQ.execute(`${Tables.PRODUCTS} AS p`);
        const totalRecords = totalRecordsResponse.length > 0 ? totalRecordsResponse[0].count : 0;
        return {
            productsData,
            totalRecords
        };
    }
}