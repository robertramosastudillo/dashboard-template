import { Content, Navbar, Sidebar } from "../../organisms";
import "./DashboardLayout.scss";

export const DashboardLayout = ({ children }: any) => {
  return (
    <div className="dashboard__layout">
      <div className="dashboard__layout-navbar">
        <Navbar />
      </div>
      <div className="dashboard__layout-sidebar">
        <Sidebar />
      </div>
      <div className="dashboard__layout-content"><Content children={children} /></div>
    </div>
  );
};
