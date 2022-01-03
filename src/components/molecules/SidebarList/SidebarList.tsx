import "./SidebarList.scss";
import { ListItem } from "../../atoms";
import { ISidebarList } from "../../../shared/assets/data/sidebarList";

interface Props {
  title: string;
  items: ISidebarList[];
}

export const SidebarList = ({ title, items }: Props) => {
  return (
    <div className="sidebar__list">
      <span className="sidebar__list-title">{title}</span>

      {items.map(({ id, label, Icon }) => (
        <div key={id}>
          <ListItem id={id} label={label} Icon={Icon} />
        </div>
      ))}
    </div>
  );
};
