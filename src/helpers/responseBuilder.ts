import * as l10n from "jm-ez-l10n";
import { Failure } from "./error";

export class ResponseBuilder {

  public static successMessage(msg: string): ResponseBuilder {
    const rb: ResponseBuilder = new ResponseBuilder();
    rb.code = 200;
    rb.msg = msg;
    return rb;
  }

  public static errorMessage(msg?: any): ResponseBuilder {
    const rb: ResponseBuilder = new ResponseBuilder();
    rb.code = 500;
    rb.error = msg != null ? msg : l10n.t("ERR_INTERNAL_SERVER");
    return rb;
  }

  public static badRequest(msg: any): ResponseBuilder {
    const rb: ResponseBuilder = new ResponseBuilder();
    rb.code = 400;
    rb.error = msg;
    return rb;
  }

  public static data(result: Json, msg?: string): ResponseBuilder {
    const rb: ResponseBuilder = new ResponseBuilder();
    rb.code = 200;
    if (result) {
      result.message = msg;
    }
    rb.result = result;
    rb.msg = msg || null;
    return rb;
  }

  public static error(err: Failure, msg?: string): ResponseBuilder {
    const rb: ResponseBuilder = new ResponseBuilder();
    if (err instanceof ResponseBuilder) {
      return err;
    }
    rb.code = 500;
    rb.error = err || l10n.t("ERR_INTERNAL_SERVER");
    rb.msg = msg || null;
    rb.description = err.description;
    rb.result = err ? l10n.t("ERR_THROW_BY_CODE") : l10n.t("ERR_INTERNAL_SERVER");
    return rb;
  }
  public code: number;
  public msg: string;
  public error: string;
  public status: string;
  public result: any;
  public description: string;
}
