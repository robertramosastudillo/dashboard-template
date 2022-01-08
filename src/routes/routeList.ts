import { IconType } from "react-icons";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";

export interface IRouteList {
  label: string;
  to: string;
  Icon: IconType;
}

export interface IAppRouteList {
  title: string;
  routelist: IRouteList[];
}

export const dashboardList: IAppRouteList = {
  title: "Dashboard",
  routelist: [
    {
      Icon: MdDashboard,
      label: "Dashboard",
      to: "dashboard",
    },
    {
      Icon: BsFillPeopleFill,
      label: "Usuarios",
      to: "dashbord/users",
    },
  ],
};

export const settingList: IAppRouteList = {
    title: "Configuración",
    routelist: [
      {
        Icon: MdDashboard,
        label: "Dashboard",
        to: "dashboard",
      },
      {
        Icon: BsFillPeopleFill,
        label: "Usuarios",
        to: "dashbord/users",
      },
    ],
  };
