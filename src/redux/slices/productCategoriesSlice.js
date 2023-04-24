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
    builder.addCase(createProductCategory.pending, (state, action) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(createProductCategory.fulfilled, (_, action) => {
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

export const fetchProductCategories = createAsyncThunk(
  `${name}/get`,
  async (props) => {
    //   const response = await axios.fetchProductCa(props);
    //   return response.data;
  }
);
