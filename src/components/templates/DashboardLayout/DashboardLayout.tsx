import { useState } from "react";
import { Navbar, Sidebar } from "../";
import "./DashboardLayout.scss";

export const DashboardLayout = ({ children }: any) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="dashboard__layout">
      <Navbar setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      {children}
    </div>
  );
};
