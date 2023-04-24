import axios from "axios";
import { getToken } from "../utils/getToken";

const API = axios.create({ baseURL: process.env.REACT_APP_SERVER_API_URL });
const token = getToken();

API.interceptors.request.use((req) => {
  if (token) {
    req.headers.Authorization = token;
  }

  return req;
});

export const createProduct = (props) => API.post(`/api/product/create`, props);
export const fetchProduct = ({
  limit,
  offset,
  name,
  productCategoryId,
  date,
  sortBy,
}) =>
  API.get(`/api/product/`, {
    params: {
      ...(limit ? { limit: limit } : {}),
      ...(offset ? { offset: offset } : {}),
      ...(name ? { name: name } : {}),
      ...(productCategoryId ? { productCategoryId: productCategoryId } : {}),
      ...(date ? { date: date } : {}),
      ...(sortBy ? { sortBy: sortBy } : {}),
    },
  });

export const createProductCategory = ({ name }) =>
  API.post("api/product-category/create", { name });

export const fetchAdminLogs = ({ limit, offset, action, adminId, date }) =>
  API.get("/api/admin-logs", {
    params: {
      ...(limit ? { limit: limit } : {}),
      ...(offset ? { offset: offset } : {}),
      ...(action ? { action: action } : {}),
      ...(adminId ? { adminId: adminId } : {}),
      ...(date ? { date: date } : {}),
    },
  });
