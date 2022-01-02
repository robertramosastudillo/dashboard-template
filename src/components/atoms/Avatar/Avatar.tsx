import "./Avatar.scss";
import defaultAvatar from "../../../shared/assets/svgs/defaultAvatar.svg";

export const Avatar = () => {
  return (
    <div className="avatar__container">
      <img className="avatar" src={defaultAvatar} alt="Default Avatar" />
    </div>
  );
};
