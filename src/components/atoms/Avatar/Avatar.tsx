import styles from "./Avatar.module.scss";
import defaultAvatar from "../../../shared/assets/svgs/defaultAvatar.svg";

export const Avatar = () => {
  return <img className={styles.avatar} src={defaultAvatar} alt="Default Avatar" />;
};
