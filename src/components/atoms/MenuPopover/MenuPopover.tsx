import "./MenuPopover.scss";
import { FiChevronDown } from "react-icons/fi";
import { useRef, useState } from "react";

const options = [
  "Inicio",
  "Perfil",
  "Configuración",
  "Cerrar sesión",
];

export const MenuPopover = () => {
  const el = useRef<HTMLUListElement>(null);
  const [hasClassActive, setHasClassActive] = useState<boolean>(false);

  const handleOpenPopover = () => {
    if (hasClassActive) {
      el.current!.classList.remove("popover__menu-active");
      setHasClassActive(false);
    } else {
      el.current!.classList.add("popover__menu-active");
      setHasClassActive(true);
    }
  };

  return (
    <div className="popover">
      <div className="popover__title" onClick={handleOpenPopover}>
        <span className="title">Robert Andres</span>
        <FiChevronDown className="arrow-down" />
      </div>
      <ul className="popover__menu" ref={el}>
        {options.map((option) => (
          <li
            key={option}
            onClick={handleOpenPopover}
            className="popover__menu--list-item"
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
