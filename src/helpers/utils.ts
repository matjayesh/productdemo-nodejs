import { Constants } from "../config/constants";
import * as moment from "moment";
import * as dotenv from "dotenv";
dotenv.config();

export class Utils {
    public static getPagination = (totalRecords, limit, pageNo) => {
        const totalPages = Math.ceil(totalRecords / limit); 
        const pagination = {
            totalRecords: totalRecords,
            recordsPerPage: limit,
            totalPages: totalPages,
            currentPage: Number(pageNo)
        };
        return pagination;
    }
}
export default new Utils();