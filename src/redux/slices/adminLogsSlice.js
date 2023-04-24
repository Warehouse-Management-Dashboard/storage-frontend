import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as axios from "../../axios";

const name = "admin-logs";
const initialState = {
  success: false,
  count: 0,
  currentPage: 1,
  data: [],
  isLoading: false,
};

export const adminLogsSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAdminLogs.pending, (state, action) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(fetchAdminLogs.fulfilled, (_, action) => {
      return { ...action.payload, isLoading: false };
    });
  },
});

export default adminLogsSlice.reducer;

export const fetchAdminLogs = createAsyncThunk(`${name}/get`, async (props) => {
  const response = await axios.fetchAdminLogs(props);

  return response.data;
});
