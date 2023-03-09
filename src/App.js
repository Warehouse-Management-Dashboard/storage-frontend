import React from "react";
import "./App.css";
import MainLayout from "./components/MainLayout";
import { Route, Routes } from "react-router-dom";
import ActivityLog from "./pages/ActivityLog";
import LogIn from "./pages/LogIn";
import Tables from "./pages/Tables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#3a57e8",
      light: "#4d67ea",
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
  console.log(theme);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<h1>Dashboard</h1>} />
            <Route path="tables" element={<Tables />} />
            <Route path="activity-log" element={<ActivityLog />} />
            <Route path="log-out" element={<h1>log-out</h1>} />
          </Route>
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
