import "./Navbar.scss";
import { CgMenu } from "react-icons/cg";
import { SearchBox } from "../../atoms";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <CgMenu className="burger-menu" />
      <SearchBox />
      {/* <Avatar/> */}
    </div>
  );
};
