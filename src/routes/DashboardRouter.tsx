import { Routes,  Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Users } from "../pages/Users/Users";

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="users" element={<Users />}></Route>
    </Routes>
  );
};
