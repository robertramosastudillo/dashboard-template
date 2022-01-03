import "./ListItem.scss";
import { IconType } from "react-icons";

interface Props {
  id: number;
  label: string;
  Icon: IconType;
}

export const ListItem = ({ id, label, Icon }: Props) => {
  return (
    <div key={id} className="list__item">
      <Icon className="list__item-icon" />
      <span className="list__item-title">{label}</span>
    </div>
  );
};
