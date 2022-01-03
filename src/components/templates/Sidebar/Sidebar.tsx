import { MainLogo } from "../../atoms";
import { SidebarList } from "../../molecules";
import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <MainLogo />
      <SidebarList />
    </div>
  );
};
