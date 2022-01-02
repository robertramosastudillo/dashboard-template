import "./SearchBox.scss";
import { FiSearch } from "react-icons/fi";
import { useRef } from "react";

export const SearchBox = () => {
  const el = useRef<HTMLInputElement>(null);
  const handleSearch = () => el.current!.focus();

  return (
    <div className="searchbox">
      <input className="searchbox-input" type="text" ref={el} />
      <FiSearch className="input-icon" onClick={handleSearch} />
    </div>
  );
};
