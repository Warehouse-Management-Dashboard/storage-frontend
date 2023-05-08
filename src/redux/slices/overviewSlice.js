import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as axios from "../../axios";

const name = "overview";
const initialState = {
  success: false,
  count: 0,
  currentPage: 1,
  data: [],
  isLoading: true,
};

export const overviewSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchOverview.pending, (state, action) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(fetchOverview.fulfilled, (_, action) => {
      return { ...action.payload, isLoading: false };
    });
  },
});

export default overviewSlice.reducer;

export const fetchOverview = createAsyncThunk(`${name}/get`, async (props) => {
  const response = await axios.fetchOverview(props);

  return response.data;
});
