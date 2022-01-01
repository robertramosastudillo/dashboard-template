import './Avatar.scss'
import defaultAvatar from "../../../shared/assets/svgs/defaultAvatar.svg";

export const Avatar = () => {
  return <img className="avatar" src={defaultAvatar} alt="Default Avatar" />;
};
