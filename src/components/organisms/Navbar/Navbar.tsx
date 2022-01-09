import "./Navbar.scss";
import { CgMenu } from "react-icons/cg";
import { Avatar, MenuPopover, SearchBox } from "../../atoms";
import { useDispatch } from "react-redux";
import { collapsedMenu } from "../../../features/ui/uiSlice";

export const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="navbar-container">
      <CgMenu
        className="burger-menu"
        onClick={() => dispatch(collapsedMenu())}
      />
      <div className="navbar-container-items">
        <SearchBox />
        <div className="navbar-options">
          <div className="avatar__container">
            <Avatar />
          </div>
          <MenuPopover />
        </div>
      </div>
    </div>
  );
};
