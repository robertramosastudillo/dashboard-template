import { Avatar, Button, CheckBox, TextBox } from "../../atoms";
import "./FormLogin.scss";

export const FormLogin = () => {
  return (
    <div className="form__login">
      <div className="form__avatar-container">
        <div className="form__avatar">
          <Avatar />
        </div>
      </div>

      <h4 className="form__login-title">Iniciar Sesión</h4>

      <form className="form">
        <TextBox type="email" label="Correo electrónico" />
        <TextBox type="password" label="Contraseña" />
        <CheckBox />
        <Button />
      </form>
    </div>
  );
};
