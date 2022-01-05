import { useRef } from "react";
import "./SidebarList.scss";
import { ListItem } from "../../atoms";
import { ISidebarList } from "../../../shared/assets/data/sidebarList";
import { useSelector } from "react-redux";
import { uiSelector } from "../../../features/ui/uiSelector";

interface Props {
  title: string;
  items: ISidebarList[];
}

export const SidebarList = ({ title, items }: Props) => {
  const el = useRef<HTMLSpanElement>(null);

  const { isCollapsed } = useSelector(uiSelector);
  if (isCollapsed) {
    el.current?.classList.add("sidebar__list-title-active");
  } else {
    el.current?.classList.remove("sidebar__list-title-active");
  }

  return (
    <div className="sidebar__list">
      <span className="sidebar__list-title" ref={el}>{title}</span>

      {items.map(({ id, label, Icon }) => (
        <div key={id}>
          <ListItem id={id} label={label} Icon={Icon} />
        </div>
      ))}
    </div>
  );
};
