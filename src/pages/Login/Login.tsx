import { FormLogin } from "../../components/molecules";
import "./Login.scss";

export const Login = () => {
  return (
    <div className="login">
      <div className="login__banner">
        <div className="login__banner-ilustration"></div>
      </div>
        <FormLogin />
    </div>
  );
};
