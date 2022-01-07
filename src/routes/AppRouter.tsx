import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { NotFound } from "../pages/NotFound/NotFound";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="dashboard/*" element={<Dashboard />}></Route>
      <Route path="login" element={<Login />}></Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
