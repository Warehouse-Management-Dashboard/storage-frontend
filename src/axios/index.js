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

const limitDefaultValue = 1000;

// product
export const createProduct = (values) =>
  API.post(`/api/product/create`, values);
export const fetchProduct = ({
  limit = limitDefaultValue,
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
export const fetchProductDetail = (id) => API.get(`/api/product/${id}`);
export const deleteProduct = (id) => API.delete(`/api/product/delete/${id}`);
export const updateProduct = ({ id, values }) =>
  API.post(`/api/product/update/${id}`, values);

// product category
export const createProductCategory = ({ name }) =>
  API.post("/api/product-category/create", { name });
export const updateProductCategory = ({ id, name }) =>
  API.put(`/api/product-category/update/${id}`, {
    name: name,
  });
export const deleteProductCategory = (id) =>
  API.delete(`/api/product-category/delete/${id}`);
export const fetchProductCategory = ({ limit = limitDefaultValue, offset }) =>
  API.get(`/api/product-category`, {
    params: {
      ...(limit ? { limit: limit } : {}),
      ...(offset ? { offset: offset } : {}),
    },
  });
export const fetchProductCategoryDetail = (id) =>
  API.get(`/api/product-category/${id}`);

// admin logs
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

// overview
export const fetchOverview = () => API.get(`/api/overview/`);

// sell Product
export const sellProduct = (values) => API.post(`/api/product/sell`, values);

// admins
export const fetchAdmins = () => API.get(`/api/admin`);
