import { mainData, otherData } from "../../../shared/assets/data/sidebarList";
import { MainLogo } from "../../atoms";
import { SidebarList } from "../../molecules";
import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <MainLogo />
      <SidebarList title="Main" items={mainData} />
      <SidebarList title="Other" items={otherData}/>
    </div>
  );
};
