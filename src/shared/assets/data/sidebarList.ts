import { IconType } from "react-icons";
import { FaCalendarAlt } from "react-icons/fa";
import { MdDashboard, MdOutlineWork } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
import { IoSettingsSharp } from 'react-icons/io5';

export interface ISidebarList {
    id: number;
    label: string;
    Icon: IconType;
  }
  
  export const mainData: ISidebarList[] = [
    {
      id: 1,
      label: "Dashboard",
      Icon: MdDashboard,
    },
    {
      id: 2,
      label: "Calendario",
      Icon: FaCalendarAlt,
    },
    {
      id: 3,
      label: "Usuarios",
      Icon: BsFillPeopleFill,
    },
    {
      id: 4,
      label: "Departamento",
      Icon: MdOutlineWork,
    },
  ];

  export const otherData: ISidebarList[] = [
    {
      id: 1,
      label: "Soporte",
      Icon: BiSupport,
    },
    {
      id: 2,
      label: "Configuración",
      Icon: IoSettingsSharp,
    },
  ];