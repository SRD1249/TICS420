import {create} from "apisauce";
import settings from "./config";

const apiClient = create({
  baseURL: settings.apiUrl,
  timeout: 10000,
  headers: {
    "Accept-Language": "es",
  },
});

export default apiClient;
