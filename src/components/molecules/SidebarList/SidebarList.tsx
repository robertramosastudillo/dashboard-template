import { useRef } from "react";
import "./SidebarList.scss";
import { ListItem } from "../../atoms";
import { useSelector } from "react-redux";
import { uiSelector } from "../../../features/ui/uiSelector";
import { IAppRouteList } from "../../../routes/routeList";

interface Props {
  appRouteList: IAppRouteList;
}

export const SidebarList = ({ appRouteList }: Props) => {
  const { title, routelist } = appRouteList;

  const el = useRef<HTMLSpanElement>(null);

  const { isCollapsed } = useSelector(uiSelector);
  if (isCollapsed) {
    el.current?.classList.add("sidebar__list-title-active");
  } else {
    el.current?.classList.remove("sidebar__list-title-active");
  }

  return (
    <div className="sidebar__list">
      <span className="sidebar__list-title" ref={el}>
        {title}
      </span>

      {routelist.map(({ Icon, label, to }) => (
        <div key={label}>
          <ListItem label={label} Icon={Icon} to={to} />
        </div>
      ))}
    </div>
  );
};
