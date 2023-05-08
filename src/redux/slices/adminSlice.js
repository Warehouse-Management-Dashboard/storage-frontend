import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as axios from "../../axios";

const name = "admin";
const initialState = {
  success: false,
  count: 0,
  currentPage: 1,
  data: [],
  isLoading: false,
};

export const adminSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAdmins.pending, (state, action) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(fetchAdmins.fulfilled, (_, action) => {
      return { ...action.payload, isLoading: false };
    });
  },
});

export default adminSlice.reducer;

export const fetchAdmins = createAsyncThunk(`${name}/get`, async (props) => {
  const response = await axios.fetchAdmins(props);

  return response.data;
});
