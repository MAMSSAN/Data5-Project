import { create } from "apisauce";
import authStorage from "../auth/storage";
const apiClient = create({
  baseURL: "http://10.130.227.186:8888/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

export default apiClient;
