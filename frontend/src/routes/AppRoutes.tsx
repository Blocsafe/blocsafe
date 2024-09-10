import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import Layout from "@/components/Layout";

const AppRoutes = () => {
  useEffect(() => {}, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={"Not Found"} />
        <Route path="/dashboard" element={<Layout />}>
          <Route path="/dashboard/" />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
