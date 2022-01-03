import { useRef } from "react";
import { mainData, otherData } from "../../../shared/assets/data/sidebarList";
import { MainLogo } from "../../atoms";
import { SidebarList } from "../../molecules";
import "./Sidebar.scss";

export const Sidebar = ({ isCollapsed, setIsCollapsed }: any) => {
  const el = useRef<HTMLDivElement>(null);
  const elSidebarShadow = useRef<HTMLDivElement>(null);

  console.log(isCollapsed);

  const collapsedMenu = () => setIsCollapsed(!isCollapsed);

  if (isCollapsed) {
    el.current?.classList.add("sidebar-active");
    elSidebarShadow.current?.classList.add("sidebar__shadow");
  } else {
    el.current?.classList.remove("sidebar-active");
    elSidebarShadow.current?.classList.remove("sidebar__shadow");
  }

  return (
    <>
      <div className="sidebar" ref={el}>
        <MainLogo />
        <SidebarList title="Main" items={mainData} />
        <SidebarList title="Other" items={otherData} />
      </div>
      <div ref={elSidebarShadow} onClick={collapsedMenu}></div>
    </>
  );
};
