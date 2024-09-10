import React from "react";
import DashHeader from "./DashNav";
import Sidebar from "./Sidebar";
// import DashHeader from "@/components/dashHeader";
// import Sidebar from "@/components/sidebar";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen bg-[#010104] flex">
      <div className=" shadow-md ">
        <Sidebar />
      </div>
      <main className="flex flex-col w-full">
        <div className="py-2 shadow-md ">
          <DashHeader />
        </div>
        <div className="bg-[#010104] flex-grow  overflow-y-auto overflow-x-hidden">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
