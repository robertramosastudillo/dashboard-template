import { useRef } from "react";
import { useSelector } from "react-redux";
import { uiSelector } from "../../../features/ui/uiSelector";
import styles from "./MainLogo.module.scss";

export const MainLogo = () => {
  const el = useRef<HTMLHeadingElement>(null);

  const { isCollapsed } = useSelector(uiSelector);
  if (isCollapsed) {
    el.current?.classList.add("main__logo_title_active");
  } else {
    el.current?.classList.remove("main__logo_title_active");
  }
  return (
    <div className={styles.main__logo}>
      <h2 className={styles.main__logo_title} ref={el}>WeHR</h2>
    </div>
  );
};
