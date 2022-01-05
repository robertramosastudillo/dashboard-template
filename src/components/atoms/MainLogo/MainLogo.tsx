import { useRef } from "react";
import { useSelector } from "react-redux";
import { uiSelector } from "../../../features/ui/uiSelector";
import "./MainLogo.scss";

export const MainLogo = () => {
  const el = useRef<HTMLHeadingElement>(null);

  const { isCollapsed } = useSelector(uiSelector);
  if (isCollapsed) {
    el.current?.classList.add("main__logo-title-active");
  } else {
    el.current?.classList.remove("main__logo-title-active");
  }
  return (
    <div className="main__logo">
      <h2 className="main__logo-title" ref={el}>WeHR</h2>
    </div>
  );
};
