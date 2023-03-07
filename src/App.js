import React from "react";
import "./App.css";
import MainLayout from "./components/MainLayout";
import { Route, Routes } from "react-router-dom";
import ActivityLog from "./pages/ActivityLog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<h1>Dashboard</h1>} />
          <Route path="tables" element={<h1>Table</h1>} />
          <Route path="activity-log" element={<ActivityLog />} />
          <Route path="log-out" element={<h1>log-out</h1>} />
        </Route>
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;
