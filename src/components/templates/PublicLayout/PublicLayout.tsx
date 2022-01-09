import './PublicLayout.scss'
import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <div className="public__layout">
      <Outlet />
    </div>
  );
};
