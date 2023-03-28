import React from "react";
import "./App.css";
import MainLayout from "./components/MainLayout";
import { Route, Routes } from "react-router-dom";
import ActivityLog from "./pages/ActivityLog";
import LogIn from "./pages/LogIn";
import Tables from "./pages/Tables";
import Dashboard from "./pages/Dashboard";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import SellProduct from "./pages/SellProduct";
import Category from "./pages/Category";
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3a57e8",
      light: "#4d67ea",
    },
    secondary: {
      main: grey[600],
    },
    text: {
      primary: "#8a92a6",
      secondary: "#8a92a6",
      disabled: "#5f636d",
    },
    action: {
      active: "#adb5bd",
    },
    background: {
      default: "#222738",
      paper: "#222738",
    },
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="tables" element={<Tables />} />
            <Route path="activity-log" element={<ActivityLog />} />
            <Route path="sell-product" element={<SellProduct />} />
            <Route path="category" element={<Category />} />
          </Route>
          <Route path="log-out" element={<LogIn />} />

          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
