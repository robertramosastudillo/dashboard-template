import "./Navbar.scss";
import { CgMenu } from "react-icons/cg";
import { MenuPopover, SearchBox } from "../../atoms";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <CgMenu className="burger-menu" />
      <div className="navbar-container-items">
        <SearchBox />
        <div className="options">
          <MenuPopover />
        </div>
      </div>
      {/* <Avatar/> */}
    </div>
  );
};
