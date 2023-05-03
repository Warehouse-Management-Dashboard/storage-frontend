import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import productCategoriesSlice from "./slices/productCategoriesSlice";
import adminLogsSlice from "./slices/adminLogsSlice";
import overviewSlice from "./slices/overviewSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    productCategory: productCategoriesSlice,
    adminLogs: adminLogsSlice,
    overviews: overviewSlice,
  },
});
