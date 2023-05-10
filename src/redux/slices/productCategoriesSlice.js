import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as axios from "../../axios";

const name = "product-categories";
const initialState = {
  success: false,
  count: 0,
  currentPage: 1,
  data: [],
  isLoading: false,
};

export const productCategoriesSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProductCategory.pending, (state, action) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(fetchProductCategory.fulfilled, (_, action) => {
      return { ...action.payload, isLoading: false };
    });
  },
});

export default productCategoriesSlice.reducer;

export const createProductCategory = createAsyncThunk(
  `${name}/post`,
  async (props) => {
    const response = await axios.createProductCategory(props);

    return response.data;
  }
);

export const fetchProductCategory = createAsyncThunk(
  `${name}/get`,
  async (props) => {
    const response = await axios.fetchProductCategory(props);
    return response.data;
  }
);

export const fetchProductCategoryDetail = createAsyncThunk(
  `${name}/detail`,
  async (id) => {
    const response = await axios.fetchProductCategoryDetail(id);
    return response.data;
  }
);
export const updateProductCategory = createAsyncThunk(
  `${name}/update`,
  async ({ id, name }) => {
    const response = await axios.updateProductCategory({ id, name });
    return response.data;
  }
);
export const deleteProductCategory = createAsyncThunk(
  `${name}/delete`,
  async (id) => {
    const response = await axios.deleteProductCategory(id);
    return response.data;
  }
);
