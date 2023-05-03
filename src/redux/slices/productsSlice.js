import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as axios from "../../axios";

const name = "products";
const initialState = {
  success: false,
  count: 0,
  currentPage: 1,
  data: [],
  isLoading: false,
};

export const productsSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state, action) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(fetchProducts.fulfilled, (_, action) => {
      return { ...action.payload, isLoading: false };
    });
  },
});

export default productsSlice.reducer;

export const createProducts = createAsyncThunk(
  `${name}/post`,
  async (props) => {
    const response = await axios.createProduct(props);

    return response.data;
  }
);

export const updateProducts = createAsyncThunk(
  `${name}/update`,
  async ({ id, values }) => {
    const response = await axios.updateProduct({ id, values });

    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(`${name}/delete`, async (id) => {
  const response = await axios.deleteProduct(id);

  return response.data;
});

export const fetchProducts = createAsyncThunk(`${name}/get`, async (props) => {
  const response = await axios.fetchProduct(props);

  return response.data;
});

export const fetchProductDetail = createAsyncThunk(
  `${name}/detail`,
  async (id) => {
    const response = await axios.fetchProductDetail(id);

    return response.data;
  }
);

export const sellProduct = createAsyncThunk(`${name}/post`, async (props) => {
  const response = await axios.sellProduct(props);

  return response.data;
});
