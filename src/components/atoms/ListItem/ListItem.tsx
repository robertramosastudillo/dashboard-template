import { useRef } from "react";
import "./ListItem.scss";
import { IconType } from "react-icons";
import { useSelector } from "react-redux";
import { uiSelector } from "../../../features/ui/uiSelector";

interface Props {
  label: string;
  Icon: IconType;
  to: string;
}

export const ListItem = ({ Icon, label, to }: Props) => {

  const el = useRef<HTMLDivElement>(null);
  const elTitle = useRef<HTMLDivElement>(null);
  const { isCollapsed } = useSelector(uiSelector);

  if (isCollapsed) {
    el.current?.classList.add("list__item-active");
    elTitle.current?.classList.add("list__item-title-active");
  } else {
    el.current?.classList.remove("list__item-active");
    elTitle.current?.classList.remove("list__item-title-active");
  }

  return (
    <div key={label} className="list__item" ref={el}>
      <Icon className="list__item-icon" />
      <span className="list__item-title" ref={elTitle}>{label}</span>
    </div>
  );
};
