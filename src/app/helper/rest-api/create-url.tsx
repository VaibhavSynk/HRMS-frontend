import { APIUrl, BaseUrl } from "./url-schema"

export const CreateUrl = (endpoint: any) => {
    return BaseUrl + APIUrl + endpoint;
}