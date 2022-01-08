import { IconType } from "react-icons";
import { BsFillPeopleFill, BsInboxesFill } from "react-icons/bs";
import { MdDashboard, MdCategory } from "react-icons/md";

export interface IRouteList {
  label: string;
  to: string;
  Icon: IconType;
}

export interface IAppRouteList {
  title: string;
  routelist: IRouteList[];
}

export const generalList: IAppRouteList = {
  title: "General",
  routelist: [
    {
      Icon: MdDashboard,
      label: "Dashboard",
      to: "",
    },
    {
      Icon: BsFillPeopleFill,
      label: "Usuarios",
      to: "users",
    },
    {
      Icon: BsInboxesFill,
      label: "Productos",
      to: "products",
    },
    {
      Icon: MdCategory,
      label: "Categorias",
      to: "categories",
    },
  ],
};

export const settingList: IAppRouteList = {
  title: "Configuración",
  routelist: [
    {
      Icon: MdDashboard,
      label: "Dashboard",
      to: "",
    },
    {
      Icon: BsFillPeopleFill,
      label: "Usuarios",
      to: "users",
    },
  ],
};
