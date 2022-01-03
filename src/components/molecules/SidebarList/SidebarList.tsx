import "./SidebarList.scss";
import { ListItem } from "../../atoms";
import { IconType } from "react-icons/lib";
import { MdDashboard, MdOutlineWork } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

interface Props {
  id: number;
  label: string;
  Icon: IconType;
}

const items: Props[] = [
  {
    id: 1,
    label: "Dashboard",
    Icon: MdDashboard,
  },
  {
    id: 2,
    label: "Calendario",
    Icon: FaCalendarAlt,
  },
  {
    id: 3,
    label: "Usuarios",
    Icon: BsFillPeopleFill,
  },
  {
    id: 4,
    label: "Departamento",
    Icon: MdOutlineWork,
  },
];

export const SidebarList = () => {
  return (
    <div>
      {items.map(({ id, label, Icon }) => (
        <div key={id}>
          <ListItem id={id} label={label} Icon={Icon} />
        </div>
      ))}
    </div>
  );
};
