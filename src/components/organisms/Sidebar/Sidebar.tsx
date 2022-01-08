import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collapsedMenu } from "../../../features/ui/uiSlice";
import { generalList, settingList } from "../../../routes/routeList";
import { MainLogo } from "../../atoms";
import { SidebarList } from "../../molecules";
import "./Sidebar.scss";
import { uiSelector } from "../../../features/ui/uiSelector";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { isCollapsed } = useSelector(uiSelector);

  const el = useRef<HTMLDivElement>(null);
  const elSidebarShadow = useRef<HTMLDivElement>(null);

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
        <SidebarList appRouteList={generalList} />
        <SidebarList appRouteList={settingList} />
      </div>
      <div
        ref={elSidebarShadow}
        onClick={() => dispatch(collapsedMenu())}
      ></div>
    </>
  );
};
