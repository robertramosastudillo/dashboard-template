import { Outlet } from "react-router-dom";
import { Content, Navbar, Sidebar } from "../../organisms";
import "./DashboardLayout.scss";

export const DashboardLayout = () => {
  return (
    <div className="dashboard__layout">
      <div className="dashboard__layout-navbar">
        <Navbar />
      </div>
      <div className="dashboard__layout-sidebar">
        <Sidebar />
      </div>
      <div className="dashboard__layout-content">
        <Content>
          <Outlet />
        </Content>
      </div>
    </div>
  );
};
