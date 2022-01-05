import { Navbar, Sidebar } from "../";
import "./DashboardLayout.scss";

export const DashboardLayout = ({ children }: any) => {
  return (
    <div className="dashboard__layout">
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
};
