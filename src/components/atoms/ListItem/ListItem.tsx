import { useRef } from "react";
import { Link } from "react-router-dom";
import "./ListItem.scss";
import { IconType } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import { uiSelector } from "../../../features/ui/uiSelector";
import { collapsedMenu } from "../../../features/ui/uiSlice";

interface Props {
  label: string;
  Icon: IconType;
  to: string;
}

export const ListItem = ({ Icon, label, to }: Props) => {
  const dispatch = useDispatch();
  const el = useRef<HTMLAnchorElement>(null);
  const elTitle = useRef<HTMLSpanElement>(null);
  const { isCollapsed } = useSelector(uiSelector);

  const handleRedirectCollapsedMenu = () => isCollapsed && dispatch(collapsedMenu());

  if (isCollapsed) {
    el.current?.classList.add("list__item-active");
    elTitle.current?.classList.add("list__item-title-active");
  } else {
    el.current?.classList.remove("list__item-active");
    elTitle.current?.classList.remove("list__item-title-active");
  }

  return (
    <Link key={label} className="list__item" to={to} ref={el} onClick={handleRedirectCollapsedMenu}>
      <Icon className="list__item-icon" />
      <span className="list__item-title" ref={elTitle}>
        {label}
      </span>
    </Link>
  );
};
